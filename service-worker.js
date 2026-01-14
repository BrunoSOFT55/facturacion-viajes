self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("facturacion-v1").then(cache => {
      return cache.addAll([
        "/facturacion-viajes/",
        "/facturacion-viajes/index.html",
        "/facturacion-viajes/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
