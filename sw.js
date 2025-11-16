self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Simple network-first for navigation, cache-first for others could be implemented.
  event.respondWith(fetch(event.request).catch(function() {
    return caches.match(event.request);
  }));
});
