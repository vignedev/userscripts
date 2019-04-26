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

    var items = document.querySelectorAll("a")
    var style = document.createElement('style')
    var preview = document.createElement('div')
    var offset = [4,4]
    preview.id = 'preview'
    preview.style.display = 'none'
    style.innerText = '#preview{position:fixed; width: 320px; height: 320px; box-shadow: 0 0 1em rgba(0,0,0,0.3); background-color: black; background-size: contain; background-repeat: no-repeat; background-position:center center;}'
    document.head.appendChild(style)
    document.body.appendChild(preview)

    items.forEach(link => {
        link.onmouseover = update
        link.onmousemove = update
        function update(e) {
            if(allExtensions(link.href)){
                preview.style.display = ''
                preview.style.backgroundImage = `url(${link.href})`
                preview.style.left = `${e.clientX+offset[0]}px`
                preview.style.top = `${e.clientY+offset[1]}px`
            }
        }
        link.onmouseleave = () => {
            preview.style.display = 'none'
        }
    })

    function allExtensions(input){
        var ext = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', ':large', ':orig', ':small', ':medium', ':tiny', '.webp']
        var valid = false
        input = decodeURIComponent(input.toLowerCase())
        for(var i = 0; i < ext.length; i++){
            if(input.endsWith(ext[i])) valid = true
        }
        return valid
    }

})();