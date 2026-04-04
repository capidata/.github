/**
 * DocsEngine — Reusable documentation site engine
 *
 * Features:
 *   - GitHub-hosted or local markdown rendering (via marked.js)
 *   - Mermaid diagram injection from .mmd files
 *   - Auto-generated table of contents per document
 *   - Theme switching (light / gray / dark)
 *   - Accent color picker
 *   - Font selector
 *   - Auto-translation via Google Translate (chunked, cached)
 *   - Clean URL routing with hash fallback
 *   - Scroll-to-top floating button
 *   - Service worker + offline support
 *
 * Usage:
 *   <script src="docs.js"></script>
 *   <script>
 *     DocsEngine.init({
 *       github: { owner: "my-org", repo: "my-repo", path: "docs", branch: "main" },
 *       localDocs: ["README.md", "GUIDE.md"],
 *       prefix: "myproject",
 *       home: { image: "logo.png", title: "My Docs" },
 *       fonts: ["spectral", "lora", "inter"],
 *       defaultFont: "spectral",
 *       defaultLang: "en",
 *       toc: { label: "Contents", minHeadings: 3 },
 *       diagramsPath: "diagrams",
 *     });
 *   </script>
 *
 * Required HTML ids:
 *   #doc-list, #content, #home-link, #loading-overlay, #scroll-top
 *
 * Optional HTML elements (auto-detected):
 *   #theme-light, #theme-gray, #theme-dark
 *   [data-color] buttons
 *   [data-lang] buttons
 *   #font-{key} buttons (matching config.fonts keys)
 */

