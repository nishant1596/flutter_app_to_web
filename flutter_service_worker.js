'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "24f3e509f24552f726ca69338c5333c3",
"/assets\assets\font\Product_Sans_Bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"/assets\assets\font\Product_Sans_Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"/assets\assets\img\1.png": "b9f90b39d91f47adf01bfab1abf65c55",
"/assets\assets\img\2.png": "328424c1bd45adcc6a0258b5429a912e",
"/assets\assets\img\3.png": "78c12f1c095a55c73629f4de01357446",
"/assets\assets\img\4.png": "df5ffed18ab86acb929fc0f6f78cfeca",
"/assets\assets\img\custom%20%E2%80%93%201.png": "44ec18fa4f341e714d967d95a57340c8",
"/assets\assets\img\food.png": "a87bbf45b279e07a7161ddd38c8cfc10",
"/assets\assets\img\food2.png": "10ab2eec4c13ddfe013c713000c6c6c8",
"/assets\assets\img\food3.png": "cb835550e2ad042c7b5f04a7cfbc72d2",
"/assets\assets\img\food4.png": "f352292b914df2bb8e18a8c8e392ab91",
"/assets\assets\img\food5.png": "3437401a2ce2d33341920bb3732a8d7a",
"/assets\assets\img\food6.png": "d6c4e468a1a9ca096596fa9b2e58a2dc",
"/assets\FontManifest.json": "95e69a8e3cf949830895d59c16c5f380",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "12e25a1179ea6c51294a4623189be197",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "3ab3465e8067f1ae033ca8ac342d96f2",
"/main.dart.js": "00c0d31a7dc43086d53824e483644713",
"/manifest.json": "581ec814c131524780d43364f8bb74a5"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
