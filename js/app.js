/* ═══════════════════════════════════════════════════════════
   app.js  —  Java Backend Roadmap Application Logic
   ═══════════════════════════════════════════════════════════ */

/* ─── State ─── */
const State = {
  currentRoute: "home", // 'home' | section id | topic id
  completedTopics: new Set(),
  searchQuery: "",
  theme: "light",
  openSections: new Set(),
};

/* ─── Local Storage ─── */
const LS_KEYS = {
  completed: "jbr_completed",
  theme: "jbr_theme",
  openSections: "jbr_open_sections",
};

function loadFromStorage() {
  try {
    const c = localStorage.getItem(LS_KEYS.completed);
    if (c) State.completedTopics = new Set(JSON.parse(c));
    const t = localStorage.getItem(LS_KEYS.theme);
    if (t) State.theme = t;
    const o = localStorage.getItem(LS_KEYS.openSections);
    if (o) State.openSections = new Set(JSON.parse(o));
  } catch {}
}

function saveCompleted() {
  localStorage.setItem(
    LS_KEYS.completed,
    JSON.stringify([...State.completedTopics]),
  );
}
function saveTheme() {
  localStorage.setItem(LS_KEYS.theme, State.theme);
}
function saveOpenSections() {
  localStorage.setItem(
    LS_KEYS.openSections,
    JSON.stringify([...State.openSections]),
  );
}

/* ─── DOM refs ─── */
const $ = (id) => document.getElementById(id);

/* ─── Init ─── */
document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
  applyTheme();
  renderSidebar();
  updateProgress();

  // Initial route
  const hash = window.location.hash.replace("#", "");
  navigateTo(hash || "home", false);

  bindEvents();
});

/* ─── Theme ─── */
function applyTheme() {
  document.body.className = `theme-${State.theme}`;
}
function toggleTheme() {
  State.theme = State.theme === "light" ? "dark" : "light";
  applyTheme();
  saveTheme();
}

/* ─── Progress ─── */
function updateProgress() {
  const total = getTotalTopicsCount();
  const done = State.completedTopics.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  $("progressFill").style.width = pct + "%";
  $("progressPct").textContent = pct + "%";
  $("progressDetail").textContent = `${done} / ${total} mövzu tamamlandı`;
}

/* ─── Sidebar Render ─── */
function renderSidebar() {
  const nav = $("sidebarNav");
  const q = State.searchQuery.toLowerCase().trim();
  let html = "";

  for (const section of CURRICULUM) {
    const filteredTopics = q
      ? section.topics.filter((t) => t.title.toLowerCase().includes(q))
      : section.topics;

    if (q && filteredTopics.length === 0) continue;

    const isOpen = State.openSections.has(section.id) || !!q;
    const isActiveSection =
      State.currentRoute === section.id ||
      section.topics.some((t) => t.id === State.currentRoute);

    const completedInSection = section.topics.filter((t) =>
      State.completedTopics.has(t.id),
    ).length;

    html += `
    <div class="sb-section ${isOpen ? "open" : ""} ${isActiveSection ? "has-active-topic" : ""}"
         id="sec-${section.id}"
         style="--sec-accent: ${section.color}">
      <div class="sb-section-header ${isActiveSection ? "has-active" : ""}"
           data-section="${section.id}"
           style="--phase-color: ${section.color}">
        <span class="sb-section-num">${section.num}</span>
        <span class="sb-section-icon">${section.icon}</span>
        <span class="sb-section-title">${section.title}</span>
        <span class="sb-section-count">${completedInSection}/${section.topics.length}</span>
        <svg class="sb-section-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>
      <div class="sb-topics">
        ${filteredTopics.map((topic) => renderSidebarTopic(topic)).join("")}
      </div>
    </div>`;
  }

  if (!html) {
    html = `<div style="padding:24px 16px;text-align:center;color:#6e7681;font-size:13px">Heç bir nəticə tapılmadı</div>`;
  }

  nav.innerHTML = html;

  // Bind section header clicks
  nav.querySelectorAll(".sb-section-header").forEach((el) => {
    el.addEventListener("click", () => toggleSection(el.dataset.section));
  });

  // Bind topic clicks
  nav.querySelectorAll(".sb-topic").forEach((el) => {
    el.addEventListener("click", () => navigateTo(el.dataset.topic));
  });

  // Section color left bar
  nav.querySelectorAll(".sb-section").forEach((el) => {
    const secId = el.querySelector(".sb-section-header")?.dataset.section;
    const sec = getSectionById(secId);
    if (sec) {
      el.querySelector(".sb-section-header").style.setProperty(
        "--accent",
        sec.color,
      );
      el.style.setProperty("--sec-accent", sec.color);
    }
  });
}

