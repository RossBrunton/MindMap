"use strict";

load.provide("mm.utils.getfile", (function() {
	/** Given a URL, returns a promise that resolves to the contents of the file given by that URL.
	 * 
	 * The value fulfilled is the same type (and object) as returned from $.get.
	 * 
	 * Works on data urls, provided they are encoded in ascii.
	 * 
	 * @param {url} The url to get.
	 * @return {Promise(*)} A promise that resolves when the file is finished downloading. The object is from $.get.
	 */
	return function(url) {
		// Would like to have used fetch, but babeljs can't figure that out...
		if(url.startsWith("data:")) {
			// Data URL
			return Promise.resolve(url.split(",")[1]);
		}else{
			// Not a data url
			return new Promise((f, r) => $.get(url, "", f));
		}
	};
})());
