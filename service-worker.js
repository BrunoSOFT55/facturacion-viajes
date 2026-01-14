self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("viajes-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./logo.png",
        "./icon-192.png",
        "./icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
