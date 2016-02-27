"use strict";

load.provide("mm.InteractorState", (function() {
	return class InteractorState {
		constructor(interactor, abstractGraph, editor) {
			/** The interactor for the state
			 * @type mm.Interactor
			 * @protected
			 */
			this._interactor = interactor;
			/** The abstract graph
			 * @type mm.structs.AbstractGraph
			 * @protected
			 */
			this._abstractGraph = abstractGraph;
			/** The editor for the state, if it exists
			 * @type ?mm.editor
			 * @protected
			 */
			this._editor = editor;
			
			this.rerendering = false;
			
			this._multiSel = [];
		}
		
		addToMultiSel(node) {
			if(this._multiSel.includes(node)) return;
			this._multiSel.push(node);
			this._interactor.updateMultiSel();
		}
		
		inMultiSel(node) {
			return this._multiSel.some((x) => x == node);
		}
		
		removeFromMultiSel(node) {
			this._multiSel = this._multiSel.filter((x) => x != node);
			this._interactor.updateMultiSel();
		}
		
		clearMultiSel() {
			this._multiSel = [];
			this._interactor.updateMultiSel();
		}
		
		countMultiSel() {
			return this._multiSel.length;
		}
		
		getMultiSel() {
			return this._multiSel;
		}
	}
})());
