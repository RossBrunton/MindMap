"use strict";

load.provide("mm.structs.AbstractGraph", (function() {
	let TypesFile = load.require("mm.structs.TypesFile");
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let getfile = load.require("mm.utils.getfile");
	
	/** This represents a graph. */
	return class AbstractGraph {
		constructor(objectsUrl, typesUrl, interactor) {
			/** True if this object is ready for use (that is, the files have been downloaded)
			 * 
			 * @type boolean
			 */
			this.ready = false;
			
			/** When downloaded, the types file object.
			 * 
			 * @type mm.structs.TypesFile
			 * @private
			 */
			this.types = null;
			/** When downloaded, the objects data object.
			 * 
			 * @type mm.structs.ObjectsData
			 * @private
			 */
			this.objects = null;
			
			/** The interactor for this abstractGraph.
			 * 
			 * Null until it is added by setInteractor.
			 * 
			 * @type ?mm.Interactor
			 * @private
			 */
			this._interactor = null;
			
			// Now download the files
			Promise.all([
				getfile(typesUrl),
				getfile(objectsUrl)
			]).then((function(contents) {
				this.types = new TypesFile(typeof contents[0] === "string" ? JSON.parse(contents[0]) : contents[0]);
				this.objects = new ObjectsData(typeof contents[1] === "string" ? JSON.parse(contents[1]) :contents[1], this.types);
				
				console.log("READY!");
				this.ready = true;
				this._interactor.rerender();
			}).bind(this));
		}
		
		/** Sets the interactor for this Renderer
		 * 
		 * @param {mm.Interactor} interactor The interactor
		 */
		setInteractor(interactor) {
			this._interactor = interactor;
		}
	};
})());
