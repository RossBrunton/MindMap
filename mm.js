!function e(t,n,r){function s(i,u){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!u&&c)return c(i,!0);if(o)return o(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[i]={exports:{}};t[i][0].call(f.exports,function(n){var e=t[i][1][n];return s(e?e:n)},f,f.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)s(r[i]);return s}({1:[function(t,n,e){(function(n){"use strict";if(t(189),t(2),n._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");n._babelPolyfill=!0}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{189:189,2:2}],2:[function(t,n,e){n.exports=t(190)},{190:190}],3:[function(t,n,e){n.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],4:[function(t,n,e){var r=t(84)("unscopables"),o=Array.prototype;void 0==o[r]&&t(32)(o,r,{}),n.exports=function(t){o[r][t]=!0}},{32:32,84:84}],5:[function(t,n,e){var r=t(39);n.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},{39:39}],6:[function(t,n,e){"use strict";var r=t(81),o=t(77),i=t(80);n.exports=[].copyWithin||function copyWithin(t,n){var e=r(this),u=i(e.length),c=o(t,u),a=o(n,u),s=arguments,f=s.length>2?s[2]:void 0,l=Math.min((void 0===f?u:o(f,u))-a,u-c),h=1;for(c>a&&a+l>c&&(h=-1,a+=l-1,c+=l-1);l-- >0;)a in e?e[c]=e[a]:delete e[c],c+=h,a+=h;return e}},{77:77,80:80,81:81}],7:[function(t,n,e){"use strict";var r=t(81),o=t(77),i=t(80);n.exports=[].fill||function fill(t){for(var n=r(this,!0),e=i(n.length),u=arguments,c=u.length,a=o(c>1?u[1]:void 0,e),s=c>2?u[2]:void 0,f=void 0===s?e:o(s,e);f>a;)n[a++]=t;return n}},{77:77,80:80,81:81}],8:[function(t,n,e){var r=t(79),o=t(80),i=t(77);n.exports=function(t){return function(n,e,u){var c,a=r(n),s=o(a.length),f=i(u,s);if(t&&e!=e){for(;s>f;)if(c=a[f++],c!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f;return!t&&-1}}},{77:77,79:79,80:80}],9:[function(t,n,e){var r=t(18),o=t(35),i=t(81),u=t(80),c=t(10);n.exports=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,f=6==t,l=5==t||f;return function(h,p,v){for(var g,y,d=i(h),m=o(d),x=r(p,v,3),S=u(m.length),b=0,w=n?c(h,S):e?c(h,0):void 0;S>b;b++)if((l||b in m)&&(g=m[b],y=x(g,b,d),t))if(n)w[b]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return b;case 2:w.push(g)}else if(s)return!1;return f?-1:a||s?s:w}}},{10:10,18:18,35:35,80:80,81:81}],10:[function(t,n,e){var r=t(39),o=t(37),i=t(84)("species");n.exports=function(t,n){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&(e=e[i],null===e&&(e=void 0))),new(void 0===e?Array:e)(n)}},{37:37,39:39,84:84}],11:[function(t,n,e){var r=t(12),o=t(84)("toStringTag"),i="Arguments"==r(function(){return arguments}());n.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=(n=Object(t))[o])?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},{12:12,84:84}],12:[function(t,n,e){var r={}.toString;n.exports=function(t){return r.call(t).slice(8,-1)}},{}],13:[function(t,n,e){"use strict";var r=t(47),o=t(32),i=t(54),u=t(18),c=t(70),a=t(20),s=t(28),f=t(43),l=t(45),h=t(83)("id"),p=t(31),v=t(39),g=t(66),y=t(21),d=Object.isExtensible||v,m=y?"_s":"size",x=0,S=function(t,n){if(!v(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!p(t,h)){if(!d(t))return"F";if(!n)return"E";o(t,h,++x)}return"O"+t[h]},b=function(t,n){var e,r=S(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};n.exports={getConstructor:function(t,n,e,o){var f=t(function(t,i){c(t,f,n),t._i=r.create(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=i&&s(i,e,t[o],t)});return i(f.prototype,{clear:function clear(){for(var t=this,n=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete n[e.i];t._f=t._l=void 0,t[m]=0},"delete":function(t){var n=this,e=b(n,t);if(e){var r=e.n,o=e.p;delete n._i[e.i],e.r=!0,o&&(o.n=r),r&&(r.p=o),n._f==e&&(n._f=r),n._l==e&&(n._l=o),n[m]--}return!!e},forEach:function forEach(t){for(var n,e=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(e(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!b(this,t)}}),y&&r.setDesc(f.prototype,"size",{get:function(){return a(this[m])}}),f},def:function(t,n,e){var r,o,i=b(t,n);return i?i.v=e:(t._l=i={i:o=S(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[m]++,"F"!==o&&(t._i[o]=i)),t},getEntry:b,setStrong:function(t,n,e){f(t,n,function(t,n){this._t=t,this._k=n,this._l=void 0},function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?"keys"==n?l(0,e.k):"values"==n?l(0,e.v):l(0,[e.k,e.v]):(t._t=void 0,l(1))},e?"entries":"values",!e,!0),g(n)}}},{18:18,20:20,21:21,28:28,31:31,32:32,39:39,43:43,45:45,47:47,54:54,66:66,70:70,83:83}],14:[function(t,n,e){var r=t(28),o=t(11);n.exports=function(t){return function toJSON(){if(o(this)!=t)throw TypeError(t+"#toJSON isn't generic");var n=[];return r(this,!1,n.push,n),n}}},{11:11,28:28}],15:[function(t,n,e){"use strict";var r=t(32),o=t(54),i=t(5),u=t(70),c=t(28),a=t(9),s=t(83)("weak"),f=t(39),l=t(31),h=Object.isExtensible||f,p=a(5),v=a(6),g=0,y=function(t){return t._l||(t._l=new d)},d=function(){this.a=[]},m=function(t,n){return p(t.a,function(t){return t[0]===n})};d.prototype={get:function(t){var n=m(this,t);return n?n[1]:void 0},has:function(t){return!!m(this,t)},set:function(t,n){var e=m(this,t);e?e[1]=n:this.a.push([t,n])},"delete":function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},n.exports={getConstructor:function(t,n,e,r){var i=t(function(t,o){u(t,i,n),t._i=g++,t._l=void 0,void 0!=o&&c(o,e,t[r],t)});return o(i.prototype,{"delete":function(t){return f(t)?h(t)?l(t,s)&&l(t[s],this._i)&&delete t[s][this._i]:y(this)["delete"](t):!1},has:function has(t){return f(t)?h(t)?l(t,s)&&l(t[s],this._i):y(this).has(t):!1}}),i},def:function(t,n,e){return h(i(n))?(l(n,s)||r(n,s,{}),n[s][t._i]=e):y(t).set(n,e),t},frozenStore:y,WEAK:s}},{28:28,31:31,32:32,39:39,5:5,54:54,70:70,83:83,9:9}],16:[function(t,n,e){"use strict";var r=t(30),o=t(19),i=t(62),u=t(54),c=t(28),a=t(70),s=t(39),f=t(25),l=t(44),h=t(67);n.exports=function(t,n,e,p,v,g){var y=r[t],d=y,m=v?"set":"add",x=d&&d.prototype,S={},b=function(t){var n=x[t];i(x,t,"delete"==t?function(t){return g&&!s(t)?!1:n.call(this,0===t?0:t)}:"has"==t?function has(t){return g&&!s(t)?!1:n.call(this,0===t?0:t)}:"get"==t?function get(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function add(t){return n.call(this,0===t?0:t),this}:function set(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof d&&(g||x.forEach&&!f(function(){(new d).entries().next()}))){var w,E=new d,O=E[m](g?{}:-0,1)!=E,P=f(function(){E.has(1)}),_=l(function(t){new d(t)});_||(d=n(function(n,e){a(n,d,t);var r=new y;return void 0!=e&&c(e,v,r[m],r),r}),d.prototype=x,x.constructor=d),g||E.forEach(function(t,n){w=1/n===-(1/0)}),(P||w)&&(b("delete"),b("has"),v&&b("get")),(w||O)&&b(m),g&&x.clear&&delete x.clear}else d=p.getConstructor(n,t,v,m),u(d.prototype,e);return h(d,t),S[t]=d,o(o.G+o.W+o.F*(d!=y),S),g||p.setStrong(d,t,v),d}},{19:19,25:25,28:28,30:30,39:39,44:44,54:54,62:62,67:67,70:70}],17:[function(t,n,e){var r=n.exports={version:"1.2.5"};"number"==typeof __e&&(__e=r)},{}],18:[function(t,n,e){var r=t(3);n.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},{3:3}],19:[function(t,n,e){var r=t(30),o=t(17),i=t(32),u=t(62),c="prototype",a=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,e){var f,l,h,p,v=t&s.G,g=t&s.P,y=v?r:t&s.S?r[n]||(r[n]={}):(r[n]||{})[c],d=v?o:o[n]||(o[n]={});v&&(e=n);for(f in e)l=!(t&s.F)&&y&&f in y,h=(l?y:e)[f],p=t&s.B&&l?a(h,r):g&&"function"==typeof h?a(Function.call,h):h,y&&!l&&u(y,f,h),d[f]!=h&&i(d,f,p),g&&((d[c]||(d[c]={}))[f]=h)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,n.exports=s},{17:17,30:30,32:32,62:62}],20:[function(t,n,e){n.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],21:[function(t,n,e){n.exports=!t(25)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{25:25}],22:[function(t,n,e){var r=t(39),o=t(30).document,i=r(o)&&r(o.createElement);n.exports=function(t){return i?o.createElement(t):{}}},{30:30,39:39}],23:[function(t,n,e){var r=t(47);n.exports=function(t){var n=r.getKeys(t),e=r.getSymbols;if(e)for(var o,i=e(t),u=r.isEnum,c=0;i.length>c;)u.call(t,o=i[c++])&&n.push(o);return n}},{47:47}],24:[function(t,n,e){var r=t(84)("match");n.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(o){}}return!0}},{84:84}],25:[function(t,n,e){n.exports=function(t){try{return!!t()}catch(n){return!0}}},{}],26:[function(t,n,e){"use strict";var r=t(32),o=t(62),i=t(25),u=t(20),c=t(84);n.exports=function(t,n,e){var a=c(t),s=""[t];i(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(o(String.prototype,t,e(u,a,s)),r(RegExp.prototype,a,2==n?function(t,n){return s.call(t,this,n)}:function(t){return s.call(t,this)}))}},{20:20,25:25,32:32,62:62,84:84}],27:[function(t,n,e){"use strict";var r=t(5);n.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},{5:5}],28:[function(t,n,e){var r=t(18),o=t(41),i=t(36),u=t(5),c=t(80),a=t(85);n.exports=function(t,n,e,s){var f,l,h,p=a(t),v=r(e,s,n?2:1),g=0;if("function"!=typeof p)throw TypeError(t+" is not iterable!");if(i(p))for(f=c(t.length);f>g;g++)n?v(u(l=t[g])[0],l[1]):v(t[g]);else for(h=p.call(t);!(l=h.next()).done;)o(h,v,l.value,n)}},{18:18,36:36,41:41,5:5,80:80,85:85}],29:[function(t,n,e){var r={}.toString,o=t(79),i=t(47).getNames,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(n){return u.slice()}};n.exports.get=function getOwnPropertyNames(t){return u&&"[object Window]"==r.call(t)?c(t):i(o(t))}},{47:47,79:79}],30:[function(t,n,e){var r=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},{}],31:[function(t,n,e){var r={}.hasOwnProperty;n.exports=function(t,n){return r.call(t,n)}},{}],32:[function(t,n,e){var r=t(47),o=t(61);n.exports=t(21)?function(t,n,e){return r.setDesc(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},{21:21,47:47,61:61}],33:[function(t,n,e){n.exports=t(30).document&&document.documentElement},{30:30}],34:[function(t,n,e){n.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},{}],35:[function(t,n,e){var r=t(12);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},{12:12}],36:[function(t,n,e){var r=t(46),o=t(84)("iterator"),i=Array.prototype;n.exports=function(t){return(r.Array||i[o])===t}},{46:46,84:84}],37:[function(t,n,e){var r=t(12);n.exports=Array.isArray||function(t){return"Array"==r(t)}},{12:12}],38:[function(t,n,e){var r=t(39),o=Math.floor;n.exports=function isInteger(t){return!r(t)&&isFinite(t)&&o(t)===t}},{39:39}],39:[function(t,n,e){n.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],40:[function(t,n,e){var r=t(39),o=t(12),i=t(84)("match");n.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},{12:12,39:39,84:84}],41:[function(t,n,e){var r=t(5);n.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var u=t["return"];throw void 0!==u&&r(u.call(t)),i}}},{5:5}],42:[function(t,n,e){"use strict";var r=t(47),o=t(61),i=t(67),u={};t(32)(u,t(84)("iterator"),function(){return this}),n.exports=function(t,n,e){t.prototype=r.create(u,{next:o(1,e)}),i(t,n+" Iterator")}},{32:32,47:47,61:61,67:67,84:84}],43:[function(t,n,e){"use strict";var r=t(49),o=t(19),i=t(62),u=t(32),c=t(31),a=t(84)("iterator"),s=t(46),f=t(42),l=t(67),h=t(47).getProto,p=!([].keys&&"next"in[].keys()),v="@@iterator",g="keys",y="values",d=function(){return this};n.exports=function(t,n,e,m,x,S,b){f(e,n,m);var w,E,O=function(t){if(!p&&t in _)return _[t];switch(t){case g:return function keys(){return new e(this,t)};case y:return function values(){return new e(this,t)}}return function entries(){return new e(this,t)}},P=n+" Iterator",_=t.prototype,M=_[a]||_[v]||x&&_[x],F=M||O(x);if(M){var A=h(F.call(new t));l(A,P,!0),!r&&c(_,v)&&u(A,a,d)}if(r&&!b||!p&&a in _||u(_,a,F),s[n]=F,s[P]=d,x)if(w={values:x==y?F:O(y),keys:S?F:O(g),entries:x!=y?F:O("entries")},b)for(E in w)E in _||i(_,E,w[E]);else o(o.P+o.F*p,n,w);return w}},{19:19,31:31,32:32,42:42,46:46,47:47,49:49,62:62,67:67,84:84}],44:[function(t,n,e){var r=t(84)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(u){}n.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){e=!0},i[r]=function(){return u},t(i)}catch(c){}return e}},{84:84}],45:[function(t,n,e){n.exports=function(t,n){return{value:n,done:!!t}}},{}],46:[function(t,n,e){n.exports={}},{}],47:[function(t,n,e){var r=Object;n.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},{}],48:[function(t,n,e){var r=t(47),o=t(79);n.exports=function(t,n){for(var e,i=o(t),u=r.getKeys(i),c=u.length,a=0;c>a;)if(i[e=u[a++]]===n)return e}},{47:47,79:79}],49:[function(t,n,e){n.exports=!1},{}],50:[function(t,n,e){n.exports=Math.expm1||function expm1(t){return 0==(t=+t)?t:t>-1e-6&&1e-6>t?t+t*t/2:Math.exp(t)-1}},{}],51:[function(t,n,e){n.exports=Math.log1p||function log1p(t){return(t=+t)>-1e-8&&1e-8>t?t-t*t/2:Math.log(1+t)}},{}],52:[function(t,n,e){n.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:0>t?-1:1}},{}],53:[function(t,n,e){var r,o,i,u=t(30),c=t(76).set,a=u.MutationObserver||u.WebKitMutationObserver,s=u.process,f="process"==t(12)(s),l=function(){var t,n;for(f&&(t=s.domain)&&(s.domain=null,t.exit());r;)n=r.domain,n&&n.enter(),r.fn.call(),n&&n.exit(),r=r.next;o=void 0,t&&t.enter()};if(f)i=function(){s.nextTick(l)};else if(a){var h=1,p=document.createTextNode("");new a(l).observe(p,{characterData:!0}),i=function(){p.data=h=-h}}else i=function(){c.call(u,l)};n.exports=function asap(t){var n={fn:t,next:void 0,domain:f&&s.domain};o&&(o.next=n),r||(r=n,i()),o=n}},{12:12,30:30,76:76}],54:[function(t,n,e){var r=t(62);n.exports=function(t,n){for(var e in n)r(t,e,n[e]);return t}},{62:62}],55:[function(t,n,e){var r=t(47),o=t(81),i=t(35);n.exports=t(25)(function(){var t=Object.assign,n={},e={},r=Symbol(),o="abcdefghijklmnopqrst";return n[r]=7,o.split("").forEach(function(t){e[t]=t}),7!=t({},n)[r]||Object.keys(t({},e)).join("")!=o})?function assign(t,n){for(var e=o(t),u=arguments,c=u.length,a=1,s=r.getKeys,f=r.getSymbols,l=r.isEnum;c>a;)for(var h,p=i(u[a++]),v=f?s(p).concat(f(p)):s(p),g=v.length,y=0;g>y;)l.call(p,h=v[y++])&&(e[h]=p[h]);return e}:Object.assign},{25:25,35:35,47:47,81:81}],56:[function(t,n,e){var r=(t(19),t(17)),o=t(25);n.exports=function(n,e){var i=t(19),u=(r.Object||{})[n]||Object[n],c={};c[n]=e(u),i(i.S+i.F*o(function(){u(1)}),"Object",c)}},{17:17,19:19,25:25}],57:[function(t,n,e){var r=t(47),o=t(79),i=r.isEnum;n.exports=function(t){return function(n){for(var e,u=o(n),c=r.getKeys(u),a=c.length,s=0,f=[];a>s;)i.call(u,e=c[s++])&&f.push(t?[e,u[e]]:u[e]);return f}}},{47:47,79:79}],58:[function(t,n,e){var r=t(47),o=t(5),i=t(30).Reflect;n.exports=i&&i.ownKeys||function ownKeys(t){var n=r.getNames(o(t)),e=r.getSymbols;return e?n.concat(e(t)):n}},{30:30,47:47,5:5}],59:[function(t,n,e){"use strict";var r=t(60),o=t(34),i=t(3);n.exports=function(){for(var t=i(this),n=arguments.length,e=Array(n),u=0,c=r._,a=!1;n>u;)(e[u]=arguments[u++])===c&&(a=!0);return function(){var r,i=this,u=arguments,s=u.length,f=0,l=0;if(!a&&!s)return o(t,e,i);if(r=e.slice(),a)for(;n>f;f++)r[f]===c&&(r[f]=u[l++]);for(;s>l;)r.push(u[l++]);return o(t,r,i)}}},{3:3,34:34,60:60}],60:[function(t,n,e){n.exports=t(30)},{30:30}],61:[function(t,n,e){n.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},{}],62:[function(t,n,e){var r=t(30),o=t(32),i=t(83)("src"),u="toString",c=Function[u],a=(""+c).split(u);t(17).inspectSource=function(t){return c.call(t)},(n.exports=function(t,n,e,u){"function"==typeof e&&(e.hasOwnProperty(i)||o(e,i,t[n]?""+t[n]:a.join(String(n))),e.hasOwnProperty("name")||o(e,"name",n)),t===r?t[n]=e:(u||delete t[n],o(t,n,e))})(Function.prototype,u,function toString(){return"function"==typeof this&&this[i]||c.call(this)})},{17:17,30:30,32:32,83:83}],63:[function(t,n,e){n.exports=function(t,n){var e=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,e)}}},{}],64:[function(t,n,e){n.exports=Object.is||function is(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},{}],65:[function(t,n,e){var r=t(47).getDesc,o=t(39),i=t(5),u=function(t,n){if(i(t),!o(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,e,o){try{o=t(18)(Function.call,r(Object.prototype,"__proto__").set,2),o(n,[]),e=!(n instanceof Array)}catch(i){e=!0}return function setPrototypeOf(t,n){return u(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:u}},{18:18,39:39,47:47,5:5}],66:[function(t,n,e){"use strict";var r=t(30),o=t(47),i=t(21),u=t(84)("species");n.exports=function(t){var n=r[t];i&&n&&!n[u]&&o.setDesc(n,u,{configurable:!0,get:function(){return this}})}},{21:21,30:30,47:47,84:84}],67:[function(t,n,e){var r=t(47).setDesc,o=t(31),i=t(84)("toStringTag");n.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},{31:31,47:47,84:84}],68:[function(t,n,e){var r=t(30),o="__core-js_shared__",i=r[o]||(r[o]={});n.exports=function(t){return i[t]||(i[t]={})}},{30:30}],69:[function(t,n,e){var r=t(5),o=t(3),i=t(84)("species");n.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},{3:3,5:5,84:84}],70:[function(t,n,e){n.exports=function(t,n,e){if(!(t instanceof n))throw TypeError(e+": use the 'new' operator!");return t}},{}],71:[function(t,n,e){var r=t(78),o=t(20);n.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),s=c.length;return 0>a||a>=s?t?"":void 0:(i=c.charCodeAt(a),55296>i||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},{20:20,78:78}],72:[function(t,n,e){var r=t(40),o=t(20);n.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(o(t))}},{20:20,40:40}],73:[function(t,n,e){var r=t(80),o=t(74),i=t(20);n.exports=function(t,n,e,u){var c=String(i(t)),a=c.length,s=void 0===e?" ":String(e),f=r(n);if(a>=f)return c;""==s&&(s=" ");var l=f-a,h=o.call(s,Math.ceil(l/s.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},{20:20,74:74,80:80}],74:[function(t,n,e){"use strict";var r=t(78),o=t(20);n.exports=function repeat(t){var n=String(o(this)),e="",i=r(t);if(0>i||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},{20:20,78:78}],75:[function(t,n,e){var r=t(19),o=t(20),i=t(25),u="	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",c="["+u+"]",a="​",s=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,n){var e={};e[t]=n(h),r(r.P+r.F*i(function(){return!!u[t]()||a[t]()!=a}),"String",e)},h=l.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(s,"")),2&n&&(t=t.replace(f,"")),t};n.exports=l},{19:19,20:20,25:25}],76:[function(t,n,e){"use strict";var r,o,i,u=t(18),c=t(34),a=t(33),s=t(22),f=t(30),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,g=0,y={},d="onreadystatechange",m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){m.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++g]=function(){c("function"==typeof t?t:Function(t),n)},r(g),g},p=function clearImmediate(t){delete y[t]},"process"==t(12)(l)?r=function(t){l.nextTick(u(m,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=x,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r=d in s("script")?function(t){a.appendChild(s("script"))[d]=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),n.exports={set:h,clear:p}},{12:12,18:18,22:22,30:30,33:33,34:34}],77:[function(t,n,e){var r=t(78),o=Math.max,i=Math.min;n.exports=function(t,n){return t=r(t),0>t?o(t+n,0):i(t,n)}},{78:78}],78:[function(t,n,e){var r=Math.ceil,o=Math.floor;n.exports=function(t){return isNaN(t=+t)?0:(t>0?o:r)(t)}},{}],79:[function(t,n,e){var r=t(35),o=t(20);n.exports=function(t){return r(o(t))}},{20:20,35:35}],80:[function(t,n,e){var r=t(78),o=Math.min;n.exports=function(t){return t>0?o(r(t),9007199254740991):0}},{78:78}],81:[function(t,n,e){var r=t(20);n.exports=function(t){return Object(r(t))}},{20:20}],82:[function(t,n,e){var r=t(39);n.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},{39:39}],83:[function(t,n,e){var r=0,o=Math.random();n.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+o).toString(36))}},{}],84:[function(t,n,e){var r=t(68)("wks"),o=t(83),i=t(30).Symbol;n.exports=function(t){return r[t]||(r[t]=i&&i[t]||(i||o)("Symbol."+t))}},{30:30,68:68,83:83}],85:[function(t,n,e){var r=t(11),o=t(84)("iterator"),i=t(46);n.exports=t(17).getIteratorMethod=function(t){return void 0!=t?t[o]||t["@@iterator"]||i[r(t)]:void 0}},{11:11,17:17,46:46,84:84}],86:[function(t,n,e){"use strict";var r,o=t(47),i=t(21),u=t(61),c=t(33),a=t(22),s=t(31),f=t(12),l=t(19),h=t(34),p=t(9),v=t(83)("__proto__"),g=t(39),y=t(5),d=t(3),m=t(81),x=t(79),S=t(78),b=t(77),w=t(80),E=t(35),O=t(25),P=Object.prototype,_=[],M=_.slice,F=_.join,A=o.setDesc,j=o.getDesc,N=o.setDescs,I=t(8)(!1),k={};i||(r=!O(function(){return 7!=A(a("div"),"a",{get:function(){return 7}}).a}),o.setDesc=function(t,n,e){if(r)try{return A(t,n,e)}catch(o){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(y(t)[n]=e.value),t},o.getDesc=function(t,n){if(r)try{return j(t,n)}catch(e){}return s(t,n)?u(!P.propertyIsEnumerable.call(t,n),t[n]):void 0},o.setDescs=N=function(t,n){y(t);for(var e,r=o.getKeys(n),i=r.length,u=0;i>u;)o.setDesc(t,e=r[u++],n[e]);return t}),l(l.S+l.F*!i,"Object",{getOwnPropertyDescriptor:o.getDesc,defineProperty:o.setDesc,defineProperties:N});var D="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),T=D.concat("length","prototype"),L=D.length,R=function(){var t,n=a("iframe"),e=L,r=">";for(n.style.display="none",c.appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+r),t.close(),R=t.F;e--;)delete R.prototype[D[e]];return R()},C=function(t,n){return function(e){var r,o=x(e),i=0,u=[];for(r in o)r!=v&&s(o,r)&&u.push(r);for(;n>i;)s(o,r=t[i++])&&(~I(u,r)||u.push(r));return u}},G=function(){};l(l.S,"Object",{getPrototypeOf:o.getProto=o.getProto||function(t){return t=m(t),s(t,v)?t[v]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?P:null},getOwnPropertyNames:o.getNames=o.getNames||C(T,T.length,!0),create:o.create=o.create||function(t,n){var e;return null!==t?(G.prototype=y(t),e=new G,G.prototype=null,e[v]=t):e=R(),void 0===n?e:N(e,n)},keys:o.getKeys=o.getKeys||C(D,L,!1)});var W=function(t,n,e){if(!(n in k)){for(var r=[],o=0;n>o;o++)r[o]="a["+o+"]";k[n]=Function("F,a","return new F("+r.join(",")+")")}return k[n](t,e)};l(l.P,"Function",{bind:function bind(t){var n=d(this),e=M.call(arguments,1),r=function(){var o=e.concat(M.call(arguments));return this instanceof r?W(n,o.length,o):h(n,o,t)};return g(n.prototype)&&(r.prototype=n.prototype),r}});var z=O(function(){c&&M.call(c)});l(l.P+l.F*z,"Array",{slice:function(t,n){var e=w(this.length),r=f(this);if(n=void 0===n?e:n,"Array"==r)return M.call(this,t,n);for(var o=b(t,e),i=b(n,e),u=w(i-o),c=Array(u),a=0;u>a;a++)c[a]="String"==r?this.charAt(o+a):this[o+a];return c}}),l(l.P+l.F*(E!=Object),"Array",{join:function(){return F.apply(E(this),arguments)}}),l(l.S,"Array",{isArray:t(37)});var K=function(t){return function(n,e){d(n);var r=E(this),o=w(r.length),i=t?o-1:0,u=t?-1:1;if(arguments.length<2)for(;;){if(i in r){e=r[i],i+=u;break}if(i+=u,t?0>i:i>=o)throw TypeError("Reduce of empty array with no initial value")}for(;t?i>=0:o>i;i+=u)i in r&&(e=n(e,r[i],i,this));return e}},U=function(t){return function(n){return t(this,n,arguments[1])}};l(l.P,"Array",{forEach:o.each=o.each||U(p(0)),map:U(p(1)),filter:U(p(2)),some:U(p(3)),every:U(p(4)),reduce:K(!1),reduceRight:K(!0),indexOf:U(I),lastIndexOf:function(t,n){var e=x(this),r=w(e.length),o=r-1;for(arguments.length>1&&(o=Math.min(o,S(n))),0>o&&(o=w(r+o));o>=0;o--)if(o in e&&e[o]===t)return o;return-1}}),l(l.S,"Date",{now:function(){return+new Date}});var q=function(t){return t>9?t:"0"+t},J=new Date(-5e13-1),B=!(J.toISOString&&"0385-07-25T07:06:39.999Z"==J.toISOString()&&O(function(){new Date(NaN).toISOString()}));l(l.P+l.F*B,"Date",{toISOString:function toISOString(){if(!isFinite(this))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),e=t.getUTCMilliseconds(),r=0>n?"-":n>9999?"+":"";return r+("00000"+Math.abs(n)).slice(r?-6:-4)+"-"+q(t.getUTCMonth()+1)+"-"+q(t.getUTCDate())+"T"+q(t.getUTCHours())+":"+q(t.getUTCMinutes())+":"+q(t.getUTCSeconds())+"."+(e>99?e:"0"+q(e))+"Z"}})},{12:12,19:19,21:21,22:22,25:25,3:3,31:31,33:33,34:34,35:35,37:37,39:39,47:47,5:5,61:61,77:77,78:78,79:79,8:8,80:80,81:81,83:83,9:9}],87:[function(t,n,e){"use strict";var r=t(19);r(r.P,"Array",{copyWithin:t(6)}),t(4)("copyWithin")},{19:19,4:4,6:6}],88:[function(t,n,e){var r=t(19);r(r.P,"Array",{fill:t(7)}),t(4)("fill")},{19:19,4:4,7:7}],89:[function(t,n,e){"use strict";var r="findIndex",o=t(19),i=!0,u=t(9)(6);r in[]&&Array(1)[r](function(){i=!1}),o(o.P+o.F*i,"Array",{findIndex:function findIndex(t){return u(this,t,arguments.length>1?arguments[1]:void 0)}}),t(4)(r)},{19:19,4:4,9:9}],90:[function(t,n,e){"use strict";var r="find",o=t(19),i=!0,u=t(9)(5);r in[]&&Array(1)[r](function(){i=!1}),o(o.P+o.F*i,"Array",{find:function find(t){return u(this,t,arguments.length>1?arguments[1]:void 0)}}),t(4)(r)},{19:19,4:4,9:9}],91:[function(t,n,e){"use strict";var r=t(18),o=t(19),i=t(81),u=t(41),c=t(36),a=t(80),s=t(85);o(o.S+o.F*!t(44)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,e,o,f,l=i(t),h="function"==typeof this?this:Array,p=arguments,v=p.length,g=v>1?p[1]:void 0,y=void 0!==g,d=0,m=s(l);if(y&&(g=r(g,v>2?p[2]:void 0,2)),void 0==m||h==Array&&c(m))for(n=a(l.length),e=new h(n);n>d;d++)e[d]=y?g(l[d],d):l[d];else for(f=m.call(l),e=new h;!(o=f.next()).done;d++)e[d]=y?u(f,g,[o.value,d],!0):o.value;return e.length=d,e}})},{18:18,19:19,36:36,41:41,44:44,80:80,81:81,85:85}],92:[function(t,n,e){"use strict";var r=t(4),o=t(45),i=t(46),u=t(79);n.exports=t(43)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},{4:4,43:43,45:45,46:46,79:79}],93:[function(t,n,e){"use strict";var r=t(19);r(r.S+r.F*t(25)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments,e=n.length,r=new("function"==typeof this?this:Array)(e);e>t;)r[t]=n[t++];return r.length=e,r}})},{19:19,25:25}],94:[function(t,n,e){t(66)("Array")},{66:66}],95:[function(t,n,e){"use strict";var r=t(47),o=t(39),i=t(84)("hasInstance"),u=Function.prototype;i in u||r.setDesc(u,i,{value:function(t){if("function"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=r.getProto(t);)if(this.prototype===t)return!0;return!1}})},{39:39,47:47,84:84}],96:[function(t,n,e){var r=t(47).setDesc,o=t(61),i=t(31),u=Function.prototype,c=/^\s*function ([^ (]*)/,a="name";a in u||t(21)&&r(u,a,{configurable:!0,get:function(){var t=(""+this).match(c),n=t?t[1]:"";return i(this,a)||r(this,a,o(5,n)),n}})},{21:21,31:31,47:47,61:61}],97:[function(t,n,e){"use strict";var r=t(13);t(16)("Map",function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){var n=r.getEntry(this,t);return n&&n.v},set:function set(t,n){return r.def(this,0===t?0:t,n)}},r,!0)},{13:13,16:16}],98:[function(t,n,e){var r=t(19),o=t(51),i=Math.sqrt,u=Math.acosh;r(r.S+r.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:o(t-1+i(t-1)*i(t+1))}})},{19:19,51:51}],99:[function(t,n,e){function asinh(t){return isFinite(t=+t)&&0!=t?0>t?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var r=t(19);r(r.S,"Math",{asinh:asinh})},{19:19}],100:[function(t,n,e){var r=t(19);r(r.S,"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},{19:19}],101:[function(t,n,e){var r=t(19),o=t(52);r(r.S,"Math",{cbrt:function cbrt(t){return o(t=+t)*Math.pow(Math.abs(t),1/3)}})},{19:19,52:52}],102:[function(t,n,e){var r=t(19);r(r.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},{19:19}],103:[function(t,n,e){var r=t(19),o=Math.exp;r(r.S,"Math",{cosh:function cosh(t){return(o(t=+t)+o(-t))/2}})},{19:19}],104:[function(t,n,e){var r=t(19);r(r.S,"Math",{expm1:t(50)})},{19:19,50:50}],105:[function(t,n,e){var r=t(19),o=t(52),i=Math.pow,u=i(2,-52),c=i(2,-23),a=i(2,127)*(2-c),s=i(2,-126),f=function(t){return t+1/u-1/u};r(r.S,"Math",{fround:function fround(t){var n,e,r=Math.abs(t),i=o(t);return s>r?i*f(r/s/c)*s*c:(n=(1+c/u)*r,e=n-(n-r),e>a||e!=e?i*(1/0):i*e)}})},{19:19,52:52}],106:[function(t,n,e){var r=t(19),o=Math.abs;r(r.S,"Math",{hypot:function hypot(t,n){for(var e,r,i=0,u=0,c=arguments,a=c.length,s=0;a>u;)e=o(c[u++]),e>s?(r=s/e,i=i*r*r+1,s=e):e>0?(r=e/s,i+=r*r):i+=e;return s===1/0?1/0:s*Math.sqrt(i)}})},{19:19}],107:[function(t,n,e){var r=t(19),o=Math.imul;r(r.S+r.F*t(25)(function(){return-5!=o(4294967295,5)||2!=o.length}),"Math",{imul:function imul(t,n){var e=65535,r=+t,o=+n,i=e&r,u=e&o;return 0|i*u+((e&r>>>16)*u+i*(e&o>>>16)<<16>>>0)}})},{19:19,25:25}],108:[function(t,n,e){var r=t(19);r(r.S,"Math",{log10:function log10(t){return Math.log(t)/Math.LN10}})},{19:19}],109:[function(t,n,e){var r=t(19);r(r.S,"Math",{log1p:t(51)})},{19:19,51:51}],110:[function(t,n,e){var r=t(19);r(r.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},{19:19}],111:[function(t,n,e){var r=t(19);r(r.S,"Math",{sign:t(52)})},{19:19,52:52}],112:[function(t,n,e){var r=t(19),o=t(50),i=Math.exp;r(r.S+r.F*t(25)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(o(t)-o(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2)}})},{19:19,25:25,50:50}],113:[function(t,n,e){var r=t(19),o=t(50),i=Math.exp;r(r.S,"Math",{tanh:function tanh(t){var n=o(t=+t),e=o(-t);return n==1/0?1:e==1/0?-1:(n-e)/(i(t)+i(-t));
}})},{19:19,50:50}],114:[function(t,n,e){var r=t(19);r(r.S,"Math",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t)}})},{19:19}],115:[function(t,n,e){"use strict";var r=t(47),o=t(30),i=t(31),u=t(12),c=t(82),a=t(25),s=t(75).trim,f="Number",l=o[f],h=l,p=l.prototype,v=u(r.create(p))==f,g="trim"in String.prototype,y=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=g?n.trim():s(n,3);var e,r,o,i=n.charCodeAt(0);if(43===i||45===i){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var u,a=n.slice(2),f=0,l=a.length;l>f;f++)if(u=a.charCodeAt(f),48>u||u>o)return NaN;return parseInt(a,r)}}return+n};l(" 0o1")&&l("0b1")&&!l("+0x1")||(l=function Number(t){var n=arguments.length<1?0:t,e=this;return e instanceof l&&(v?a(function(){p.valueOf.call(e)}):u(e)!=f)?new h(y(n)):y(n)},r.each.call(t(21)?r.getNames(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),function(t){i(h,t)&&!i(l,t)&&r.setDesc(l,t,r.getDesc(h,t))}),l.prototype=p,p.constructor=l,t(62)(o,f,l))},{12:12,21:21,25:25,30:30,31:31,47:47,62:62,75:75,82:82}],116:[function(t,n,e){var r=t(19);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},{19:19}],117:[function(t,n,e){var r=t(19),o=t(30).isFinite;r(r.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&o(t)}})},{19:19,30:30}],118:[function(t,n,e){var r=t(19);r(r.S,"Number",{isInteger:t(38)})},{19:19,38:38}],119:[function(t,n,e){var r=t(19);r(r.S,"Number",{isNaN:function isNaN(t){return t!=t}})},{19:19}],120:[function(t,n,e){var r=t(19),o=t(38),i=Math.abs;r(r.S,"Number",{isSafeInteger:function isSafeInteger(t){return o(t)&&i(t)<=9007199254740991}})},{19:19,38:38}],121:[function(t,n,e){var r=t(19);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},{19:19}],122:[function(t,n,e){var r=t(19);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},{19:19}],123:[function(t,n,e){var r=t(19);r(r.S,"Number",{parseFloat:parseFloat})},{19:19}],124:[function(t,n,e){var r=t(19);r(r.S,"Number",{parseInt:parseInt})},{19:19}],125:[function(t,n,e){var r=t(19);r(r.S+r.F,"Object",{assign:t(55)})},{19:19,55:55}],126:[function(t,n,e){var r=t(39);t(56)("freeze",function(t){return function freeze(n){return t&&r(n)?t(n):n}})},{39:39,56:56}],127:[function(t,n,e){var r=t(79);t(56)("getOwnPropertyDescriptor",function(t){return function getOwnPropertyDescriptor(n,e){return t(r(n),e)}})},{56:56,79:79}],128:[function(t,n,e){t(56)("getOwnPropertyNames",function(){return t(29).get})},{29:29,56:56}],129:[function(t,n,e){var r=t(81);t(56)("getPrototypeOf",function(t){return function getPrototypeOf(n){return t(r(n))}})},{56:56,81:81}],130:[function(t,n,e){var r=t(39);t(56)("isExtensible",function(t){return function isExtensible(n){return r(n)?t?t(n):!0:!1}})},{39:39,56:56}],131:[function(t,n,e){var r=t(39);t(56)("isFrozen",function(t){return function isFrozen(n){return r(n)?t?t(n):!1:!0}})},{39:39,56:56}],132:[function(t,n,e){var r=t(39);t(56)("isSealed",function(t){return function isSealed(n){return r(n)?t?t(n):!1:!0}})},{39:39,56:56}],133:[function(t,n,e){var r=t(19);r(r.S,"Object",{is:t(64)})},{19:19,64:64}],134:[function(t,n,e){var r=t(81);t(56)("keys",function(t){return function keys(n){return t(r(n))}})},{56:56,81:81}],135:[function(t,n,e){var r=t(39);t(56)("preventExtensions",function(t){return function preventExtensions(n){return t&&r(n)?t(n):n}})},{39:39,56:56}],136:[function(t,n,e){var r=t(39);t(56)("seal",function(t){return function seal(n){return t&&r(n)?t(n):n}})},{39:39,56:56}],137:[function(t,n,e){var r=t(19);r(r.S,"Object",{setPrototypeOf:t(65).set})},{19:19,65:65}],138:[function(t,n,e){"use strict";var r=t(11),o={};o[t(84)("toStringTag")]="z",o+""!="[object z]"&&t(62)(Object.prototype,"toString",function toString(){return"[object "+r(this)+"]"},!0)},{11:11,62:62,84:84}],139:[function(t,n,e){"use strict";var r,o=t(47),i=t(49),u=t(30),c=t(18),a=t(11),s=t(19),f=t(39),l=t(5),h=t(3),p=t(70),v=t(28),g=t(65).set,y=t(64),d=t(84)("species"),m=t(69),x=t(83)("record"),S=t(53),b="Promise",w=u.process,E="process"==a(w),O=u[b],P=function(t){var n=new O(function(){});return t&&(n.constructor=Object),O.resolve(n)===n},_=function(){function P2(t){var n=new O(t);return g(n,P2.prototype),n}var n=!1;try{if(n=O&&O.resolve&&P(),g(P2,O),P2.prototype=o.create(O.prototype,{constructor:{value:P2}}),P2.resolve(5).then(function(){})instanceof P2||(n=!1),n&&t(21)){var e=!1;O.resolve(o.setDesc({},"then",{get:function(){e=!0}})),n=e}}catch(r){n=!1}return n}(),M=function(t){return f(t)&&(_?"Promise"==a(t):x in t)},F=function(t,n){return i&&t===O&&n===r?!0:y(t,n)},A=function(t){var n=l(t)[d];return void 0!=n?n:t},j=function(t){var n;return f(t)&&"function"==typeof(n=t.then)?n:!1},N=function(t,n){if(!t.n){t.n=!0;var e=t.c;S(function(){for(var r=t.v,o=1==t.s,i=0,c=function(n){var e,i,u=o?n.ok:n.fail;try{u?(o||(t.h=!0),e=u===!0?r:u(r),e===n.P?n.rej(TypeError("Promise-chain cycle")):(i=j(e))?i.call(e,n.res,n.rej):n.res(e)):n.rej(r)}catch(c){n.rej(c)}};e.length>i;)c(e[i++]);e.length=0,t.n=!1,n&&setTimeout(function(){var n,e,o=t.p;I(o)&&(E?w.emit("unhandledRejection",r,o):(n=u.onunhandledrejection)?n({promise:o,reason:r}):(e=u.console)&&e.error&&e.error("Unhandled promise rejection",r)),t.a=void 0},1)})}},I=function(t){var n,e=t[x],r=e.a||e.c,o=0;if(e.h)return!1;for(;r.length>o;)if(n=r[o++],n.fail||!I(n.P))return!1;return!0},k=function(t){var n=this;n.d||(n.d=!0,n=n.r||n,n.v=t,n.s=2,n.a=n.c.slice(),N(n,!0))},D=function(t){var n,e=this;if(!e.d){e.d=!0,e=e.r||e;try{(n=j(t))?S(function(){var r={r:e,d:!1};try{n.call(t,c(D,r,1),c(k,r,1))}catch(o){k.call(r,o)}}):(e.v=t,e.s=1,N(e,!1))}catch(r){k.call({r:e,d:!1},r)}}};_||(O=function Promise(t){h(t);var n={p:p(this,O,b),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};this[x]=n;try{t(c(D,n,1),c(k,n,1))}catch(e){k.call(n,e)}},t(54)(O.prototype,{then:function then(t,n){var e={ok:"function"==typeof t?t:!0,fail:"function"==typeof n?n:!1},r=e.P=new(m(this,O))(function(t,n){e.res=t,e.rej=n});h(e.res),h(e.rej);var o=this[x];return o.c.push(e),o.a&&o.a.push(e),o.s&&N(o,!1),r},"catch":function(t){return this.then(void 0,t)}})),s(s.G+s.W+s.F*!_,{Promise:O}),t(67)(O,b),t(66)(b),r=t(17)[b],s(s.S+s.F*!_,b,{reject:function reject(t){return new this(function(n,e){e(t)})}}),s(s.S+s.F*(!_||P(!0)),b,{resolve:function resolve(t){return M(t)&&F(t.constructor,this)?t:new this(function(n){n(t)})}}),s(s.S+s.F*!(_&&t(44)(function(t){O.all(t)["catch"](function(){})})),b,{all:function all(t){var n=A(this),e=[];return new n(function(r,i){v(t,!1,e.push,e);var u=e.length,c=Array(u);u?o.each.call(e,function(t,e){n.resolve(t).then(function(t){c[e]=t,--u||r(c)},i)}):r(c)})},race:function race(t){var n=A(this);return new n(function(e,r){v(t,!1,function(t){n.resolve(t).then(e,r)})})}})},{11:11,17:17,18:18,19:19,21:21,28:28,3:3,30:30,39:39,44:44,47:47,49:49,5:5,53:53,54:54,64:64,65:65,66:66,67:67,69:69,70:70,83:83,84:84}],140:[function(t,n,e){var r=t(19),o=Function.apply;r(r.S,"Reflect",{apply:function apply(t,n,e){return o.call(t,n,e)}})},{19:19}],141:[function(t,n,e){var r=t(47),o=t(19),i=t(3),u=t(5),c=t(39),a=Function.bind||t(17).Function.prototype.bind;o(o.S+o.F*t(25)(function(){function F(){}return!(Reflect.construct(function(){},[],F)instanceof F)}),"Reflect",{construct:function construct(t,n){i(t);var e=arguments.length<3?t:i(arguments[2]);if(t==e){if(void 0!=n)switch(u(n).length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var o=[null];return o.push.apply(o,n),new(a.apply(t,o))}var s=e.prototype,f=r.create(c(s)?s:Object.prototype),l=Function.apply.call(t,f,n);return c(l)?l:f}})},{17:17,19:19,25:25,3:3,39:39,47:47,5:5}],142:[function(t,n,e){var r=t(47),o=t(19),i=t(5);o(o.S+o.F*t(25)(function(){Reflect.defineProperty(r.setDesc({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,e){i(t);try{return r.setDesc(t,n,e),!0}catch(o){return!1}}})},{19:19,25:25,47:47,5:5}],143:[function(t,n,e){var r=t(19),o=t(47).getDesc,i=t(5);r(r.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var e=o(i(t),n);return e&&!e.configurable?!1:delete t[n]}})},{19:19,47:47,5:5}],144:[function(t,n,e){"use strict";var r=t(19),o=t(5),i=function(t){this._t=o(t),this._i=0;var n,e=this._k=[];for(n in t)e.push(n)};t(42)(i,"Object",function(){var t,n=this,e=n._k;do if(n._i>=e.length)return{value:void 0,done:!0};while(!((t=e[n._i++])in n._t));return{value:t,done:!1}}),r(r.S,"Reflect",{enumerate:function enumerate(t){return new i(t)}})},{19:19,42:42,5:5}],145:[function(t,n,e){var r=t(47),o=t(19),i=t(5);o(o.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return r.getDesc(i(t),n)}})},{19:19,47:47,5:5}],146:[function(t,n,e){var r=t(19),o=t(47).getProto,i=t(5);r(r.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return o(i(t))}})},{19:19,47:47,5:5}],147:[function(t,n,e){function get(t,n){var e,i,a=arguments.length<3?t:arguments[2];return c(t)===a?t[n]:(e=r.getDesc(t,n))?o(e,"value")?e.value:void 0!==e.get?e.get.call(a):void 0:u(i=r.getProto(t))?get(i,n,a):void 0}var r=t(47),o=t(31),i=t(19),u=t(39),c=t(5);i(i.S,"Reflect",{get:get})},{19:19,31:31,39:39,47:47,5:5}],148:[function(t,n,e){var r=t(19);r(r.S,"Reflect",{has:function has(t,n){return n in t}})},{19:19}],149:[function(t,n,e){var r=t(19),o=t(5),i=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function isExtensible(t){return o(t),i?i(t):!0}})},{19:19,5:5}],150:[function(t,n,e){var r=t(19);r(r.S,"Reflect",{ownKeys:t(58)})},{19:19,58:58}],151:[function(t,n,e){var r=t(19),o=t(5),i=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function preventExtensions(t){o(t);try{return i&&i(t),!0}catch(n){return!1}}})},{19:19,5:5}],152:[function(t,n,e){var r=t(19),o=t(65);o&&r(r.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){o.check(t,n);try{return o.set(t,n),!0}catch(e){return!1}}})},{19:19,65:65}],153:[function(t,n,e){function set(t,n,e){var i,s,f=arguments.length<4?t:arguments[3],l=r.getDesc(c(t),n);if(!l){if(a(s=r.getProto(t)))return set(s,n,e,f);l=u(0)}return o(l,"value")?l.writable!==!1&&a(f)?(i=r.getDesc(f,n)||u(0),i.value=e,r.setDesc(f,n,i),!0):!1:void 0===l.set?!1:(l.set.call(f,e),!0)}var r=t(47),o=t(31),i=t(19),u=t(61),c=t(5),a=t(39);i(i.S,"Reflect",{set:set})},{19:19,31:31,39:39,47:47,5:5,61:61}],154:[function(t,n,e){var r=t(47),o=t(30),i=t(40),u=t(27),c=o.RegExp,a=c,s=c.prototype,f=/a/g,l=/a/g,h=new c(f)!==f;!t(21)||h&&!t(25)(function(){return l[t(84)("match")]=!1,c(f)!=f||c(l)==l||"/a/i"!=c(f,"i")})||(c=function RegExp(t,n){var e=i(t),r=void 0===n;return this instanceof c||!e||t.constructor!==c||!r?h?new a(e&&!r?t.source:t,n):a((e=t instanceof c)?t.source:t,e&&r?u.call(t):n):t},r.each.call(r.getNames(a),function(t){t in c||r.setDesc(c,t,{configurable:!0,get:function(){return a[t]},set:function(n){a[t]=n}})}),s.constructor=c,c.prototype=s,t(62)(o,"RegExp",c)),t(66)("RegExp")},{21:21,25:25,27:27,30:30,40:40,47:47,62:62,66:66,84:84}],155:[function(t,n,e){var r=t(47);t(21)&&"g"!=/./g.flags&&r.setDesc(RegExp.prototype,"flags",{configurable:!0,get:t(27)})},{21:21,27:27,47:47}],156:[function(t,n,e){t(26)("match",1,function(t,n){return function match(e){"use strict";var r=t(this),o=void 0==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))}})},{26:26}],157:[function(t,n,e){t(26)("replace",2,function(t,n,e){return function replace(r,o){"use strict";var i=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,i,o):e.call(String(i),r,o)}})},{26:26}],158:[function(t,n,e){t(26)("search",1,function(t,n){return function search(e){"use strict";var r=t(this),o=void 0==e?void 0:e[n];return void 0!==o?o.call(e,r):new RegExp(e)[n](String(r))}})},{26:26}],159:[function(t,n,e){t(26)("split",2,function(t,n,e){return function split(r,o){"use strict";var i=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,i,o):e.call(String(i),r,o)}})},{26:26}],160:[function(t,n,e){"use strict";var r=t(13);t(16)("Set",function(t){return function Set(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return r.def(this,t=0===t?0:t,t)}},r)},{13:13,16:16}],161:[function(t,n,e){"use strict";var r=t(19),o=t(71)(!1);r(r.P,"String",{codePointAt:function codePointAt(t){return o(this,t)}})},{19:19,71:71}],162:[function(t,n,e){"use strict";var r=t(19),o=t(80),i=t(72),u="endsWith",c=""[u];r(r.P+r.F*t(24)(u),"String",{endsWith:function endsWith(t){var n=i(this,t,u),e=arguments,r=e.length>1?e[1]:void 0,a=o(n.length),s=void 0===r?a:Math.min(o(r),a),f=String(t);return c?c.call(n,f,s):n.slice(s-f.length,s)===f}})},{19:19,24:24,72:72,80:80}],163:[function(t,n,e){var r=t(19),o=t(77),i=String.fromCharCode,u=String.fromCodePoint;r(r.S+r.F*(!!u&&1!=u.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,e=[],r=arguments,u=r.length,c=0;u>c;){if(n=+r[c++],o(n,1114111)!==n)throw RangeError(n+" is not a valid code point");e.push(65536>n?i(n):i(((n-=65536)>>10)+55296,n%1024+56320))}return e.join("")}})},{19:19,77:77}],164:[function(t,n,e){"use strict";var r=t(19),o=t(72),i="includes";r(r.P+r.F*t(24)(i),"String",{includes:function includes(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},{19:19,24:24,72:72}],165:[function(t,n,e){"use strict";var r=t(71)(!0);t(43)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},{43:43,71:71}],166:[function(t,n,e){var r=t(19),o=t(79),i=t(80);r(r.S,"String",{raw:function raw(t){for(var n=o(t.raw),e=i(n.length),r=arguments,u=r.length,c=[],a=0;e>a;)c.push(String(n[a++])),u>a&&c.push(String(r[a]));return c.join("")}})},{19:19,79:79,80:80}],167:[function(t,n,e){var r=t(19);r(r.P,"String",{repeat:t(74)})},{19:19,74:74}],168:[function(t,n,e){"use strict";var r=t(19),o=t(80),i=t(72),u="startsWith",c=""[u];r(r.P+r.F*t(24)(u),"String",{startsWith:function startsWith(t){var n=i(this,t,u),e=arguments,r=o(Math.min(e.length>1?e[1]:void 0,n.length)),a=String(t);return c?c.call(n,a,r):n.slice(r,r+a.length)===a}})},{19:19,24:24,72:72,80:80}],169:[function(t,n,e){"use strict";t(75)("trim",function(t){return function trim(){return t(this,3)}})},{75:75}],170:[function(t,n,e){"use strict";var r=t(47),o=t(30),i=t(31),u=t(21),c=t(19),a=t(62),s=t(25),f=t(68),l=t(67),h=t(83),p=t(84),v=t(48),g=t(29),y=t(23),d=t(37),m=t(5),x=t(79),S=t(61),b=r.getDesc,w=r.setDesc,E=r.create,O=g.get,P=o.Symbol,_=o.JSON,M=_&&_.stringify,F=!1,A=p("_hidden"),j=r.isEnum,N=f("symbol-registry"),I=f("symbols"),k="function"==typeof P,D=Object.prototype,T=u&&s(function(){return 7!=E(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=b(D,n);r&&delete D[n],w(t,n,e),r&&t!==D&&w(D,n,r)}:w,L=function(t){var n=I[t]=E(P.prototype);return n._k=t,u&&F&&T(D,t,{configurable:!0,set:function(n){i(this,A)&&i(this[A],t)&&(this[A][t]=!1),T(this,t,S(1,n))}}),n},R=function(t){return"symbol"==typeof t},C=function defineProperty(t,n,e){return e&&i(I,n)?(e.enumerable?(i(t,A)&&t[A][n]&&(t[A][n]=!1),e=E(e,{enumerable:S(0,!1)})):(i(t,A)||w(t,A,S(1,{})),t[A][n]=!0),T(t,n,e)):w(t,n,e)},G=function defineProperties(t,n){m(t);for(var e,r=y(n=x(n)),o=0,i=r.length;i>o;)C(t,e=r[o++],n[e]);return t},W=function create(t,n){return void 0===n?E(t):G(E(t),n)},z=function propertyIsEnumerable(t){var n=j.call(this,t);return n||!i(this,t)||!i(I,t)||i(this,A)&&this[A][t]?n:!0},K=function getOwnPropertyDescriptor(t,n){var e=b(t=x(t),n);return!e||!i(I,n)||i(t,A)&&t[A][n]||(e.enumerable=!0),e},U=function getOwnPropertyNames(t){for(var n,e=O(x(t)),r=[],o=0;e.length>o;)i(I,n=e[o++])||n==A||r.push(n);return r},q=function getOwnPropertySymbols(t){for(var n,e=O(x(t)),r=[],o=0;e.length>o;)i(I,n=e[o++])&&r.push(I[n]);return r},J=function stringify(t){if(void 0!==t&&!R(t)){for(var n,e,r=[t],o=1,i=arguments;i.length>o;)r.push(i[o++]);return n=r[1],"function"==typeof n&&(e=n),(e||!d(n))&&(n=function(t,n){return e&&(n=e.call(this,t,n)),R(n)?void 0:n}),r[1]=n,M.apply(_,r)}},B=s(function(){var t=P();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))});k||(P=function Symbol(){if(R(this))throw TypeError("Symbol is not a constructor");return L(h(arguments.length>0?arguments[0]:void 0))},a(P.prototype,"toString",function toString(){return this._k}),R=function(t){return t instanceof P},r.create=W,r.isEnum=z,r.getDesc=K,r.setDesc=C,r.setDescs=G,r.getNames=g.get=U,r.getSymbols=q,u&&!t(49)&&a(D,"propertyIsEnumerable",z,!0));var V={"for":function(t){return i(N,t+="")?N[t]:N[t]=P(t)},keyFor:function keyFor(t){return v(N,t)},useSetter:function(){F=!0},useSimple:function(){F=!1}};r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var n=p(t);V[t]=k?n:L(n)}),F=!0,c(c.G+c.W,{Symbol:P}),c(c.S,"Symbol",V),c(c.S+c.F*!k,"Object",{create:W,defineProperty:C,defineProperties:G,getOwnPropertyDescriptor:K,getOwnPropertyNames:U,getOwnPropertySymbols:q}),_&&c(c.S+c.F*(!k||B),"JSON",{stringify:J}),l(P,"Symbol"),l(Math,"Math",!0),l(o.JSON,"JSON",!0)},{19:19,21:21,23:23,25:25,29:29,30:30,31:31,37:37,47:47,48:48,49:49,5:5,61:61,62:62,67:67,68:68,79:79,83:83,84:84}],171:[function(t,n,e){"use strict";var r=t(47),o=t(62),i=t(15),u=t(39),c=t(31),a=i.frozenStore,s=i.WEAK,f=Object.isExtensible||u,l={},h=t(16)("WeakMap",function(t){return function WeakMap(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){if(u(t)){if(!f(t))return a(this).get(t);if(c(t,s))return t[s][this._i]}},set:function set(t,n){return i.def(this,t,n)}},i,!0,!0);7!=(new h).set((Object.freeze||Object)(l),7).get(l)&&r.each.call(["delete","has","get","set"],function(t){var n=h.prototype,e=n[t];o(n,t,function(n,r){if(u(n)&&!f(n)){var o=a(this)[t](n,r);return"set"==t?this:o}return e.call(this,n,r)})})},{15:15,16:16,31:31,39:39,47:47,62:62}],172:[function(t,n,e){"use strict";var r=t(15);t(16)("WeakSet",function(t){return function WeakSet(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return r.def(this,t,!0)}},r,!1,!0)},{15:15,16:16}],173:[function(t,n,e){"use strict";var r=t(19),o=t(8)(!0);r(r.P,"Array",{includes:function includes(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),t(4)("includes")},{19:19,4:4,8:8}],174:[function(t,n,e){var r=t(19);r(r.P,"Map",{toJSON:t(14)("Map")})},{14:14,19:19}],175:[function(t,n,e){var r=t(19),o=t(57)(!0);r(r.S,"Object",{entries:function entries(t){return o(t)}})},{19:19,57:57}],176:[function(t,n,e){var r=t(47),o=t(19),i=t(58),u=t(79),c=t(61);o(o.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,e,o=u(t),a=r.setDesc,s=r.getDesc,f=i(o),l={},h=0;f.length>h;)e=s(o,n=f[h++]),n in l?a(l,n,c(0,e)):l[n]=e;return l}})},{19:19,47:47,58:58,61:61,79:79}],177:[function(t,n,e){var r=t(19),o=t(57)(!1);r(r.S,"Object",{values:function values(t){return o(t)}})},{19:19,57:57}],178:[function(t,n,e){var r=t(19),o=t(63)(/[\\^$*+?.()|[\]{}]/g,"\\$&");r(r.S,"RegExp",{escape:function escape(t){return o(t)}})},{19:19,63:63}],179:[function(t,n,e){var r=t(19);r(r.P,"Set",{toJSON:t(14)("Set")})},{14:14,19:19}],180:[function(t,n,e){"use strict";var r=t(19),o=t(71)(!0);r(r.P,"String",{at:function at(t){return o(this,t)}})},{19:19,71:71}],181:[function(t,n,e){"use strict";var r=t(19),o=t(73);r(r.P,"String",{padLeft:function padLeft(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},{19:19,73:73}],182:[function(t,n,e){"use strict";var r=t(19),o=t(73);r(r.P,"String",{padRight:function padRight(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},{19:19,73:73}],183:[function(t,n,e){"use strict";t(75)("trimLeft",function(t){return function trimLeft(){return t(this,1)}})},{75:75}],184:[function(t,n,e){"use strict";t(75)("trimRight",function(t){return function trimRight(){return t(this,2)}})},{75:75}],185:[function(t,n,e){var r=t(47),o=t(19),i=t(18),u=t(17).Array||Array,c={},a=function(t,n){r.each.call(t.split(","),function(t){void 0==n&&t in u?c[t]=u[t]:t in[]&&(c[t]=i(Function.call,[][t],n))})};a("pop,reverse,shift,keys,values,entries",1),a("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),a("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",c)},{17:17,18:18,19:19,47:47}],186:[function(t,n,e){t(92);var r=t(30),o=t(32),i=t(46),u=t(84)("iterator"),c=r.NodeList,a=r.HTMLCollection,s=c&&c.prototype,f=a&&a.prototype,l=i.NodeList=i.HTMLCollection=i.Array;!c||u in s||o(s,u,l),!a||u in f||o(f,u,l)},{30:30,32:32,46:46,84:84,92:92}],187:[function(t,n,e){var r=t(19),o=t(76);r(r.G+r.B,{setImmediate:o.set,clearImmediate:o.clear})},{19:19,76:76}],188:[function(t,n,e){var r=t(30),o=t(19),i=t(34),u=t(59),c=r.navigator,a=!!c&&/MSIE .\./.test(c.userAgent),s=function(t){return a?function(n,e){return t(i(u,[].slice.call(arguments,2),"function"==typeof n?n:Function(n)),e)}:t};o(o.G+o.B+o.F*a,{setTimeout:s(r.setTimeout),setInterval:s(r.setInterval)})},{19:19,30:30,34:34,59:59}],189:[function(t,n,e){t(86),t(170),t(125),t(133),t(137),t(138),t(126),t(136),t(135),t(131),t(132),t(130),t(127),t(129),t(134),t(128),t(96),t(95),t(115),t(116),t(117),t(118),t(119),t(120),t(121),t(122),t(123),t(124),t(98),t(99),t(100),t(101),t(102),t(103),t(104),t(105),t(106),t(107),t(108),t(109),t(110),t(111),t(112),t(113),t(114),t(163),t(166),t(169),t(165),t(161),t(162),t(164),t(167),t(168),t(91),t(93),t(92),t(94),t(87),t(88),t(90),t(89),t(154),t(155),t(156),t(157),t(158),t(159),t(139),t(97),t(160),t(171),t(172),t(140),t(141),t(142),t(143),t(144),t(147),t(145),t(146),t(148),t(149),t(150),t(151),t(153),t(152),t(173),t(180),t(181),t(182),t(183),t(184),t(178),t(176),t(177),t(175),t(174),t(179),t(185),t(188),t(187),t(186),n.exports=t(17)},{100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:126,127:127,128:128,129:129,130:130,131:131,132:132,133:133,134:134,135:135,136:136,137:137,138:138,139:139,140:140,141:141,142:142,143:143,144:144,145:145,146:146,147:147,148:148,149:149,150:150,151:151,152:152,153:153,154:154,155:155,156:156,157:157,158:158,159:159,160:160,161:161,162:162,163:163,164:164,165:165,166:166,167:167,168:168,169:169,17:17,170:170,171:171,172:172,173:173,174:174,175:175,176:176,177:177,178:178,179:179,180:180,181:181,182:182,183:183,184:184,185:185,186:186,187:187,188:188,86:86,87:87,88:88,89:89,90:90,91:91,92:92,93:93,94:94,95:95,96:96,97:97,98:98,99:99}],190:[function(t,n,e){(function(t){!function(t){"use strict";function wrap(t,n,e,r){var o=Object.create((n||Generator).prototype),i=new Context(r||[]);return o._invoke=makeInvokeMethod(t,e,i),o}function tryCatch(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function AwaitArgument(t){this.arg=t}function AsyncIterator(t){function invoke(n,o){var i=t[n](o),u=i.value;return u instanceof AwaitArgument?Promise.resolve(u.arg).then(e,r):Promise.resolve(u).then(function(t){return i.value=t,i})}function enqueue(t,e){function callInvokeWithMethodAndArg(){return invoke(t,e)}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):new Promise(function(t){t(callInvokeWithMethodAndArg())})}"object"==typeof process&&process.domain&&(invoke=process.domain.bind(invoke));var n,e=invoke.bind(t,"next"),r=invoke.bind(t,"throw");invoke.bind(t,"return");this._invoke=enqueue}function makeInvokeMethod(t,n,r){var o=c;return function invoke(i,u){if(o===s)throw new Error("Generator is already running");if(o===f){if("throw"===i)throw u;return doneResult()}for(;;){var h=r.delegate;if(h){if("return"===i||"throw"===i&&h.iterator[i]===e){r.delegate=null;var p=h.iterator["return"];if(p){var v=tryCatch(p,h.iterator,u);if("throw"===v.type){i="throw",u=v.arg;continue}}if("return"===i)continue}var v=tryCatch(h.iterator[i],h.iterator,u);if("throw"===v.type){r.delegate=null,i="throw",u=v.arg;continue}i="next",u=e;var g=v.arg;if(!g.done)return o=a,g;r[h.resultName]=g.value,r.next=h.nextLoc,r.delegate=null}if("next"===i)r._sent=u,o===a?r.sent=u:r.sent=e;else if("throw"===i){if(o===c)throw o=f,u;r.dispatchException(u)&&(i="next",u=e)}else"return"===i&&r.abrupt("return",u);o=s;var v=tryCatch(t,n,r);if("normal"===v.type){o=r.done?f:a;var g={value:v.arg,done:r.done};if(v.arg!==l)return g;r.delegate&&"next"===i&&(u=e)}else"throw"===v.type&&(o=f,i="throw",u=v.arg)}}}function pushTryEntry(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,u=function next(){for(;++i<t.length;)if(r.call(t,i))return next.value=t[i],next.done=!1,next;return next.value=e,next.done=!0,next};return u.next=u}}return{next:doneResult}}function doneResult(){return{value:e,done:!0}}var e,r=Object.prototype.hasOwnProperty,o="function"==typeof Symbol&&Symbol.iterator||"@@iterator",i="object"==typeof n,u=t.regeneratorRuntime;if(u)return void(i&&(n.exports=u));u=t.regeneratorRuntime=i?n.exports:{},u.wrap=wrap;var c="suspendedStart",a="suspendedYield",s="executing",f="completed",l={},h=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=h.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunction.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return n?n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name):!1},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):t.__proto__=GeneratorFunctionPrototype,t.prototype=Object.create(h),t},u.awrap=function(t){return new AwaitArgument(t)},defineIteratorMethods(AsyncIterator.prototype),u.async=function(t,n,e,r){var o=new AsyncIterator(wrap(t,n,e,r));return u.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},defineIteratorMethods(h),h[o]=function(){return this},h.toString=function(){return"[object Generator]"},u.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function next(){for(;n.length;){var e=n.pop();if(e in t)return next.value=e,next.done=!1,next}return next.done=!0,next}},u.values=values,Context.prototype={constructor:Context,reset:function(t){if(this.prev=0,this.next=0,this.sent=e,this.done=!1,this.delegate=null,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function handle(e,r){return i.type="throw",i.arg=t,n.next=e,!!r}if(this.done)throw t;for(var n=this,e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?this.next=i.finallyLoc:this.complete(u),l},complete:function(t,n){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&n&&(this.next=n)},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),resetTryEntry(e),l}},"catch":function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;resetTryEntry(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:values(t),resultName:n,nextLoc:e},l}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
/* Including packs: load */
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

if ("load" in self) {
	console.warn("self.load already exists! It will be clobbered. Careful.");
}

self.load = function (self) {
	/** This namespace provides the functions required to import files and resolve dependencies.
  * 
  * JavaScript files imported by this system consist of adding them to the page's head tag, one after the other.
  * Before a new file is added to the head, the old one must have been finished downloading,
  *  and call `{@link load.provide}` with it's namespace name.
  * 
  * A package name may contain as the first character a ">".
  *  This indicates that it should be downloaded AFTER the current package.
  *  This should be used to fix circular dependancies by marking the one that should be ran first with this.
  * 
  * A dependency may start with the character "@". If so, then the dependency will be interpreted as the URL of a
  *  remote resource.
  * 
  * Dependancy files are used by this system, and are typically generated by `tools/generateDeps.py`. They are JSON
  *  files containing an object with the following keys (older versions used an array, however):
  * 
  * - `version` (required): The version of the dep file. Highest currently is 1.
  * - `packages`: An array of all the packages the dependancy file describes, in the form `[file, [provided packages]
  *  , [packages this is dependant on], file size in bytes]`.
  * - `dependencies`: An array of all the dependencies of this dependency file. These will be downloaded before the
  *  list is considered ready.
  */
	var load = {};

	/** Contains all the dependancy information for the files.
  * 
  * Each key is an import name, and the value is an object with the following properties:
  *  file: Filename that provides the file 
  *  state: A state value, as shown below
  *  deps: An array of all the dependancies of the namespace
  * 	size: The size of the file
  *  obj: The type dependant thing that is being provided
  *  type: The type of the package, see below
  *  evalOnImport: For script packages only, run as soon as imported
  * 
  * Possible values for the state are either 0 (not imported), 
  *  1 (currently in the proccess of importing) or 2 (successfully imported and ran).
  * @type object
  * @private
  * @since 0.0.12-alpha
  */
	var _packs = {};

	var STATE_NONE = 0;
	var STATE_SEEN = 1;
	var STATE_IMPORTING = 2;
	var STATE_IMPORTED = 3;
	var STATE_RUNNING = 4;
	var STATE_RAN = 5;

	/** A package of this type is executable code
  * 
  * It is in a file which contains a call to "load.provide" with a package name and function. The function will be
  * called when the package is required (not when it is provided), and the return value of that function will be the
  * package's object.
  * 
  * The package's object will be the function itself before it is evaluated. Whether or not it is the function is
  *  given by the state; if it is imported, it will be the function, if it is ran, it will be the object.
  */
	var TYPE_PACK = 0;
	/** A package of this type is a string
  * 
  * It is in a file, which is downloaded via AJAX. The package object is a string with the contents of this file.
  */
	var TYPE_RES = 1;
	/** External resource file
  * 
  * That is, a library file that is not managed using the ``load.js`` system. It will be downloaded when required,
  *  and as soon as the script is executed (via the ``load`` event) it will be marked as provided, and start
  *  downloading anything that depends on it.
  */
	var TYPE_EXT = 2;

	var USE_THREADING = false;

	/** The functions that will be called after the given package is evaluated.
  * @type object
  * @private
  * @since 0.0.21-alpha
  */
	var _readies = {};

	/** The functions that will be called after the given package is downoladed.
  * @type object
  * @private
  * @since 0.0.21-alpha
  */
	var _onImport = {};

	var _currentEval = null;

	/** An object containing the files that can be imported. Key is the file path, first value is an array of the
  *  packages it provides, second is an array of packages it depends on, and third is a boolean saying whether the
  *  file has been added to the document head yet.
  * @type object
  * @private
  * @since 0.0.21-alpha
  */
	var _files = {};

	/** The set of all package names that need to be imported. This is all the packages that have not been imported, but
  *  have to be imported to satisfy a package that has been imported by `{@link load.import}`.
  * @type array
  * @private
  * @since 0.0.21-alpha
  */
	var _importSet = [];

	/** All the dependency files that have been imported. Key is filename, value is data.
  * @type object
  * @private
  * @since 0.0.21-alpha
  */
	var _depFiles = {};

	/** An array of all uncaught exceptions that have happened.
  * @type boolean
  * @private
  * @since 0.0.21-alpha
  */
	var _uncaughtErrors = [];

	/** If true, all messages will be supressed
  * @type boolean
  * @private
  * @default false
  */
	var _noisy = false;

	/** Helper function for network requests
  * 
  * @param {string} url The url to get
  * @param {string="json"} type The responseType value
  * @return {Promise(*, *)} A promise that resolves to the result of that XHR request.
  */
	var _xhrGet = function _xhrGet(url, type) {
		return new Promise(function (fulfill, reject) {
			var xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status > 100 && xhr.status < 400) {
					fulfill(xhr.response);
				} else if (xhr.readyState == 4) {
					reject(xhr);
				}
			};

			xhr.open("GET", url, true);
			xhr.responseType = type ? type : "json";
			xhr.send();
		});
	};

	/** Helper function for firing the various listener things
  * 
  * Basically, given an object, key and argument, calls all the functions in the array specified by the key (if it
  *  exists) with the argument. It then sets that array to empty.
  * 
  * @param {object} listener The object with the listeners in it.
  * @param {string} name The property of that object to call the listeners for.
  * @param {*} arg The argument to call them with.
  */
	var _fireListeners = function _fireListeners(listener, name, arg) {
		if (name in listener) {
			for (var i = 0; i < listener[name].length; i++) {
				listener[name][i](_packs[name].obj);
			}

			listener[name] = [];
		}
	};

	/** Prints the message to console.log in gray
  * 
  * @param {string} message The message to log
  */
	var _log = function _log(message) {
		if (!_noisy) console.log("%c" + message, "color:#999999");
	};

	// ----
	// Multithreading
	// ----

	// Set up multithreading
	load.worker = !("document" in self) && !("window" in self);

	if (load.worker) {
		// A worker

		self.onmessage = function (e) {
			if (e.data[0] == "_load_packss") {
				// Add package information
				load.addDependency.apply(load, e.data[1]);
			} else {
				load.import(e.data[1]).then(function (pack) {
					var output = pack(e.data[2]);
					self.postMessage([e.data[0], output[0]], output[1]);
				});
			}
		};
	} else {
		// Not a worker

		/** An array of work orders currently waiting to be processed.
   * 
   * New ones are added to the end, and old ones are sliced from the front. Each entry is an `[id, worker package
   *  name, order object, transfer array]` array.
   * 
   * @type array
   * @private
   * @since 0.0.21-alpha
   */
		var _workOrders = [];

		/** The array of workers.
   * @type array
   * @private
   * @since 0.0.21-alpha
   */
		var _workers = [];

		/** A map from workers to a boolean indicating that the worker is processing an order.
   * @type Map<Worker, boolean>
   * @private
   */
		var _workerStates = new Map();

		/** A counter, it will be increased every time a work order is produced, and is used as the id.
   * @type integer
   * @private
   */
		var _workCounter = 0;

		/** A map from work ids to their promise fulfill functions.
   * @type Map<integer, function(*)>
   * @private
   */
		var _workPromises = new Map();

		// Create workers
		if (USE_THREADING) {
			var threads = Math.max(navigator.hardwareConcurrency / 2, 1);
			for (var i = threads; i > 0; i--) {
				var w = new Worker(document.currentScript.src);
				_workers.push(w);
				_workerStates.set(w, false);

				w.onmessage = function (e) {
					_workerStates.set(e.target, false);

					var f = _workPromises.get(e.data[0]);
					_workPromises.delete(e.data[0]);
					f(e.data[1]);
				};
			}

			// Check for work
			setInterval(function () {
				if (_workOrders.length) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = _workerStates.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var worker = _step.value;

							if (worker[1]) {
								continue;
							}

							var task = _workOrders.splice(0, 1)[0];

							worker[0].postMessage(task.slice(0, 3), task[3]);
							_workerStates.set(worker[0], true);

							if (!_workOrders.length) return;
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
			}, 10);
		}
	}

	/** Submits a work order which will run on the next worker that becomes available.
  * 
  * The worker is the name of a package; this package must return a function which takes the "order" as input, and 
  *  returns the output in the form of a [object, properties to transfer] pair. This function will be run on a web
  *  worker and will be separate to the main page.
  * 
  * If `submitWorkOrder` is called from a worker, it just does it synchronously, rather than deferring it to another
  *  thread.
  * 
  * @param {string} worker The name of the worker package to do the work.
  * @param {*} order The data to send to this worker package's function.
  * @param {?array} copy An optional array of objects to transfer, rather than copy.
  * @return {Promise(*)} A promise that resolves to the output of the work order.
  * @since 0.0.21-alpha
  */
	load.submitWorkOrder = function (worker, order, transfer) {
		if (load.worker) {
			return new Promise(function (f, r) {
				load.import(worker).then(function (pack) {
					var data = pack(order);
					f(data[0]);
				});
			});
		} else {
			return new Promise(function (f, r) {
				_workOrders.push([_workCounter++, worker, order, transfer]);
				_workPromises.set(_workCounter - 1, f);
			});
		}
	};

	// ----
	// Providing Packages
	// ----

	/** Marks that the namespace `name` has been provided, and associates a given object with it.
  *   This tells the engine to download the next file in the list,
  *   and it also creates the namespace object if it doesn't already exist.
  * 
  * As a convienience, this will seal the provided package and it's prototype (if it exists) unless the value
  *  "noSeal" is true in the options. Also, if there is an option "alsoSeal", it will be treated as an array of
  *  names of package properties to seal as well.
  * 
  * @param {string} name The namespace to provide.
  * @param {?*} pack The object to return when this package is required by other packages.
  * @param {?object} options Any additional options for the package.
  * @since 0.0.12-alpha
  */
	load.provide = function (name, pack, options) {
		_log("Provided: " + name);

		if (!options) options = {};

		//Set object and imported
		if (name in _packs) {
			_packs[name].obj = [pack, options];
			if (_packs[name].state == STATE_IMPORTING) {
				_packs[name].state = STATE_IMPORTED;
			} else {
				_packs[name].state = STATE_SEEN;
			}
		} else {
			_packs[name] = { file: "about:blank", state: STATE_SEEN, deps: [], size: 0, obj: [pack, options], type: TYPE_PACK };
		}

		if (_packs[name].state == STATE_SEEN) return;

		//Fire all the onImport handlers
		_fireListeners(_onImport, name, true);

		// Evaluate if we need to
		if (_packs[name].evalOnImport) {
			load.evaluate(name);
		}

		// And try to import more if possible
		_tryImport();
	};

	load.provideResource = function (name, data) {
		_log("Provided resource: " + name);

		//Set object and imported
		if (name in _packs) {
			_packs[name].obj = data;
			_packs[name].state = STATE_RAN;
		} else {
			_packs[name] = { file: "about:blank", state: STATE_RAN, deps: [], size: 0, obj: data, type: TYPE_RES };
		}

		//Fire all the onImport handlers
		_fireListeners(_onImport, name, true);

		load.evaluate(name);

		// And try to import more if possible
		_tryImport();
	};

	load.provideExternal = function (name, script) {
		_log("Provided external library: " + name);

		//Set object and imported
		if (name in _packs) {
			_packs[name].obj = script;
			if (_packs[name].state == STATE_IMPORTING) {
				_packs[name].state = STATE_IMPORTED;
			} else {
				_packs[name].state = STATE_SEEN;
			}
		} else {
			_packs[name] = { file: "about:blank", state: STATE_SEEN, deps: [], size: 0, obj: script, type: TYPE_EXT };
		}

		//Fire all the onImport handlers
		_fireListeners(_onImport, name, true);

		load.evaluate(name);

		// And try to import more if possible
		_tryImport();
	};

	// ----
	// Requiring Packages
	// ----

	/** Marks the current file as requiring the specified namespace as a dependency, 
  *  used for generating dependancy information.
  * 
  * If there is no garuntee that the package is imported yet either because it starts with ">" or is a suggestion, an
  *  onReady function should be provided, an example pattern to use is
  *  `require("project.myPackage", function(p) {myPackage = p});`.
  * 
  * @param {string} name The namespace to add as a dependency.
  * @param {?function(*)} onReady If the package isn't imported yet this will be called with the package when it is.
  * @return {*} An object that is provided by that namespace.
  * @since 0.0.15-alpha
  */
	load.require = function (name, onReady) {
		var defer = name.charAt(0) == ">";
		if (name.charAt(0) == ">") name = name.substring(1);

		if (onReady) {
			if (name in _packs && _packs[name].state >= STATE_RAN) {
				onReady(load.require(name));
			} else {
				if (!(name in _readies)) _readies[name] = [];
				_readies[name].push(onReady);
			}
		}

		if (name in _packs && !defer) {
			return load.evaluate(name);
		} else if (name in _packs) {
			_packs[name].evalOnImport = true;
		}
	};

	/** Marks the current file as requiring the specified resource as a dependency.
  * 
  * @param {string} name The path to the file to add.
  */
	load.requireResource = function (name) {
		return load.require(name);
	};

	/** Marks the current file as requiring the specified external script as a dependency.
  * 
  * @param {string} name The package name for this library.
  * @param {string} name The path to the library to add.
  * @param {?array<string>} deps An array of dependencies of this library.
  */
	load.requireExternal = function (name, path, deps) {
		return load.require(name);
	};

	/** Identical to `{@link load.require}` in operation, but the package won't be downloaded automatically.
  * 
  * @param {string} name The namespace to add as a dependency.
  * @param {?function(*)} onReady If the package isn't imported yet (via it beginning with ">" for example), this
  *  will be called with the package when it is.
  * @return {*} An object that is provided by that namespace.
  * @since 0.0.21-alpha
  */
	load.suggest = load.require;

	// ----
	// Running package Contents
	// ----

	/** For code packages, this actually runs the code contained in their function, as if they were required by another
  * package.
  * 
  * If it is already evaluated, it is not evaluated again.
  * 
  * @param {string} pack The package name.
  * @return {*} The package's value.
  */
	load.evaluate = function (name) {
		if (_packs[name].state == STATE_RUNNING) return;

		if (_packs[name].state == STATE_IMPORTED && _packs[name].type == TYPE_PACK) {
			var _oldCur = _currentEval;
			_currentEval = name;
			_packs[name].state = STATE_RUNNING;

			var funct = _packs[name].obj[0];
			var options = _packs[name].obj[1];
			var pack = _packs[name].obj = funct(self);

			//Seal objects
			if (pack && (!("noSeal" in options) || !options.noSeal)) {
				Object.seal(pack);
				if ((typeof pack === "undefined" ? "undefined" : _typeof(pack)) == "object" && "prototype" in pack) {
					Object.seal(pack.prototype);
				}

				if ("alsoSeal" in options) {
					options.alsoSeal.forEach(function (v) {
						Object.seal(pack[v]);
						if ("prototype" in pack[v]) Object.seal(pack[v].prototype);
					});
				}
			}

			// Cleanup
			_packs[name].state = STATE_RAN;
			_currentEval = _oldCur;
		}

		//Fire all the functions
		_fireListeners(_readies, name, _packs[name].obj);

		return _packs[name].obj;
	};

	// ----
	// Importing Packages
	// ----

	/** Imports a package and returns it.
  * 
  * The package must have been previously registered using `addDependency` or `loadDeps`.
  * 
  * The namespace will NOT be immediately available after this function call unless it has already been imported
  *  (in which case the call does not import anything else).
  * @param {string} name The package to import, as a string name.
  * @return {promise(*)} A promise that fulfills to true when the package is imported
  * @since 0.0.15-alpha
  */
	load.import = function (name) {
		return new Promise(function (fulfill, reject) {
			if (!load.isImported(name)) {
				var oldname = name;
				if (name.charAt(0) == ">") name = name.substring(1);

				if (!(name in _onImport)) _onImport[name] = [];
				_onImport[name].push(fulfill);

				_addToImportSet(oldname);
				_tryImport();
			} else {
				if (name.charAt(0) == ">") name = name.substring(1);

				return fulfill(true);
			}
		});
	};

	/** Given a package, if it has not been imported, it is added to `{@link load._importSet}` and this function is
  *  called on all its dependancies.
  * 
  * @param {string} pack The package to add to the import set.
  * @private
  * @since 0.0.21-alpha
  */
	var _addToImportSet = function _addToImportSet(pack) {
		if (_importSet.indexOf(pack) !== -1) return;
		if (!(pack in _packs)) {
			throw new load.DependencyError(pack + " required but not found.");
			return;
		}
		if (_packs[pack].state >= STATE_IMPORTING) return;

		_importSet.push(pack);
		var p = _packs[pack];

		for (var i = 0; i < p.deps.length; i++) {
			if (p.deps[i].charAt(0) == ">") {
				_addToImportSet(p.deps[i].substring(1));
			} else {
				_addToImportSet(p.deps[i]);
			}
		}
	};

	/** Looks through the import set, sees if any can be imported (have no unsatisfied dependancies), generates the
  *  batch set, then calls `{@link load._doImportFile}` to import them.
  * @param {?boolean} trace If true, then more information is given.
  * @private
  * @since 0.0.21-alpha
  */
	var _tryImport = function _tryImport(trace) {
		if (!_importSet.length) {
			return;
		}

		var _packagesToImport = [];

		//Generate the batch set
		for (var i = 0; i < _importSet.length; i++) {
			var now = _packs[_importSet[i]];
			var nowName = _importSet[i];

			var okay = true;
			for (var d = 0; d < now.deps.length; d++) {
				if (now.deps[d].charAt(0) == ">") {
					//Okay
				} else if (!(now.deps[d] in _packs)) {
						console.warn(now.file + " depends on " + now.deps[d] + ", which is not available.");
						okay = false;
						break;
					} else if (_packs[now.deps[d]].state < STATE_IMPORTED) {
						// Check if they are from the same file
						if (_packs[now.deps[d]].file != now.file) {
							okay = false;
							if (trace) _log(nowName + " (" + now.file + ")" + " depends on " + now.deps[d] + " (" + _packs[now.deps[d]].file + ")");
							break;
						}
					}
			}

			if (okay) {
				if (now.state <= STATE_SEEN) _packagesToImport.push(_importSet[i]);
				_importSet.splice(i, 1);
				i--;
			}
		}

		//And then import them all
		if (_packagesToImport.length) _log("Importing: " + _packagesToImport.join(", "));

		for (var i = _packagesToImport.length - 1; i >= 0; i--) {
			_doImportFile(_packs[_packagesToImport[i]].file, _packs[_packagesToImport[i]].type, _packagesToImport[i]);
		}

		// Check for problems
		// This can trigger while something is being downloaded, and other things are running
		/*if(!_packagesToImport.length && _importSet.length && !trace) {
  	console.log("Dependency problem!");
  	console.log("This means you likely have a dependency loop somewhere.");
  	_tryImport(true);
  }*/
	};

	/** Adds the file to the HTML documents head in a script tag, actually importing the file.
  * @param {string} file The file to add. If it starts with "@" that character is stripped.
  * @param {int} type The type of the file; is it a resource (TYPE_RES) or package (TYPE_PACK).
  * @param {string} name The name of the package.
  * @private
  * @since 0.0.21-alpha
  */
	var _doImportFile = function _doImportFile(file, type, pack) {
		var f = _files[file];

		switch (type) {
			case TYPE_PACK:
				if (_packs[pack].state == STATE_SEEN) {
					_packs[pack].state = STATE_IMPORTING;

					load.provide(pack, _packs[pack].obj[0], _packs[pack].obj[1]);

					break;
				}

				if (!(file in _files)) {
					_files[file] = [[], [], false];
				}

				if (f[2]) return;
				f[2] = true;

				for (var i = 0; i < f[0].length; i++) {
					_packs[f[0][i]].state = STATE_IMPORTING;
				}

				if (!("document" in self) && !("window" in self)) {
					importScripts(file);
				} else {
					var js = document.createElement("script");
					js.src = file;
					js.async = true;
					js.addEventListener("error", function (e) {
						throw new load.ImportError(file + " failed to import.");
					});
					document.head.appendChild(js);
				}
				break;

			case TYPE_RES:
				for (var i = 0; i < f[0].length; i++) {
					_packs[f[0][i]].state = STATE_IMPORTING;
				}

				_xhrGet(file, "text").then(function (content) {
					load.provideResource(pack, content);

					_tryImport();
				}, function () {
					console.error("Error getting resource " + file + ", " + xhr.statusText);
				});
				break;

			case TYPE_EXT:
				if (_packs[pack].state == STATE_SEEN) {
					_packs[pack].state = STATE_IMPORTING;

					var js = document.createElement("script");
					js.innerHTML = _packs[pack].obj;
					document.head.appendChild(js);

					load.provideExternal(pack);

					break;
				}

				if (f[2]) return;
				f[2] = true;

				for (var i = 0; i < f[0].length; i++) {
					_packs[f[0][i]].state = STATE_IMPORTING;
				}

				if (!("document" in self) && !("window" in self)) {
					importScripts(file);
				} else {
					var js = document.createElement("script");
					js.src = file;
					js.async = true;
					js.addEventListener("error", function (e) {
						throw new load.ImportError(file + " failed to import.");
					});
					js.addEventListener("load", function (e) {
						load.provideExternal(pack);
					});
					document.head.appendChild(js);
				}
				break;

			default:
				throw new load.ImportError("Package in " + file + " is of invalid type " + type);
		}
	};

	/** Stops all currently importing packages, but will not interrupt any currently running files.
  * @since 0.0.20-alpha
  */
	load.abort = function () {
		_importSet = [];
	};

	/** Checks if the specified package is imported.
  * @param {string} name The package name to check.
  * @return {boolean} Whether the package is imported.
  * @since 0.0.20-alpha
  */
	load.isImported = function (name) {
		if (name in _packs && _packs[name].state >= STATE_IMPORTED) {
			return true;
		}

		return false;
	};

	// ----
	// Working with dependency files
	// ----

	/** Adds a dependency.
  * 
  *  This tells the engine the file in which the namespaces are provided,
  *  and what other files must be imported before it.
  * 
  * @param {string} file The file name which the namespaces reside.
  * @param {array} provided An array of namespace names which are provided by the file.
  * @param {array} required An array of namespace names that are required for this file to run.
  *  These will be downloaded before this one if any provided namespaces are requested.
  * @param {integer=0} size The size of the file, in bytes. Optional.
  * @since 0.0.12-alpha
  */
	load.addDependency = function (file, provided, required, size, type) {
		if (!size) size = 0;

		for (var i = provided.length - 1; i >= 0; i--) {
			if (!_packs[provided[i]] || _packs[provided[i]].state <= STATE_NONE && (!(_packs[provided[i]].file in _files) || provided.length > _files[_packs[provided[i]].file][0].length)) {
				_packs[provided[i]] = { file: file, state: STATE_NONE, deps: required, size: size, obj: undefined, type: type };
			}
		}

		// Add them to the workers as well
		if (!this.worker) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = _workers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var w = _step2.value;

					w.postMessage(["_load_packss", Array.prototype.slice.call(arguments)]);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}

		_files[file] = [provided, required, false];
	};

	/** todo: Write me
  */
	load.loadDepsObject = function (data, absolutePath) {
		var pfunct = function pfunct(fulfill, reject) {
			if (typeof data == "string") data = JSON.parse(data);

			if (Array.isArray(data)) {
				//Convert into new format
				data = { "version": 0, "packages": data };
			}

			var deps = data.packages;
			for (var i = deps.length - 1; i >= 0; i--) {
				var now = deps[i];

				if (deps[i][0].indexOf(":") === -1 && deps[i][0][0] != "/") deps[i][0] = absolutePath + deps[i][0];

				var dlist = now[2];
				load.addDependency(now[0], now[1], dlist, now[3], now[4]);
			}

			if ("dependencies" in data) {
				return Promise.all(data.dependencies.map(function (e) {
					return load.loadDeps(e);
				})).then(fulfill.bind(undefined, data));
			} else {
				fulfill(data);
			}
		};

		return new Promise(pfunct);
	};

	/** Download a JSON containing an array of dependancies. These will be looped through,
  *  and the entries will be given to `{@link load.addDependency}`.
  * 
  * Each entry of the array must itself be an array of the form `[file, provided, required]`.
  * 
  * This returns a promise that resolves when the file is downloaded or fails to download.
  * @param {string} path The path to the JSON file.
  * @param {function()} callback Will be called when the file load is completed.
  * @param {function()} errorCallback Will be called if there is an error.
  * @returns {Promise(object)} A promise.
  * @since 0.0.15-alpha
  */
	load.loadDeps = function (path, callback, errorCallback) {
		if (path in _depFiles) return Promise.resolve(_depFiles[path]);

		_log("Downloading dependency file: " + path);

		// Get paths
		var relativePath = "./";
		if (path.indexOf("/") !== -1) {
			relativePath = path.split("/").slice(0, -1).join("/") + "/";
		}

		// Hack to get the absolute path
		var a = document.createElement("a");
		a.href = relativePath;
		var absolutePath = a.href;

		var pfunct = function pfunct(fullfill, reject) {
			var union = function union(data) {
				if (callback) callback(data);
				if (fullfill) fullfill(data);
			};

			var unione = function unione(data) {
				if (errorCallback) errorCallback(data);
				if (reject) reject(data);
			};

			_xhrGet(path).then(function (data) {
				load.loadDepsObject(data, absolutePath).then(function (o) {
					_depFiles[path] = o;
					union(o);
				}, function (e) {
					unione(e);
				});
			}, function () {
				console.error("Error getting import file, " + xhr.statusText);
				unione(xhr);
			});
		};

		return new Promise(pfunct);
	};

	load.alsoDepends = function (pack, extraDeps) {
		_packs[pack].deps = _packs[pack].deps.concat(extraDeps);
	};

	// ----
	// Error Handling
	// ----

	/** Returns an array of errors; each element is a pair `[error object, errorEvent]`. `errorEvent` is an event object
  *  from the `onError` handler.
  * @return {array} All uncaught errors that have happened.
  * @since 0.0.21-alpha
  */
	load.getErrors = function () {
		return _uncaughtErrors;
	};

	/** An error raised if there is dependancy problems.
  * @param {string} message The message that this error should display.
  * @since 0.0.21-alpha
  * @constructor
  * @extends Error
  */
	load.DependencyError = function (message) {
		this.message = message;
		this.name = "DependencyError";
	};
	load.DependencyError.prototype = Object.create(Error.prototype);

	/** An error raised if there is a problem importing a package (such as it not being found).
  * @param {string} message The message that this error should display.
  * @since 0.0.21-alpha
  * @constructor
  * @extends Error
  */
	load.ImportError = function (message) {
		this.message = message;
		this.name = "ImportError";
	};
	load.ImportError.prototype = Object.create(Error.prototype);

	self.addEventListener("error", function (e) {
		if (!e.error) return;
		_uncaughtErrors.push([e.error, e]);
		load.abort();
	});

	// ----
	// Bells and Whistles
	// ----
	/** Returns the total size of files that are being downloaded, if the deps file has this information.
  * @return {integer} The total download remaining, in bytes.
  * @since 0.0.20-alpha
  */
	load.getBytes = function () {
		var seen = [];
		var sum = 0;
		for (var i = _importSet.length - 1; i >= 0; i--) {
			sum += _packs[_importSet[i]].size;
		};
		return sum;
	};

	// ----
	// Shortcut Functions
	// ----

	/** Invokes the debugger (via the `debugger` operator)
  * 
  * To get access to the local closure.
  */
	load.debug = function () {
		debugger;
	};

	/** Imports all packages, useful for debugging or something.
  * @since 0.0.15-alpha
  */
	load.importAll = function () {
		for (var f in _packs) {
			load.import(f);
		}
	};

	/** Imports all packages that match a given regular expression.
  * @since 0.0.21-alpha
  */
	load.importMatch = function (patt) {
		for (var f in _packs) {
			if (patt.test(f)) load.import(f);
		}
	};

	/** Imports and evaluates the given package.
  * 
  * Sugar for load.import(pack).then(function() {load.evaluate(pack);})
  * 
  * @param {string} pack The package to import and then run.
  * @return {Promise(*)} A promise that resolves with the package.
  */
	load.importAndEvaluate = function (pack) {
		return load.import(pack).then(function () {
			return load.evaluate(pack);
		});
	};

	/** Downloads the dependency file, then imports and evaluates the given package.
  * 
  * Sugar for load.loadDeps(list).then(function() {load.importAndEvaluate(pack);}).
  * 
  * Stands for "load-import-evaluate"
  * 
  * @param {string} list The package list to import.
  * @param {string} pack The package to import and then run.
  * @return {Promise(*)} A promise that resolves with the package.
  */
	load.lie = function (list, pack) {
		return load.loadDeps(list).then(function () {
			return load.importAndEvaluate(pack);
		});
	};

	return load;
}(self);

load.provide("load", function (self) {
	return load;
});
/* Including packs: joint */
load.addDependency("//cdnjs.cloudflare.com/ajax/libs/jointjs/0.9.7/joint.min.js", ["joint"], ["backbone"], 0, 2);

/* Including packs: backbone */
load.addDependency("//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js", ["backbone"], ["lodash"], 0, 2);

/* Including packs: lodash */
load.addDependency("//cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.2/lodash.min.js", ["lodash"], ["jquery"], 0, 2);

/* Including packs: jquery */
load.addDependency("//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js", ["jquery"], [], 0, 2);

/* Including packs: mm.structs.ObjectCanvas, mm.structs.ObjectEdge, mm.structs.ObjectNode, mm.structs.ObjectsData */
load.addDependency("about:blank", ["mm.structs.ObjectCanvas", "mm.structs.ObjectEdge", "mm.structs.ObjectNode", "mm.structs.ObjectsData"], ["mm.structs.ObjectCanvas", "mm.structs.ObjectEdge", "mm.structs.ObjectNode"], 0, 0);

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

load.provide("mm.structs.ObjectNode", function () {
	/** Stores information about a single node
  * 
  * The fields "id", "x", "y" and "fields" are visible in this class, and are the same values and purpose as the
  * source object file.
  * 
  * @param {object} object The object representing this node
  * @param {mm.structs.NodeType} The type of this specific node
  */
	return function () {
		function ObjectNode(object, type) {
			_classCallCheck(this, ObjectNode);

			/** The type of this node
    * 
    * @type mm.structs.NodeType
    */
			this.type = type;

			var _arr = ["id", "x", "y", "fields", "width", "hidden"];
			for (var _i = 0; _i < _arr.length; _i++) {
				var x = _arr[_i];this[x] = object[x];
			}
		}

		/** Gets the field type of the specified field
   * 
   * @param {string} field The name of the field to look up.
   * @return {mm.structs.NodeType} The field type of that field.
   */


		ObjectNode.prototype.getFieldType = function getFieldType(field) {
			return this.type.getFieldType(field);
		};

		/** Adds the x and y oordinate to the location
   * @param {int} x The x coordinate.
   * @param {int} y The y coordinate.
   */


		ObjectNode.prototype.translate = function translate(x, y) {
			this.x += x;
			this.y += y;
		};

		/** Updates the x and y locations of this node.
   * @param {int} x The x coordinate.
   * @param {int} y The y coordinate.
   */


		ObjectNode.prototype.changePosition = function changePosition(x, y) {
			this.x = x;
			this.y = y;
		};

		/** Converts this node into a JSON format
   * 
   * This is the same format as used to create it.
   * 
   * @return {object} The JSON version of this node.
   */


		ObjectNode.prototype.toJson = function toJson() {
			var fields = {};
			for (var x in this.fields) {
				fields[x] = this.fields[x];
			}return {
				type: this.type.name,
				x: this.x,
				y: this.y,
				id: this.id,
				fields: fields,
				width: this.width,
				hidden: this.hidden
			};
		};

		/** Given the JSON representation of a node, updates this node to match it
   * 
   * Any fields or values from the object that are absent will be left alone.
   * 
   * @param {object} obj The object to copy from.
   * @param {?array<string>} fields An array of fields (of obj) to copy, any fields not in this list will be
   *  ignored. If this arg isn't specified, all fields are copied.
   */


		ObjectNode.prototype.update = function update(obj, fields) {
			var _this = this;

			if (fields === undefined) fields = ["x", "y", "width", "type", "fields", "hidden"];
			if ("type" in obj && fields.includes("type")) this.changeType(obj.type);

			["x", "y", "width", "hidden"].forEach(function (x) {
				if (x in obj && fields.includes(x)) _this[x] = obj[x];
			});

			if ("fields" in obj && fields.includes("fields")) for (var x in obj.fields) {
				this.fields[x] = obj.fields[x];
			}
		};

		/** Changes the type of this node to a new type
   * 
   * @param {string} newTypeName The name of the type to change to.
   */


		ObjectNode.prototype.changeType = function changeType(newTypeName) {
			if (this.type.name == newTypeName) return;

			this.type = this.type.getOtherType(newTypeName);

			// Now update all the fields if needed
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.type.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var f = _step.value;

					if (f.name in this.fields) continue;

					if (f.default) {
						this.fields[f.name] = f.default;
					} else {
						switch (f.type) {
							case "text":
							case "blockText":
							case "url":
							case "email":
								this.fields[f.name] = "";
								break;

							case "date":
								this.fields[f.name] = new Date().toJSON();
								break;
						}
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		};

		return ObjectNode;
	}();
});

load.provide("mm.structs.ObjectEdge", function () {
	/** Stores information about a single edge between nodes
  * 
  * The fields "id", "origin", "dest", "text", "points" are visible in this class, and are the same values and
  *  purpose as the source object file.
  * 
  * @param {object} object The object representing this edge
  * @param {mm.structs.EdgeType} The type of this specific edge
  */
	return function () {
		function ObjectEdge(object, type) {
			_classCallCheck(this, ObjectEdge);

			/** The type of this edge
    * 
    * @type mm.structs.EdgeType
    */
			this.type = type;

			var _arr2 = ["id", "origin", "dest", "text", "points"];
			for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
				var x = _arr2[_i2];this[x] = object[x];
			}
		}

		/** Changes the vertices of this edge
   * 
   * @param {array<array<int>>} newPoints The new points around which to curve, as an array of [x, y] pairs.
   */


		ObjectEdge.prototype.changePoints = function changePoints(newPoints) {
			this.points = newPoints;
		};

		/** Converts this node into a JSON format
   * 
   * This is the same format as used to create it.
   * 
   * @return {object} The JSON version of this node.
   */


		ObjectEdge.prototype.toJson = function toJson() {
			return {
				type: this.type.name,
				origin: this.origin,
				dest: this.dest,
				text: this.text,
				points: this.points,
				id: this.id
			};
		};

		/** Given the JSON representation of an edge, updates this edge to match it
   * 
   * Any fields or values from the object that are absent will be left alone.
   * 
   * @param {object} obj The object to copy from.
   * @param {?array<string>} fields An array of fields (of obj) to copy, any fields not in this list will be
   *  ignored. If this arg isn't specified, all fields are copied.
   */


		ObjectEdge.prototype.update = function update(obj, fields) {
			var _this2 = this;

			if (fields === undefined) fields = ["type", "text", "origin", "dest", "points"];
			if ("type" in obj && fields.includes("type")) this.changeType(obj.type);

			["text", "origin", "dest", "points"].forEach(function (x) {
				if (x in obj && fields.includes(x)) _this2[x] = obj[x];
			});
		};

		/** Changes the type of this edge to a new type
   * 
   * @param {string} newTypeName The name of the type to change to.
   */


		ObjectEdge.prototype.changeType = function changeType(newTypeName) {
			if (this.type.name == newTypeName) return;

			this.type = this.type.getOtherType(newTypeName);
		};

		/** Checks if the connections for this node are valid.
   * 
   * @param {array<int>} nodeIds An array of node ids.
   * @return {bool} Whether this node is connected properly.
   */


		ObjectEdge.prototype.isValid = function isValid(nodeIds) {
			return nodeIds.includes(this.origin) && nodeIds.includes(this.dest);
		};

		return ObjectEdge;
	}();
});

load.provide("mm.structs.ObjectCanvas", function () {
	/** Stores information about the canvas
  * 
  * The fields "width", "height", "offsetX" and "offsetY" are visible in this class, and are the same values and
  *  purpose as the source object file.
  * 
  * @param {object} object The "canvas" object from the objects file.
  * @param {function(int, int)} translateFn A function that takes an x,y pair and translates everything by that
  *  value, called when space is added at the top.
  */
	return function () {
		function ObjectCanvas(object, translateFn) {
			_classCallCheck(this, ObjectCanvas);

			var _arr3 = ["width", "height"];

			for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
				var x = _arr3[_i3];this[x] = object[x];
			}this._translateFn = translateFn;
		}

		/** Adds the given amount of pixels to the top of the document
   * 
   * This adjusts the offset such that it looks like the added space is "new" at the top.
   * 
   * @param {integer} n The number of pixels to increase the size by.
   */


		ObjectCanvas.prototype.addTop = function addTop(n) {
			this.height += n;
			this._translateFn(0, n);
		};

		/** Adds the given amount of pixels to the left of the document
   * 
   * This adjusts the offset such that it looks like the added space is "new" at the left.
   * 
   * @param {integer} n The number of pixels to increase the size by.
   */


		ObjectCanvas.prototype.addLeft = function addLeft(n) {
			this.width += n;
			this._translateFn(n, 0);
		};

		/** Adds the given amount of pixels to the right of the document
   * 
   * @param {integer} n The number of pixels to increase the size by.
   */


		ObjectCanvas.prototype.addRight = function addRight(n) {
			this.width += n;
		};

		/** Adds the given amount of pixels to the bottom of the document
   * 
   * @param {integer} n The number of pixels to increase the size by.
   */


		ObjectCanvas.prototype.addBottom = function addBottom(n) {
			this.height += n;
		};

		/** Exports the canvas to a JSON format
   * 
   * In the same format as the "canvas" property of the input file.
   * @return {object} The JSON of this canvas.
   */


		ObjectCanvas.prototype.toJson = function toJson() {
			return {
				width: this.width,
				height: this.height
			};
		};

		return ObjectCanvas;
	}();
});

load.provide("mm.structs.ObjectsData", function () {
	var ObjectNode = load.require("mm.structs.ObjectNode");
	var ObjectEdge = load.require("mm.structs.ObjectEdge");
	var ObjectCanvas = load.require("mm.structs.ObjectCanvas");

	/** The objects data file as JavaScript classes (with convienince functions, shortcuts, etc.)
  * 
  * Constructor builds the information from a given object data, and it uses a provided TypeFile object to determine
  * its type.
  * 
  * @param {string|object} object The objects file (as specified in objects.txt) to build the graph from. If it is a string
  *  it is parsed as a JSON string.
  * @param {mm.structs.TypesFile} types Type information about the nodes and edges.
  */
	return function () {
		function ObjectsData(object, types) {
			_classCallCheck(this, ObjectsData);

			/** The types file
    * 
    * @type mm.structs.TypesFile
    */
			this.types = types;

			/** Version of the objects data file, as given by the "version" field
    * 
    * @type integer
    */
			this.version = -1;

			/** An array of nodes in this graph
    * 
    * @type array<mm.structs.ObjectNode>
    */
			this.nodes = [];
			/** An array of edges in this graph
    * 
    * @type array<mm.structs.ObjectEdge>
    */
			this.edges = [];
			/** The canvas information object thing
    * 
    * @type array<mm.structs.ObjectCanvas>
    */
			this.canvas = null;

			this.reload(object);

			// Todo: Editor part
		}

		/** Reloads all the nodes from a data object from the data file
   * 
   * @param {object} object The data object.
   */


		ObjectsData.prototype.reload = function reload(object) {
			var _this3 = this;

			this.nodes = [];
			this.edges = [];

			this.version = object.version;

			this.nodes = object.nodes.map(function (x) {
				return new ObjectNode(x, _this3.types.getNodeType(x.type));
			});
			this.edges = object.edges.map(function (x) {
				return new ObjectEdge(x, _this3.types.getArrowType(x.type));
			});

			var nids = this.nodes.map(function (n) {
				return n.id;
			});
			this.edges = this.edges.filter(function (e) {
				return e.isValid(nids);
			});

			this.canvas = new ObjectCanvas(object.canvas, this.translate.bind(this));
		};

		/** Checks if a data file looks valid, and if not outputs a reason
   * 
   * @param {object} object The object to check.
   * @return {string} The empty string if the object is okay, and a reason if it isn't.
   */


		ObjectsData.prototype.check = function check(object) {
			if (!object) return "Object is null";
			if (object.version != 1) return "Wrong version; expecting 1, but got " + object.version;
			if (!Array.isArray(object.nodes)) return "Node array is absent or not an array.";
			if (!Array.isArray(object.edges)) return "Edge array is absent or not an array.";
			if (!object.canvas) return "Canvas information is absent";

			return "";
		};

		/** Makes a brand new, "empty" node of the default type
   * 
   * @param {int=0} x The x coordinate at which to place the node.
   * @param {int=0} y The y coordinate at which to place the node.
   */


		ObjectsData.prototype.makeNewNode = function makeNewNode(x, y) {
			var highest = 0;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _x = _step2.value;

					if (_x.id >= highest) {
						highest = _x.id + 1;
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var type = this.types.getDefaultNodeType();

			var newNode = {};

			newNode.id = highest;
			newNode.type = type.name;

			newNode.x = x ? x : 0;
			newNode.y = y ? y : 0;
			newNode.width = 100;

			newNode.fields = {};
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = type.fields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var f = _step3.value;

					if (f.default) {
						newNode.fields[f.name] = f.default;
					} else {
						switch (f.type) {
							case "text":
							case "blockText":
							case "url":
							case "email":
								newNode.fields[f.name] = "";
								break;

							case "date":
								newNode.fields[f.name] = new Date().toJSON();
								break;
						}
					}
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			var n = new ObjectNode(newNode, type);
			this.nodes.push(n);
			return n;
		};

		/** Removes the node with the given id
   * 
   * @param {int} id The node to remove
   */


		ObjectsData.prototype.removeNode = function removeNode(id) {
			this.nodes = this.nodes.filter(function (n) {
				return n.id != id;
			});
		};

		/** Returns the node with the given id
   * 
   * @param {int} id The node to look up
   * @return {mm.structs.ObjectNode} The node.
   */


		ObjectsData.prototype.getNode = function getNode(id) {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this.nodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var n = _step4.value;

					if (n.id == id) {
						return n;
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		};

		/** Returns the edge with the given id
   * 
   * @param {int} id The edge to look up
   * @return {mm.structs.ObjectEdge} The edge.
   */


		ObjectsData.prototype.getEdge = function getEdge(id) {
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = this.edges[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var e = _step5.value;

					if (e.id == id) {
						return e;
					}
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}
		};

		/** Returns an array of the edges that link to or from this node
   * 
   * @param {int} id The node to get edges for
   * @return {array<mm.structs.ObjectEdge>}
   */


		ObjectsData.prototype.getEdgesConnectedToNode = function getEdgesConnectedToNode(id) {
			return this.edges.filter(function (e) {
				return [e.origin, e.dest].includes(id);
			});
		};

		/** Makes a brand new, "empty" edge of the default type
   * 
   * @param {int} source The source of the node.
   * @param {int} dest The destination id of the node.
   */


		ObjectsData.prototype.makeNewEdge = function makeNewEdge(source, dest) {
			var highest = 0;
			var _iteratorNormalCompletion6 = true;
			var _didIteratorError6 = false;
			var _iteratorError6 = undefined;

			try {
				for (var _iterator6 = this.edges[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
					var x = _step6.value;

					if (x.id >= highest) {
						highest = x.id + 1;
					}
				}
			} catch (err) {
				_didIteratorError6 = true;
				_iteratorError6 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion6 && _iterator6.return) {
						_iterator6.return();
					}
				} finally {
					if (_didIteratorError6) {
						throw _iteratorError6;
					}
				}
			}

			var type = this.types.getDefaultArrowType();

			var newEdge = {};

			newEdge.id = highest;
			newEdge.type = type.name;

			newEdge.origin = source;
			newEdge.dest = dest;

			newEdge.points = [];

			newEdge.text = "";

			var e = new ObjectEdge(newEdge, type);
			this.edges.push(e);
			return e;
		};

		/** Inserts a new node into the graph
   * 
   * Note that a new ID will NOT be generated.
   * 
   * @param {object|mm.structs.ObjectNode} node The node to add. If it is an object then it will be converted
   * to a node.
   */


		ObjectsData.prototype.insertNode = function insertNode(node) {
			if (!(node instanceof ObjectNode)) node = new ObjectNode(node, this.types.getNodeType(node.type));

			this.nodes.push(node);
		};

		/** Inserts a new edge into the graph
   * 
   * Note that a new ID will NOT be generated.
   * 
   * @param {object|mm.structs.ObjectEdge} edge The edge to add. If it is an object then it will be converted
   * to an edge.
   */


		ObjectsData.prototype.insertEdge = function insertEdge(edge) {
			if (!(edge instanceof ObjectEdge)) edge = new ObjectEdge(edge, this.types.getArrowType(edge.type));

			this.edges.push(edge);
		};

		/** Removes the edge with the given id
   * 
   * @param {int} id The edge to remove
   */


		ObjectsData.prototype.removeEdge = function removeEdge(id) {
			this.edges = this.edges.filter(function (n) {
				return n.id != id;
			});
		};

		/** For every node in the diagram, moves it by (x, y). For every edge, move all its points by (x, y)
   * 
   * @param {int} x The x coordinate to translate.
   * @param {int} y The y coordinate to translate.
   */


		ObjectsData.prototype.translate = function translate(x, y) {
			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = this.nodes[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var n = _step7.value;

					n.x += x;
					n.y += y;
				}
			} catch (err) {
				_didIteratorError7 = true;
				_iteratorError7 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion7 && _iterator7.return) {
						_iterator7.return();
					}
				} finally {
					if (_didIteratorError7) {
						throw _iteratorError7;
					}
				}
			}

			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = this.edges[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var e = _step8.value;

					e.points = e.points.map(function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2);

						var px = _ref2[0];
						var py = _ref2[1];
						return [px + x, py + y];
					});
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8.return) {
						_iterator8.return();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}
		};

		/** Exports the whole graph to a JSON format
   * 
   * In the same format as the import file.
   * @return {object} An import-like file.
   */


		ObjectsData.prototype.toJson = function toJson() {
			return {
				version: this.version,
				nodes: this.nodes.map(function (x) {
					return x.toJson();
				}),
				edges: this.edges.map(function (x) {
					return x.toJson();
				}),
				canvas: this.canvas.toJson()
			};
		};

		/** Returns true if the object should be hidden
   * 
   * For nodes, this is it's "hidden" field.
   * For edges, this is true if it is connected to a hidden node.
   * 
   * @param {mm.structs.ObjectNode|mm.structs.ObjectEdge} obj The object to check.
   * @return {boolean} Whether the object is hidden or not.
   */


		ObjectsData.prototype.isHidden = function isHidden(obj) {
			if (obj instanceof ObjectNode) return obj.hidden;

			if (obj instanceof ObjectEdge) {
				return this.isHidden(this.getNode(obj.origin)) || this.isHidden(this.getNode(obj.dest));
			}
		};

		return ObjectsData;
	}();
});
/* Including packs: mm.InteractorState */
load.addDependency("about:blank", ["mm.InteractorState"], [], 0, 0);

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

load.provide("mm.InteractorState", function () {
	return function () {
		function InteractorState(interactor, abstractGraph, editor) {
			_classCallCheck(this, InteractorState);

			/** The interactor for the state
    * @type mm.Interactor
    * @protected
    */
			this._interactor = interactor;
			/** The abstract graph
    * @type mm.structs.AbstractGraph
    * @protected
    */
			this._abstractGraph = abstractGraph;
			/** The editor for the state, if it exists
    * @type ?mm.editor
    * @protected
    */
			this._editor = editor;

			this.rerendering = false;

			this._multiSel = [];
		}

		InteractorState.prototype.addToMultiSel = function addToMultiSel(node) {
			if (this._multiSel.includes(node)) return;
			this._multiSel.push(node);
			this._interactor.updateMultiSel();
		};

		InteractorState.prototype.inMultiSel = function inMultiSel(node) {
			return this._multiSel.some(function (x) {
				return x == node;
			});
		};

		InteractorState.prototype.removeFromMultiSel = function removeFromMultiSel(node) {
			this._multiSel = this._multiSel.filter(function (x) {
				return x != node;
			});
			this._interactor.updateMultiSel();
		};

		InteractorState.prototype.clearMultiSel = function clearMultiSel() {
			this._multiSel = [];
			this._interactor.updateMultiSel();
		};

		InteractorState.prototype.countMultiSel = function countMultiSel() {
			return this._multiSel.length;
		};

		InteractorState.prototype.getMultiSel = function getMultiSel() {
			return this._multiSel;
		};

		return InteractorState;
	}();
});
/* Including packs: interactorResources/editWidget.html */
load.provideResource("interactorResources/editWidget.html", atob("PGRpdiBjbGFzcz0nbW0tZWRpdC13aWRnZXQnPgogICAgPGEgY2xhc3M9J21tLWhlbHAtYnV0dG9uJyB0aXRsZT0nSGVscCc+PzwvYT4KICAgIDxhIGNsYXNzPSdtbS1jcmVhdGUtYnV0dG9uJyB0aXRsZT0nQWRkIE5ldyBOb2RlJz4rPC9hPgogICAgPGEgY2xhc3M9J21tLWV4cG9ydC1idXR0b24gdGV4dCcgdGl0bGU9J0V4cG9ydCB0byBGaWxlJz5FeHBvcnQ8L2E+CiAgICA8YSBjbGFzcz0nbW0taW1wb3J0LWJ1dHRvbiB0ZXh0JyB0aXRsZT0nSW1wb3J0IGZyb20gRmlsZSc+SW1wb3J0PC9hPgogICAgPGEgY2xhc3M9J21tLXVuZG8tYnV0dG9uIHRleHQnIHRpdGxlPSdVbmRvJz5VbmRvPC9hPgogICAgPGEgY2xhc3M9J21tLXJlZG8tYnV0dG9uIHRleHQnIHRpdGxlPSdSZWRvJz5SZWRvPC9hPgo8L2Rpdj4K"));

/* Including packs: interactorResources/detailsPanel.html */
load.provideResource("interactorResources/detailsPanel.html", atob("PGRpdiBjbGFzcz0nbW0tZGV0YWlscy1wYW5lbCBoaWRkZW4nPgogICAgPGRpdiBjbGFzcz0nbW0tZGV0YWlscy1zaG9ydCc+PC9kaXY+CiAgICA8ZGl2IGNsYXNzPSdtbS1kZXRhaWxzLWxvbmcnPjwvZGl2PgogICAgPGRpdiBjbGFzcz0nbW0tZGV0YWlscy1lZGl0Jz4KICAgICAgICA8Zm9ybT4KICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW0tZmllbGRwYWlyJz4KICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdtbS1maWVsZG5hbWUnPlR5cGU8L3NwYW4+CiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nbW0tZmllbGR2YXInPjxzZWxlY3QgY2xhc3M9J21tLWRldGFpbHMtZWRpdC10eXBlJz48L3NlbGVjdD48L3NwYW4+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAKICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW0tZmllbGRwYWlyJz4KICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdtbS1maWVsZG5hbWUnPldpZHRoPC9zcGFuPgogICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J21tLWZpZWxkdmFyJz4KICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPSdtbS1kZXRhaWxzLWVkaXQtd2lkdGgnIG5hbWU9J3dpZHRoJz4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTAwJz5Ob3JtYWw8L29wdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMjAwJz5XaWRlPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzMwMCc+VmVyeSBXaWRlPC9vcHRpb24+CiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+CiAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgPC9kaXY+IAogICAgICAgICAgICAKICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW0tZmllbGRwYWlyJz4KICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdtbS1maWVsZG5hbWUnPkhpZGRlbjwvc3Bhbj4KICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdtbS1maWVsZHZhcic+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjbGFzcz0nbW0tZGV0YWlscy1lZGl0LWhpZGRlbicgbmFtZT0naGlkZGVuJy8+CiAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAKICAgICAgICAgICAgPGRpdiBjbGFzcz0nbW0tZGV0YWlscy1lZGl0LWlubmVyJz4KICAgICAgICAgICAgICAgIAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgCiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21tLWJ1dHRvbi1iYXInPgogICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbW0tZGV0YWlscy1lZGl0LXNhdmUgbW0tc2F2ZSc+U2F2ZTwvYnV0dG9uPgogICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbW0tZGV0YWlscy1lZGl0LWNsb3NlIG1tLWNhbmNlbCcgdGFiaW5kZXg9Jy0xJz5DYW5jZWw8L2J1dHRvbj4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J21tLWRldGFpbHMtZWRpdC1kZWxldGUgbW0tZGVsZXRlJz5EZWxldGU8L2J1dHRvbj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9mb3JtPgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSdtbS1kZXRhaWxzLWVkaXQtYXJyb3cnPgogICAgICAgIDxmb3JtPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSdtbS1maWVsZHBhaXIgbW0tZmllbGRwYWlyLWFycm93Jz4KICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdtbS1maWVsZG5hbWUgbW0tZmllbGRuYW1lLWFycm93Jz4KICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPSdtbS1kZXRhaWxzLWVkaXQtYXJyb3ctdHlwZSc+CiAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PgogICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAKICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdtbS1maWVsZHZhbCBtbS1maWVsZHZhbC1hcnJvdyc+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPSdtbS1kZXRhaWxzLWVkaXQtYXJyb3ctdGV4dCcgdHlwZT0ndGV4dCcgdmFsPScnIG5hbWU9J3RleHQnLz4KICAgICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIAogICAgICAgICAgICA8ZGl2IGNsYXNzPSdtbS1idXR0b24tYmFyJz4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J21tLWRldGFpbHMtZWRpdC1hcnJvdy1zYXZlIG1tLXNhdmUnPlNhdmU8L2J1dHRvbj4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J21tLWRldGFpbHMtZWRpdC1hcnJvdy1jbG9zZSBtbS1jYW5jZWwnIHRhYmluZGV4PSctMSc+Q2FuY2VsPC9idXR0b24+CiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdtbS1kZXRhaWxzLWVkaXQtYXJyb3ctZGVsZXRlIG1tLWRlbGV0ZSc+RGVsZXRlPC9idXR0b24+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZm9ybT4KICAgIDwvZGl2Pgo8L2Rpdj4K"));

/* Including packs: mm.structs.ArrowType, mm.structs.NodeType, mm.structs.NodeTypeField, mm.structs.TypesFile */
load.addDependency("about:blank", ["mm.structs.ArrowType", "mm.structs.NodeType", "mm.structs.NodeTypeField", "mm.structs.TypesFile"], ["mm.structs.ArrowType", "mm.structs.NodeType", "mm.structs.NodeTypeField"], 0, 0);

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

load.provide("mm.structs.NodeTypeField", function () {
	return function NodeTypeField(arr) {
		_classCallCheck(this, NodeTypeField);

		if (!arr[0].match(/^[a-zA-Z\s]+$/)) throw new TypeError("Node type name " + arr[0] + " is not valid.");

		var _arr = _slicedToArray(arr, 4);

		this.name = _arr[0];
		this.type = _arr[1];
		this.default = _arr[2];
		this.arg = _arr[3];
	};
});

load.provide("mm.structs.NodeType", function () {
	var NodeTypeField = load.require("mm.structs.NodeTypeField");

	return function () {
		function NodeType(object, file) {
			_classCallCheck(this, NodeType);

			if (!object.name.match(/[a-z]+/)) throw new TypeError("Node type name " + object.name + " is not valid.");

			var _arr2 = ["name", "nodeText", "nodeAttr", "viewText", "viewAddText"];
			for (var _i = 0; _i < _arr2.length; _i++) {
				var x = _arr2[_i];this[x] = object[x];
			}this.file = file;
			this.fields = object.fields.map(function (x) {
				return new NodeTypeField(x);
			});
		}

		NodeType.prototype.getFieldType = function getFieldType(field) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var f = _step.value;

					if (f.name == field) {
						return f;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return null;
		};

		NodeType.prototype.getOtherType = function getOtherType(name) {
			return this.file.getNodeType(name);
		};

		return NodeType;
	}();
});

load.provide("mm.structs.ArrowType", function () {
	return function () {
		function ArrowType(object, file) {
			_classCallCheck(this, ArrowType);

			if (!object.name.match(/[a-z]+/)) throw new TypeError("Arrow type name " + this.name + " is not valid.");

			this.file = file;
			var _arr3 = ["name", "attr", "textAttr"];
			for (var _i2 = 0; _i2 < _arr3.length; _i2++) {
				var x = _arr3[_i2];this[x] = object[x];
			}
		}

		ArrowType.prototype.getOtherType = function getOtherType(name) {
			return this.file.getArrowType(name);
		};

		return ArrowType;
	}();
});

load.provide("mm.structs.TypesFile", function () {
	var ArrowType = load.require("mm.structs.ArrowType");
	var NodeType = load.require("mm.structs.NodeType");

	return function () {
		function TypesFile(object) {
			var _this = this;

			_classCallCheck(this, TypesFile);

			this.version = object.version;

			this.defaultType = object.defaultType;
			this.defaultArrowType = object.defaultArrowType;

			this.types = object.types.map(function (x) {
				return new NodeType(x, _this);
			});
			this.arrowTypes = object.arrows.map(function (x) {
				return new ArrowType(x, _this);
			});
		}

		/** Returns the node type with the given name.
   * 
   * @param {string} The name to look up.
   * @return {mm.structs.NodeType?} The node type, or null if it wasn't found.
   */


		TypesFile.prototype.getNodeType = function getNodeType(name) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.types[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var t = _step2.value;

					if (t.name == name) return t;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return null;
		};

		/** Returns the default node type.
   * 
   * @return {mm.structs.NodeType} The default node type.
   */


		TypesFile.prototype.getDefaultNodeType = function getDefaultNodeType() {
			return this.getNodeType(this.defaultType);
		};

		/** Returns the arrow type with the given name.
   * 
   * @param {string} The name to look up.
   * @return {mm.structs.ArrowType?} The arrow type, or null if it wasn't found.
   */


		TypesFile.prototype.getArrowType = function getArrowType(name) {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this.arrowTypes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var t = _step3.value;

					if (t.name == name) return t;
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			return null;
		};

		/** Returns the default arrow type.
   * 
   * @return {mm.structs.ArrowType} The default arrow type.
   */


		TypesFile.prototype.getDefaultArrowType = function getDefaultArrowType() {
			return this.getArrowType(this.defaultArrowType);
		};

		return TypesFile;
	}();
});
/* Including packs: interactorResources/styles.css */
load.provideResource("interactorResources/styles.css", atob("Lm1tLXJvb3QgewogICAgZGlzcGxheTpibG9jazsKICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7CiAgICBtYXJnaW4tbGVmdDoxMHB4OwogICAgbWFyZ2luLXRvcDoxMHB4OwogICAgYm9yZGVyLXJhZGl1czozcHg7CiAgICBwb3NpdGlvbjpyZWxhdGl2ZTsKfQoKLm1tLWlubmVyIHsKICAgIG92ZXJmbG93OmhpZGRlbjsKICAgIHdpZHRoOmluaGVyaXQ7CiAgICBoZWlnaHQ6aW5oZXJpdDsKICAgIGJhY2tncm91bmQtY29sb3I6I2VlZWVlZTsKfQoKLm1tLWlubmVyIHN2ZyB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7CiAgICBib3JkZXI6MXB4IHNvbGlkICNlZWVlZWU7CiAgICBtYXJnaW46NTBweDsKfQoKLmhpZGRlbiB7CiAgICB2aXNpYmlsaXR5OmhpZGRlbjsKfQoKLyogV2lkZ2V0cyAqLwoubW0tdmlldy13aWRnZXQsIC5tbS1lZGl0LXdpZGdldCwgLm1tLXJlc2l6ZSB7CiAgICBwb3NpdGlvbjphYnNvbHV0ZTsKICAgIHRvcDozcHg7CiAgICBsZWZ0OjNweDsKICAgIGJvcmRlci1yYWRpdXM6MTBweDsKICAgIHBhZGRpbmc6NXB4OwogICAgYmFja2dyb3VuZC1jb2xvcjojZWVlZWZmOwogICAgZGlzcGxheTppbmxpbmUtYmxvY2s7Cn0KCi5tbS12aWV3LXdpZGdldCBhLCAubW0tZWRpdC13aWRnZXQgYSwgLm1tLXJlc2l6ZSBhIHsKICAgIGJvcmRlci1yYWRpdXM6MTBweDsKICAgIGJhY2tncm91bmQtY29sb3I6I2NjY2NkZDsKICAgIG1pbi13aWR0aDoyMHB4OwogICAgZGlzcGxheTppbmxpbmUtYmxvY2s7CiAgICB0ZXh0LWFsaWduOmNlbnRlcjsKICAgIGN1cnNvcjpwb2ludGVyOwogICAgCiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7CiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgIHVzZXItc2VsZWN0OiBub25lOwp9CgoubW0tdmlldy13aWRnZXQgYS50ZXh0LCAubW0tZWRpdC13aWRnZXQgYS50ZXh0LCAubW0tcmVzaXplIGEudGV4dCB7CiAgICBwYWRkaW5nLWxlZnQ6NXB4OwogICAgcGFkZGluZy1yaWdodDo1cHg7Cn0KCi5tbS1lZGl0LXdpZGdldCB7CiAgICBsZWZ0OmluaGVyaXQ7CiAgICByaWdodDozcHg7Cn0KCi8qIERldGFpbHMgcGFuZWwgKi8KLm1tLWRldGFpbHMtcGFuZWwgewogICAgcG9zaXRpb246YWJzb2x1dGU7CiAgICBib3R0b206M3B4OwogICAgbGVmdDozcHg7CiAgICBib3JkZXItcmFkaXVzOjEwcHg7CiAgICBwYWRkaW5nOjVweDsKICAgIGJhY2tncm91bmQtY29sb3I6I2VlZWVmZjsKICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrOwogICAgbWluLXdpZHRoOjIwJTsKICAgIG1heC13aWR0aDo1MCU7Cn0KCi5tbS1kZXRhaWxzLXBhbmVsLmhpZGRlbiB7CiAgICBkaXNwbGF5Om5vbmU7Cn0KCi5tbS1kZXRhaWxzLXBhbmVsLmhpZGRlbi5sb25nIHsKICAgIGRpc3BsYXk6aW5oZXJpdDsKfQoKLm1tLWRldGFpbHMtcGFuZWwgLm1tLWRldGFpbHMtbG9uZywgLm1tLWRldGFpbHMtcGFuZWwgLm1tLWRldGFpbHMtZWRpdCB7CiAgICBkaXNwbGF5Om5vbmU7Cn0KCi5tbS1ub2VkaXQgLm1tLWRldGFpbHMtcGFuZWwubG9uZyAubW0tZGV0YWlscy1sb25nIHsKICAgIGRpc3BsYXk6aW5oZXJpdDsKfQoKLm1tLW5vZWRpdCAubW0tZGV0YWlscy1wYW5lbCAubW0tZGV0YWlscy1lZGl0LWFycm93IHsKICAgIGRpc3BsYXk6bm9uZTsKfQoKLm1tLW5vZWRpdCAuY29ubmVjdGlvbi13cmFwLCAubW0tbm9lZGl0IC5tYXJrZXItYXJyb3doZWFkcyB7CiAgICBkaXNwbGF5Om5vbmU7Cn0KCi5tbS1lZGl0IC5tbS1kZXRhaWxzLXBhbmVsLmxvbmcgLm1tLWRldGFpbHMtZWRpdCB7CiAgICBkaXNwbGF5OmluaGVyaXQ7Cn0KCi5tbS1lZGl0IC5tbS1kZXRhaWxzLXBhbmVsLmVkZ2UgLm1tLWRldGFpbHMtZWRpdCB7CiAgICBkaXNwbGF5Om5vbmU7Cn0KCi5tbS1lZGl0IC5tbS1kZXRhaWxzLXBhbmVsIC5tbS1kZXRhaWxzLWVkaXQtYXJyb3cgewogICAgZGlzcGxheTpub25lOwp9CgoubW0tZWRpdCAubW0tZGV0YWlscy1wYW5lbC5lZGdlIC5tbS1kZXRhaWxzLWVkaXQtYXJyb3cgewogICAgZGlzcGxheTppbmhlcml0Owp9CgoubW0tZGV0YWlscy1wYW5lbCB0ZXh0YXJlYSB7CiAgICBmb250OmluaGVyaXQ7Cn0KCi8qKiBIZWxwIHBhbmVsIHRoaW5nICovCi5tbS1lZGl0LWhlbHAgewogICAgcG9zaXRpb246YWJzb2x1dGU7CiAgICBkaXNwbGF5OmZsZXg7CiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47CiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOwogICAgd2lkdGg6MTAwJTsKICAgIGhlaWdodDoxMDAlOwogICAgei1pbmRleDoxOwp9CgoubW0tZWRpdC1oZWxwLWNvbnRlbnQgewogICAgcGFkZGluZzo1cHg7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZmY7CiAgICBib3JkZXI6MnB4IHNvbGlkICNjY2NjZWU7CiAgICBib3JkZXItcmFkaXVzOjVweDsKICAgIHdpZHRoOjkwJTsKICAgIGhlaWdodDo5MCU7CiAgICBtYXJnaW46YXV0bzsKfQoKLm1tLWVkaXQtaGVscC1jb250ZW50IC5sZWZ0IHsKICAgIGZsb2F0OmxlZnQ7CiAgICB3aWR0aDo0OCU7CiAgICBwYWRkaW5nOjVweDsKfQoKLm1tLWVkaXQtaGVscC1jb250ZW50IC5yaWdodCB7CiAgICBmbG9hdDpyaWdodDsKICAgIHdpZHRoOjQ4JTsKICAgIHBhZGRpbmc6NXB4Owp9CgoubW0tZWRpdC1oZWxwLWNvbnRlbnQgdWwgewogICAgbGlzdC1zdHlsZS10eXBlOiBub25lOwogICAgcGFkZGluZzozcHg7Cn0KCi5tbS1lZGl0LWhlbHAtY29udGVudCBsaSB7CiAgICBtYXJnaW4tYm90dG9tOjEwcHg7Cn0KCi5tbS1lZGl0LWhlbHAtY29udGVudCBoMiB7Cgp9CgovKiBIaWRlIGVkaXRvciBiaXRzICovCi5tbS1yb290IC5saW5rLXRvb2xzIHsKICAgIHZpc2liaWxpdHk6aGlkZGVuOwp9CgoubW0tbm9lZGl0IC5tYXJrZXItdmVydGljZXMgewogICAgdmlzaWJpbGl0eTpoaWRkZW47Cn0KCi5tbS1ub2VkaXQgc3ZnIC5vdXRQb3J0cyB7CiAgICB2aXNpYmlsaXR5OmhpZGRlbjsKfQoKLyogSm9pbnQgc3R1ZmYgKi8KLyoubW0tcm9vdCAubWFya2VyLXZlcnRleC1yZW1vdmUtYXJlYSwgLm1tLXJvb3QgLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlIHsKICAgIHZpc2liaWxpdHk6aGlkZGVuOwp9Ki8KCi8qIE11bHRpIHNlbGVjdCAqLwoubW0tcm9vdCBzdmcgLm1tLXNlbGVjdGVkIHJlY3QgewogICAgc3Ryb2tlOiNmZmNjMDA7CiAgICBzdHJva2Utd2lkdGg6MzsKfQoKLyogUmVzaXplIFdpZGdldHMgKi8KLm1tLXJlc2l6ZS1jb250YWluZXItaG9yIHsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIGxlZnQ6IDUwJTsKfQoKLm1tLXJlc2l6ZS1jb250YWluZXItdmVyIHsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHRvcDogNTAlOwp9CgoubW0tcmVzaXplIHsKICAgIHBvc2l0aW9uOnJlbGF0aXZlOwogICAgb3ZlcmZsb3c6aGlkZGVuOwogICAgdG9wOmluaGVyaXQ7CiAgICBsZWZ0OmluaGVyaXQ7Cn0KCi5tbS1yZXNpemUtdG9wIHsKICAgIHRvcDozcHg7CiAgICBsZWZ0Oi01MCU7Cn0KCi5tbS1yZXNpemUtYm90dG9tIHsKICAgIGxlZnQ6LTUwJTsKfQoKLm1tLXJlc2l6ZS1ib3R0b20tY29udCB7CiAgICBib3R0b206M3B4Owp9CgoubW0tcmVzaXplLWxlZnQgewogICAgbGVmdDozcHg7CiAgICB0b3A6LTUwJTsKfQoKLm1tLXJlc2l6ZS1yaWdodCB7CiAgICB0b3A6LTUwJTsKfQoKLm1tLXJlc2l6ZS1yaWdodC1jb250IHsKICAgIHJpZ2h0OjNweDsKfQoKLyogSGlkZGVuIG5vZGVzICovCi5oaWRkZW4tbm9kZSwgLmhpZGRlbi1lZGdlIHsKICAgIG9wYWNpdHk6MC41Owp9CgovKiBDb2xvdXJlZCBCdXR0b25zICovCi5tbS1zYXZlIHsKICAgIGJhY2tncm91bmQ6Izg4ZGQ4ODsKICAgIGJvcmRlcjoycHggc29saWQgIzY2YmI2NjsKICAgIGJvcmRlci1yYWRpdXM6M3B4Owp9CgoubW0tZGVsZXRlIHsKICAgIGJhY2tncm91bmQ6I2RkODg4ODsKICAgIGJvcmRlcjoycHggc29saWQgI2JiNjY2NjsKICAgIGJvcmRlci1yYWRpdXM6M3B4Owp9CgoubW0tY2FuY2VsIHsKICAgIGJhY2tncm91bmQ6I2RkZGQ4ODsKICAgIGJvcmRlcjoycHggc29saWQgI2JiYmI2NjsKICAgIGJvcmRlci1yYWRpdXM6M3B4Owp9CgoubW0tYnV0dG9uLWJhciB7CiAgICBtYXJnaW4tdG9wOjEwcHg7CiAgICB0ZXh0LWFsaWduOmNlbnRlcjsKfQoKLm1tLWJ1dHRvbi1iYXIgYnV0dG9uIHsKICAgIHdpZHRoOjEwMHB4OwogICAgbWFyZ2luLWxlZnQ6MTBweDsKICAgIG1hcmdpbi1yaWdodDoxMHB4Owp9CgoKLyogTmV3IGZpZWxkIHN0eWxlICovCi5tbS1maWVsZHBhaXIgewogICAgbWFyZ2luLXRvcDo3cHg7Cn0KCi5tbS1maWVsZG5hbWUgewogICAgd2lkdGg6MTUwcHg7CiAgICBkaXNwbGF5OmlubGluZS1ibG9jazsKICAgIHZlcnRpY2FsLWFsaWduOnRvcDsKfQoKLm1tLWZpZWxkdmFyIHsKICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrOwogICAgdmVydGljYWwtYWxpZ246dG9wOwp9CgoubW0tZmllbGRwYWlyIGlucHV0LCAubW0tZmllbGRwYWlyIHRleHRhcmVhLCAubW0tZmllbGRwYWlyIHNlbGVjdCB7CiAgICB3aWR0aDoyNTBweDsKfQoKLm1tLWZpZWxkcGFpci1hcnJvdyBzZWxlY3QgewogICAgd2lkdGg6MTQwcHg7Cn0K"));

/* Including packs: interactorResources/resizeWidgets.html */
load.provideResource("interactorResources/resizeWidgets.html", atob("PGRpdiBjbGFzcz0nbW0tcmVzaXplLWNvbnRhaW5lci1ob3InPgogICAgPGRpdiBjbGFzcz0nbW0tcmVzaXplLXRvcCBtbS1yZXNpemUtaG9yIG1tLXJlc2l6ZSc+CiAgICAgICAgPGEgY2xhc3M9J21tLWV4dGVuZCc+JiM4NTkzOzwvYT4KICAgICAgICA8YSBjbGFzcz0nbW0tc2hyaW5rJz4mIzg1OTU7PC9hPgogICAgPC9kaXY+CjwvZGl2PgoKPGRpdiBjbGFzcz0nbW0tcmVzaXplLWNvbnRhaW5lci12ZXInPgogICAgPGRpdiBjbGFzcz0nbW0tcmVzaXplLWxlZnQgbW0tcmVzaXplLXZlciBtbS1yZXNpemUnPgogICAgICAgIDxhIGNsYXNzPSdtbS1leHRlbmQnPiYjODU5Mjs8L2E+CiAgICAgICAgPGEgY2xhc3M9J21tLXNocmluayc+JiM4NTk0OzwvYT4KICAgIDwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9J21tLXJlc2l6ZS1jb250YWluZXItaG9yIG1tLXJlc2l6ZS1ib3R0b20tY29udCc+CiAgICA8ZGl2IGNsYXNzPSdtbS1yZXNpemUtYm90dG9tIG1tLXJlc2l6ZS1ob3IgbW0tcmVzaXplJz4KICAgICAgICA8YSBjbGFzcz0nbW0tZXh0ZW5kJz4mIzg1OTU7PC9hPgogICAgICAgIDxhIGNsYXNzPSdtbS1zaHJpbmsnPiYjODU5Mzs8L2E+CiAgICA8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSdtbS1yZXNpemUtY29udGFpbmVyLXZlciBtbS1yZXNpemUtcmlnaHQtY29udCc+CiAgICA8ZGl2IGNsYXNzPSdtbS1yZXNpemUtcmlnaHQgbW0tcmVzaXplLXZlciBtbS1yZXNpemUnPgogICAgICAgIDxhIGNsYXNzPSdtbS1zaHJpbmsnPiYjODU5Mjs8L2E+CiAgICAgICAgPGEgY2xhc3M9J21tLWV4dGVuZCc+JiM4NTk0OzwvYT4KICAgIDwvZGl2Pgo8L2Rpdj4K"));

/* Including packs: interactorResources/viewWidget.html */
load.provideResource("interactorResources/viewWidget.html", atob("PGRpdiBjbGFzcz0nbW0tdmlldy13aWRnZXQnPgogICAgPCEtLSYjMTI4MjY5Oy0tPlpvb206IDxhIGNsYXNzPSdtbS16b29tLWluJyB0aXRsZT0nWm9vbSBJbic+KzwvYT4gPGEgY2xhc3M9J21tLXpvb20tb3V0JyB0aXRsZT0nWm9vbSBPdXQnPiYjOTQ3Mjs8L2E+CjwvZGl2Pgo="));

/* Including packs: mm.structs.AbstractGraph, mm.structs.emptyGraph */
load.addDependency("about:blank", ["mm.structs.AbstractGraph", "mm.structs.emptyGraph"], ["mm.structs.ObjectsData", "mm.structs.TypesFile", "mm.structs.emptyGraph", "mm.utils.getfile"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

load.provide("mm.structs.emptyGraph", function () {
	/** Just a simple, emtpy graph
  * 
  * For use when a graph is needed, but none is provided.
  * @type object
  */
	return {
		"version": 1,
		"nodes": [],
		"edges": [],
		"canvas": {
			"height": 200,
			"width": 200
		}
	};
});

load.provide("mm.structs.AbstractGraph", function () {
	var TypesFile = load.require("mm.structs.TypesFile");
	var ObjectsData = load.require("mm.structs.ObjectsData");
	var getfile = load.require("mm.utils.getfile");
	var emptyGraph = load.require("mm.structs.emptyGraph");

	/** This represents a graph. */
	return function () {
		function AbstractGraph(objectsUrl, typesUrl) {
			_classCallCheck(this, AbstractGraph);

			/** True if this object is ready for use (that is, the files have been downloaded)
    * 
    * @type boolean
    */
			this.ready = false;

			/** When downloaded, the types file object.
    * 
    * @type mm.structs.TypesFile
    * @private
    */
			this.types = null;
			/** When downloaded, the objects data object.
    * 
    * @type mm.structs.ObjectsData
    * @private
    */
			this.objects = null;

			/** The url of the types file
    * @type string
    * @private
    */
			this._typesUrl = typesUrl;
			/** The url of the objects file
    * @type string
    * @private
    */
			this._objectsUrl = objectsUrl;
		}

		/** Downloads the data from the files passed in the constructor
   * 
   * @async
   */


		AbstractGraph.prototype.load = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				var _this = this;

				var typesf;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!this._objectsUrl) {
									_context.next = 4;
									break;
								}

								return _context.abrupt("return", Promise.all([getfile(this._typesUrl), getfile(this._objectsUrl)]).then(function (contents) {
									_this.types = new TypesFile(typeof contents[0] === "string" ? JSON.parse(contents[0]) : contents[0]);
									_this.objects = new ObjectsData(typeof contents[1] === "string" ? JSON.parse(contents[1]) : contents[1], _this.types);

									_this.ready = true;
								}));

							case 4:
								_context.next = 6;
								return getfile(this._typesUrl);

							case 6:
								typesf = _context.sent;


								this.types = new TypesFile(typeof typesf === "string" ? JSON.parse(typesf) : typesf);
								this.objects = new ObjectsData(emptyGraph, this.types);
								this.ready = true;

							case 10:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function load() {
				return ref.apply(this, arguments);
			}

			return load;
		}();

		/** Deletes the node with the given id, and any edges that happen to link it.
   * 
   * Then returns a special object that can be used to recover them.
   * 
   * You can either specify one node, or multiple nodes. If specifying multiple, they all get deleted.
   * 
   * @param {int|node|array<node>} id The node(s) to delete.
   * @return {object} A recovery object
   */


		AbstractGraph.prototype.cascadingRemoveNode = function cascadingRemoveNode(nodes) {
			var _this2 = this;

			var recovery = { edges: [], nodes: [] };

			if (!Array.isArray(nodes)) nodes = [nodes];
			nodes = nodes.map(function (x) {
				return typeof x == "number" ? x : x.id;
			});

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var n = _step.value;

					var edges = this.objects.getEdgesConnectedToNode(n);
					recovery.edges = recovery.edges.concat(edges.map(function (e) {
						return e.toJson();
					}));
					edges.forEach(function (e) {
						return _this2.objects.removeEdge(e.id);
					});

					var node = this.objects.getNode(n);
					recovery.nodes.push(node.toJson());
					this.objects.removeNode(n);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return recovery;
		};

		/** Recovers the nodes and edges deleted by cascadingRemoveNode
   * 
   * @param {object} recover The recovery object.
   */


		AbstractGraph.prototype.cascadingRemoveNodeRecovery = function cascadingRemoveNodeRecovery(recover) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = recover.nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var n = _step2.value;

					this.objects.insertNode(n);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = recover.edges[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var e = _step3.value;

					this.objects.insertEdge(e);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		};

		/** Returns an array of links where both ends are connected to a node in the given set.
   * 
   * @param {array<mm.structs.ObjectNode>} nodes The set of nodes to find edges for.
   * @return {array<mm.structs.ObjectEdge>} All edges connected between any nodes.
   */


		AbstractGraph.prototype.connectedEdges = function connectedEdges(nodes) {
			return this.objects.edges.filter(function (e) {
				return nodes.some(function (n) {
					return e.origin == n.id;
				}) && nodes.some(function (n) {
					return e.dest == n.id;
				});
			});
		};

		return AbstractGraph;
	}();
});
/* Including packs: mm.utils.getfile */
load.addDependency("about:blank", ["mm.utils.getfile"], [], 0, 0);

"use strict";

load.provide("mm.utils.getfile", function () {
	/** Given a URL, returns a promise that resolves to the contents of the file given by that URL.
  * 
  * The value fulfilled is the same type (and object) as returned from $.get.
  * 
  * Works on data urls, provided they are encoded in ascii.
  * 
  * @param {string} The url to get.
  * @return {Promise(*)} A promise that resolves when the file is finished downloading. The object is from $.get.
  */
	return function (url) {
		if (url.startsWith("data:")) {
			// Data URL
			return Promise.resolve(url.split(",")[1]);
		} else {
			// Not a data url
			// Would like to have used fetch, but babeljs can't figure that out...
			return new Promise(function (f, r) {
				return void $.get(url, "", f).fail(r);
			});
		}
	};
});
/* Including packs: interactorResources/editHelp.html */
load.provideResource("interactorResources/editHelp.html", atob("PGRpdiBjbGFzcz0nbW0tZWRpdC1oZWxwIGhpZGRlbic+CiAgICA8ZGl2IGNsYXNzPSdtbS1lZGl0LWhlbHAtY29udGVudCc+CiAgICAgICAgPGRpdiBjbGFzcz0nbGVmdCc+CiAgICAgICAgICAgIDxoMj5Xb3JraW5nIHdpdGggb2JqZWN0czwvaDI+CiAgICAgICAgICAgIDx1bD4KICAgICAgICAgICAgICAgIDxsaT48Yj5DbGljayBhbmQgZHJhZzwvYj4gdG8gbW92ZSBvYmplY3RzPC9saT4KICAgICAgICAgICAgICAgIDxsaT48Yj5DbGljayBhbiBvYmplY3Q8L2I+IHRvIGVkaXQgdGhlIG9iamVjdDwvbGk+CiAgICAgICAgICAgICAgICA8bGk+PGI+RG91YmxlIGNsaWNrIG9uIGFuIGVtcHR5IHNwYWNlPC9iPiB0byBjcmVhdGUgYSBuZXcgb2JqZWN0PC9saT4KICAgICAgICAgICAgPC91bD4KICAgICAgICAgICAgCiAgICAgICAgICAgIDxoMj5Xb3JraW5nIHdpdGggYXJyb3dzPC9oMj4KICAgICAgICAgICAgPHVsPgogICAgICAgICAgICAgICAgPGxpPjxiPkNsaWNrIGFuIGFycm93PC9iPiB0byBlZGl0IHRoZSBhcnJvdwogICAgICAgICAgICAgICAgPGxpPjxiPkRyYWcgZnJvbSB0aGUgZ3JlZW4gZG90PC9iPiBvbiBhIG5vZGUgdG8gY3JlYXRlIGEgbmV3IGFycm93PC9saT4KICAgICAgICAgICAgICAgIDxsaT48Yj5EcmFnIGFuIGFycm93PC9iPiB0byBjcmVhdGUgYSBwb2ludCBmb3IgaXQgdG8gY3VydmUgYXJvdW5kPC9saT4KICAgICAgICAgICAgICAgIDxsaT48Yj5EcmFnIHRoZSBncmVlbiBwb2ludCBvbiBhbiBhcnJvdzwvYj4gdG8gY2hhbmdlIHRoZSBjdXJ2ZSBwb2ludDwvbGk+CiAgICAgICAgICAgICAgICA8bGk+PGI+RHJhZyB0aGUgZ3JlZW4gZW5kcyBvZiBhbiBhcnJvdzwvYj4gdG8gY2hhbmdlIHRoZSBjb25uZWN0aW9ucyBvZiB0aGUgYXJyb3c8L2xpPgogICAgICAgICAgICA8L3VsPgogICAgICAgICAgICAKICAgICAgICAgICAgPGgyPk90aGVyPC9oMj4KICAgICAgICAgICAgPHVsPgogICAgICAgICAgICAgICAgPGxpPjxiPkdvIHRvIHRoZSBlZGdlIGFuZCBjbGljayBhbiBhcnJvdzwvYj4gdG8gcmVzaXplIHlvdXIgZHJhd2luZyBhcmVhPC9saT4KICAgICAgICAgICAgPC91bD4KICAgICAgICA8L2Rpdj4KICAgICAgICAKICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodCc+CiAgICAgICAgICAgIDxoMj5NdWx0aXBsZSBzZWxlY3Rpb248L2gyPgogICAgICAgICAgICA8dWw+CiAgICAgICAgICAgICAgICA8bGk+PGI+SG9sZCBzaGlmdCBhbmQgY2xpY2s8L2I+IHRvIHNlbGVjdCBtdWx0aXBsZSBvYmplY3RzPC9saT4KICAgICAgICAgICAgICAgIDxsaT48Yj5EcmFnIHdpdGggdGhlIHJpZ2h0IG1vdXNlIGJ1dHRvbjwvYj4gdG8gYWxzbyBzZWxlY3QgbXVsdGlwbGUgb2JqZWN0czwvbGk+CiAgICAgICAgICAgICAgICA8bGk+PGI+UHJlc3MgdGhlIGVzY2FwZSBrZXkgb3IgY2xpY2sgYW55d2hlcmU8L2I+IHRvIGNsZWFyIG11bHRpcGxlIHNlbGVjdGlvbjwvbGk+CiAgICAgICAgICAgICAgICA8bGk+PGI+UHJlc3MgdGhlIGRlbGV0ZSBrZXk8L2I+IHRvIGRlbGV0ZSBtdWx0aXBsZSBub2RlcyB0aGF0IGFyZSBzZWxlY3RlZDwvbGk+CiAgICAgICAgICAgIDwvdWw+CiAgICAgICAgICAgIDxoMj5LZXlib2FyZCBTaG9ydGN1dHM8L2gyPgogICAgICAgICAgICA8dWw+CiAgICAgICAgICAgICAgICA8bGk+PGI+Q1RSTCtBOjwvYj4gU2VsZWN0IEFsbDwvbGk+CiAgICAgICAgICAgICAgICA8bGk+PGI+Q1RSTCtaOjwvYj4gVW5kbzwvbGk+CiAgICAgICAgICAgICAgICA8bGk+PGI+Q1RSTCtSOjwvYj4gUmVkbzwvbGk+CiAgICAgICAgICAgIDwvdWw+CiAgICAgICAgPC9kaXY+CiAgICAgICAgCiAgICAgICAgPGRpdiBzdHlsZT0nY2xlYXI6Ym90aCc+CiAgICAgICAgICAgIENsaWNrIHRvIGRpc21pc3MgdGhpcyBoZWxwLgogICAgICAgIDwvZGl2PgogICAgPC9kaXY+CjwvZGl2Pgo="));

/* Including packs: mm.Editor */
load.addDependency("about:blank", ["mm.Editor"], ["mm.utils.getfile", "mm.utils.strf"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

load.provide("mm.Editor", function () {
	var getfile = load.require("mm.utils.getfile");
	var strf = load.require("mm.utils.strf");

	/** Handlers for undo events
  * 
  * Keys are the event type and values are [undo, redo] pairs as per `Editor.registerUndo`.
  * 
  * @type Map<string, array<function(string, object, mm.structs.abstractGraph)>>
  * @private
  */
	var _handlers = new Map();

	/** The editor class manages the state of editing
  * 
  * It includes the undo stack, and methods for undoing and redoing.
  * 
  * @param {abstractGraph} The abstract graph on which this editor edits.
  * @param {interactor} The interactor which is using this editor.
  */

	var Editor = function () {
		function Editor(abstractGraph) {
			_classCallCheck(this, Editor);

			/** The abstract graph on which this editor edits
    * 
    * @type mm.structs.AbstractGraph
    * @private
    */
			this._abstractGraph = abstractGraph;

			/** The undo stack
    * 
    * When an action occurs that can be undone, an entry is pushed onto this stack.
    * 
    * Entries on this stack are [type, arg] pairs.
    * @type array<array>
    * @private
    */
			this._undoStack = [];

			/** The current location in the undo stack
    * 
    * @type integer
    * @private
    */
			this._p = -1;

			window.editor = this;
		}

		/** Adds a new entry to the undo stack
   * 
   * @param {string} type The type of event to add to the stack.
   * @param {object} arg The argument to this event, will be used when undoing and redoing.
   */


		Editor.prototype.addToUndoStack = function addToUndoStack(type, arg) {
			console.log("Added event of type " + type + ", %o", arg);

			if (!_handlers.has(type)) throw TypeError("Tried to add an undo event of type " + type + ", but no handler exists!");

			this._undoStack.splice(this._p + 1);
			this._undoStack.push([type, arg]);
			this._p++;
		};

		/** Empties the undo stack */


		Editor.prototype.clearUndoStack = function clearUndoStack() {
			this._undoStack = [];
		};

		/** Performs an undo operation
   * 
   * @async
   */


		Editor.prototype.undo = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				var now;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(this._p == -1)) {
									_context.next = 2;
									break;
								}

								return _context.abrupt("return");

							case 2:
								now = this._undoStack[this._p];

								this._p--;

								_handlers.get(now[0])[0](now[0], now[1], this._abstractGraph);

								this.printStack();

							case 6:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function undo() {
				return ref.apply(this, arguments);
			}

			return undo;
		}();

		/** Performs a redo operation
   * 
   * @async
   */


		Editor.prototype.redo = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
				var now;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!(this._p == this._undoStack.length - 1)) {
									_context2.next = 2;
									break;
								}

								return _context2.abrupt("return");

							case 2:
								this._p++;
								now = this._undoStack[this._p];


								_handlers.get(now[0])[1](now[0], now[1], this._abstractGraph);

								this.printStack();

							case 6:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function redo() {
				return ref.apply(this, arguments);
			}

			return redo;
		}();

		/** Checks whether an undo is possible
   * 
   * @return {boolean} Whether there is something that can be undone.
   */


		Editor.prototype.canUndo = function canUndo() {
			return this._p >= 0;
		};

		/** Checks whether a redo is possible
   * 
   * @return {boolean} Whether there is something that can be redone.
   */


		Editor.prototype.canRedo = function canRedo() {
			return this._p < this._undoStack.length - 1;
		};

		/** Prints the undo stack to the console
   * 
   * For debuggery.
   */


		Editor.prototype.printStack = function printStack() {
			console.log("Undo stack:");
			for (var i = 0; i < this._undoStack.length; i++) {
				console.log((this._p == i ? "*" : " ") + " " + i + ": " + this._undoStack[i][0]);
			}
		};

		return Editor;
	}();

	;

	/** Adds a new possible undo and redo event and handlers
  * 
  * Both handlers will be given the type string and the object added.
  * 
  * @param {string} type The name of the type.
  * @param {async function(string, objec, mm.structs.abstractGrapht)} undo The function to call to undo this event.
  * @param {async function(string, objec, mm.structs.abstractGrapht)} redo The funciton to call to redo this event.
  * @static
  */
	Editor.registerUndo = function (type, undo, redo) {
		_handlers.set(type, [undo, redo]);
	};

	return Editor;
});
/* Including packs: mm.Renderer */
load.addDependency("about:blank", ["mm.Renderer"], ["mm.structs.ObjectsData", "mm.structs.TypesFile", "mm.textGen"], 0, 0);

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

