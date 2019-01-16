var serviceWorkerOption = {
  "assets": [
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-36x36.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-48x48.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-72x72.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-96x96.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-144x144.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-256x256.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-192x192.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-384x384.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-512x512.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-57x57.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-60x60.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-72x72.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-76x76.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-114x114.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-120x120.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-144x144.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-152x152.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-167x167.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-180x180.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-precomposed.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/favicon-16x16.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/favicon-32x32.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/favicon.ico",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-640x920.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-320x460.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-640x1096.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-768x1004.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-748x1024.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-750x1294.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-1242x2148.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-1182x2208.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-1536x2008.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-1496x2048.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/firefox_app_60x60.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/firefox_app_128x128.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/firefox_app_512x512.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/manifest.json",
    "./icons-05ba4b805f8a810423af5204b5b0d985/manifest.webapp",
    "./iconstats-a8f540cac8aaa7506c12.json",
    "./assets/fonts/cfb42259b1ea50285ff056446f6320f2.woff2",
    "./assets/fonts/de815886b2d1af8d18c0241ab8fd2bcc.woff",
    "./assets/fonts/193e7796a51d7072416ab3d98fe558c4.woff2",
    "./assets/fonts/f5fb03da5c520a92555b8fd9be0f1189.woff",
    "./assets/fonts/98ecaa4a4ad8fe5dff3081c6cfc5b00b.woff2",
    "./assets/fonts/f19846faa70c5fea3dc90c9212bb6097.woff",
    "./assets/audio/707-bd.mp3",
    "./assets/audio/707-sd-low.mp3",
    "./assets/audio/707-sd-high.mp3",
    "./assets/audio/707-ch.mp3",
    "./assets/audio/707-oh.mp3",
    "./assets/audio/707-clap.mp3",
    "./assets/audio/707-tamb.mp3",
    "./assets/audio/808-bd-short.mp3",
    "./assets/audio/808-bd-long.mp3",
    "./assets/audio/808-cowbell.mp3",
    "./assets/audio/808-sd.mp3",
    "./assets/audio/808-clap.mp3",
    "./assets/audio/808-ch.mp3",
    "./assets/audio/808-oh.mp3",
    "./assets/audio/808-cym.mp3",
    "./assets/audio/808-clav.mp3",
    "./assets/audio/808-rs.mp3",
    "./assets/audio/808-ht.mp3",
    "./assets/audio/808-mt.mp3",
    "./assets/audio/808-lt.mp3",
    "./assets/audio/acetone-bd.mp3",
    "./assets/audio/acetone-sd-1.mp3",
    "./assets/audio/acetone-sd-2.mp3",
    "./assets/audio/acetone-ch.mp3",
    "./assets/audio/acetone-oh.mp3",
    "./assets/audio/acetone-perc-1.mp3",
    "./assets/audio/acetone-perc-2.mp3",
    "./assets/audio/linn-bd.mp3",
    "./assets/audio/linn-sd.mp3",
    "./assets/audio/linn-ch.mp3",
    "./assets/audio/linn-ph.mp3",
    "./assets/audio/linn-clap.mp3",
    "./assets/audio/linn-tamb.mp3",
    "./assets/audio/linn-cowbell.mp3",
    "./assets/audio/linn-ht.mp3",
    "./assets/audio/linn-mt.mp3",
    "./assets/audio/linn-lt.mp3",
    "./assets/audio/linn-rim.mp3",
    "./assets/audio/hip-hop-bd-1.mp3",
    "./assets/audio/hip-hop-bd-2.mp3",
    "./assets/audio/hip-hop-sd-1.mp3",
    "./assets/audio/hip-hop-sd-2.mp3",
    "./assets/audio/hip-hop-ch-1.mp3",
    "./assets/audio/hip-hop-ch-2.mp3",
    "./assets/audio/hip-hop-oh.mp3",
    "./assets/images/construction-light.svg",
    "./assets/audio/ruby-room.mp3",
    "./assets/images/maschine-50.png",
    "./assets/images/github.svg",
    "./assets/js/bundle-b505aa9afdf40aa0aed2.js"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(e,t){return fetch(t).then(function(t){return function(e,t){if(!t||200!==t.status||"basic"!==t.type)return t;var n=t.clone();return caches.open("wdsCache").then(function(t){t.put(e.request,n)}),t}(e,t)})};self.addEventListener("fetch",function(e){var t=e.request.clone();t.url.indexOf("/assets/")>=0?e.respondWith(caches.match(t).then(function(n){return n||r(e,t)})):e.respondWith(r(e,t))})}]);