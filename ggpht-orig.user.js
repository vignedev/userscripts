// ==UserScript==
// @name         Show ggpht images in full resolution
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically reopen yt3.ggpht.com to full resolution
// @author       vignedev
// @match        https://yt3.ggpht.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let segments = window.location.href.split(/=s\d+.*?$/g)
    
    if(window.location.href.includes('=s0')) return
    if(!segments.includes('=s0')) window.location.href = segments[0] + '=s0'
})();