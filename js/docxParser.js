/**
 * DocxParser - Advanced Zero-Loss Question & Option Extractor for Word (.docx) Files
 */
const DocxParser = {
  /**
   * Helper: Determine if a color hex code or string represents a Red color
   */
  isRedColorValue(val) {
    if (!val) return false;
    val = val.trim().toUpperCase();
    if (val === 'RED' || val === 'FF0000' || val === 'DARKRED' || val === 'MAROON') return true;
    if (val.length === 6) {
      const r = parseInt(val.substring(0, 2), 16);
      const g = parseInt(val.substring(2, 4), 16);
      const b = parseInt(val.substring(4, 6), 16);
      if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
        // Red component is dominant and high (covers all shades of red: crimson, maroon, dark red, bright red)
        return (r >= 140 && g <= 135 && b <= 135 && r > g * 1.3);
      }
    }
    return false;
  },

  /**
   * Parse a Word (.docx) File object
   */
  async parseFile(file) {
    if (typeof JSZip === 'undefined') {
      throw new Error("JSZip library is missing!");
    }

    const zip = new JSZip();
    const zipContent = await zip.loadAsync(file);

    const docXmlFile = zipContent.file("word/document.xml");
    if (!docXmlFile) {
      throw new Error("Invalid Word file: word/document.xml not found.");
    }

    const xmlText = await docXmlFile.async("text");
    const domParser = new DOMParser();
    const xmlDoc = domParser.parseFromString(xmlText, "text/xml");

    return this.extractQuestionsFromDocXml(xmlDoc, file.name);
  },

  /**
   * Extract all questions and options without skipping any
   */
  extractQuestionsFromDocXml(xmlDoc, fileName) {
    const paragraphs = xmlDoc.getElementsByTagName("w:p");
    const pObjects = [];

    // Step 1: Pre-process all paragraphs into structured objects with text & color metadata
    for (let i = 0; i < paragraphs.length; i++) {
      const p = paragraphs[i];
      const runs = p.getElementsByTagName("w:r");
      let fullText = "";
      let hasRed = false;
      const runList = [];

      for (let r = 0; r < runs.length; r++) {
        const rText = (runs[r].getElementsByTagName("w:t")[0]?.textContent || "").replace(/\s+/g, " ");
        if (!rText) continue;

        let rRed = false;
        const rPr = runs[r].getElementsByTagName("w:rPr")[0];
        if (rPr) {
          const color = rPr.getElementsByTagName("w:color")[0];
          if (color) {
            const val = color.getAttribute("w:val") || color.getAttribute("w:color") || "";
            if (this.isRedColorValue(val)) rRed = true;
          }
          const highlight = rPr.getElementsByTagName("w:highlight")[0];
          if (highlight) {
            const hVal = (highlight.getAttribute("w:val") || "").toLowerCase();
            if (hVal === "red" || hVal === "darkred") rRed = true;
          }
          const shd = rPr.getElementsByTagName("w:shd")[0];
          if (shd) {
            const fill = shd.getAttribute("w:fill") || "";
            if (this.isRedColorValue(fill)) rRed = true;
          }
        }

        if (rRed) hasRed = true;
        fullText += rText;
        runList.push({ text: rText, isRed: rRed });
      }

      const trimmedText = fullText.trim();
      if (trimmedText) {
        pObjects.push({
          fullText: trimmedText,
          hasRed: hasRed,
          runList: runList
        });
      }
    }

    // Step 2: State Machine Parser to extract Question Blocks
    const parsedQuestions = [];
    let currentQuestionText = "";
    let currentOptions = [];
    let currentCorrectIndex = -1;
    let currentExplanation = "";

    // Regex patterns
    const optionPrefixRegex = /^\s*[\(\[]?\s*([A-E|a-e])\s*[\.\:\)\/\-\–]\s*(.+)/;
    const questionHeaderRegex = /^\s*(câu|câu hỏi|question|\d+[\.\:\)])\s*/i;
    const inlineOptionsRegex = /[\(\[]?\s*([A-E|a-e])\s*[\.\:\)\/\-\–]\s*([^A-E\.\:\)\/\-\–]+|.+?)(?=$|\s+[\(\[]?\s*[A-E][\.\:\)\/\-\–])/g;

    for (let i = 0; i < pObjects.length; i++) {
      const p = pObjects[i];
      const text = p.fullText;

      // Check if paragraph has multi-option in 1 line: e.g. "A. Apple   B. Banana   C. Cat   D. Dog"
      const inlineMatches = Array.from(text.matchAll(inlineOptionsRegex));

      if (inlineMatches.length >= 2) {
        // Multi-option line
        inlineMatches.forEach(m => {
          const char = m[1].toUpperCase();
          const content = m[2].trim();
          const optIdx = char.charCodeAt(0) - 65;

          if (optIdx >= 0 && optIdx < 6) {
            currentOptions[optIdx] = content;
            if (p.hasRed || this.isTextRedInRuns(p.runList, content)) {
              currentCorrectIndex = optIdx;
            }
          }
        });
      } else {
        // Single line check: Is it an Option (A., B., C., D.) or Question Title?
        const optMatch = text.match(optionPrefixRegex);

        if (optMatch) {
          const char = optMatch[1].toUpperCase();
          const content = optMatch[2].trim();
          const optIdx = char.charCodeAt(0) - 65;

          if (optIdx >= 0 && optIdx < 6) {
            currentOptions[optIdx] = content;
            if (p.hasRed || this.isTextRedInRuns(p.runList, content)) {
              currentCorrectIndex = optIdx;
            }
          }
        } else {
          // If paragraph is NOT an option line, check if it's a new question title or question continuation
          const isExplicitQHeader = questionHeaderRegex.test(text);

          if (isExplicitQHeader || (currentOptions.length > 0)) {
            // Save previous completed question if exists
            if (currentQuestionText && currentOptions.filter(Boolean).length >= 2) {
              parsedQuestions.push({
                question: currentQuestionText,
                options: this.normalizeOptions(currentOptions),
                correctAnswer: currentCorrectIndex >= 0 ? currentCorrectIndex : 0,
                explanation: currentExplanation || "Đáp án tô đỏ từ file Word."
              });

              currentOptions = [];
              currentCorrectIndex = -1;
              currentExplanation = "";
            }

            // Start new question
            currentQuestionText = text.replace(/^\s*(câu|câu hỏi|question)?\s*\d*[\.\:\)]\s*/i, "").trim() || text;
          } else {
            // Continuation of current question title (e.g. multi-paragraph question description)
            if (currentQuestionText) {
              currentQuestionText += "\n" + text;
            } else {
              currentQuestionText = text;
            }
          }
        }
      }
    }

    // Save final question block
    if (currentQuestionText && currentOptions.filter(Boolean).length >= 2) {
      parsedQuestions.push({
        question: currentQuestionText,
        options: this.normalizeOptions(currentOptions),
        correctAnswer: currentCorrectIndex >= 0 ? currentCorrectIndex : 0,
        explanation: currentExplanation || "Đáp án tô đỏ từ file Word."
      });
    }

    return {
      fileName: fileName,
      topic: fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
      questions: parsedQuestions
    };
  },

  /**
   * Helper: Check if specific text inside paragraph runs is red
   */
  isTextRedInRuns(runList, targetText) {
    if (!targetText) return false;
    for (let r = 0; r < runList.length; r++) {
      if (runList[r].isRed && targetText.includes(runList[r].text.trim())) {
        return true;
      }
    }
    return false;
  },

  /**
   * Ensure options array is nicely formatted (preserves 2 to 4+ options)
   */
  normalizeOptions(options) {
    const cleanOpts = options.filter(Boolean);
    const count = Math.max(4, cleanOpts.length);
    const res = [];
    for (let i = 0; i < count; i++) {
      res[i] = options[i] || `Đáp án ${String.fromCharCode(65 + i)}`;
    }
    return res;
  }
};
