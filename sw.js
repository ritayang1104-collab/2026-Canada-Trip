const CACHE_NAME = "canada-trip-v11";
const CORE_ASSETS = ["./", "./index.html", "./app.js", "./manifest.json", "./icon-192.png", "./icon-512.png",
  "./banners/day16.jpg",
  "./banners/day01.jpg", "./banners/day02.jpg", "./banners/day03.jpg", "./banners/day04.jpg", "./banners/day05.jpg",
  "./banners/day06.jpg", "./banners/day07.jpg", "./banners/day08.jpg", "./banners/day09.jpg", "./banners/day10.jpg",
  "./banners/day11.jpg", "./banners/day12.jpg", "./banners/day13.jpg", "./banners/day14.jpg", "./banners/day15.jpg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  // Live data: weather / fx must always hit the network fresh, never cached
  const isLiveApi = url.includes("open-meteo.com") || url.includes("currency-api") || url.includes("jsdelivr.net/npm/@fawazahmed0");
  if (isLiveApi) return;

  // Google Maps / Firebase: let the network handle it (their own SDKs manage caching);
  // service worker just stays out of the way here rather than trying to intercept
  // Google's many CDN subdomains.
  const isThirdPartySdk = url.includes("googleapis.com") || url.includes("gstatic.com");
  if (isThirdPartySdk) return;

  // App shell: network-first. Whenever online, always fetch the latest index.html/
  // app.js/manifest so updates show up the moment you reload — no more stuck-on-old-
  // version issue. Only falls back to the cached copy when the network request fails
  // (i.e. actually offline), which is what keeps the app usable without a connection.
  event.respondWith(
    fetch(event.request)
      .then((fresh) => {
        const copy = fresh.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return fresh;
      })
      .catch(() => caches.match(event.request))
  );
});

