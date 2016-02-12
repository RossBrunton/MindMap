"use strict";

load.provide("mm.structs.AbstractGraph", (function() {
	let TypesFile = load.require("mm.structs.TypesFile");
	let ObjectsData = load.require("mm.structs.ObjectsData");
	let getfile = load.require("mm.utils.getfile");
	
	/** This represents a graph. */
	return class AbstractGraph {
		constructor(objectsUrl, typesUrl) {
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
			
			/** The url of the types file
			 * @type string
			 * @private
			 */
			this._typesUrl = typesUrl;
			/** The url of the objects file
			 * @type string
			 * @private
			 */
			this._objectsUrl = objectsUrl;
		}
		
		/** Downloads the data from the files passed in the constructor
		 * 
		 * @async
		 */
		async load() {
			return Promise.all([
				getfile(this._typesUrl),
				getfile(this._objectsUrl)
			]).then((contents) => {
				this.types = new TypesFile(typeof contents[0] === "string"?JSON.parse(contents[0]):contents[0]);
				this.objects =
					new ObjectsData(typeof contents[1] === "string"?JSON.parse(contents[1]):contents[1], this.types);
				
				this.ready = true;
			});
		}
	};
})());
