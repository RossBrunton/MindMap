"use strict";

load.provide("mm.utils.getDirName", (function() {
	/** Given the name of an included script, returns the directory it is in
	 * 
	 * This allows you to include css (or similar) from the same directory by appending it, no matter where the library
	 *  is.
	 * 
	 * @param {file} The filename of the current file.
	 * @return {string} The name of the folder that the file is in.
	 */
	return function(file) {
		let n = $(`script[src*='${file}']`).last()[0];
		
		let url = new URL(n.src, document.location);
		
		return url.protocol + "//" + url.host + url.pathname.replace(/[^/]+$/, "");
	};
})());
