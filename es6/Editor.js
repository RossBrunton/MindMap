"use strict";

load.provide("mm.Editor", (function() {
	let getfile = load.require("mm.utils.getfile");
	let strf = load.require("mm.utils.strf");
	
	/** Handlers for undo events
	 * 
	 * Keys are the event type and values are [undo, redo] pairs as per `Editor.registerUndo`.
	 * 
	 * @type Map<string, array<function(string, object)>>
	 * @private
	 */
	let _handlers = new Map();
	
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
			
			/** The current location in the undo stack
			 * 
			 * @type integer
			 * @private
			 */
			this._p = -1;
			
			window.editor = this;
		}
		
		/** Adds a new entry to the undo stack
		 * 
		 * @param {string} type The type of event to add to the stack.
		 * @param {object} arg The argument to this event, will be used when undoing and redoing.
		 */
		addToUndoStack(type, arg) {
			console.log(`Added event of type ${type}, %o`, arg);
			this._undoStack.splice(this._p+1);
			this._undoStack.push([type, arg]);
			this._p ++;
		}
		
		/** Empties the undo stack */
		clearUndoStack() {
			this._undoStack = [];
		}
		
		/** Performs an undo operation */
		async undo() {
			console.log("Undo");
		}
		
		/** Performs a redo operation */
		async redo() {
			console.log("Redo");
		}
		
		/** Adds a new possible undo and redo event and handlers
		 * 
		 * Both handlers will be given the type string and the object added.
		 * 
		 * @param {string} type The name of the type.
		 * @param {async function(string, object)} undo The function to call to undo this event.
		 * @param {async function(string, object)} redo The funciton to call to redo this event.
		 */
		registerUndo(type, undo, redo) {
			_handlers.set(type, [undo, redo]);
		}
		
		/** Prints the undo stack to the console
		 * 
		 * For debuggery.
		 */
		printStack() {
			console.log("Undo stack:")
			for(let i = 0; i < this._undoStack.length; i ++) {
				console.log(`${(this._p == i ? "*" : " ")} ${i}: ${this._undoStack[i][0]}`);
			}
		}
	};
}));
