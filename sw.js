const CACHE_NAME = 'workspace-cache-v1';

// Cài đặt service worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Xử lý khi có mạng/mất mạng
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
