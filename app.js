const STORAGE_KEY = "preprops-progress-v1";
const QUEUE_WIDTH_KEY = "preprops-queue-width-v1";
const MOCK_HISTORY_KEY = "preprops-mock-history-v1";
const ACTIVE_MOCK_KEY = "preprops-active-mock-v1";
const PLAYLIST_OVERRIDES_KEY = "preprops-playlist-overrides-v1";
const CUSTOM_PLAYLISTS_KEY = "preprops-custom-playlists-v1";
const MOCK_OUTCOMES = {
  missed: { label: "Missed", points: 0 },
  partial: { label: "Partial", points: 50 },
  good: { label: "Good", points: 80 },
  strong: { label: "Strong", points: 100 }
};
const PRACTICE_OUTCOMES = {
  again: "Again",
  hard: "Hard",
  good: "Good",
  easy: "Easy"
};
const SUBJECT_GROUPS = {
  core: {
    label: "Core",
    subjects: new Set([
      "General DevOps",
      "Linux",
      "Networking",
      "Git",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Java Build & Runtime",
      "Cloud / AWS",
      "Infrastructure as Code",
      "Security",
      "Python",
      "Helm"
    ])
  },
  applied: {
    label: "Applied",
    subjects: new Set([
      "Deployment Automation",
      "Testing & QA Flow",
      "Teamwork / Workflows",
      "Enterprise Infra",
      "AI / HPC Infra",
      "Practical Tasks",
      "Incident Response"
    ])
  }
};
const PLAYLISTS = {
  all: {
    label: "All questions"
  },
  papaya: {
    label: "High-Scale Kubernetes",
    subjects: new Set([
      "Kubernetes",
      "CI/CD",
      "Cloud / AWS",
      "Infrastructure as Code",
      "Python",
      "Helm"
    ]),
    terms: [
      "argo",
      "rollout",
      "canary",
      "blue-green",
      "eks",
      "aws",
      "terraform",
      "helm",
      "node",
      "typescript",
      "python",
      "tournament",
      "gaming",
      "mobile",
      "high-scale",
      "millions",
      "autoscaling",
      "keda",
      "hpa"
    ]
  },
  applied: {
    label: "On-Prem DevOps",
    subjects: new Set([
      "CI/CD",
      "Docker",
      "Infrastructure as Code",
      "Linux",
      "Networking",
      "Python",
      "Deployment Automation",
      "Testing & QA Flow",
      "Teamwork / Workflows",
      "Practical Tasks"
    ]),
    scopeSubjects: new Set([
      "General DevOps",
      "Git",
      "Kubernetes",
      "Security",
      "Incident Response"
    ]),
    terms: [
      "build",
      "package",
      "packaging",
      "artifact",
      "dependency",
      "dependencies",
      "pipeline",
      "ci/cd",
      "deploy",
      "deployment",
      "rollback",
      "automation",
      "script",
      "bash",
      "python",
      "powershell",
      "test",
      "testing",
      "qa",
      "staging",
      "environment",
      "config",
      "configuration",
      "configuration management",
      "logs",
      "logging",
      "monitoring",
      "observability",
      "prometheus",
      "grafana",
      "elk",
      "troubleshoot",
      "debug",
      "on-prem",
      "infrastructure",
      "virtualized",
      "vmware",
      "windows",
      "systemd",
      "ssh",
      "jenkins",
      "bitbucket",
      "artifactory",
      "nexus",
      "jira",
      "docker",
      "container",
      "registry",
      "image",
      "kubernetes",
      "k8s",
      "pod",
      "service",
      "ingress",
      "configmap",
      "secret",
      "probe",
      "terraform",
      "ansible",
      "iac",
      "provisioning",
      "inventory",
      "drift",
      "branch",
      "git",
      "team",
      "communication"
    ]
  }
};
const MOCK_PRESETS = {
  custom: {
    label: "Custom"
  },
  applied: {
    label: "On-Prem DevOps",
    count: 20,
    difficulty: "all",
    subjects: [
      "CI/CD",
      "Docker",
      "Infrastructure as Code",
      "Linux",
      "Networking",
      "Python",
      "Deployment Automation",
      "Testing & QA Flow",
      "Teamwork / Workflows",
      "Practical Tasks",
      "Git",
      "Incident Response"
    ]
  },
  cicdTroubleshooting: {
    label: "CI/CD Troubleshooting",
    count: 10,
    difficulty: "all",
    subjects: [
      "CI/CD",
      "Deployment Automation",
      "Testing & QA Flow",
      "Practical Tasks"
    ]
  },
  javaPythonAutomation: {
    label: "Java/Python Automation",
    count: 10,
    difficulty: "all",
    subjects: [
      "Java Build & Runtime",
      "Python",
      "Deployment Automation",
      "Practical Tasks"
    ]
  },
  behavioralTeamwork: {
    label: "Behavioral / Teamwork",
    count: 10,
    difficulty: "all",
    subjects: [
      "Teamwork / Workflows",
      "General DevOps",
      "Incident Response"
    ]
  },
  coreBasics: {
    label: "Core DevOps Basics",
    count: 20,
    difficulty: "all",
    subjects: [
      "Linux",
      "Networking",
      "Git",
      "General DevOps",
      "CI/CD"
    ]
  }
};

