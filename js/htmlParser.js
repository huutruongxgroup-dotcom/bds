/**
 * HTMLParser - Zero-Loss Question & Red-Color Answer Extractor for HTML Files
 */
const HtmlParser = {
  async parseFile(file) {
    const text = await file.text();
    const domParser = new DOMParser();
    const doc = domParser.parseFromString(text, "text/html");

    const questions = [];
    // Target all text container elements
    const elements = doc.querySelectorAll("p, div, li, tr, span, td, h1, h2, h3, h4");

    let currentQuestion = "";
    let currentOptions = [];
    let currentCorrectIndex = -1;

    const optionRegex = /^\s*[\(\[]?\s*([A-E|a-e])\s*[\.\:\)\/\-\–]\s*(.+)/;
    const questionHeaderRegex = /^\s*(câu|câu hỏi|question|\d+[\.\:\)])\s*/i;

    elements.forEach(el => {
      const elText = el.textContent.trim();
      if (!elText) return;

      const isRed = this.isElementRed(el);
      const optMatch = elText.match(optionRegex);

      if (optMatch) {
        const char = optMatch[1].toUpperCase();
        const content = optMatch[2].trim();
        const idx = char.charCodeAt(0) - 65;

        if (idx >= 0 && idx < 6) {
          currentOptions[idx] = content;
          if (isRed) {
            currentCorrectIndex = idx;
          }
        }
      } else if (questionHeaderRegex.test(elText) || (currentOptions.length > 0)) {
        if (currentQuestion && currentOptions.filter(Boolean).length >= 2) {
          questions.push({
            question: currentQuestion,
            options: this.normalizeOptions(currentOptions),
            correctAnswer: currentCorrectIndex >= 0 ? currentCorrectIndex : 0,
            explanation: "Đáp án màu đỏ trích xuất từ file HTML."
          });
          currentOptions = [];
          currentCorrectIndex = -1;
        }
        currentQuestion = elText.replace(/^\s*(câu|câu hỏi|question)?\s*\d*[\.\:\)]\s*/i, "").trim() || elText;
      }
    });

    if (currentQuestion && currentOptions.filter(Boolean).length >= 2) {
      questions.push({
        question: currentQuestion,
        options: this.normalizeOptions(currentOptions),
        correctAnswer: currentCorrectIndex >= 0 ? currentCorrectIndex : 0,
        explanation: "Đáp án màu đỏ trích xuất từ file HTML."
      });
    }

    return {
      fileName: file.name,
      topic: file.name.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
      questions: questions
    };
  },

  isElementRed(el) {
    const style = el.getAttribute("style") || "";
    const colorAttr = el.getAttribute("color") || "";
    const className = el.getAttribute("class") || "";
    const html = el.outerHTML || "";

    const redPattern = /color\s*:\s*(red|#ff[0-9a-f]{4}|#[c-f][0-9a-f]{5}|rgb\(\s*(1[4-9][0-9]|2[0-5][0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-3][0-9])\s*,\s*([0-9]|[1-9][0-9]|1[0-3][0-9])\s*\))/i;
    
    return redPattern.test(style) || 
           colorAttr.toLowerCase() === "red" || 
           /red|text-red|font-red/i.test(className) || 
           redPattern.test(html);
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
