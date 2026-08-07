/**
 * ExamEngine - Core State Manager, Random 100-Question Generator, Timer, Grading & Storage
 */
class ExamEngine {
  constructor() {
    this.questionBank = []; // Array of files { id, fileName, topic, enabled, questions }
    this.activeExam = null; // Active test state { id, questions, userAnswers, flagged, currentIndex, startTime, durationMinutes, mode, timerId, finished }
    this.examHistory = [];
    this.soundEnabled = true;

    this.loadFromStorage();
  }

  // --- STORAGE & PERSISTENCE ---
  loadFromStorage() {
    try {
      const savedBank = localStorage.getItem('quizmaster_bank');
      const masterBank = localStorage.getItem('quizmaster_master_bank');

      let parsedBank = null;
      if (savedBank) parsedBank = JSON.parse(savedBank);
      else if (masterBank) parsedBank = JSON.parse(masterBank);

      if (parsedBank && Array.isArray(parsedBank) && parsedBank.length > 0) {
        this.questionBank = parsedBank;
      } else if (typeof SAMPLE_FILES_DATA !== 'undefined' && SAMPLE_FILES_DATA.length > 0) {
        this.loadSampleFiles();
      }

      const savedHistory = localStorage.getItem('quizmaster_history');
      if (savedHistory) {
        this.examHistory = JSON.parse(savedHistory);
      }
    } catch (e) {
      console.warn("Storage load error:", e);
      if (typeof SAMPLE_FILES_DATA !== 'undefined' && SAMPLE_FILES_DATA.length > 0) {
        this.loadSampleFiles();
      }
    }
  }