const flattened = QUESTIONS.flatMap((group, groupIndex) =>
  group.items.map((item, itemIndex) => ({
    id: `${group.subject}-${itemIndex}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    subject: group.subject,
    icon: group.icon,
    groupIndex,
    itemIndex,
    ...item
  }))
);
const itemById = new Map(flattened.map((item) => [item.id, item]));

const state = {
  subject: "All Subjects",
  statusFilter: "all",
  studyMode: "browse",
  randomOrder: false,
  playlist: "all",
  focus: "all",
  query: "",
  selectedId: flattened[0]?.id,
  answerVisible: false,
  progress: loadProgress(),
  playlistOverrides: loadPlaylistOverrides(),
  customPlaylists: loadCustomPlaylists(),
  mockPanelOpen: false,
  mockSession: loadActiveMock(),
  mockHistory: loadMockHistory(),
  now: Date.now()
};

const els = {
  subjectNav: document.querySelector("#subjectNav"),
  subjectTitle: document.querySelector("#subjectTitle"),
  totalProgress: document.querySelector("#totalProgress"),
  progressCircle: document.querySelector("#progressCircle"),
  answeredCount: document.querySelector("#answeredCount"),
  reviewCount: document.querySelector("#reviewCount"),
  totalCount: document.querySelector("#totalCount"),
  streakCount: document.querySelector("#streakCount"),
  searchInput: document.querySelector("#searchInput"),
  studyTools: document.querySelector(".study-tools"),
  randomToggle: document.querySelector("#randomToggle"),
  playlistSelect: document.querySelector("#playlistSelect"),
  playlistEditor: document.querySelector("#playlistEditor"),
  playlistEditToggle: document.querySelector("#playlistEditToggle"),
  playlistCreateBtn: document.querySelector("#playlistCreateBtn"),
  playlistResetBtn: document.querySelector("#playlistResetBtn"),
  playlistNameInput: document.querySelector("#playlistNameInput"),
  playlistSaveNameBtn: document.querySelector("#playlistSaveNameBtn"),
  playlistDeleteBtn: document.querySelector("#playlistDeleteBtn"),
  playlistExportBtn: document.querySelector("#playlistExportBtn"),
  playlistImportBtn: document.querySelector("#playlistImportBtn"),
  playlistImportInput: document.querySelector("#playlistImportInput"),
  playlistCategoryChoices: document.querySelector("#playlistCategoryChoices"),
  focusSelect: document.querySelector("#focusSelect"),
  mockSetupBtn: document.querySelector("#mockSetupBtn"),
  mockEndBtn: document.querySelector("#mockEndBtn"),
  mockPanel: document.querySelector("#mockPanel"),
  mockActiveBar: document.querySelector("#mockActiveBar"),
  mockPresetSelect: document.querySelector("#mockPresetSelect"),
  mockCountSelect: document.querySelector("#mockCountSelect"),
  mockDifficultySelect: document.querySelector("#mockDifficultySelect"),
  mockSubjectChoices: document.querySelector("#mockSubjectChoices"),
  mockStartBtn: document.querySelector("#mockStartBtn"),
  mockCancelBtn: document.querySelector("#mockCancelBtn"),
  mockHistoryList: document.querySelector("#mockHistoryList"),
  mockClearHistoryBtn: document.querySelector("#mockClearHistoryBtn"),
  queueTitle: document.querySelector("#queueTitle"),
  queueFilters: document.querySelector("#queueFilters"),
  resetBtn: document.querySelector("#resetBtn"),
  questionMeta: document.querySelector("#questionMeta"),
  questionText: document.querySelector("#questionText"),
  answerBox: document.querySelector("#answerBox"),
  structureTitle: document.querySelector("#structureTitle"),
  structureSection: document.querySelector("#structureSection"),
  structureSteps: document.querySelector("#structureSteps"),
  answerTitle: document.querySelector("#answerTitle"),
  answerSection: document.querySelector("#answerSection"),
  answerText: document.querySelector("#answerText"),
  signalTitle: document.querySelector("#signalTitle"),
  signalSection: document.querySelector("#signalSection"),
  signalList: document.querySelector("#signalList"),
  followUpTitle: document.querySelector("#followUpTitle"),
  followUpSection: document.querySelector("#followUpSection"),
  followUpList: document.querySelector("#followUpList"),
  favoriteBtn: document.querySelector("#favoriteBtn"),
  prevBtn: document.querySelector("#prevBtn"),
  showBtn: document.querySelector("#showBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  outcomeActions: document.querySelector(".outcome-actions"),
  questionList: document.querySelector("#questionList"),
  queuePanel: document.querySelector("#queuePanel"),
  queueResizeHandle: document.querySelector("#queueResizeHandle")
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    Object.keys(saved).forEach((id) => {
      saved[id].answeredOnce = Boolean(saved[id].answeredOnce || saved[id].hits > 0);
      delete saved[id].hits;
    });
    return saved;
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function loadPlaylistOverrides() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLAYLIST_OVERRIDES_KEY)) || {};
    return Object.fromEntries(
      Object.entries(saved).filter(([, subjects]) => Array.isArray(subjects))
    );
  } catch {
    return {};
  }
}

function savePlaylistOverrides() {
  localStorage.setItem(PLAYLIST_OVERRIDES_KEY, JSON.stringify(state.playlistOverrides));
}

function normalizeSubjects(subjects) {
  const validSubjects = new Set(QUESTIONS.map(({ subject }) => subject));
  return [...new Set((subjects || []).filter((subject) => validSubjects.has(subject)))];
}

function loadCustomPlaylists() {
  try {
    const saved = JSON.parse(localStorage.getItem(CUSTOM_PLAYLISTS_KEY)) || [];
    if (!Array.isArray(saved)) return [];
    return saved
      .map((playlist) => ({
        id: String(playlist.id || "").replace(/[^a-z0-9-]/gi, ""),
        label: String(playlist.label || "").trim(),
        subjects: normalizeSubjects(playlist.subjects)
      }))
      .filter((playlist) => playlist.id && playlist.label);
  } catch {
    return [];
  }
}

function saveCustomPlaylists() {
  localStorage.setItem(CUSTOM_PLAYLISTS_KEY, JSON.stringify(state.customPlaylists));
}

function customPlaylistKey(id) {
  return `custom:${id}`;
}

function customPlaylistIdFromKey(key) {
  return key.startsWith("custom:") ? key.slice("custom:".length) : "";
}

function playlistByKey(key) {
  if (PLAYLISTS[key]) return PLAYLISTS[key];
  const id = customPlaylistIdFromKey(key);
  const custom = state.customPlaylists.find((playlist) => playlist.id === id);
  if (!custom) return null;
  return {
    label: custom.label,
    subjects: new Set(custom.subjects),
    custom: true,
    id: custom.id
  };
}

function makePlaylistId(label) {
  const base = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "playlist";
  const used = new Set(state.customPlaylists.map((playlist) => playlist.id));
  let candidate = base;
  let suffix = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }
  return candidate;
}

function loadMockHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(MOCK_HISTORY_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveMockHistory() {
  localStorage.setItem(MOCK_HISTORY_KEY, JSON.stringify(state.mockHistory));
}

function loadActiveMock() {
  try {
    const saved = JSON.parse(localStorage.getItem(ACTIVE_MOCK_KEY));
    if (!saved || !Array.isArray(saved.ids) || !saved.ids.length) return null;
    const ids = saved.ids.filter((id) => itemById.has(id));
    const legacyResponseMap = {
      again: "missed",
      hard: "partial",
      easy: "strong"
    };
    const responses = Object.fromEntries(
      Object.entries(saved.responses || {}).map(([id, rating]) => [id, legacyResponseMap[rating] || rating])
    );
    return ids.length ? { ...saved, ids, responses } : null;
  } catch {
    return null;
  }
}

function saveActiveMock() {
  if (!state.mockSession) {
    localStorage.removeItem(ACTIVE_MOCK_KEY);
    return;
  }
  localStorage.setItem(ACTIVE_MOCK_KEY, JSON.stringify(state.mockSession));
}

function loadQueueWidth() {
  const saved = Number(localStorage.getItem(QUEUE_WIDTH_KEY));
  if (Number.isFinite(saved) && saved > 0) {
    els.queuePanel.style.width = `${saved}px`;
  }
}

function getProgress(id) {
  return state.progress[id] || { status: "open", favorite: false, answeredOnce: false };
}

function statusLabel(progress) {
  if (progress.rating) return progress.rating;
  if (progress.status === "done") return "good";
  return progress.status;
}

function statusBadgeClass(progress) {
  if (progress.rating) return progress.rating;
  if (progress.status === "done") return "good";
  return progress.status;
}

function textDirectionClass(text) {
  const value = String(text);
  const rtlCount = (value.match(/[\u0590-\u05ff\u0600-\u06ff]/g) || []).length;
  const ltrCount = (value.match(/[A-Za-z]/g) || []).length;
  const firstDirectional = value.match(/[A-Za-z\u0590-\u05ff\u0600-\u06ff]/);
  const startsRtl = firstDirectional && /[\u0590-\u05ff\u0600-\u06ff]/.test(firstDirectional[0]);
  const rtlShare = rtlCount / Math.max(1, rtlCount + ltrCount);
  return startsRtl || (rtlCount >= 3 && rtlShare >= 0.15) ? "rtl-text" : "ltr-text";
}

function directionValue(directionClass) {
  return directionClass === "rtl-text" ? "rtl" : "ltr";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderDirectionalHtml(text, directionClass) {
  if (directionClass !== "rtl-text") return escapeHtml(text);

  const value = String(text);
  const englishWord = String.raw`[A-Za-z0-9](?:[A-Za-z0-9_\/+#@-]|[.](?=[A-Za-z0-9]))*`;
  const englishPhrase = new RegExp(`${englishWord}(?:\\s+${englishWord})*`, "g");
  let html = "";
  let cursor = 0;

  for (const match of value.matchAll(englishPhrase)) {
    html += escapeHtml(value.slice(cursor, match.index));
    html += `<bdi dir="ltr">${escapeHtml(match[0]).replaceAll(" ", "&nbsp;")}</bdi>`;
    cursor = match.index + match[0].length;
  }

  return html + escapeHtml(value.slice(cursor));
}

function applyTextDirection(element, text) {
  const direction = textDirectionClass(text);
  element.classList.toggle("rtl-text", direction === "rtl-text");
  element.classList.toggle("ltr-text", direction === "ltr-text");
  element.setAttribute("dir", directionValue(direction));
}

function followUpsFor(item) {
  const base = [
    "What could fail in production?",
    "How would you monitor and alert on it?",
    "How would you rollback or mitigate quickly?"
  ];
  const bySubject = {
    "Kubernetes": [
      "What Kubernetes events, logs, or metrics would you inspect first?",
      "How would this behave during a node drain or pod restart?",
      "Which request, limit, probe, or rollout setting could make this worse?"
    ],
    "CI/CD": [
      "Where would you put the quality gate in the pipeline?",
      "What artifact or deployment metadata would you need for rollback?",
      "How would you prevent this pipeline from leaking secrets?"
    ],
    "Cloud / AWS": [
      "What is the main AWS failure domain in this design?",
      "How would the design behave during an AZ outage or traffic spike?",
      "What is the cost and latency tradeoff?"
    ],
    "Infrastructure as Code": [
      "What would you look for in the Terraform plan before applying?",
      "What is the blast radius if this module is wrong?",
      "How would you detect and reconcile drift?"
    ],
    "Helm": [
      "What would `helm template` show before this reaches the cluster?",
      "Which values should be configurable and which should be platform defaults?",
      "How would this chart behave during rollback?"
    ],
    "Python": [
      "What timeout, retry, and exit-code behavior should this code have?",
      "How would you test failure paths without touching production systems?",
      "What logs or metrics would make this automation debuggable?"
    ],
    "Security": [
      "What is the least-privilege permission boundary?",
      "How would you rotate or revoke access if this is compromised?",
      "What audit evidence would you expect to see?"
    ],
    "Incident Response": [
      "What is the first mitigation you would try?",
      "Who needs updates and at what cadence?",
      "What follow-up action would prevent a repeat incident?"
    ]
  };
  const text = `${item.q} ${item.a}`.toLowerCase();
  const extras = [];
  if (text.includes("argo") || text.includes("rollout") || text.includes("canary")) {
    extras.push("Which metric would automatically pause or abort this rollout?");
  }
  if (text.includes("terraform") || text.includes("state")) {
    extras.push("What state or locking issue could make this dangerous?");
  }
  if (text.includes("autoscal") || text.includes("hpa") || text.includes("keda")) {
    extras.push("What signal proves scaling is helping rather than hiding a bottleneck?");
  }
  return [...(bySubject[item.subject] || base), ...extras].slice(0, 4);
}

function matchesPlaylist(item) {
  const playlist = playlistByKey(state.playlist);
  if (!playlist || state.playlist === "all") return true;
  const subjectOverride = state.playlistOverrides[state.playlist];
  if (subjectOverride) return subjectOverride.includes(item.subject);
  const text = `${item.subject} ${item.q} ${item.a}`.toLowerCase();
  if (playlist.subjects.has(item.subject)) return true;
  if (playlist.custom) return false;
  if (playlist.scopeSubjects && !playlist.scopeSubjects.has(item.subject)) return false;
  return playlist.terms.some((term) => text.includes(term));
}

function editablePlaylist() {
  return state.playlist !== "all" ? playlistByKey(state.playlist) : null;
}

function playlistDefaultSubjects(playlistKey) {
  const playlist = playlistByKey(playlistKey);
  return playlist?.subjects ? [...playlist.subjects] : [];
}

function playlistSelectedSubjects(playlistKey) {
  return state.playlistOverrides[playlistKey] || playlistDefaultSubjects(playlistKey);
}

function isScenarioQuestion(item) {
  const scenarioSubjects = new Set([
    "CI/CD",
    "Deployment Automation",
    "Testing & QA Flow",
    "Teamwork / Workflows",
    "Practical Tasks",
    "Incident Response"
  ]);
  if (scenarioSubjects.has(item.subject)) return true;

  const text = `${item.q} ${item.a}`.toLowerCase();
  const scenarioTerms = [
    "what would you check",
    "what do you check",
    "how would you debug",
    "how would you troubleshoot",
    "failed",
    "fails",
    "failure",
    "נכשל",
    "נכשלים",
    "תקלה",
    "שבורה",
    "לא עובד",
    "מה תבדוק",
    "מה היית בודק",
    "איך תחקור",
    "איך תדווח",
    "איך תעבוד",
    "מה תעשה",
    "איך היית מגיב",
    "איך היית מנהל",
    "איך מחליטים",
    "rollback",
    "deployment",
    "incident",
    "logs",
    "smoke test"
  ];
  return scenarioTerms.some((term) => text.includes(term));
}

function answerStructureFor(item) {
  if (isScenarioQuestion(item)) {
    return ["Context", "Checks", "Likely cause", "Fix", "Prevention"];
  }
  if (item.subject === "Teamwork / Workflows") {
    return ["Situation", "Action", "Communication", "Result", "Follow-up"];
  }
  if (item.subject === "Java Build & Runtime" || item.subject === "Python") {
    return ["Concept", "Command or example", "Failure mode", "How to verify"];
  }
  return ["Definition", "Example", "Why it matters", "Tradeoff"];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function mockDifficultyMatches(item, difficulty) {
  const progress = getProgress(item.id);
  if (difficulty === "all") return true;
  if (difficulty === "unrated") return !progress.rating;
  if (difficulty === "review") return progress.status === "review";
  return progress.rating === difficulty;
}

function scoreFromResponses(responses, total) {
  const values = Object.values(responses || {});
  const counts = Object.fromEntries(Object.keys(MOCK_OUTCOMES).map((key) => [key, 0]));
  values.forEach((rating) => {
    if (counts[rating] !== undefined) counts[rating] += 1;
  });
  const answered = values.length;
  const points = values.reduce((sum, rating) => sum + (MOCK_OUTCOMES[rating]?.points || 0), 0);
  const score = total ? Math.round(points / total) : 0;
  return { ...counts, answered, passed: counts.good + counts.strong, total, score };
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function mockElapsed(session) {
  return (session.finishedAt || state.now) - session.startedAt;
}

function applyMockWeakAnswersToReview(session) {
  Object.entries(session.responses || {}).forEach(([id, rating]) => {
    if (rating !== "missed" && rating !== "partial") return;
    const next = {
      ...getProgress(id),
      status: "review",
      rating: rating === "missed" ? "again" : "hard",
      answeredOnce: true,
      lastRatedAt: Date.now()
    };
    state.progress[id] = next;
  });
  saveProgress();
}

function startMockSession() {
  const selectedSubjects = Array.from(els.mockSubjectChoices.querySelectorAll("input:checked")).map(
    (input) => input.value
  );
  const subjects = selectedSubjects.length ? selectedSubjects : QUESTIONS.map((group) => group.subject);
  const requestedCount = Number(els.mockCountSelect.value);
  const difficulty = els.mockDifficultySelect.value;
  const candidates = flattened.filter(
    (item) => subjects.includes(item.subject) && mockDifficultyMatches(item, difficulty)
  );
  const selected = shuffle(candidates).slice(0, requestedCount);
  if (!selected.length) {
    alert("No questions match this mock setup.");
    return;
  }

  state.mockSession = {
    id: `mock-${Date.now()}`,
    startedAt: Date.now(),
    ids: selected.map((item) => item.id),
    responses: {},
    config: {
      requestedCount,
      difficulty,
      subjects
    }
  };
  state.mockPanelOpen = false;
  state.subject = "All Subjects";
  state.statusFilter = "all";
  state.selectedId = selected[0].id;
  state.answerVisible = false;
  saveActiveMock();
  render();
}

function finishMockSession() {
  if (!state.mockSession) return;
  const sessionItems = state.mockSession.ids
    .map((id) => itemById.get(id))
    .filter(Boolean);
  const summary = scoreFromResponses(state.mockSession.responses, sessionItems.length);
  const subjects = [...new Set(sessionItems.map((item) => item.subject))];
  const finishedSession = {
    ...state.mockSession,
    finishedAt: Date.now()
  };
  const weakCount = summary.missed + summary.partial;
  const applyWeak = weakCount > 0 && confirm(`Mock complete: ${summary.score}% in ${formatDuration(mockElapsed(finishedSession))}.\n\nSend ${weakCount} missed/partial answers to the review queue?`);
  if (applyWeak) applyMockWeakAnswersToReview(finishedSession);
  state.mockHistory = [
    {
      id: finishedSession.id,
      startedAt: finishedSession.startedAt,
      finishedAt: finishedSession.finishedAt,
      subjects,
      difficulty: finishedSession.config.difficulty,
      durationMs: mockElapsed(finishedSession),
      ...summary
    },
    ...state.mockHistory
  ].slice(0, 12);
  state.mockSession = null;
  saveActiveMock();
  saveMockHistory();
  selectFirstVisible();
  render();
}

function refreshMockTimer() {
  if (!state.mockSession) return;
  state.now = Date.now();
  renderMockControls();
}

function setProgress(id, patch) {
  const next = { ...getProgress(id), ...patch };
  if (patch.rating === undefined) {
    delete next.rating;
  }
  state.progress[id] = next;
  saveProgress();
  render();
}

function visibleQuestions() {
  const query = state.query.trim().toLowerCase();
  const source = state.mockSession
    ? state.mockSession.ids.map((id) => itemById.get(id)).filter(Boolean)
    : flattened;
  return source.filter((item) => {
    const progress = getProgress(item.id);
    const subjectMatch = state.mockSession || state.subject === "All Subjects" || item.subject === state.subject;
    const playlistMatch = state.mockSession || matchesPlaylist(item);
    const modeMatch =
      state.mockSession ||
      (state.studyMode === "review" ? progress.status === "review" : state.studyMode !== "scenario" || isScenarioQuestion(item));
    const focusMatch =
      state.mockSession ||
      state.focus === "all" ||
      (state.focus === "unrated" ? !progress.rating : progress.rating === state.focus);
    const statusMatch =
      state.statusFilter === "all" ||
      (state.statusFilter === "saved" ? progress.favorite : progress.status === state.statusFilter);
    const queryMatch =
      !query ||
      `${item.subject} ${item.q} ${item.a} ${item.signals.join(" ")}`
        .toLowerCase()
        .includes(query);
    return subjectMatch && playlistMatch && modeMatch && focusMatch && statusMatch && queryMatch;
  });
}

function selectedQuestion() {
  const list = visibleQuestions();
  if (!list.length) return null;
  return list.find((item) => item.id === state.selectedId) || list[0];
}

function selectQuestion(id) {
  state.selectedId = id;
  state.answerVisible = false;
  render();
}

function move(offset) {
  const list = visibleQuestions();
  const current = selectedQuestion();
  if (!list.length || !current) return;
  if (state.randomOrder && offset > 0 && list.length > 1) {
    const candidates = list.filter((item) => item.id !== current.id);
    const next = candidates[Math.floor(Math.random() * candidates.length)];
    selectQuestion(next.id);
    return;
  }
  const index = list.findIndex((item) => item.id === current.id);
  const nextIndex = (index + offset + list.length) % list.length;
  selectQuestion(list[nextIndex].id);
}

function subjectStats(subject) {
  const items = subject === "All Subjects" ? flattened : flattened.filter((item) => item.subject === subject);
  const progressItems = items.map((item) => getProgress(item.id));
  const done = progressItems.filter((p) => p.status === "done").length;
  const review = progressItems.filter((p) => p.status === "review").length;
  const answered = done + review;
  return { done, review, answered, total: items.length };
}

function renderSubjectButton(subject) {
  const stats = subjectStats(subject);
  const greenPercent = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
  const redPercent = stats.total ? Math.round((stats.review / stats.total) * 100) : 0;
  return `
    <button class="${state.subject === subject ? "active" : ""}" data-subject="${subject}" type="button">
      <span class="subject-main">
        <span class="subject-row">
          <strong class="${textDirectionClass(subject)}">${subject}</strong>
          <small>${stats.answered}/${stats.total}</small>
        </span>
        <span class="subject-progress" aria-hidden="true">
          <span class="progress-green" style="width: ${greenPercent}%"></span>
          <span class="progress-red" style="width: ${redPercent}%"></span>
        </span>
      </span>
    </button>
  `;
}

function renderSubjects() {
  const groupedSubjects = new Set([
    ...SUBJECT_GROUPS.core.subjects,
    ...SUBJECT_GROUPS.applied.subjects
  ]);
  const uncategorizedSubjects = QUESTIONS.map(({ subject }) => subject).filter((subject) => !groupedSubjects.has(subject));
  const subjectGroups = [
    {
      label: null,
      subjects: ["All Subjects"]
    },
    {
      label: SUBJECT_GROUPS.core.label,
      subjects: QUESTIONS.map(({ subject }) => subject).filter((subject) => SUBJECT_GROUPS.core.subjects.has(subject))
    },
    {
      label: SUBJECT_GROUPS.applied.label,
      subjects: QUESTIONS.map(({ subject }) => subject).filter((subject) => SUBJECT_GROUPS.applied.subjects.has(subject))
    },
    {
      label: "Other",
      subjects: uncategorizedSubjects
    }
  ].filter((group) => group.subjects.length);

  els.subjectNav.innerHTML = subjectGroups
    .map((group) => `
      ${group.label ? `<div class="subject-group-label">${group.label}</div>` : ""}
      ${group.subjects.map((subject) => renderSubjectButton(subject)).join("")}
    `)
    .join("");
}

function renderStats() {
  const total = flattened.length;
  const done = flattened.filter((item) => getProgress(item.id).status === "done").length;
  const review = flattened.filter((item) => getProgress(item.id).status === "review").length;
  const answered = done + review;
  const streak = flattened.filter((item) => getProgress(item.id).answeredOnce).length;
  const percent = total ? Math.round((answered / total) * 100) : 0;

  els.totalProgress.textContent = `${percent}%`;
  els.progressCircle.style.strokeDashoffset = String(113 - (113 * percent) / 100);
  els.answeredCount.textContent = answered;
  els.reviewCount.textContent = review;
  els.totalCount.textContent = total;
  els.streakCount.textContent = streak;
}

function renderMockSubjects() {
  els.mockSubjectChoices.innerHTML = QUESTIONS.map(
    (group) => `
      <label>
        <input type="checkbox" value="${escapeHtml(group.subject)}" checked />
        <span>${escapeHtml(group.subject)}</span>
      </label>
    `
  ).join("");
}

function applyMockPreset(presetKey) {
  const preset = MOCK_PRESETS[presetKey];
  if (!preset || presetKey === "custom") return;
  const subjects = new Set(preset.subjects);
  els.mockSubjectChoices.querySelectorAll("input").forEach((input) => {
    input.checked = subjects.has(input.value);
  });
  if (preset.count) els.mockCountSelect.value = String(preset.count);
  if (preset.difficulty) els.mockDifficultySelect.value = preset.difficulty;
}

function renderMockHistory() {
  els.mockHistoryList.innerHTML =
    state.mockHistory
      .map((entry) => {
        const date = new Date(entry.finishedAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit"
        });
        const subjects = entry.subjects.length > 3 ? `${entry.subjects.slice(0, 3).join(", ")} +${entry.subjects.length - 3}` : entry.subjects.join(", ");
        return `
          <div class="mock-history-item">
            <strong>${entry.score}%</strong>
            <span>${entry.passed}/${entry.total} good or strong</span>
            <small>${date} - ${formatDuration(entry.durationMs || 0)} - ${entry.difficulty} - ${escapeHtml(subjects)}</small>
          </div>
        `;
      })
      .join("") || `<div class="empty-history">No mock scores yet.</div>`;
}

function renderMockControls() {
  els.studyTools.classList.toggle("mock-active", Boolean(state.mockSession));
  els.mockPanel.hidden = !state.mockPanelOpen;
  els.mockSetupBtn.hidden = Boolean(state.mockSession);
  document.querySelectorAll(".mode-tabs button").forEach((button) => {
    const isActive = state.mockPanelOpen ? button.dataset.mode === "mock" : button.dataset.mode === state.studyMode;
    button.classList.toggle("active", isActive);
  });
  els.mockEndBtn.hidden = !state.mockSession;
  if (!state.mockSession) {
    els.mockActiveBar.hidden = true;
    renderMockHistory();
    return;
  }

  const summary = scoreFromResponses(state.mockSession.responses, state.mockSession.ids.length);
  const currentIndex = state.mockSession.ids.indexOf(state.selectedId) + 1;
  const elapsed = formatDuration(mockElapsed(state.mockSession));
  const avgMs = summary.answered ? Math.round(mockElapsed(state.mockSession) / summary.answered) : 0;
  els.mockActiveBar.hidden = false;
  els.mockActiveBar.innerHTML = `
    <div class="mock-session-title">
      <span class="eyebrow">Mock Interview</span>
      <strong>${Math.max(currentIndex, 1)}/${state.mockSession.ids.length} questions</strong>
    </div>
    <div class="mock-live-score">
      <span class="metric-pill primary"><small>Elapsed</small><strong>${elapsed}</strong></span>
      <button class="mock-timer-reset" data-mock-reset-time type="button">Reset</button>
      <span class="metric-pill"><small>Answered</small><strong>${summary.answered}</strong></span>
      <span class="metric-pill"><small>Good+</small><strong>${summary.passed}</strong></span>
      <span class="metric-pill score"><small>Score</small><strong>${summary.score}%</strong></span>
      <span class="metric-pill"><small>Avg</small><strong>${avgMs ? formatDuration(avgMs) : "0:00"}</strong></span>
    </div>
  `;
  renderMockHistory();
}

function renderPlaylistSelect() {
  const current = playlistByKey(state.playlist) ? state.playlist : "all";
  if (current !== state.playlist) state.playlist = current;
  const builtInOptions = Object.entries(PLAYLISTS).map(
    ([key, playlist]) => `<option value="${key}">${escapeHtml(playlist.label)}</option>`
  );
  const customOptions = state.customPlaylists.length
    ? [
        `<option disabled>──────────</option>`,
        ...state.customPlaylists.map(
          (playlist) => `<option value="${customPlaylistKey(playlist.id)}">${escapeHtml(playlist.label)}</option>`
        )
      ]
    : [];
  els.playlistSelect.innerHTML = [...builtInOptions, ...customOptions].join("");
  els.playlistSelect.value = state.playlist;
}

function renderPlaylistEditor() {
  const playlist = editablePlaylist();
  const isOpen = Boolean(playlist && els.playlistEditor.dataset.open === "true");
  els.playlistEditToggle.hidden = !playlist;
  els.playlistEditor.hidden = !isOpen;
  if (!playlist) return;

  const selected = new Set(playlistSelectedSubjects(state.playlist));
  const hasOverride = Boolean(state.playlistOverrides[state.playlist]);
  const isCustom = Boolean(playlist.custom);
  els.playlistEditToggle.textContent = isOpen ? "Done" : "Edit playlist";
  els.playlistNameInput.hidden = !isCustom;
  els.playlistSaveNameBtn.hidden = !isCustom;
  els.playlistDeleteBtn.hidden = !isCustom;
  els.playlistResetBtn.hidden = isCustom || !hasOverride;
  if (isCustom) els.playlistNameInput.value = playlist.label;
  els.playlistCategoryChoices.innerHTML = QUESTIONS.map((group) => {
    const checked = selected.has(group.subject) ? "checked" : "";
    return `
      <label>
        <input type="checkbox" value="${escapeHtml(group.subject)}" ${checked} />
        <span>${escapeHtml(group.subject)}</span>
        <small>${group.items.length}</small>
      </label>
    `;
  }).join("");
}

function renderQuestion() {
  const item = selectedQuestion();
  state.selectedId = item?.id;
  document.body.classList.toggle("mock-mode", Boolean(state.mockSession));
  const playlistTitle = playlistByKey(state.playlist)?.label || PLAYLISTS.all.label;
  const focusTitle = state.focus === "all" ? "" : ` - ${state.focus}`;
  const modeLabels = {
    browse: "Browse",
    scenario: "Scenarios",
    review: "Review drill"
  };
  const modeTitle = modeLabels[state.studyMode] || "Browse";
  const orderTitle = state.randomOrder ? "Random" : "Ordered";
  els.subjectTitle.textContent = state.mockSession
    ? `Mock Interview - ${state.mockSession.ids.length} questions`
    : state.subject === "All Subjects" ? `${playlistTitle} - ${modeTitle}${focusTitle}` : `${state.subject} - ${modeTitle}${focusTitle}`;
  els.subjectTitle.classList.toggle("rtl-text", textDirectionClass(els.subjectTitle.textContent) === "rtl-text");
  els.subjectTitle.classList.toggle("ltr-text", textDirectionClass(els.subjectTitle.textContent) === "ltr-text");

  if (!item) {
    els.questionMeta.textContent = "No matches";
    els.questionText.textContent = "No questions match the current filters.";
    els.questionText.classList.remove("rtl-text");
    els.questionText.classList.add("ltr-text");
    els.answerBox.classList.remove("rtl-text");
    els.answerBox.classList.add("ltr-text");
    els.structureSection.classList.remove("rtl-text");
    els.structureSection.classList.add("ltr-text");
    els.answerSection.classList.remove("rtl-text");
    els.answerSection.classList.add("ltr-text");
    els.signalSection.classList.remove("rtl-text");
    els.signalSection.classList.add("ltr-text");
    els.followUpSection.classList.remove("rtl-text");
    els.followUpSection.classList.add("ltr-text");
    els.signalList.innerHTML = "";
    els.followUpList.innerHTML = "";
    els.structureSteps.innerHTML = "";
    els.answerBox.hidden = true;
    els.favoriteBtn.textContent = "☆ Save";
    return;
  }

  const progress = getProgress(item.id);
  const questionDirection = textDirectionClass(item.q);
  const answerDirection = textDirectionClass(item.a);
  const signalsDirection = textDirectionClass(item.signals.join(" "));
  const followUps = followUpsFor(item);
  const followUpDirection = textDirectionClass(followUps.join(" "));
  const structureSteps = answerStructureFor(item);
  const sessionIndex = state.mockSession ? state.mockSession.ids.indexOf(item.id) + 1 : 0;
  els.questionMeta.textContent = state.mockSession
    ? `${item.icon} ${item.subject} - mock ${sessionIndex}/${state.mockSession.ids.length} - ${statusLabel(progress)}`
    : `${item.icon} ${item.subject} - ${statusLabel(progress)} - ${modeTitle} - ${orderTitle}`;
  els.questionText.innerHTML = renderDirectionalHtml(item.q, questionDirection);
  els.questionText.setAttribute("dir", directionValue(questionDirection));
  els.answerText.innerHTML = renderDirectionalHtml(item.a, answerDirection);
  els.answerText.setAttribute("dir", directionValue(answerDirection));
  els.structureSteps.innerHTML = structureSteps
    .map((step) => `<span>${escapeHtml(step)}</span>`)
    .join('<em aria-hidden="true">→</em>');
  els.signalList.innerHTML = item.signals.map((signal) => `<li>${signal}</li>`).join("");
  els.followUpList.innerHTML = followUps.map((prompt) => `<li>${prompt}</li>`).join("");

  const outcomes = state.mockSession ? MOCK_OUTCOMES : PRACTICE_OUTCOMES;
  const selectedOutcome = state.mockSession ? state.mockSession.responses[item.id] : progress.rating;
  els.outcomeActions.innerHTML = Object.entries(outcomes)
    .map(([key, value]) => {
      const label = typeof value === "string" ? value : value.label;
      return `<button class="${selectedOutcome === key ? "selected" : ""}" data-rating="${key}" type="button">${label}</button>`;
    })
    .join("");
  applyTextDirection(els.answerTitle, els.answerTitle.textContent);
  applyTextDirection(els.structureTitle, els.structureTitle.textContent);
  applyTextDirection(els.signalTitle, els.signalTitle.textContent);
  applyTextDirection(els.followUpTitle, els.followUpTitle.textContent);
  els.questionText.classList.toggle("rtl-text", questionDirection === "rtl-text");
  els.questionText.classList.toggle("ltr-text", questionDirection === "ltr-text");
  els.answerBox.classList.toggle("rtl-text", answerDirection === "rtl-text");
  els.answerBox.classList.toggle("ltr-text", answerDirection === "ltr-text");
  els.structureSection.classList.remove("rtl-text");
  els.structureSection.classList.add("ltr-text");
  els.answerSection.classList.toggle("rtl-text", answerDirection === "rtl-text");
  els.answerSection.classList.toggle("ltr-text", answerDirection === "ltr-text");
  els.answerText.classList.toggle("rtl-text", answerDirection === "rtl-text");
  els.answerText.classList.toggle("ltr-text", answerDirection === "ltr-text");
  els.signalSection.classList.toggle("rtl-text", signalsDirection === "rtl-text");
  els.signalSection.classList.toggle("ltr-text", signalsDirection === "ltr-text");
  els.signalList.classList.toggle("rtl-text", signalsDirection === "rtl-text");
  els.signalList.classList.toggle("ltr-text", signalsDirection === "ltr-text");
  els.followUpSection.classList.toggle("rtl-text", followUpDirection === "rtl-text");
  els.followUpSection.classList.toggle("ltr-text", followUpDirection === "ltr-text");
  els.followUpList.classList.toggle("rtl-text", followUpDirection === "rtl-text");
  els.followUpList.classList.toggle("ltr-text", followUpDirection === "ltr-text");
  els.answerBox.hidden = !state.answerVisible;
  els.showBtn.textContent = state.answerVisible ? "Hide answer" : "Show answer";
  els.favoriteBtn.textContent = progress.favorite ? "★ Saved" : "☆ Save";
  els.favoriteBtn.classList.toggle("active", progress.favorite);
}

function renderList() {
  const list = visibleQuestions();
  els.queuePanel.classList.toggle("mock-queue", Boolean(state.mockSession));
  els.queueTitle.textContent = state.mockSession ? `Interview Questions (${list.length})` : `Practice Queue (${list.length})`;
  els.queueFilters.hidden = Boolean(state.mockSession);
  els.questionList.innerHTML =
    list
      .map((item) => {
        const progress = getProgress(item.id);
        const favorite = progress.favorite ? "saved" : "";
        const mockRating = state.mockSession?.responses[item.id];
        const pillValue = state.mockSession ? mockRating || "pending" : statusBadgeClass(progress);
        const pillLabel = state.mockSession ? (mockRating ? MOCK_OUTCOMES[mockRating].label : "Pending") : statusLabel(progress);
        const direction = textDirectionClass(item.q);
        const dir = directionValue(direction);
        const question = renderDirectionalHtml(item.q, direction);
        return `
          <button class="question-item ${state.selectedId === item.id ? "active" : ""}" data-id="${item.id}" type="button">
            <span class="status-cell">
              <em class="status-pill ${pillValue}">${pillLabel}</em>
            </span>
            <span class="question-copy ${direction}" dir="${dir}">
              <strong>${question}${favorite ? `<span class="saved-marker" aria-label="Saved">★</span>` : ""}</strong>
            </span>
          </button>
        `;
      })
      .join("") || `<div class="question-item"><strong>No questions found.</strong><span>Try another search or filter.</span></div>`;
}

function render() {
  renderPlaylistSelect();
  renderSubjects();
  renderStats();
  renderMockControls();
  renderPlaylistEditor();
  renderQuestion();
  renderList();
}

function selectFirstVisible() {
  const list = visibleQuestions();
  const first = state.randomOrder && list.length ? list[Math.floor(Math.random() * list.length)] : list[0];
  state.selectedId = first?.id;
  state.answerVisible = false;
}

els.subjectNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-subject]");
  if (!button) return;
  state.subject = button.dataset.subject;
  selectFirstVisible();
  render();
});

els.questionList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (button) selectQuestion(button.dataset.id);
});

document.querySelector(".segmented").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  state.statusFilter = button.dataset.filter;
  document.querySelectorAll(".segmented button").forEach((btn) => btn.classList.toggle("active", btn === button));
  selectFirstVisible();
  render();
});

