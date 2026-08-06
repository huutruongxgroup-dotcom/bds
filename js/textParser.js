/**
 * TextParser - Zero-Loss Extractor for .txt formatted text files and .json files
 */
const TextParser = {
  async parseFile(file) {
    const fileName = file.name;
    const text = await file.text();

    if (fileName.endsWith('.json')) {
      try {
        const jsonData = JSON.parse(text);
        let qList = Array.isArray(jsonData) ? jsonData : (jsonData.questions || []);
        return {
          fileName: fileName,
          topic: jsonData.topic || fileName.replace(/\.[^/.]+$/, ""),
          questions: qList.map(q => ({
            question: q.question || q.title || "Câu hỏi",
            options: q.options || ["A", "B", "C", "D"],
            correctAnswer: typeof q.correctAnswer === 'number' ? q.correctAnswer : 0,
            explanation: q.explanation || "Đáp án từ file JSON"
          }))
        };
      } catch (e) {
        throw new Error("File JSON không đúng định dạng.");
      }
    }

    // Text (.txt) zero-loss parsing
    const lines = text.split(/\r?\n/);
    const questions = [];

    let currentQ = "";
    let currentOpts = [];
    let currentCorrect = -1;

    const optRegex = /^\s*(\*?)\s*[\(\[]?\s*([A-E|a-e])\s*[\.\:\)\/\-\–]\s*(.+)/;
    const questionHeaderRegex = /^\s*(câu|câu hỏi|question|\d+[\.\:\)])\s*/i;

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const optMatch = trimmed.match(optRegex);
      if (optMatch) {
        const star = optMatch[1];
        const char = optMatch[2].toUpperCase();
        let content = optMatch[3].trim();
        const idx = char.charCodeAt(0) - 65;

        const isCorrectMark = star === '*' || /\[x\]|\(đúng\)|\[đúng\]|đáp án đúng/i.test(content);
        content = content.replace(/\[x\]|\(đúng\)|\[đúng\]|đáp án đúng/gi, "").trim();

        if (idx >= 0 && idx < 6) {
          currentOpts[idx] = content;
          if (isCorrectMark) {
            currentCorrect = idx;
          }
        }
      } else if (questionHeaderRegex.test(trimmed) || (currentOpts.length > 0)) {
        if (currentQ && currentOpts.filter(Boolean).length >= 2) {
          questions.push({
            question: currentQ,
            options: this.normalizeOptions(currentOpts),
            correctAnswer: currentCorrect >= 0 ? currentCorrect : 0,
            explanation: "Đáp án từ file Text."
          });
          currentOpts = [];
          currentCorrect = -1;
        }
        currentQ = trimmed.replace(/^\s*(câu|câu hỏi|question)?\s*\d*[\.\:\)]\s*/i, "").trim() || trimmed;
      } else {
        if (currentQ) {
          currentQ += " " + trimmed;
        } else {
          currentQ = trimmed;
        }
      }
    });

    if (currentQ && currentOpts.filter(Boolean).length >= 2) {
      questions.push({
        question: currentQ,
        options: this.normalizeOptions(currentOpts),
        correctAnswer: currentCorrect >= 0 ? currentCorrect : 0,
        explanation: "Đáp án từ file Text."
      });
    }

    return {
      fileName: fileName,
      topic: fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
      questions: questions
    };
  },

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
