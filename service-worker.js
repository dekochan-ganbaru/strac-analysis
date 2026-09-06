const CACHE_NAME='strac-02-2-4-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).then(r=>{const clone=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));return r;}).catch(()=>caches.match(e.request)));});