document.querySelector(".mode-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-mode]");
  if (!button) return;
  if (button.dataset.mode === "mock") {
    state.mockPanelOpen = !state.mockPanelOpen;
    render();
    return;
  }
  state.studyMode = button.dataset.mode;
  state.mockPanelOpen = false;
  selectFirstVisible();
  render();
});

els.playlistSelect.addEventListener("change", (event) => {
  state.playlist = event.target.value;
  els.playlistEditor.dataset.open = "false";
  selectFirstVisible();
  render();
});

els.playlistEditToggle.addEventListener("click", () => {
  els.playlistEditor.dataset.open = els.playlistEditor.dataset.open === "true" ? "false" : "true";
  render();
});

els.playlistCreateBtn.addEventListener("click", () => {
  const label = prompt("Playlist name");
  if (!label || !label.trim()) return;
  const id = makePlaylistId(label.trim());
  state.customPlaylists.push({
    id,
    label: label.trim(),
    subjects: []
  });
  saveCustomPlaylists();
  state.playlist = customPlaylistKey(id);
  els.playlistEditor.dataset.open = "true";
  selectFirstVisible();
  render();
});

els.playlistSaveNameBtn.addEventListener("click", () => {
  const id = customPlaylistIdFromKey(state.playlist);
  const playlist = state.customPlaylists.find((item) => item.id === id);
  const label = els.playlistNameInput.value.trim();
  if (!playlist || !label) return;
  playlist.label = label;
  saveCustomPlaylists();
  render();
});

