#!/usr/bin/python

""" A Python implementation of Load.js.

See Load.js's documentation for more details on what many of the properties do, as well as how the system works. This
module provides many methods of that package in Python with the same names and signatures.
"""

import os
from os import path
import re
import json
from six import string_types

class LoadHandler(object):
    """ Override this class to change how the LoadState works """
    def load_file(self, state, file, packs, type):
        state.printMsg("Loading file "+file)
        
        for p in packs:
            state.provide(p, type)
    
    """ Evaluate a single package """
    def evaluate(self, state, pack, type):
        state.printMsg("Evaluating "+pack)
        
        for p in state.getDependencies(pack):
            state.require(p)
        
        state.printMsg("Done evaluating "+pack)



class LoadState(object):
    STATE_NONE = 0
    STATE_SEEN = 1
    STATE_IMPORTING = 2
    STATE_IMPORTED = 3
    STATE_RUNNING = 4
    STATE_RAN = 5
    
    TYPE_PACK = 0
    TYPE_RES = 1
    TYPE_EXT = 2
    
    def __init__(self, handler=None, noisy=False):
        self._packs = {}
        self._files = {}
        self._importSet = set()
        self._depFiles = {}
        self._currentEval = None
        self._noisy = noisy
        if handler:
            self._handler = handler
        else:
            self._handler = LoadHandler()
    
    
    def printMsg(self, msg):
        if self._noisy:
            print(msg);
    
    
    def provide(self, name, type):
        self.printMsg("Provided "+name)
        
        if name in self._packs:
            if self._packs[name]["state"] == LoadState.STATE_IMPORTING:
                self._packs[name]["state"] = LoadState.STATE_IMPORTED
            else:
                self._packs[name]["state"] = LoadState.STATE_SEEN
        else:
            self._packs[name] = {
                "file":"about:blank",
                "state":LoadState.STATE_SEEN,
                "deps":[],
                "size":0,
                "type":type,
                "evalOnImport":False
            }
        
        if self._packs[name]["state"] == LoadState.STATE_SEEN:
            return
        
        if self._packs[name]["evalOnImport"]:
            self.evaluate(name)
        
        self._tryImport()
    
    
    def require(self, name):
        defer = name.startswith(">")
        if defer:
            name = name[1:]
        
        if name in self._packs:
            if not defer:
                self.evaluate(name)
            else:
                self._packs[name]["evalOnImport"] = True
    
    
    def evaluate(self, name):
        if self._packs[name]["state"] == LoadState.STATE_RUNNING:
            return
        
        if self._packs[name]["state"] == LoadState.STATE_IMPORTED:
            oldCur = self._currentEval
            self._currentEval = name
            self._packs[name]["state"] = LoadState.STATE_RUNNING
            
            self._handler.evaluate(self, name, self._packs[name]["type"])
            
            self._packs[name]["state"] = LoadState.STATE_RAN
            self._currentEval = oldCur
    
    
    def importPack(self, name):
        if not self.isImported(name):
            oldName = name
            if name.startswith(">"):
                name = name[1:]
            
            self._addToImportSet(oldName)
            self._tryImport()
    
    
    def _addToImportSet(self, pack):
        if pack in self._importSet:
            return
        
        if self._packs[pack]["state"] >= LoadState.STATE_IMPORTING:
            return
        
        self._importSet.add(pack)
        
        p = self._packs[pack]
        
        for d in p["deps"]:
            if d.startswith(">"):
                self._addToImportSet(d[1:])
            else:
                self._addToImportSet(d)
    
    
    def _tryImport(self, trace=False):
        if not self._importSet:
            return
        
        toImport = set()
        
        for p in self._importSet:
            now = self._packs[p]
            
            okay = True
            
            for d in now["deps"]:
                if d.startswith(">"):
                    # okay
                    pass
                elif d not in self._packs:
                    # TODO: WARNING
                    pass
                elif self._packs[d]["state"] < LoadState.STATE_IMPORTED:
                    # Check if from same file
                    if self._packs[d]["file"] != now["file"]:
                        okay = False
                        if trace:
                            # TODO: Trace
                            pass
                        break
            
            if okay:
                if now["state"] <= LoadState.STATE_SEEN:
                    toImport.add(p)
                
        
        self._importSet = self._importSet ^ toImport
        
        # Now import them all
        self.printMsg("Importing "+", ".join(toImport))
        
        for p in toImport:
            self._doImportFile(self._packs[p]["file"], self._packs[p]["type"], p)
    
    
    def _doImportFile(self, file, type, pack):
        f = self._files[file]
        
        if self._packs[pack]["state"] == LoadState.STATE_SEEN:
            self._packs[pack]["state"] = LoadState.STATE_IMPORTING
            
            self.provide(pack, type)
        else:
            if file not in self._files:
                self._files[file] = [[], [], false]
            
            if f[2]:
                return
            f[2] = True
            
            for p in f[0]:
                self._packs[p]["state"] = LoadState.STATE_IMPORTING
            
            self._handler.load_file(self, file, f[0], type)
    
    
    def abort(self):
        self._importSet = []
    
    
    def isImported(self, name):
        return name in self._packs and self._packs[name]["state"] >= LoadState.STATE_IMPORTED
    
    
    def addDependency(self, file, provided, required, size, type):
        for p in provided:
            if (p not in self._packs)\
            or (self._packs[p]["state"] <= LoadState.STATE_NONE and\
              (self._packs[p]["file"] not in self._files or len(provided)>len(self._files[self._packs[p]["file"]][0]))\
            ):
                self._packs[p] = {
                    "file":file,
                    "state":LoadState.STATE_NONE,
                    "deps":required,
                    "size":size,
                    "type":type,
                    "evalOnImport":False
                }
        
        self._files[file] = [provided, required, False]
    
    
    def loadDepsObject(self, data, absolutePath):
        if isinstance(data, string_types):
            data = json.loads(data)
        
        deps = data["packages"]
        
        for d in deps:
            if ":" not in d[0] and not d[0].startswith("/"):
                d[0] = path.join(absolutePath, d[0])
            
            self.addDependency(d[0], d[1], d[2], d[3], d[4])
        
        # Logic for external deps
    
    
    def loadDeps(self, file):
        self.printMsg("Reading dependancy file "+file)
        
        absolutePath = path.dirname(path.abspath(file))
        
        with open(file, "r") as f:
            data = f.read()
            self.loadDepsObject(data, absolutePath)
    
    
    def importAndEvaluate(self, pack):
        self.importPack(pack)
        self.evaluate(pack)
    
    
    def lie(self, list, pack):
        self.loadDeps(list)
        self.importAndEvaluate(pack)
    
    
    def getDependencies(self, pack):
        return self._packs[pack]["deps"]
