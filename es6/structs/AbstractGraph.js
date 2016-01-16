"use strict";

load.provide("mm.structs.AbstractGraph", (function() {
	let TypesFile = load.require("mm.structs.TypesFile");
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let getfile = load.require("mm.utils.getfile");
	
	/** This represents a graph. */
	return class AbstractGraph {
		constructor(objectsUrl, typesUrl, renderers) {
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
			this._types = null;
			/** When downloaded, the objects data object.
			 * 
			 * @type mm.structs.ObjectsData
			 * @private
			 */
			this._objects = null;
			
			/** An array of renderers for this graph.
			 * 
			 * @type Array<mm.Renderer>
			 * @private
			 */
			this._renderers = renderers;
			
			// Now download the files
			Promise.all([
				getfile(typesUrl),
				getfile(objectsUrl)
			]).then((function(contents) {
				this._types = new TypesFile(typeof contents[0] === "string" ? JSON.parse(contents[0]) : contents[0]);
				this._objects = new ObjectsData(typeof contents[1] === "string" ? JSON.parse(contents[1]) :contents[1]);
				
				console.log("READY!");
				this.ready = true;
			}).bind(this));
		}
	};
})());
