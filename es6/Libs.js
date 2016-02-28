"use strict";

(function() {
    /** Just a simple package that improts libraries that the game engine uses */
    if(!("window" in self)) return;
    
    let _mkLib = function(url) {
        let script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    };
    
    if("jQuery" in window) {
        if(jQuery.fn.jquery != "2.2.0") {
            console.warn(`JQuery already found in document. This has been tested with version 2.2.0, but you are`+
            `using version ${jQuery.fn.jquery}. It should still work, however.`);
        }
    }else{
        _mkLib("//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js");
    }
    
    let stage = 1;
    
    let _check = function() {
        if(("$" in window) && stage == 1) {
            stage ++;
            _mkLib("//cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.2/lodash.min.js");
        }else if(("_" in window) && stage == 2) {
            stage ++
            _mkLib("//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js");
        }else if(("Backbone" in window) && stage == 3) {
            stage ++;
            _mkLib("/libs/joint.min.js");
        }else if(("joint" in window) && stage == 4) {
            stage ++;
        }else if(stage == 5) {
            load.provide("mm.libs", undefined);
            return;
        }
        
        setTimeout(_check, 100);
    }
    
    _check();
})();