els.playlistResetBtn.addEventListener("click", () => {
  delete state.playlistOverrides[state.playlist];
  savePlaylistOverrides();
  selectFirstVisible();
  render();
});

els.playlistDeleteBtn.addEventListener("click", () => {
  const id = customPlaylistIdFromKey(state.playlist);
  const playlist = state.customPlaylists.find((item) => item.id === id);
  if (!playlist || !confirm(`Delete playlist "${playlist.label}"?`)) return;
  state.customPlaylists = state.customPlaylists.filter((item) => item.id !== id);
  delete state.playlistOverrides[state.playlist];
  saveCustomPlaylists();
  savePlaylistOverrides();
  state.playlist = "all";
  els.playlistEditor.dataset.open = "false";
  selectFirstVisible();
  render();
});

els.playlistExportBtn.addEventListener("click", () => {
  const payload = {
    type: "preprops-custom-playlists",
    version: 1,
    exportedAt: new Date().toISOString(),
    customPlaylists: state.customPlaylists
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "preprops-playlists.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

els.playlistImportBtn.addEventListener("click", () => {
  els.playlistImportInput.click();
});

els.playlistImportInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const imported = Array.isArray(parsed) ? parsed : parsed.customPlaylists;
      if (!Array.isArray(imported)) throw new Error("No customPlaylists array found.");
      let added = 0;
      imported.forEach((playlist) => {
        const label = String(playlist.label || "").trim();
        const subjects = normalizeSubjects(playlist.subjects);
        if (!label) return;
        state.customPlaylists.push({
          id: makePlaylistId(label),
          label,
          subjects
        });
        added += 1;
      });
      saveCustomPlaylists();
      if (added) {
        state.playlist = customPlaylistKey(state.customPlaylists[state.customPlaylists.length - 1].id);
        els.playlistEditor.dataset.open = "true";
      }
      selectFirstVisible();
      render();
      if (!added) alert("No valid playlists found in that file.");
    } catch (error) {
      alert(`Could not import playlists: ${error.message}`);
    } finally {
      event.target.value = "";
    }
  });
  reader.readAsText(file);
});

