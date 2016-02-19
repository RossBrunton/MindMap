"use strict";

load.provide("mm.Editor", (function() {
	let getfile = load.require("mm.utils.getfile");
	let strf = load.require("mm.utils.strf");
	
	return class Editor {
		constructor(abstractGraph, interactor) {
			this._abstractGraph = abstractGraph;
			this._interactor = interactor;
			
			this._undoStack = [];
		}
		
		addToUndoStack(type, arg) {
			console.log(`Added event of type ${type}, %o`, arg);
			this._undoStack.push([type, arg]);
		}
	};
})());
