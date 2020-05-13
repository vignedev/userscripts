// ==UserScript==
// @name         Messenger, press D to download image
// @namespace    https://github.com/vignedev/userscripts
// @version      0.1
// @description  God I fucking hate Messenger.
// @author       vignedev
// @match        https://www.messenger.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('keypress',e=>{if(e.key!=="d")return;try{Array.from(document.querySelectorAll("*")).find(v=>v.textContent=='Download').click();}catch(err){return;};})
})();