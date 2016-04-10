#!/usr/bin/python

# Generates a dependancy file

# > generateDeps.py path [rel] [obj] [indent]
# Path is the path to (recursivley) generate dependancies for, defaults to the current directory
# Rel is the path that the files will be relative to, this should be the directory that a "deps.json" is output
# Obj will be merged with the dependancies, and any properties on it will be present in the exported file.
# Indent is the amount to indent (an integer) for pretty printing,
#  if not specified then the file will be compressed as much as possible

import sys
import os
import posixpath
import re
import json

TYPE_PACK = 0;
TYPE_RES = 1;
TYPE_EXT = 2;

string = "\"([^\"\n]+?)\""
array = "(\[[^]]*?\])"
comma = "[^)]*?,[^)]*?"

reqPatt = re.compile(r"load\.require\(\s*"+string, re.MULTILINE | re.DOTALL)
reqRPatt = re.compile(r"load\.requireResource\(\s*"+string, re.MULTILINE | re.DOTALL)
reqEPatt = re.compile(r"load\.requireExternal\(\s*"+string+comma+string, re.MULTILINE | re.DOTALL)
reqEAPatt = re.compile(r"load\.requireExternal\(\s*?"+string+comma+string+comma+array, re.MULTILINE | re.DOTALL)

provPatt = re.compile(r"load\.provide\(\s*"+string, re.MULTILINE | re.DOTALL)
provRPatt = re.compile(r"load\.provideResource\(\s*\"([^\"]+?)\"", re.MULTILINE | re.DOTALL)
data = []

rel = sys.argv[1]
if len(sys.argv) >= 3:
	rel = sys.argv[2]

def handlePath(f):
	# Check if URL
	if f.startswith("//") or f.startswith("http://") or f.startswith("https://"):
		return f
	
	return posixpath.relpath(f, rel)

def addPack(path, size, type):
	obj = [handlePath(path), [], [], size, type]
	data.append(obj)
	
	return obj;

for root, dirs, files in os.walk(sys.argv[1]):
	for f in files:
		if f[-3:] == ".js":
			with open(os.path.join(root, f)) as reader:
				pack = addPack(posixpath.join(root, f), os.path.getsize(os.path.join(root, f)), TYPE_PACK)
				
				contents = reader.read()
				# load.provide
				for match in provPatt.finditer(contents):
					if match.group(1) not in pack[1]:
						pack[1].append(match.group(1))
				
				# load.provideResaurce
				for match in provRPatt.finditer(contents):
					if match.group(1) not in pack[1]:
						pack[1].append(match.group(1))
				
				# load.require
				for match in reqPatt.finditer(contents):
					if match.group(1) not in pack[2]:
						pack[2].append(match.group(1))
				
				# load.requireResource
				for match in reqRPatt.finditer(contents):
					if match.group(1) not in pack[2]:
						location = posixpath.join(root, match.group(1))
						
						res = addPack(location, os.path.getsize(os.path.join(root, match.group(1))), TYPE_RES)
						res[1] = [match.group(1)]
						pack[2].append(match.group(1))
				
				# load.requireExternal (arg)
				for match in reqEAPatt.finditer(contents):
					if match.group(1) not in pack[2]:
						res = addPack(match.group(2), 0, TYPE_EXT)
						res[1] = [match.group(1)]
						res[2] = json.loads(match.group(3))
						pack[2].append(match.group(1))
					
				# load.requireExternal (no arg)
				for match in reqEPatt.finditer(contents):
					if match.group(1) not in pack[2]:
						res = addPack(match.group(2), 0, TYPE_EXT)
						res[1] = [match.group(1)]
						pack[2].append(match.group(1))
				
				pack[1].sort()
				pack[2].sort()

export = {"version":1, "packages":data}
if len(sys.argv) >= 4:
	export.update(json.loads(sys.argv[3]))

if len(sys.argv) >= 5:
	print json.dumps(export, indent=int(sys.argv[4]))
else:
	print json.dumps(export, separators=(',', ':'))
