const CACHE_NAME = "pflege-v8";
const assets = [
  "/",
  "/index.html",
  "/anatomie.html",
  "/training.html",
  "/goethe.html",
  "/rehber.html",
  "/hakkimizda.html",
  "/iletisim.html",
  "/impressum.html",
  "/datenschutz.html",
  "/ekle.html",
  "/favoriten.html",
  "/spiel.html",
  "/simulasyon.html",
  "/style.css",
  "/script.js",
  "/data.js",
  "/manifest.json",
  "/favicon.png",
  "https://raw.githubusercontent.com/azo73/medvokabeln/main/Detailed%20human%20anatomical%20model%20display.png"
];

self.addEventListener("install", installEvent => {
  self.skipWaiting();
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", activateEvent => {
  activateEvent.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request).catch(() => {
        if (fetchEvent.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
