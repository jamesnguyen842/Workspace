const CACHE_NAME = 'workspace-pwa-v1';

// Cài đặt Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Kích hoạt Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Xử lý phản hồi yêu cầu mạng
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
