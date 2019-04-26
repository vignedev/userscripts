// ==UserScript==
// @name         Preview Images
// @namespace    https://github.com/vignedev/userscripts
// @version      0.1
// @description  A floating image view on local file servers
// @author       You
// @match        http://192.168.1.3:*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const images = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', ':large', ':orig', ':small', ':medium', ':tiny', '.webp']
    const videos = ['.webm', '.mp4']

    var items = document.querySelectorAll("a")
    var style = document.createElement('style')
    var preview = document.createElement('div')
    var previewVideo = document.createElement('video')
    var offset = [4,4]

    preview.id = 'preview'
    preview.style.display = 'none'
    previewVideo.id = 'preview'
    previewVideo.style.display = 'none'
    previewVideo.loop = true

    style.innerText = '#preview{position:fixed; width: 320px; height: 320px; box-shadow: 0 0 1em rgba(0,0,0,0.3); background-color: black; background-size: contain; background-repeat: no-repeat; background-position:center center;}'
    document.head.appendChild(style)
    document.body.appendChild(preview)
    document.body.appendChild(previewVideo)

    items.forEach(link => {
        link.onmouseover = update
        link.onmousemove = update
        function update(e) {
            if(allExtensions(link.href, images)){
                previewVideo.style.display = 'none'
                preview.style.display = ''
                preview.style.backgroundImage = `url(${link.href})`
                preview.style.left = `${e.clientX+offset[0]}px`
                preview.style.top = `${e.clientY+offset[1]}px`
            }else if(allExtensions(link.href, videos)){
                preview.style.display = 'none'
                if(previewVideo.src != link.href) previewVideo.src = link.href
                previewVideo.play().catch(()=>{})
                previewVideo.style.display = ''
                previewVideo.style.left = `${calcX(e.clientX+offset[0])}px`
                previewVideo.style.top = `${calcY(e.clientY+offset[1])}px`
            }
        }
        link.onmouseleave = () => {
            preview.style.display = 'none'
            previewVideo.style.display = 'none'
            previewVideo.pause()
        }
    })

    function calcX(value){
        return (value+320 > window.innerWidth) ? value - (value+320-window.innerWidth) : value
    }
    function calcY(value){
        return (value+320 > window.innerHeight) ? value - (value+320-window.innerHeight) : value
    }

    function allExtensions(input, ext){
        var valid = false
        input = decodeURIComponent(input.toLowerCase())
        for(var i = 0; i < ext.length; i++){
            if(input.endsWith(ext[i])) valid = true
        }
        return valid
    }

})();