all: compile mkdeps

compile:
	tools/babel -d es5 -s true es6

mkdeps:
	tools/generateDeps.py es5 > es5/deps.json

runserver:
	python2 -m SimpleHTTPServer

configure:
	npm install babel
	npm install babel-cli
	ln -s ../node_modules/babel-cli/bin/babel.js tools/babel

clean:
	rm -r node_modules
	rm tools/babel
