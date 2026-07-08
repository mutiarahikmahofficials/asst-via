// Guru AI Assistant - Service Worker (minimal, untuk PWA installability)
const CACHE_NAME = 'guru-ai-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Network-first strategy - selalu ambil versi terbaru dari internet
// tapi tetap terdaftar sebagai PWA yang valid
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