function renderSidebarTopic(topic) {
  const isActive = State.currentRoute === topic.id;
  const isDone = State.completedTopics.has(topic.id);
  const firstTag = topic.tags[0];

  return `
  <div class="sb-topic ${isActive ? "active" : ""} ${isDone ? "completed" : ""}"
       data-topic="${topic.id}">
    <svg class="topic-check" width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <span class="sb-topic-title">${topic.title}</span>
    ${firstTag ? `<span class="sb-topic-tag tag-${firstTag}">${tagLabel(firstTag)}</span>` : ""}
  </div>`;
}

function tagLabel(tag) {
  const map = {
    theory: "Nəzəri",
    practice: "Praktik",
    setup: "Quraşdır",
    new: "Yeni",
  };
  return map[tag] || tag;
}

function toggleSection(sectionId) {
  const el = document.getElementById(`sec-${sectionId}`);
  if (!el) return;
  const isOpen = el.classList.contains("open");
  if (isOpen) {
    el.classList.remove("open");
    State.openSections.delete(sectionId);
  } else {
    el.classList.add("open");
    State.openSections.add(sectionId);
  }
  saveOpenSections();
}

/* ─── Router / Navigation ─── */
function navigateTo(route, updateHash = true) {
  State.currentRoute = route || "home";
  if (updateHash) {
    window.location.hash = route === "home" ? "" : route;
  }

  // Auto-open sidebar section containing this topic
  const topicData = getTopicById(route);
  if (topicData) {
    State.openSections.add(topicData.section.id);
  }

  renderSidebar();
  renderContent();
  renderBreadcrumb();
  updateFooter();

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    closeSidebarMobile();
  }

  // Scroll content to top
  const ca = $("contentArea");
  if (ca) ca.scrollTop = 0;
  window.scrollTo(0, 0);
}

/* ─── Content Rendering ─── */
function renderContent() {
  const area = $("contentArea");
  const route = State.currentRoute;

  if (route === "home") {
    area.innerHTML = renderHome();
  } else {
    const section = getSectionById(route);
    if (section) {
      area.innerHTML = renderSectionOverview(section);
    } else {
      const topic = getTopicById(route);
      if (topic) {
        area.innerHTML = renderTopicPage(topic);
      } else {
        area.innerHTML = render404();
      }
    }
  }

  // Attach inline event listeners
  area.querySelectorAll("[data-route]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(el.dataset.route);
    });
  });

  // Syntax highlighting
  if (window.Prism) Prism.highlightAll();

  // Wrap code blocks with header (language label + copy button)
  wrapCodeBlocks();
}

/* ─── Code Block Wrapper ─── */
function wrapCodeBlocks() {
  const langLabels = {
    java: "Java",
    xml: "XML",
    bash: "Bash",
    kotlin: "Kotlin",
    groovy: "Groovy",
    json: "JSON",
    yaml: "YAML",
    sql: "SQL",
    javascript: "JavaScript",
    typescript: "TypeScript",
    properties: "Properties",
    dockerfile: "Dockerfile",
  };

  document.querySelectorAll(".lesson-body pre").forEach((pre) => {
    // Skip if already wrapped
    if (pre.parentElement.classList.contains("code-wrap")) return;

    const code = pre.querySelector("code");
    if (!code) return;

    // Extract language from class e.g. "language-java"
    const langClass = [...code.classList].find((c) =>
      c.startsWith("language-"),
    );
    const langKey = langClass ? langClass.replace("language-", "") : "";
    const langLabel = langLabels[langKey] || langKey.toUpperCase() || "Code";

    // Ensure pre also carries the language class so CSS selectors match
    if (langClass && !pre.classList.contains(langClass)) {
      pre.classList.add(langClass);
    }

    const wrapper = document.createElement("div");
    wrapper.className = "code-wrap";

    const header = document.createElement("div");
    header.className = "code-header";
    header.innerHTML = `<span class="code-lang">${langLabel}</span><button class="code-copy-btn">Kopyala</button>`;

    wrapper.appendChild(header);
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
  });
}

