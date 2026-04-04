const CACHE_NAME = "capidata-v3.1";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/css/styles.css",
  "/assets/scripts/docs.js",
  "/assets/images/favicon.ico",
  "/assets/images/favicon-256x256.png",
  "/assets/images/capidata.png",
  "/assets/images/sil.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Arquivos estáticos locais: cache-first
  if (url.origin === self.location.origin) {
    // SPA fallback: if not a file request (no extension), serve index.html
    const hasExtension = url.pathname.split("/").pop().includes(".");
    if (!hasExtension && url.pathname !== "/") {
      event.respondWith(
        caches.match("/index.html").then(
          (cached) => cached ?? fetch("/index.html"),
        ),
      );
      return;
    }
    event.respondWith(
      caches.match(event.request).then(
        (cached) => cached ?? fetch(event.request),
      ),
    );
    return;
  }

  // Conteúdo remoto (GitHub raw / API): network-first, fallback ao cache
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
