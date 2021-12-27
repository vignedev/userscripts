// ==UserScript==
// @name        Hides subscriber count
// @namespace   http://tampermonkey.net/
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      vignedev
// @description Injects simple CSS for hiding subscriber counts
// ==/UserScript==

const element = document.createElement('style')
element.innerHTML = `
#thumbnail-attribution, #owner-sub-count, #subscriber-count{
  display: none !important;
}
`
document.body.appendChild(element)