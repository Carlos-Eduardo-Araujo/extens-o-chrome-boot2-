const CACHE = "bootcamp-cache-v1";

const ASSETS = [
  "/apps/web/index.html",
  "/apps/web/main.js",
  "/apps/web/manifest.webmanifest",
  "/apps/web/icons/icon-192.png",
  "/apps/web/icons/icon-512.png"
];


self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});


self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