els.playlistCategoryChoices.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox']")) return;
  const selected = Array.from(els.playlistCategoryChoices.querySelectorAll("input:checked")).map(
    (input) => input.value
  );
  const id = customPlaylistIdFromKey(state.playlist);
  const playlist = state.customPlaylists.find((item) => item.id === id);
  if (playlist) {
    playlist.subjects = normalizeSubjects(selected);
    saveCustomPlaylists();
  } else {
    state.playlistOverrides[state.playlist] = selected;
    savePlaylistOverrides();
  }
  selectFirstVisible();
  render();
});

els.focusSelect.addEventListener("change", (event) => {
  state.focus = event.target.value;
  selectFirstVisible();
  render();
});

els.randomToggle.addEventListener("change", (event) => {
  state.randomOrder = event.target.checked;
  selectFirstVisible();
  render();
});

els.mockPresetSelect.addEventListener("change", (event) => {
  applyMockPreset(event.target.value);
});

els.mockSubjectChoices.addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox']")) return;
  els.mockPresetSelect.value = "custom";
});

els.mockCountSelect.addEventListener("change", () => {
  els.mockPresetSelect.value = "custom";
});

els.mockDifficultySelect.addEventListener("change", () => {
  els.mockPresetSelect.value = "custom";
});

els.mockCancelBtn.addEventListener("click", () => {
  state.mockPanelOpen = false;
  render();
});

