"use strict";

load.provide("mm.structs.ObjectNode", (function() {
	return class ObjectNode {
		constructor(object) {
			for(let x of ["type", "id", "x", "y", "fields"]) this[x] = object[x];
		}
	};
})());

load.provide("mm.structs.ObjectEdge", (function() {
	return class ObjectEdge {
		constructor(object) {
			for(let x of ["type", "id", "origin", "dest", "text", "points"]) this[x] = object[x];
		}
	};
})());

load.provide("mm.structs.ObjectCanvas", (function() {
	return class ObjectCanvas {
		constructor(object) {
			for(let x of ["width", "height", "offsetX", "offsetY"]) this[x] = object[x];
		}
	};
})());

load.provide("mm.structs.ObjectsData", (function() {
	let ObjectNode = load.require("mm.structs.ObjectNode");
	let ObjectEdge = load.require("mm.structs.ObjectEdge");
	let ObjectCanvas = load.require("mm.structs.ObjectCanvas");
	
	return class ObjectsData {
		constructor(object, types) {
			this.types = types;
			this.version = object.version;
			
			this.nodes = object.nodes.map((x) => new ObjectNode(x));
			this.edges = object.edges.map((x) => new ObjectEdge(x));
			this.canvas = new ObjectCanvas(object.canvas);
			
			// Todo: Editor part
		}
	};
})());
