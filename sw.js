const CACHE_NAME = 'europocket-public-cache-v1.0.39';
const ASSETS_TO_CACHE = [
  './', './index.html', './europocket.html', './europocket_public.html',
  './manifest.json', './manifest_public.json',
  './europocket_logo/europocket_logo_small.png',
  './europocket_logo/europocket_logo_big.png',
  './europocket_logo/europocket_logo_square.png'
];
const ALLOWED_URLS = new Set(ASSETS_TO_CACHE.map(path => new URL(path, self.registration.scope).href));

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(ASSETS_TO_CACHE))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key !== CACHE_NAME &&
      (key.startsWith('europocket-cache-') || key.startsWith('europocket-public-cache-')))
    .map(key => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const scope = new URL(self.registration.scope);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  url.search = '';
  url.hash = '';
  const cacheKey = url.href;
  // Never serve removed private files from an older cache.
  if (!ALLOWED_URLS.has(cacheKey)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        try { await cache.put(cacheKey, response.clone()); } catch (_) { /* Storage may be full. */ }
      }
      return response;
    } catch (_) {
      return (await cache.match(cacheKey)) || new Response('Offline: open this page online first.', {
        status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
