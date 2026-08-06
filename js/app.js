/**
 * App.js - Main Application Controller & UI Renderer
 */
document.addEventListener("DOMContentLoaded", () => {
  const engine = new ExamEngine();
  let timerInterval = null;

  // --- AUDIO EFFECTS (Web Audio API) ---
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  function playSound(type) {
    if (!engine.soundEnabled) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'select') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, now); // D5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'warning') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {
      // Audio context policy
    }
  }

  // --- INITIALIZE ICONS ---
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- DOM ELEMENTS ---
  // Nav
  const tabBankBtn = document.getElementById("tabBankBtn");
  const tabExamBtn = document.getElementById("tabExamBtn");
  const tabResultBtn = document.getElementById("tabResultBtn");
  const tabHistoryBtn = document.getElementById("tabHistoryBtn");
  const tabSettingsBtn = document.getElementById("tabSettingsBtn");
  const soundToggleBtn = document.getElementById("soundToggleBtn");
  const soundIcon = document.getElementById("soundIcon");

  // Views
  const viewBank = document.getElementById("viewBank");
  const viewExam = document.getElementById("viewExam");
  const viewResult = document.getElementById("viewResult");
  const viewHistory = document.getElementById("viewHistory");
  const viewSettings = document.getElementById("viewSettings");

  // Bank Elements
  const fileListContainer = document.getElementById("fileListContainer");
  const fileCountBadge = document.getElementById("fileCountBadge");
  const badgeTotalQuestions = document.getElementById("badgeTotalQuestions");
  const selectAllFilesBtn = document.getElementById("selectAllFilesBtn");
  const deselectAllFilesBtn = document.getElementById("deselectAllFilesBtn");
  const totalQuestionsDisplay = document.getElementById("totalQuestionsDisplay");
  const activeTopicsDisplay = document.getElementById("activeTopicsDisplay");

  // Exam Config Elements
  const examConfigPanel = document.getElementById("examConfigPanel");
  const cfgSelectionType = document.getElementById("cfgSelectionType");
  const topicSelectContainer = document.getElementById("topicSelectContainer");
  const cfgTopicFile = document.getElementById("cfgTopicFile");
  const topicQuestionCountBadge = document.getElementById("topicQuestionCountBadge");
  const qCountContainer = document.getElementById("qCountContainer");
  const cfgQuestionCount = document.getElementById("cfgQuestionCount");
  const cfgTimeLimit = document.getElementById("cfgTimeLimit");
  const cfgExamMode = document.getElementById("cfgExamMode");
  const cfgKeepOrder = document.getElementById("cfgKeepOrder");
  const cfgShuffleOptions = document.getElementById("cfgShuffleOptions");
  const poolSummaryText = document.getElementById("poolSummaryText");
  const startExamBtn = document.getElementById("startExamBtn");

  // Active Test Elements
  const activeTestContainer = document.getElementById("activeTestContainer");
  const activeQuestionCounter = document.getElementById("activeQuestionCounter");
  const answeredCountBadge = document.getElementById("answeredCountBadge");
  const totalTestQuestionsBadge = document.getElementById("totalTestQuestionsBadge");
  const timerContainer = document.getElementById("timerContainer");
  const timerText = document.getElementById("timerText");

  // Question Display
  const qFileNameText = document.getElementById("qFileNameText");
  const qNumberPill = document.getElementById("qNumberPill");
  const questionTitleText = document.getElementById("questionTitleText");
  const practiceHintBox = document.getElementById("practiceHintBox");
  const practiceHintText = document.getElementById("practiceHintText");
  const optionsContainer = document.getElementById("optionsContainer");
  const prevQBtn = document.getElementById("prevQBtn");
  const nextQBtn = document.getElementById("nextQBtn");
  const flagQuestionBtn = document.getElementById("flagQuestionBtn");
  const flagIcon = document.getElementById("flagIcon");

  // Palette & Controls
  const gridPaletteContainer = document.getElementById("gridPaletteContainer");
  const paletteProgressText = document.getElementById("paletteProgressText");
  const togglePaletteBtn = document.getElementById("togglePaletteBtn");
  const paletteDrawer = document.getElementById("paletteDrawer");
  const submitExamTopBtn = document.getElementById("submitExamTopBtn");
  const submitExamBottomBtn = document.getElementById("submitExamBottomBtn");

  // Submit Modal
  const submitConfirmModal = document.getElementById("submitConfirmModal");
  const modalAnsweredText = document.getElementById("modalAnsweredText");
  const modalTotalText = document.getElementById("modalTotalText");
  const modalWarningText = document.getElementById("modalWarningText");
  const cancelSubmitBtn = document.getElementById("cancelSubmitBtn");
  const confirmSubmitBtn = document.getElementById("confirmSubmitBtn");

  // Preview Modal
  const previewModal = document.getElementById("previewModal");
  const previewModalTitle = document.getElementById("previewModalTitle");
  const previewModalSub = document.getElementById("previewModalSub");
  const previewModalBody = document.getElementById("previewModalBody");
  const closePreviewBtn = document.getElementById("closePreviewBtn");

  // Result Elements
  const noResultPlaceholder = document.getElementById("noResultPlaceholder");
  const resultContent = document.getElementById("resultContent");
  const resScoreText = document.getElementById("resScoreText");
  const resPercentBadge = document.getElementById("resPercentBadge");
  const resVerdictBadge = document.getElementById("resVerdictBadge");
  const resSubtext = document.getElementById("resSubtext");
  const resCountCorrect = document.getElementById("resCountCorrect");
  const resCountIncorrect = document.getElementById("resCountIncorrect");
  const resCountUnanswered = document.getElementById("resCountUnanswered");
  const resAccuracyRate = document.getElementById("resAccuracyRate");
  const reviewQuestionsContainer = document.getElementById("reviewQuestionsContainer");
  const reTestBtn = document.getElementById("reTestBtn");
  const exportPdfBtn = document.getElementById("exportPdfBtn");
  const goToExamNavBtn = document.getElementById("goToExamNavBtn");

  // Review Filter Buttons
  const filterReviewAll = document.getElementById("filterReviewAll");
  const filterReviewWrong = document.getElementById("filterReviewWrong");
  const filterReviewCorrect = document.getElementById("filterReviewCorrect");
  const filterReviewFlagged = document.getElementById("filterReviewFlagged");

  // History Elements
  const historyTableBody = document.getElementById("historyTableBody");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");

  // --- NAVIGATION VIEW SWITCHER ---
  function switchView(targetView) {
    [viewBank, viewExam, viewResult, viewHistory, viewSettings].forEach(v => v && v.classList.add("hidden"));
    [tabBankBtn, tabExamBtn, tabResultBtn, tabHistoryBtn, tabSettingsBtn].forEach(b => b && b.classList.remove("active"));

    if (targetView === 'bank') {
      viewBank.classList.remove("hidden");
      tabBankBtn.classList.add("active");
      renderBankFiles();
    } else if (targetView === 'exam') {
      viewExam.classList.remove("hidden");
      tabExamBtn.classList.add("active");
      updateExamConfigSummary();
    } else if (targetView === 'result') {
      viewResult.classList.remove("hidden");
      tabResultBtn.classList.add("active");
      renderExamResultView();
    } else if (targetView === 'history') {
      viewHistory.classList.remove("hidden");
      tabHistoryBtn.classList.add("active");
      renderHistoryTable();
    } else if (targetView === 'settings') {
      viewSettings.classList.remove("hidden");
      tabSettingsBtn.classList.add("active");
      renderSettingsPanel();
    }

    if (window.lucide) window.lucide.createIcons();
  }

  tabBankBtn.addEventListener("click", () => switchView('bank'));
  tabExamBtn.addEventListener("click", () => switchView('exam'));
  tabResultBtn.addEventListener("click", () => switchView('result'));
  tabHistoryBtn.addEventListener("click", () => switchView('history'));
  tabSettingsBtn.addEventListener("click", () => switchView('settings'));
  document.getElementById("navBrand").addEventListener("click", () => switchView('bank'));
  if (goToExamNavBtn) goToExamNavBtn.addEventListener("click", () => switchView('exam'));

  // Sound Toggle
  soundToggleBtn.addEventListener("click", () => {
    engine.soundEnabled = !engine.soundEnabled;
    soundIcon.setAttribute("data-lucide", engine.soundEnabled ? "volume-2" : "volume-x");
    if (window.lucide) window.lucide.createIcons();
  });

  // --- UPLOAD & LOCK FILE CONTROLLER ---
  const bankFileInput = document.getElementById("bankFileInput");
  const bankFolderInput = document.getElementById("bankFolderInput");
  const btnTriggerUpload = document.getElementById("btnTriggerUpload");
  const btnTriggerFolderUpload = document.getElementById("btnTriggerFolderUpload");
  const btnLockAllFiles = document.getElementById("btnLockAllFiles");
  const btnUnlockAllFiles = document.getElementById("btnUnlockAllFiles");
  const uploadDropZone = document.getElementById("uploadDropZone");
  const uploadStatusBanner = document.getElementById("uploadStatusBanner");
  const uploadStatusMsg = document.getElementById("uploadStatusMsg");
  const closeUploadStatusBtn = document.getElementById("closeUploadStatusBtn");
  const uploadProgressContainer = document.getElementById("uploadProgressContainer");
  const uploadProgressBar = document.getElementById("uploadProgressBar");
  const uploadProgressText = document.getElementById("uploadProgressText");
  const uploadProgressPercent = document.getElementById("uploadProgressPercent");

  if (btnTriggerUpload && bankFileInput) {
    btnTriggerUpload.addEventListener("click", () => bankFileInput.click());
    bankFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        processUploadedFileList(e.target.files);
        bankFileInput.value = "";
      }
    });
  }

  if (btnTriggerFolderUpload && bankFolderInput) {
    btnTriggerFolderUpload.addEventListener("click", () => bankFolderInput.click());
    bankFolderInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        processUploadedFileList(e.target.files);
        bankFolderInput.value = "";
      }
    });
  }

  // Drag & drop support
  if (uploadDropZone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadDropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadDropZone.classList.add("border-indigo-400", "bg-indigo-950/20");
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      uploadDropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadDropZone.classList.remove("border-indigo-400", "bg-indigo-950/20");
      }, false);
    });

    uploadDropZone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files && files.length > 0) {
        processUploadedFileList(files);
      }
    });
  }

  // Lock / Unlock All buttons
  if (btnLockAllFiles) {
    btnLockAllFiles.addEventListener("click", () => {
      engine.setAllFilesLock(true);
      renderBankFiles();
      if (typeof renderSettingsPanel === 'function') renderSettingsPanel();
      showUploadStatus("🔒 Tất cả chuyên đề đã được KHÓA nội dung bảo vệ!");
    });
  }

  if (btnUnlockAllFiles) {
    btnUnlockAllFiles.addEventListener("click", () => {
      engine.setAllFilesLock(false);
      renderBankFiles();
      if (typeof renderSettingsPanel === 'function') renderSettingsPanel();
      showUploadStatus("🔓 Đã MỞ KHÓA tất cả chuyên đề!");
    });
  }

  if (closeUploadStatusBtn) {
    closeUploadStatusBtn.addEventListener("click", () => {
      if (uploadStatusBanner) uploadStatusBanner.classList.add("hidden");
    });
  }

  function showUploadStatus(msg, isError = false) {
    if (!uploadStatusBanner || !uploadStatusMsg) return;
    uploadStatusMsg.textContent = msg;
    uploadStatusBanner.classList.remove("hidden", "bg-emerald-950/60", "border-emerald-500/50", "text-emerald-300", "bg-rose-950/60", "border-rose-500/50", "text-rose-300");
    if (isError) {
      uploadStatusBanner.classList.add("bg-rose-950/60", "border-rose-500/50", "text-rose-300");
    } else {
      uploadStatusBanner.classList.add("bg-emerald-950/60", "border-emerald-500/50", "text-emerald-300");
    }
  }

  async function processUploadedFileList(fileList) {
    // Filter supported files
    const validFiles = Array.from(fileList).filter(file => {
      const name = file.name.toLowerCase();
      return name.endsWith('.docx') || name.endsWith('.txt') || name.endsWith('.html') || name.endsWith('.htm') || name.endsWith('.json');
    });

    if (validFiles.length === 0) {
      playSound('warning');
      showUploadStatus(`❌ Không tìm thấy file hợp lệ nào (.docx, .txt, .html, .json).`, true);
      return;
    }

    if (uploadProgressContainer) uploadProgressContainer.classList.remove("hidden");

    let successCount = 0;
    let totalQuestionsAdded = 0;
    const errors = [];
    const totalFiles = validFiles.length;

    for (let i = 0; i < totalFiles; i++) {
      const file = validFiles[i];
      const percent = Math.round(((i + 1) / totalFiles) * 100);

      if (uploadProgressText) uploadProgressText.textContent = `Đang xử lý file (${i + 1}/${totalFiles}): ${file.name}`;
      if (uploadProgressPercent) uploadProgressPercent.textContent = `${percent}%`;
      if (uploadProgressBar) uploadProgressBar.style.width = `${percent}%`;

      // Allow UI tick
      await new Promise(r => setTimeout(r, 20));

      const lowerName = file.name.toLowerCase();

      try {
        let parsed = null;
        if (lowerName.endsWith('.docx')) {
          parsed = await DocxParser.parseFile(file);
        } else if (lowerName.endsWith('.html') || lowerName.endsWith('.htm')) {
          parsed = await HtmlParser.parseFile(file);
        } else if (lowerName.endsWith('.txt') || lowerName.endsWith('.json')) {
          parsed = await TextParser.parseFile(file);
        }

        if (parsed && parsed.questions && parsed.questions.length > 0) {
          // Add to engine and auto-lock content!
          engine.addFileToBank(parsed, true);
          successCount++;
          totalQuestionsAdded += parsed.questions.length;
        } else {
          errors.push(`${file.name}: Không trích xuất được câu hỏi`);
        }
      } catch (err) {
        errors.push(`${file.name}: ${err.message || 'Lỗi parser'}`);
      }
    }

    if (uploadProgressContainer) {
      setTimeout(() => uploadProgressContainer.classList.add("hidden"), 1000);
    }

    renderBankFiles();
    if (typeof renderSettingsPanel === 'function') renderSettingsPanel();

    if (successCount > 0) {
      playSound('success');
      showUploadStatus(`🎉 TẢI LÊN & KHÓA NỘI DUNG HÀNG LOẠT THÀNH CÔNG: ${successCount}/${totalFiles} file (Tổng cộng ${totalQuestionsAdded} câu hỏi đã nạp)!`);
    } else if (errors.length > 0) {
      playSound('warning');
      showUploadStatus(`❌ ${errors.join(" | ")}`, true);
    }
  }

  // --- BANK / TOPIC FILE MANAGEMENT ---
  function renderBankFiles() {
    const files = engine.questionBank;
    const totalQ = engine.getTotalAvailableQuestions();
    const activeCount = files.filter(f => f.enabled).length;

    fileCountBadge.textContent = `${activeCount}/${files.length}`;
    badgeTotalQuestions.textContent = totalQ;
    if (totalQuestionsDisplay) totalQuestionsDisplay.textContent = files.reduce((s, f) => s + f.questions.length, 0);
    if (activeTopicsDisplay) activeTopicsDisplay.textContent = activeCount;

    if (files.length === 0) {
      fileListContainer.innerHTML = `
        <div class="col-span-full py-12 text-center bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
          <i data-lucide="folder-open" class="w-12 h-12 text-slate-600 mx-auto"></i>
          <p class="text-sm text-slate-400 font-medium">Ngân hàng đề thi đang trống.</p>
          <p class="text-xs text-slate-500">Hãy kéo thả hoặc chọn file Word (.docx), TXT, HTML, JSON ở trên để nạp câu hỏi!</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // TOPIC CARDS with Lock & Delete support
    fileListContainer.innerHTML = files.map(file => `
      <div class="topic-card bg-slate-900/90 border ${file.enabled ? 'border-indigo-500/50 shadow-indigo-500/10 shadow-lg' : 'border-slate-800 opacity-60'} rounded-xl p-4 space-y-3 transition-all hover:border-indigo-400/60 relative group">
        <div class="flex items-start justify-between gap-2">
          <label class="flex items-start space-x-3 cursor-pointer min-w-0 flex-1">
            <input type="checkbox" data-fileid="${file.id}" class="file-toggle-cb mt-0.5 w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 bg-slate-800 border-slate-700 cursor-pointer flex-shrink-0" ${file.enabled ? 'checked' : ''} />
            <div class="min-w-0">
              <div class="flex items-center space-x-1.5 flex-wrap">
                <p class="font-bold text-sm ${file.enabled ? 'text-white' : 'text-slate-400'}">${file.topic}</p>
              </div>
              <p class="text-xs text-slate-500 truncate mt-0.5" title="${file.fileName}">${file.fileName}</p>
            </div>
          </label>
          <button data-fileid="${file.id}" class="btn-toggle-lock p-1.5 rounded-lg border transition-all ${file.locked !== false ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30' : 'bg-amber-500/20 border-amber-500/30 text-amber-300 hover:bg-amber-500/30'}" title="${file.locked !== false ? 'Đã khóa nội dung (Bấm để mở khóa)' : 'Chưa khóa (Bấm để khóa)'}">
            <i data-lucide="${file.locked !== false ? 'lock' : 'unlock'}" class="w-3.5 h-3.5"></i>
          </button>
        </div>
        <div class="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
          <span class="font-bold ${file.enabled ? 'text-indigo-400' : 'text-slate-600'} flex items-center space-x-1">
            <i data-lucide="help-circle" class="w-3.5 h-3.5"></i>
            <span>${file.questions.length} câu hỏi</span>
          </span>
          <div class="flex items-center space-x-2">
            ${file.locked === false ? `
              <button data-fileid="${file.id}" class="btn-delete-file text-rose-400 hover:text-rose-300 font-semibold text-xs p-1 transition-colors" title="Xóa file">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            ` : `
              <span class="text-[10px] text-indigo-300/70 font-semibold px-1.5 py-0.5 bg-indigo-500/10 rounded" title="Nội dung đã khóa">🔒 Đã khóa</span>
            `}
            <button data-fileid="${file.id}" class="btn-preview-file text-slate-400 hover:text-indigo-300 font-semibold underline text-xs">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();

    // Checkbox toggles
    document.querySelectorAll(".file-toggle-cb").forEach(cb => {
      cb.addEventListener("change", (e) => {
        engine.toggleFileStatus(e.target.dataset.fileid, e.target.checked);
        renderBankFiles();
      });
    });

    // Lock toggles
    document.querySelectorAll(".btn-toggle-lock").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const fileId = e.currentTarget.dataset.fileid;
        engine.toggleFileLock(fileId);
        renderBankFiles();
        if (typeof renderSettingsPanel === 'function') renderSettingsPanel();
      });
    });

    // Delete buttons
    document.querySelectorAll(".btn-delete-file").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const fileId = e.currentTarget.dataset.fileid;
        const file = engine.questionBank.find(f => f.id === fileId);
        if (file && confirm(`Xóa chuyên đề "${file.topic}" khỏi ngân hàng?`)) {
          try {
            engine.deleteFile(fileId);
            renderBankFiles();
            if (typeof renderSettingsPanel === 'function') renderSettingsPanel();
          } catch (err) {
            alert(err.message);
          }
        }
      });
    });

    // Preview buttons
    document.querySelectorAll(".btn-preview-file").forEach(btn => {
      btn.addEventListener("click", (e) => {
        openFilePreviewModal(e.currentTarget.dataset.fileid);
      });
    });
  }

  selectAllFilesBtn.addEventListener("click", () => {
    engine.selectAllFiles(true);
    renderBankFiles();
  });

  deselectAllFilesBtn.addEventListener("click", () => {
    engine.selectAllFiles(false);
    renderBankFiles();
  });

  // --- SETTINGS PANEL ---
  function renderSettingsPanel() {
    const settingsStats = document.getElementById('settingsStats');
    const settingsTopicSelect = document.getElementById('settingsTopicSelect');
    const files = engine.questionBank;
    const totalQ = files.reduce((s, f) => s + f.questions.length, 0);
    const activeFiles = files.filter(f => f.enabled);

    if (settingsStats) {
      const lockedCount = files.filter(f => f.locked !== false).length;
      settingsStats.innerHTML = `
        <div class="flex justify-between py-1 border-b border-slate-700/50"><span class="text-slate-400">Tổng chuyên đề</span><span class="font-bold text-white">${files.length}</span></div>
        <div class="flex justify-between py-1 border-b border-slate-700/50"><span class="text-slate-400">Đang bật</span><span class="font-bold text-emerald-400">${activeFiles.length}</span></div>
        <div class="flex justify-between py-1 border-b border-slate-700/50"><span class="text-slate-400">Đã khóa nội dung</span><span class="font-bold text-indigo-300">🔒 ${lockedCount} / ${files.length}</span></div>
        <div class="flex justify-between py-1 border-b border-slate-700/50"><span class="text-slate-400">Tổng câu hỏi</span><span class="font-bold text-indigo-300">${totalQ}</span></div>
        <div class="flex justify-between py-1"><span class="text-slate-400">Câu hỏi khả dụng</span><span class="font-bold text-indigo-300">${engine.getTotalAvailableQuestions()}</span></div>
        ${files.map(f => `<div class="flex justify-between items-center py-1 border-t border-slate-800"><span class="text-slate-500 truncate max-w-[150px]" title="${f.topic}">${f.locked !== false ? '🔒' : '🔓'} ${f.topic.substring(0,25)}${f.topic.length>25?'…':''}</span><span class="font-bold ${f.enabled?'text-emerald-400':'text-slate-600'}">${f.questions.length}c</span></div>`).join('')}
      `;
    }

    if (settingsTopicSelect) {
      settingsTopicSelect.innerHTML = `<option value="">-- Chọn chuyên đề --</option>` +
        files.map(f => `<option value="${f.id}">${f.topic} (${f.questions.length} câu)</option>`).join('');
      settingsTopicSelect.onchange = renderSettingsTopicDetail;
    }
  }

  function renderSettingsTopicDetail() {
    const settingsTopicSelect = document.getElementById('settingsTopicSelect');
    const settingsTopicDetail = document.getElementById('settingsTopicDetail');
    const fileId = settingsTopicSelect.value;
    if (!fileId) {
      settingsTopicDetail.innerHTML = `<div class="py-16 text-center"><i data-lucide="file-search" class="w-12 h-12 mx-auto mb-3 text-slate-700"></i><p class="text-sm text-slate-500">Chọn một chuyên đề để kiểm tra và đối soát nội dung</p></div>`;
      if (window.lucide) window.lucide.createIcons();
      return;
    }
    const file = engine.questionBank.find(f => f.id === fileId);
    if (!file) return;

    settingsTopicDetail.innerHTML = `
      <div class="text-xs text-slate-400 mb-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700 flex items-center justify-between flex-wrap gap-2">
        <div>
          <p class="font-bold text-white">${file.topic}</p>
          <p class="mt-0.5">${file.fileName} • <span class="text-indigo-400 font-bold">${file.questions.length} câu hỏi</span></p>
        </div>
        <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-lg font-semibold text-[11px]">
          💡 Click vào đáp án để chọn/thay đổi đáp án đúng
        </span>
      </div>
      ${file.questions.map((q, idx) => `
        <div class="p-3.5 bg-slate-900/80 border border-slate-700/60 rounded-xl space-y-2.5">
          <div class="flex items-center justify-between text-xs">
            <span class="text-indigo-400 font-bold">Câu #${idx + 1}</span>
            <span class="text-slate-500 text-[10px]">${q.explanation || 'Đáp án xác thực'}</span>
          </div>
          <p class="font-semibold text-slate-100 text-xs leading-snug">${q.question}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            ${q.options.map((opt, oIdx) => `
              <button data-setting-fileid="${file.id}" data-setting-qidx="${idx}" data-setting-optidx="${oIdx}" class="btn-change-setting-ans text-left px-2.5 py-2 rounded-lg text-xs border transition-all ${oIdx === q.correctAnswer
                ? 'border-rose-500 bg-rose-950/40 text-rose-200 font-bold shadow-md shadow-rose-950/50'
                : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-400'
              }">
                <span class="font-bold mr-1">${String.fromCharCode(65+oIdx)}.</span>
                ${opt}
                ${oIdx === q.correctAnswer ? ' <span class="text-rose-400 font-extrabold ml-1">✓ ĐÁP ÁN ĐÚNG</span>' : ''}
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;

    if (window.lucide) window.lucide.createIcons();

    // 1-click answer changer in Settings
    document.querySelectorAll(".btn-change-setting-ans").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const fileId = e.currentTarget.dataset.settingFileid;
        const qIdx = parseInt(e.currentTarget.dataset.settingQidx, 10);
        const optIdx = parseInt(e.currentTarget.dataset.settingOptidx, 10);

        engine.updateQuestion(fileId, qIdx, {
          correctAnswer: optIdx,
          explanation: "Đáp án đã được cập nhật qua bảng Cài Đặt."
        });
        playSound('select');
        renderSettingsTopicDetail();
      });
    });
  }

  // Settings button handlers
  const settingsReloadBtn = document.getElementById('settingsReloadBtn');
  const settingsExportBtn = document.getElementById('settingsExportBtn');
  const settingsClearHistoryBtn = document.getElementById('settingsClearHistoryBtn');

  if (settingsReloadBtn) {
    settingsReloadBtn.addEventListener('click', () => {
      if (confirm('Khôi phục 20 chuyên đề dữ liệu gốc của ứng dụng?')) {
        const restored = engine.restorePermanentMasterBank();
        if (!restored) {
          engine.loadSampleFiles();
        }
        renderBankFiles();
        renderSettingsPanel();
        playSound('success');
        alert('🔒 Đã khôi phục thành công bộ đề 20 chuyên đề dữ liệu gốc!');
      }
    });
  }

  if (settingsExportBtn) {
    settingsExportBtn.addEventListener('click', () => {
      const data = JSON.stringify(engine.questionBank, null, 2);
      const blob = new Blob([data], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `QuizMasterPro_${new Date().toISOString().slice(0,10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  if (settingsClearHistoryBtn) {
    settingsClearHistoryBtn.addEventListener('click', () => {
      if (confirm('Xóa toàn bộ lịch sử các bài thi?')) {
        engine.clearHistory();
        alert('Đã xóa lịch sử thi!');
      }
    });
  }

  // File Preview Modal
  function openFilePreviewModal(fileId) {
    const file = engine.questionBank.find(f => f.id === fileId);
    if (!file) return;

    previewModalTitle.textContent = file.fileName;
    previewModalSub.textContent = `Tổng cộng ${file.questions.length} câu hỏi • Chữ màu đỏ là đáp án đúng`;

    previewModalBody.innerHTML = file.questions.map((q, idx) => `
      <div class="p-4 bg-slate-900 border border-slate-700/80 rounded-xl space-y-2">
        <p class="font-bold text-slate-200">Câu ${idx + 1}: ${q.question}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-300">
          ${q.options.map((opt, oIdx) => `
            <div class="p-2 rounded-lg border ${oIdx === q.correctAnswer ? 'border-rose-500/60 bg-rose-950/20 text-rose-300 font-bold underline' : 'border-slate-800 bg-slate-950/50'}">
              <span class="font-bold uppercase mr-1">${String.fromCharCode(65 + oIdx)}.</span>
              <span>${opt}</span>
              ${oIdx === q.correctAnswer ? ' <span class="text-rose-400 font-bold ml-1">(ĐÚNG - ĐÃ TÔ ĐỎ)</span>' : ''}
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");

    previewModal.classList.remove("hidden");
  }

  closePreviewBtn.addEventListener("click", () => previewModal.classList.add("hidden"));

  // --- EXAM CONFIG & GENERATION ---
  function updateExamConfigSummary() {
    const count = engine.getTotalAvailableQuestions();
    const activeFiles = engine.questionBank.filter(f => f.enabled);

    poolSummaryText.textContent = `Tổng ngân hàng hiện có: ${count} câu hỏi từ ${activeFiles.length}/${engine.questionBank.length} file được chọn`;

    // Populate Topic File Select Dropdown
    cfgTopicFile.innerHTML = `<option value="all">Tất Cả các file được chọn (${count} câu)</option>` + 
      activeFiles.map(f => `<option value="${f.id}">${f.fileName} - ${f.topic} (${f.questions.length} câu)</option>`).join("");

    updateTopicQuestionBadge();
  }

  function updateTopicQuestionBadge() {
    const selectedId = cfgTopicFile.value;
    if (selectedId === 'all') {
      const count = engine.getTotalAvailableQuestions();
      topicQuestionCountBadge.textContent = `Tổng số câu hỏi trong chuyên đề: ${count} câu (Giữ nguyên 100% câu hỏi trong tất cả file gốc)`;
    } else {
      const file = engine.questionBank.find(f => f.id === selectedId);
      const count = file ? file.questions.length : 0;
      topicQuestionCountBadge.textContent = `Tổng số câu hỏi trong chuyên đề: ${count} câu (Giữ nguyên 100% câu hỏi trong file ${file ? file.fileName : ''})`;
    }
  }

  cfgSelectionType.addEventListener("change", (e) => {
    const type = e.target.value;
    if (type === 'topic') {
      topicSelectContainer.classList.remove("hidden");
      qCountContainer.classList.add("hidden");
    } else {
      topicSelectContainer.classList.add("hidden");
      qCountContainer.classList.remove("hidden");
    }
    updateExamConfigSummary();
  });

  cfgTopicFile.addEventListener("change", updateTopicQuestionBadge);

  startExamBtn.addEventListener("click", () => {
    const selectionType = cfgSelectionType.value;
    const selectedFileId = cfgTopicFile.value;
    const targetQCount = parseInt(cfgQuestionCount.value, 10);
    const duration = parseInt(cfgTimeLimit.value, 10);
    const mode = cfgExamMode.value;
    const keepOrder = cfgKeepOrder.checked;
    const shuffleOpts = cfgShuffleOptions.checked;

    try {
      playSound('click');
      const exam = engine.generateExam({
        targetCount: targetQCount,
        durationMinutes: duration,
        mode: mode,
        shuffleOptions: shuffleOpts,
        selectionType: selectionType,
        selectedFileId: selectedFileId,
        keepOrder: keepOrder
      });
      
      // Hide config panel & show test interface
      examConfigPanel.classList.add("hidden");
      activeTestContainer.classList.remove("hidden");

      totalTestQuestionsBadge.textContent = exam.questions.length;
      startTimer(exam.durationMinutes);
      renderActiveQuestion(0);
      renderGridPalette();
    } catch (e) {
      alert(e.message);
    }
  });

  // --- TIMER MANAGER ---
  function startTimer(durationMinutes) {
    if (timerInterval) clearInterval(timerInterval);
    if (durationMinutes <= 0) {
      timerText.textContent = "K.Giới Hạn";
      return;
    }

    let seconds = durationMinutes * 60;

    timerInterval = setInterval(() => {
      if (!engine.activeExam || engine.activeExam.finished) {
        clearInterval(timerInterval);
        return;
      }

      seconds--;
      engine.activeExam.timeRemaining = seconds;

      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      const timeStr = `${hrs > 0 ? String(hrs).padStart(2, '0') + ':' : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      timerText.textContent = timeStr;

      // Low time warning (< 5 mins)
      if (seconds <= 300) {
        timerContainer.classList.add("time-warning");
      }

      if (seconds <= 0) {
        clearInterval(timerInterval);
        alert("Đã hết thời gian làm bài thi! Hệ thống sẽ tự động nộp bài và chấm điểm.");
        executeSubmitExam();
      }
    }, 1000);
  }

  // --- ACTIVE QUESTION DISPLAY ---
  function renderActiveQuestion(index) {
    const exam = engine.activeExam;
    if (!exam || index < 0 || index >= exam.questions.length) return;

    exam.currentIndex = index;
    const q = exam.questions[index];

    activeQuestionCounter.textContent = `Câu ${index + 1} / ${exam.questions.length}`;
    qFileNameText.textContent = q.sourceFile;
    qNumberPill.textContent = `Câu #${index + 1}`;
    questionTitleText.textContent = q.question;

    // Flag status
    const isFlagged = exam.flagged[index];
    flagIcon.setAttribute("data-lucide", isFlagged ? "bookmark-check" : "bookmark");
    flagIcon.classList.toggle("text-amber-400", isFlagged);
    if (window.lucide) window.lucide.createIcons();

    // User selected choice
    const selectedChoice = exam.userAnswers[index];

    // Options A, B, C, D
    optionsContainer.innerHTML = q.options.map((opt, oIdx) => {
      const isSelected = selectedChoice === oIdx;
      return `
        <button data-optidx="${oIdx}" class="option-card w-full text-left p-4 rounded-xl border ${isSelected ? 'selected border-indigo-500 bg-indigo-950/30' : 'border-slate-700 bg-slate-900/80 hover:border-slate-600'} flex items-start space-x-3 cursor-pointer group">
          <span class="w-7 h-7 rounded-lg ${isSelected ? 'bg-indigo-600 text-white font-extrabold' : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'} flex items-center justify-center text-xs shrink-0 transition-colors">
            ${String.fromCharCode(65 + oIdx)}
          </span>
          <span class="text-sm font-semibold text-slate-200 leading-relaxed pt-0.5">${opt}</span>
        </button>
      `;
    }).join("");

    // Option Click Handlers
    document.querySelectorAll(".option-card").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const optIdx = parseInt(e.currentTarget.dataset.optidx, 10);
        playSound('select');
        engine.setAnswer(index, optIdx);
        renderActiveQuestion(index);
        renderGridPalette();
      });
    });

    // Practice mode hint
    if (exam.mode === 'practice' && selectedChoice !== -1) {
      practiceHintBox.classList.remove("hidden");
      practiceHintText.textContent = `Đáp án đúng là ${String.fromCharCode(65 + q.correctAnswer)}: ${q.options[q.correctAnswer]}`;
    } else {
      practiceHintBox.classList.add("hidden");
    }

    // Prev / Next button states
    prevQBtn.disabled = index === 0;
    nextQBtn.innerHTML = index === exam.questions.length - 1 
      ? `<span>Nộp Bài</span> <i data-lucide="check-circle" class="w-4 h-4"></i>`
      : `<span>Câu Tiếp</span> <i data-lucide="chevron-right" class="w-4 h-4"></i>`;

    if (window.lucide) window.lucide.createIcons();

    answeredCountBadge.textContent = engine.getAnsweredCount();
  }

  // Question Navigation
  prevQBtn.addEventListener("click", () => {
    if (engine.activeExam && engine.activeExam.currentIndex > 0) {
      playSound('click');
      renderActiveQuestion(engine.activeExam.currentIndex - 1);
    }
  });

  nextQBtn.addEventListener("click", () => {
    if (!engine.activeExam) return;
    if (engine.activeExam.currentIndex === engine.activeExam.questions.length - 1) {
      openSubmitConfirmModal();
    } else {
      playSound('click');
      renderActiveQuestion(engine.activeExam.currentIndex + 1);
    }
  });

  flagQuestionBtn.addEventListener("click", () => {
    if (!engine.activeExam) return;
    playSound('click');
    engine.toggleFlag(engine.activeExam.currentIndex);
    renderActiveQuestion(engine.activeExam.currentIndex);
    renderGridPalette();
  });

  // --- GRID PALETTE DRAWER (1 to 100 buttons) ---
  function renderGridPalette() {
    const exam = engine.activeExam;
    if (!exam) return;

    const total = exam.questions.length;
    const answered = engine.getAnsweredCount();
    paletteProgressText.textContent = `${answered}/${total}`;

    let html = "";
    for (let i = 0; i < total; i++) {
      const isAnswered = exam.userAnswers[i] !== -1;
      const isFlagged = exam.flagged[i];
      const isCurrent = i === exam.currentIndex;

      let btnClass = "bg-slate-800 text-slate-300 border-slate-700";
      if (isAnswered) btnClass = "bg-indigo-600 text-white border-indigo-500 font-bold";
      if (isFlagged) btnClass += " border-2 border-amber-400";
      if (isCurrent) btnClass += " ring-2 ring-white ring-offset-2 ring-offset-slate-900";

      html += `
        <button data-qidx="${i}" class="w-full h-9 rounded-lg border text-xs font-bold transition-all flex items-center justify-center ${btnClass}">
          ${i + 1}
        </button>
      `;
    }

    gridPaletteContainer.innerHTML = html;

    document.querySelectorAll("[data-qidx]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const qIdx = parseInt(e.currentTarget.dataset.qidx, 10);
        playSound('click');
        renderActiveQuestion(qIdx);
      });
    });
  }

  togglePaletteBtn.addEventListener("click", () => {
    paletteDrawer.classList.toggle("hidden");
  });

  // --- KEYBOARD SHORTCUTS ---
  document.addEventListener("keydown", (e) => {
    if (!engine.activeExam || engine.activeExam.finished || activeTestContainer.classList.contains("hidden")) return;

    if (e.key === 'ArrowRight') {
      if (engine.activeExam.currentIndex < engine.activeExam.questions.length - 1) {
        renderActiveQuestion(engine.activeExam.currentIndex + 1);
      }
    } else if (e.key === 'ArrowLeft') {
      if (engine.activeExam.currentIndex > 0) {
        renderActiveQuestion(engine.activeExam.currentIndex - 1);
      }
    } else if (['1', '2', '3', '4'].includes(e.key)) {
      const optIdx = parseInt(e.key, 10) - 1;
      playSound('select');
      engine.setAnswer(engine.activeExam.currentIndex, optIdx);
      renderActiveQuestion(engine.activeExam.currentIndex);
      renderGridPalette();
    } else if (e.key.toLowerCase() === 'f') {
      engine.toggleFlag(engine.activeExam.currentIndex);
      renderActiveQuestion(engine.activeExam.currentIndex);
      renderGridPalette();
    }
  });

  // --- SUBMIT EXAM & GRADING ---
  function openSubmitConfirmModal() {
    const exam = engine.activeExam;
    if (!exam) return;

    const answered = engine.getAnsweredCount();
    const total = exam.questions.length;

    modalAnsweredText.textContent = answered;
    modalTotalText.textContent = total;

    if (answered < total) {
      modalWarningText.classList.remove("hidden");
    } else {
      modalWarningText.classList.add("hidden");
    }

    submitConfirmModal.classList.remove("hidden");
  }

  submitExamTopBtn.addEventListener("click", openSubmitConfirmModal);
  submitExamBottomBtn.addEventListener("click", openSubmitConfirmModal);
  cancelSubmitBtn.addEventListener("click", () => submitConfirmModal.classList.add("hidden"));

  confirmSubmitBtn.addEventListener("click", () => {
    submitConfirmModal.classList.add("hidden");
    executeSubmitExam();
  });

  function executeSubmitExam() {
    if (timerInterval) clearInterval(timerInterval);
    const result = engine.finishExam();
    
    activeTestContainer.classList.add("hidden");
    examConfigPanel.classList.remove("hidden");

    if (result.passed && typeof confetti !== 'undefined') {
      playSound('success');
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    switchView('result');
  }

  // --- RENDER RESULT VIEW ---
  function renderExamResultView(filter = 'all') {
    const exam = engine.activeExam;
    const result = exam ? exam.scoreResult : (engine.examHistory.length > 0 ? engine.examHistory[0] : null);

    if (!result || !result.breakdown) {
      noResultPlaceholder.classList.remove("hidden");
      resultContent.classList.add("hidden");
      return;
    }

    noResultPlaceholder.classList.add("hidden");
    resultContent.classList.remove("hidden");

    resScoreText.textContent = `${result.score}/${result.totalQuestions}`;
    resPercentBadge.textContent = `${result.percentage}%`;
    resVerdictBadge.textContent = result.passed ? "ĐẠT KẾT QUẢ RẤT TỐT" : "CHƯA ĐẠT CHỈ TIÊU (CẦN ÔN THÊM)";
    resVerdictBadge.className = `px-3 py-1 ${result.passed ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-rose-500/20 border-rose-500/40 text-rose-300'} border rounded-full text-xs font-extrabold uppercase tracking-wide`;

    const minutesSpent = Math.floor(result.timeSpentSeconds / 60);
    const secondsSpent = result.timeSpentSeconds % 60;
    resSubtext.textContent = `Hoàn thành lúc ${new Date(result.timestamp).toLocaleTimeString()} • Thời gian làm bài: ${minutesSpent} phút ${secondsSpent} giây`;

    resCountCorrect.textContent = result.correctCount;
    resCountIncorrect.textContent = result.incorrectCount;
    resCountUnanswered.textContent = result.unansweredCount;
    resAccuracyRate.textContent = `${result.percentage}%`;

    // Filter Review Items
    let items = result.breakdown;
    if (filter === 'wrong') items = items.filter(i => !i.isCorrect && !i.isUnanswered);
    else if (filter === 'correct') items = items.filter(i => i.isCorrect);
    else if (filter === 'flagged') items = items.filter(i => i.isFlagged);

    reviewQuestionsContainer.innerHTML = items.map((item) => `
      <div class="p-5 rounded-2xl border ${item.isCorrect ? 'border-emerald-500/30 bg-emerald-950/10' : (item.isUnanswered ? 'border-amber-500/30 bg-amber-950/10' : 'border-rose-500/30 bg-rose-950/10')} space-y-4">
        <div class="flex items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
          <div class="flex items-center space-x-2">
            <span class="px-2.5 py-1 ${item.isCorrect ? 'bg-emerald-600' : (item.isUnanswered ? 'bg-amber-600' : 'bg-rose-600')} text-white text-xs font-extrabold rounded-lg">
              Câu #${item.questionIndex + 1}
            </span>
            <span class="text-xs text-slate-400 font-medium">${item.sourceFile}</span>
          </div>

          <div class="flex items-center space-x-2">
            ${item.isFlagged ? '<span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Đã đánh dấu</span>' : ''}
            <span class="px-3 py-1 ${item.isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'} font-bold text-xs rounded-full">
              ${item.isCorrect ? 'ĐÚNG (+1đ)' : (item.isUnanswered ? 'BỎ TRỐNG (0đ)' : 'SAI (0đ)')}
            </span>
          </div>
        </div>

        <h4 class="font-bold text-base text-white leading-relaxed">${item.question}</h4>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          ${item.options.map((opt, oIdx) => {
            const isTrueCorrect = oIdx === item.correctAnswer;
            const isUserChoice = oIdx === item.userAnswer;

            let cardStyle = "border-slate-700 bg-slate-900/60 text-slate-300";
            if (isTrueCorrect) {
              cardStyle = "border-emerald-500 bg-emerald-950/40 text-emerald-200 font-bold ring-2 ring-emerald-500/40";
            } else if (isUserChoice && !isTrueCorrect) {
              cardStyle = "border-rose-500 bg-rose-950/40 text-rose-200 font-bold line-through";
            }

            return `
              <div class="p-3.5 rounded-xl border ${cardStyle} flex items-start space-x-3 text-xs">
                <span class="w-6 h-6 rounded-lg ${isTrueCorrect ? 'bg-emerald-500 text-white font-extrabold' : (isUserChoice ? 'bg-rose-500 text-white font-extrabold' : 'bg-slate-800 text-slate-400')} flex items-center justify-center shrink-0">
                  ${String.fromCharCode(65 + oIdx)}
                </span>
                <div class="flex-1">
                  <span>${opt}</span>
                  ${isTrueCorrect ? ' <strong class="text-emerald-400 ml-1">(ĐÁP ÁN ĐÚNG NGUYÊN BẢN TÔ ĐỎ)</strong>' : ''}
                  ${isUserChoice && !isTrueCorrect ? ' <strong class="text-rose-400 ml-1">(BẠN ĐÃ CHỌN SAI)</strong>' : ''}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 text-xs text-slate-300">
          <p class="font-bold text-indigo-300 flex items-center space-x-1">
            <i data-lucide="info" class="w-4 h-4 mr-1"></i>
            <span>Giải thích chi tiết:</span>
          </p>
          <p class="mt-0.5">${item.explanation}</p>
        </div>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();
  }

  // Filter Event Listeners
  [filterReviewAll, filterReviewWrong, filterReviewCorrect, filterReviewFlagged].forEach(btn => {
    btn.addEventListener("click", (e) => {
      [filterReviewAll, filterReviewWrong, filterReviewCorrect, filterReviewFlagged].forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");

      const filterMap = {
        'filterReviewAll': 'all',
        'filterReviewWrong': 'wrong',
        'filterReviewCorrect': 'correct',
        'filterReviewFlagged': 'flagged'
      };

      renderExamResultView(filterMap[e.target.id]);
    });
  });

  reTestBtn.addEventListener("click", () => switchView('exam'));
  exportPdfBtn.addEventListener("click", () => window.print());

  // --- HISTORY TABLE ---
  function renderHistoryTable() {
    const history = engine.examHistory;

    if (history.length === 0) {
      historyTableBody.innerHTML = `
        <tr>
          <td colspan="7" class="py-8 text-center text-slate-500">Chưa có lịch sử làm bài thi nào</td>
        </tr>
      `;
      return;
    }

    historyTableBody.innerHTML = history.map(item => `
      <tr class="hover:bg-slate-800/40">
        <td class="py-3 px-4">${new Date(item.timestamp).toLocaleString()}</td>
        <td class="py-3 px-4 font-bold text-white">${item.totalQuestions} câu</td>
        <td class="py-3 px-4 capitalize">${item.mode === 'exam' ? 'Thi thử' : 'Luyện tập'}</td>
        <td class="py-3 px-4 font-extrabold text-indigo-400">${item.score}/${item.totalQuestions} (${item.percentage}%)</td>
        <td class="py-3 px-4">${Math.floor(item.timeSpentSeconds / 60)} ph ${item.timeSpentSeconds % 60} s</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 ${item.passed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'} font-bold rounded">
            ${item.passed ? 'ĐẠT' : 'CHƯA ĐẠT'}
          </span>
        </td>
        <td class="py-3 px-4 text-right">
          <button class="text-indigo-400 hover:underline font-semibold" onclick="alert('Đã tải lại kết quả lượt thi này!')">Xem lại</button>
        </td>
      </tr>
    `).join("");
  }

  clearHistoryBtn.addEventListener("click", () => {
    if (confirm("Xóa toàn bộ lịch sử các bài thi?")) {
      engine.clearHistory();
      renderHistoryTable();
    }
  });

  // --- AUDIT QUALITY CONTROLLER ---
  const auditModal = document.getElementById("auditModal");
  const closeAuditBtn = document.getElementById("closeAuditBtn");
  const btnOpenAudit = document.getElementById("btnOpenAudit");
  const auditSummaryContainer = document.getElementById("auditSummaryContainer");
  const auditModalBody = document.getElementById("auditModalBody");

  if (btnOpenAudit) {
    btnOpenAudit.addEventListener("click", openAuditModal);
  }

  if (closeAuditBtn) {
    closeAuditBtn.addEventListener("click", () => {
      if (auditModal) auditModal.classList.add("hidden");
    });
  }

  function openAuditModal() {
    if (!auditModal) return;
    renderAuditReport();
    auditModal.classList.remove("hidden");
  }

  function renderAuditReport() {
    const report = engine.auditQuestionBank();
    const qualityScore = report.totalQuestions > 0 
      ? Math.round((report.verifiedQuestions / report.totalQuestions) * 100) 
      : 100;

    if (auditSummaryContainer) {
      auditSummaryContainer.innerHTML = `
        <div class="bg-slate-800 border border-slate-700 p-3 rounded-xl text-center space-y-1">
          <p class="text-slate-400 font-medium">Tổng số chuyên đề</p>
          <p class="text-xl font-extrabold text-white">${report.totalFiles} File</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 p-3 rounded-xl text-center space-y-1">
          <p class="text-slate-400 font-medium">Tổng câu hỏi</p>
          <p class="text-xl font-extrabold text-indigo-300">${report.totalQuestions} Câu</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 p-3 rounded-xl text-center space-y-1">
          <p class="text-slate-400 font-medium">Đã xác minh 100%</p>
          <p class="text-xl font-extrabold text-emerald-400">${report.verifiedQuestions} Câu</p>
        </div>
        <div class="bg-slate-800 border border-slate-700 p-3 rounded-xl text-center space-y-1">
          <p class="text-slate-400 font-medium">Độ chuẩn xác dữ liệu</p>
          <p class="text-xl font-extrabold ${qualityScore >= 90 ? 'text-emerald-400' : 'text-amber-400'}">${qualityScore}%</p>
        </div>
      `;
    }

    if (auditModalBody) {
      if (report.flaggedQuestions.length === 0 && report.duplicateQuestions.length === 0) {
        auditModalBody.innerHTML = `
          <div class="py-12 text-center space-y-3">
            <div class="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <i data-lucide="check-circle-2" class="w-8 h-8"></i>
            </div>
            <h4 class="text-base font-bold text-white">Dữ Liệu Đề Thi Hoàn Hảo 100%!</h4>
            <p class="text-xs text-slate-400 max-w-md mx-auto">Tất cả ${report.totalQuestions} câu hỏi trong ${report.totalFiles} chuyên đề đã có đầy đủ đáp án chuẩn xác và không bị thiếu câu hay trùng lặp.</p>
          </div>
        `;
      } else {
        auditModalBody.innerHTML = `
          <div class="p-3 bg-amber-950/40 border border-amber-500/40 rounded-xl text-xs text-amber-300 font-medium flex items-center space-x-2">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-400 shrink-0"></i>
            <span>Phát hiện ${report.flaggedQuestions.length} câu cần kiểm tra đáp án và ${report.duplicateQuestions.length} câu trùng nội dung. Bạn có thể chọn đáp án đúng trực tiếp bên dưới!</span>
          </div>

          <div class="space-y-4 pt-2">
            ${report.flaggedQuestions.map((q) => `
              <div class="p-4 bg-slate-900/90 border border-slate-700 rounded-xl space-y-3">
                <div class="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                  <span class="px-2.5 py-0.5 bg-indigo-600 text-white text-[11px] font-extrabold rounded-md">
                    ${q.topic} • Câu #${q.qIndex + 1}
                  </span>
                  <span class="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                    <i data-lucide="info" class="w-3.5 h-3.5"></i> ${q.reasons.join(", ")}
                  </span>
                </div>
                <p class="font-bold text-white text-xs leading-relaxed">${q.question}</p>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${q.options.map((opt, oIdx) => `
                    <button data-audit-fileid="${q.fileId}" data-audit-qidx="${q.qIndex}" data-audit-optidx="${oIdx}" class="btn-fix-audit-ans p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${oIdx === q.correctAnswer ? 'border-rose-500 bg-rose-950/40 text-rose-200 font-bold ring-1 ring-rose-500' : 'border-slate-800 bg-slate-900 hover:border-slate-700 text-slate-400'}">
                      <span><strong class="mr-1">${String.fromCharCode(65 + oIdx)}.</strong> ${opt}</span>
                      ${oIdx === q.correctAnswer ? '<span class="text-rose-400 text-[10px] font-extrabold">✓ ĐÃ CHỌN</span>' : '<span class="text-slate-600 text-[10px] hover:text-slate-300">Chọn câu này</span>'}
                    </button>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        `;
      }

      if (window.lucide) window.lucide.createIcons();

      // Answer Fixer click handlers
      document.querySelectorAll(".btn-fix-audit-ans").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const fileId = e.currentTarget.dataset.auditFileid;
          const qIdx = parseInt(e.currentTarget.dataset.auditQidx, 10);
          const optIdx = parseInt(e.currentTarget.dataset.auditOptidx, 10);
          
          engine.updateQuestion(fileId, qIdx, {
            correctAnswer: optIdx,
            explanation: "Đáp án đã được người dùng xác minh và phê duyệt trực tiếp."
          });
          playSound('select');
          renderAuditReport();
          renderBankFiles();
          if (typeof renderSettingsPanel === 'function') renderSettingsPanel();
        });
      });
    }
  }

  // --- AUTO INITIALIZE: Preserve uploaded 20 files as permanent baseline data ---
  if (engine.questionBank.length === 0) {
    engine.loadFromStorage();
  }
  renderBankFiles();
  switchView('exam');
});