  saveBankToStorage() {
    try {
      localStorage.setItem('quizmaster_bank', JSON.stringify(this.questionBank));
      // Auto backup as master bank if has 1+ files
      if (this.questionBank.length > 0) {
        localStorage.setItem('quizmaster_master_bank', JSON.stringify(this.questionBank));
      }
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  restorePermanentMasterBank() {
    try {
      const masterBank = localStorage.getItem('quizmaster_master_bank');
      if (masterBank) {
        this.questionBank = JSON.parse(masterBank);
        this.saveBankToStorage();
        return this.questionBank;
      }
    } catch (e) {
      console.warn("Restore error:", e);
    }
    return null;
  }

  // --- TOPIC LEARNING PROGRESS TRACKER ---
  getTopicProgressMap() {
    try {
      const saved = localStorage.getItem('quizmaster_topic_progress');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  }

  saveTopicProgressMap(map) {
    try {
      localStorage.setItem('quizmaster_topic_progress', JSON.stringify(map));
    } catch (e) {}
  }

  getTopicProgress(fileId) {
    const file = this.questionBank.find(f => f.id === fileId);
    if (!file || !file.questions || file.questions.length === 0) {
      return { answeredCount: 0, totalCount: 0, percent: 0, isCompleted: false };
    }

    const map = this.getTopicProgressMap();
    const fileProgress = map[fileId] || {};
    const answeredCount = Object.keys(fileProgress).length;
    const totalCount = file.questions.length;
    const percent = Math.min(100, Math.round((answeredCount / totalCount) * 100));
    const isCompleted = percent >= 100 || answeredCount >= totalCount;

    return { answeredCount, totalCount, percent, isCompleted };
  }

  recordQuestionAnswered(fileId, questionKey) {
    if (!fileId || !questionKey) return null;
    const map = this.getTopicProgressMap();
    if (!map[fileId]) map[fileId] = {};
    
    const wasAlreadyAnswered = map[fileId][questionKey] === true;
    map[fileId][questionKey] = true;
    this.saveTopicProgressMap(map);

    const progress = this.getTopicProgress(fileId);
    return { ...progress, justCompleted: !wasAlreadyAnswered && progress.isCompleted };
  }

  setTopicCompletedStatus(fileId, markCompleted = true) {
    const file = this.questionBank.find(f => f.id === fileId);
    if (!file) return;

    const map = this.getTopicProgressMap();
    if (markCompleted) {
      map[fileId] = {};
      file.questions.forEach((q, idx) => {
        const qKey = q.id || `q_${idx}_${(q.question || '').slice(0, 20)}`;
        map[fileId][qKey] = true;
      });
    } else {
      delete map[fileId];
    }
    this.saveTopicProgressMap(map);
  }

  resetAllTopicProgress() {
    localStorage.removeItem('quizmaster_topic_progress');
  }

  saveHistoryToStorage() {
    try {
      localStorage.setItem('quizmaster_history', JSON.stringify(this.examHistory));
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  // --- BANK MANAGEMENT ---
  loadSampleFiles() {
    this.questionBank = SAMPLE_FILES_DATA.map((file, idx) => ({
      id: `sample_file_${idx + 1}`,
      fileName: file.fileName,
      topic: file.topic,
      enabled: true,
      locked: true,
      questions: file.questions.map((q, qIdx) => ({
        ...q,
        id: `q_${idx + 1}_${qIdx + 1}`,
        sourceFile: file.fileName
      }))
    }));
    this.saveBankToStorage();
    return this.questionBank;
  }

  addFileToBank(parsedFileData, lockAfterUpload = true) {
    const fileId = `user_file_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
    const newFile = {
      id: fileId,
      fileName: parsedFileData.fileName,
      topic: parsedFileData.topic || parsedFileData.fileName,
      enabled: true,
      locked: lockAfterUpload !== false,
      questions: parsedFileData.questions.map((q, qIdx) => ({
        ...q,
        id: `${fileId}_${qIdx}`,
        sourceFile: parsedFileData.fileName
      }))
    };

    // Replace if exists with same name or push new
    const existingIdx = this.questionBank.findIndex(f => f.fileName === newFile.fileName);
    if (existingIdx >= 0) {
      this.questionBank[existingIdx] = newFile;
    } else {
      this.questionBank.push(newFile);
    }

    this.saveBankToStorage();
    return newFile;
  }

  toggleFileStatus(fileId, enabled) {
    const file = this.questionBank.find(f => f.id === fileId);
    if (file) {
      file.enabled = enabled;
      this.saveBankToStorage();
    }
  }

  toggleFileLock(fileId, lockedState) {
    const file = this.questionBank.find(f => f.id === fileId);
    if (file) {
      file.locked = lockedState !== undefined ? lockedState : !file.locked;
      this.saveBankToStorage();
    }
  }

  setAllFilesLock(lockedState = true) {
    this.questionBank.forEach(f => f.locked = lockedState);
    this.saveBankToStorage();
  }

  selectAllFiles(enabled = true) {
    this.questionBank.forEach(f => f.enabled = enabled);
    this.saveBankToStorage();
  }

  deleteFile(fileId) {
    const file = this.questionBank.find(f => f.id === fileId);
    if (file && file.locked) {
      throw new Error(`File "${file.topic}" đang bị khóa nội dung! Vui lòng mở khóa trước khi xóa.`);
    }
    this.questionBank = this.questionBank.filter(f => f.id !== fileId);
    this.saveBankToStorage();
  }

  clearBank(force = false) {
    if (!force) {
      const lockedCount = this.questionBank.filter(f => f.locked).length;
      if (lockedCount > 0) {
        throw new Error(`Có ${lockedCount} file đang bị khóa nội dung. Mở khóa tất cả trước khi xóa ngân hàng!`);
      }
    }
    this.questionBank = [];
    this.saveBankToStorage();
  }

  // --- QUALITY AUDIT & QUESTION EDITING ---
  auditQuestionBank() {
    const report = {
      totalFiles: this.questionBank.length,
      totalQuestions: 0,
      verifiedQuestions: 0,
      flaggedQuestions: [],
      duplicateQuestions: []
    };

    const seenQuestions = new Map();

    this.questionBank.forEach(file => {
      file.questions.forEach((q, idx) => {
        report.totalQuestions++;
        let isFlagged = false;
        let reason = [];

        // Check options count
        const validOpts = (q.options || []).filter(o => o && o.trim() !== "");
        if (validOpts.length < 2) {
          isFlagged = true;
          reason.push("Có ít hơn 2 đáp án khả dụng");
        }

        // Check default answer assumption
        if (q.explanation && q.explanation.includes("mặc định") || q.correctAnswer === undefined || q.correctAnswer < 0) {
          isFlagged = true;
          reason.push("Chưa tự động nhận diện đáp án màu đỏ (đang chọn mặc định câu A)");
        }

        // Check for duplicates
        const normalizedText = (q.question || "").toLowerCase().replace(/\s+/g, " ").trim();
        if (normalizedText.length > 10) {
          if (seenQuestions.has(normalizedText)) {
            const prev = seenQuestions.get(normalizedText);
            report.duplicateQuestions.push({
              question: q.question,
              file1: prev.fileName,
              file2: file.fileName
            });
          } else {
            seenQuestions.set(normalizedText, { fileName: file.fileName, index: idx });
          }
        }

        if (isFlagged) {
          report.flaggedQuestions.push({
            fileId: file.id,
            fileName: file.fileName,
            topic: file.topic,
            qIndex: idx,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            reasons: reason
          });
        } else {
          report.verifiedQuestions++;
        }
      });
    });

    return report;
  }

  updateQuestion(fileId, qIndex, updatedData) {
    const file = this.questionBank.find(f => f.id === fileId);
    if (!file) throw new Error("Không tìm thấy file đề thi");
    if (!file.questions[qIndex]) throw new Error("Không tìm thấy câu hỏi");

    file.questions[qIndex] = {
      ...file.questions[qIndex],
      ...updatedData
    };
    this.saveBankToStorage();
    return file.questions[qIndex];
  }

  getTotalAvailableQuestions() {
    return this.questionBank
      .filter(f => f.enabled)
      .reduce((sum, f) => sum + f.questions.length, 0);
  }

  // --- EXAM GENERATOR ---
  /**
   * Generate exam set (supports Random 100 or Topic Practice Mode keeping all original questions)
   */
  generateExam({ targetCount = 100, durationMinutes = 60, mode = 'exam', shuffleOptions = true, selectionType = 'random100', selectedFileId = 'all', keepOrder = false }) {
    let pool = [];

    let activeFiles = this.questionBank.filter(f => f.enabled);
    if (selectionType === 'topic' && selectedFileId !== 'all') {
      activeFiles = this.questionBank.filter(f => f.id === selectedFileId);
    }

    activeFiles.forEach(file => {
      file.questions.forEach(q => {
        pool.push({
          ...q,
          sourceFile: file.fileName
        });
      });
    });

    if (pool.length === 0) {
      throw new Error("Không tìm thấy câu hỏi nào trong chuyên đề được chọn. Hãy chọn một chuyên đề có câu hỏi!");
    }

    let selectedQuestions = [];

    if (selectionType === 'topic') {
      // In Topic mode: Keep ALL questions in the selected file/topic!
      selectedQuestions = [...pool];
      if (!keepOrder) {
        // Shuffle if keepOrder is false
        for (let i = selectedQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [selectedQuestions[i], selectedQuestions[j]] = [selectedQuestions[j], selectedQuestions[i]];
        }
      }
    } else {
      // In Random 100 mode: Shuffle pool and take targetCount questions
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      selectedQuestions = pool.slice(0, Math.min(targetCount, pool.length));
    }

    // Optionally shuffle options A, B, C, D for each question
    if (shuffleOptions) {
      selectedQuestions = selectedQuestions.map(q => {
        const optionPairs = q.options.map((optText, origIdx) => ({
          text: optText,
          isCorrect: origIdx === q.correctAnswer
        }));

        // Shuffle options
        for (let i = optionPairs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [optionPairs[i], optionPairs[j]] = [optionPairs[j], optionPairs[i]];
        }

        const newOptions = optionPairs.map(op => op.text);
        const newCorrectAnswer = optionPairs.findIndex(op => op.isCorrect);

        return {
          ...q,
          options: newOptions,
          correctAnswer: newCorrectAnswer
        };
      });
    }

    this.activeExam = {
      id: `exam_${Date.now()}`,
      questions: selectedQuestions,
      userAnswers: new Array(selectedQuestions.length).fill(-1),
      flagged: new Array(selectedQuestions.length).fill(false),
      currentIndex: 0,
      startTime: Date.now(),
      durationMinutes: parseInt(durationMinutes, 10),
      timeRemaining: parseInt(durationMinutes, 10) * 60,
      mode: mode,
      selectionType: selectionType,
      finished: false,
      scoreResult: null
    };

    return this.activeExam;
  }

  // --- ACTIVE EXAM INTERACTIONS ---
  setAnswer(questionIndex, optionIndex) {
    if (!this.activeExam || this.activeExam.finished) return null;
    this.activeExam.userAnswers[questionIndex] = optionIndex;

    const q = this.activeExam.questions[questionIndex];
    if (q) {
      const file = this.questionBank.find(f => f.id === q.fileId || f.fileName === q.sourceFile || f.topic === q.sourceFile);
      if (file) {
        const qKey = q.id || `q_${q.qIndex !== undefined ? q.qIndex : questionIndex}_${(q.question || '').slice(0, 20)}`;
        return this.recordQuestionAnswered(file.id, qKey);
      }
    }
    return null;
  }

  toggleFlag(questionIndex) {
    if (!this.activeExam) return;
    this.activeExam.flagged[questionIndex] = !this.activeExam.flagged[questionIndex];
    return this.activeExam.flagged[questionIndex];
  }

  getAnsweredCount() {
    if (!this.activeExam) return 0;
    return this.activeExam.userAnswers.filter(ans => ans !== -1).length;
  }

  // --- GRADING & FINISHING EXAM ---
  finishExam() {
    if (!this.activeExam || this.activeExam.finished) return this.activeExam?.scoreResult;

    this.activeExam.finished = true;
    const timeSpentSeconds = (this.activeExam.durationMinutes * 60) - Math.max(0, this.activeExam.timeRemaining);

    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const breakdown = this.activeExam.questions.map((q, idx) => {
      const userAns = this.activeExam.userAnswers[idx];
      const isCorrect = userAns === q.correctAnswer;
      const isUnanswered = userAns === -1;

      if (isCorrect) correctCount++;
      else if (isUnanswered) unansweredCount++;
      else incorrectCount++;

      return {
        questionIndex: idx,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        userAnswer: userAns,
        isCorrect: isCorrect,
        isUnanswered: isUnanswered,
        isFlagged: this.activeExam.flagged[idx],
        explanation: q.explanation,
        sourceFile: q.sourceFile
      };
    });

    const totalQ = this.activeExam.questions.length;
    const percentage = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;
    const passed = percentage >= 70; // 70% threshold

    const scoreResult = {
      examId: this.activeExam.id,
      timestamp: Date.now(),
      totalQuestions: totalQ,
      correctCount: correctCount,
      incorrectCount: incorrectCount,
      unansweredCount: unansweredCount,
      score: correctCount,
      percentage: percentage,
      passed: passed,
      timeSpentSeconds: timeSpentSeconds,
      mode: this.activeExam.mode,
      breakdown: breakdown
    };

    this.activeExam.scoreResult = scoreResult;

    // Save to history
    this.examHistory.unshift({
      id: scoreResult.examId,
      timestamp: scoreResult.timestamp,
      totalQuestions: scoreResult.totalQuestions,
      score: scoreResult.score,
      percentage: scoreResult.percentage,
      passed: scoreResult.passed,
      timeSpentSeconds: scoreResult.timeSpentSeconds,
      mode: scoreResult.mode
    });

    this.saveHistoryToStorage();
    return scoreResult;
  }

  clearHistory() {
    this.examHistory = [];
    this.saveHistoryToStorage();
  }
}