els.mockStartBtn.addEventListener("click", startMockSession);

els.mockEndBtn.addEventListener("click", () => {
  finishMockSession();
});

els.mockActiveBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mock-reset-time]");
  if (!button || !state.mockSession) return;
  state.mockSession.startedAt = Date.now();
  state.now = Date.now();
  saveActiveMock();
  renderMockControls();
});

els.mockClearHistoryBtn.addEventListener("click", () => {
  if (!state.mockHistory.length) return;
  if (!confirm("Clear previous mock interview scores?")) return;
  state.mockHistory = [];
  saveMockHistory();
  renderMockHistory();
});

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  selectFirstVisible();
  render();
});

els.showBtn.addEventListener("click", () => {
  state.answerVisible = !state.answerVisible;
  renderQuestion();
});

els.prevBtn.addEventListener("click", () => move(-1));
els.nextBtn.addEventListener("click", () => move(1));

els.favoriteBtn.addEventListener("click", () => {
  const item = selectedQuestion();
  if (item) setProgress(item.id, { favorite: !getProgress(item.id).favorite });
});

els.outcomeActions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-rating]");
  const item = selectedQuestion();
  if (!button || !item) return;

  const rating = button.dataset.rating;
  if (state.mockSession && state.mockSession.ids.includes(item.id)) {
    if (state.mockSession.responses[item.id] === rating) {
      delete state.mockSession.responses[item.id];
    } else {
      state.mockSession.responses[item.id] = rating;
    }
    saveActiveMock();
    render();
    return;
  }

  const current = getProgress(item.id).rating;
  if (current === rating) {
    setProgress(item.id, {
      status: "open",
      rating: undefined,
      answeredOnce: true,
      lastRatedAt: Date.now()
    });
    return;
  }

  const status = rating === "again" || rating === "hard" ? "review" : "done";
  setProgress(item.id, {
    status,
    rating,
    answeredOnce: true,
    lastRatedAt: Date.now()
  });
});

