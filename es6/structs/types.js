"use strict";

load.provide("mm.structs.NodeTypeField", (function() {
	return class NodeTypeField {
		constructor(arr) {
			if(!arr[0].match(/[a-z]+/)) throw new TypeError(`Node type name ${object.name} is not valid.`);
			
			[this.name, this.type, this.arg] = arr;
		}
	};
})());

load.provide("mm.structs.NodeType", (function() {
	let NodeTypeField = load.require("mm.structs.NodeTypeField");
	
	return class NodeType {
		constructor(object) {
			if(!object.name.match(/[a-z]+/)) throw new TypeError(`Node type name ${object.name} is not valid.`);
			
			for(let x of ["name", "nodeText", "nodeAttr", "viewText", "viewAddText"]) this[x] = object[x];
			
			this.fields = object.fields.map((x) => new NodeTypeField(x));
		}
	};
})());


load.provide("mm.structs.ArrowType", (function() {
	return class ArrowType {
		constructor(object) {
			if(!object.name.match(/[a-z]+/)) throw new TypeError(`Arrow type name ${this.name} is not valid.`);
			
			for(let x of ["name", "attr"]) this[x] = object[x];
		}
	};
})());


load.provide("mm.structs.TypesFile", (function() {
	let ArrowType = load.require("mm.structs.ArrowType");
	let NodeType = load.require("mm.structs.NodeType");
	
	return class TypesFile {
		constructor(object) {
			this.version = object.version;
			
			this.types = object.types.map((x) => new NodeType(x));
			this.arrowTypes = object.arrows.map((x) => new ArrowType(x));
		}
	};
})());
