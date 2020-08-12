// ==UserScript==
// @name         Prettify JSON files
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Prettifies every JSON it encounters (ends with .json)
// @author       vignedev
// @include      *.json
// @match        *.json
// @grant        none
// ==/UserScript==

(function() {
    try{ document.body.children[0].innerText = JSON.stringify(JSON.parse(document.body.innerText), null, 4) }
    catch(err){ console.error('Failed to prettify JSON', err) }
})();
