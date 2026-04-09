const CACHE_NAME = "pflege-v1";
const assets = [
  "/",
  "/index.html",
  "/anatomie.html",
  "/style.css",
  "/script.js",
  "/data.js",
  "https://raw.githubusercontent.com/azo73/medvokabeln/main/Detailed%20human%20anatomical%20model%20display.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
