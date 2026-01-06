const CACHE_NAME = 'plan-lekcji-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
];

// Instalacja Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker zainstalowany');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Aktywacja Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker aktywowany');
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Usuwanie starych cache'ów, które nie są w cacheWhitelist
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetchowanie plików z cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Jeśli plik jest w cache, zwróć go
                if (response) {
                    return response;
                }
                // W przeciwnym razie pobierz go z sieci
                return fetch(event.request);
            })
    );
});

// Mechanizm aktualizacji cache
self.addEventListener('message', (event) => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
