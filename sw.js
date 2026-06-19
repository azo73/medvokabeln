// Versiyonu v6 yaptık. Sitede büyük bir değişiklik yaptığında 
// bu rakamı v7, v8 diye artır ki kullanıcıların telefonu yeni kodları çeksin.
const CACHE_NAME = "medvokabeln-v6";

// Önbelleğe alınacak tüm güncel sayfalar ve dosyalar
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
  "/topluluk.html",
  "/ekle.html",
  "/style.css",
  "/script.js",
  "/data.js",
  "/manifest.json",
  "/favicon.png",
  "https://raw.githubusercontent.com/azo73/medvokabeln/main/Detailed%20human%20anatomical%20model%20display.png"
];

// 1. KURULUM (Install) Aşaması
self.addEventListener("install", installEvent => {
  // Yeni versiyon geldiğinde beklemeden hemen devreye girmesini sağlar
  self.skipWaiting(); 
  
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Önbellek yükleniyor...");
      return cache.addAll(assets);
    })
  );
});

// 2. AKTİFLEŞTİRME (Activate) Aşaması
// Bu kod, versiyon (CACHE_NAME) değiştiğinde eski gereksiz dosyaları telefonun hafızasından siler.
self.addEventListener("activate", activateEvent => {
  activateEvent.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("Eski önbellek silindi:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. VERİ ÇEKME (Fetch) Aşaması
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      // Dosya önbellekte varsa oradan ver (çok hızlı yüklenir), yoksa internetten (network) çek
      return res || fetch(fetchEvent.request).catch(() => {
        // Eğer kullanıcının interneti tamamen kopmuşsa ve tıkladığı sayfa önbellekte yoksa, 
        // çökme ekranı yerine ana sayfaya (index.html) yönlendirir.
        if (fetchEvent.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
