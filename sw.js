const CACHE_NAME = "farlionary-shell-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Pass through network requests; this handler supports PWA installability
  // without changing the website's normal request behavior.
  if (event.request.method === "GET") {
    event.respondWith(fetch(event.request));
  }
});
