"use strict";

load.provide("mm.InteractorState", (function() {
	return class InteractorState {
		constructor() {
			this.rerendering = false;
		}
	}
})());
