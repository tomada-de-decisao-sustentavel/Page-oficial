const CACHE_NAME = 'tds-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/estilo.css',
  '/manifest.json',
  // Liste aqui os arquivos essenciais, como imagens, scripts, fontes, etc.
];

// Instalando o service worker e cacheando os arquivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Respondendo às requisições com cache primeiro
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
