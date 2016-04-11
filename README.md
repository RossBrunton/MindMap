### Graph Display Tool

This is a simple tool to display graphs. While it was designed to display graphs of academic materials, it is fully configurable to display and edit any sort of mind map. You just need to create an appropriate "types file".

It was created by Ross Brunton as his Honours Project for Software Engineering and Heriot-Watt University, and is inspired by a similar project from Simon Antuon which used Flash.

## Requirements
Building the project requires nodejs and Python, and building has only been tested on a Linux system. But it can produce a script that has no external dependencies for deploying onto a web server.

## Deploying
Once the `mm.js` file has been downloaded (from this repo) or produced (see below), it can be used just by adding the following to the head of a HTML document:

    <script src='mm.js'></script>

And then, anywhere a diagram is needed, code of the following style should be used:

    <graph-display editor=editor src='objtest.json' types='acatypes.json'>
        Text to be displayed if the graph can't be loaded or crashes.
    </graph-display>

The `editor=editor` part can be ommited, and if it is, then the editor component will be disabled resulting in a readonly diagram. `src` and `types` are both JSON files. The `src` is a diagram file representing the diagram to display (this is what is exported and imported by the editor). The `types` file describes what the different types of nodes are, what information they contain and how to display them. One (`acatypes.json`) has been distributed with this project, for academic diagrams. `src` may be omitted from the editor, in which case an empty document is created.

## Building
First, clone the repo where you want the files to live:

    git clone https://github.com/RossBrunton/MindMap path/to/destination;
    cd path/to/destination;

Then, install all the requirements (babel, babel-cli, babel-preset-es2015, babel-polyfill and babel-preset-stage-3):

    make env;

Then build the script files (from modern javascript to an older version) and the dependancy file used for the package loader (`load.js`):

    make;

And then create the final, full file containing all these packages:

    make bigfile;

Which will produce a file named `mm.js`, which can be used when deploying.

## Hacking

To contribute to the project, simply clone the repo and make the environment as above, then set up the code to watch for and automatically compile changes:

    make compile_watch;
    
Note that any changes to depedencies will need to be updated using a normal `make`.

A development server can then be set up thusly:

    make runserver;
    
Which can be accessed from http://127.0.0.1:8000/test.html or http://127.0.0.1:8000/testEdit.html.

Then its a simple matter of editing files in `es6` to your heart's content.
