#!/usr/bin/python

""" A Python implementation of Load.js.

See Load.js's documentation for more details on what many of the properties do, as well as how the system works. This
module provides many methods of that package in Python with the same names and signatures.
"""

import os
import re
import json

TYPE_PACK = 0;
TYPE_RES = 1;

STATE_NONE = 0;
STATE_RAN = 2;

NFILENAME = 0;
NSTATE = 1;
NDEPS = 2;
NSIZE = 3;
NOBJ = 4;
NTYPE = 5;

class LoadState():
    """ Represents a "state" of packages being imported.
    
    LoadStates can have packages imported, when those packages are imported, all future importing will not import it
    again.
    
    Functions can be registered when a package is provided or a file is loaded. These will only be fired once
    for each package/file. Unless it has been cleared. These are called when Load.js would provide or append a file to
    head. But you have to provide your own functions. Of course.
    """
    
    _importSet = [];
    """ The set of all package names that need to be imported. """
    _batchSet = [];
    """ The set of package names that are in the current "import batch" and will be loaded soon. """
    _states = {};
    """ Key is package name, value is 0 for not imported, and 1 for imported. """
    _readies = {};
    """ Key is package name, value is an array of functions that will be called when the package is imported. """
    _provideCount = 0;
    """ How many packages still need imported. """
    _batching = False;
    """ Whether we are currently importing packages. """
    
    onProvide = None
    """ Function to call when a package is provided.
    
    Given two arguments, first is the name of the package, second is whether it is a package or resource.
    """
    onFileProvide = None
    """ Function to call when a file containing a package is to be loaded.
    
    It is given three arguments, first is the path, second is a boolean indicating whether the path is a file path or else
    a URL, third is whether it is a package or resource
    """
    skipLoad = False
    """ If true then the package "load" will never be imported, and silently ignored. """
    skipUnknown = False
    """ If true then any package which is not found will be silently ignored, rather than causing an error. """
    
    def _provide(self, name):
        """ Provides a package.
        
        Called when the file is "added", since no JS code actually runs.
        """
        self._states[name] = 2;
        
        if name in self._readies:
            for r in self._readies[name]:
                r(name);
        
        self._provideCount -= 1;
        #if not self._provideCount and self._batching:
        #    self._doBatchSet();
        
        if self.onProvide and (name != "load" or not self.skipLoad):
            self.onProvide(name, _names[name][NTYPE])
    
    def importPackage(self, name, onReady=None):
        """ Imports a package, calling the onProvide and onFileProvide functions as appropriate.
        
        If onReady is provided, it will be called with the package name when it is finally imported.
        """
        if not self.isImported(name):
            self._addToImportSet(name);
            
            if not self._batching:
                self._batching = True;
                self._doBatchSet();
            
            if name[0] == ">":
                name = name[1:];
            
            if onReady:
                if name not in self._readies:
                    self._readies[name] = [];
                self._readies[name].append(onReady);
            
            return None;
        else:
            if name[0] == ">":
                name = name[1:];
            
            if onReady:
                onReady(name);
            
            return name;
    
    def importAll(self):
        """ Imports all known packages. """
        for p in _names.keys():
            self.importPackage(p)
    
    def importMatch(self, regex):
        """ Imports all packages that match a given regex. """
        for p in _names.keys():
            if regex.match(p):
                self.importPackage(p)
    
    def isImported(self, name):
        """ Returns whether a given package is imported. """
        if name in self._states and self._states[name] == 2:
            return True;
        
        return False;
    
    def _addToImportSet(self, pack):
        """ Adds a given package to the import set. """
        if pack in self._importSet:
            return
        
        if pack not in _names:
            print pack + " required but not found."
            return
        
        if pack in self._states and self._states[pack] != 0:
            return
        
        self._importSet.append(pack);
        p = _names[pack];
        
        for d in p[2]:
            if d[0] == ">":
                self._addToImportSet(d[1:])
            elif d[0] == "@":
                self._importSet.append(d)
            else:
                self._addToImportSet(d)
    
    
    def _doBatchSet(self, trace=False):
        """ Performs the batching stage; calculating all the packages that can currently be imported without additional
        dependancies. """
        if not len(self._importSet):
            return;
        
        _packagesToImport = [];
        
        #Generate the batch set
        i = 0
        while i < len(self._importSet):
            if self._importSet[i].startswith("@"):
                _packagesToImport.append(self._importSet[i]);
                self._importSet.remove(self._importSet[i]);
                continue;
            
            now = _names[self._importSet[i]];
            
            okay = True;
            for d in now[NDEPS]:
                if d.startswith(">"): 
                    #Okay
                    pass
                elif d.startswith("@"): 
                    #Also Okay
                    pass
                elif d not in _names:
                    print(now[NFILENAME] + " depends on "+ d +", which is not available.");
                    okay = False;
                    break;
                elif d not in self._states or self._states[d] < STATE_RAN:
                    # Check if they are from the same file
                    if _names[d][NFILENAME] != now[NFILENAME]:
                        okay = False;
                        if trace: print(now[NFILENAME] +" blocked by "+_names[d][NFILENAME]);
                        break;
            
            
            if okay:
                if self._importSet[i] not in self._states or self._states[self._importSet[i]] == STATE_NONE:
                    _packagesToImport.append(self._importSet[i]);
                self._importSet.remove(self._importSet[i]);
                continue
            
            i += 1;
        
        # And then import them all
        # if len(_packagesToImport): print("Importing: "+(", ".join(_packagesToImport)));
        
        for p in _packagesToImport:
            if p.startswith("@"):
                self._doImportFile(p, TYPE_PACK)
            else:
                self._doImportFile(_names[p][NFILENAME], _names[p][NTYPE])
        
        # NOW DO IT ALL AGAIN
        if len(self._importSet):
            self._doBatchSet()
        else:
            self._batching = False
    
    
    def _doImportFile(self, file, type):
        """ Simulates appending a file to the head tag and provides packages. """
        remote = False
        if file[0] == "@":
            file = file[1:]
            remote = True
        
        if file not in _files:
            _files[file] = [[], [], False];
        
        f = _files[file];
        
        self._provideCount += len(f[0]);
        
        type = TYPE_PACK
        pname = ""
        for i in f[0]:
            type = _names[i][NTYPE]
            self._states[i] = STATE_RAN;
            self._provide(i)
            pname = i
        
        if self.onFileProvide and (not self.skipLoad or "load" not in f[0]):
            self.onFileProvide(file, remote, type, pname)
    
    def abort(self):
        """ Stops any currently running import. """
        self._batching = False;
        self._importSet = [];
        self._batchSet = [];
    
    def clear(self):
        """ Resets all the packages, as if none had been imported at all. """
        self.abort()
        self._states = []