load.provide("mm.Renderer", function () {
	var ObjectsData = load.require("mm.structs.ObjectsData");
	var TypesFile = load.require("mm.structs.TypesFile");
	var textGen = load.require("mm.textGen");

	/** Text size
  * 
  * @type integer
  * @private
  * @const
  */
	var _TEXT_SIZE = 14;

	/** Rectangle height
  * 
  * @type integer
  * @const
  * @private
  */
	var _NODE_HEIGHT = 30;

	/** The basic template to be inserted into the node when it is set up.
  * 
  * @const
  * @private
  * @type string
  */
	var _TEMPLATE = "<div class='mm-inner'>\n\t<div class='mm-paper'>\n\t\t\n\t</div>\n</div>";

	/** The node type for nodes in the graph
  * 
  * Similar to a normal rectangle, only it adds a small circle for creating edges from.
  * @type joint.shape
  * @private
  */
	var _node = joint.shapes.basic.Generic.extend({
		markup: "<g class=\"rotatable\">\n\t\t\t\t\n\t\t\t\t<g class=\"scalable\"><rect rx='10' ry='10'/></g><text/><g class='outPorts'>\n\t\t\t\t\t<circle class='mag mag-a' y-alignment='middle' magnet='true' ref='rect'/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t",

		defaults: joint.util.deepSupplement({
			type: 'basic.Rect',
			attrs: {
				'rect': { 'follow-scale': true, width: 100, height: _NODE_HEIGHT },
				'text': {
					'font-size': _TEXT_SIZE, 'ref-x': 0.5, 'ref-y': 0.5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle',
					fill: "black"
				},
				'.outPorts circle': {
					r: 5,
					fill: '#1ABC9C', // Same colour as jointjs
					ref: 'rect',
					"ref-x": 0.999,
					"ref-y": 0.5
				}
			}
		}, joint.shapes.basic.Generic.prototype.defaults)
	});

	/** The counter for new element ids
  * 
  * Increased every time a new element is set up, in order for each to have a unique number.
  * @type integer
  * @private
  */
	var _idCount = 1;

	/** This is given a HTML node (of type graph-display) and creates all the necessary HTML children and updates it 
  * if needed.
  * 
  * @param {HTMLElement} node The node to use. Must be a plain HTMLElement, not a JQuery object.
  */
	return function () {
		function Renderer(node, editor) {
			_classCallCheck(this, Renderer);

			/** The HTML node
    * 
    * @type HTMLElement
    */
			this.node = node;

			if (!this.node.id) this.node.id = "_mm_root_" + _idCount++;
			/** A unique ID for this renderer
    * 
    * This will be the id (which is created if it doesn't exist, and used if it does) of the graph-display
    *  element.
    * 
    * @type integer|string
    * @private
    */
			this._id = this.node.id;

			/** The joint.js graph used for this node
    * 
    * Null until it is inited.
    * 
    * @type ?joint.dia.Graph
    * @private
    */
			this._graph = null;
			/** The joint.js paper used for this node
    * 
    * Null until it is inited.
    * 
    * @type ?joint.dia.Paper
    * @private
    */
			this._paper = null;

			/** The interactor for this renderer.
    * 
    * Null until it is added by setInteractor.
    * 
    * @type ?mm.Interactor
    * @private
    */
			this._interactor = null;

			/** True if this has been inited
    * 
    * @type boolean
    */
			this.inited = false;

			/** The scale of this graph
    * 
    * All locations of objects are multiplied by this amount.
    * @type float
    * @default 1.0
    * @private
    */
			this._scale = 1.0;

			/** The width of the current diagram
    * 
    * @type int
    * @private
    */
			this._width = 0;
			/** The height of the current diagram
    * 
    * @type int
    * @private
    */
			this._height = 0;

			/** The editor object
    * 
    * Null if editing is disabled.
    * @type ?dusk.Editor
    * @private
    */
			this._editor = editor;

			/** A mapping of node ids to their respective jointjs nodes
    * 
    * @type Map<int, _node>
    * @private
    */
			this._nodeIds = new Map();
			/** A mapping of edge ids to their respective jointjs links
    * 
    * @type Map<int, joint.dia.Link>
    * @private
    */
			this._edgeIds = new Map();
		}

		/** Given some objects, renders them from scratch.
   * 
   * @param {mm.structs.ObjectsData} objects The objects to render with this.
   */


		Renderer.prototype.rerender = function rerender(objects) {
			var _this = this;

			if (!this.inited) this.init();

			// Set dimensions
			this._width = objects.canvas.width;
			this._height = objects.canvas.height;
			this._paper.setDimensions(objects.canvas.width * this._scale, objects.canvas.height * this._scale);

			this._paper.options.gridSize = this._scale * 10;

			this._graph.clear();

			this._nodeIds = new Map();
			this._edgeIds = new Map();

			var rootScale = Math.sqrt(this._scale);

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = objects.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var n = _step.value;

					if (objects.isHidden(n) && !this._editor) continue;

					var tts = textGen.wrapText(textGen.nodeText(n), n.width);

					var rect = new _node({
						position: { x: n.x * this._scale, y: n.y * this._scale },
						attrs: n.type.nodeAttr,
						outPorts: ["mag-a"],
						size: { width: n.width * rootScale, height: _NODE_HEIGHT * rootScale }
					});

					rect.attr("text/font-size", _TEXT_SIZE * rootScale);
					rect.attr("text/text", tts);

					this._graph.addCell(rect);
					this._nodeIds.set(n.id, rect);
					this._interactor.addNode(this, rect, n);

					if (objects.isHidden(n)) {
						$(this.getSvgNode(n.id)).addClass("hidden-node");
					}
				}

				// Edges
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = objects.edges[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var e = _step2.value;

					if (objects.isHidden(e) && !this._editor) continue;

					var link = new joint.dia.Link({
						source: { id: this._nodeIds.get(e.origin).id },
						target: { id: this._nodeIds.get(e.dest).id },
						vertices: e.points.map(function (_ref) {
							var _ref2 = _slicedToArray(_ref, 2);

							var x = _ref2[0];
							var y = _ref2[1];
							return { x: x * _this._scale, y: y * _this._scale };
						})
					});

					link.attr({
						"path": {},
						".marker-target": { "d": "M 10 0 L 0 5 L 10 10 z" }
					});
					if (e.points.length) link.set("connector", { name: "smooth" });
					link.attr(e.type.attr);

					this._graph.addCell(link);
					this._edgeIds.set(e.id, link);
					this._interactor.addEdge(this, link, e);

					// Text
					if ((e.text || this._editor) && this._scale > 0.7) {
						link.label(0, {
							position: 0.5,
							attrs: e.type.textAttr
						});

						link.label(0, { position: 0.5, attrs: { rect: { style: "scale:1.3" }, text: { text: e.text } } });
					}

					if (objects.isHidden(e)) {
						$(this.getSvgEdge(e.id)).addClass("hidden-edge");
					}
				}

				// Grid pattern
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			$("#" + this._id + "-gridpatt").attr("width", 16 * this._scale);
			$("#" + this._id + "-gridpatt").attr("height", 16 * this._scale);
			$("#" + this._id + "-gridpatt path").attr("d", "M %i 0 L 0 0 0 %i".replace(/\%i/g, 16 * this._scale));
		};

		/** Inits the element, by creating the needed elements inside it */


		Renderer.prototype.init = function init() {
			this.node.innerHTML = _TEMPLATE;
			this.node.classList.add("mm-root");
			if (this._editor) {
				this.node.classList.add("mm-edit");
			} else {
				this.node.classList.add("mm-noedit");
			}

			// Set up jointjs
			var graph = this._graph = new joint.dia.Graph();

			var paper = this._paper = new joint.dia.Paper({
				el: $("#" + this._id + " .mm-paper"),
				model: graph,
				gridSize: 10,
				width: 0,
				height: 0,
				interactive: this._editor,
				snapLinks: true,
				linkPinning: false,
				perpendicularLinks: true,
				multiLinks: false
			});

			// Now set the grid background
			var svg = $(this.node).find("svg")[0];

			var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
			defs.innerHTML = "\n\t\t\t\t<pattern id='" + this._id + "-gridpatt' width='16' height='16' patternUnits='userSpaceOnUse'>\n\t\t\t\t\t<path d='M 16 0 L 0 0 0 16' fill='none' stroke='#cccccc' stroke-width='0.5'/>\n\t\t\t\t</pattern>";
			svg.insertBefore(defs, svg.firstChild);

			var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttribute("width", "100%");
			rect.setAttribute("height", "100%");
			if (window.navigator.userAgent.includes("MSIE ")) {
				// IE doesn't support this sort of thing
				rect.setAttribute("fill", "#ffffff");
			} else {
				rect.setAttribute("fill", "url(#" + this._id + "-gridpatt)");
			}

			rect.setAttribute("class", "mm-background-grid");
			svg.insertBefore(rect, defs);

			this._interactor.addCanvas(this, this.node, this._graph);
			this.inited = true;
		};

		/** Sets the interactor for this Renderer
   * 
   * @param {mm.Interactor} interactor The interactor
   */


		Renderer.prototype.setInteractor = function setInteractor(interactor) {
			this._interactor = interactor;
		};

		/** Scales the jointJS paper
   * 
   * @param {float} scale The amount to scale the paper.
   */


		Renderer.prototype.scale = function scale(_scale) {
			this._paper.scale(_scale, _scale);
			this._paper.setDimensions(this._width * _scale, this._height * _scale);
		};

		/** Returns the root node for this renderer
   * 
   * @return {HTMLElement} The root node
   */


		Renderer.prototype.getRoot = function getRoot() {
			return this.node;
		};

		/** Returns the SVGNode for the given (graph) node id
   * 
   * @param {int} The node id.
   * @return {SVGGElement} The SVG node.
   */


		Renderer.prototype.getSvgNode = function getSvgNode(id) {
			if (!this._nodeIds.get(id)) return null;
			return $("[model-id=\"" + this._nodeIds.get(id).id + "\"]")[0];
		};

		/** Returns the node given by the JointJS ID
   * 
   * @param {string} jid The node's JointJS ID.
   * @return {mm.structs.ObjectNode} The graph node.
   */


		Renderer.prototype.getNodeFromJoint = function getNodeFromJoint(jid) {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this._nodeIds[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var _step3$value = _slicedToArray(_step3.value, 2);

					var id = _step3$value[0];
					var v = _step3$value[1];

					if (v.id == jid) return id;
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		};

		/** Returns the edge given by the JointJS ID
   * 
   * @param {string} jid The edge's JointJS ID.
   * @return {mm.structs.ObjectEdge} The graph edge.
   */


		Renderer.prototype.getEdgeFromJoint = function getEdgeFromJoint(jid) {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this._edgeIds[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _step4$value = _slicedToArray(_step4.value, 2);

					var id = _step4$value[0];
					var v = _step4$value[1];

					if (v.id == jid) return id;
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		};

		/** Returns the SVGNode for the given (edge) node id
   * 
   * @param {int} The edge id.
   * @return {SVGGElement} The SVG node.
   */


		Renderer.prototype.getSvgEdge = function getSvgEdge(id) {
			return $("[model-id=\"" + this._edgeIds.get(id).id + "\"]")[0];
		};

		/** Sets the scale to display this diagram
   * 
   * @param {float} The new scale.
   */


		Renderer.prototype.setScale = function setScale(scale) {
			this._scale = scale;
		};

		/** Returns the scale this diagram is being desplayed in
   * 
   * @return {float} The scale.
   */


		Renderer.prototype.getScale = function getScale() {
			return this._scale;
		};

		Renderer.prototype.updateHidden = function updateHidden(objects, node) {
			var _this2 = this;

			var edges = objects.getEdgesConnectedToNode(node.id);

			if (node.hidden) {
				$(this.getSvgNode(node.id)).addClass("hidden-node");
				edges.forEach(function (e) {
					return $(_this2.getSvgEdge(e.id)).addClass("hidden-edge");
				});
			} else {
				$(this.getSvgNode(node.id)).removeClass("hidden-node");
				edges.forEach(function (e) {
					if (!objects.isHidden(e)) $(_this2.getSvgEdge(e.id)).removeClass("hidden-edge");
				});
			}
		};

		return Renderer;
	}();
});
/* Including packs: mm.textGen */
load.addDependency("about:blank", ["mm.textGen"], ["mm.utils.strf"], 0, 0);

"use strict";

/** Namespace for text generation functions
 * 
 * Basically has a number of functions that take in nodes and then output a specific text.
 * 
 */

load.provide("mm.textGen", function () {
	var strf = load.require("mm.utils.strf");

	var textGen = {};

	/** Captialises the first character of the given string
  * 
  * @param {string} str The input string.
  * @return string The captialised input string.
  */
	textGen.capitalise = function (str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	/** Generates text for displaying on the actual nodes on the diagram
  * 
  * Uses the `nodeText` template from the types file.
  * 
  * @param {mm.structs.ObjectNode} node The node to generate text for.
  * @return {string} The text to display on the node.
  */
	textGen.nodeText = function (node) {
		return strf(node.type.nodeText, node);
	};

	/** Generates text for displaying on the node's "short" details plane
  * 
  * That is, the first part that is visible on rolling over the node.
  * 
  * Uses the `viewText` template from the types file.
  * 
  * @param {mm.structs.ObjectNode} node The node to generate text for.
  * @return {string} The text to display on the details plane.
  */
	textGen.detailsShort = function (node) {
		return strf(node.type.viewText, node);
	};

	/** Generates text for displaying on the node's "long" details plane
  * 
  * That is, the extra information visible on clicking the node.
  * 
  * Uses the `viewAddText` template from the types file.
  * 
  * @param {mm.structs.ObjectNode} node The node to generate text for.
  * @return {string} The text to display on the details plane.
  */
	textGen.detailsLong = function (node) {
		return strf(node.type.viewAddText, node);
	};

	/** Generates HTML for displaying in the node's type select widget
  * 
  * @param {mm.structs.ObjectNode} node The node to generate options for.
  * @param {mm.structs.TypesFile} typesFile The types file containing the options.
  * @return {string} The text to display as the select value.
  */
	textGen.editSelect = function (node, types) {
		var hold = "";

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = types.types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var x = _step.value;

				hold += "<option value='" + x.name + "' " + (x != node.type ? "" : "selected") + ">" + textGen.capitalise(x.name) + "</option>";
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return hold;
	};

	/** Generates HTML for displaying in edge's type select widget
  * 
  * @param {mm.structs.ObjectNode} edge The edge to generate options for.
  * @param {mm.structs.TypesFile} typesFile The types file containing the options.
  * @return {string} The text to display as the select value.
  */
	textGen.editEdgeSelect = function (edge, types) {
		var hold = "";

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = types.arrowTypes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var x = _step2.value;

				hold += "<option value='" + x.name + "' " + (x != edge.type ? "" : "selected") + ">" + textGen.capitalise(x.name) + "</option>";
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return hold;
	};

	/** Generates HTML for displaying in the node's edit form
  * 
  * @param {mm.structs.ObjectNode} node The node to generate a form for.
  * @return {string} The text to display as the select value.
  */
	textGen.editForm = function (node) {
		var hold = "";

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = node.type.fields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var x = _step3.value;

				hold += "<div class='mm-fieldpair'>\n<span class='mm-fieldname'>" + textGen.capitalise(x.name) + "</span>\n<span class='mm-fieldvar'>";

				var v = node.fields[x.name];
				if (v === undefined) v = "";

				switch (x.type) {
					case "text":
						hold += "<input type='text' name='" + x.name + "' value='" + v + "'/>";
						break;

					case "url":
						hold += "<input type='url' name='" + x.name + "' value='" + v + "'/>";
						break;

					case "email":
						hold += "<input type='email' name='" + x.name + "' value='" + v + "'/>";
						break;

					case "blockText":
						hold += "<textarea name='" + x.name + "'>" + v + "</textarea>";
						break;

					case "date":
						hold += "<input type='date' name='" + x.name + "' value='" + v.split("T")[0] + "'/>";
						break;
				}

				hold += "</span></div>";
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		return hold;
	};

	/** Returns the first line of the text if it exceeds the specified width.
  * 
  * @param {string} str The string to break.
  * @param {int} size The width of the container
  * @return {string} The first line if it is too long.
  */
	textGen.wrapText = function (str, size) {
		size = { width: size };
		var bt = joint.util.breakText;

		var lines = bt(str, size);

		return lines.split("\n")[0];
	};

	return textGen;
});
/* Including packs: mm.utils.strf */
load.addDependency("about:blank", ["mm.utils.strf"], [], 0, 0);

"use strict";

load.provide("mm.utils.strf", function () {
	load.requireExternal("libs/fecha.min.js");

	/** An object containing all the functions used when formatting strings
  * 
  * @type object<string, function(string, ?string, string):string>
  * @private
  */
	var _fns = {
		link: function link(x, a, type) {
			if (type == "url") return "<a href='" + encodeURI(x) + "'>" + x + "</a>";
			if (type == "email") return "<a href='mailto:" + encodeURI(x) + "'>" + x + "</a>";
			return x;
		},
		singleLine: function singleLine(x) {
			return x.split("\n")[0];
		},
		cap: function cap(x, arg) {
			return x.substring(0, arg);
		},
		cape: function cape(x, arg) {
			return x.length >= arg ? x.substring(0, arg - 3) + "..." : x;
		},
		dformat: function dformat(x, arg) {
			var d = new Date(x);
			if (isNaN(d.getTime())) return "(Invalid date)";
			return fecha.format(d, arg);
		},
		cond: function cond(x, arg, type, node) {
			if (x.length > 0) {
				return arg;
			}

			return "";
		}
	};

	/** Formats a string, given a template and an objects node
  * 
  * The format is documented in docs/formatting.
  * 
  * @param {string} template The tamplate of the string.
  * @param {mm.structs.ObjectNode} node The object node to format.
  * @return {string} The formatted string.
  */
	var strf = function strf(template, node) {
		return template.replace(/{(.*?)}/g, function (t) {
			t = t.substring(1, t.length - 1);

			if ("{}".includes(t)) return t;

			if (t.includes(":")) {
				var fn = t.split(":", 1)[0];
				var rhs = t.substring(fn.length + 1);

				var varname = rhs.split(",", 1)[0];
				var arg = rhs.substring(varname.length + 1);

				var f = node.getFieldType(varname);
				if (!f) return "(null)";
				var v = node.fields[varname];

				if (v === undefined) return "(undefined)";

				return _fns[fn](v, arg, f.type, node);
			} else {
				var _f = node.getFieldType(t);
				if (!_f) return "(null)";
				var _v = node.fields[t];

				switch (_f.type) {
					case "text":
					case "blockText":
					case "url":
					case "email":
						return _v;
						break;

					case "date":
						return _fns.dformat(_v, "DD/MM/YY");
						break;

					default:
						return "(unknown type)";
				}
			}
		});
	};

	// Testing. TODO: Remove this
	window.strf = strf;
	return strf;
});
/* Including packs: mm.interactions.EditHelp */
load.addDependency("about:blank", ["mm.interactions.EditHelp"], ["mm.interactions.Interaction"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.EditHelp", function () {
	var Interaction = load.require("mm.interactions.Interaction");

	/** Interactor for showing and hiding the help screen
  * 
  * @extends mm.Interaction
  */
	return function (_Interaction) {
		_inherits(EditHelp, _Interaction);

		function EditHelp() {
			_classCallCheck(this, EditHelp);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		EditHelp.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, node) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								// Show it when the button is clicked
								$(node).find(".mm-help-button").click(function (e) {
									return $(node).find(".mm-edit-help").removeClass("hidden");
								});

								// And hide it when the panel is clicked
								$(node).find(".mm-edit-help").click(function (e) {
									return $(node).find(".mm-edit-help").addClass("hidden");
								});

							case 2:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addCanvas(_x, _x2) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return EditHelp;
	}(Interaction);
});
/* Including packs: mm.interactions.NodeEdit */
load.addDependency("about:blank", ["mm.interactions.NodeEdit"], ["mm.Editor", "mm.interactions.Interaction", "mm.textGen"], 0, 0);

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.NodeEdit", function () {
	var Interaction = load.require("mm.interactions.Interaction");
	var textGen = load.require("mm.textGen");
	var Editor = load.require("mm.Editor");

	Editor.registerUndo("node_edit", function (type, arg, graph) {
		graph.objects.getNode(arg.id).update(arg.old, ["width", "type", "fields", "hidden"]);
	}, function (type, arg, graph) {
		graph.objects.getNode(arg.id).update(arg["new"], ["width", "type", "fields", "hidden"]);
	});

	Editor.registerUndo("node_delete", function (type, arg, graph) {
		graph.cascadingRemoveNodeRecovery(arg["recover"]);
	}, function (type, arg, graph) {
		graph.cascadingRemoveNode(arg.id);
	});

	Editor.registerUndo("node_add", function (type, arg, graph) {
		graph.objects.removeNode(arg.id);
	}, function (type, arg, graph) {
		graph.objects.insertNode(arg["node"]);
	});

	/** Interactor for changing the content of nodes
  * 
  * This does not handle changing their location (which is in NodeMove), this is purely about their type, content,
  *  addition and deletion.
  * 
  * @extends mm.Interaction
  */
	return function (_Interaction) {
		_inherits(NodeEdit, _Interaction);

		function NodeEdit(interactor, abstractGraph, editor, state) {
			_classCallCheck(this, NodeEdit);

			/** The node currently being edited
    * 
    * @type ?mm.structs.ObjectNode
    */

			var _this = _possibleConstructorReturn(this, _Interaction.call(this, interactor, abstractGraph, editor, state));

			_this._editingNode = null;
			/** The properties of the editing node from when it started editing
    * 
    * So we can revert to this if there is a cancel.
    * 
    * @type ?object
    */
			_this._editingBackup = null;
			return _this;
		}

		NodeEdit.prototype.addNode = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, joint, node) {
				var _this2 = this;

				var svgNode, x, y;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								Interaction.prototype.addNode.call(this, renderer, joint, node);

								// Get the SVG element
								svgNode = renderer.getSvgNode(node.id);

								// The x and y location when the mouse button was pressed

								x = 0;
								y = 0;


								if (this._editor) $(svgNode).on("mousedown", function (e) {
									x = node.x;
									y = node.y;
								});

								if (this._editor) $(svgNode).on("click", function (e) {
									if (_this2._editingNode) {
										// Do nothing..?
									}
									if (e.shiftKey || e.ctrlKey) return; // Multiselection handles this

									// Check if the node was dragged, if the location of the mouse is different than the location it was
									//  when clicked, continue
									if (node.x != x || node.y != y) return;

									// Open the details panel and set up editing
									_this2._interactor.loadDetails(node, renderer, true, true, true, _this2._save.bind(_this2, renderer));
									_this2._setEditing(node);

									// Focus on the first input element
									var panel = $(svgNode).parents(".mm-root").find(".mm-details-panel");
									panel.find("input").first().focus();

									e.preventDefault();
									e.stopPropagation();
								});

							case 6:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addNode(_x, _x2, _x3) {
				return ref.apply(this, arguments);
			}

			return addNode;
		}();

		NodeEdit.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(renderer, node) {
				var _this3 = this;

				var handler;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								// ----
								// Edit and save buttons
								// ----
								$(node).find(".mm-details-edit-save").click(function (e) {
									// Close the details panel, which saves
									e.preventDefault();
									_this3._interactor.hideDetailsPanel(renderer, true);
								});

								$(node).find(".mm-details-edit-close").click(function (e) {
									// Cancel the input
									_this3._cancel(renderer);
									e.preventDefault();
								});

								// Save when we click outside, by hiding the details panel
								$(node).on("click", function (e) {
									if (e.target.classList[0] == "mm-background-grid") _this3._interactor.hideDetailsPanel(renderer, true);
								});

								// ----
								// Node deletion
								// ----
								$(node).find(".mm-details-edit-delete").click(function (e) {
									// If the thing we are editing is an edge, don't do anything
									if ($(node).find(".mm-details-panel").hasClass("edge")) return;

									e.preventDefault();

									// Delete the node and all it is attached to
									var rec = _this3._abstractGraph.cascadingRemoveNode(_this3._editingNode.id);

									// Create the undo event
									_this3._editor.addToUndoStack("node_delete", { recover: rec, id: _this3._editingNode.id });

									// Cancel the details panel
									_this3._cancel(renderer);

									// Redraw the diagram
									_this3._interactor.rerender();
								});

								// ----
								// Node adding
								// ----
								if (this._editor) $(node).on("dblclick", function (e) {
									// If we have double clicked on something other than the background, do nothing
									if (!$(e.target).hasClass("mm-background-grid")) return;

									// Get the location

									var _interactor$getMouseP = _this3._interactor.getMousePos(e, renderer);

									var _interactor$getMouseP2 = _slicedToArray(_interactor$getMouseP, 2);

									var xm = _interactor$getMouseP2[0];
									var ym = _interactor$getMouseP2[1];

									// Create the node

									var newNode = _this3._abstractGraph.objects.makeNewNode(xm, ym);

									// Redraw the screen
									_this3._interactor.rerender();

									// Open up the panel for editing
									_this3._interactor.loadDetails(_this3._nodes.get(newNode.id)[2], renderer, true, true, true, _this3._save.bind(_this3, renderer));
									_this3._setEditing(newNode);
									$(node).find(".mm-details-panel input").first().focus();

									// And add the undo event
									_this3._editor.addToUndoStack("node_add", { id: newNode.id, node: newNode.toJson() });
								});

								if (this._editor) $(node).find(".mm-create-button").on("click", function (e) {
									// Now for the button, rather than double clicking
									// Location is offset from the button

									var _interactor$getMouseP3 = _this3._interactor.getMousePos(e, renderer);

									var _interactor$getMouseP4 = _slicedToArray(_interactor$getMouseP3, 2);

									var xm = _interactor$getMouseP4[0];
									var ym = _interactor$getMouseP4[1];

									var newNode = _this3._abstractGraph.objects.makeNewNode(xm - 100, ym + 50);

									// And redraw screen
									_this3._interactor.rerender();

									// Set up the editor
									_this3._interactor.loadDetails(_this3._nodes.get(newNode.id)[2], renderer, true, true, _this3._save.bind(_this3, renderer));
									_this3._setEditing(newNode);
									$(node).find(".mm-details-panel input").first().focus();

									// And add the undo thing
									_this3._editor.addToUndoStack("node_add", { id: newNode.id, node: newNode.toJson() });
								});

								// ----
								// Node editing
								// ----

								handler = function handler(e) {
									// Called when the input of the panel changes

									// Ignore if an edge is being edited
									if ($(node).find(".mm-details-panel").hasClass("edge")) return;

									// Get the id of the node being edited
									var editing = $(node).find(".mm-details-panel").attr("data-id");

									// Create an object containing the updated values
									var update = {
										fields: {},
										type: $(node).find(".mm-details-edit-type").val(),
										width: +$(node).find(".mm-details-edit-width").val(),
										hidden: $(node).find(".mm-details-edit-hidden")[0].checked
									};

									// Load all the fields
									var _iteratorNormalCompletion = true;
									var _didIteratorError = false;
									var _iteratorError = undefined;

									try {
										for (var _iterator = $(node).find(".mm-details-edit form").serializeArray()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
											var entry = _step.value;

											update.fields[entry.name] = entry.value;
										}

										// Now check if the type has changed
									} catch (err) {
										_didIteratorError = true;
										_iteratorError = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion && _iterator.return) {
												_iterator.return();
											}
										} finally {
											if (_didIteratorError) {
												throw _iteratorError;
											}
										}
									}

									var oldTypeName = _this3._editingNode.type.name;
									_this3._editingNode.update(update);
									if (_this3._editingNode.type.name != oldTypeName) {
										// It has, so rerender the diagram
										_this3._interactor.rerender();
										_this3._interactor.loadDetails(_this3._editingNode, renderer, true, true, true, _this3._save.bind(_this3, renderer), true);
									} else {
										// It hasn't, so just update the text
										_this3._setText(textGen.nodeText(_this3._nodes.get(+editing)[2]));
									}

									// And update the visibility thing, so that invisible nodes turn invisible
									_this3._interactor.updateHidden(_this3._editingNode);
								};

								if (this._editor) $(node).find(".mm-details-edit").on("input", handler);
								if (this._editor) $(node).find(".mm-details-edit-hidden").on("click", handler);

							case 9:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function addCanvas(_x4, _x5) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		/** Sets the node that is currently being edited
   * 
   * This does not open the details panel, but it does clear the multiple selection.
   * 
   * @param {mm.structs.ObjectEdge} edge The edge to edit.
   * @private
   */


		NodeEdit.prototype._setEditing = function _setEditing(node) {
			this._state.clearMultiSel();
			this._state.addToMultiSel(node);

			this._editingNode = node;
			this._editingBackup = node.toJson();
		};

		/** Cancel editing the currently editing node
   * 
   * This will restore its properties to the state it was before editing, and close the details panel.
   * 
   * @param {mm.Renderer} renderer The renderer used for editing.
   * @private
   */


		NodeEdit.prototype._cancel = function _cancel(renderer) {
			// Check if we can cancel
			if (!this._editingNode) return;

			// Close the details panel
			this._interactor.hideDetailsPanel(renderer, true, true);

			// Check if we need to change back to a previous type
			if (this._editingBackup.type != this._editingNode.type.name) {
				// We do, copy and rerender the diagram
				this._editingNode.update(this._editingBackup, ["width", "type", "fields", "hidden"]);
				this._interactor.rerender();
			} else {
				// Nope, so just update the text
				this._editingNode.update(this._editingBackup, ["width", "type", "fields", "hidden"]);
				this._setText(textGen.nodeText(this._editingNode));
			}

			this._interactor.updateHidden(this._editingNode);
			this._editingNode = null;
		};

		/** Save changes to the currently editing node
   * 
   * This is called automatically when the details panel is closed
   * 
   * @param {mm.Renderer} renderer The renderer used for editing.
   * @private
   */


		NodeEdit.prototype._save = function _save(renderer) {
			// First of all, check if there are any changes to save (otherwise don't bother creating an undo event)
			var change = false;
			var _arr = ["width", "hidden"];
			for (var _i = 0; _i < _arr.length; _i++) {
				var v = _arr[_i];
				if (this._editingBackup[v] != this._editingNode[v]) change = true;
			}
			if (this._editingBackup.type != this._editingNode.type.name) change = true;
			for (var f in this._editingNode.fields) {
				if (this._editingBackup.fields[f] != this._editingNode.fields[f]) change = true;
			}

			// If there is a change, add an undo event
			if (change) this._editor.addToUndoStack("node_edit", { id: this._editingNode.id, old: this._editingBackup, "new": this._editingNode.toJson() });

			this._editingNode = null;
		};

		/** Generate the text for the currently being edited node
   * 
   * The given text will be calcualted (via `textGen`) and then set as appropriate, as well as this, the width
   *  of the node will be set too.
   * 
   * @param {string} text The text to set.
   * @private
   */


		NodeEdit.prototype._setText = function _setText(text) {
			this._nodes.get(+this._editingNode.id)[1].attr("text/text", textGen.wrapText(text, this._editingNode.width));
			this._nodes.get(+this._editingNode.id)[1].resize(this._editingNode.width, 30);
		};

		return NodeEdit;
	}(Interaction);
});
/* Including packs: mm.interactions.NodeMove */
load.addDependency("about:blank", ["mm.interactions.NodeMove"], ["mm.Editor", "mm.interactions.Interaction"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.NodeMove", function () {
	var Interaction = load.require("mm.interactions.Interaction");
	var Editor = load.require("mm.Editor");

	Editor.registerUndo("node_move", function (type, arg, graph) {
		graph.objects.getNode(arg.id).update({ x: arg.old[0], y: arg.old[1] });
	}, function (type, arg, graph) {
		graph.objects.getNode(arg.id).update({ x: arg["new"][0], y: arg["new"][1] });
	});

	Editor.registerUndo("node_multimove", function (type, arg, graph) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = arg.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var n = _step.value;
				graph.objects.getNode(n.id).update({ x: n.old[0], y: n.old[1] });
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = arg.edges[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var e = _step2.value;
				graph.objects.getEdge(e.id).points = e.old;
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}, function (type, arg, graph) {
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = arg.nodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var n = _step3.value;
				graph.objects.getNode(n.id).update({ x: n["new"][0], y: n["new"][1] });
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = arg.edges[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var e = _step4.value;
				graph.objects.getEdge(e.id).points = e["new"];
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}
	});

	/** Interactor for moving nodes
  * 
  * As well as single nodes, this also manages moving many nodes at once.
  * 
  * @extends mm.Interaction
  */
	return function (_Interaction) {
		_inherits(NodeMove, _Interaction);

		function NodeMove(interactor, abstractGraph, editor, state) {
			_classCallCheck(this, NodeMove);

			/** This is a map from renderers to whichever node they are moving
    * 
    * May be null if no node is being moved.
    * 
    * @type Map<mm.Renderer, mm.structs.ObjectNode>
    * @private
    */

			var _this = _possibleConstructorReturn(this, _Interaction.call(this, interactor, abstractGraph, editor, state));

			_this._moves = new Map();
			return _this;
		}

		NodeMove.prototype.addNode = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, joint, node) {
				var _this2 = this;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								Interaction.prototype.addNode.call(this, renderer, joint, node);

								if (this._editor) $(svgNode).on("mousedown", function (e) {
									// Don't move a node if we click on the circle
									if (e.target.tagName == "circle") return;

									// Otherwise, set the node as being what this renderer is moving
									_this2._moves.set(renderer, node);
								});

							case 2:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addNode(_x, _x2, _x3) {
				return ref.apply(this, arguments);
			}

			return addNode;
		}();

		NodeMove.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(renderer, html) {
				var _this3 = this;

				var cx, cy, _stopMove;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								// This is the "current mouse location", it is used to detect how much movement has happened between events
								cx = 0;
								cy = 0;


								if (this._editor) $(html).on("mousedown", function (e) {
									cx = e.clientX;
									// When we first click, set the mouse location

									cy = e.clientY;
								});

								if (this._editor) $(html).on("mousemove", function (e) {
									// Only do logic if we are actually moving a node
									if (_this3._moves.has(renderer) && _this3._moves.get(renderer)) {
										var multiSel = _this3._state.getMultiSel();
										var moving = _this3._moves.get(renderer);

										// The library handles this logic itself, but if we have multiple nodes selected (and are dragging
										//  one), we need to move them manually
										if (_this3._state.inMultiSel(moving)) {
											(function () {
												// Mouse change
												var deltaX = e.clientX - cx;
												var deltaY = e.clientY - cy;
												cx = e.clientX;
												cy = e.clientY;
												var _iteratorNormalCompletion5 = true;
												var _didIteratorError5 = false;
												var _iteratorError5 = undefined;

												try {

													for (var _iterator5 = multiSel[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
														var n = _step5.value;

														if (n == moving) continue;

														// Move each node
														var sn = _this3._nodes.get(n.id)[1];
														sn.translate(deltaX, deltaY);
													}
												} catch (err) {
													_didIteratorError5 = true;
													_iteratorError5 = err;
												} finally {
													try {
														if (!_iteratorNormalCompletion5 && _iterator5.return) {
															_iterator5.return();
														}
													} finally {
														if (_didIteratorError5) {
															throw _iteratorError5;
														}
													}
												}

												var edges = _this3._abstractGraph.connectedEdges(multiSel);
												var _iteratorNormalCompletion6 = true;
												var _didIteratorError6 = false;
												var _iteratorError6 = undefined;

												try {
													for (var _iterator6 = edges[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
														var ed = _step6.value;

														var je = _this3._edges.get(ed.id)[1];

														// And the points on each edge connected to the nodes
														je.set("vertices", je.get("vertices").map(function (o) {
															return {
																x: o.x + deltaX,
																y: o.y + deltaY
															};
														}.bind(_this3)));
													}
												} catch (err) {
													_didIteratorError6 = true;
													_iteratorError6 = err;
												} finally {
													try {
														if (!_iteratorNormalCompletion6 && _iterator6.return) {
															_iterator6.return();
														}
													} finally {
														if (_didIteratorError6) {
															throw _iteratorError6;
														}
													}
												}
											})();
										}
									}
								});

								_stopMove = function _stopMove(e) {
									// Called when a node stops moving
									var movedNode = _this3._moves.get(renderer);
									if (!movedNode) return;

									var movedNodeJoint = _this3._nodes.get(movedNode.id)[1];

									// The changed position seems to be in joint.changed.position. Not sure if I'm supposed to use it, but
									// it's public.
									var newPos = movedNodeJoint.get("position");
									var npx = newPos.x / renderer.getScale();
									var npy = newPos.y / renderer.getScale();

									// Next, chehck if there actually was a move, rather than just a click

									if (movedNode.x != npx || movedNode.y != npy) {
										if (_this3._state.inMultiSel(movedNode)) {
											// We are moving many nodes
											var multiSel = _this3._state.getMultiSel();

											// This will be used to undo and redo the changes
											var arg = { nodes: [], edges: [] };

											var _iteratorNormalCompletion7 = true;
											var _didIteratorError7 = false;
											var _iteratorError7 = undefined;

											try {
												for (var _iterator7 = multiSel[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
													var n = _step7.value;

													var oldPos = [n.x, n.y];

													var _newPos = _this3._nodes.get(n.id)[1].get("position");
													_newPos.x /= renderer.getScale();
													_newPos.y /= renderer.getScale();

													// Tell the data structure about the node's new position
													n.changePosition(_newPos.x, _newPos.y);

													arg.nodes.push({ id: n.id, old: [oldPos[0], oldPos[1]], "new": [_newPos.x, _newPos.y] });
												}
											} catch (err) {
												_didIteratorError7 = true;
												_iteratorError7 = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion7 && _iterator7.return) {
														_iterator7.return();
													}
												} finally {
													if (_didIteratorError7) {
														throw _iteratorError7;
													}
												}
											}

											var edges = _this3._abstractGraph.connectedEdges(multiSel);
											var _iteratorNormalCompletion8 = true;
											var _didIteratorError8 = false;
											var _iteratorError8 = undefined;

											try {
												for (var _iterator8 = edges[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
													var ed = _step8.value;

													var je = _this3._edges.get(ed.id)[1];

													// And update the points of edges, too!
													arg.edges.push({ id: ed.id, "new": je.get("vertices").map(function (o) {
															return [o.x / renderer.getScale(), o.y / renderer.getScale()];
														}), old: ed.points });
												}
											} catch (err) {
												_didIteratorError8 = true;
												_iteratorError8 = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion8 && _iterator8.return) {
														_iterator8.return();
													}
												} finally {
													if (_didIteratorError8) {
														throw _iteratorError8;
													}
												}
											}

											_this3._editor.addToUndoStack("node_multimove", arg);
										} else {
											// We are only moving one node
											var _oldPos = [movedNode.x, movedNode.y];

											movedNode.changePosition(npx, npy);

											_this3._editor.addToUndoStack("node_move", { id: movedNode.id, old: _oldPos, "new": [movedNode.x, movedNode.y] });
										}
									}

									_this3._moves.set(renderer, null);
								};

								if (this._editor) $(html).on("mouseup", _stopMove);
								if (this._editor) $(html).mouseleave(_stopMove);

							case 7:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function addCanvas(_x4, _x5) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return NodeMove;
	}(Interaction);
});
/* Including packs: mm.interactions.Keyboard */
load.addDependency("about:blank", ["mm.interactions.Keyboard"], ["mm.Editor", "mm.interactions.Interaction"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.Keyboard", function () {
	var Interaction = load.require("mm.interactions.Interaction");
	var Editor = load.require("mm.Editor");

	Editor.registerUndo("node_multidelete", function (type, arg, graph) {
		graph.cascadingRemoveNodeRecovery(arg.recover);
	}, function (type, arg, graph) {
		graph.cascadingRemoveNode(arg.ids);
	});

	/** Handles all the keyboard shortcuts
  * 
  * @extends mm.Interaction
  */
	return function (_Interaction) {
		_inherits(Keyboard, _Interaction);

		function Keyboard() {
			_classCallCheck(this, Keyboard);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		Keyboard.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, html) {
				var _this2 = this;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								// Elements need a tabindex to be keyboardable
								$(html).attr("tabindex", 0);

								$(html).on("mousedown", function (x) {
									if (!$.contains(html, document.activeElement)) $(html).focus();
								}); // If clicking on anything in the html node, focus on it

								if (this._editor) $(html).on("keydown", function (e) {
									// Don't handle key events if the user is typing
									if (e.target.tagName.toUpperCase() == "INPUT") return;

									var key = e.keyCode;

									if (key == 46) {
										// Multidelete
										if (_this2._state.countMultiSel()) {
											var multisel = _this2._state.getMultiSel().map(function (x) {
												return x.id;
											});
											var rec = _this2._abstractGraph.cascadingRemoveNode(multisel);
											_this2._editor.addToUndoStack("node_multidelete", { recover: rec, ids: multisel });
											_this2._state.clearMultiSel();
											_this2._interactor.rerender();
										}
									}

									if (key == 27) {
										// Escape, hide details panel
										$(html).focus();

										// This function returns true iff the panel was open
										if (_this2._interactor.hideDetailsPanel(renderer, true)) return;
										_this2._state.clearMultiSel();
									}

									if (e.ctrlKey) {
										if (key == 65) {
											// CTRL + A, select all
											var _iteratorNormalCompletion = true;
											var _didIteratorError = false;
											var _iteratorError = undefined;

											try {
												for (var _iterator = _this2.myNodes(renderer)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
													var n = _step.value;

													_this2._state.addToMultiSel(n[2]);
												}
											} catch (err) {
												_didIteratorError = true;
												_iteratorError = err;
											} finally {
												try {
													if (!_iteratorNormalCompletion && _iterator.return) {
														_iterator.return();
													}
												} finally {
													if (_didIteratorError) {
														throw _iteratorError;
													}
												}
											}

											e.preventDefault();
										}

										if (key == 90) {
											// CTRL + Z, undo
											_this2._interactor.undo();

											e.preventDefault();
										}

										if ([82, 89].includes(key)) {
											// CTRL + [R, Y], redo
											_this2._interactor.redo();

											e.preventDefault();
										}
									}
								});

							case 3:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addCanvas(_x, _x2) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return Keyboard;
	}(Interaction);
});
/* Including packs: mm.interactions.MultiSelect */
load.addDependency("about:blank", ["mm.interactions.MultiSelect"], ["mm.interactions.Interaction"], 0, 0);

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.MultiSelect", function () {
	var Interaction = load.require("mm.interactions.Interaction");

	/** Handles selecting multiple nodes
  * 
  * The logic for moving node is done in `NodeMove`, and deletion is done in `Keyboard`, this only manages
  *  selecting them.
  * 
  * @extends mm.Interaction
  */
	return function (_Interaction) {
		_inherits(MultiSelect, _Interaction);

		function MultiSelect() {
			_classCallCheck(this, MultiSelect);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		MultiSelect.prototype.addNode = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, joint, node) {
				var _this2 = this;

				var svgNode;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								Interaction.prototype.addNode.call(this, renderer, joint, node);

								svgNode = renderer.getSvgNode(node.id);


								$(svgNode).on("click", function (e) {
									// If we click on a node and are holding the shift or control key...
									if (e.shiftKey || e.ctrlKey) {
										// Add or remove the node from the multiset thing
										if (_this2._state.inMultiSel(node)) {
											_this2._state.removeFromMultiSel(node);
										} else {
											_this2._state.addToMultiSel(node);
										}

										// And also hide the details panel, since you can't edit a node while selecting more than one
										_this2._interactor.hideDetailsPanel(renderer, true);
									}
								});

							case 3:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addNode(_x, _x2, _x3) {
				return ref.apply(this, arguments);
			}

			return addNode;
		}();

		MultiSelect.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(renderer, node) {
				var _this3 = this;

				var rmouse, svg, rect, ox, oy, _stopSelection;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (this._editor) {
									_context2.next = 2;
									break;
								}

								return _context2.abrupt("return");

							case 2:

								// If we just click without doing anything, unselect everything
								node.addEventListener("click", function (e) {
									if (!$(e.target).hasClass("mm-background-grid")) return;
									_this3._state.clearMultiSel();
								});

								// This is true when the right mouse is dragged
								rmouse = false;

								// Now generate the rectangle to be displayed

								svg = $(node).find("svg")[0];
								rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

								rect.setAttribute("width", "0");
								rect.setAttribute("height", "0");
								rect.setAttribute("fill", "#ffee22");
								rect.setAttribute("stroke", "#ffcc00");
								rect.setAttribute("class", "mm-multiselrect");
								svg.insertBefore(rect, $(svg).find(".mm-background-grid")[0]);

								// X and Y coordinates of the mouse when it was first clicked
								ox = 0;
								oy = 0;


								$(node).on("mousemove", function (e) {
									var _interactor$getMouseP = _this3._interactor.getMousePos(e, renderer);

									var _interactor$getMouseP2 = _slicedToArray(_interactor$getMouseP, 2);

									var mx = _interactor$getMouseP2[0];
									var my = _interactor$getMouseP2[1];

									var s = renderer.getScale();

									// If the mouse is down...
									if (rmouse) {
										// Generate a width and height
										var w = mx - ox;
										var h = my - oy;

										// And resize and move the rectangle to fit these dimensions and coordinates

										if (w < 0) {
											rect.setAttribute("width", -w * s);
											rect.setAttribute("x", (ox + w) * s);
										} else {
											rect.setAttribute("width", w * s);
											rect.setAttribute("x", ox * s);
										}

										if (h < 0) {
											rect.setAttribute("height", -h * s);
											rect.setAttribute("y", (oy + h) * s);
										} else {
											rect.setAttribute("height", h * s);
											rect.setAttribute("y", oy * s);
										}
									}
								});

								// Stop the regular right click menu
								$(node).on("contextmenu", function (e) {
									e.preventDefault();
								});

								$(node).on("mousedown", function (e) {
									// Ignore not right click
									if (e.button != 2) return;

									rmouse = true;

									// Get the mouse location

									var _interactor$getMouseP3 = _this3._interactor.getMousePos(e, renderer);

									var _interactor$getMouseP4 = _slicedToArray(_interactor$getMouseP3, 2);

									ox = _interactor$getMouseP4[0];
									oy = _interactor$getMouseP4[1];
								});

								// To be called when the selection is to be stopped

								_stopSelection = function _stopSelection(e) {
									// If we released a mouse and it isn't the right click, do nothing
									if (e.button != 2) return;

									// Calculate a rectangle from [x, y] with width [w, h]
									// w and h can't be negative, which is why we have all this logic

									var _interactor$getMouseP5 = _this3._interactor.getMousePos(e, renderer);

									var _interactor$getMouseP6 = _slicedToArray(_interactor$getMouseP5, 2);

									var mx = _interactor$getMouseP6[0];
									var my = _interactor$getMouseP6[1];
									var w = mx - ox;
									var h = my - oy;

									var x = w < 0 ? ox + w : ox;
									var y = h < 0 ? oy + h : oy;


									// Now find all the nodes in that selection

									var _map = [w, h].map(Math.abs);

									var _map2 = _slicedToArray(_map, 2);

									w = _map2[0];
									h = _map2[1];
									var nodeset = _this3._abstractGraph.objects.nodes.filter(function (n) {
										return n.x > x && n.y > y && n.x < x + w && n.y < y + h;
									});

									// If we aren't holding shift or control, this will be a new set to replace the old
									if (!e.shiftKey && !e.ctrlKey) _this3._state.clearMultiSel();

									// Now add them
									nodeset.forEach(_this3._state.addToMultiSel.bind(_this3._state));

									// And cause interacter to update the borders
									_this3._interactor.updateMultiSel();

									rmouse = false;
									rect.setAttribute("width", 0);
								};

								$(node).on("mouseup", _stopSelection);
								$(node).mouseleave(_stopSelection);

							case 20:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function addCanvas(_x4, _x5) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return MultiSelect;
	}(Interaction);
});
/* Including packs: mm.interactions.Pan */
load.addDependency("about:blank", ["mm.interactions.Pan"], ["mm.interactions.Interaction"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.Pan", function () {
	var Interaction = load.require("mm.interactions.Interaction");

	return function (_Interaction) {
		_inherits(Pan, _Interaction);

		function Pan() {
			_classCallCheck(this, Pan);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		Pan.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, html) {
				var _this2 = this;

				var mouseDown, cx, cy;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								mouseDown = false;
								cx = 0;
								cy = 0;


								html.addEventListener("mousedown", function (e) {
									if (e.button != 0) return;
									if (!$(e.target).hasClass("mm-background-grid") && _this2._editor) return;
									mouseDown = true;
									cx = e.clientX;
									cy = e.clientY;
								});

								html.addEventListener("mousemove", function (e) {
									var deltaX = e.clientX - cx;
									var deltaY = e.clientY - cy;
									cx = e.clientX;
									cy = e.clientY;


									if (mouseDown) {
										$(html).find(".mm-inner")[0].scrollTop -= deltaY;
										$(html).find(".mm-inner")[0].scrollLeft -= deltaX;
									}
								});

								$(html).on("mouseup", function (e) {
									return void (mouseDown = false);
								});
								$(html).mouseleave(function (e) {
									return void (mouseDown = false);
								});

							case 7:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addCanvas(_x, _x2) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return Pan;
	}(Interaction);
});
/* Including packs: mm.interactions.HoverView */
load.addDependency("about:blank", ["mm.interactions.HoverView"], ["mm.interactions.Interaction"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.HoverView", function () {
	var Interaction = load.require("mm.interactions.Interaction");

	/** Handles hovering over a node, and clicking it when not editing
  * 
  * @extends mm.Interaciton
  */
	return function (_Interaction) {
		_inherits(HoverView, _Interaction);

		function HoverView() {
			_classCallCheck(this, HoverView);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		HoverView.prototype.addNode = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, joint, node) {
				var _this2 = this;

				var svgNode;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								Interaction.prototype.addNode.call(this, renderer, joint, node);

								// The SVG element for this node
								svgNode = renderer.getSvgNode(node.id);


								$(svgNode).on("mousemove", function (e) {
									// Hovering shows a short summary
									_this2._interactor.loadDetails(node, renderer, true);
								});

								$(svgNode).on("mouseout", function (e) {
									// Which is then removed when hovered out
									_this2._interactor.hideDetailsPanel(renderer);
								});

								$(svgNode).on("click", function (e) {
									// And clicking shows a full panel

									// We want the editor (if it is available) to handle this, because it has more sophisticated handling
									if (_this2._editor) return;
									_this2._interactor.loadDetails(node, renderer, true, true, true);
								});

							case 5:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addNode(_x, _x2, _x3) {
				return ref.apply(this, arguments);
			}

			return addNode;
		}();

		HoverView.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(renderer, node) {
				var _this3 = this;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								node.addEventListener("click", function (e) {
									// Clicking outside hides the panel as well
									if (!$(e.target).hasClass("mm-background-grid")) return;

									// Again, editor has special handling
									if (_this3._editor) return;

									_this3._interactor.hideDetailsPanel(renderer, true);
								});

							case 1:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function addCanvas(_x4, _x5) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return HoverView;
	}(Interaction);
});
/* Including packs: mm.interactions.Resize */
load.addDependency("about:blank", ["mm.interactions.Resize"], ["mm.Editor", "mm.interactions.Interaction"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.Resize", function () {
	var Interaction = load.require("mm.interactions.Interaction");
	var Editor = load.require("mm.Editor");

	/** Register an undo event for the specific side
  * 
  * @param {string} event The event name to call it.
  * @param {string} call The function to call on the canvas, starting with "add". For example, specifying "Right"
  *  will call `addRight`.
  * @private
  */
	var _resizeUndo = function _resizeUndo(event, call) {
		Editor.registerUndo("resize_" + event, function (type, arg, graph) {
			graph.objects.canvas["add" + call](-arg.val);
		}, function (type, arg, graph) {
			graph.objects.canvas["add" + call](arg.val);
		});
	};

	_resizeUndo("top", "Top");
	_resizeUndo("bottom", "Bottom");
	_resizeUndo("left", "Left");
	_resizeUndo("right", "Right");

	/** Interactor for resizing the editing canvas thing
  * 
  * @extends mm.Interaciton
  */
	return function (_Interaction) {
		_inherits(Resize, _Interaction);

		function Resize() {
			_classCallCheck(this, Resize);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		Resize.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, html) {
				var _this2 = this;

				var top, left, inner, svg;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								// Current location of scroll
								top = -1;
								left = -1;

								// And shortcuts for various elements

								inner = $(html).find(".mm-inner")[0];
								svg = $(html).find("svg");


								if (this._editor) html.addEventListener("mousemove", function (e) {
									// If we have not moved, don't do anything
									if (top == inner.scrollTop && left == inner.scrollLeft) return;

									top = inner.scrollTop;
									left = inner.scrollLeft;

									// Update locations of blocks
									if (top <= 10) {
										$(html).find(".mm-resize-top").show();
									} else {
										$(html).find(".mm-resize-top").hide();
									}

									if (left <= 10) {
										$(html).find(".mm-resize-left").show();
									} else {
										$(html).find(".mm-resize-left").hide();
									}

									var margin = +svg.css("margin").split("px")[0] * 2;
									if (top + 10 >= svg.height() - html.scrollHeight + margin) {
										$(html).find(".mm-resize-bottom").show();
									} else {
										$(html).find(".mm-resize-bottom").hide();
									}

									if (left + 10 >= svg.width() - html.scrollWidth + margin) {
										$(html).find(".mm-resize-right").show();
									} else {
										$(html).find(".mm-resize-right").hide();
									}
								});

								// Resize buttons
								$(html).find(".mm-resize-top .mm-extend").on("click", function (e) {
									_this2._abstractGraph.objects.canvas.addTop(50);
									_this2._interactor.rerender();
									_this2._editor.addToUndoStack("resize_top", { val: 50 });
								});
								$(html).find(".mm-resize-top .mm-shrink").on("click", function (e) {
									_this2._abstractGraph.objects.canvas.addTop(-50);
									_this2._interactor.rerender();
									_this2._editor.addToUndoStack("resize_top", { val: -50 });
								});

								$(html).find(".mm-resize-left .mm-extend").on("click", function (e) {
									_this2._abstractGraph.objects.canvas.addLeft(50);
									_this2._interactor.rerender();
									_this2._editor.addToUndoStack("resize_left", { val: 50 });
								});
								$(html).find(".mm-resize-left .mm-shrink").on("click", function (e) {
									_this2._abstractGraph.objects.canvas.addLeft(-50);
									_this2._interactor.rerender();
									_this2._editor.addToUndoStack("resize_left", { val: -50 });
								});

								$(html).find(".mm-resize-right .mm-extend").on("click", function (e) {
									_this2._abstractGraph.objects.canvas.addRight(50);
									_this2._interactor.rerender();
									_this2._editor.addToUndoStack("resize_right", { val: 50 });
									inner.scrollLeft += 50;
								});
								$(html).find(".mm-resize-right .mm-shrink").on("click", function (e) {
									_this2._abstractGraph.objects.canvas.addRight(-50);
									_this2._interactor.rerender();
									_this2._editor.addToUndoStack("resize_right", { val: -50 });
								});

								$(html).find(".mm-resize-bottom .mm-extend").on("click", function (e) {
									_this2._abstractGraph.objects.canvas.addBottom(50);
									_this2._interactor.rerender();
									_this2._editor.addToUndoStack("resize_bottom", { val: 50 });
									inner.scrollTop += 50;
								});
								$(html).find(".mm-resize-bottom .mm-shrink").on("click", function (e) {
									_this2._abstractGraph.objects.canvas.addBottom(-50);
									_this2._interactor.rerender();
									_this2._editor.addToUndoStack("resize_bottom", { val: -50 });
								});

							case 13:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addCanvas(_x, _x2) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return Resize;
	}(Interaction);
});
/* Including packs: mm.interactions.EdgeChange */
load.addDependency("about:blank", ["mm.interactions.EdgeChange"], ["mm.Editor", "mm.interactions.Interaction"], 0, 0);

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.EdgeChange", function () {
	var Interaction = load.require("mm.interactions.Interaction");
	var Editor = load.require("mm.Editor");

	// Undo events
	Editor.registerUndo("edge_change", function (type, arg, graph) {
		graph.objects.getEdge(arg.id).points = arg.old;
	}, function (type, arg, graph) {
		graph.objects.getEdge(arg.id).points = arg["new"];
	});

	Editor.registerUndo("edge_retarget", function (type, arg, graph) {
		graph.objects.getEdge(arg.id).dest = arg.old;
	}, function (type, arg, graph) {
		graph.objects.getEdge(arg.id).dest = arg["new"];
	});

	Editor.registerUndo("edge_rehost", function (type, arg, graph) {
		graph.objects.getEdge(arg.id).origin = arg.old;
	}, function (type, arg, graph) {
		graph.objects.getEdge(arg.id).origin = arg["new"];
	});

	/** Interactor for handling changing of edges form
  * 
  * That is, the points in them, and what they point from/to. It doesn't handle actually editing the content of the
  *  text or its type.
  * 
  * With this class, there is a lot of working around jointjs's stupidities, since this is a place where it came up
  *  a lot. The big issue is that there is no event fired when the action actually ends. How I hack my way around
  *  this is by storing the last event, and then when the mouse is released, handling all the stored events.
  * 
  * @extends mm.Interaction
  */
	return function (_Interaction) {
		_inherits(EdgeChange, _Interaction);

		function EdgeChange(interactor, abstractGraph, editor) {
			_classCallCheck(this, EdgeChange);

			/** We only want the vertices to be change if there is actually a drag. This flag is set when the
    *  _vertexChangeEvent should be actually listened to.
    * 
    * @type boolean
    * @private
    */

			var _this = _possibleConstructorReturn(this, _Interaction.call(this, interactor, abstractGraph, editor));

			_this._validMkpoint = false;

			/** The edge currently being changed, or null if none are
    * 
    * An [edge, jointJS edge] pair.
    * 
    * @type array
    * @private
    */
			_this._editingEdge = null;
			return _this;
		}

		EdgeChange.prototype.addEdge = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, joint, edge) {
				var _this2 = this;

				var skipped, svgEdge;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								Interaction.prototype.addEdge.call(this, renderer, joint, edge);

								// We want to skip the first "change:vertices" event, since we want to make sure the user actually creates
								// it.
								// Putting the mouse down sets this to false, then the first vertex event sets it to true and stops its
								// logic
								skipped = false;

								// The SVG element

								svgEdge = renderer.getSvgEdge(edge.id);


								$(svgEdge).on("mousedown", function (e) {
									// Allways allow changing the vertex if it exists
									_this2._validMkpoint = edge.points.length > 0;

									// Tell the handler for "change:vertices" to skip the first event
									skipped = false;

									// If the click is on any of not these elements and we already have a point, stop the event bubbling so
									// we stick with only one point
									if (!$(e.target).hasClass("marker-vertex") && !$(e.target).hasClass("marker-arrowhead") && !$(e.target).hasClass("marker-vertex-remove-area") && !$(e.target).hasClass("marker-vertex-remove") && edge.points.length >= 1) {
										e.stopPropagation();
										return;
									}

									// And if the user clicks on the label at any time, just abort
									if ($(e.target).parents(".labels").length) {
										e.stopPropagation();
										return;
									}

									// Remember the edge being edited
									_this2._editingEdge = [edge, joint];
								});

								joint.on("change:vertices", function (e, o) {
									// Only valid to make a point if it is already valid or we skipped the first event
									_this2._validMkpoint = _this2._validMkpoint || skipped;

									// Okay, now set the "skiped it" to true"
									skipped = true;

									// Smooth the edge
									joint.set("connector", { name: "smooth" });
								});

							case 5:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addEdge(_x, _x2, _x3) {
				return ref.apply(this, arguments);
			}

			return addEdge;
		}();

		EdgeChange.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(renderer, node) {
				var _this3 = this;

				var _out;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								// Function called when the dragging stops

								_out = function _out(e) {
									if (!_this3._editingEdge) return;

									var scale = renderer.getScale();

									var _editingEdge = _slicedToArray(_this3._editingEdge, 2);

									var edge = _editingEdge[0];
									var joint = _editingEdge[1];

									// This whole section checks if the points have changed!
									// Get the points

									var points = joint.get("vertices").map(function (x) {
										return [x.x / scale, x.y / scale];
									});
									var oldPoints = edge.points;

									// Now check whether there is any change in the points
									var pointsChange = false;
									if (points.length != oldPoints.length) pointsChange = true;
									if (!pointsChange) {
										pointsChange = false;
										for (var i = 0; i < points.length; i++) {
											if (points[i][0] != oldPoints[i][0] || points[i][1] != oldPoints[i][1]) pointsChange = true;
										}
									}

									// Now update the event if the points have changed
									if (pointsChange) {
										if (_this3._validMkpoint) {
											// We are allowed to create a point
											edge.changePoints(points);

											if (_this3._editor) _this3._editor.addToUndoStack("edge_change", { id: edge.id, old: oldPoints, "new": edge.points });

											_this3._interactor.rerender();
										} else {
											// If we are not allowed to create a point, remove it by setting the vertices
											joint.set("vertices", edge.points.map(function (x) {
												return { x: x[0] * renderer.getScale(), y: x[1] * renderer.getScale() };
											}));
											joint.set("connector", { name: "normal" });
										}
									}

									//Check for a new target
									if ("id" in joint.get("target")) {
										// And get the new target
										var newTarget = renderer.getNodeFromJoint(joint.get("target").id);

										if (edge.dest != newTarget && newTarget !== undefined) {
											if (newTarget != edge.origin) {
												_this3._editor.addToUndoStack("edge_retarget", { id: edge.id, old: edge.dest, "new": newTarget });
												edge.dest = newTarget;
											}
											_this3._interactor.rerender();
										}
									}

									// Check for a new origin
									if ("id" in joint.get("source")) {
										// Get the new origin
										var newHost = renderer.getNodeFromJoint(joint.get("source").id);

										if (edge.origin != newHost && newHost !== undefined) {
											if (newHost != edge.dest) {
												_this3._editor.addToUndoStack("edge_rehost", { id: edge.id, old: edge.origin, "new": newHost });
												edge.origin = newHost;
											}
											_this3._interactor.rerender();
										}
									}

									_this3._editingEdge = null;
								};

								$(node).on("mouseup", _out);
								$(node).mouseleave(_out);

							case 3:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function addCanvas(_x4, _x5) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return EdgeChange;
	}(Interaction);
});
/* Including packs: mm.interactions.EdgeEdit */
load.addDependency("about:blank", ["mm.interactions.EdgeEdit"], ["mm.Editor", "mm.interactions.Interaction", "mm.textGen"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.EdgeEdit", function () {
	var Interaction = load.require("mm.interactions.Interaction");
	var textGen = load.require("mm.textGen");
	var Editor = load.require("mm.Editor");

	Editor.registerUndo("edge_edit", function (type, arg, graph) {
		graph.objects.getEdge(arg.id).update(arg.old, ["type", "text"]);
	}, function (type, arg, graph) {
		graph.objects.getEdge(arg.id).update(arg["new"], ["type", "text"]);
	});

	Editor.registerUndo("edge_delete", function (type, arg, graph) {
		graph.objects.insertEdge(arg.json);
	}, function (type, arg, graph) {
		graph.objects.removeEdge(arg["id"]);
	});

	Editor.registerUndo("edge_add", function (type, arg, graph) {
		graph.objects.removeEdge(arg.id);
	}, function (type, arg, graph) {
		graph.objects.insertEdge(arg["edge"]);
	});

	/** Interactor for changing the content of edges
  * 
  * This does not handle changing what they point to or their curve point (that's done in EdgeChange), this is purely
  *  about their type, content, addition and deletion.
  * 
  * @extends mm.Interaction
  */
	return function (_Interaction) {
		_inherits(EdgeEdit, _Interaction);

		function EdgeEdit(interactor, abstractGraph, editor, interactorState) {
			_classCallCheck(this, EdgeEdit);

			/** The edge currently being edited
    * 
    * @type ?mm.structs.ObjectEdge
    */

			var _this = _possibleConstructorReturn(this, _Interaction.call(this, interactor, abstractGraph, editor, interactorState));

			_this._editingEdge = null;
			/** The properties of the editing edge from when it started editing
    * 
    * So we can revert to this if there is a cancel.
    * 
    * @type ?object
    */
			_this._editingBackup = null;
			return _this;
		}

		EdgeEdit.prototype.addEdge = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, joint, edge) {
				var _this2 = this;

				var svgNode;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								Interaction.prototype.addEdge.call(this, renderer, joint, edge);

								// Get the SVG element
								svgNode = renderer.getSvgEdge(edge.id);

								// When we stop clicking on it

								if (this._editor) $(svgNode).on("mouseup", function (e) {
									// Load up and set the editor
									_this2._interactor.loadDetails(edge, renderer, true, true, true, _this2._save.bind(_this2, renderer));
									_this2._setEditing(edge);

									// Highlight the first input
									var panel = $(svgNode).parents(".mm-root").find(".mm-details-edit-arrow");
									panel.find("input").first().focus();
								});

							case 3:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addEdge(_x, _x2, _x3) {
				return ref.apply(this, arguments);
			}

			return addEdge;
		}();

		EdgeEdit.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(renderer, node, graph) {
				var _this3 = this;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								// ----
								// Edit and save buttons
								// ----
								$(node).find(".mm-details-edit-arrow-save").click(function (e) {
									// Save, default action on closing the details panel, so just close it
									e.preventDefault();
									_this3._interactor.hideDetailsPanel(renderer, true);
								});

								$(node).find(".mm-details-edit-arrow-close").click(function (e) {
									// Cancel
									_this3._cancel(renderer);
									e.preventDefault();
								});

								// Save when we click outside, by hiding the details panel
								$(node).on("click", function (e) {
									if (e.target.classList[0] == "mm-background-grid") _this3._interactor.hideDetailsPanel(renderer, true);
								});

								// ----
								// Edge deletion
								// ----
								$(node).find(".mm-details-edit-arrow-delete").click(function (e) {
									e.preventDefault();
									var editing = _this3._editingEdge;

									// First of all, cancel all edits
									_this3._cancel(renderer);

									// Add a delete event
									_this3._editor.addToUndoStack("edge_delete", { id: editing.id, json: editing.toJson() });

									// Then remove it
									_this3._abstractGraph.objects.removeEdge(editing.id);

									// And rerender the diagram
									_this3._interactor.rerender();
								});

								// ----
								// Edge editing
								// ----
								// This is fired when the content of the input field changes
								if (this._editor) $(node).find(".mm-details-edit-arrow").on("input", function (e) {
									// Not editing? Just return
									if (!_this3._editingEdge) return;

									// Get the element to edit
									var editing = _this3._editingEdge.id;

									// Create an object containing the properties we have changed
									var update = {
										text: $(node).find(".mm-details-edit-arrow-text").val(),
										type: $(node).find(".mm-details-edit-arrow-type").val()
									};

									// Now check if the type has changed
									var oldTypeName = _this3._editingEdge.type.name;

									// Copy the properties of this object to the model
									_this3._editingEdge.update(update);

									if (_this3._editingEdge.type.name != oldTypeName) {
										// We have changed type, redraw the diagram
										_this3._interactor.rerender();
										_this3._interactor.loadDetails(_this3._editingEdge, renderer, true, true, true, _this3._save.bind(_this3, renderer), true);
									} else {
										// We have not, just update the label then
										_this3._edges.get(+editing)[1].label(0, { position: 0.5, attrs: { text: { text: _this3._editingEdge.text } } });
									}
								});

								// ----
								// Adding a new edge
								// ----
								graph.on("change", function (e, i, o, u) {
									// Check if this is a new edge
									if (i.updateConnectionOnly) return;
									if (e.attributes.type != "link") return;
									if (_this3._state.rerendering) return;

									if ("id" in e.attributes.target) {
										// Check if it's an edge we already know about
										if (renderer.getEdgeFromJoint(e.id) !== undefined) return;

										// Get target and source
										var t = renderer.getNodeFromJoint(e.attributes.target.id);
										var s = renderer.getNodeFromJoint(e.attributes.source.id);

										// Stop connecting to self
										if (s == t) return;

										// Make the edge
										var ne = _this3._abstractGraph.objects.makeNewEdge(s, t);

										// And an undo event
										_this3._editor.addToUndoStack("edge_add", { edge: ne.toJson(), id: ne.id });

										// And redraw the diagram
										_this3._interactor.rerender();
									}
								});

							case 6:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function addCanvas(_x4, _x5, _x6) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		/** Sets the edge that is currently being edited
   * 
   * This does not open the details panel.
   * 
   * @param {mm.structs.ObjectEdge} edge The edge to edit.
   * @private
   */


		EdgeEdit.prototype._setEditing = function _setEditing(edge) {
			this._editingEdge = edge;
			this._editingBackup = edge.toJson();
		};

		/** Cancel editing the currently editing edge
   * 
   * This will restore its properties to the state it was before editing, and close the details panel.
   * 
   * @param {mm.Renderer} renderer The renderer used for editing.
   * @private
   */


		EdgeEdit.prototype._cancel = function _cancel(renderer) {
			// Check if cancelling is possible
			if (!this._editingEdge) return;
			if (!this._edges.get(this._editingEdge.id)) return;

			// Close the panel
			this._interactor.hideDetailsPanel(renderer, true, true);

			// Check if we need to change back to a previous type
			if (this._editingBackup.type != this._editingEdge.type.name) {
				// We do, so copy the props and rerender the diagram
				this._editingEdge.update(this._editingBackup, ["type", "text"]);
				this._interactor.rerender();
			} else {
				// We don't, so just copy the properties back onto it and update the "preview"
				this._editingEdge.update(this._editingBackup, ["type", "text"]);
				this._edges.get(this._editingEdge.id)[1].label(0, { position: 0.5, attrs: { text: { text: this._editingEdge.text } } });
			}

			this._editingEdge = null;
		};

		/** Save changes to the currently editing edge.
   * 
   * This is called when the details panel is closed
   * 
   * @param {mm.Renderer} renderer The renderer used for editing.
   * @private
   */

		EdgeEdit.prototype._save = function _save(renderer) {
			// See if it has been updated at all
			var change = false;
			if (this._editingBackup.text != this._editingEdge.text) change = true;
			if (this._editingBackup.type != this._editingEdge.type.name) change = true;

			// If it has, so add an undo event
			if (change) this._editor.addToUndoStack("edge_edit", { id: this._editingEdge.id, old: this._editingBackup, "new": this._editingEdge.toJson() });

			this._editingEdge = null;
		};

		return EdgeEdit;
	}(Interaction);
});
/* Including packs: mm.interactions.EditUndo */
load.addDependency("about:blank", ["mm.interactions.EditUndo"], ["mm.interactions.Interaction"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.EditUndo", function () {
	var Interaction = load.require("mm.interactions.Interaction");

	/** Handling for the undo and redo buttons
  * 
  * It's just basically a bridge to the functions in this._interactor, nothing much.
  * 
  * @extends mm.Interaction
  */
	return function (_Interaction) {
		_inherits(EditUndo, _Interaction);

		function EditUndo() {
			_classCallCheck(this, EditUndo);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		EditUndo.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, node) {
				var _this2 = this;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								$(node).find(".mm-undo-button").click(function (e) {
									_this2._interactor.undo();
								});

								$(node).find(".mm-redo-button").click(function (e) {
									_this2._interactor.redo();
								});

							case 2:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addCanvas(_x, _x2) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return EditUndo;
	}(Interaction);
});
/* Including packs: mm.interactions.Zoom */
load.addDependency("about:blank", ["mm.interactions.Zoom"], ["mm.interactions.Interaction"], 0, 0);

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.Zoom", function () {
	var Interaction = load.require("mm.interactions.Interaction");

	/** Scroll change for scrollwheel
  * 
  * @type integer
  * @private
  * @const
  */
	var _WHEEL_ZOOM = 0.1;

	/** Scroll change for buttons
  * 
  * @type integer
  * @private
  * @const
  */
	var _BUTTON_ZOOM = 0.3;

	/** Interactor for changing the zoom level
  * 
  * @extends mm.Interaciton
  */
	return function (_Interaction) {
		_inherits(Zoom, _Interaction);

		function Zoom() {
			_classCallCheck(this, Zoom);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		Zoom.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, html) {
				var _this2 = this;

				var scale, _updateZoom;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								// This is the current zoom scale
								scale = 1.0;

								// This is the function to be called and actually changes the zoom
								// e is the mouse event, which is used to make the location look like its zooming on the mouse when using
								//  the scroll wheel

								_updateZoom = function _updateZoom(mod, e) {
									// Get the actual element to be scaled
									var elem = $(html).find(".mm-inner")[0];

									// mouse location on the actual screen
									var mx = 0;
									var my = 0;

									if (e) {
										var _interactor$getMouseP = _this2._interactor.getMousePos(e, renderer).map(function (x) {
											return x * scale;
										});

										var _interactor$getMouseP2 = _slicedToArray(_interactor$getMouseP, 2);

										mx = _interactor$getMouseP2[0];
										my = _interactor$getMouseP2[1];
										var _ref = [mx - elem.scrollLeft, my - elem.scrollTop];
										mx = _ref[0];
										my = _ref[1];
									}

									// Perform the scale transformation
									var oldscale = scale;
									scale += mod;
									if (scale < 0.2) scale = 0.2;

									// Inform the renderer of the new scale
									renderer.setScale(scale);
									_this2._interactor.rerender();

									// Now scroll it so that it looks like we zoomed in
									if (mod != 0) {
										var top = elem.scrollTop;
										var left = elem.scrollLeft;

										// Translate by the mouse coordinate
										left += mx;
										top += my;

										// Undo the old zoom
										top /= oldscale;
										left /= oldscale;

										// Apply the new zoom
										top *= scale;
										left *= scale;

										// And untranslate the mouse
										left -= mx;
										top -= my;

										// And set the new scroll location
										elem.scrollTop = top;
										elem.scrollLeft = left;
									}
								};

								// Widget zoom buttons


								$(html).find(".mm-zoom-in").click(function (e) {
									return _updateZoom(_BUTTON_ZOOM);
								});
								$(html).find(".mm-zoom-out").click(function (e) {
									return _updateZoom(-_BUTTON_ZOOM);
								});

								// Scroll zoom
								$(html).on('mousewheel DOMMouseScroll', function (e) {
									// Browser compatability! :D
									if ("detail" in e.originalEvent && e.originalEvent.detail) {
										if (e.originalEvent.detail > 0) {
											_updateZoom(-_WHEEL_ZOOM, e);
										} else {
											_updateZoom(_WHEEL_ZOOM, e);
										}
									} else {
										if (e.originalEvent.deltaY > 0) {
											_updateZoom(-_WHEEL_ZOOM, e);
										} else {
											_updateZoom(_WHEEL_ZOOM, e);
										}
									}

									// Stop it scrolling the actual page
									e.preventDefault();
								});

							case 5:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addCanvas(_x, _x2) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return Zoom;
	}(Interaction);
});
/* Including packs: mm.main */
load.addDependency("about:blank", ["mm.main"], ["backbone", "joint", "jquery", "lodash", "mm.graphManager"], 0, 0);

"use strict";

load.provide("mm.main", function () {
	var graphManager = load.require("mm.graphManager");

	load.requireExternal("jquery", "//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js");
	load.requireExternal("lodash", "//cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.2/lodash.min.js", ["jquery"]);
	load.requireExternal("backbone", "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min.js", ["lodash"]);
	load.requireExternal("joint", "//cdnjs.cloudflare.com/ajax/libs/jointjs/0.9.7/joint.min.js", ["backbone"]);

	var _mkCss = function _mkCss(url) {
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = url;
		document.head.appendChild(link);
	};

	_mkCss("//cdnjs.cloudflare.com/ajax/libs/jointjs/0.9.7/joint.min.css");

	/** Main object. Should be the main entry point and is in change of setting everything up.
  */
	var main = {};

	$(function () {
		// This is a JQuery shortcut for "run when the page has finished loading"
		graphManager.createAll();
	});

	return main;
});
/* Including packs: mm.HTMLGraphFinder, mm.graphManager */
load.addDependency("about:blank", ["mm.HTMLGraphFinder", "mm.graphManager"], ["mm.Editor", "mm.HTMLGraphFinder", "mm.Interactor", "mm.Renderer", "mm.structs.AbstractGraph"], 0, 0);

"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

load.provide("mm.HTMLGraphFinder", function () {
	var Renderer = load.require("mm.Renderer");

	return regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, n, editor;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context.prev = 3;
						_iterator = Array.from(document.querySelectorAll("graph-display"))[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							_context.next = 13;
							break;
						}

						n = _step.value;
						editor = n.getAttribute("editor") ? ["true", "1", "editor"].includes(n.getAttribute("editor").toLowerCase()) : false;
						_context.next = 10;
						return {
							renderer: new Renderer(n, editor),
							objectsUrl: n.getAttribute("src"),
							typesUrl: n.getAttribute("types"),
							editor: editor
						};

					case 10:
						_iteratorNormalCompletion = true;
						_context.next = 5;
						break;

					case 13:
						_context.next = 19;
						break;

					case 15:
						_context.prev = 15;
						_context.t0 = _context["catch"](3);
						_didIteratorError = true;
						_iteratorError = _context.t0;

					case 19:
						_context.prev = 19;
						_context.prev = 20;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 22:
						_context.prev = 22;

						if (!_didIteratorError) {
							_context.next = 25;
							break;
						}

						throw _iteratorError;

					case 25:
						return _context.finish(22);

					case 26:
						return _context.finish(19);

					case 27:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 15, 19, 27], [20,, 22, 26]]);
	});
});

