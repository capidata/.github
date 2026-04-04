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

  // ── Public init ─────────────────────────────────────────────────

  async function init(userConfig = {}) {
    cfg = { ...DEFAULTS, ...userConfig };
    if (userConfig.github)
      cfg.github = { ...DEFAULTS.github, ...userConfig.github };
    if (userConfig.toc) cfg.toc = { ...DEFAULTS.toc, ...userConfig.toc };
    if (userConfig.home) cfg.home = { ...DEFAULTS.home, ...userConfig.home };

    currentLang = cfg.defaultLang;

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