/* ─── Home Page ─── */
function renderHome() {
  const total = getTotalTopicsCount();
  const sections = CURRICULUM.length;
  const hours = PHASES.reduce((a, p) => a + p.hours, 0);

  const phasesHTML = PHASES.map(
    (p) => `
    <div class="phase-card" style="--phase-color:${p.color}" data-route="${p.sections[0]}">
      <div class="phase-num">${p.num}</div>
      <span class="phase-icon">${p.icon}</span>
      <div class="phase-name">${p.name}</div>
      <div class="phase-desc">${p.desc}</div>
      <div class="phase-sections">
        ${p.sections
          .map((sid) => {
            const s = getSectionById(sid);
            return s
              ? `<span class="phase-sec-chip">${s.icon} ${s.title}</span>`
              : "";
          })
          .join("")}
      </div>
      <div class="phase-meta">
        <span class="phase-meta-item">📚 ${p.topics} mövzu</span>
        <span class="phase-meta-item">⏱️ ~${p.hours} saat</span>
      </div>
    </div>
  `,
  ).join("");

  const sectionsHTML = CURRICULUM.map((s) => {
    const doneCount = s.topics.filter((t) =>
      State.completedTopics.has(t.id),
    ).length;
    const levelClass = levelToClass(s.level);
    return `
    <div class="sec-card" data-route="${s.id}"
         style="--sec-color:${s.color};--sec-bg:${hexToRgba(s.color, 0.1)}">
      <div class="sec-icon-wrap" style="background:${hexToRgba(s.color, 0.12)}">
        <span>${s.icon}</span>
      </div>
      <div class="sec-info">
        <div class="sec-num">Bölmə ${s.num}</div>
        <div class="sec-name">${s.title}</div>
        <div class="sec-meta">
          <span class="sec-level ${levelClass}">${s.level}</span>
          <span>📚 ${s.topics.length} mövzu</span>
          <span>⏱️ ~${s.hours}s</span>
          ${doneCount > 0 ? `<span style="color:var(--green)">✓ ${doneCount}/${s.topics.length}</span>` : ""}
        </div>
      </div>
    </div>`;
  }).join("");

  return `
  <div class="fade-up">
    <!-- Hero -->
    <div class="home-hero">
      <div class="hero-badge">☕ Tam Kurs</div>
      <h1 class="hero-title">Java Backend<br><span>Sıfırdan Eksperte</span></h1>
      <p class="hero-sub">Ən müasir Java Backend texnologiyalarını addım-addım öyrən. Spring Boot, Microservices, Docker, Cloud və daha çox.</p>
      <div class="hero-stats">
        <div class="hero-stat">
          <span class="hero-stat-value">${sections}</span>
          <span class="hero-stat-label">Bölmə</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-value">${total}</span>
          <span class="hero-stat-label">Mövzu</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-value">~${hours}</span>
          <span class="hero-stat-label">Saat</span>
        </div>
        <div class="hero-stat">
          <span class="hero-stat-value">${PHASES.length}</span>
          <span class="hero-stat-label">Öyrənmə Fazası</span>
        </div>
      </div>
    </div>

    <!-- Phases -->
    <div class="phases-section">
      <div class="section-header">
        <div>
          <div class="section-title">📍 Öyrənmə Yolu</div>
          <div class="section-sub">Ardıcıl faza-ları keçərək Java Backend developer ol</div>
        </div>
      </div>
      <div class="phases-grid">${phasesHTML}</div>
    </div>

    <!-- All Sections -->
    <div>
      <div class="section-header">
        <div>
          <div class="section-title">📚 Bütün Bölmələr</div>
          <div class="section-sub">Hər bölməyə klikləyərək mövzulara bax</div>
        </div>
      </div>
      <div class="sections-grid">${sectionsHTML}</div>
    </div>
  </div>`;
}

