all: compile mkdeps

compile:
	tools/babel --presets es2015,stage-3 -D -d es5 es6

compile_watch:
	tools/babel -w --presets es2015,stage-3 -D -d es5 es6

bigfile:
	rm -f es5/everything.js
	tools/generateDeps.py es5 > es5/deps.json
	tools/catter.py > es5/everything.js
	tools/generateDeps.py es5 > es5/deps.json

rmbigfile:
	rm -f es5/everything.js

mkdeps:
	tools/generateDeps.py es5 > es5/deps.json

runserver:
	python2 -m SimpleHTTPServer

env:
	npm install babel@6.3.26 babel-cli@6.4.0 babel-preset-es2015@6.3.13 babel-polyfill@6.3.14 babel-preset-stage-3@6.3.13
	ln -s ../node_modules/babel-cli/bin/babel.js tools/babel
	cp node_modules/babel-polyfill/dist/polyfill.min.js libs/

clean:
	rm -r node_modules
	rm -r es5/*
	rm tools/babel
	rm libs/polyfill.min.js
