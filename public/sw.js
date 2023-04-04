let cacheData='appv1'
this.addEventListener('install',(event)=>{
    event.waitUntil(
                caches.open(cacheData)
                .then((cache)=>{
            cache.addAll([
                '/src/assets/chisana.webp',
                '/index.html',
                '/index.html',
                '/'
            ])
    }))
})

this.addEventListener('fetch',(e)=>{
        e.respondWith(
            caches.match(e.request).then((res)=>{
                if(res){
                    return res;
                }
            })
        )
})