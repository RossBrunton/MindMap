all: compile mkdeps

compile:
	tools/babel --presets es2015 -d es5 es6

compile_watch:
	tools/babel -w --presets es2015 -d es5 es6

mkdeps:
	tools/generateDeps.py es5 > es5/deps.json

runserver:
	python2 -m SimpleHTTPServer

configure:
	npm install babel
	npm install babel-cli
	npm install babel-preset-es2015
	ln -s ../node_modules/babel-cli/bin/babel.js tools/babel

clean:
	rm -r node_modules
	rm -r es5/*
	rm tools/babel