_names = {};
""" Package information as per _names in Load.js. """
_files = {};
""" File information as per _files in Load.js. """

def addDependency(file, provided, required, size, type):
    """ Adds a new dependancy.
    
    Will be visible immediately to all LoadStates. """
    if not size:
        size = 0;
    
    _files[file] = [provided, required, False];
    
    for p in provided:
        # We only want to add it if either it doesn't exist, the given file has more packages or the given file is smaller
        
        if p not in _names\
        or (len(provided) > len(_files[_names[p][NFILENAME]][0])):
            _names[p] = [file, 0, required, size, None, type];

def importList(path, callback=None, errorCallback=None):
    """ Given a path to a dependancy file, loads the dependancies of that file. """
    #try:
    relativePath = os.path.split(path)[0]
    
    data = json.load(file(path))
    
    try:
        data["version"]
    except TypeError:
        #Convert into new format
        data = {"version":0, "packages":data}
    
    for p in data["packages"]:
        if "://" not in p[0] and not os.path.isabs(p[0]):
            p[0] = os.path.join(relativePath, p[0]);
        
        dlist = p[2];
        if len(p) > 4: dlist += p[4]
        addDependency(p[0], p[1], dlist, p[3], TYPE_PACK)
        
        if len(p) > 4:
            # Handle resources needed
            for j in p[4]:
                # Convert to absolute paths
                fpath = j
                
                if not ":" in fpath and not fpath.startswith("/"):
                    fpath = os.path.join(relativePath, fpath);
                
                addDependency(fpath, [j], [], 0, TYPE_RES);
    
    if callback:
        callback(data)
        
    #except Exception as e:
    #    if errorCallback:
    #        errorCallback(e)
    #    else:
    #        raise e