els.resetBtn.addEventListener("click", () => {
  if (!confirm("Reset all saved progress?")) return;
  state.progress = {};
  saveProgress();
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("input")) return;
  if (event.key === "ArrowRight") move(1);
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === " ") {
    event.preventDefault();
    state.answerVisible = !state.answerVisible;
    renderQuestion();
  }
});

els.queueResizeHandle.addEventListener("pointerdown", (event) => {
  if (window.matchMedia("(max-width: 1020px)").matches) return;
  event.preventDefault();
  els.queueResizeHandle.setPointerCapture(event.pointerId);
  els.queuePanel.classList.add("resizing");

  const startX = event.clientX;
  const startWidth = els.queuePanel.getBoundingClientRect().width;
  const minWidth = 260;
  const maxWidth = Math.min(620, window.innerWidth * 0.48);

  function onPointerMove(moveEvent) {
    const nextWidth = Math.min(maxWidth, Math.max(minWidth, startWidth - (moveEvent.clientX - startX)));
    els.queuePanel.style.width = `${Math.round(nextWidth)}px`;
  }

  function onPointerUp() {
    els.queuePanel.classList.remove("resizing");
    localStorage.setItem(QUEUE_WIDTH_KEY, String(Math.round(els.queuePanel.getBoundingClientRect().width)));
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
});

renderMockSubjects();
if (state.mockSession && !state.mockSession.ids.includes(state.selectedId)) {
  state.selectedId = state.mockSession.ids[0];
}
loadQueueWidth();
render();
setInterval(refreshMockTimer, 1000);
