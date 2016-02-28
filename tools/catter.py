#!/usr/bin/python
from __future__ import print_function

from load import *
from sys import stdout
from base64 import b64encode

# I'm lazy, so rather than doing this properly I just do it now
stdout.write('"use strict";\n');

stdout.write('/* Library: fecha.min.js */ \n');
with open("libs/fecha.min.js") as f:
    for l in f.readlines():
        stdout.write(l)


stdout.write('/* Library: polyfill.min.js */ \n');
with open("libs/polyfill.min.js") as f:
    for l in f.readlines():
        stdout.write(l)


class Catter(LoadState):
    def onProvide(self, pname, type):
        pass
        # print("Provided: "+pname)
    
    def onFileProvide(self, fname, remote, type, rname):
        stdout.write("/* Including file: {} */\n".format(fname))
        if type == TYPE_PACK and not remote:
            with open(fname) as f:
                for l in f.readlines():
                    stdout.write(l)
                    
            stdout.write("\n")
        elif type == TYPE_RES and not remote:
            with open(fname) as f:
                buff = f.read()
            
            stdout.write("/* Resource: {} */\n".format(fname))
            stdout.write('load.provideResource("{}", atob("{}"));\n\n'.format(rname, b64encode(buff)))

importList("es5/deps.json")

c = Catter()
c.importPackage("load")
c.importPackage("mm.main")
c.importPackage("mm.mainwrap")
