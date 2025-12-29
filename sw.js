const CACHE_VERSION = 'v1.0.1';
const STATIC_CACHE = `static-mfa-portofolio-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-mfa-portofolio-${CACHE_VERSION}`;

// Only local assets
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/css/style.css?v=1.0.0',
    '/css/theme.css?v=1.0.0',
    '/js/script.js?v=1.0.0',
    '/js/theme.js?v=1.0.0',
    '/js/i18n.js?v=1.0.0',
    '/assets/CV_Muhammad_Fikri_Akbar.pdf?v=1.0.0',
    '/assets/IMAGES/Profile-200.webp?v=1.0.0'
];

// ============================
// INSTALL
// ============================
self.addEventListener('install', event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS))
    );
});

// ============================
// ACTIVATE
// ============================
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => ![STATIC_CACHE, DYNAMIC_CACHE].includes(key))
                    .map(key => caches.delete(key))
            )
        )
    );

    self.clients.claim();
});

// ============================
// FETCH STRATEGY
// ============================
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // ⛔ Ignore non-GET
    if (request.method !== 'GET') return;

    // 🌐 HTML → Network First
    if (request.headers.get('accept')?.includes('text/html')) {
        event.respondWith(networkFirst(request));
        return;
    }

    // 🎨 CSS / JS / IMAGE → Cache First
    if (
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'image'
    ) {
        event.respondWith(cacheFirst(request));
        return;
    }

    // 🌍 CDN → Stale While Revalidate
    if (url.origin !== location.origin) {
        event.respondWith(staleWhileRevalidate(request));
    }
});

// ============================
// STRATEGIES
// ============================
async function cacheFirst(request) {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);
    return cached || fetchAndCache(request, cache);
}

async function networkFirst(request) {
    const cache = await caches.open(DYNAMIC_CACHE);
    try {
        const fresh = await fetch(request);
        cache.put(request, fresh.clone());
        return fresh;
    } catch {
        return cache.match(request);
    }
}

async function staleWhileRevalidate(request) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cached = await cache.match(request);

    const fetchPromise = fetch(request).then(response => {
        cache.put(request, response.clone());
        return response;
    });

    return cached || fetchPromise;
}

async function fetchAndCache(request, cache) {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
}
