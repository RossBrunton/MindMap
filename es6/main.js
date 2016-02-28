"use strict";

load.provide("mm.main", (function() {
	let graphManager = load.require("mm.graphManager");
	
	/** Main object. Should be the main entry point and is in change of setting everything up.
	 */
	let main = {};
	
	$(function() {
		// This is a JQuery shortcut for "run when the page has finished loading" 
		graphManager.createAll();
	});
	
	return main;
}));