/* ─── Section Overview ─── */
function renderSectionOverview(section) {
  const doneCount = section.topics.filter((t) =>
    State.completedTopics.has(t.id),
  ).length;
  const pct = Math.round((doneCount / section.topics.length) * 100);

  const topicsHTML = section.topics
    .map((topic, idx) => {
      const isDone = State.completedTopics.has(topic.id);
      return `
    <div class="topic-card ${isDone ? "completed" : ""}" data-route="${topic.id}">
      <div class="topic-idx">${String(idx + 1).padStart(2, "0")}</div>
      <div class="topic-card-info">
        <div class="topic-card-title">${topic.title}</div>
        <div class="topic-card-meta">
          <span class="topic-card-mins">⏱ ${topic.mins} dəq</span>
          <div class="topic-card-tags">
            ${topic.tags.map((tag) => `<span class="topic-tag tag-${tag}">${tagLabel(tag)}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>`;
    })
    .join("");

  return `
  <div class="fade-up">
    <div class="section-banner" style="background:${section.bg}" data-icon="${section.icon}">
      <div class="banner-num">Bölmə ${section.num} · ${section.level}</div>
      <div class="banner-title">${section.icon} ${section.title}</div>
      <div class="banner-desc">${section.desc}</div>
      <div class="banner-chips">
        <span class="banner-chip">📚 ${section.topics.length} mövzu</span>
        <span class="banner-chip">⏱️ ~${section.hours} saat</span>
        <span class="banner-chip">✓ ${doneCount}/${section.topics.length} tamamlandı (${pct}%)</span>
      </div>
    </div>

    <div class="section-header">
      <div class="section-title">Mövzular</div>
    </div>
    <div class="topics-grid">${topicsHTML}</div>
  </div>`;
}

/* ─── Topic Page ─── */
function renderTopicPage(topicData) {
  const { section } = topicData;
  const isDone = State.completedTopics.has(topicData.id);

  // Update done button
  const doneBtn = $("doneBtn");
  if (doneBtn) {
    $("doneBtnText").textContent = isDone
      ? "✓ Tamamlandı"
      : "Tamamlandı işarələ";
    doneBtn.classList.toggle("completed", isDone);
  }

  // Subtopics preview list
  const subtopicsHTML = topicData.subtopics
    ? `<ul class="cs-topics-list">${topicData.subtopics.map((s) => `<li>${s}</li>`).join("")}</ul>`
    : "";

  // CONTENT is declared with var in content.js so it's accessible here
  // eslint-disable-next-line no-undef
  const lessonHtml =
    (typeof CONTENT !== "undefined" && CONTENT[topicData.id]) ||
    topicData.content ||
    null;
  if (lessonHtml) {
    return `
  <div class="fade-up">
    <div class="topic-header">
      <div class="topic-header-meta">
        <span class="pill" style="background:${hexToRgba(section.color, 0.12)};color:${section.color};border:1px solid ${hexToRgba(section.color, 0.3)}">
          ${section.icon} ${section.title}
        </span>
        <span class="pill pill-${topicData.tags[0] === "theory" ? "blue" : "green"}">
          ${topicData.tags.map(tagLabel).join(" · ")}
        </span>
        <span class="text-muted text-sm">⏱ ${topicData.mins} dəqiqə</span>
        ${isDone ? '<span class="pill pill-green">✓ Tamamlandı</span>' : ""}
      </div>
      <h1 class="topic-title">${topicData.title}</h1>
    </div>
    <div class="lesson-body">${lessonHtml}</div>
  </div>`;
  }

  return `
  <div class="fade-up">
    <div class="topic-header">
      <div class="topic-header-meta">
        <span class="pill" style="background:${hexToRgba(section.color, 0.12)};color:${section.color};border:1px solid ${hexToRgba(section.color, 0.3)}">
          ${section.icon} ${section.title}
        </span>
        <span class="pill pill-${topicData.tags[0] === "theory" ? "blue" : "green"}">
          ${topicData.tags.map(tagLabel).join(" · ")}
        </span>
        <span class="text-muted text-sm">⏱ ${topicData.mins} dəqiqə</span>
        ${isDone ? '<span class="pill pill-green">✓ Tamamlandı</span>' : ""}
      </div>
      <h1 class="topic-title">${topicData.title}</h1>
    </div>

    <div class="coming-soon-page">
      <div class="cs-icon">🔨</div>
      <div class="cs-title">Bu mövzu hazırlanır...</div>
      <p class="cs-sub">
        Bu mövzunun ətraflı izahı, kod nümunələri və praktiki tapşırıqlar tezliklə əlavə olunacaq.
      </p>
      ${
        topicData.subtopics
          ? `
      <div class="cs-topics-preview">
        <div class="cs-topics-title">Bu mövzuda öyrənəcəksən:</div>
        ${subtopicsHTML}
      </div>`
          : ""
      }
    </div>
  </div>`;
}

/* ─── 404 ─── */
function render404() {
  return `
  <div class="coming-soon-page fade-up">
    <div class="cs-icon">🔍</div>
    <div class="cs-title">Səhifə tapılmadı</div>
    <p class="cs-sub">Bu route mövcud deyil.</p>
    <a href="#" data-route="home" style="color:var(--accent);font-weight:600">Ana Səhifəyə qayıt →</a>
  </div>`;
}

/* ─── Breadcrumb ─── */
function renderBreadcrumb() {
  const bc = $("breadcrumb");
  const route = State.currentRoute;

  if (route === "home") {
    bc.innerHTML = `<span class="bc-item bc-current">Ana Səhifə</span>`;
    return;
  }

  const section = getSectionById(route);
  if (section) {
    bc.innerHTML = `
      <a href="#" data-route="home" class="bc-item bc-home">Ana Səhifə</a>
      <span class="bc-sep">›</span>
      <span class="bc-item bc-current">${section.icon} ${section.title}</span>`;
    bc.querySelectorAll("[data-route]").forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(el.dataset.route);
      }),
    );
    return;
  }

  const topic = getTopicById(route);
  if (topic) {
    bc.innerHTML = `
      <a href="#" data-route="home" class="bc-item bc-home">Ana Səhifə</a>
      <span class="bc-sep">›</span>
      <a href="#" data-route="${topic.section.id}" class="bc-item">${topic.section.icon} ${topic.section.title}</a>
      <span class="bc-sep">›</span>
      <span class="bc-item bc-current">${topic.title}</span>`;
    bc.querySelectorAll("[data-route]").forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo(el.dataset.route);
      }),
    );
  }
}

/* ─── Footer Navigation ─── */
function updateFooter() {
  const footer = $("contentFooter");
  const route = State.currentRoute;
  const topic = getTopicById(route);

  if (!topic) {
    footer.style.display = "none";
    return;
  }

  footer.style.display = "flex";
  const { prev, next } = getNeighborTopics(route);

  const prevBtn = $("prevBtn");
  const nextBtn = $("nextBtn");

  if (prev) {
    prevBtn.style.display = "flex";
    $("prevTitle").textContent = prev.title;
    prevBtn.onclick = () => navigateTo(prev.id);
  } else {
    prevBtn.style.display = "none";
  }

  if (next) {
    nextBtn.style.display = "flex";
    $("nextTitle").textContent = next.title;
    nextBtn.onclick = () => navigateTo(next.id);
  } else {
    nextBtn.style.display = "none";
  }

  // Done button
  const doneBtn = $("doneBtn");
  const isDone = State.completedTopics.has(route);
  $("doneBtnText").textContent = isDone ? "✓ Tamamlandı" : "Tamamlandı işarələ";
  doneBtn.classList.toggle("completed", isDone);
  doneBtn.onclick = () => toggleTopicDone(route);
}

function toggleTopicDone(topicId) {
  if (State.completedTopics.has(topicId)) {
    State.completedTopics.delete(topicId);
  } else {
    State.completedTopics.add(topicId);
  }
  saveCompleted();
  updateProgress();
  renderSidebar();
  updateFooter();
  // Re-render topic page to update done badge
  renderContent();
}

/* ─── Event Bindings ─── */
function bindEvents() {
  // Theme toggle
  $("themeBtn").addEventListener("click", toggleTheme);

  // Hamburger
  $("hamburgerBtn").addEventListener("click", openSidebarMobile);

  // Sidebar close
  $("sidebarCloseBtn").addEventListener("click", closeSidebarMobile);

  // Backdrop
  $("sidebarBackdrop").addEventListener("click", closeSidebarMobile);

  // Search input
  $("searchInput").addEventListener("input", (e) => {
    State.searchQuery = e.target.value;
    $("searchClear").style.display = e.target.value ? "flex" : "none";
    renderSidebar();
  });

  $("searchClear").addEventListener("click", () => {
    $("searchInput").value = "";
    State.searchQuery = "";
    $("searchClear").style.display = "none";
    renderSidebar();
  });

  // Keyboard shortcut: Cmd/Ctrl+K for search
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      $("searchInput").focus();
      $("searchInput").select();
    }
  });

  // Hash change
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash !== State.currentRoute) navigateTo(hash || "home", false);
  });
}

/* ─── Mobile sidebar ─── */
function openSidebarMobile() {
  $("sidebar").classList.add("open");
  $("sidebarBackdrop").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeSidebarMobile() {
  $("sidebar").classList.remove("open");
  $("sidebarBackdrop").classList.remove("show");
  document.body.style.overflow = "";
}

/* ─── Helpers ─── */
function levelToClass(level) {
  const map = {
    Başlanğıc: "level-beginner",
    Orta: "level-intermediate",
    İrəli: "level-advanced",
    Ekspert: "level-expert",
  };
  return map[level] || "level-beginner";
}

function hexToRgba(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ─── Code Copy Buttons (for future topic pages with code blocks) ─── */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".code-copy-btn");
  if (!btn) return;
  const codeEl = btn.closest(".code-wrap")?.querySelector("code");
  if (!codeEl) return;
  navigator.clipboard.writeText(codeEl.textContent.trim()).then(() => {
    btn.textContent = "✓ Kopyalandı";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "Kopyala";
      btn.classList.remove("copied");
    }, 2000);
  });
});