const DocsEngine = (() => {
  // ── Defaults ────────────────────────────────────────────────────

  const DEFAULTS = {
    github: { owner: "", repo: "", path: "docs", branch: "main" },
    localDocs: [],
    prefix: "docs-engine",
    home: { image: "assets/images/logo.png", title: "Documentation" },
    fonts: [],
    defaultFont: "",
    defaultLang: "pt",
    toc: { label: "Contents", minHeadings: 3 },
    diagramsPath: "diagramas",
  };

  let cfg = {};

  // ── State ───────────────────────────────────────────────────────

  const IS_LOCAL = () =>
    location.hostname === "localhost" || location.hostname === "127.0.0.1";

  let cacheBuster = "";
  let currentLang = "";
  let originalMarkdown = "";
  let currentFilename = "";

  // ── DOM refs (resolved at init) ─────────────────────────────────

  let $docList,
    $content,
    $homeLink,
    $overlay,
    $scrollTop,
    $themeLight,
    $themeGray,
    $themeDark,
    $colorBtns,
    $langBtns,
    $fontBtns;

  // ── Helpers ─────────────────────────────────────────────────────

  const key = (k) => `${cfg.prefix}-${k}`;

  function slugFromFile(name) {
    return name.replace(/\.md$/i, "");
  }

  function titleFromName(name) {
    return name.replace(/\.md$/i, "").replace(/_/g, " ").replace(/-/g, " ");
  }

  function extractH1(markdown) {
    const m = markdown.match(/^#\s+(.+)$/m);
    return m ? m[1].trim() : null;
  }

  function rawUrl(filename) {
    if (IS_LOCAL()) return `${filename}?v=${cacheBuster}`;
    const g = cfg.github;
    return `https://raw.githubusercontent.com/${g.owner}/${g.repo}/${g.branch}/${g.path}/${filename}?v=${cacheBuster}`;
  }

  function diagramUrl(slug) {
    if (IS_LOCAL()) return `${cfg.diagramsPath}/${slug}.mmd?v=${cacheBuster}`;
    const g = cfg.github;
    return `https://raw.githubusercontent.com/${g.owner}/${g.repo}/${g.branch}/${g.path}/${cfg.diagramsPath}/${slug}.mmd?v=${cacheBuster}`;
  }

  // ── Loading ─────────────────────────────────────────────────────

  function showLoading() {
    $overlay?.classList.remove("hidden");
  }
  function hideLoading() {
    $overlay?.classList.add("hidden");
  }

  // ── Cache buster ────────────────────────────────────────────────

  async function fetchCacheBuster() {
    if (IS_LOCAL() || !cfg.github.owner) {
      cacheBuster = String(Date.now());
      return;
    }
    try {
      const g = cfg.github;
      const res = await fetch(
        `https://api.github.com/repos/${g.owner}/${g.repo}/commits?sha=${g.branch}&path=${g.path}&per_page=1`,
      );
      const data = await res.json();
      cacheBuster = data[0]?.sha?.slice(0, 7) ?? String(Date.now());
    } catch {
      cacheBuster = String(Date.now());
    }
  }

  // ── Theme ───────────────────────────────────────────────────────

  function initTheme() {
    const saved = localStorage.getItem(key("theme"));
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
  }

  function applyTheme(theme) {
    document.body.classList.remove("dark-mode", "gray-mode");
    [$themeLight, $themeGray, $themeDark].forEach(
      (b) => b?.classList.remove("active"),
    );

    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      $themeDark?.classList.add("active");
    } else if (theme === "gray") {
      document.body.classList.add("gray-mode");
      $themeGray?.classList.add("active");
    } else {
      $themeLight?.classList.add("active");
    }
    localStorage.setItem(key("theme"), theme);
    syncMermaidTheme();
  }

  function syncMermaidTheme() {
    if (typeof mermaid === "undefined") return;
    const isDark =
      document.body.classList.contains("dark-mode") ||
      document.body.classList.contains("gray-mode");
    mermaid.initialize({ theme: isDark ? "dark" : "default" });
    const diagrams = document.querySelectorAll(".mermaid");
    if (diagrams.length) mermaid.run({ querySelector: ".mermaid" });
  }

  // ── Colors ──────────────────────────────────────────────────────

  function initColor() {
    const saved = localStorage.getItem(key("color"));
    if (saved) applyColor(saved);
  }

  function applyColor(color) {
    const classes = Array.from(document.body.classList).filter((c) =>
      c.startsWith("color-"),
    );
    document.body.classList.remove(...classes);

    if (color) {
      document.body.classList.add("color-" + color);
      localStorage.setItem(key("color"), color);
    } else {
      localStorage.removeItem(key("color"));
    }
    $colorBtns?.forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.color === color),
    );
  }

  // ── Fonts ───────────────────────────────────────────────────────

  function initFont() {
    const saved = localStorage.getItem(key("font")) || cfg.defaultFont;
    if (saved) applyFont(saved);
  }

  function applyFont(font) {
    const classes = Array.from(document.body.classList).filter((c) =>
      c.startsWith("font-"),
    );
    document.body.classList.remove(...classes);
    if (cfg.fonts.includes(font)) {
      document.body.classList.add("font-" + font);
    }
    localStorage.setItem(key("font"), font);
    Object.entries($fontBtns).forEach(([k, btn]) =>
      btn?.classList.toggle("active", k === font),
    );
  }

  // ── Doc list ────────────────────────────────────────────────────

  async function fetchDocList() {
    try {
      let docNames;

      if (IS_LOCAL() || !cfg.github.owner) {
        docNames = cfg.localDocs;
      } else {
        const g = cfg.github;
        const res = await fetch(
          `https://api.github.com/repos/${g.owner}/${g.repo}/contents/${g.path}?ref=${g.branch}`,
        );
        const files = await res.json();
        docNames = files
          .filter((f) => f.name.endsWith(".md"))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((f) => f.name);
      }

      const homeItem = $docList.querySelector("li:first-child");
      $docList.innerHTML = "";
      $docList.appendChild(homeItem);

      for (const name of docNames) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "/" + slugFromFile(name);
        a.dataset.file = name;

        try {
          const res = await fetch(rawUrl(name));
          const md = await res.text();
          a.textContent = extractH1(md) || titleFromName(name);
        } catch {
          a.textContent = titleFromName(name);
        }

        a.addEventListener("click", (e) => {
          e.preventDefault();
          navigate(slugFromFile(name));
        });
        li.appendChild(a);
        $docList.appendChild(li);
      }
      return docNames;
    } catch (err) {
      $docList.innerHTML += '<li class="loading">error loading docs</li>';
      console.error(err);
      return [];
    }
  }

  // ── Mermaid ─────────────────────────────────────────────────────

  async function injectMermaidDiagrams() {
    if (typeof mermaid !== "undefined") syncMermaidTheme();

    const tags = $content.querySelectorAll("mermaid[src]");
    for (const tag of tags) {
      const slug = tag.getAttribute("src");
      const desc = tag.getAttribute("description") || "";
      try {
        const res = await fetch(diagramUrl(slug));
        if (!res.ok) continue;
        const src = await res.text();
        const wrap = document.createElement("div");
        wrap.className = "mermaid-diagram";
        let html = `<div class="mermaid">${src}</div>`;
        if (desc) html = `<p class="mermaid-description">${desc}</p>\n${html}`;
        wrap.innerHTML = html;
        tag.replaceWith(wrap);
      } catch {
        continue;
      }
    }
    const fresh = $content.querySelectorAll(
      ".mermaid-diagram .mermaid:not([data-processed])",
    );
    if (typeof mermaid !== "undefined" && fresh.length) {
      await mermaid.run({ nodes: fresh });
    }
  }

  // ── Table of contents ───────────────────────────────────────────

  function buildToc() {
    document.getElementById("doc-toc")?.remove();

    const headings = $content.querySelectorAll("h2, h3");
    if (headings.length < cfg.toc.minHeadings) return;

    const toc = document.createElement("div");
    toc.id = "doc-toc";

    const toggle = document.createElement("button");
    toggle.className = "toc-toggle";
    toggle.textContent = cfg.toc.label;
    toggle.setAttribute("aria-expanded", "false");

    const list = document.createElement("ul");
    list.className = "toc-list collapsed";

    headings.forEach((h) => {
      const id =
        h.id ||
        h.textContent
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      h.id = id;

      const li = document.createElement("li");
      li.className = h.tagName === "H3" ? "toc-h3" : "toc-h2";
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = h.textContent;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: "smooth", block: "start" });
        h.classList.add("toc-highlight");
        setTimeout(() => h.classList.remove("toc-highlight"), 1500);
      });
      li.appendChild(a);
      list.appendChild(li);
    });

    toggle.addEventListener("click", () => {
      const collapsed = list.classList.toggle("collapsed");
      toggle.setAttribute("aria-expanded", String(!collapsed));
    });

    toc.appendChild(toggle);
    toc.appendChild(list);

    const activeLink = $docList.querySelector("a.active");
    if (activeLink) {
      activeLink.parentElement.after(toc);
    } else {
      $docList.appendChild(toc);
    }
  }

  // ── Document loading ────────────────────────────────────────────

  async function loadDoc(filename) {
    showLoading();
    $content.innerHTML = "";
    $content.className = "md";

    try {
      const res = await fetch(rawUrl(filename));
      if (!res.ok) throw new Error(res.status);
      const md = await res.text();
      originalMarkdown = md;
      currentFilename = filename;
      $content.innerHTML = marked.parse(md);
      await injectMermaidDiagrams();
    } catch {
      $content.innerHTML = "<p>Document not found.</p>";
      $content.className = "index-view";
    }

    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.toggle("active", a.dataset.file === filename));

    buildToc();
    window.scrollTo({ top: 0, behavior: "smooth" });
    hideLoading();
  }

  // ── Routing ─────────────────────────────────────────────────────

  function getSlug() {
    if (window.location.hash.length > 1) return window.location.hash.slice(1);
    const path = window.location.pathname.replace(/^\//, "").replace(/\/$/, "");
    return path || "";
  }

  function navigate(slug) {
    if (history.pushState) {
      history.pushState(null, "", "/" + slug);
    } else {
      window.location.hash = slug;
    }
    route();
  }

  async function route() {
    const slug = getSlug();
    if (!slug) {
      document.getElementById("doc-toc")?.remove();
      $content.innerHTML = `<img src="${cfg.home.image}" alt="logo" /><h2>${cfg.home.title}</h2>`;
      $content.className = "index-view";
      document
        .querySelectorAll("nav a")
        .forEach((a) => a.classList.remove("active"));
      $homeLink?.classList.add("active");
      return;
    }
    $homeLink?.classList.remove("active");
    await loadDoc(slug + ".md");
  }

  // ── Translation ─────────────────────────────────────────────────

  function trCacheKey(filename, lang) {
    return `${cfg.prefix}-tr-${filename}-${lang}`;
  }

  async function translateText(text, targetLang) {
    const url =
      "https://translate.googleapis.com/translate_a/single?" +
      new URLSearchParams({
        client: "gtx",
        sl: cfg.defaultLang,
        tl: targetLang,
        dt: "t",
        q: text,
      });
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Translation API: ${res.status}`);
    const data = await res.json();
    return data[0].map((seg) => seg[0]).join("");
  }

  async function translateMarkdown(md, targetLang) {
    const MAX = 4500;
    const parts = md.split(/(\n\n+)/);
    const chunks = [];
    let cur = "";

    for (const p of parts) {
      if (cur.length + p.length > MAX && cur.length > 0) {
        chunks.push(cur);
        cur = p;
      } else {
        cur += p;
      }
    }
    if (cur) chunks.push(cur);

    const results = [];
    for (let i = 0; i < chunks.length; i++) {
      const c = chunks[i];
      if (c.trim().length === 0 || /^[\s#\-|:>*`]+$/.test(c.trim())) {
        results.push(c);
        continue;
      }
      try {
        results.push(await translateText(c, targetLang));
      } catch (err) {
        console.warn(`Chunk ${i + 1}/${chunks.length} failed:`, err);
        results.push(c);
      }
      if (i < chunks.length - 1)
        await new Promise((r) => setTimeout(r, 150));
    }
    return results.join("");
  }

  async function translatePage(targetLang) {
    if (targetLang === cfg.defaultLang) {
      if (originalMarkdown && currentFilename) {
        $content.innerHTML = marked.parse(originalMarkdown);
        await injectMermaidDiagrams();
        buildToc();
      }
      document.body.classList.remove("rtl");
      currentLang = cfg.defaultLang;
      return;
    }

    if (!originalMarkdown) return;

    const cached = localStorage.getItem(
      trCacheKey(currentFilename, targetLang),
    );
    if (cached) {
      $content.innerHTML = marked.parse(cached);
      await injectMermaidDiagrams();
      buildToc();
      document.body.classList.toggle("rtl", targetLang === "ar");
      currentLang = targetLang;
      return;
    }

    const translated = await translateMarkdown(originalMarkdown, targetLang);
    try {
      localStorage.setItem(
        trCacheKey(currentFilename, targetLang),
        translated,
      );
    } catch {
      /* full */
    }

    $content.innerHTML = marked.parse(translated);
    await injectMermaidDiagrams();
    buildToc();
    document.body.classList.toggle("rtl", targetLang === "ar");
    currentLang = targetLang;
    localStorage.setItem(key("lang"), targetLang);
  }

  function setLangButtons(lang) {
    $langBtns?.forEach((b) => b.classList.remove("active", "translating"));
    document.querySelector(`[data-lang="${lang}"]`)?.classList.add("active");
  }

  async function switchLang(lang) {
    if (lang === currentLang) return;

    currentLang = lang;
    localStorage.setItem(key("lang"), lang);
    setLangButtons(lang);

    if (!$content.classList.contains("md")) return;

    $langBtns?.forEach((b) => b.classList.add("translating"));
    showLoading();
    try {
      await translatePage(lang);
    } catch (err) {
      console.error("Translation failed:", err);
    }
    $langBtns?.forEach((b) => b.classList.remove("translating"));
    hideLoading();
  }

  async function applySavedLang() {
    const saved = localStorage.getItem(key("lang")) || cfg.defaultLang;
    currentLang = saved;
    setLangButtons(saved);
    document.body.classList.toggle("rtl", saved === "ar");
    if (saved !== cfg.defaultLang && originalMarkdown) {
      currentLang = cfg.defaultLang;
      await switchLang(saved);
    }
  }

  function resetLangState() {
    currentLang = cfg.defaultLang;
    originalMarkdown = "";
    document.body.classList.remove("rtl");
  }

  // ── Scroll to top ───────────────────────────────────────────────

  function initScrollTop() {
    if (!$scrollTop) return;
    window.addEventListener("scroll", () => {
      $scrollTop.classList.toggle("visible", window.scrollY > 400);
    });
    $scrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── Navigation events ───────────────────────────────────────────

  async function onNavigate() {
    resetLangState();
    await route();
    await applySavedLang();
  }

  // ── Sidebar builder ──────────────────────────────────────────────

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>',
    matrix: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.632 0v24h1.927V1.927H24V0zm2.56 2.56v18.88h18.88V2.56zm16.32 4.653v9.574h-1.927V8.14l-3.493 4.11-3.493-4.11v8.647H8.673V7.213h1.927l3.419 4.025 3.419-4.025zM.632 22.073V24H24v-1.927z"/></svg>',
    discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  };

  const COLORS = [
    { key: "red", hex: "#ef4444" },
    { key: "orange", hex: "#f97316" },
    { key: "yellow", hex: "#eab308" },
    { key: "green", hex: "#22c55e" },
    { key: "blue", hex: "#3b82f6" },
    { key: "indigo", hex: "#6366f1" },
    { key: "violet", hex: "#a855f7" },
  ];

  function buildSidebar() {
    const container = document.getElementById("sidebar-controls");
    if (!container) return;
    container.innerHTML = "";

    const sb = cfg.sidebar || {};

    // links
    if (sb.links?.enabled && sb.links.items?.length) {
      const div = document.createElement("div");
      div.className = "social-links";
      div.innerHTML = `<label>${sb.links.label || "Links"}</label>`;
      sb.links.items.forEach((item) => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.className = "social-link";
        a.title = item.label;
        const icon = ICONS[item.icon] || ICONS.link;
        a.innerHTML = icon + " " + item.label;
        div.appendChild(a);
      });
      container.appendChild(div);
    }

    // theme
    if (sb.theme?.enabled !== false) {
      const div = document.createElement("div");
      div.className = "theme-toggle";
      div.innerHTML = `<label>${sb.theme?.label || "Theme"}</label>
        <button id="theme-light" title="Light">☀️</button>
        <button id="theme-gray" title="Gray">🌫️</button>
        <button id="theme-dark" title="Dark">🌙</button>`;
      container.appendChild(div);
    }

    // colors
    if (sb.colors?.enabled !== false) {
      const div = document.createElement("div");
      div.className = "color-selector";
      const btns = document.createElement("div");
      btns.className = "color-selector-buttons";
      div.innerHTML = `<label>${sb.colors?.label || "Color"}</label>`;
      COLORS.forEach((c) => {
        const b = document.createElement("button");
        b.dataset.color = c.key;
        b.title = c.key;
        b.style.background = c.hex;
        btns.appendChild(b);
      });
      div.appendChild(btns);
      container.appendChild(div);
    }

    // fonts
    if (sb.fonts?.enabled !== false && cfg.fonts.length) {
      const div = document.createElement("div");
      div.className = "font-selector";
      div.innerHTML = `<label>${sb.fonts?.label || "Font"}</label>`;
      const btns = document.createElement("div");
      btns.className = "font-selector-buttons";
      cfg.fonts.forEach((f) => {
        const b = document.createElement("button");
        b.id = "font-" + f;
        b.title = f;
        b.textContent = "Aa";
        b.style.fontFamily = `'${f}', serif`;
        btns.appendChild(b);
      });
      div.appendChild(btns);
      container.appendChild(div);
    }

    // languages
    if (sb.languages?.enabled !== false && sb.languages?.items?.length) {
      const div = document.createElement("div");
      div.className = "lang-selector";
      div.innerHTML = `<label>${sb.languages?.label || "Language"}</label>`;
      const btns = document.createElement("div");
      btns.className = "lang-selector-buttons";
      sb.languages.items.forEach((l) => {
        const b = document.createElement("button");
        b.dataset.lang = l.code;
        b.title = l.title;
        b.textContent = l.label;
        if (l.code === cfg.defaultLang) b.classList.add("active");
        btns.appendChild(b);
      });
      div.appendChild(btns);
      container.appendChild(div);
    }
  }

  // ── Public init ─────────────────────────────────────────────────

  async function init(userConfig = {}) {
    cfg = { ...DEFAULTS, ...userConfig };
    if (userConfig.github)
      cfg.github = { ...DEFAULTS.github, ...userConfig.github };
    if (userConfig.toc) cfg.toc = { ...DEFAULTS.toc, ...userConfig.toc };
    if (userConfig.home) cfg.home = { ...DEFAULTS.home, ...userConfig.home };

    currentLang = cfg.defaultLang;

    // build sidebar from config before resolving DOM refs
    buildSidebar();

    // resolve DOM
    $docList = document.getElementById("doc-list");
    $content = document.getElementById("content");
    $homeLink = document.getElementById("home-link");
    $overlay = document.getElementById("loading-overlay");
    $scrollTop = document.getElementById("scroll-top");
    $themeLight = document.getElementById("theme-light");
    $themeGray = document.getElementById("theme-gray");
    $themeDark = document.getElementById("theme-dark");
    $colorBtns = document.querySelectorAll("[data-color]");
    $langBtns = document.querySelectorAll("[data-lang]");

    // font buttons: match ids "font-{key}" from config
    $fontBtns = {};
    cfg.fonts.forEach((f) => {
      $fontBtns[f] = document.getElementById("font-" + f);
    });

    // home link
    $homeLink?.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("");
    });

    // themes
    $themeLight?.addEventListener("click", () => applyTheme("light"));
    $themeGray?.addEventListener("click", () => applyTheme("gray"));
    $themeDark?.addEventListener("click", () => applyTheme("dark"));

    // colors
    $colorBtns?.forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = localStorage.getItem(key("color"));
        applyColor(current === btn.dataset.color ? null : btn.dataset.color);
      });
    });

    // fonts
    Object.entries($fontBtns).forEach(([k, btn]) => {
      btn?.addEventListener("click", () => applyFont(k));
    });

    // languages
    $langBtns?.forEach((btn) => {
      btn.addEventListener("click", () => switchLang(btn.dataset.lang));
    });

    // navigation
    window.addEventListener("popstate", onNavigate);
    window.addEventListener("hashchange", onNavigate);

    // scroll to top
    initScrollTop();

    // initialize preferences
    initTheme();
    initColor();
    initFont();
    if (typeof mermaid !== "undefined") syncMermaidTheme();

    // load
    showLoading();
    await fetchCacheBuster();
    await fetchDocList();
    await route();
    await applySavedLang();
    hideLoading();
  }

  // ── Public API ───���──────────────────────────────────────────────

  return {
    init,
    navigate,
    applyTheme,
    applyColor,
    applyFont,
    switchLang,
  };
})();
