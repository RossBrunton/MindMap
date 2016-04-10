"use strict";

load.provide("mm.main", (function() {
	let graphManager = load.require("mm.graphManager");
	
	load.requireExternal("jquery", "//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js");
	load.requireExternal("lodash", "//cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.2/lodash.min.js", ["jquery"]);
	load.requireExternal("backbone", "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js", ["lodash"]);
	load.requireExternal("joint", "//cdnjs.cloudflare.com/ajax/libs/jointjs/0.9.7/joint.min.js", ["backbone"]);
	
	
	let _mkCss = function(url) {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
    };
    
    _mkCss("//cdnjs.cloudflare.com/ajax/libs/jointjs/0.9.7/joint.min.css");
	
	/** Main object. Should be the main entry point and is in change of setting everything up.
	 */
	let main = {};
	
	$(function() {
		// This is a JQuery shortcut for "run when the page has finished loading" 
		graphManager.createAll();
	});
	
	return main;
}));
