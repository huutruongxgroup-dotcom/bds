Add-Type -AssemblyName System.IO.Compression.FileSystem

$files = Get-ChildItem "C:\Users\ADMIN\Downloads\bds\*.docx" | Sort-Object Name
Write-Output "Found $($files.Count) docx files in Downloads\bds"

$resultFiles = @()

foreach ($fileItem in $files) {
    Write-Output "Processing: $($fileItem.Name)..."
    $zip = [System.IO.Compression.ZipFile]::OpenRead($fileItem.FullName)
    $entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
    if (-not $entry) { $zip.Dispose(); continue }
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
    $xmlText = $reader.ReadToEnd()
    $reader.Close(); $stream.Close(); $zip.Dispose()

    [xml]$xmlDoc = $xmlText
    $ns = New-Object System.Xml.XmlNamespaceManager($xmlDoc.NameTable)
    $ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
    $paragraphs = $xmlDoc.SelectNodes("//w:p", $ns)

    $pObjects = @()
    foreach ($p in $paragraphs) {
        $runs = $p.SelectNodes("w:r", $ns)
        $text = ""
        $hasRed = $false
        foreach ($r in $runs) {
            $tNode = $r.SelectSingleNode("w:t", $ns)
            $tVal = if ($tNode) { $tNode.InnerText } else { "" }
            $text += $tVal

            $colorNode = $r.SelectSingleNode("w:rPr/w:color", $ns)
            $highlightNode = $r.SelectSingleNode("w:rPr/w:highlight", $ns)
            $shdNode = $r.SelectSingleNode("w:rPr/w:shd", $ns)

            $cVal = if ($colorNode) { $colorNode.GetAttribute("w:val") } else { "" }
            $hVal = if ($highlightNode) { $highlightNode.GetAttribute("w:val") } else { "" }
            $sVal = if ($shdNode) { $shdNode.GetAttribute("w:fill") } else { "" }

            if ($cVal -match "red|ff0000|darkred|maroon|[c-f][0-9a-f]{5}" -or $hVal -match "red" -or $sVal -match "red|ff0000") {
                $hasRed = $true
            }
            if ($cVal -and $cVal.Length -eq 6) {
                $rHex = [Convert]::ToInt32($cVal.Substring(0,2), 16)
                $gHex = [Convert]::ToInt32($cVal.Substring(2,2), 16)
                $bHex = [Convert]::ToInt32($cVal.Substring(4,2), 16)
                if ($rHex -ge 140 -and $gHex -le 135 -and $bHex -le 135 -and $rHex -gt ($gHex * 1.2)) {
                    $hasRed = $true
                }
            }
        }
        $trimmed = $text.Trim()
        if ($trimmed) {
            $pObjects += [PSCustomObject]@{ text = $trimmed; hasRed = $hasRed }
        }
    }

    $questions = @()
    $curQ = ""
    $curOpts = @("", "", "", "")
    $curCorrect = -1

    foreach ($pObj in $pObjects) {
        $text = $pObj.text
        $hasRed = $pObj.hasRed

        # Option regex A., B., C., D.
        if ($text -match "^\s*[\(\[]?\s*([A-E|a-e])\s*[\.\:\)\/\-\–]\s*(.+)") {
            $char = $Matches[1].ToUpper()
            $content = $Matches[2].Trim()
            $idx = [int][char]$char - 65
            if ($idx -ge 0 -and $idx -lt 6) {
                while ($curOpts.Count -le $idx) { $curOpts += "" }
                $curOpts[$idx] = $content
                if ($hasRed) { $curCorrect = $idx }
            }
        }
        elseif ($text -match "^\s*(câu|câu hỏi|question|\d+[\.\:\)])\s*" -or $curOpts[0] -ne "" -or $curOpts[1] -ne "") {
            if ($curQ -and ($curOpts | Where-Object { $_ -ne "" }).Count -ge 2) {
                $cleanOpts = @()
                for ($o = 0; $o -lt [Math]::Max(4, $curOpts.Count); $o++) {
                    if ($curOpts[$o] -and $curOpts[$o] -ne "") {
                        $cleanOpts += $curOpts[$o]
                    } else {
                        $cleanOpts += "Đáp án $([char](65 + $o))"
                    }
                }
                $questions += [PSCustomObject]@{
                    question = $curQ
                    options = $cleanOpts
                    correctAnswer = if ($curCorrect -ge 0) { $curCorrect } else { 0 }
                    explanation = "Đáp án màu đỏ trích xuất từ file gốc."
                }
                $curOpts = @("", "", "", "")
                $curCorrect = -1
            }
            $curQ = ($text -replace "^\s*(câu|câu hỏi|question)?\s*\d*[\.\:\)]\s*", "").Trim()
            if (-not $curQ) { $curQ = $text }
        }
        else {
            if ($curQ) { $curQ += "`n" + $text } else { $curQ = $text }
        }
    }

    if ($curQ -and ($curOpts | Where-Object { $_ -ne "" }).Count -ge 2) {
        $cleanOpts = @()
        for ($o = 0; $o -lt [Math]::Max(4, $curOpts.Count); $o++) {
            if ($curOpts[$o] -and $curOpts[$o] -ne "") {
                $cleanOpts += $curOpts[$o]
            } else {
                $cleanOpts += "Đáp án $([char](65 + $o))"
            }
        }
        $questions += [PSCustomObject]@{
            question = $curQ
            options = $cleanOpts
            correctAnswer = if ($curCorrect -ge 0) { $curCorrect } else { 0 }
            explanation = "Đáp án màu đỏ trích xuất từ file gốc."
        }
    }

    Write-Output " -> Extracted $($questions.Count) questions from $($fileItem.Name)"

    $topicTitle = $fileItem.BaseName -replace " done$", "" -replace " \(KTCS\)", "" -replace " \(1\)", ""
    $resultFiles += [PSCustomObject]@{
        fileName = $fileItem.Name
        topic = $topicTitle
        questions = $questions
    }
}

$json = $resultFiles | ConvertTo-Json -Depth 10
$jsContent = "/**`n * sampleData.js - Dữ Liệu 19 File Đề Thi Bất Động Sản Gốc do Người Dùng Tải Lên`n */`nconst SAMPLE_FILES_DATA = $json;`n"

[System.IO.File]::WriteAllText("C:\Users\ADMIN\.gemini\antigravity-ide\scratch\quiz-app\js\sampleData.js", $jsContent, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("C:\Users\ADMIN\.gemini\antigravity-ide\scratch\quiz-app\js\questionsData.js", $jsContent, [System.Text.Encoding]::UTF8)

Write-Output "Successfully parsed and saved $($resultFiles.Count) files into sampleData.js and questionsData.js!"