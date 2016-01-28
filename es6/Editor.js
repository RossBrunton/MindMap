"use strict";

load.provide("mm.Editor", (function() {
	let getDirName = load.require("mm.utils.getDirName");
	let getfile = load.require("mm.utils.getfile");
	let strf = load.require("mm.utils.strf");
	
	return class Editor {
		constructor(abstractGraph, interactor) {
			this._abstractGraph = abstractGraph;
			this._interactor = interactor;
			
			this._actionStack = [];
		}
	};
})());
