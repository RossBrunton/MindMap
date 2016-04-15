"use strict";

load.provide("mm.Editor", (function() {
	let getfile = load.require("mm.utils.getfile");
	let strf = load.require("mm.utils.strf");
	
	/** Handlers for undo events
	 * 
	 * Keys are the event type and values are [undo, redo] pairs as per `Editor.registerUndo`.
	 * 
	 * @type Map<string, array<function(string, object, mm.structs.abstractGraph)>>
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
	class Editor {
		constructor(abstractGraph) {
			/** The abstract graph on which this editor edits
			 * 
			 * @type mm.structs.AbstractGraph
			 * @private
			 */
			this._abstractGraph = abstractGraph;
			
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
			//console.log(`Added event of type ${type}, %o`, arg);
			
			if(!_handlers.has(type))
				throw TypeError(`Tried to add an undo event of type ${type}, but no handler exists!`);
			
			this._undoStack.splice(this._p+1);
			this._undoStack.push([type, arg]);
			this._p ++;
		}
		
		/** Empties the undo stack */
		clearUndoStack() {
			this._undoStack = [];
		}
		
		/** Performs an undo operation
		 * 
		 * @async
		 */
		async undo() {
			if(this._p == -1) return;
			let now = this._undoStack[this._p];
			this._p --;
			
			_handlers.get(now[0])[0](now[0], now[1], this._abstractGraph);
			
			//this.printStack();
		}
		
		/** Performs a redo operation
		 * 
		 * @async
		 */
		async redo() {
			if(this._p == this._undoStack.length - 1) return;
			this._p ++;
			let now = this._undoStack[this._p];
			
			_handlers.get(now[0])[1](now[0], now[1], this._abstractGraph);
			
			//this.printStack();
		}
		
		/** Checks whether an undo is possible
		 * 
		 * @return {boolean} Whether there is something that can be undone.
		 */
		canUndo() {
			return this._p >= 0;
		}
		
		/** Checks whether a redo is possible
		 * 
		 * @return {boolean} Whether there is something that can be redone.
		 */
		canRedo() {
			return this._p < this._undoStack.length-1;
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
	
	/** Adds a new possible undo and redo event and handlers
	 * 
	 * Both handlers will be given the type string and the object added.
	 * 
	 * @param {string} type The name of the type.
	 * @param {async function(string, objec, mm.structs.abstractGrapht)} undo The function to call to undo this event.
	 * @param {async function(string, objec, mm.structs.abstractGrapht)} redo The funciton to call to redo this event.
	 * @static
	 */
	Editor.registerUndo = function(type, undo, redo) {
		_handlers.set(type, [undo, redo]);
	}
	
	return Editor;
}));