load.provide("mm.graphManager", function () {
	var AbstractGraph = load.require("mm.structs.AbstractGraph");
	var finder = load.require("mm.HTMLGraphFinder");
	var Interactor = load.require("mm.Interactor");
	var Editor = load.require("mm.Editor");

	/** Controls all the AbstractNodeMaps available, and creates them and their renderers.
  */
	var graphManager = {};

	/** Array of all the interactors and graphs known about
  * 
  * @type {array} An array of [interactor, graph] pairs.
  */
	var _graphs = [];

	/** Loop through all the nodes (as per mm.HTMLGraphFinder) and set them up
  * 
  * @async
  */
	graphManager.createAll = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
		var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, x, ag, renderers, editor, interactor, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, i, _ag;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						_context2.prev = 3;

						for (_iterator2 = finder()[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							x = _step2.value;
							ag = new AbstractGraph(x.objectsUrl, x.typesUrl, x.editor);
							renderers = [x.renderer];
							editor = x.editor ? new Editor(ag) : null;
							interactor = new Interactor(ag, renderers, editor);


							_graphs.push([interactor, ag]);
						}

						_context2.next = 11;
						break;

					case 7:
						_context2.prev = 7;
						_context2.t0 = _context2["catch"](3);
						_didIteratorError2 = true;
						_iteratorError2 = _context2.t0;

					case 11:
						_context2.prev = 11;
						_context2.prev = 12;

						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}

					case 14:
						_context2.prev = 14;

						if (!_didIteratorError2) {
							_context2.next = 17;
							break;
						}

						throw _iteratorError2;

					case 17:
						return _context2.finish(14);

					case 18:
						return _context2.finish(11);

					case 19:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						_context2.prev = 22;
						_iterator3 = _graphs[Symbol.iterator]();

					case 24:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							_context2.next = 34;
							break;
						}

						_step3$value = _slicedToArray(_step3.value, 2);
						i = _step3$value[0];
						_ag = _step3$value[1];
						_context2.next = 30;
						return _ag.load();

					case 30:
						i.rerender();

					case 31:
						_iteratorNormalCompletion3 = true;
						_context2.next = 24;
						break;

					case 34:
						_context2.next = 40;
						break;

					case 36:
						_context2.prev = 36;
						_context2.t1 = _context2["catch"](22);
						_didIteratorError3 = true;
						_iteratorError3 = _context2.t1;

					case 40:
						_context2.prev = 40;
						_context2.prev = 41;

						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}

					case 43:
						_context2.prev = 43;

						if (!_didIteratorError3) {
							_context2.next = 46;
							break;
						}

						throw _iteratorError3;

					case 46:
						return _context2.finish(43);

					case 47:
						return _context2.finish(40);

					case 48:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, this, [[3, 7, 11, 19], [12,, 14, 18], [22, 36, 40, 48], [41,, 43, 47]]);
	}));

	return graphManager;
});
/* Including packs: mm.Interactor */
load.addDependency("about:blank", ["mm.Interactor"], ["interactorResources/detailsPanel.html", "interactorResources/editHelp.html", "interactorResources/editWidget.html", "interactorResources/resizeWidgets.html", "interactorResources/styles.css", "interactorResources/viewWidget.html", "mm.InteractorState", "mm.interactions.EdgeChange", "mm.interactions.EdgeEdit", "mm.interactions.EditHelp", "mm.interactions.EditSimpleImpExp", "mm.interactions.EditUndo", "mm.interactions.HoverView", "mm.interactions.Keyboard", "mm.interactions.MultiSelect", "mm.interactions.NodeEdit", "mm.interactions.NodeMove", "mm.interactions.Pan", "mm.interactions.Resize", "mm.interactions.Zoom", "mm.structs.ObjectNode", "mm.textGen", "mm.utils.getfile"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

load.provide("mm.Interactor", function () {
	var getfile = load.require("mm.utils.getfile");
	var textGen = load.require("mm.textGen");
	var ObjectNode = load.require("mm.structs.ObjectNode");

	var Pan = load.require("mm.interactions.Pan");
	var Zoom = load.require("mm.interactions.Zoom");
	var HoverView = load.require("mm.interactions.HoverView");
	var EditHelp = load.require("mm.interactions.EditHelp");
	var NodeMove = load.require("mm.interactions.NodeMove");
	var EdgeChange = load.require("mm.interactions.EdgeChange");
	var NodeEdit = load.require("mm.interactions.NodeEdit");
	var EdgeEdit = load.require("mm.interactions.EdgeEdit");
	var Resize = load.require("mm.interactions.Resize");
	var MultiSelect = load.require("mm.interactions.MultiSelect");
	var Keyboard = load.require("mm.interactions.Keyboard");
	var EditSimpleImpExp = load.require("mm.interactions.EditSimpleImpExp");
	var EditUndo = load.require("mm.interactions.EditUndo");
	var InteractorState = load.require("mm.InteractorState");

	var _resEditWidget = load.requireResource("interactorResources/editWidget.html");
	var _resDetailsPanel = load.requireResource("interactorResources/detailsPanel.html");
	var _resEditHelp = load.requireResource("interactorResources/editHelp.html");
	var _resResizeWidgets = load.requireResource("interactorResources/resizeWidgets.html");
	var _resViewWidget = load.requireResource("interactorResources/viewWidget.html");
	var _resStyles = load.requireResource("interactorResources/styles.css");

	// First of all, insert CSS file
	var cssNode = document.createElement("style");
	cssNode.innerHTML = _resStyles;
	$("head").append(cssNode);

	/** An interactor manages the interactions that a user can make with a graph
  * 
  * It connects with the renderers, and a list of "Interactions", and forms the glue that holds them together, as
  *  well as providing "general" access to features shared across all interactions, such as the details panel.
  * 
  * @param {mm.structs.AbstractGraph} abstractGraph The abstract graph for the current graph.
  * @param {array<mm.Renderer>} renderers An array of renderers that are rendering this graph.
  * @param {?mm.Editor} editor The editor for this graph. Null if editing is disabled.
  */
	var Interactor = function () {
		function Interactor(abstractGraph, renderers, editor) {
			var _this = this;

			_classCallCheck(this, Interactor);

			/** The abstract graph being interacted with
    * @type mm.structs.AbstractGraph
    * @private
    */
			this._abstractGraph = abstractGraph;
			/** The array of renderers rendering this graph
    * @type mm.Renderer
    * @private
    */
			this._renderers = renderers;
			/** The editor (if editing is enabled, else null) editing this graph
    * @type mm.Editor
    * @private
    */
			this._editor = editor;

			/** The handler function called when the details panel closes
    * 
    * Null if no such handler exists.
    * @type ?function()
    * @private
    */
			this._detailsSwitch = null;

			this._interactorState = new InteractorState(this, this._abstractGraph, editor);

			// Tell the renderers of their interactor
			renderers.forEach(function (r) {
				return r.setInteractor(_this);
			});

			/** An array of all the interactions
    * 
    * To add an interaction, import it and add it to this list. Just be aware that the order is probably
    * important.
    * 
    * @type array<mm.interactions.Interaction>
    * @private
    */
			this._interactions = [new Pan(this, abstractGraph, editor, this._interactorState), new Zoom(this, abstractGraph, editor, this._interactorState), new HoverView(this, abstractGraph, editor, this._interactorState), new EditHelp(this, abstractGraph, editor, this._interactorState), new NodeMove(this, abstractGraph, editor, this._interactorState), new EdgeChange(this, abstractGraph, editor, this._interactorState), new NodeEdit(this, abstractGraph, editor, this._interactorState), new EdgeEdit(this, abstractGraph, editor, this._interactorState), new Resize(this, abstractGraph, editor, this._interactorState), new MultiSelect(this, abstractGraph, editor, this._interactorState), new Keyboard(this, abstractGraph, editor, this._interactorState), new EditSimpleImpExp(this, abstractGraph, editor, this._interactorState), new EditUndo(this, abstractGraph, editor, this._interactorState)];
		}

		/** Called by renderers when adding a new node
   * 
   * Passes the details onto interactions for them to handle.
   * @async
   * @param {mm.Renderer} renderer The renderer that added this node.
   * @param {mm.Renderer._node} object The jointjs node that was added.
   * @param {mm.structs.ObjectNode} node The (mindmap) node that was added.
   */


		Interactor.prototype.addNode = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, object, node) {
				var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_iteratorNormalCompletion = true;
								_didIteratorError = false;
								_iteratorError = undefined;
								_context.prev = 3;

								for (_iterator = this._interactions[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									i = _step.value;

									i.addNode(renderer, object, node);
								}
								_context.next = 11;
								break;

							case 7:
								_context.prev = 7;
								_context.t0 = _context["catch"](3);
								_didIteratorError = true;
								_iteratorError = _context.t0;

							case 11:
								_context.prev = 11;
								_context.prev = 12;

								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}

							case 14:
								_context.prev = 14;

								if (!_didIteratorError) {
									_context.next = 17;
									break;
								}

								throw _iteratorError;

							case 17:
								return _context.finish(14);

							case 18:
								return _context.finish(11);

							case 19:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[3, 7, 11, 19], [12,, 14, 18]]);
			}));

			function addNode(_x, _x2, _x3) {
				return ref.apply(this, arguments);
			}

			return addNode;
		}();

		/** Called by renderers when adding a new edge
   * 
   * Passes the details onto interactions for them to handle.
   * @async
   * @param {mm.Renderer} renderer The renderer that added this edge.
   * @param {joint.dia.Link} object The jointjs link that was added.
   * @param {mm.structs.ObjectArrow} node The (mindmap) edge that was added.
   */


		Interactor.prototype.addEdge = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(renderer, object, edge) {
				var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, i;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_iteratorNormalCompletion2 = true;
								_didIteratorError2 = false;
								_iteratorError2 = undefined;
								_context2.prev = 3;

								for (_iterator2 = this._interactions[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									i = _step2.value;

									i.addEdge(renderer, object, edge);
								}
								_context2.next = 11;
								break;

							case 7:
								_context2.prev = 7;
								_context2.t0 = _context2["catch"](3);
								_didIteratorError2 = true;
								_iteratorError2 = _context2.t0;

							case 11:
								_context2.prev = 11;
								_context2.prev = 12;

								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}

							case 14:
								_context2.prev = 14;

								if (!_didIteratorError2) {
									_context2.next = 17;
									break;
								}

								throw _iteratorError2;

							case 17:
								return _context2.finish(14);

							case 18:
								return _context2.finish(11);

							case 19:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this, [[3, 7, 11, 19], [12,, 14, 18]]);
			}));

			function addEdge(_x4, _x5, _x6) {
				return ref.apply(this, arguments);
			}

			return addEdge;
		}();

		/** Called by renderers when adding a new canvas
   * 
   * Passes the details onto interactions for them to handle.
   * @async
   * @param {mm.Renderer} renderer The renderer that added this canvas.
   * @param {HTMLElement} node The html node for this canvas, the outermost element (with .mm-root)
   * @param {joint.dia.Graph} graph The jointjs graph that was added.
   */


		Interactor.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(renderer, node, graph) {
				var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, i;

				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								// Put the widget thing with the zoom things
								$(node).prepend(_resViewWidget);

								// And maybe the edit and controls
								if (this._editor) {
									$(node).prepend(_resEditWidget);

									$(node).prepend(_resEditHelp);

									$(node).find(".mm-inner").prepend(_resResizeWidgets);
								}

								// And the details panel
								$(node).append(_resDetailsPanel);

								_iteratorNormalCompletion3 = true;
								_didIteratorError3 = false;
								_iteratorError3 = undefined;
								_context3.prev = 6;
								for (_iterator3 = this._interactions[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									i = _step3.value;

									i.addCanvas(renderer, node, graph);
								}
								_context3.next = 14;
								break;

							case 10:
								_context3.prev = 10;
								_context3.t0 = _context3["catch"](6);
								_didIteratorError3 = true;
								_iteratorError3 = _context3.t0;

							case 14:
								_context3.prev = 14;
								_context3.prev = 15;

								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}

							case 17:
								_context3.prev = 17;

								if (!_didIteratorError3) {
									_context3.next = 20;
									break;
								}

								throw _iteratorError3;

							case 20:
								return _context3.finish(17);

							case 21:
								return _context3.finish(14);

							case 22:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this, [[6, 10, 14, 22], [15,, 17, 21]]);
			}));

			function addCanvas(_x7, _x8, _x9) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		/** Causes all the renderers to redraw the graph, in case things have changed */


		Interactor.prototype.rerender = function rerender() {
			var _this2 = this;

			this._interactorState.rerendering = true;
			this._interactions.forEach(function (i) {
				return i.clean();
			});
			this._renderers.forEach(function (r) {
				return r.rerender(_this2._abstractGraph.objects);
			});
			this._interactorState.rerendering = false;
			this.updateMultiSel();
		};

		/** Causes the interactor to forget all the nodes and edges it knows about */


		Interactor.prototype.clear = function clear() {
			this._nodes = new Map();
			this._edges = [];
		};

		/** Returns an [x, y] pair indicating where the mouse is on the given canvas
   * 
   * This takes into account scaling.
   * @param {object} e A jquery mouse event.
   * @param {mm.Renderer} renderer The renderer for that element.
   * @return {array<float>} The [x, y] location of the mouse.
   */


		Interactor.prototype.getMousePos = function getMousePos(e, renderer) {
			var elem = renderer.getRoot();
			var scale = renderer.getScale();
			var hMargins = $(elem).find(".mm-inner").outerWidth() - $(elem).find(".mm-inner").innerWidth();
			var vMargins = $(elem).find(".mm-inner").outerHeight() - $(elem).find(".mm-inner").innerHeight();

			return [e.pageX + -$(elem).find("svg").offset().left /* - $(elem).find(".mm-inner")[0].scrollLeft*/, e.pageY + -$(elem).find("svg").offset().top /* - $(elem).find(".mm-inner")[0].scrollTop*/].map(function (x) {
				return x / scale;
			});
		};

		/** Loads information about a specific object into the details panel and displays it
   * 
   * Both nodes and edges are displayed using this function, the type is detected automatically.
   * 
   * @param {mm.structs.ObjectNode|mm.structs.ObjectEdge} object The object to display.
   * @param {mm.Renderer} renderer The renderer to load details with.
   * @param {boolean=false} show To show the panel.
   * @param {boolean=false} expand To expard the panel and show more information (for nodes).
   * @param {boolean=false} force If the panel is already loaded and is expanded, default is to not change it.
   *  This forces the change.
   * @param {boolean=false} ignoreHandler Ignore the event handler. Be really sure that the handler is for your
   *  code though.
   * @param {?function()} handler Function to call when the panel is closed or changes to something else.
   */


		Interactor.prototype.loadDetails = function loadDetails(object, renderer, show, expand, force, handler, ignoreHandler) {
			var panel = $(renderer.getRoot()).find(".mm-details-panel");
			if (panel.hasClass("long") && !force) return;

			if (object instanceof ObjectNode) {
				panel.removeClass("edge");
				panel.find(".mm-details-short").html(textGen.detailsShort(object));

				if (!this._editor) {
					panel.find(".mm-details-long").html(textGen.detailsLong(object));
				} else {
					panel.find(".mm-details-edit-type").html(textGen.editSelect(object, this._abstractGraph.types));
					panel.find(".mm-details-edit-width").val(object.width);
					panel.find(".mm-details-edit-hidden")[0].checked = object.hidden;
					panel.find(".mm-details-edit-inner").html(textGen.editForm(object));
				}
			} else {
				panel.addClass("edge");
				panel.find(".mm-details-short").html("");

				if (!this._editor) {
					//panel.find(".mm-details-long").html(textGen.detailsLong(object));
					// Not possible for edges
				} else {
						panel.find(".mm-details-edit-arrow-type").html(textGen.editEdgeSelect(object, this._abstractGraph.types));
						panel.find(".mm-details-edit-arrow-text").val(object.text);
					}
			}

			if (show) {
				panel.removeClass("hidden");
			}

			if (expand) {
				panel.addClass("long");
			}

			if (this._detailsSwitch && !ignoreHandler) this._detailsSwitch();
			this._detailsSwitch = handler;

			panel.attr("data-id", object.id);
		};

		/** Hides the details panel
   * 
   * @param {mm.Renderer} renderer The renderer on which to hide the panel.
   * @param {boolean=false} evenIfLong By default the panel isn't closed if it is expanded. This forces it to be
   *  closed even then.
   * @param {boolean=false} ignoreHandler Ignore the handler.
   * @return {boolean} True if the panel was closed, false if it isn't or it isn't open.
   */


		Interactor.prototype.hideDetailsPanel = function hideDetailsPanel(renderer, evenIfLong, ignoreHandler) {
			var panel = $(renderer.getRoot()).find(".mm-details-panel");

			if (panel.hasClass("long") && !evenIfLong) return false;
			if (panel.hasClass("hidden")) return false;

			panel.addClass("hidden");
			panel.removeClass("long");

			if (this._detailsSwitch && !ignoreHandler) this._detailsSwitch();
			this._detailsSwitch = null;
			return true;
		};

		Interactor.prototype.updateMultiSel = function updateMultiSel() {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = this._renderers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var r = _step4.value;

					$(r.getRoot()).find(".mm-selected").each(function (i, n) {
						return $(n).removeClass("mm-selected");
					});

					var _iteratorNormalCompletion5 = true;
					var _didIteratorError5 = false;
					var _iteratorError5 = undefined;

					try {
						for (var _iterator5 = this._interactorState.getMultiSel()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
							var n = _step5.value;

							if (r.getSvgNode(n.id)) {
								$(r.getSvgNode(n.id)).addClass("mm-selected");
							}
						}
					} catch (err) {
						_didIteratorError5 = true;
						_iteratorError5 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion5 && _iterator5.return) {
								_iterator5.return();
							}
						} finally {
							if (_didIteratorError5) {
								throw _iteratorError5;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		};

		Interactor.prototype.updateHidden = function updateHidden(node) {
			var _this3 = this;

			this._renderers.forEach(function (r) {
				return r.updateHidden(_this3._abstractGraph.objects, node);
			});
		};

		/** Undoes an action using the editor
   * 
   * This also rerenders the graph, so it should be called rather than on editor directly.
   * 
   * @async
   */


		Interactor.prototype.undo = function undo() {
			var _this4 = this;

			this._editor.undo();
			this._renderers.forEach(function (r) {
				return _this4.hideDetailsPanel(r, true);
			});
			this.rerender();
		};

		/** Redoes an action using the editor
   * 
   * This also rerenders the graph, so it should be called rather than on editor directly.
   * 
   * @async
   */


		Interactor.prototype.redo = function redo() {
			var _this5 = this;

			this._editor.redo();
			this._renderers.forEach(function (r) {
				return _this5.hideDetailsPanel(r, true);
			});
			this.rerender();
		};

		return Interactor;
	}();

	return Interactor;
});
/* Including packs: mm.interactions.EditSimpleImpExp */
load.addDependency("about:blank", ["mm.interactions.EditSimpleImpExp"], ["mm.interactions.Interaction"], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

load.provide("mm.interactions.EditSimpleImpExp", function () {
	var Interaction = load.require("mm.interactions.Interaction");

	/** A really simple import/export system
  * 
  * Attaches listeners to the "import" and "export" buttons, and uses a file input (import) or a file save (export)
  *  diolog to export the file.
  * 
  * @extends mm.Interaciton
  */
	return function (_Interaction) {
		_inherits(EditSimpleImpExp, _Interaction);

		function EditSimpleImpExp() {
			_classCallCheck(this, EditSimpleImpExp);

			return _possibleConstructorReturn(this, _Interaction.apply(this, arguments));
		}

		EditSimpleImpExp.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, node) {
				var _this2 = this;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								$(node).find(".mm-export-button").click(function (e) {
									// Export

									// First of all, get the diagram as a JSON string
									var txt = JSON.stringify(_this2._abstractGraph.objects.toJson());

									// Now generate a data url for it
									var url = "";
									if ("download" in $("a")[0]) {
										// Fancy new modern browser
										url = "data:application/json;charset=utf-8," + encodeURIComponent(txt);
									} else {
										// Crappy old browser, serve as binary data so the browser doesn't try to display it
										url = "data:application/octet-stream;charset=utf-8," + encodeURIComponent(txt);
									}

									// Create a hyperlink
									var a = document.createElement("a");
									a.setAttribute("href", url);
									a.setAttribute("download", "mindmap.json");
									a.style.display = "none";

									// And then click this link
									document.body.appendChild(a);
									a.click();
									document.body.removeChild(a);
								});

								$(node).find(".mm-import-button").click(function (e) {
									// File input

									// Create the input element
									var input = document.createElement("input");
									input.setAttribute("type", "file");
									input.style.display = "none";

									// Add a handler for the file being uploaded
									$(input).change(function (e) {
										var fr = new FileReader();

										fr.onload = function (le) {
											// Handle the file, we use a try here in case it is invalid
											try {
												var obj = JSON.parse(fr.result);

												// Some checking of the file
												var err = _this2._abstractGraph.objects.check(obj);

												if (err) {
													alert("Sorry, could not import the file. The error message given was:\n\n" + err);
												} else {
													// Everything is OK, lets load it
													_this2._abstractGraph.objects.reload(obj);
													_this2._interactor.rerender();
													_this2._editor.clearUndoStack();
												}
											} catch (e) {
												alert("Sorry, that does not look like a valid file.");
											}
										};

										// Read the selected file as text into the filereader (duh)
										fr.readAsText(input.files[0]);
									});

									// And then click it!
									document.body.appendChild(input);
									input.click();
									document.body.removeChild(input);
								});

							case 2:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addCanvas(_x, _x2) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		return EditSimpleImpExp;
	}(Interaction);
});
/* Including packs: mm.interactions.Interaction */
load.addDependency("about:blank", ["mm.interactions.Interaction"], [], 0, 0);

"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

load.provide("mm.interactions.Interaction", function () {
	/** Subclasses of this type represent a single "module" that can be used to interact the diagram
  * 
  * The class has three functions that are called when a node, edge or canvas is added to the graph. These will
  * allow you to attach listeners to them in order to interact with the diagram.
  * 
  * You will probably want to add this to the mm.Interactor's array of interactions if you want it to actually do
  * anything.
  */
	return function () {
		/** Constructs a new interaction
   * 
   * @param {mm.Interactor} interactor The interactor for this interaction.
   * @param {mm.structs.AbstractGraph} abstractGraph The abstract graph.
   * @param {?mm.Editor} editor The editor for this graph. Will be null if editing is disabled.
   */

		function Interaction(interactor, abstractGraph, editor, interactorState) {
			_classCallCheck(this, Interaction);

			/** The interactor for this interaction
    * @type mm.Interactor
    * @protected
    */
			this._interactor = interactor;
			/** The abstract graph
    * @type mm.structs.AbstractGraph
    * @protected
    */
			this._abstractGraph = abstractGraph;
			/** The editor for this interaction, if it exists
    * @type ?mm.editor
    * @protected
    */
			this._editor = editor;

			this._state = interactorState;

			/** A mapping from (diagram) node ids to [renderer, joint, node] triples as per addNode
    * @type Map<int, array>
    * @protected
    */
			this._nodes = new Map();
			/** A mapping from (diagram) edge ids to [renderer, joint, edge] triples as per addEdge
    * @type Map<int, array>
    * @protected
    */
			this._edges = new Map();
		}

		/** Called when a new node is added to the diagram
   * 
   * @async
   * @param {mm.Renderer} renderer The renderer that added the node.
   * @param {joint.dia.Element} joint The joint element that was added.
   * @param {mm.objects.ObjectNode} node The node of the diagram.
   */


		Interaction.prototype.addNode = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(renderer, joint, node) {
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this._nodes.set(node.id, [renderer, joint, node]);

							case 1:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function addNode(_x, _x2, _x3) {
				return ref.apply(this, arguments);
			}

			return addNode;
		}();

		/** Called when a new edge is added to the diagram
   * 
   * @async
   * @param {mm.Renderer} renderer The renderer that added the node.
   * @param {joint.dia.Link} joint The joint link that was added.
   * @param {mm.objects.ObjectEdge} node The edge of the diagram.
   */


		Interaction.prototype.addEdge = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(renderer, joint, edge) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								this._edges.set(edge.id, [renderer, joint, edge]);

							case 1:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function addEdge(_x4, _x5, _x6) {
				return ref.apply(this, arguments);
			}

			return addEdge;
		}();

		/** Called when a new canvas is added to the diagram
   * 
   * @async
   * @param {mm.Renderer} renderer The renderer that added the node.
   * @param {HTMLElement} html The HTML element that was added.
   */


		Interaction.prototype.addCanvas = function () {
			var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(renderer, html) {
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function addCanvas(_x7, _x8) {
				return ref.apply(this, arguments);
			}

			return addCanvas;
		}();

		// Pass


		/** Called by the Interactor when it is being rerendered, asking the Interaction to delete all the nodes and
   * edges it knows about.
   */

		Interaction.prototype.clean = function clean() {
			this._edges = new Map();
			this._nodes = new Map();
		};

		/** Iterates through all the edges of the given iterator
   * 
   * @param {mm.Renderer} renderer The renderer that added the edges.
   * @yield {array} A [renderer, joint, edge] triplet as per the arguments to addEdge.
   */


		Interaction.prototype.myEdges = regeneratorRuntime.mark(function myEdges(renderer) {
			var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e;

			return regeneratorRuntime.wrap(function myEdges$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_iteratorNormalCompletion = true;
							_didIteratorError = false;
							_iteratorError = undefined;
							_context4.prev = 3;
							_iterator = this._edges.values()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
								_context4.next = 13;
								break;
							}

							e = _step.value;

							if (!(e[0] == renderer)) {
								_context4.next = 10;
								break;
							}

							_context4.next = 10;
							return e;

						case 10:
							_iteratorNormalCompletion = true;
							_context4.next = 5;
							break;

						case 13:
							_context4.next = 19;
							break;

						case 15:
							_context4.prev = 15;
							_context4.t0 = _context4["catch"](3);
							_didIteratorError = true;
							_iteratorError = _context4.t0;

						case 19:
							_context4.prev = 19;
							_context4.prev = 20;

							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}

						case 22:
							_context4.prev = 22;

							if (!_didIteratorError) {
								_context4.next = 25;
								break;
							}

							throw _iteratorError;

						case 25:
							return _context4.finish(22);

						case 26:
							return _context4.finish(19);

						case 27:
						case "end":
							return _context4.stop();
					}
				}
			}, myEdges, this, [[3, 15, 19, 27], [20,, 22, 26]]);
		});

		/** Iterates through all the nodes of the given iterator
   * 
   * @param {mm.Renderer} renderer The renderer that added the node.
   * @yield {array} A [renderer, joint, node] triplet as per the arguments to addNode.
   */

		Interaction.prototype.myNodes = regeneratorRuntime.mark(function myNodes(renderer) {
			var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, e;

			return regeneratorRuntime.wrap(function myNodes$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_iteratorNormalCompletion2 = true;
							_didIteratorError2 = false;
							_iteratorError2 = undefined;
							_context5.prev = 3;
							_iterator2 = this._nodes.values()[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
								_context5.next = 13;
								break;
							}

							e = _step2.value;

							if (!(e[0] == renderer)) {
								_context5.next = 10;
								break;
							}

							_context5.next = 10;
							return e;

						case 10:
							_iteratorNormalCompletion2 = true;
							_context5.next = 5;
							break;

						case 13:
							_context5.next = 19;
							break;

						case 15:
							_context5.prev = 15;
							_context5.t0 = _context5["catch"](3);
							_didIteratorError2 = true;
							_iteratorError2 = _context5.t0;

						case 19:
							_context5.prev = 19;
							_context5.prev = 20;

							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}

						case 22:
							_context5.prev = 22;

							if (!_didIteratorError2) {
								_context5.next = 25;
								break;
							}

							throw _iteratorError2;

						case 25:
							return _context5.finish(22);

						case 26:
							return _context5.finish(19);

						case 27:
						case "end":
							return _context5.stop();
					}
				}
			}, myNodes, this, [[3, 15, 19, 27], [20,, 22, 26]]);
		});
		return Interaction;
	}();
});
load.importAndEvaluate("mm.main");
