importScripts("precache-manifest.de0d5cdc48a1c35b75f39c910c849611.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.routing.registerRoute(
    /http:\/\/localhost\:4000\/exercises/,
    workbox.strategies.networkFirst()
          
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
