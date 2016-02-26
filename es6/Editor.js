"use strict";

load.provide("mm.Editor", (function() {
	let getfile = load.require("mm.utils.getfile");
	let strf = load.require("mm.utils.strf");
	
	/** The editor class manages the state of editing
	 * 
	 * It includes the undo stack, and methods for undoing and redoing.
	 * 
	 * @param {abstractGraph} The abstract graph on which this editor edits.
	 * @param {interactor} The interactor which is using this editor.
	 */
	return class Editor {
		constructor(abstractGraph, interactor) {
			/** The abstract graph on which this editor edits
			 * 
			 * @type mm.structs.AbstractGraph
			 * @private
			 */
			this._abstractGraph = abstractGraph;
			/** The interactor which is using this editor
			 * 
			 * @type mm.Interactor
			 * @private
			 */
			this._interactor = interactor;
			
			/** The undo stack
			 * 
			 * When an action occurs that can be undone, an entry is pushed onto this stack.
			 * 
			 * Entries on this stack are [type, arg] pairs.
			 * @type array<array>
			 * @private
			 */
			this._undoStack = [];
		}
		
		/** Adds a new entry to the undo stack
		 * 
		 * @param {string} type The type of event to add to the stack.
		 * @param {object} arg The argument to this event, will be used when undoing and redoing.
		 */
		addToUndoStack(type, arg) {
			console.log(`Added event of type ${type}, %o`, arg);
			this._undoStack.push([type, arg]);
		}
	};
})());
