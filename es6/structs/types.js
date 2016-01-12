"use strict";

load.provide("mm.structs.NodeType", (function() {
	return class NodeType {
		
	};
})());


load.provide("mm.structs.ArrowType", (function() {
	return class ArrowType {
		
	};
})());


load.provide("mm.structs.TypesFile", (function() {
	return class TypesFile {
		constructor(object) {
			console.log("Building...");
			this.version = object.version;
		}
	};
})());
