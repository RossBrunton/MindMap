"use strict";

load.provide("mm.utils.strf", (function() {
	/** Formats a string, given a template and an objects node
	 * 
	 * The format is documented in docs/formatting.
	 * 
	 * @param {string} template The tamplate of the string.
	 * @param {mm.structs.ObjectNode} node The object node to format.
	 * @return {string} The formatted string.
	 */
	return function(template, node) {
		return template.replace(/{(.*?)}/g, (t) => {
			t = t.substring(1, t.length-1).trim();
			
			if("{}".includes(t)) return t;
			
			if(t.includes(":")) {
				//TODO
			}
			
			let f = node.getFieldType(t);
			if(!f) return "(null)";
			let v = node.fields[t];
			
			switch(f.type) {
				case "text":
				case "blocktext":
				case "url":
				case "email":
					return v;
					break;
					
				case "date":
					return "(date not supported)";
					break;
				
				default:
					return "(unknown type)";
			}
		});
	};
})());
