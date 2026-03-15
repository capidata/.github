const OWNER = "capidata";
const REPO = ".github";
const PATH = "docs";
const BRANCH = "main";

let CACHE_BUSTER = "";

async function fetchCacheBuster() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/commits?sha=${BRANCH}&path=${PATH}&per_page=1`,
    );
    const data = await res.json();
    CACHE_BUSTER = data[0]?.sha?.slice(0, 7) ?? String(Date.now());
  } catch {
    CACHE_BUSTER = String(Date.now());
  }
}

const docList = document.getElementById("doc-list");
const content = document.getElementById("content");
const homeLink = document.getElementById("home-link");
const loadingOverlay = document.getElementById("loading-overlay");
const themeLightBtn = document.getElementById("theme-light");
const themeDarkBtn = document.getElementById("theme-dark");
const fontSerifBtn = document.getElementById("font-serif");
const fontSansBtn = document.getElementById("font-sans");
const fontMonoBtn = document.getElementById("font-mono");

// Loading management
function showLoading() {
  loadingOverlay.classList.remove("hidden");
}

function hideLoading() {
  loadingOverlay.classList.add("hidden");
}

// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem("capidata-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  applyTheme(theme);
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeDarkBtn.classList.add("active");
    themeLightBtn.classList.remove("active");
  } else {
    document.body.classList.remove("dark-mode");
    themeLightBtn.classList.add("active");
    themeDarkBtn.classList.remove("active");
  }
  localStorage.setItem("capidata-theme", theme);
}

themeLightBtn.addEventListener("click", () => applyTheme("light"));
themeDarkBtn.addEventListener("click", () => applyTheme("dark"));

// Font management
function initFont() {
  const savedFont = localStorage.getItem("capidata-font") || "serif";
  applyFont(savedFont);
}

function applyFont(font) {
  document.body.classList.remove("font-serif", "font-sans", "font-mono");

  if (font === "sans") {
    document.body.classList.add("font-sans");
    fontSansBtn.classList.add("active");
    fontSerifBtn.classList.remove("active");
    fontMonoBtn.classList.remove("active");
  } else if (font === "mono") {
    document.body.classList.add("font-mono");
    fontMonoBtn.classList.add("active");
    fontSerifBtn.classList.remove("active");
    fontSansBtn.classList.remove("active");
  } else {
    fontSerifBtn.classList.add("active");
    fontSansBtn.classList.remove("active");
    fontMonoBtn.classList.remove("active");
  }
  localStorage.setItem("capidata-font", font);
}

fontSerifBtn.addEventListener("click", () => applyFont("serif"));
fontSansBtn.addEventListener("click", () => applyFont("sans"));
fontMonoBtn.addEventListener("click", () => applyFont("mono"));

function slugFromFile(name) {
  return name.replace(/\.md$/i, "");
}

function titleFromName(name) {
  return name.replace(/\.md$/i, "").replace(/_/g, " ").replace(/-/g, " ");
}

function extractH1(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

async function fetchDocList() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}?ref=${BRANCH}`,
    );
    const files = await res.json();
    const docs = files
      .filter((f) => f.name.endsWith(".md"))
      .sort((a, b) => a.name.localeCompare(b.name));

    // Keep the home link and replace the rest
    const homeItem = docList.querySelector("li:first-child");
    docList.innerHTML = "";
    docList.appendChild(homeItem);

    for (const doc of docs) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + slugFromFile(doc.name);
      a.dataset.file = doc.name;

      // Fetch content to extract H1
      try {
        const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${PATH}/${doc.name}?v=${CACHE_BUSTER}`;
        const contentRes = await fetch(url);
        const markdown = await contentRes.text();
        const h1 = extractH1(markdown);
        a.textContent = h1 || titleFromName(doc.name);
      } catch {
        a.textContent = titleFromName(doc.name);
      }

      a.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = slugFromFile(doc.name);
      });
      li.appendChild(a);
      docList.appendChild(li);
    }

    return docs;
  } catch (err) {
    docList.innerHTML += '<li class="loading">erro ao carregar</li>';
    console.error(err);
    return [];
  }
}

async function loadDoc(filename) {
  content.innerHTML =
    '<p style="color:var(--muted);font-style:italic;">carregando...</p>';
  content.className = "md";

  try {
    const url = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${PATH}/${filename}?v=${CACHE_BUSTER}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const md = await res.text();
    content.innerHTML = marked.parse(md);
  } catch (err) {
    content.innerHTML = "<p>Documento não encontrado.</p>";
    content.className = "index-view";
  }

  document.querySelectorAll("nav a").forEach((a) => {
    a.classList.toggle("active", a.dataset.file === filename);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function route() {
  const hash = window.location.hash.slice(1);
  if (!hash) {
    content.innerHTML =
      '<img src="assets/images/sil.png" alt="logo" /><h2>Documentação da CAPIDATA</h2>';
    content.className = "index-view";
    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.remove("active"));
    homeLink.classList.add("active");
    return;
  }
  homeLink.classList.remove("active");
  const filename = hash + ".md";
  await loadDoc(filename);
}

window.addEventListener("hashchange", route);

// Initialize theme, font and load docs
initTheme();
initFont();
showLoading();
fetchCacheBuster().then(() =>
  fetchDocList().then(() => {
    route();
    hideLoading();
  }),
);
