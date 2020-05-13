// ==UserScript==
// @name         Show Twitter images (twimg) in full resolution
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically reopen pbs.twimg.com to full resolution
// @author       vignedev
// @match        https://pbs.twimg.com/media/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let segments = window.location.href.split(/([?&])(name=.*?\w+)/g)
    if(!segments.includes('name=orig'))
        window.location.href = segments.map(x => x.startsWith('name=') ? 'name=orig' : x).join('')
})();