importScripts("precache-manifest.ff45c83815e8cd8372fe439f3cdea25b.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.routing.registerRoute(
    /http:\/\/localhost\:4000/,
    workbox.strategies.networkFirst()          
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
