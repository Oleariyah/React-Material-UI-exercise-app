importScripts("precache-manifest.d4b73819ed1086412cfd86571c059ed7.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.routing.registerRoute(
    /http:\/\/localhost\:4000/,
    workbox.strategies.networkFirst()          
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
