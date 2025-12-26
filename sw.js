// ============================================
// Service Worker - Caching Strategy
// ============================================

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `mfa-portfolio-${CACHE_VERSION}`;
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css?v=1.0.0',
    '/css/theme.css?v=1.0.0',
    '/js/script.js?v=1.0.0',
    '/js/theme.js?v=1.0.0',
    '/js/i18n.js?v=1.0.0',
    '/assets/CV_Muhammad_Fikri_Akbar.pdf?v=1.0.0',
    '/assets/IMAGES/Profile.webp?v=1.0.0',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache then Network Strategy
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                
                return fetch(event.request).then(
                    (response) => {
                        // Check if valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clone response
                        const responseToCache = response.clone();
                        
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    }
                );
            })
    );
});

// Update Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
