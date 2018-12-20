importScripts("precache-manifest.2c2653a818acc17f73ad2facf1c5f8e5.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.routing.registerRoute(
    /http:\/\/localhost\:4000/,
    workbox.strategies.networkFirst()          
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
