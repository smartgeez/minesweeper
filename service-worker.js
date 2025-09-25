const CACHE_NAME = "minesweeper-cache-v1";
const urlsToCache = [
  "/minesweeper/",
  "/minesweeper/index.html",
  "/minesweeper/manifest.json",
  "/minesweeper/icon-192.png",
  "/minesweeper/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
