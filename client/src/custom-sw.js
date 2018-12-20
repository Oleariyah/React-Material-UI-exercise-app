workbox.routing.registerRoute(
    /http:\/\/localhost\:4000/,
    workbox.strategies.networkFirst()          
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);