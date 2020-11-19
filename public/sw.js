// This is the "Offline page" service worker

const CACHE = "brocococo"
const fallback = "index.html"

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", ev => {
  ev.waitUntil(
    caches.open(CACHE).then(cache => {
      if (fallback === "index.html") {
        return
      }

      return cache.add(fallback)
    })
  )
})

// If any fetch fails, it will show the offline page.
self.addEventListener("fetch", ev => {
  if (ev.request.method !== "GET") return

  ev.respondWith(
    fetch(ev.request).catch(err => {
      // The following validates that the request was for a navigation to a new document
      if (
        ev.request.destination !== "document" ||
        ev.request.mode !== "navigate"
      ) {
        return
      }

      return caches.open(CACHE).then(cache => {
        return cache.match(fallback)
      })
    })
  )
})

// This is an event that can be fired from your page to tell the SW to update the offline page
self.addEventListener("refreshOffline", () => {
  const offlinePageRequest = new Request(fallback)

  return fetch(fallback).then(response => {
    return caches.open(CACHE).then(cache => {
      return cache.put(offlinePageRequest, response)
    })
  })
})
