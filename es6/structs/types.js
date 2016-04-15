"use strict";

load.provide("mm.structs.NodeTypeField", (function() {
	/** Represents a singe type of field
	 * 
	 * @param {array<*>} arr The array from the types file for this field.
	 */
	return class NodeTypeField {
		constructor(arr) {
			if(!arr[0].match(/^[a-zA-Z\s]+$/)) throw new TypeError(`Node type name ${arr[0]} is not valid.`);
			
			[this.name, this.type, this.default, this.arg] = arr;
		}
	};
}));

load.provide("mm.structs.NodeType", (function() {
	let NodeTypeField = load.require("mm.structs.NodeTypeField");
	
	/** Represents a singe type of node
	 * 
	 * @param {object} object The type object as defined in the types file.
	 * @param {mm.structs.TypesFile} file The types file this node type is from.
	 */
	return class NodeType {
		constructor(object, file) {
			if(!object.name.match(/[a-z]+/)) throw new TypeError(`Node type name ${object.name} is not valid.`);
			
			for(let x of ["name", "nodeText", "nodeAttr", "viewText", "viewAddText"]) this[x] = object[x];
			
			/** The types file of this object
			 * 
			 * @type mm.structs.TypesFile
			 * @private
			 */
			this._file = file;
			
			/** The fields of this type
			 * 
			 * @type array<mm.structs.NodeTypeField>
			 */
			this.fields = object.fields.map((x) => new NodeTypeField(x));
		}
		
		/** Returns the field type with the given name, or null if it doesn't exist.
		 * 
		 * @param {string} field The name of the field to look up.
		 * @return {?mm.structs.NodeTypeField} The field object.
		 */
		getFieldType(field) {
			for(let f of this.fields) {
				if(f.name == field) {
					return f;
				}
			}
			
			return null;
		}
		
		/** Returns a node type (not a field) from this types file
		 * 
		 * This could be thought of as a ``sibling" type, I guess.
		 * 
		 * @param {string} name The name of the other type to get.
		 * @return {?mm.structs.NodeType} The other type, or null if it doesn't exist.
		 */
		getOtherType(name) {
			return this._file.getNodeType(name);
		}
	};
}));


load.provide("mm.structs.ArrowType", (function() {
	/** Represents a singe type of node
	 * 
	 * @param {object} object The type object as defined in the types file.
	 * @param {mm.structs.TypesFile} file The types file this arrow type is from.
	 */
	return class ArrowType {
		constructor(object, file) {
			if(!object.name.match(/[a-z]+/)) throw new TypeError(`Arrow type name ${this.name} is not valid.`);
			
			for(let x of ["name", "attr", "textAttr"]) this[x] = object[x];
			
			/** The types file of this object
			 * 
			 * @type mm.structs.TypesFile
			 * @private
			 */
			this._file = file;
		}
		
		/** Returns an arrow type (not a field) from this types file
		 * 
		 * This could be thought of as a ``sibling" type, I guess.
		 * 
		 * @param {string} name The name of the other type to get.
		 * @return {?mm.structs.ArrowType} The other type, or null if it doesn't exist.
		 */
		getOtherType(name) {
			return this._file.getArrowType(name);
		}
	};
}));


load.provide("mm.structs.TypesFile", (function() {
	let ArrowType = load.require("mm.structs.ArrowType");
	let NodeType = load.require("mm.structs.NodeType");
	
	/** Represents the types file
	 * 
	 * @param {object} object The data from the types file.
	 */
	return class TypesFile {
		constructor(object) {
			/** The version of the types file in use
			 * 
			 * @type integer
			 */
			this.version = object.version;
			
			/** The default type name for newly created nodes
			 * 
			 * @type string
			 */
			this.defaultType = object.defaultType;
			/** The default type name for newly created arrows
			 * 
			 * @type string
			 */
			this.defaultArrowType = object.defaultArrowType;
			
			/** All the node types in this file
			 * 
			 * @type array<mm.structs.NodeType>
			 */
			this.types = object.types.map((x) => new NodeType(x, this));
			/** All the arrow types in this file
			 * 
			 * @type array<mm.structs.ArrowType>
			 */
			this.arrowTypes = object.arrows.map((x) => new ArrowType(x, this));
		}
		
		/** Returns the node type with the given name.
		 * 
		 * @param {string} The name to look up.
		 * @return {mm.structs.NodeType?} The node type, or null if it wasn't found.
		 */
		getNodeType(name) {
			for(let t of this.types) {
				if(t.name == name) return t;
			}
			
			return null;
		}
		
		/** Returns the default node type.
		 * 
		 * @return {mm.structs.NodeType} The default node type.
		 */
		getDefaultNodeType() {
			return this.getNodeType(this.defaultType);
		}
		
		/** Returns the arrow type with the given name.
		 * 
		 * @param {string} The name to look up.
		 * @return {mm.structs.ArrowType?} The arrow type, or null if it wasn't found.
		 */
		getArrowType(name) {
			for(let t of this.arrowTypes) {
				if(t.name == name) return t;
			}
			
			return null;
		}
		
		/** Returns the default arrow type.
		 * 
		 * @return {mm.structs.ArrowType} The default arrow type.
		 */
		getDefaultArrowType() {
			return this.getArrowType(this.defaultArrowType);
		}
	};
}));
