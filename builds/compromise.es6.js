/* compromise v11.2.0
   http://compromise.cool
   MIT
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlp = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
/* efrt trie-compression v2.0.3  github.com/nlp-compromise/efrt  - MIT */
!function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
module.exports={
  "author": "Spencer Kelly <spencermountain@gmail.com> (http://spencermounta.in)",
  "name": "compromise",
  "description": "natural language processing in the browser",
  "version": "11.2.0",
  "main": "./builds/compromise.js",
  "repository": {
    "type": "git",
    "url": "git://github.com/nlp-compromise/compromise.git"
  },
  "scripts": {
    "test": "tape \"./test/unit/**/*.test.js\" | tap-dot",
    "testb": "TESTENV=prod tape \"./test/unit/**/*.test.js\" | tap-dot",
    "buildTest": "TESTENV=prod node ./scripts/test.js",
    "test:types": "tsc --project test/types",
    "browserTest": "node ./scripts/browserTest.js",
    "benchmark": "node ./scripts/benchmark.js",
    "build": "node ./scripts/build/index.js",
    "pack": "node ./scripts/pack.js",
    "prepublishOnly": "node ./scripts/prepublish",
    "postpublish": "node ./scripts/postpublish",
    "demo": "node ./scripts/demo.js",
    "watch": "amble ./scratch.js",
    "filesize": "node ./scripts/filesize.js",
    "coverage": "node ./scripts/postpublish/coverage.js",
    "lint": "node ./scripts/prepublish/linter.js"
  },
  "files": [
    "builds/",
    "docs/"
  ],
  "dependencies": {
    "efrt-unpack": "2.0.3"
  },
  "devDependencies": {
    "amble": "0.0.5",
    "babel-preset-es2015": "^6.24.0",
    "babelify": "7.3.0",
    "babili": "0.0.11",
    "browserify": "13.0.1",
    "browserify-glob": "^0.2.0",
    "chalk": "^1.1.3",
    "codacy-coverage": "^2.0.3",
    "compromise-plugin": "0.0.8",
    "derequire": "^2.0.3",
    "eslint": "^3.1.1",
    "gaze": "^1.1.1",
    "nyc": "^8.4.0",
    "shelljs": "^0.7.2",
    "tap-dot": "^1.0.5",
    "tape": "4.6.0",
    "uglify-js": "2.7.0"
  },
  "license": "MIT"
}

},{}],3:[function(_dereq_,module,exports){
'use strict';
const tagset = _dereq_('./tags');

// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const c = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  black: '\x1b[30m'
};
//dont use colors on client-side
if (typeof module === 'undefined') {
  Object.keys(c).forEach(k => {
    c[k] = '';
  });
}

//coerce any input into a string
exports.ensureString = input => {
  if (typeof input === 'string') {
    return input;
  } else if (typeof input === 'number') {
    return '' + input;
  }
  return '';
};
//coerce any input into a string
exports.ensureObject = input => {
  if (typeof input !== 'object') {
    return {};
  }
  if (input === null || input instanceof Array) {
    return {};
  }
  return input;
};

exports.titleCase = str => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

//shallow-clone an object
exports.copy = o => {
  let o2 = {};
  o = exports.ensureObject(o);
  Object.keys(o).forEach(k => {
    o2[k] = o[k];
  });
  return o2;
};
exports.extend = (obj, a) => {
  obj = exports.copy(obj);
  const keys = Object.keys(a);
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = a[keys[i]];
  }
  return obj;
};

//colorization
exports.green = function(str) {
  return c.green + str + c.reset;
};
exports.red = function(str) {
  return c.red + str + c.reset;
};
exports.blue = function(str) {
  return c.blue + str + c.reset;
};
exports.magenta = function(str) {
  return c.magenta + str + c.reset;
};
exports.cyan = function(str) {
  return c.cyan + str + c.reset;
};
exports.yellow = function(str) {
  return c.yellow + str + c.reset;
};
exports.black = function(str) {
  return c.black + str + c.reset;
};
exports.printTag = function(tag) {
  if (tagset[tag]) {
    const color = tagset[tag].color || 'blue';
    return exports[color](tag);
  }
  return tag;
};
exports.printTerm = function(t) {
  const tags = Object.keys(t.tags);
  for (let i = 0; i < tags.length; i++) {
    if (tagset[tags[i]]) {
      const color = tagset[tags[i]].color || 'black';
      return exports[color](t.out('text'));
    }
  }
  return c.reset + t.plaintext + c.reset;
};

exports.leftPad = function(str, width, char) {
  char = char || ' ';
  str = str.toString();
  while (str.length < width) {
    str += char;
  }
  return str;
};

exports.isArray = function(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

},{"./tags":94}],4:[function(_dereq_,module,exports){
(function (global){
'use strict';
const buildText = _dereq_('./text/build');
const pkg = _dereq_('../package.json');
const log = _dereq_('./log');
const unpack = _dereq_('./world/unpack');
let world = _dereq_('./world');
let w = world.w;

//the main function
const nlp = function(str, lex) {
  if (lex) {
    w.plugin({
      words: lex
    });
  }
  let doc = buildText(str, w);
  doc.tagger();
  return doc;
};

//this is used, atleast, for testing the packing
nlp.unpack = function(plugin) {
  return unpack(plugin);
};
//this is handy
nlp.version = pkg.version;
//turn-on some debugging
nlp.verbose = function(str) {
  log.enable(str);
};
//same as main method, except with no POS-tagging.
nlp.tokenize = function(str) {
  return buildText(str);
};

//uncompress user-submitted lexicon
nlp.plugin = function(plugin) {
  w.plugin(plugin);
};
//contribute words to the lexicon
nlp.addWords = function(lex) {
  w.plugin({
    words: lex
  });
};
nlp.addTags = function(tags) {
  w.plugin({
    tags: tags
  });
};
nlp.addRegex = function(regex) {
  w.plugin({
    regex: regex
  });
};
nlp.addPatterns = function(patterns) {
  w.plugin({
    patterns: patterns
  });
};
nlp.addPlurals = function(plurals) {
  w.plugin({
    plurals: plurals
  });
};
nlp.addConjugations = function(conj) {
  w.plugin({
    conjugations: conj
  });
};

//make a weird, half-copy of this method
nlp.clone = function() {
  let w2 = world.reBuild();
  //this is weird, but it's okay
  var nlp2 = function(str, lex) {
    if (lex) {
      w2.plugin({
        words: lex
      });
    }
    let doc = buildText(str, w2);
    doc.tagger();
    return doc;
  };
  nlp2.tokenize = nlp.tokenize;
  nlp2.verbose = nlp.verbose;
  nlp2.version = nlp.version;
  ['Words', 'Tags', 'Regex', 'Patterns', 'Plurals', 'Conjugations'].forEach((fn) => {
    nlp2['add' + fn] = function(obj) {
      w2['add' + fn](obj);
    };
  });
  return nlp2;
};

//and then all-the-exports...
if (typeof self !== 'undefined') {
  self.nlp = nlp; // Web Worker
} else if (typeof window !== 'undefined') {
  window.nlp = nlp; // Browser
} else if (typeof global !== 'undefined') {
  global.nlp = nlp; // NodeJS
}
//don't forget amd!
if (typeof define === 'function' && define.amd) {
  define(nlp);
}
//then for some reason, do this too!
if (typeof module !== 'undefined') {
  module.exports = nlp;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../package.json":2,"./log":6,"./text/build":144,"./world":166,"./world/unpack":174}],5:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../fns');

// const colors = {
//   'Person': '#6393b9',
//   'Pronoun': '#81acce',
//   'Noun': 'steelblue',
//   'Verb': 'palevioletred',
//   'Adverb': '#f39c73',
//   'Adjective': '#b3d3c6',
//   'Determiner': '#d3c0b3',
//   'Preposition': '#9794a8',
//   'Conjunction': '#c8c9cf',
//   'Value': 'palegoldenrod',
//   'Expression': '#b3d3c6'
// };

const tag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ->   ' + pos;
  title += fns.leftPad((reason || ''), 15);
  console.log('%c' + title, ' color: #a2c99c');
};
const untag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ~*   ' + pos;
  title += '    ' + (reason || '');
  console.log('%c' + title, ' color: #b66a6a');
};
module.exports = {
  tag: tag,
  untag: untag,
};

},{"../fns":3}],6:[function(_dereq_,module,exports){
'use strict';
const client = _dereq_('./client');
const server = _dereq_('./server');

let enable = false;

module.exports = {
  enable: (str) => {
    if (str === undefined) {
      str = true;
    }
    enable = str;
  },
  tag: (t, pos, reason) => {
    if (enable === true || enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.tag(t, pos, reason);
      } else {
        server.tag(t, pos, reason);
      }
    }
  },
  unTag: (t, pos, reason) => {
    if (enable === true || enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.untag(t, pos, reason);
      } else {
        server.untag(t, pos, reason);
      }
    }
  }
};

},{"./client":5,"./server":7}],7:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../fns');

//use weird bash escape things for some colors
const tag = (t, pos, reason) => {
  let title = t.normal || '[' + t.silent_term + ']';
  title = fns.yellow(title);
  title = fns.leftPad('\'' + title + '\'', 20);
  title += '  ->   ' + fns.printTag(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.cyan(reason || '') + ')');
};

const untag = function(t, pos, reason) {
  let title = '-' + t.normal + '-';
  title = fns.red(title);
  title = fns.leftPad(title, 20);
  title += '  ~*   ' + fns.red(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.red(reason || '') + ')');
};

module.exports = {
  tag: tag,
  untag: untag,
};

},{"../fns":3}],8:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('./fns'),
  Terms: _dereq_('./terms'),
};

},{"./fns":3,"./terms":122}],9:[function(_dereq_,module,exports){
'use strict';
module.exports = {
  toNoun: _dereq_('./toNoun'),
  toSuperlative: _dereq_('./toSuperlative'),
  toComparative: _dereq_('./toComparative'),
  toAdverb: _dereq_('./toAdverb'),
  toVerb: _dereq_('./toVerb')
};

},{"./toAdverb":10,"./toComparative":11,"./toNoun":12,"./toSuperlative":13,"./toVerb":14}],10:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';
const not_matches = [/airs$/, /ll$/, /ee.$/, /ile$/, /y$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toAdverb;

const transforms = [
  {
    reg: /al$/i,
    repl: 'ally'
  },
  {
    reg: /ly$/i,
    repl: 'ly'
  },
  {
    reg: /(.{3})y$/i,
    repl: '$1ily'
  },
  {
    reg: /que$/i,
    repl: 'quely'
  },
  {
    reg: /ue$/i,
    repl: 'uly'
  },
  {
    reg: /ic$/i,
    repl: 'ically'
  },
  {
    reg: /ble$/i,
    repl: 'bly'
  },
  {
    reg: /l$/i,
    repl: 'ly'
  }
];

const adj_to_adv = function(str) {
  // console.log(str + '--');
  if (irregulars.hasOwnProperty(str) === true) {
    // console.log(str, irregulars[str]);
    return irregulars[str];
  }
  for (let i = 0; i < not_matches.length; i++) {
    if (not_matches[i].test(str) === true) {
      return null;
    }
  }
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return str + 'ly';
};
// console.log(adj_to_adv('good'));

module.exports = adj_to_adv;

},{"../../../world/more-data/irregularAdjectives":169}],11:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';
const do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /old$/, /oud$/, /e[ae]p$/];
const dont_rules = [/ary$/, /ous$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toComparative;

const transforms = [
  {
    reg: /y$/i,
    repl: 'ier'
  },
  {
    reg: /([aeiou])t$/i,
    repl: '$1tter'
  },
  {
    reg: /([aeou])de$/i,
    repl: '$1der'
  },
  {
    reg: /nge$/i,
    repl: 'nger'
  }
];

const to_comparative = function(str) {
  //known-irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //known-transforms
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  //dont-patterns
  for (let i = 0; i < dont_rules.length; i++) {
    if (dont_rules[i].test(str) === true) {
      return null;
    }
  }
  //do-patterns
  for (let i = 0; i < do_rules.length; i++) {
    if (do_rules[i].test(str) === true) {
      return str + 'er';
    }
  }
  //easy-one
  if (/e$/.test(str) === true) {
    return str + 'r';
  }
  return str + 'er';
// return null;
};

// console.log(to_comparative('big'));

module.exports = to_comparative;

},{"../../../world/more-data/irregularAdjectives":169}],12:[function(_dereq_,module,exports){
'use strict';
//convert 'cute' to 'cuteness'
const irregulars = {
  clean: 'cleanliness',
  naivety: 'naivety',
  hurt: 'hurt'
};

const transforms = [
  {
    reg: /y$/,
    repl: 'iness'
  },
  {
    reg: /le$/,
    repl: 'ility'
  },
  {
    reg: /ial$/,
    repl: 'y'
  },
  {
    reg: /al$/,
    repl: 'ality'
  },
  {
    reg: /ting$/,
    repl: 'ting'
  },
  {
    reg: /ring$/,
    repl: 'ring'
  },
  {
    reg: /bing$/,
    repl: 'bingness'
  },
  {
    reg: /sing$/,
    repl: 'se'
  },
  {
    reg: /ing$/,
    repl: 'ment'
  },
  {
    reg: /ess$/,
    repl: 'essness'
  },
  {
    reg: /ous$/,
    repl: 'ousness'
  }
];

const to_noun = function(w) {
  if (irregulars.hasOwnProperty(w)) {
    return irregulars[w];
  }
  const lastChar = w.charAt(w.length - 1);
  if (lastChar === 'w' || lastChar === 's') {
    return null;
  }
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(w) === true) {
      return w.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  return w + 'ness';
};

module.exports = to_noun;
// console.log(to_noun("great"))

},{}],13:[function(_dereq_,module,exports){
//turn 'quick' into 'quickest'
'use strict';
const do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /oud$/, /...p$/];
const dont_rules = [/ary$/];
const irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toSuperlative;

const transforms = [
  {
    reg: /y$/i,
    repl: 'iest'
  },
  {
    reg: /([aeiou])t$/i,
    repl: '$1ttest'
  },
  {
    reg: /([aeou])de$/i,
    repl: '$1dest'
  },
  {
    reg: /nge$/i,
    repl: 'ngest'
  },
  {
    reg: /([aeiou])te$/i,
    repl: '$1test'
  }
];

const to_superlative = function(str) {
  //irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }
  //known transforms
  for (let i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }
  //dont-rules
  for (let i = 0; i < dont_rules.length; i++) {
    if (dont_rules[i].test(str) === true) {
      return null;
    }
  }
  //do-rules
  for (let i = 0; i < do_rules.length; i++) {
    if (do_rules[i].test(str) === true) {
      if (str.charAt(str.length - 1) === 'e') {
        return str + 'st';
      }
      return str + 'est';
    }
  }
  return str + 'est';
};

module.exports = to_superlative;
// console.log(to_superlative("great"))

},{"../../../world/more-data/irregularAdjectives":169}],14:[function(_dereq_,module,exports){
'use strict';
//turn an adjective like 'soft' into a verb like 'soften'
//(don't do words like 'green' -> 'greenen')

const irregulars = {
  red: 'redden',
  sad: 'sadden',
  fat: 'fatten'
};

const toVerb = str => {
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  if (/e$/.test(str) === true) {
    return str + 'n';
  }
  return str + 'en';
};
module.exports = toVerb;

},{}],15:[function(_dereq_,module,exports){
'use strict';

//the plumbing to turn two words into a contraction
const combine = (a, b) => {
  b.whitespace.after = a.whitespace.after;
  a.whitespace.after = '';
  b.whitespace.before = '';
  a.silent_term = a.text;
  b.silent_term = b.text;
  b.text = '';
  a.tag('Contraction', 'new-contraction');
  b.tag('Contraction', 'new-contraction');
};

const irregulars = {
  can: 'can\'t',
  will: 'won\'t'
};

const contract = function(ts) {
  if (ts.expanded === false || ts.match('#Contraction').found) {
    return ts;
  }
  //he is -> he's
  ts.match('(#Noun|#QuestionWord) is').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'s';
    ls.contracted = true;
  });
  //he did -> he'd
  ts.match('#PronNoun did').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //how do -> how'd
  ts.match('#QuestionWord (did|do)').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //he would -> he'd
  ts.match('#Noun (could|would)').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  });
  //they are -> they're
  ts.match('(they|we|you) are').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'re';
    ls.contracted = true;
  });
  //i am -> i'm
  ts.match('i am').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'m';
    ls.contracted = true;
  });
  //they will -> they'll
  ts.match('(#Noun|#QuestionWord) will').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ll';
    ls.contracted = true;
  });
  //they have -> they've
  ts.match('(they|we|you|i) have').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ve';
    ls.contracted = true;
  });
  //is not -> isn't
  ts.match('(#Copula|#Modal|do|does|have|has|can|will) not').list.forEach((ls) => {
    combine(ls.terms[0], ls.terms[1]);
    //can't, won't
    if (irregulars.hasOwnProperty(ls.terms[0].text) === true) {
      ls.terms[0].text = irregulars[ls.terms[0].text];
    } else {
      ls.terms[0].text += 'n\'t';
    }
    ls.contracted = true;
  });
  return ts;
};

module.exports = contract;

},{}],16:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const contract = _dereq_('./contract');
const expand = _dereq_('./expand');

const ContractionCl = function(arr, world, original) {
  Terms.call(this, arr, world, original);
};

//Inherit properties
ContractionCl.prototype = Object.create(Terms.prototype);

ContractionCl.prototype.data = function() {
  let expanded = expand(this.clone());
  let contracted = contract(this.clone());
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    expanded: {
      normal: expanded.out('normal'),
      text: expanded.out('text')
    },
    contracted: {
      normal: contracted.out('normal'),
      text: contracted.out('text')
    },
    isContracted: Boolean(this.contracted)
  };
};
ContractionCl.prototype.expand = function() {
  return expand(this);
};
ContractionCl.prototype.contract = function() {
  return contract(this);
};
module.exports = ContractionCl;

},{"../../paths":8,"./contract":15,"./expand":17}],17:[function(_dereq_,module,exports){
'use strict';
//turn `i'd` into `i would`
const expand = function(ts) {
  if (ts.contracted === false) {
    return ts;
  }
  ts.terms.forEach((t) => {
    if (t.silent_term) {
      //this term also needs a space now too
      if (!t.text) {
        t.whitespace.before = ' ';
      }
      t._text = t.silent_term;
      //handle (some) capitalization
      if (t.tags.TitleCase) {
        t.toTitleCase();
      }
      t.normalize();
      t.silent_term = null;
      t.unTag('Contraction', 'expanded');
    }
  });
  return ts;
};
module.exports = expand;

},{}],18:[function(_dereq_,module,exports){
'use strict';
//find contractable, expanded-contractions
const find = (r) => {
  let remain = r.not('#Contraction');
  let m = remain.match('(#Noun|#QuestionWord) (#Copula|did|do|have|had|could|would|will)');
  m.concat(remain.match('(they|we|you|i) have'));
  m.concat(remain.match('i am'));
  m.concat(remain.match('(#Copula|#Modal|do|does|have|has|can|will) not'));
  m.list.forEach((ts) => {
    ts.expanded = true;
  });
  return m;
};
module.exports = find;

},{}],19:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const ContractionCl = _dereq_('./contraction');
const findPossible = _dereq_('./findPossible');
//the Contractions() subset class

const methods = {
  contract: function() {
    this.list.forEach(ts => ts.contract());
    return this;
  },
  expand: function() {
    this.list.forEach(ts => ts.expand());
    return this;
  },
  contracted: function() {
    this.list = this.list.filter(ts => {
      return ts.contracted;
    });
    return this;
  },
  expanded: function() {
    this.list = this.list.filter(ts => {
      return !ts.contracted;
    });
    return this;
  }
};

const find = function(r, n) {
  //find currently-contracted
  let found = r.match('#Contraction #Contraction #Contraction?');
  found.list = found.list.map(ts => {
    let c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = true;
    return c;
  });
  //find currently-expanded
  let expanded = findPossible(r);
  expanded.list.forEach(ts => {
    let c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = false;
    found.list.push(c);
  });
  found.sort('chronological');
  //get nth element
  if (typeof n === 'number') {
    found = found.get(n);
  }
  return found;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":146,"./contraction":16,"./findPossible":18}],20:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../paths').Terms;
const parseDate = _dereq_('./parseDate');

const _Date = function(arr, world, refText) {
  Terms.call(this, arr, world, refText);
  this.month = this.match('#Month');
};

//Inherit properties
_Date.prototype = Object.create(Terms.prototype);

_Date.prototype.data = function() {
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    date: parseDate(this)
  };
};

module.exports = _Date;

},{"../../paths":8,"./parseDate":24}],21:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Date = _dereq_('./date');
const weekdays = _dereq_('./weekday');
const months = _dereq_('./month');
//the Dates() subset class
const methods = {
  toShortForm: function() {
    this.match('#Month')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        months.toShortForm(t);
      });
    this.match('#WeekDay')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        weekdays.toShortForm(t);
      });
    return this;
  },
  toLongForm: function() {
    this.match('#Month')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        months.toLongForm(t);
      });
    this.match('#WeekDay')
      .terms()
      .list.forEach(ts => {
        let t = ts.terms[0];
        weekdays.toLongForm(t);
      });
    return this;
  }
};

const find = function(r, n) {
  let dates = r.match('#Date+');
  if (typeof n === 'number') {
    dates = dates.get(n);
  }
  dates.list = dates.list.map(ts => {
    return new Date(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return dates;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":146,"./date":20,"./month":23,"./weekday":27}],22:[function(_dereq_,module,exports){
//follow the javascript scheme
//january is 0
exports.longMonths = {
  'january': 0,
  'february': 1,
  'march': 2,
  'april': 3,
  'may': 4,
  'june': 5,
  'july': 6,
  'august': 7,
  'september': 8,
  'october': 9,
  'november': 10,
  'december': 11,
};
exports.shortMonths = {
  'jan': 0,
  'feb': 1,
  'febr': 1,
  'mar': 2,
  'apr': 3,
  'may': 4,
  'jun': 5,
  'jul': 6,
  'aug': 7,
  'sep': 8,
  'sept': 8,
  'oct': 9,
  'nov': 10,
  'dec': 11,
};

},{}],23:[function(_dereq_,module,exports){
'use strict';
const data = _dereq_('./data');
const shortMonths = data.shortMonths;
const longMonths = data.longMonths;

module.exports = {
  index: function (t) {
    if (t.tags.Month) {
      if (longMonths[t.normal] !== undefined) {
        return longMonths[t.normal];
      }
      if (shortMonths[t.normal] !== undefined) {
        return shortMonths[t.normal];
      }
    }
    return null;
  },
  toShortForm: function (t) {
    if (t.tags.Month !== undefined) {
      if (longMonths[t.normal] !== undefined) {
        let shorten = Object.keys(shortMonths);
        t.text = shorten[longMonths[t.normal]];
      }
    }
    t.dirty = true;
    return t;
  },
  toLongForm: function (t) {
    if (t.tags.Month !== undefined) {
      if (shortMonths[t.normal] !== undefined) {
        let longer = Object.keys(longMonths);
        t.text = longer[shortMonths[t.normal]];
      }
    }
    t.dirty = true;
    return t;
  }

};

},{"./data":22}],24:[function(_dereq_,module,exports){
'use strict';
const parseTime = _dereq_('./parseTime');
const weekdays = _dereq_('./weekday');
const months = _dereq_('./month');
//a hugely-conservative and incomplete first-pass for parsing written-dates

//validate a day-of-month
const isDate = (num) => {
  if (num && num < 31 && num > 0) {
    return true;
  }
  return false;
};

//please change this in one thousand years
const isYear = (num) => {
  if (num && num > 1000 && num < 3000) {
    return true;
  }
  return false;
};

//
const parseDate = (r) => {
  let result = {
    month: null,
    date: null,
    weekday: null,
    year: null,
    named: null,
    time: null,
  };
  let m = r.match('(#Holiday|today|tomorrow|yesterday)');
  if (m.found) {
    result.named = m.out('normal');
  }
  m = r.match('#Month');
  if (m.found) {
    result.month = months.index(m.list[0].terms[0]);
  }
  m = r.match('#WeekDay');
  if (m.found) {
    result.weekday = weekdays.index(m.list[0].terms[0]);
  }
  m = r.match('#Time');
  if (m.found) {
    result.time = parseTime(r);
    r.not('#Time'); //unsure
  }
  //january fifth 1992
  m = r.match('#Month #Value #Year');
  if (m.found) {
    let numbers = m.values().numbers();
    if (isDate(numbers[0])) {
      result.date = numbers[0];
    }
    let year = parseInt(r.match('#Year').out('normal'), 10);
    if (isYear(year)) {
      result.year = year;
    }
  }
  if (!m.found) {
    //january fifth,  january 1992
    m = r.match('#Month #Value');
    if (m.found) {
      let numbers = m.values().numbers();
      let num = numbers[0];
      if (isDate(num)) {
        result.date = num;
      }
    }
    //january 1992
    m = r.match('#Month #Year');
    if (m.found) {
      let num = parseInt(r.match('#Year').out('normal'), 10);
      if (isYear(num)) {
        result.year = num;
      }
    }
  }

  //fifth of january
  m = r.match('#Value of #Month');
  if (m.found) {
    let num = m.values().numbers()[0];
    if (isDate(num)) {
      result.date = num;
    }
  }
  return result;
};
module.exports = parseDate;

},{"./month":23,"./parseTime":25,"./weekday":27}],25:[function(_dereq_,module,exports){
'use strict';
const ampm = /([12]?[0-9]) ?(am|pm)/i;
const hourMin = /([12]?[0-9]):([0-9][0-9]) ?(am|pm)?/i;
//
const isHour = (num) => {
  if (num && num > 0 && num < 25) {
    return true;
  }
  return false;
};
const isMinute = (num) => {
  if (num && num > 0 && num < 60) {
    return true;
  }
  return false;
};


const parseTime = (r) => {
  let result = {
    logic: null,
    hour: null,
    minute: null,
    second: null,
    timezone: null
  };

  let logic = r.match('(by|before|for|during|at|until|after) #Time').firstTerm();
  if (logic.found) {
    result.logic = logic.out('normal');
  }

  let time = r.match('#Time');
  time.terms().list.forEach((ts) => {
    let t = ts.terms[0];
    //3pm
    let m = t.text.match(ampm);
    if (m !== null) {
      result.hour = parseInt(m[1], 10);
      if (m[2] === 'pm') {
        result.hour += 12;
      }
      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    }
    //3:15
    m = t.text.match(hourMin);
    if (m !== null) {
      result.hour = parseInt(m[1], 10);
      result.minute = parseInt(m[2], 10);
      if (!isMinute(result.minute)) {
        result.minute = null;
      }
      if (m[3] === 'pm') {
        result.hour += 12;
      }
      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    }
  });
  return result;
};
module.exports = parseTime;

},{}],26:[function(_dereq_,module,exports){
//follow the javascript scheme
//sunday is 0
exports.longDays = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6,
};
exports.shortDays = {
  'sun': 0,
  'mon': 1,
  'tues': 2,
  'wed': 3,
  'weds': 3,
  'thurs': 4,
  'fri': 5,
  'sat': 6,
};

},{}],27:[function(_dereq_,module,exports){
'use strict';
const data = _dereq_('./data');
const shortDays = data.shortDays;
const longDays = data.longDays;

module.exports = {
  index: function (t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        return longDays[t.normal];
      }
      if (shortDays[t.normal] !== undefined) {
        return shortDays[t.normal];
      }
    }
    return null;
  },
  toShortForm: function (t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        let shorten = Object.keys(shortDays);
        t.text = shorten[longDays[t.normal]];
      }
    }
    return t;
  },
  toLongForm: function (t) {
    if (t.tags.WeekDay) {
      if (shortDays[t.normal] !== undefined) {
        let longer = Object.keys(longDays);
        t.text = longer[shortDays[t.normal]];
      }
    }
    return t;
  }
};

},{"./data":26}],28:[function(_dereq_,module,exports){
'use strict';

//certain words can't be plural, like 'peace'
const hasPlural = function(t) {
  //end quick
  if (!t.tags.Noun) {
    return false;
  }
  if (t.tags.Plural) {
    return true;
  }
  //is it potentially plural?
  const noPlural = ['Pronoun', 'Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday'];
  for (let i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  }
  //terms known as un-inflectable, like 'peace'
  if (t.tags.Uncountable === true) {
    return false;
  }
  return true;
};

module.exports = hasPlural;

},{}],29:[function(_dereq_,module,exports){
'use strict';
const rules = _dereq_('./methods/data/indicators');
const prep = /([a-z]*) (of|in|by|for) [a-z]/;
const hasPlural = _dereq_('./hasPlural');

const knownPlural = {
  i: false,
  he: false,
  she: false,
  we: true,
  they: true
};

//is it potentially plural?
const noPlural = ['Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday', 'Possessive'];
//first, try to guess based on existing tags
const couldEvenBePlural = function(t) {
  if (hasPlural(t) === false) {
    return false;
  }
  for (let i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  }
  return true;
};

/** returns true, false, or null */
const isPlural = function(t, world) {
  if (t.tags.Plural) {
    return true;
  }
  if (t.tags.Singular) {
    return false;
  }
  let str = t.normal;
  //whitelist a few easy ones
  if (knownPlural.hasOwnProperty(str) === true) {
    return knownPlural[str];
  }
  //check given irregulars
  if (world && world.plurals && world.plurals.hasOwnProperty(str) === true) {
    return false;
  }
  //inspect the existing tags to see if a plural is valid
  if (couldEvenBePlural(t) === false) {
    return null;
  }
  //handle 'mayors of chicago'
  const preposition = str.match(prep);
  if (preposition !== null) {
    str = preposition[1];
  }
  //check the suffix-type rules for indications
  for (let i = 0; i < rules.plural_indicators.length; i++) {
    if (rules.plural_indicators[i].test(str) === true) {
      return true;
    }
  }
  for (let i = 0; i < rules.singular_indicators.length; i++) {
    if (rules.singular_indicators[i].test(str) === true) {
      return false;
    }
  }
  // a fallback 'looks check plural' rule..
  if (/s$/.test(str) === true && /ss$/.test(str) === false && str.length > 3) {
    //needs some lovin'
    return true;
  }
  return false;
};

module.exports = isPlural;
// console.log(is_plural('octopus') === false)

},{"./hasPlural":28,"./methods/data/indicators":30}],30:[function(_dereq_,module,exports){
'use strict';
//similar to plural/singularize rules, but not the same
const plural_indicators = [
  /(^v)ies$/i,
  /ises$/i,
  /ives$/i,
  /(antenn|formul|nebul|vertebr|vit)ae$/i,
  /(octop|vir|radi|nucle|fung|cact|stimul)i$/i,
  /(buffal|tomat|tornad)oes$/i,
  /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i,
  /(vert|ind|cort)ices$/i,
  /(matr|append)ices$/i,
  /(x|ch|ss|sh|s|z|o)es$/i,
  /men$/i,
  /news$/i,
  /.tia$/i,
  /(^f)ves$/i,
  /(lr)ves$/i,
  /(^aeiouy|qu)ies$/i,
  /(m|l)ice$/i,
  /(cris|ax|test)es$/i,
  /(alias|status)es$/i,
  /ics$/i
];

//similar to plural/singularize rules, but not the same
const singular_indicators = [
  /(ax|test)is$/i,
  /(octop|vir|radi|nucle|fung|cact|stimul)us$/i,
  /(octop|vir)i$/i,
  /(rl)f$/i,
  /(alias|status)$/i,
  /(bu)s$/i,
  /(al|ad|at|er|et|ed|ad)o$/i,
  /(ti)um$/i,
  /(ti)a$/i,
  /sis$/i,
  /(?:(^f)fe|(lr)f)$/i,
  /hive$/i,
  /(^aeiouy|qu)y$/i,
  /(x|ch|ss|sh|z)$/i,
  /(matr|vert|ind|cort)(ix|ex)$/i,
  /(m|l)ouse$/i,
  /(m|l)ice$/i,
  /(antenn|formul|nebul|vertebr|vit)a$/i,
  /.sis$/i,
  /^(?!talis|.*hu)(.*)man$/i
];
module.exports = {
  singular_indicators: singular_indicators,
  plural_indicators: plural_indicators
}

},{}],31:[function(_dereq_,module,exports){
//patterns for turning 'bus' to 'buses'
module.exports = [
  [/(ax|test)is$/i, '$1es'],
  [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, '$1i'],
  [/(octop|vir)i$/i, '$1i'],
  [/(kn|l|w)ife$/i, '$1ives'],
  [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, '$1ves'],
  [/^(dwar|handkerchie|hoo|scar|whar)f$/i, '$1ves'],
  [/(alias|status)$/i, '$1es'],
  [/(bu)s$/i, '$1ses'],
  [/(al|ad|at|er|et|ed|ad)o$/i, '$1oes'],
  [/([ti])um$/i, '$1a'],
  [/([ti])a$/i, '$1a'],
  [/sis$/i, 'ses'],
  [/(hive)$/i, '$1s'],
  [/([^aeiouy]|qu)y$/i, '$1ies'],
  [/(x|ch|ss|sh|s|z)$/i, '$1es'],
  [/(matr|vert|ind|cort)(ix|ex)$/i, '$1ices'],
  [/([m|l])ouse$/i, '$1ice'],
  [/([m|l])ice$/i, '$1ice'],
  [/^(ox)$/i, '$1en'],
  [/^(oxen)$/i, '$1'],
  [/(quiz)$/i, '$1zes'],
  [/(antenn|formul|nebul|vertebr|vit)a$/i, '$1ae'],
  [/(sis)$/i, 'ses'],
  [/^(?!talis|.*hu)(.*)man$/i, '$1men'],
  [/(.*)/i, '$1s']
].map(function(a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],32:[function(_dereq_,module,exports){
'use strict';
// const irregulars = require('../../../lexicon/uncompressed/irregularPlurals').toPlural;
const pluralRules = _dereq_('./data/pluralRules');

//turn 'shoe' into 'shoes'
const pluralize = function(str, world) {
  const irregulars = world.plurals || {};
  //irregular
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }
  //regular rule-based inflector
  for (let i = 0; i < pluralRules.length; i++) {
    if (pluralRules[i].reg.test(str) === true) {
      return str.replace(pluralRules[i].reg, pluralRules[i].repl);
    }
  }
  return null;
};

module.exports = pluralize;

},{"./data/pluralRules":31}],33:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Terms = _dereq_('../../paths').Terms;

//the Terms() subset class
//this is just a wrapper around the actual Term class,
//which is buried in `ts.terms[0]`
const methods = {
  data: function() {
    return this.list.map(ts => {
      let t = ts.terms[0];
      return {
        spaceBefore: t.whitespace.before,
        text: t.text,
        spaceAfter: t.whitespace.after,
        normal: t.normal,
        implicit: t.silent_term,
        bestTag: t.bestTag(),
        tags: Object.keys(t.tags)
      };
    });
  }
};

const find = function(r, n) {
  let list = [];
  //make a Terms Object for every Term
  r.list.forEach(ts => {
    ts.terms.forEach(t => {
      list.push(new Terms([t], ts.world, r));
    });
  });
  r = new Text(list, r.world, r.parent);
  if (typeof n === 'number') {
    r = r.get(n);
  }
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../paths":8,"../../text":146}],34:[function(_dereq_,module,exports){
const numOrdinal = _dereq_('./numOrdinal');
const textOrdinal = _dereq_('./textOrdinal');
const textCardinal = _dereq_('./textCardinal');
const niceNumber = _dereq_('./niceNumber');

//make all the number formats
const fmt = {
  nice: function(num) {
    return niceNumber(num);
  },
  ordinal: function(num) {
    return numOrdinal(num);
  },
  cardinal: function(num) {
    return '' + num;
  },
  niceOrdinal: function(num) {
    num = numOrdinal(num);
    num = niceNumber(num);
    return num;
  },
  text: function(num) {
    return textCardinal(num).join(' ');
  },
  textOrdinal: function(num) {
    return textOrdinal(num);
  }
};
module.exports = fmt;

},{"./niceNumber":35,"./numOrdinal":36,"./textCardinal":37,"./textOrdinal":38}],35:[function(_dereq_,module,exports){
'use strict';
//put a comma or two in
const niceNumber = function (num) {
  if (!num && num !== 0) {
    return null;
  }
  num = '' + num;
  let x = num.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
};
module.exports = niceNumber;

},{}],36:[function(_dereq_,module,exports){
'use strict';

//turn a number like 5 into an ordinal like 5th
const numOrdinal = function(num) {
  if (!num && num !== 0) {
    return null;
  }
  //the teens are all 'th'
  let tens = num % 100;
  if (tens > 10 && tens < 20) {
    return '' + num + 'th';
  }
  //the rest of 'em
  const mapping = {
    0: 'th',
    1: 'st',
    2: 'nd',
    3: 'rd'
  };
  let str = '' + num;
  let last = str.slice(str.length - 1, str.length);
  if (mapping[last]) {
    str += mapping[last];
  } else {
    str += 'th';
  }
  return str;
};

module.exports = numOrdinal;

},{}],37:[function(_dereq_,module,exports){
'use strict';
// turns an integer/float into a textual number, like 'fifty-five'
const tens_mapping = [
  ['ninety', 90],
  ['eighty', 80],
  ['seventy', 70],
  ['sixty', 60],
  ['fifty', 50],
  ['forty', 40],
  ['thirty', 30],
  ['twenty', 20]
];
const ones_mapping = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];
const sequence = [
  [1000000000, 'million'],
  [100000000, 'hundred million'],
  [1000000, 'million'],
  [100000, 'hundred thousand'],
  [1000, 'thousand'],
  [100, 'hundred'],
  [1, 'one']
];

//turn number into an array of magnitudes, like [[5, million], [2, hundred]]
const breakdown_magnitudes = function(num) {
  let working = num;
  let have = [];
  sequence.forEach((a) => {
    if (num >= a[0]) {
      let howmany = Math.floor(working / a[0]);
      working -= howmany * a[0];
      if (howmany) {
        have.push({
          unit: a[1],
          count: howmany
        });
      }
    }
  });
  return have;
};

//turn numbers from 100-0 into their text
const breakdown_hundred = function(num) {
  let arr = [];
  for (let i = 0; i < tens_mapping.length; i++) {
    if (num >= tens_mapping[i][1]) {
      num -= tens_mapping[i][1];
      arr.push(tens_mapping[i][0]);
    }
  }
  //(hopefully) we should only have 20-0 now
  if (ones_mapping[num]) {
    arr.push(ones_mapping[num]);
  }
  return arr;
};

/** print-out 'point eight nine'*/
const handle_decimal = (num) => {
  const names = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  let arr = [];
  //parse it out like a string, because js math is such shit
  let decimal = ('' + num).match(/\.([0-9]+)/);
  if (!decimal || !decimal[0]) {
    return arr;
  }
  arr.push('point');
  let decimals = decimal[0].split('');
  for (let i = 0; i < decimals.length; i++) {
    arr.push(names[decimals[i]]);
  }
  return arr;
};

/** turns an integer into a textual number */
const to_text = function(num) {
  let arr = [];
  //handle negative numbers
  if (num < 0) {
    arr.push('negative');
    num = Math.abs(num);
  }
  //break-down into units, counts
  let units = breakdown_magnitudes(num);
  //build-up the string from its components
  for (let i = 0; i < units.length; i++) {
    let unit_name = units[i].unit;
    if (unit_name === 'one') {
      unit_name = '';
      //put an 'and' in here
      if (arr.length > 1) {
        arr.push('and');
      }
    }
    arr = arr.concat(breakdown_hundred(units[i].count));
    arr.push(unit_name);
  }
  //also support decimals - 'point eight'
  arr = arr.concat(handle_decimal(num));
  //remove empties
  arr = arr.filter((s) => s);
  if (arr.length === 0) {
    arr[0] = '';
  }
  return arr;
};

module.exports = to_text;

// console.log(to_text(-1000.8));

},{}],38:[function(_dereq_,module,exports){
'use strict';
const textValue = _dereq_('./textCardinal');
const ordinalWord = _dereq_('../../../world/more-data/numbers').toOrdinal;
//
const textOrdinal = num => {
  let words = textValue(num);
  //convert the last number to an ordinal
  let last = words[words.length - 1];
  words[words.length - 1] = ordinalWord[last] || last;
  return words.join(' ');
};

module.exports = textOrdinal;

},{"../../../world/more-data/numbers":171,"./textCardinal":37}],39:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('../../text');
const Value = _dereq_('./value');
const parse = _dereq_('./parse');

//the Values() subset class
const methods = {
  noDates: function() {
    return this.not('#Date');
  },
  noUnits: function() {
    return this.not('#Unit');
  },
  units: function() {
    return this.match('#Unit+');
  },
  /** five -> 5 */
  numbers: function() {
    return this.list.map(ts => {
      return ts.number();
    });
  },
  /** five -> '5' */
  toNumber: function() {
    this.list = this.list.map(ts => {
      return ts.toNumber();
    });
    return this;
  },
  /**5 -> 'five' */
  toText: function() {
    this.list = this.list.map(ts => {
      return ts.toText();
    });
    return this;
  },
  /**5th -> 5 */
  toCardinal: function() {
    this.list = this.list.map(ts => {
      return ts.toCardinal();
    });
    return this;
  },
  /**5 -> 5th */
  toOrdinal: function() {
    this.list = this.list.map(ts => {
      return ts.toOrdinal();
    });
    return this;
  },
  /**5900 -> 5,900 */
  toNice: function() {
    this.list = this.list.map(ts => {
      return ts.toNice();
    });
    return this;
  },
  /**seven === 7th */
  isEqual: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() === num;
    });
    return this;
  },
  /**eight > 7th */
  greaterThan: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() > num;
    });
    return this;
  },
  /**five < 7th */
  lessThan: function(num) {
    num = parse(num);
    this.list = this.list.filter(ts => {
      return num !== null && ts.number() < num;
    });
    return this;
  },
  /**seven + 2 = 'nine' */
  add: function(n) {
    this.list = this.list.map(ts => {
      return ts.add(n);
    });
    return this;
  },
  /**seven - 2 = 'five' */
  subtract: function(n) {
    this.list = this.list.map(ts => {
      return ts.subtract(n);
    });
    return this;
  },
  /**seven -> 'eight' */
  increment: function() {
    this.list = this.list.map(ts => {
      return ts.add(1);
    });
    return this;
  },
  /**seven -> 'eight' */
  decrement: function() {
    this.list = this.list.map(ts => {
      return ts.subtract(1);
    });
    return this;
  }
};

const find = function(r, n) {
  const tens = 'twenty|thirty|fourty|fifty|sixty|seventy|eighty|ninety';
  const teens = 'eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen';
  r = r.match('#Value+ #Unit?');
  // r = r.match('#Value+ #Unit?');

  //three-length
  if (r.has('#Value #Value #Value') && !r.has('#Multiple')) {
    //twenty-five-twenty
    if (r.has('(' + tens + ') #Cardinal #Cardinal')) {
      r.splitAfter('(' + tens + ') #Cardinal');
    }
  }

  //two-length ones
  if (r.has('#Value #Value')) {
    //june 21st 1992 is two seperate values
    if (r.has('#NumericValue #NumericValue')) {
      r.splitOn('#Year');
    }
    //sixty fifteen
    if (r.has('(' + tens + ') (' + teens + ')')) {
      r.splitAfter('(' + tens + ')');
    }
    //"72 82"
    let double = r.match('#Cardinal #Cardinal');
    if (double.found && !r.has('(point|decimal)')) {
      //not 'two hundred'
      if (!double.has('#Cardinal (#Multiple|point|decimal)')) {
        //one proper way, 'twenty one', or 'hundred one'
        if (!double.has('(' + tens + ') #Cardinal') && !double.has('#Multiple #Value')) {
          r.splitAfter(double.terms(0).out('normal'));
        }
      }
    }
    //seventh fifth
    if (r.match('#Ordinal #Ordinal').match('#TextValue').found && !r.has('#Multiple')) {
      //the one proper way, 'twenty first'
      if (!r.has('(' + tens + ') #Ordinal')) {
        r.splitAfter('#Ordinal');
      }
    }
    //fifth five
    if (r.has('#Ordinal #Cardinal')) {
      r.splitBefore('#Cardinal+');
    }
    //five 2017 (support '5 hundred', and 'twenty 5'
    if (
      r.has('#TextValue #NumericValue') &&
      !r.has('(' + tens + '|#Multiple)')
    ) {
      r.splitBefore('#NumericValue+');
    }
  }
  //5-8
  if (r.has('#NumberRange')) {
    r.splitAfter('#NumberRange');
  }
  r.splitAfter('#Comma');
  if (typeof n === 'number') {
    r = r.get(n);
  }
  let world = r.world();
  r.list = r.list.map(ts => {
    return new Value(ts.terms, world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":146,"./parse":40,"./value":48}],40:[function(_dereq_,module,exports){
'use strict';
const parseText = _dereq_('./parseText');
// 2.5, $5.50, 3,432, etc -
const numeric = /^-?(\$|€|¥|£)?\.?[0-9]+[0-9,\.]*(st|nd|rd|th|rth|%)?$/;

const parseString = function(str) {
  if (numeric.test(str) === true) {
    //clean up a number, like '$4,342.00'
    str = str.replace(/,/g, '');
    str = str.replace(/^[\$|€|¥|£]/g, '');
    str = str.replace(/%$/, '');
    str = str.replace(/(st|nd|rd|th|rth)$/g, '');
    let num = parseFloat(str);
    if (num || num === 0) {
      return num;
    }
  }
  return parseText(str);
};

//turn it all into a number
const parse = function(val) {
  if (val === null || val === undefined || typeof val === 'number') {
    return val;
  }
  if (typeof val === 'string') {
    return parseString(val);
  }
  // console.log(val);
  //numerical values can only be one term
  if (val.terms.length === 1 && val.terms[0].tags.TextValue !== true) {
    let str = val.terms[0].normal;
    // console.log(str);
    return parseString(str);
  }
  return parseText(val.out('normal'));
};
module.exports = parse;

},{"./parseText":43}],41:[function(_dereq_,module,exports){
const numbers = _dereq_('../../../world/more-data/numbers');
const fns = _dereq_('../paths').fns;

//setup number-word data
const ones = fns.extend(numbers.ordinal.ones, numbers.cardinal.ones);
const teens = fns.extend(numbers.ordinal.teens, numbers.cardinal.teens);
const tens = fns.extend(numbers.ordinal.tens, numbers.cardinal.tens);
const multiples = fns.extend(numbers.ordinal.multiples, numbers.cardinal.multiples);
module.exports = {
  ones: ones,
  teens: teens,
  tens: tens,
  multiples: multiples
};

},{"../../../world/more-data/numbers":171,"../paths":47}],42:[function(_dereq_,module,exports){
'use strict';

//support global multipliers, like 'half-million' by doing 'million' then multiplying by 0.5
const findModifiers = str => {
  const mults = [
    {
      reg: /^(minus|negative)[\s\-]/i,
      mult: -1
    },
    {
      reg: /^(a\s)?half[\s\-](of\s)?/i,
      mult: 0.5
    }
    //  {
    //   reg: /^(a\s)?quarter[\s\-]/i,
    //   mult: 0.25
    // }
  ];
  for (let i = 0; i < mults.length; i++) {
    if (mults[i].reg.test(str) === true) {
      return {
        amount: mults[i].mult,
        str: str.replace(mults[i].reg, '')
      };
    }
  }
  return {
    amount: 1,
    str: str
  };
};

module.exports = findModifiers;

},{}],43:[function(_dereq_,module,exports){
'use strict';
const findModifiers = _dereq_('./findModifiers');
const words = _dereq_('./data');
const isValid = _dereq_('./validate');
const parseDecimals = _dereq_('./parseDecimals');
const parseNumeric = _dereq_('./parseNumeric');
const improperFraction = /^([0-9,\. ]+)\/([0-9,\. ]+)$/;

//some numbers we know
const casualForms = {
  // 'a few': 3,
  'a couple': 2,
  'a dozen': 12,
  'two dozen': 24,
  zero: 0
};

// a 'section' is something like 'fifty-nine thousand'
// turn a section into something we can add to - like 59000
const section_sum = obj => {
  return Object.keys(obj).reduce((sum, k) => {
    sum += obj[k];
    return sum;
  }, 0);
};

//turn a string into a number
const parse = function(str) {
  //convert some known-numbers
  if (casualForms.hasOwnProperty(str) === true) {
    return casualForms[str];
  }
  //'a/an' is 1
  if (str === 'a' || str === 'an') {
    return 1;
  }
  const modifier = findModifiers(str);
  str = modifier.str;
  let last_mult = null;
  let has = {};
  let sum = 0;
  let isNegative = false;
  const terms = str.split(/[ -]/);
  for (let i = 0; i < terms.length; i++) {
    let w = terms[i];
    w = parseNumeric(w);
    if (!w || w === 'and') {
      continue;
    }
    if (w === '-' || w === 'negative') {
      isNegative = true;
      continue;
    }
    if (w.charAt(0) === '-') {
      isNegative = true;
      w = w.substr(1);
    }
    //decimal mode
    if (w === 'point') {
      sum += section_sum(has);
      sum += parseDecimals(terms.slice(i + 1, terms.length));
      sum *= modifier.amount;
      return sum;
    }
    //improper fraction
    const fm = w.match(improperFraction);
    if (fm) {
      const num = parseFloat(fm[1].replace(/[, ]/g, ''));
      const denom = parseFloat(fm[2].replace(/[, ]/g, ''));
      if (denom) {
        sum += num / denom || 0;
      }
      continue;
    }
    //prevent mismatched units, like 'seven eleven'
    if (isValid(w, has) === false) {
      return null;
    }
    //buildOut section, collect 'has' values
    if (/^[0-9\.]+$/.test(w)) {
      has['ones'] = parseFloat(w); //not technically right
    } else if (words.ones[w]) {
      has['ones'] = words.ones[w];
    } else if (words.teens[w]) {
      has['teens'] = words.teens[w];
    } else if (words.tens[w]) {
      has['tens'] = words.tens[w];
    } else if (words.multiples[w]) {
      let mult = words.multiples[w];
      //something has gone wrong : 'two hundred five hundred'
      if (mult === last_mult) {
        return null;
      }
      //support 'hundred thousand'
      //this one is tricky..
      if (mult === 100 && terms[i + 1] !== undefined) {
        // has['hundreds']=
        const w2 = terms[i + 1];
        if (words.multiples[w2]) {
          mult *= words.multiples[w2]; //hundredThousand/hundredMillion
          i += 1;
        }
      }
      //natural order of things
      //five thousand, one hundred..
      if (last_mult === null || mult < last_mult) {
        sum += (section_sum(has) || 1) * mult;
        last_mult = mult;
        has = {};
      } else {
        //maybe hundred .. thousand
        sum += section_sum(has);
        last_mult = mult;
        sum = (sum || 1) * mult;
        has = {};
      }
    }
  }
  //dump the remaining has values
  sum += section_sum(has);
  //post-process add modifier
  sum *= modifier.amount;
  sum *= isNegative ? -1 : 1;
  //dont return 0, if it went straight-through
  if (sum === 0) {
    return null;
  }
  return sum;
};

module.exports = parse;

},{"./data":41,"./findModifiers":42,"./parseDecimals":44,"./parseNumeric":45,"./validate":46}],44:[function(_dereq_,module,exports){
'use strict';
const words = _dereq_('./data');

//concatenate into a string with leading '0.'
const parseDecimals = function(arr) {
  let str = '0.';
  for (let i = 0; i < arr.length; i++) {
    let w = arr[i];
    if (words.ones[w] !== undefined) {
      str += words.ones[w];
    } else if (words.teens[w] !== undefined) {
      str += words.teens[w];
    } else if (words.tens[w] !== undefined) {
      str += words.tens[w];
    } else if (/^[0-9]$/.test(w) === true) {
      str += w;
    } else {
      return 0;
    }
  }
  return parseFloat(str);
};

module.exports = parseDecimals;

},{"./data":41}],45:[function(_dereq_,module,exports){
'use strict';
//parse a string like "4,200.1" into Number 4200.1
const parseNumeric = str => {
  //remove ordinal - 'th/rd'
  str = str.replace(/1st$/, '1');
  str = str.replace(/2nd$/, '2');
  str = str.replace(/3rd$/, '3');
  str = str.replace(/([4567890])r?th$/, '$1');
  //remove prefixes
  str = str.replace(/^[$€¥£¢]/, '');
  //remove suffixes
  str = str.replace(/[%$€¥£¢]$/, '');
  //remove commas
  str = str.replace(/,/g, '');
  //split '5kg' from '5'
  str = str.replace(/([0-9])([a-z]{1,2})$/, '$1');
  return str;
};

module.exports = parseNumeric;

},{}],46:[function(_dereq_,module,exports){
'use strict';
const words = _dereq_('./data');

//prevent things like 'fifteen ten', and 'five sixty'
const isValid = (w, has) => {
  if (words.ones[w]) {
    if (has.ones || has.teens) {
      return false;
    }
  } else if (words.teens[w]) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  } else if (words.tens[w]) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  }
  return true;
};
module.exports = isValid;

},{"./data":41}],47:[function(_dereq_,module,exports){
module.exports = _dereq_('../../paths');

},{"../../paths":8}],48:[function(_dereq_,module,exports){
'use strict';
const paths = _dereq_('../../paths');
const Terms = paths.Terms;
const parse = _dereq_('./parse');
const fmt = _dereq_('./format');

// const unpackRange = function(ts) {
//   if (ts.has('#NumberRange')) {
//     ts.terms.forEach(t => {
//       if (t.silent_term && !t._text) {
//         t.text = t.silent_term;
//       }
//     });
//   }
//   return ts;
// };

const parseValue = function(ts) {
  ts.val = ts.match('#Value+');
  // ts.val = unpackRange(ts.val);
  ts.val = ts.val.list[0];
  ts.unit = ts.match('#Unit+');
  if (ts.unit.found) {
    ts.unit = ts.unit.list[0];
  }
  return ts;
};

const isPercent = function(val, unit) {
  //pre-tagged
  if (val.has('#Percent') || unit.has('#Percent')) {
    return true;
  }
  // 'five percent'
  if (unit.out('normal') === 'percent') {
    return true;
  }
  //'5%'
  if (val.out('normal').match(/%$/) !== null) {
    return true;
  }
  return false;
};

//set the text as the same num format
const setNumber = function(ts, num) {
  let str = ts.val.out();
  if (ts.has('#Ordinal')) {
    if (ts.has('#TextValue')) {
      str = fmt.textOrdinal(num); //ordinal text
    } else {
      str = fmt.ordinal(num); //ordinal number
    }
  } else if (ts.has('#TextValue')) {
    str = fmt.text(num); //cardinal text
  } else if (ts.has('#NiceNumber')) {
    str = fmt.nice(num); //8,929 number
  } else {
    str = fmt.cardinal(num); //cardinal number
  }
  //add the unit at the end
  if (ts.unit.found) {
    str += ts.unit.out('text');
  }
  ts = ts.replaceWith(str, true);
  return parseValue(ts);
};

const Value = function(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parseValue(this);
};

//Terms inheritence
Value.prototype = Object.create(Terms.prototype);

const methods = {
  data: function() {
    let num = parse(this.val);
    return {
      number: num,
      nice: fmt.nice(num),
      ordinal: fmt.ordinal(num),
      niceOrdinal: fmt.niceOrdinal(num),
      text: fmt.text(num),
      textOrdinal: fmt.textOrdinal(num),
      unit: this.unit.out('normal')
    };
  },
  number: function() {
    return parse(this.val);
  },
  // /** five -> '5' */
  toNumber: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.ordinal(num);
      } else {
        str = String(num);
        //convert 'five percent' -> '5%'
        if (isPercent(this.val, this.unit)) {
          str = str + '%';
          this.unit.delete();
        }
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('NumericValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  // /**5 -> 'five' */
  toText: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.text(num);
        //add percent
        if (isPercent(this.val, this.unit)) {
          str = str + ' percent';
        }
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('TextValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5th -> 5 */
  toCardinal: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#TextValue')) {
        str = fmt.text(num);
      } else {
        str = num;
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('Cardinal');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5 -> 5th */
  toOrdinal: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#TextValue')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.ordinal(num);
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('Ordinal');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  //
  // /**5900 -> 5,900 */
  toNice: function() {
    let num = parse(this.val);
    if (num || num === 0) {
      let str = '';
      if (this.val.has('#Ordinal')) {
        str = fmt.niceOrdinal(num);
      } else {
        str = fmt.nice(num);
      }
      if (this.unit.found) {
        str = str + this.unit.out('text');
      }
      this.replaceWith(str, true).tag('NumericValue');
      //make sure unit gets the right tag..
      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }
    return this;
  },
  /** seven + 2 = nine */
  add: function(n) {
    if (!n) {
      return this;
    }
    let num = parse(this.val) || 0;
    num += n; //add it
    return setNumber(this, num);
  },
  /** seven - 2 = five */
  subtract: function(n) {
    if (!n) {
      return this;
    }
    let num = parse(this.val) || 0;
    num -= n; //subtract it
    return setNumber(this, num);
  },
  /**seven -> 'eight' */
  increment: function() {
    return this.add(1);
  },
  /**seven -> 'six' */
  decrement: function() {
    return this.subtract(1);
  }
};

Object.keys(methods).forEach(k => {
  Value.prototype[k] = methods[k];
});
module.exports = Value;

},{"../../paths":8,"./format":34,"./parse":40}],49:[function(_dereq_,module,exports){
module.exports = [
  {
    reg: /(eave)$/i,
    repl: {
      pr: '$1s',
      pa: '$1d',
      gr: 'eaving',
      ar: '$1r'
    }
  },
  {
    reg: /(ink)$/i,
    repl: {
      pr: '$1s',
      pa: 'unk',
      gr: '$1ing',
      ar: '$1er'
    }
  },
  {
    reg: /(end)$/i,
    repl: {
      pr: '$1s',
      pa: 'ent',
      gr: '$1ing',
      ar: '$1er'
    }
  },
  {
    reg: /(ide)$/i,
    repl: {
      pr: '$1s',
      pa: 'ode',
      gr: 'iding',
      ar: 'ider'
    }
  },
  {
    reg: /(ake)$/i,
    repl: {
      pr: '$1s',
      pa: 'ook',
      gr: 'aking',
      ar: '$1r'
    }
  },
  {
    reg: /(eed)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing',
      ar: '$1er'
    }
  },

  {
    reg: /(e)(ep)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1pt',
      gr: '$1$2ing',
      ar: '$1$2er'
    }
  }, {
    reg: /(a[tg]|i[zn]|ur|nc|gl|is)e$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing',
      prt: '$1en'
    }
  }, {
    reg: /([i|f|rr])y$/i,
    repl: {
      pr: '$1ies',
      pa: '$1ied',
      gr: '$1ying'
    }
  }, {
    reg: /([td]er)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /([bd]l)e$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /(ish|tch|ess)$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /(ion|end|e[nc]t)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /(om)e$/i,
    repl: {
      pr: '$1es',
      pa: 'ame',
      gr: '$1ing'
    }
  }, {
    reg: /([aeiu])([pt])$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1$2',
      gr: '$1$2$2ing'
    }
  }, {
    reg: /(er)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    }
  }, {
    reg: /(en)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ed',
      gr: '$1ing'
    },
  }, {
    reg: /(ed)$/i,
    repl: {
      pr: '$1s',
      pa: '$1ded',
      ar: '$1der',
      gr: '$1ding'
    },
  },
  {
    reg: /(..)(ow)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1ew',
      gr: '$1$2ing',
      prt: '$1$2n'
    }
  },
  {
    reg: /(..)([cs]h)$/i,
    repl: {
      pr: '$1$2es',
      pa: '$1$2ed',
      gr: '$1$2ing'
    },
  },
  {
    reg: /([^aeiou][ou])(g|d)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1$2$2ed',
      gr: '$1$2$2ing'
    },
  },
  {
    reg: /([^aeiou][aeiou])(b|t|p|m)$/i,
    repl: {
      pr: '$1$2s',
      pa: '$1$2$2ed',
      gr: '$1$2$2ing'
    },
  },
  {
    reg: /([aeiou]zz)$/i,
    repl: {
      pr: '$1es',
      pa: '$1ed',
      gr: '$1ing'
    }
  }
];

},{}],50:[function(_dereq_,module,exports){
'use strict';
const checkIrregulars = _dereq_('./irregulars');
const suffixPass = _dereq_('./suffixes');
const generic = _dereq_('./generic');
//this method is the same as regular conjugate, but optimised for use in the lexicon during warm-up.
//it's way faster because it knows input is already infinitive

const want = ['Gerund', 'PastTense', 'PresentTense'];

const fasterConjugate = function(inf, world) {
  let all = {
    Infinitive: inf
  };
  //check irregulars list
  if (world && world.conjugations) {
    const irregObj = checkIrregulars(all['Infinitive'], world);
    if (irregObj !== null) {
      Object.keys(irregObj).forEach(k => {
        if (irregObj[k] && !all[k]) {
          all[k] = irregObj[k];
        }
      });
    }
  }
  //check suffix rules
  const suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(k => {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  });
  for (let i = 0; i < want.length; i++) {
    if (all[want[i]] === undefined) {
      all[want[i]] = generic[want[i]](all);
    }
  }
  return all;
};
module.exports = fasterConjugate;
// console.log(fasterConjugate('walk'));

},{"./generic":51,"./irregulars":52,"./suffixes":53}],51:[function(_dereq_,module,exports){
'use strict';
//non-specifc, 'hail-mary' transforms from infinitive, into other forms
const hasY = /[bcdfghjklmnpqrstvwxz]y$/;
const generic = {

  Gerund: (o) => {
    const inf = o.Infinitive;
    if (inf.charAt(inf.length - 1) === 'e') {
      return inf.replace(/e$/, 'ing');
    }
    return inf + 'ing';
  },

  PresentTense: (o) => {
    const inf = o.Infinitive;
    if (inf.charAt(inf.length - 1) === 's') {
      return inf + 'es';
    }
    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ies';
    }
    return inf + 's';
  },

  PastTense: (o) => {
    const inf = o.Infinitive;
    if (inf.charAt(inf.length - 1) === 'e') {
      return inf + 'd';
    }
    if (inf.substr(-2) === 'ed') {
      return inf;
    }
    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ied';
    }
    return inf + 'ed';
  },

  // FutureTense: (o) => {
  //   return 'will ' + o.Infinitive;
  // },
  //
  // PerfectTense: (o) => {
  //   return 'have ' + (o.Participle || o.PastTense);
  // },
  //
  // Pluperfect: (o) => {
  //   if (o.PastTense) {
  //     return 'had ' + o.PastTense;
  //   }
  //   return null;
  // },
  // FuturePerfect: (o) => {
  //   if (o.PastTense) {
  //     return 'will have ' + o.PastTense;
  //   }
  //   return null;
  // }

};

module.exports = generic;

},{}],52:[function(_dereq_,module,exports){
'use strict';
// let irregulars = require('../../../../lexicon/uncompressed/irregularVerbs').irregulars; //weeee!
const fns = _dereq_('../../../../fns'); //weeee!
const forms = ['Participle', 'Gerund', 'PastTense', 'PresentTense', 'FuturePerfect', 'PerfectTense', 'Actor'];

const checkIrregulars = function(str, world) {
  const irregulars = world.conjugations;
  const infArr = Object.keys(irregulars);
  //check irregulars in world
  if (world && world.conjugations && world.conjugations.hasOwnProperty(str) === true) {
    return world.conjugations[str];
  }
  //fast infinitive lookup
  if (irregulars.hasOwnProperty(str) === true) {
    let obj = fns.copy(irregulars[str]);
    obj.Infinitive = str;
    return obj;
  }
  //longer check of known-verb forms
  for (let i = 0; i < infArr.length; i++) {
    for (let o = 0; o < forms.length; o++) {
      let irObj = irregulars[infArr[i]];
      if (irObj[forms[o]] === str) {
        let obj = fns.copy(irObj);
        obj.Infinitive = infArr[i];
        return obj;
      }
    }
  }
  return {};
};

module.exports = checkIrregulars;
// console.log(checkIrregulars('bit'));

},{"../../../../fns":3}],53:[function(_dereq_,module,exports){
'use strict';
const rules = _dereq_('./data/rules');
const mapping = {
  pr: 'PresentTense',
  pa: 'PastTense',
  gr: 'Gerund',
  prt: 'Participle',
  ar: 'Actor',
};
const keys = Object.keys(mapping);

//check suffix rules
const suffixPass = function(inf) {
  let found = {};
  for(let i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      let obj = rules[i].repl;
      for(let o = 0; o < keys.length; o++) {
        if (obj.hasOwnProperty(keys[o]) === true) {
          let key = mapping[keys[o]];
          found[key] = inf.replace(rules[i].reg, obj[keys[o]]);
        }
      }
      return found;
    }
  }
  return found;
};

module.exports = suffixPass;

},{"./data/rules":49}],54:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');

const irregulars = {
  wanna: ['want', 'to'],
  gonna: ['going', 'to'],
  im: ['i', 'am'],
  alot: ['a', 'lot'],

  dont: ['do', 'not'],
  dun: ['do', 'not'],

  ive: ['i', 'have'],

  "won't": ['will', 'not'],
  wont: ['will', 'not'],

  "can't": ['can', 'not'],
  cant: ['can', 'not'],
  cannot: ['can', 'not'],

  // aint: ['is', 'not'], //or 'are'
  // "ain't": ['is', 'not'],
  "shan't": ['should', 'not'],
  imma: ['I', 'will'],

  "where'd": ['where', 'did'],
  whered: ['where', 'did'],
  "when'd": ['when', 'did'],
  whend: ['when', 'did'],
  "how'd": ['how', 'did'],
  howd: ['how', 'did'],
  "what'd": ['what', 'did'],
  whatd: ['what', 'did'],
  "let's": ['let', 'us'],

  //multiple word contractions
  dunno: ['do', 'not', 'know'],
  brb: ['be', 'right', 'back'],
  gtg: ['got', 'to', 'go'],
  irl: ['in', 'real', 'life'],
  tbh: ['to', 'be', 'honest'],
  imo: ['in', 'my', 'opinion'],
  til: ['today', 'i', 'learned'],
  rn: ['right', 'now'],
  '@': ['at']
};

//check irregulars
const checkIrregulars = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (irregulars[t.normal]) {
      let fix = irregulars[t.normal];
      ts = fixContraction(ts, fix, i);
      i += fix.length - 1;
    }
  }
  return ts;
};
module.exports = checkIrregulars;

},{"./fix":58}],55:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const splitContraction = _dereq_('./split');

//these are always contractions
const blacklist = {
  'that\'s': true,
  'there\'s': true
};
const are = {
  we: true,
  they: true,
  you: true
};

// "'s" may be a contraction or a possessive
// 'spencer's house' vs 'spencer's good'
const isPossessive = (ts, i) => {
  let t = ts.terms[i];
  let next_t = ts.terms[i + 1];
  //a pronoun can't be possessive - "he's house"
  if (t.tags.Pronoun || t.tags.QuestionWord) {
    return false;
  }
  if (blacklist[t.normal]) {
    return false;
  }
  //if end of sentence, it is possessive - "was spencer's"
  if (!next_t) {
    return true;
  }
  //a gerund suggests 'is walking'
  if (next_t.tags.VerbPhrase) {
    return false;
  }
  //spencer's house
  if (next_t.tags.Noun) {
    return true;
  }
  //rocket's red glare
  if (next_t.tags.Adjective && ts.terms[i + 2] && ts.terms[i + 2].tags.Noun) {
    return true;
  }
  //an adjective suggests 'is good'
  if (next_t.tags.Adjective || next_t.tags.Adverb || next_t.tags.Verb) {
    return false;
  }
  return false;
};

// you ain't / i ain't.
const isAre = function(ts, i) {
  let arr = ['is', 'not']; //default
  //get what's it 'about'
  if (ts.terms[i - 1]) {
    let about = ts.terms[i - 1];
    //go back one more..
    if (about.tags.Adverb && ts.terms[i - 2]) {
      about = ts.terms[i - 2];
    }
    if (about.tags.Plural || are[about.normal] === true) {
      arr[0] = 'are';
    }
  }
  return arr;
};

//handle ambigous contraction "'s"
const hardOne = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }
    if (ts.terms[i].normal === 'ain\'t' || ts.terms[i].normal === 'aint') {
      let arr = isAre(ts, i);
      ts = fixContraction(ts, arr, i);
      i += 1;
      continue;
    }
    let parts = splitContraction(ts.terms[i]);
    if (parts) {
      //have we found a hard one
      if (parts.end === 's') {
        //spencer's house
        if (isPossessive(ts, i)) {
          ts.terms[i].tag('#Possessive', 'hard-contraction');
          continue;
        }
        let arr = [parts.start, 'is'];
        if (ts.terms[i + 1]) {
          let str = ts.terms[i].normal;
          //he's walking -> is/was
          if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Gerund').found) {
            arr = [parts.start, 'is'];
          } else if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Verb').found) {
            //is vs has ('he's got milk')
            arr = [parts.start, 'has'];
          }
        }
        ts = fixContraction(ts, arr, i);
        i += 1;
      }
    }
  }
  return ts;
};

module.exports = hardOne;

},{"./fix":58,"./split":60}],56:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const split = _dereq_('./split');

//the formulaic contraction types:
const easy_ends = {
  ll: 'will',
  // 'd': 'would',
  ve: 'have',
  re: 'are',
  m: 'am',
  "n't": 'not'
  //these ones are a bit tricksier:
  // 't': 'not',
  // 's': 'is' //or was
};

//unambiguous contractions, like "'ll"
const easyOnes = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }
    let parts = split(ts.terms[i]);
    if (parts) {
      parts.start = parts.start.toLowerCase();

      //make sure its an easy one
      if (easy_ends[parts.end]) {
        let arr = [parts.start, easy_ends[parts.end]];
        ts = fixContraction(ts, arr, i);
        i += 1;
      }

      //handle i'd -> 'i would' vs 'i had'
      if (parts.end === 'd') {
        //assume 'would'
        let arr = [parts.start, 'would'];
        //if next verb is past-tense, choose 'had'
        if (ts.terms[i + 1] && ts.terms[i + 1].tags.PastTense) {
          arr[1] = 'had';
        }
        //also support '#Adverb #PastTense'
        if (ts.terms[i + 2] && ts.terms[i + 2].tags.PastTense && ts.terms[i + 1].tags.Adverb) {
          arr[1] = 'had';
        }
        ts = fixContraction(ts, arr, i);
        i += 1;
      }
    }
  }
  return ts;
};
module.exports = easyOnes;

},{"./fix":58,"./split":60}],57:[function(_dereq_,module,exports){
'use strict';
const fixContraction = _dereq_('./fix');
const Term = _dereq_('../../term');

const hasDash = function(t) {
  let dashes = /(-|–|—)/;
  return dashes.test(t.whitespace.before) || dashes.test(t.whitespace.after);
};

const numberRange = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //skip existing
    if (t.silent_term) {
      continue;
    }
    if (t.tags.TextValue) {
      continue;
    }
    //hyphens found in whitespace - '5 - 7'
    if (t.tags.Value && i > 0 && (hasDash(t) || hasDash(ts.terms[i - 1])) && ts.terms[i - 1].tags.Value) {
      let to = new Term('', ts.world);
      to.silent_term = 'to';
      ts.insertAt(i, to);
      ts.terms[i - 1].tag('NumberRange', 'number-number1');
      ts.terms[i].tag('NumberRange', 'number-number2');
      ts.terms[i].whitespace.before = '';
      ts.terms[i].whitespace.after = '';
      ts.terms[i + 1].tag('NumberRange', 'number-number3');
      return ts;
    }
    //add a silent term
    if (t.tags.NumberRange) {
      let arr = t.text.split(/(-)/);
      arr[1] = 'to';
      ts = fixContraction(ts, arr, i);
      ts.terms[i].tag(['NumberRange', 'NumericValue'], 'numRange-1');
      ts.terms[i + 1].tag(['NumberRange', 'Preposition'], 'numRange-silent');
      ts.terms[i + 2].tag(['NumberRange', 'NumericValue'], 'numRange-3');
      i += 2;
    }
  }
  return ts;
};
module.exports = numberRange;

},{"../../term":100,"./fix":58}],58:[function(_dereq_,module,exports){
'use strict';
const Term = _dereq_('../../term');

const tags = {
  not: 'Negative',
  will: 'Verb',
  would: 'Modal',
  have: 'Verb',
  are: 'Copula',
  is: 'Copula',
  am: 'Verb'
};
//make sure the newly created term gets the easy tags
const easyTag = t => {
  if (tags[t.silent_term]) {
    t.tag(tags[t.silent_term]);
  }
};

//add a silent term
const fixContraction = (ts, parts, i) => {
  //add the interpretation to the contracted term
  let one = ts.terms[i];
  one.silent_term = parts[0];
  //tag it as a contraction
  one.tag('Contraction', 'tagger-contraction');

  //add a new empty term
  if (parts[1]) {
    let two = new Term('', ts.world);
    two.silent_term = parts[1];
    two.tag('Contraction', 'tagger-contraction');
    ts.insertAt(i + 1, two);
    //ensure new term has no auto-whitspace
    two.whitespace.before = '';
    two.whitespace.after = '';
    easyTag(two);
  }

  //potentially it's three-contracted-terms, like 'dunno'
  if (parts[2]) {
    let three = new Term('', ts.world);
    three.silent_term = parts[2];
    // ts.terms.push(three);
    ts.insertAt(i + 2, three);
    three.tag('Contraction', 'tagger-contraction');
    easyTag(three);
  }

  return ts;
};

module.exports = fixContraction;

},{"../../term":100}],59:[function(_dereq_,module,exports){
'use strict';
const irregulars = _dereq_('./01-irregulars');
const isWasHas = _dereq_('./02-isWasHas');
const easyOnes = _dereq_('./03-easyOnes');
const numberRange = _dereq_('./04-numberRange');

//find and pull-apart contractions
const interpret = function(ts) {
  //check irregulars
  ts = irregulars(ts);
  //guess-at ambiguous "'s" one
  ts = isWasHas(ts);
  //check easy ones
  ts = easyOnes(ts);
  //5-7
  ts = numberRange(ts);
  return ts;
};

module.exports = interpret;

},{"./01-irregulars":54,"./02-isWasHas":55,"./03-easyOnes":56,"./04-numberRange":57}],60:[function(_dereq_,module,exports){
'use strict';
const contraction = /^([a-z]+)'([a-z][a-z]?)$/i;
const possessive = /[a-z]s'$/i;

const allowed = {
  re: 1,
  ve: 1,
  ll: 1,
  t: 1,
  s: 1,
  d: 1,
  m: 1
};
/** interpret a terms' contraction */
const splitContraction = t => {
  let parts = t.normal.match(contraction);
  if (parts && parts[1] && allowed[parts[2]] === 1) {
    //handle n't
    if (parts[2] === 't' && parts[1].match(/[a-z]n$/)) {
      parts[1] = parts[1].replace(/n$/, '');
      parts[2] = "n't"; //dunno..
    }
    //fix titlecase
    if (t.tags.TitleCase === true) {
      parts[1] = parts[1].replace(/^[a-z]/, x => x.toUpperCase());
    }
    return {
      start: parts[1],
      end: parts[2]
    };
  }
  // "flanders' house"
  if (possessive.test(t.text) === true) {
    return {
      start: t.normal.replace(/s'?$/, ''),
      end: ''
    };
  }
  return null;
};
module.exports = splitContraction;

},{}],61:[function(_dereq_,module,exports){
'use strict';

//mostly pos-corections here
const corrections = function(ts) {
  //ambig prepositions/conjunctions
  if (ts.has('so')) {
    //so funny
    ts.match('so #Adjective').match('so').tag('Adverb', 'so-adv');
    //so the
    ts.match('so #Noun').match('so').tag('Conjunction', 'so-conj');
    //do so
    ts.match('do so').match('so').tag('Noun', 'so-noun');
  }
  if (ts.has('all')) {
    //all students
    ts.match('[all] #Determiner? #Noun').tag('Adjective', 'all-noun');
    //it all fell apart
    ts.match('[all] #Verb').tag('Adverb', 'all-verb');
  }
  //the ambiguous word 'that' and 'which'
  if (ts.has('(that|which)')) {
    //remind john that
    ts.match('#Verb #Adverb? #Noun (that|which)').lastTerm().tag('Preposition', 'that-prep');
    //that car goes
    ts.match('that #Noun #Verb').firstTerm().tag('Determiner', 'that-determiner');
  //things that provide
  // ts.match('#Plural (that|which) #Adverb? #Verb').term(1).tag('Preposition', 'noun-that');
  }
  //Determiner-signals
  if (ts.has('#Determiner')) {
    //the wait to vote
    ts.match('(the|this) #Verb #Preposition .').term(1).tag('Noun', 'correction-determiner1');
    //the swim
    ts.match('(the|those|these) (#Infinitive|#PresentTense|#PastTense)').term(1).tag('Noun', 'correction-determiner2');
    //a staggering cost
    ts.match('(a|an) #Gerund').term(1).tag('Adjective', 'correction-a|an');
    ts.match('(a|an) #Adjective (#Infinitive|#PresentTense)').term(2).tag('Noun', 'correction-a|an2');
    //some pressing issues
    ts.match('(some #Verb #Plural').term(1).tag('Noun', 'correction-determiner6');
    //the orange.
    ts.match('#Determiner #Adjective$').term(1).tag('Noun', 'the-adj-1');
    //the orange is
    ts.match('#Determiner #Adjective (#Copula|#PastTense|#Auxiliary)').term(1).tag('Noun', 'the-adj-2');
    //the nice swim
    ts.match('(the|this|those|these) #Adjective #Verb').term(2).tag('Noun', 'the-adj-verb');
    //the truly nice swim
    ts.match('(the|this|those|these) #Adverb #Adjective #Verb').term(3).tag('Noun', 'correction-determiner4');
    //a stream runs
    ts.match('(the|this|a|an) #Infinitive #Adverb? #Verb').term(1).tag('Noun', 'correction-determiner5');
    //a sense of
    ts.match('#Determiner #Verb of').term(1).tag('Noun', 'the-verb-of');
    //the threat of force
    ts.match('#Determiner #Noun of #Verb').term(3).tag('Noun', 'noun-of-noun');
    //a close
    ts.match('#Determiner #Adverb? [close]').tag('Adjective', 'a-close');
    //did a 900, paid a 20
    ts.match('#Verb (a|an) [#Value]').tag('Singular', 'a-value');
  }

  //like
  if (ts.has('like')) {
    ts.match('just like').term(1).tag('Preposition', 'like-preposition');
    //folks like her
    ts.match('#Noun like #Noun').term(1).tag('Preposition', 'noun-like');
    //look like
    ts.match('#Verb like').term(1).tag('Adverb', 'verb-like');
    //exactly like
    ts.match('#Adverb like').term(1).tag('Adverb', 'adverb-like');
  }

  if (ts.has('#Value')) {
    //half a million
    ts.match('half a? #Value').tag('Value', 'half-a-value'); //quarter not ready
    ts.match('#Value and a (half|quarter)').tag('Value', 'value-and-a-half');
    //all values are either ordinal or cardinal
    // ts.match('#Value').match('!#Ordinal').tag('#Cardinal', 'not-ordinal');
    //money
    ts.match('#Value+ #Currency').tag('Money', 'value-currency').lastTerm().tag('Unit', 'money-unit');
    ts.match('#Money and #Money #Currency?').tag('Money', 'money-and-money');
    //1 800 PhoneNumber
    ts.match('1 #Value #PhoneNumber').tag('PhoneNumber', '1-800-Value');
    //(454) 232-9873
    ts.match('#NumericValue #PhoneNumber').tag('PhoneNumber', '(800) PhoneNumber');
    //two hundredth
    ts.match('#TextValue+').match('#Cardinal+ #Ordinal').tag('Ordinal', 'two-hundredth');
    //q2 2009
    ts.match('(q1|q2|q3|q4) #Cardinal').tag('Date').lastTerm().tag('Year');
    //2nd quarter 2009
    ts.match('#Ordinal quarter #Cardinal').tag('Date').lastTerm().tag('Year');
  }

  if (ts.has('#Noun')) {
    //'more' is not always an adverb
    ts.match('more #Noun').tag('Noun', 'more-noun');
    //the word 'second'
    ts.match('second #Noun').term(0).unTag('Unit').tag('Ordinal', 'second-noun');
    //he quickly foo
    ts.match('#Noun #Adverb #Noun').term(2).tag('Verb', 'correction');
    //fix for busted-up phrasalVerbs
    ts.match('#Noun #Particle').term(1).tag('Preposition', 'repair-noPhrasal');
    //John & Joe's
    ts.match('#Noun (&|n) #Noun').tag('Organization', 'Noun-&-Noun');
    //Aircraft designer
    ts.match('#Noun #Actor').tag('Actor', 'thing-doer');
    //my buddy
    ts.match('#Possessive #FirstName').term(1).unTag('Person', 'possessive-name');
    //this rocks
    ts.match('(this|that) #Plural').term(1).tag('PresentTense', 'this-verbs');
    //the western line
    ts.match('#Determiner [(western|eastern|northern|southern|central)] #Noun').tag('Noun', 'western-line');
    ts.match('(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun').tag('Noun', 'technical-noun');
    //organization
    if (ts.has('#Organization')) {
      ts.match('#Organization of the? #TitleCase').tag('Organization', 'org-of-place');
      ts.match('#Organization #Country').tag('Organization', 'org-country');
      ts.match('(world|global|international|national|#Demonym) #Organization').tag('Organization', 'global-org');
    }
  }

  if (ts.has('#Verb')) {
    //still make
    ts.match('still #Verb').term(0).tag('Adverb', 'still-verb');
    //'u' as pronoun
    ts.match('u #Verb').term(0).tag('Pronoun', 'u-pronoun-1');
    //is no walk
    ts.match('is no #Verb').term(2).tag('Noun', 'is-no-verb');
    //different views than
    ts.match('#Verb than').term(0).tag('Noun', 'correction');
    //her polling
    ts.match('#Possessive #Verb').term(1).tag('Noun', 'correction-possessive');
    //is eager to go
    ts.match('#Copula #Adjective to #Verb').match('#Adjective to').tag('Verb', 'correction');

    if (ts.has('(who|what|where|why|how|when)')) {
      //the word 'how'
      ts.match('^how').term(0).tag('QuestionWord', 'how-question').tag('QuestionWord', 'how-question');
      ts.match('how (#Determiner|#Copula|#Modal|#PastTense)').term(0).tag('QuestionWord', 'how-is');
      // //the word 'which'
      ts.match('^which').term(0).tag('QuestionWord', 'which-question').tag('QuestionWord', 'which-question');
      ts.match('which . (#Noun)+ #Pronoun').term(0).tag('QuestionWord', 'which-question2');
      ts.match('which').term(0).tag('QuestionWord', 'which-question3');
      //where

      //how he is driving
      let word = ts.match('#QuestionWord #Noun #Copula #Adverb? (#Verb|#Adjective)').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'how-he-is-x');
      //when i go fishing
      word = ts.match('#QuestionWord #Noun #Adverb? #Infinitive not? #Gerund').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'when i go fishing');
    }

    //is mark hughes
    ts.match('#Copula #Infinitive #Noun').term(1).tag('Noun', 'is-pres-noun');

    ts.match('#Infinitive #Copula').term(0).tag('Noun', 'infinitive-copula');
    //went to sleep
    // ts.match('#Verb to #Verb').lastTerm().tag('Noun', 'verb-to-verb');
    //support a splattering of auxillaries before a verb
    let advb = '(#Adverb|not)+?';
    if (ts.has(advb)) {
      //had walked
      ts.match(`(has|had) ${advb} #PastTense`).not('#Verb$').tag('Auxiliary', 'had-walked');
      //was walking
      ts.match(`#Copula ${advb} #Gerund`).not('#Verb$').tag('Auxiliary', 'copula-walking');
      //been walking
      ts.match(`(be|been) ${advb} #Gerund`).not('#Verb$').tag('Auxiliary', 'be-walking');
      //would walk
      ts.match(`(#Modal|did) ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'modal-verb');
      //would have had
      ts.match(`#Modal ${advb} have ${advb} had ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-have');
      //would be walking
      ts.match(`(#Modal) ${advb} be ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-be');
      //would been walking
      ts.match(`(#Modal|had|has) ${advb} been ${advb} #Verb`).not('#Verb$').tag('Auxiliary', 'would-be');
    //infinitive verbs suggest plural nouns - 'XYZ walk to the store'
    // r.match(`#Singular+ #Infinitive`).match('#Singular+').tag('Plural', 'infinitive-make-plural');
    }
    //fall over
    ts.match('#PhrasalVerb #PhrasalVerb').lastTerm().tag('Particle', 'phrasal-particle');

    //walking is cool
    ts.match('#Gerund #Adverb? not? #Copula').firstTerm().tag('Activity', 'gerund-copula');
    //walking should be fun
    ts.match('#Gerund #Modal').firstTerm().tag('Activity', 'gerund-modal');
  }

  if (ts.has('#Adjective')) {
    //still good
    ts.match('still #Adjective').match('still').tag('Adverb', 'still-advb');
    //big dreams, critical thinking
    ts.match('#Adjective #PresentTense').term(1).tag('Noun', 'adj-presentTense');
    //will secure our
    ts.match('will #Adjective').term(1).tag('Verb', 'will-adj');
    //cheering hard - dropped -ly's
    ts.match('#PresentTense (hard|quick|long|bright|slow)').lastTerm().tag('Adverb', 'lazy-ly');
  }

  if (ts.has('#TitleCase')) {
    //FitBit Inc
    ts.match('#TitleCase (ltd|co|inc|dept|assn|bros)').tag('Organization', 'org-abbrv');
    //Foo District
    ts
      .match('#TitleCase+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)')
      .tag('Region', 'foo-district');
    //District of Foo
    ts
      .match('(district|region|province|municipality|territory|burough|state) of #TitleCase')
      .tag('Region', 'district-of-Foo');
  }
  if (ts.has('#Hyphenated')) {
    //air-flow
    ts.match('#Hyphenated #Hyphenated').match('#Noun #Verb').tag('Noun', 'hyphen-verb');
    let hyphen = ts.match('#Hyphenated+');
    if (hyphen.has('#Expression')) {
      //ooh-wee
      hyphen.tag('Expression', 'ooh-wee');
    }
  }

  //West Norforlk
  ts.match('(west|north|south|east|western|northern|southern|eastern)+ #Place').tag('Region', 'west-norfolk');

  //misc:
  //foot/feet
  ts.match('(foot|feet)').tag('Noun', 'foot-noun');
  ts.match('#Value (foot|feet)').term(1).tag('Unit', 'foot-unit');
  //'u' as pronoun
  ts.match('#Conjunction u').term(1).tag('Pronoun', 'u-pronoun-2');
  //'a/an' can mean 1 - "a hour"
  ts.match('(a|an) (#Duration|hundred|thousand|million|billion|trillion)').ifNo('#Plural').term(0).tag('Value', 'a-is-one');
  //swear-words as non-expression POS
  //nsfw
  ts.match('holy (shit|fuck|hell)').tag('Expression', 'swears-expression');
  ts.match('#Determiner (shit|damn|hell)').term(1).tag('Noun', 'swears-noun');
  ts.match('(shit|damn|fuck) (#Determiner|#Possessive|them)').term(0).tag('Verb', 'swears-verb');
  ts.match('#Copula fucked up?').not('#Copula').tag('Adjective', 'swears-adjective');
  //6 am
  ts.match('#Holiday (day|eve)').tag('Holiday', 'holiday-day');
  //timezones
  ts.match('(standard|daylight|summer|eastern|pacific|central|mountain) standard? time').tag('Time', 'timezone');
  //canadian dollar, Brazilian pesos
  ts.match('#Demonym #Currency').tag('Currency', 'demonym-currency');
  //about to go
  ts.match('about to #Adverb? #Verb').match('about to').tag(['Auxiliary', 'Verb'], 'about-to');
  //Doctor john smith jr
  ts.match('#Honorific #Person').tag('Person', 'honorific-person');
  ts.match('#Person (jr|sr|md)').tag('Person', 'person-honorific');
  //right of way
  ts.match('(right|rights) of .').tag('Noun', 'right-of');
  return ts;
};

module.exports = corrections;

},{}],62:[function(_dereq_,module,exports){
'use strict';
//the steps and processes of pos-tagging
const step = {
  punctuation_step: _dereq_('./steps/01-punctuation_step'),
  lexicon_step: _dereq_('./steps/02-lexicon_step'),
  lexicon_multi: _dereq_('./steps/03-lexicon_multi'),
  capital_step: _dereq_('./steps/04-capital_step'),
  web_step: _dereq_('./steps/05-web_step'),
  suffix_step: _dereq_('./steps/06-suffix_step'),
  neighbour_step: _dereq_('./steps/07-neighbour_step'),
  noun_fallback: _dereq_('./steps/08-noun_fallback'),
  date_step: _dereq_('./steps/09-date_step'),
  auxiliary_step: _dereq_('./steps/10-auxiliary_step'),
  negation_step: _dereq_('./steps/11-negation_step'),
  comma_step: _dereq_('./steps/13-comma_step'),
  possessive_step: _dereq_('./steps/14-possessive_step'),
  value_step: _dereq_('./steps/15-value_step'),
  acronym_step: _dereq_('./steps/16-acronym_step'),
  emoji_step: _dereq_('./steps/17-emoji_step'),
  person_step: _dereq_('./steps/18-person_step'),
  quotation_step: _dereq_('./steps/19-quotation_step'),
  organization_step: _dereq_('./steps/20-organization_step'),
  plural_step: _dereq_('./steps/21-plural_step'),
  posthoc: _dereq_('./steps/22-posthoc'),
  contraction: _dereq_('./contraction')
};
const corrections = _dereq_('./corrections');
const tagPhrase = _dereq_('./phrase');

const tagger = function(ts) {
  ts = step.punctuation_step(ts);
  ts = step.emoji_step(ts);
  ts = step.lexicon_step(ts);
  ts = step.lexicon_multi(ts);
  ts = step.web_step(ts);
  ts = step.suffix_step(ts);
  ts = step.neighbour_step(ts);
  ts = step.capital_step(ts);
  ts = step.noun_fallback(ts);
  ts = step.contraction(ts);
  ts = step.date_step(ts); //3ms
  ts = step.auxiliary_step(ts);
  ts = step.negation_step(ts);
  ts = step.comma_step(ts);
  ts = step.possessive_step(ts);
  ts = step.acronym_step(ts);
  ts = step.person_step(ts); //1ms
  ts = step.quotation_step(ts);
  ts = step.organization_step(ts);
  ts = step.plural_step(ts);
  ts = step.value_step(ts);
  ts = corrections(ts); //2ms
  ts = tagPhrase(ts);
  ts = step.posthoc(ts);
  return ts;
};

module.exports = tagger;

},{"./contraction":59,"./corrections":61,"./phrase":65,"./steps/01-punctuation_step":66,"./steps/02-lexicon_step":67,"./steps/03-lexicon_multi":68,"./steps/04-capital_step":69,"./steps/05-web_step":70,"./steps/06-suffix_step":71,"./steps/07-neighbour_step":72,"./steps/08-noun_fallback":73,"./steps/09-date_step":74,"./steps/10-auxiliary_step":75,"./steps/11-negation_step":76,"./steps/13-comma_step":77,"./steps/14-possessive_step":78,"./steps/15-value_step":79,"./steps/16-acronym_step":80,"./steps/17-emoji_step":81,"./steps/18-person_step":82,"./steps/19-quotation_step":83,"./steps/20-organization_step":84,"./steps/21-plural_step":85,"./steps/22-posthoc":86}],63:[function(_dereq_,module,exports){
'use strict';

//
const conditionPass = function(ts) {
  //'if it really goes, I will..'
  let m = ts.match('#Condition .{1,7} #ClauseEnd');
  //make sure it ends on a comma
  if (m.found && m.match('#Comma$')) {
    m.tag('Condition');
  }
  //'go a bit further, if it then has a pronoun
  m = ts.match('#Condition .{1,13} #ClauseEnd #Pronoun');
  if (m.found && m.match('#Comma$')) {
    m.not('#Pronoun$').tag('Condition', 'end-pronoun');
  }
  //if it goes then ..
  m = ts.match('#Condition .{1,7} then');
  if (m.found) {
    m.not('then$').tag('Condition', 'cond-then');
  }
  //as long as ..
  m = ts.match('as long as .{1,7} (then|#ClauseEnd)');
  if (m.found) {
    m.not('then$').tag('Condition', 'as-long-then');
  }
  //at the end of a sentence:
  //'..., if it really goes.'
  m = ts.match('#Comma #Condition .{1,7} .$');
  if (m.found) {
    m.not('^#Comma').tag('Condition', 'comma-7-end');
  }
  // '... if so.'
  m = ts.match('#Condition .{1,4}$');
  if (m.found) {
    m.tag('Condition', 'cond-4-end');
  }
  return ts;
};

module.exports = conditionPass;

},{}],64:[function(_dereq_,module,exports){
'use strict';
//a verbPhrase is a sequence of axiliaries, adverbs and verbs
const verbPhrase = function (ts) {
  if (ts.has('(#Verb|#Auxiliary)')) {
    ts.match('#Verb').tag('VerbPhrase', 'verbphrase-verb');
    //quickly was
    ts.match('#Adverb #Verb').tag('VerbPhrase', 'adverb-verb');
    //was quickly
    ts.match('#Verb #Adverb').tag('VerbPhrase', 'verb-adverb');
    //is not
    ts.match('#Verb #Negative').tag('VerbPhrase', 'verb-not');
    //never is
    ts.match('never #Verb').tag('VerbPhrase', 'not-verb');
    //'will have had'..
    ts.match('#Auxiliary+').tag('VerbPhrase', '2');
    // 'is'
    ts.match('#Copula').tag('VerbPhrase', '#3');
    //'really will'..
    ts.match('#Adverb #Auxiliary').tag('VerbPhrase', '#4');
  //to go
  // ts.match('to #Infinitive').tag('VerbPhrase', '#5');
  //work with
  // ts.match('#Verb #Preposition').tag('VerbPhrase', '#6');
  }
  return ts;
};

module.exports = verbPhrase;

},{}],65:[function(_dereq_,module,exports){
'use strict';
const conditionPass = _dereq_('./00-conditionPass');
const verbPhrase = _dereq_('./01-verbPhrase');
// const nounPhrase = require('./02-nounPhrase');
// const AdjectivePhrase = require('./03-adjectivePhrase');
//
const phraseTag = function (ts) {
  ts = conditionPass(ts);
  ts = verbPhrase(ts);
  // ts = nounPhrase(ts);
  // ts = AdjectivePhrase(ts);
  return ts;
};

module.exports = phraseTag;

},{"./00-conditionPass":63,"./01-verbPhrase":64}],66:[function(_dereq_,module,exports){
'use strict';
//regs-
const titleCase = /^[A-Z][a-z']/;
const romanNum = /^[IVXCM]+$/;

//not so smart (right now)
const isRomanNumeral = function(t) {
  if (t.text.length > 1 && romanNum.test(t.text) === true) {
    return t.canBe('RomanNumeral');
  }
  return false;
};

const oneLetters = {
  a: true,
  i: true,
  //internet-slang
  u: true,
  r: true,
  c: true,
  k: true
};

const punctuation_step = function(ts) {
  let rules = ts.world.regex || [];
  ts.terms.forEach((t, o) => {
    let str = t.text;
    //anything can be titlecase
    if (titleCase.test(str) === true) {
      t.tag('TitleCase', 'punct-rule');
    }
    //add hyphenation
    if (t.whitespace.after === '-' && ts.terms[o + 1] && ts.terms[o + 1].whitespace.before === '') {
      t.tag('Hyphenated', 'has-hyphen');
      ts.terms[o + 1].tag('Hyphenated', 'has-hyphen');
    }
    //ok, normalise it a little,
    str = str.replace(/[,\.\?]$/, '');
    //do punctuation rules (on t.text)
    for (let i = 0; i < rules.length; i++) {
      let r = rules[i];
      if (r.reg.test(str) === true) {
        //don't over-write any other known tags
        if (t.canBe(r.tag)) {
          t.tag(r.tag, 'punctuation-rule- "' + r.reg.toString() + '"');
        }
        return;
      }
    }
    //terms like 'e'
    if (str.length === 1 && ts.terms[o + 1] && /[A-Z]/.test(str) && !oneLetters[str.toLowerCase()]) {
      t.tag('Acronym', 'one-letter-acronym');
    }
    //roman numerals (weak rn)
    if (isRomanNumeral(t)) {
      t.tag('RomanNumeral', 'is-roman-numeral');
    }
  });
  return ts;
};

module.exports = punctuation_step;

},{}],67:[function(_dereq_,module,exports){
'use strict';
const split = _dereq_('../contraction/split');
// const l = require('../../lexicon/init');
// const lexicon = l.lexicon;

const lexicon_pass = function(ts) {
  const lexicon = ts.world.words || {};
  //loop through each term
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //basic term lookup
    if (lexicon.hasOwnProperty(t.normal) === true) {
      t.tag(lexicon[t.normal], 'lexicon');
      continue;
    }
    //support silent_term matches
    if (t.silent_term && lexicon.hasOwnProperty(t.silent_term) === true) {
      t.tag(lexicon[t.silent_term], 'silent_term-lexicon');
      continue;
    }
    //check root version too
    if (t.root && t.normal !== t.root) {
      if (lexicon.hasOwnProperty(t.root) === true) {
        t.tag(lexicon[t.root], 'lexicon');
        continue;
      }
    }
    //support contractions (manually)
    let parts = split(t);
    if (parts && parts.start) {
      let start = parts.start.toLowerCase();
      if (lexicon.hasOwnProperty(start) === true) {
        t.tag(lexicon[start], 'contraction-lexicon');
        continue;
      }
    }
  }
  return ts;
};

module.exports = lexicon_pass;

},{"../contraction/split":60}],68:[function(_dereq_,module,exports){
'use strict';
const MAX = 4;

//find terms in the lexicon longer than one word (like 'hong kong')
const findMultiWords = function(ts, i, world) {
  let lex = world.words;
  let start = ts.terms[i].root;
  let nextTerms = ts.terms.slice(i + 1, i + MAX).map((t) => t.root);
  //look for matches, try biggest first
  let max = MAX;
  if (nextTerms.length < max) {
    max = nextTerms.length;
  }
  for(let k = max; k > 0; k -= 1) {
    let howAbout = start + ' ' + nextTerms.slice(0, k).join(' ');
    if (lex.hasOwnProperty(howAbout) === true) {
      ts.slice(i, i + k + 1).tag(lex[howAbout], 'multi-lexicon-' + howAbout);
      return k;
    }
  }
  return 0;
};


//try multiple-word matches in the lexicon (users and default)
const lexiconMulti = ts => {
  ts.world.cache = ts.world.cache || {};
  let firstWords = ts.world.cache.firstWords || {};
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //try multi words from user-lexicon
    if (firstWords.hasOwnProperty(t.root) === true) {
      let jump = findMultiWords(ts, i, ts.world);
      i += jump;
      continue;
    }
  }
  return ts;
};
module.exports = lexiconMulti;

},{}],69:[function(_dereq_,module,exports){
'use strict';
//titlecase is a signal for a noun

const capital_logic = function (s) {
  //(ignore first word)
  for (let i = 1; i < s.terms.length; i++) {
    let t = s.terms[i];
    //has a capital, but isn't too weird.
    if (t.tags.TitleCase && t.isWord()) {
      t.tag('Noun', 'capital-step');
      t.tag('TitleCase', 'capital-step');
    }
  }
  //support first-word of sentence as proper titlecase
  let t = s.terms[0];
  if (t && t.tags.TitleCase) {
    if (t.tags.Person || t.tags.Organization || t.tags.Place) {
      t.tag('TitleCase', 'first-term-capital');
    }
  }
  return s;
};

module.exports = capital_logic;

},{}],70:[function(_dereq_,module,exports){
'use strict';
//identify urls, hashtags, @mentions, emails
//regs
const email = /^\w+@\w+\.[a-z]{2,3}$/; //not fancy
const hashTag = /^#[a-z0-9_]{2,}$/;
const atMention = /^@\w{2,}$/;
const urlA = /^(https?:\/\/|www\.)\w+\.[a-z]{2,3}/; //with http/www
const urlB = /^[\w\.\/]+\.(com|net|gov|org|ly|edu|info|biz|ru|jp|de|in|uk|br)/; //http://mostpopularwebsites.net/top-level-domain

const web_pass = function(terms) {
  for (let i = 0; i < terms.length; i++) {
    let t = terms.get(i);
    let str = t.text.trim().toLowerCase();
    if (email.test(str) === true) {
      t.tag('Email', 'web_pass');
    }
    if (hashTag.test(str) === true) {
      t.tag('HashTag', 'web_pass');
    }
    if (atMention.test(str) === true) {
      t.tag('AtMention', 'web_pass');
    }
    if (urlA.test(str) === true || urlB.test(str) === true) {
      t.tag('Url', 'web_pass');
    }
  }
  return terms;
};

module.exports = web_pass;

},{}],71:[function(_dereq_,module,exports){
'use strict';
const regs = _dereq_('./rules/regex_list');
const suffixes = _dereq_('./rules/suffix_lookup');

const misc = [
  //slang things
  [/^(lol)+[sz]$/, 'Expression'], //lol
  [/^ma?cd[aeiou]/, 'LastName'], //macdonell - Last patterns https://en.wikipedia.org/wiki/List_of_family_name_affixes
  //starting-ones
  [/^[\-\+]?[0-9][0-9,]*(\.[0-9]+)?$/, 'Cardinal'], //like 5
  [/^(un|de|re)\\-[a-z]../, 'Verb'],
  [/^[\-\+]?[0-9]+(\.[0-9]+)?$/, 'NumericValue'],
  [/^https?\:?\/\/[a-z0-9]/, 'Url'], //the colon is removed in normalisation
  [/^www\.[a-z0-9]/, 'Url'],
  [/^(over|under)[a-z]{2,}/, 'Adjective'],
  [/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/, 'Date'], // 03-02-89
  //ending-ones
  [/^[0-9]+([a-z]{1,2})$/, 'Value'], //like 5kg
  [/^([0-9]+[,\.]?)+(st|nd|rd|r?th)$/, ['NumericValue', 'Ordinal']], //like 5th
  //middle (anywhere)
  [/[a-z]*\\-[a-z]*\\-/, 'Adjective']
];

//straight-up lookup of known-suffixes
const lookup = function(t) {
  const len = t.normal.length;
  let max = 7;
  if (len <= max) {
    max = len - 1;
  }
  for (let i = max; i > 1; i -= 1) {
    let str = t.normal.substr(len - i, len);
    if (suffixes[i][str] !== undefined) {
      return suffixes[i][str];
    }
  }
  return null;
};

//word-regexes indexed by last-character
const regexFn = function(t) {
  let char = t.normal.charAt(t.normal.length - 1);
  if (regs[char] === undefined) {
    return null;
  }
  let arr = regs[char];
  for (let o = 0; o < arr.length; o++) {
    if (arr[o][0].test(t.normal) === true) {
      return arr[o][1];
    }
  }
  return null;
};

const suffix_step = function(ts) {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //try known suffixes
    let tag = lookup(t);
    if (tag !== null && t.canBe(tag) === true) {
      t.tag(tag, 'suffix-lookup');
      continue;
    }
    //apply regexes by final-char
    tag = regexFn(t);
    if (tag !== null && t.canBe(tag) === true) {
      t.tag(tag, 'regex-list');
      continue;
    }
    //apply misc regexes
    for (let o = 0; o < misc.length; o++) {
      if (misc[o][0].test(t.normal) === true) {
        tag = misc[o][1];
        if (t.canBe(tag) === true) {
          t.tag(tag, 'misc-regex-' + misc[o][0]);
          continue;
        }
      }
    }
  }
  return ts;
};

module.exports = suffix_step;

},{"./rules/regex_list":90,"./rules/suffix_lookup":91}],72:[function(_dereq_,module,exports){
'use strict';
const markov = _dereq_('./rules/neighbours');
const afterThisWord = markov.afterThisWord;
const beforeThisWord = markov.beforeThisWord;
const beforeThisPos = markov.beforeThisPos;
const afterThisPos = markov.afterThisPos;

//basically a last-ditch effort before everything falls back to a noun
//for unknown terms, look left + right first, and hit-up the markov-chain for clues
const neighbour_step = function (ts) {
  ts.terms.forEach((t, n) => {
    //is it still unknown?
    let termTags = Object.keys(t.tags);
    if (termTags.length === 0) {
      let lastTerm = ts.terms[n - 1];
      let nextTerm = ts.terms[n + 1];
      //look at last word for clues
      if (lastTerm && afterThisWord.hasOwnProperty(lastTerm.normal)) {
        t.tag(afterThisWord[lastTerm.normal], 'neighbour-after-"' + lastTerm.normal + '"');
        return;
      }
      //look at next word for clues
      if (nextTerm && beforeThisWord.hasOwnProperty(nextTerm.normal)) {
        t.tag(beforeThisWord[nextTerm.normal], 'neighbour-before-"' + nextTerm.normal + '"');
        return;
      }
      //look at the last POS for clues
      let tags = [];
      if (lastTerm) {
        tags = Object.keys(lastTerm.tags);
        for (let i = 0; i < tags.length; i++) {
          if (afterThisPos[tags[i]]) {
            t.tag(afterThisPos[tags[i]], 'neighbour-after-[' + tags[i] + ']');
            return;
          }
        }
      }
      //look at the next POS for clues
      if (nextTerm) {
        tags = Object.keys(nextTerm.tags);
        for (let i = 0; i < tags.length; i++) {
          if (beforeThisPos[tags[i]]) {
            t.tag(beforeThisPos[tags[i]], 'neighbour-before-[' + tags[i] + ']');
            return;
          }
        }
      }
    }
  });

  return ts;
};

module.exports = neighbour_step;

},{"./rules/neighbours":89}],73:[function(_dereq_,module,exports){
'use strict';
//tag word as noun if we know nothing about it, still.

//tags that dont really count
const nothing = {
  TitleCase: true,
  UpperCase: true,
  CamelCase: true,
  Hyphenated: true
};
//are the tags basically empty
const gotNothing = function(t) {
  //fail-fast
  if (t.tags.Noun || t.tags.Verb || t.tags.Adjective) {
    return false;
  }
  let tags = Object.keys(t.tags);
  if (tags.length === 0) {
    return true;
  }
  if (tags.filter(tag => !nothing[tag]).length === 0) {
    return true;
  }
  return false;
};

const noun_fallback = function(s) {
  for (let i = 0; i < s.terms.length; i++) {
    let t = s.terms[i];
    //fail-fast
    if (t.tags.Noun || t.tags.Verb) {
      continue;
    }
    //ensure it only has the tag 'Term'
    if (gotNothing(t)) {
      //ensure it's atleast word-looking
      if (t.isWord() === false) {
        continue;
      }
      t.tag('Noun', 'noun-fallback');
    }
  }
  return s;
};

module.exports = noun_fallback;

},{}],74:[function(_dereq_,module,exports){
'use strict';
//ambiguous 'may' and 'march'
const preps = '(in|by|before|during|on|until|after|of|within|all)';
const thisNext = '(last|next|this|previous|current|upcoming|coming)';
const sections = '(start|end|middle|starting|ending|midpoint|beginning)';
const seasons = '(spring|summer|winter|fall|autumn)';

//ensure a year is approximately typical for common years
//please change in one thousand years
const tagYear = (v, reason) => {
  v.list.forEach((ts) => {
    let num = parseInt(ts.terms[0].normal, 10);
    if (num && num > 1000 && num < 3000) {
      ts.terms[0].tag('Year', reason);
    }
  });
};
//same, but for less-confident values
const tagYearSafer = (v, reason) => {
  v.list.forEach((ts) => {
    let num = parseInt(ts.terms[0].normal, 10);
    if (num && num > 1990 && num < 2030) {
      ts.terms[0].tag('Year', reason);
    }
  });
};

//non-destructively tag values & prepositions as dates
const datePass = function (ts) {
  //ambiguous month - person forms
  let people = '(january|april|may|june|summer|autumn|jan|sep)';
  if (ts.has(people)) {
    //give to april
    ts.match(`#Infinitive #Determiner? #Adjective? #Noun? (to|for) ${people}`).lastTerm().tag('Person', 'ambig-person');
    //remind june
    ts.match(`#Infinitive ${people}`).lastTerm().tag('Person', 'infinitive-person');
    //may waits for
    ts.match(`${people} #PresentTense (to|for)`).firstTerm().tag('Person', 'ambig-active');
    //april will
    ts.match(`${people} #Modal`).firstTerm().tag('Person', 'ambig-modal');
    //would april
    ts.match(`#Modal ${people}`).lastTerm().tag('Person', 'modal-ambig');
    //with april
    ts.match(`(that|with|for) ${people}`).term(1).tag('Person', 'that-month');
    //it is may
    ts.match(`#Copula ${people}`).term(1).tag('Person', 'is-may');
    //may is
    ts.match(`${people} #Copula`).term(0).tag('Person', 'may-is');
    //april the 5th
    ts.match(`${people} the? #Value`).term(0).tag('Month', 'person-value');
    //wednesday april
    ts.match(`#Date ${people}`).term(1).tag('Month', 'correction-may');
    //may 5th
    ts.match(`${people} the? #Value`).firstTerm().tag('Month', 'may-5th');
    //5th of may
    ts.match(`#Value of ${people}`).lastTerm().tag('Month', '5th-of-may');
    //by april
    ts.match(`${preps} ${people}`).ifNo('#Holiday').term(1).tag('Month', 'preps-month');
    //this april
    ts.match(`(next|this|last) ${people}`).term(1).tag('Month', 'correction-may'); //maybe not 'this'
  }
  //ambiguous month - verb-forms
  let verbs = '(may|march)';
  if (ts.has(verbs)) {
    //quickly march
    ts.match(`#Adverb ${verbs}`).lastTerm().tag('Infinitive', 'ambig-verb');
    ts.match(`${verbs} #Adverb`).lastTerm().tag('Infinitive', 'ambig-verb');
    //all march
    ts.match(`${preps} ${verbs}`).lastTerm().tag('Month', 'in-month');
    //this march
    ts.match(`(next|this|last) ${verbs}`).lastTerm().tag('Month', 'this-month');

    ts.match(`${verbs} the? #Value`).firstTerm().tag('Month', 'march-5th');
    ts.match(`#Value of? ${verbs}`).lastTerm().tag('Month', '5th-of-march');

    if (ts.has('march')) {
      //march to
      ts.match('march (up|down|back|to|toward)').term(0).tag('Infinitive', 'march-to');
      //must march
      ts.match('#Modal march').term(1).tag('Infinitive', 'must-march');
    }

  }
  //sun 5th
  if (ts.has('sun')) {
    //sun feb 2
    ts.match('sun #Date').firstTerm().tag('WeekDay', 'sun-feb');
    //sun the 5th
    ts.match('sun the #Ordinal').tag('Date').firstTerm().tag('WeekDay', 'sun-the-5th');
    //the sun
    ts.match('#Determiner sun').lastTerm().tag('Singular', 'the-sun');
  }
  //sat, nov 5th
  if (ts.has('sat')) {
    //sat november
    ts.match('sat #Date').firstTerm().tag('WeekDay', 'sat-feb');
    //this sat
    ts.match(`${preps} sat`).lastTerm().tag('WeekDay', 'sat');
  }

  //months:
  if (ts.has('#Month')) {
    //June 5-7th
    ts.match(`#Month #DateRange+`).tag('Date', 'correction-numberRange');
    //5th of March
    ts.match('#Value of #Month').tag('Date', 'value-of-month');
    //5 March
    ts.match('#Cardinal #Month').tag('Date', 'cardinal-month');
    //march 5 to 7
    ts.match('#Month #Value to #Value').tag('Date', 'value-to-value');
    //march the 12th
    ts.match('#Month the #Value').tag('Date', 'month-the-value');
  }

  ts.match('in the (night|evening|morning|afternoon|day|daytime)').tag('Time', 'in-the-night');
  ts.match('(#Value|#Time) (am|pm)').tag('Time', 'value-ampm');

  //months:
  if (ts.has('#Value')) {
    //for 4 months
    ts.match('for #Value #Duration').tag('Date', 'for-x-duration');
    //values
    ts.match('#Value #Abbreviation').tag('Value', 'value-abbr');
    ts.match('a #Value').if('(hundred|thousand|million|billion|trillion)').tag('Value', 'a-value');
    ts.match('(minus|negative) #Value').tag('Value', 'minus-value');
    ts.match('#Value grand').tag('Value', 'value-grand');
    // ts.match('#Ordinal (half|quarter)').tag('Value', 'ordinal-half');//not ready
    ts.match('(half|quarter) #Ordinal').tag('Value', 'half-ordinal');
    ts.match('(hundred|thousand|million|billion|trillion) and #Value').tag('Value', 'magnitude-and-value');
    ts.match('#Value (point|decimal) #Value').tag('Value', 'value-point-value');
    //for four days
    ts.match(`${preps}? #Value #Duration`).tag('Date', 'value-duration');
    ts.match('(#WeekDay|#Month) #Value').ifNo('#Money').tag('Date', 'date-value');
    ts.match('#Value (#WeekDay|#Month)').ifNo('#Money').tag('Date', 'value-date');
    //may twenty five
    let vs = ts.match('#TextValue #TextValue');
    if (vs.found && vs.has('#Date')) {
      vs.tag('#Date', 'textvalue-date');
    }
    //two days before
    ts.match('#Value #Duration #Conjunction').tag('Date', 'val-duration-conjunction');
    //two years old
    ts.match('#Value #Duration old').unTag('Date', 'val-years-old');
  }

  //time:
  if (ts.has('#Time')) {
    ts.match('#Cardinal #Time').tag('Time', 'value-time');
    ts.match('(by|before|after|at|@|about) #Time').tag('Time', 'preposition-time');
    //2pm est
    ts.match('#Time (eastern|pacific|central|mountain)').term(1).tag('Time', 'timezone');
    ts.match('#Time (est|pst|gmt)').term(1).tag('Time', 'timezone abbr');
  }

  //seasons
  if (ts.has(seasons)) {
    ts.match(`${preps}? ${thisNext} ${seasons}`).tag('Date', 'thisNext-season');
    ts.match(`the? ${sections} of ${seasons}`).tag('Date', 'section-season');
  }

  //rest-dates
  if (ts.has('#Date')) {
    //june the 5th
    ts.match('#Date the? #Ordinal').tag('Date', 'correction-date');
    //last month
    ts.match(`${thisNext} #Date`).tag('Date', 'thisNext-date');
    //by 5 March
    ts.match('due? (by|before|after|until) #Date').tag('Date', 'by-date');
    //tomorrow before 3
    ts.match('#Date (by|before|after|at|@|about) #Cardinal').not('^#Date').tag('Time', 'date-before-Cardinal');
    //saturday am
    ts.match('#Date (am|pm)').term(1).unTag('Verb').unTag('Copula').tag('Time', 'date-am');
    ts.match('(last|next|this|previous|current|upcoming|coming|the) #Date').tag('Date', 'next-feb');
    ts.match('#Date #Preposition #Date').tag('Date', 'date-prep-date');
    //start of june
    ts.match(`the? ${sections} of #Date`).tag('Date', 'section-of-date');
    //fifth week in 1998
    ts.match('#Ordinal #Duration in #Date').tag('Date', 'duration-in-date');
    //early in june
    ts.match('(early|late) (at|in)? the? #Date').tag('Time', 'early-evening');
  }

  //year/cardinal tagging
  if (ts.has('#Cardinal')) {
    let v = ts.match(`#Date #Value #Cardinal`).lastTerm();
    if (v.found) {
      tagYear(v, 'date-value-year');
    }
    //scoops up a bunch
    v = ts.match(`#Date+ #Cardinal`).lastTerm();
    if (v.found) {
      tagYear(v, 'date-year');
    }
    //feb 8 2018
    v = ts.match(`#Month #Value #Cardinal`).lastTerm();
    if (v.found) {
      tagYear(v, 'month-value-year');
    }
    //feb 8 to 10th 2018
    v = ts.match(`#Month #Value to #Value #Cardinal`).lastTerm();
    if (v.found) {
      tagYear(v, 'month-range-year');
    }
    //in 1998
    v = ts.match(`(in|of|by|during|before|starting|ending|for|year) #Cardinal`).lastTerm();
    if (v.found) {
      tagYear(v, 'in-year');
    }
    //was 1998 and...
    v = ts.match(`#Cardinal !#Plural`).firstTerm();
    if (v.found) {
      tagYearSafer(v, 'year-unsafe');
    }
  }

  //fix over-greedy
  if (ts.has('#Date')) {
    let date = ts.match('#Date+').splitOn('Clause');

    if (date.has('(#Year|#Time)') === false) {
      //12 february 12
      date.match('#Value (#Month|#Weekday) #Value').lastTerm().unTag('Date');
    }
  }

  return ts;
};

module.exports = datePass;

},{}],75:[function(_dereq_,module,exports){
'use strict';
//

const Auxiliary = {
  'do': true,
  'don\'t': true,
  'does': true,
  'doesn\'t': true,
  'will': true,
  'wont': true,
  'won\'t': true,
  'have': true,
  'haven\'t': true,
  'had': true,
  'hadn\'t': true,
  'not': true,
};

const corrections = function(ts) {
  //set verbs as auxillaries
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (Auxiliary[t.normal] || Auxiliary[t.silent_term]) {
      let next = ts.terms[i + 1];
      //if next word is a verb
      if (next && (next.tags.Verb || next.tags.Adverb || next.tags.Negative)) {
        t.tag('Auxiliary', 'corrections-Auxiliary');
        continue;
      }
    }
  }
  return ts;
};

module.exports = corrections;

},{}],76:[function(_dereq_,module,exports){
'use strict';

// 'not' is sometimes a verb, sometimes an adjective
const negation_step = function(ts) {
  for(let i = 0; i < ts.length; i++) {
    let t = ts.get(i);
    if (t.normal === 'not' || t.silent_term === 'not') {
      //find the next verb/adjective
      for(let o = i + 1; o < ts.length; o++) {
        if (ts.get(o).tags.Verb) {
          t.tag('VerbPhrase', 'negate-verb');
          break;
        }
        if (ts.get(o).tags.Adjective) {
          t.tag('AdjectivePhrase', 'negate-adj');
          break;
        }
      }
    }
  }
  return ts;
};

module.exports = negation_step;

},{}],77:[function(_dereq_,module,exports){
'use strict';
//-types of comma-use-
// PlaceComma - Hollywood, California
// List       - cool, fun, and great.
// ClauseEnd  - if so, we do.

//like Toronto, Canada
const isPlaceComma = (ts, i) => {
  let t = ts.terms[i];
  let nextTerm = ts.terms[i + 1];
  //'australia, canada' is a list
  if (nextTerm && t.tags.Place && !t.tags.Country && nextTerm.tags.Country) {
    return true;
  }
  return false;
};

//adj, noun, or verb
const mainTag = (t) => {
  if (t.tags.Adjective) {
    return 'Adjective';
  }
  if (t.tags.Noun) {
    return 'Noun';
  }
  if (t.tags.Verb) {
    return 'Verb';
  }
  return null;
};


//take the first term with a comma, and test to the right.
//the words with a comma must be the same pos.
const isList = (ts, i) => {
  let start = i;
  let tag = mainTag(ts.terms[i]);
  //ensure there's a following comma, and its the same pos
  //then a Conjunction
  let sinceComma = 0;
  let count = 0;
  let hasConjunction = false;
  for(i = i + 1; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //are we approaching the end
    if (count > 0 && t.tags.Conjunction) {
      hasConjunction = true;
      continue;
    }
    //found one,
    if (t.tags[tag]) {
      //looks good. keep it going
      if (t.tags.Comma) {
        count += 1;
        sinceComma = 0;
        continue;
      }
      if (count > 0 && hasConjunction) { //is this the end of the list?
        ts.slice(start, i).tag('List');
        return;
      }
    }
    sinceComma += 1;
    //have we gone too far without a comma?
    if (sinceComma > 5) {
      return;
    }
  }
  return;
};

const commaStep = function(ts) {
  //tag the correct punctuation forms
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    let punct = t.endPunctuation();
    if (punct === ',') {
      t.tag('Comma', 'comma-step');
      continue;
    }
    if (punct === ';' || punct === ':') {
      t.tag('ClauseEnd', 'clause-punt');
      continue;
    }
    //support elipses
    if (t.whitespace.after.match(/^\.\./)) {
      t.tag('ClauseEnd', 'clause-elipses');
      continue;
    }
    //support ' - ' clause
    if (ts.terms[i + 1] && ts.terms[i + 1].whitespace.before.match(/ - /)) {
      t.tag('ClauseEnd', 'hypen-clause');
      continue;
    }
  }

  //disambiguate the commas now
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (t.tags.Comma) {
      //if we already got it
      if (t.tags.List) {
        continue;
      }
      //like 'Hollywood, California'
      if (isPlaceComma(ts, i)) {
        continue;
      }
      //like 'cold, wet hands'
      isList(ts, i);
      //otherwise, it's a phrasal comma, like 'you must, if you think so'
      t.tags.ClauseEnd = true;
    }
  }
  return ts;
};

module.exports = commaStep;

},{}],78:[function(_dereq_,module,exports){
'use strict';
//decide if an apostrophe s is a contraction or not
// 'spencer's nice' -> 'spencer is nice'
// 'spencer's house' -> 'spencer's house'
const afterWord = /[a-z]s'$/;
const apostrophe = /[a-z]'s$/;

//these are always contractions
const blacklist = {
  'it\'s': true,
  'that\'s': true
};

//a possessive means "'s" describes ownership, not a contraction, like 'is'
const is_possessive = function(terms, x) {
  let t = terms.get(x);
  //these are always contractions, not possessive
  if (blacklist[t.normal] === true) {
    return false;
  }
  //"spencers'" - this is always possessive - eg "flanders'"
  if (afterWord.test(t.normal) === true) {
    return true;
  }
  //if no apostrophe s, return
  if (apostrophe.test(t.normal) === false) {
    return false;
  }
  //some parts-of-speech can't be possessive
  if (t.tags.Pronoun === true) {
    return false;
  }
  let nextWord = terms.get(x + 1);
  //last word is possessive  - "better than spencer's"
  if (nextWord === undefined) {
    return true;
  }
  //next word is 'house'
  if (nextWord.tags.Noun === true) {
    return true;
  }
  //rocket's red glare
  if (nextWord.tags.Adjective && terms.get(x + 2) && terms.get(x + 2).tags.Noun) {
    return true;
  }
  //next word is an adjective
  if (nextWord.tags.Adjective || nextWord.tags.Verb || nextWord.tags.Adverb) {
    return false;
  }
  return false;
};

//tag each term as possessive, if it should
const possessiveStep = function(terms) {
  for(let i = 0; i < terms.length; i++) {
    if (is_possessive(terms, i)) {
      let t = terms.get(i);
      //if it's not already a noun, co-erce it to one
      if (!t.tags['Noun']) {
        t.tag('Noun', 'possessive_pass');
      }
      t.tag('Possessive', 'possessive_pass');
    }
  }
  return terms;
};
module.exports = possessiveStep;

},{}],79:[function(_dereq_,module,exports){
'use strict';
//regs-
const cardinal = /^[0-9]([0-9]+,)*?(\.[0-9])$/;
const hasText = /^[a-z]/;

const value_step = function(ts) {
  for(let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (t.tag.Value === true) {
      //ordinal/cardinal
      if (t.tags.Ordinal === undefined && t.tags.Cardinal === undefined) {
        if (cardinal.test(t.normal) === true) {
          t.tag('Cardinal', 'cardinal-regex');
        } else {
          t.tag('Ordinal', 'not-cardinal');
        }
      }
      //text/number
      if (t.tags.TextValue === undefined && t.tags.NumericValue === undefined) {
        if (hasText.test(t.normal) === true) {
          t.tag('TextValue', 'TextValue-regex');
        } else {
          t.tag('NumericValue', 'NumericValue-regex');
        }
      }
    }
  }
  //5 books
  ts.match('#Cardinal #Plural').lastTerm().tag('Unit', 'cardinal-plural');
  //5th book
  ts.match('#Ordinal #Singular').lastTerm().tag('Unit', 'ordinal-singular');
  return ts;
};

module.exports = value_step;

},{}],80:[function(_dereq_,module,exports){
'use strict';

const acronym_step = function(ts) {
  ts.terms.forEach((t) => {
    if (t.isAcronym()) {
      t.tag('Acronym', 'acronym-step');
    }
  });
  return ts;
};

module.exports = acronym_step;

},{}],81:[function(_dereq_,module,exports){
'use strict';
const emojiReg = _dereq_('./rules/emoji_regex');
const emoticon = _dereq_('./rules/emoticon_list');
//test for forms like ':woman_tone2:‍:ear_of_rice:'
//https://github.com/Kikobeats/emojis-keywords/blob/master/index.js
const isCommaEmoji = (t) => {
  if (t.text.charAt(0) === ':') {
    //end comma can be last or second-last ':haircut_tone3:‍♀️'
    if (t.text.match(/:.?$/) === null) {
      return false;
    }
    //ensure no spaces
    if (t.text.match(' ')) {
      return false;
    }
    //reasonably sized
    if (t.text.length > 35) {
      return false;
    }
    return true;
  }
  return false;
};

//check against emoticon whitelist
const isEmoticon = (t) => {
  //normalize the 'eyes'
  let str = t.text.replace(/^[:;]/, ':');
  return emoticon.hasOwnProperty(str) === true;
};

//
const emojiStep = (ts) => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    //test for :keyword: emojis
    if (isCommaEmoji(t)) {
      t.tag('Emoji', 'comma-emoji');
    }
    //test for unicode emojis
    if (t.text.match(emojiReg)) {
      t.tag('Emoji', 'unicode-emoji');
    }
    //test for emoticon ':)' emojis
    if (isEmoticon(t)) {
      t.tag('Emoji', 'emoticon-emoji');
    }
  }
  return ts;
};
module.exports = emojiStep;

},{"./rules/emoji_regex":87,"./rules/emoticon_list":88}],82:[function(_dereq_,module,exports){
'use strict';

const person_step = function(ts) {
  //mr Putin
  ts.match('(mr|mrs|ms) (#TitleCase|#Possessive)+').tag('#Person').lastTerm();
  //methods requiring a firstname match
  if (ts.has('#FirstName')) {
    // Firstname x (dangerous)
    let tmp = ts.match('#FirstName #Noun').ifNo('^#Possessive').ifNo('#ClauseEnd .');
    tmp.lastTerm().canBe('#LastName').tag('#LastName', 'firstname-noun');
    //ferdinand de almar
    ts.match('#FirstName de #Noun').canBe('#Person').tag('#Person', 'firstname-de-noun');
    //Osama bin Laden
    ts.match('#FirstName (bin|al) #Noun').canBe('#Person').tag('#Person', 'firstname-al-noun');
    //John L. Foo
    ts.match('#FirstName #Acronym #TitleCase').tag('Person', 'firstname-acronym-titlecase');
    //Andrew Lloyd Webber
    ts.match('#FirstName #FirstName #TitleCase').tag('Person', 'firstname-firstname-titlecase');
    //Mr Foo
    ts.match('#Honorific #FirstName? #TitleCase').tag('Person', 'Honorific-TitleCase');
    //John Foo
    ts.match('#FirstName #TitleCase #TitleCase?').match('#Noun+').tag('Person', 'firstname-titlecase');
    //peter the great
    ts.match('#FirstName the #Adjective').tag('Person', 'correction-determiner5');
    //very common-but-ambiguous lastnames
    ts.match('#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)').tag('#Person', 'firstname-maybe');
    //Joe K. Sombrero
    ts.match('#FirstName #Acronym #Noun')
      .ifNo('#Date')
      .tag('#Person', 'n-acro-noun')
      .lastTerm()
      .tag('#LastName', 'n-acro-noun');
    //john bodego's
    ts.match('#FirstName (#Singular|#Possessive)')
      .ifNo('#Date')
      .tag('#Person', 'first-possessive')
      .lastTerm()
      .tag('#LastName', 'first-possessive');
  }

  //methods requiring a lastname match
  if (ts.has('#LastName')) {
    // x Lastname
    ts.match('#Noun #LastName')
      .firstTerm()
      .canBe('#FirstName')
      .tag('#FirstName', 'noun-lastname');
    //ambiguous-but-common firstnames
    ts.match('(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill) #LastName')
      .firstTerm()
      .tag('#FirstName', 'maybe-lastname');
    //Jani K. Smith
    ts.match('#TitleCase #Acronym? #LastName')
      .ifNo('#Date')
      .tag('#Person', 'title-acro-noun')
      .lastTerm()
      .tag('#LastName', 'title-acro-noun');
    //is foo Smith
    ts.match('#Copula (#Noun|#PresentTense) #LastName')
      .term(1)
      .tag('#FirstName', 'copula-noun-lastname');
  }

  //methods requiring a titlecase
  if (ts.has('#TitleCase')) {
    ts.match('#Acronym #TitleCase')
      .canBe('#Person')
      .tag('#Person', 'acronym-titlecase');
    //ludwig van beethovan
    ts.match('#TitleCase (van|al|bin) #TitleCase')
      .canBe('#Person')
      .tag('Person', 'correction-titlecase-van-titlecase');
    ts.match('#TitleCase (de|du) la? #TitleCase')
      .canBe('#Person')
      .tag('Person', 'correction-titlecase-van-titlecase');
    //Morgan Shlkjsfne
    ts.match('#Person #TitleCase')
      .match('#TitleCase #Noun')
      .canBe('#Person')
      .tag('Person', 'correction-person-titlecase');
    //pope francis
    ts.match('(lady|queen|sister) #TitleCase')
      .ifNo('#Date')
      .tag('#FemaleName', 'lady-titlecase');
    ts.match('(king|pope|father) #TitleCase')
      .ifNo('#Date')
      .tag('#MaleName', 'correction-poe');
  }

  //j.k Rowling
  ts.match('#Noun van der? #Noun')
    .canBe('#Person')
    .tag('#Person', 'von der noun');
  //king of spain
  ts.match('(king|queen|prince|saint|lady) of? #Noun')
    .canBe('#Person')
    .tag('#Person', 'king-of-noun');
  //mr X
  ts.match('#Honorific #Acronym').tag('Person', 'Honorific-TitleCase');
  //peter II
  ts.match('#Person #Person the? #RomanNumeral').tag('Person', 'correction-roman-numeral');

  //'Professor Fink', 'General McCarthy'
  ts.match('#Honorific #Person').tag('Person', 'Honorific-Person');

  //remove single 'mr'
  ts.match('^#Honorific$').unTag('Person', 'single-honorific');
  return ts;
};

module.exports = person_step;

},{}],83:[function(_dereq_,module,exports){
'use strict';
const startQuote = /^["'\u201B\u201C\u2033\u201F\u2018]/;
const endQuote = /.["'\u201D\u2036\u2019]([;:,.])?$/;

//tag a inline quotation as such
const quotation_step = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (startQuote.test(t.text) === true) {
      //look for the ending
      for (let o = 0; o < ts.terms.length; o++) {
        //max-length- don't go-on forever
        if (!ts.terms[i + o] || o > 28) {
          break;
        }
        if (endQuote.test(ts.terms[i + o].text) === true) {
          ts.slice(i, i + o + 1).tag('Quotation', 'quotation_step');
          i += o;
          break;
        }
      }
    }
  }
  return ts;
};
module.exports = quotation_step;

},{}],84:[function(_dereq_,module,exports){
'use strict';
//orgwords like 'bank' in 'Foo Bank'
let orgWords = _dereq_('../../world/more-data/orgWords');

//could this word be an organization
const maybeOrg = function(t) {
  //must be a noun
  if (!t.tags.Noun) {
    return false;
  }
  //can't be these things
  if (t.tags.Pronoun || t.tags.Comma || t.tags.Possessive || t.tags.Place) {
    return false;
  }
  //must be one of these
  if (t.tags.TitleCase || t.tags.Organization || t.tags.Acronym) {
    return true;
  }
  return false;
};

const organization_step = ts => {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (orgWords.hasOwnProperty(t.normal) === true) {
      //eg. Toronto University
      let lastTerm = ts.terms[i - 1];
      if (lastTerm && maybeOrg(lastTerm)) {
        lastTerm.tag('Organization', 'org-word-1');
        t.tag('Organization', 'org-word-2');
        continue;
      }
      //eg. University of Toronto
      let nextTerm = ts.terms[i + 1];
      if (nextTerm && nextTerm.normal === 'of') {
        if (ts.terms[i + 2] && maybeOrg(ts.terms[i + 2])) {
          t.tag('Organization', 'org-of-word-1');
          nextTerm.tag('Organization', 'org-of-word-2');
          ts.terms[i + 2].tag('Organization', 'org-of-word-3');
          continue;
        }
      }
    }
  }
  if (ts.has('#Acronym')) {
    ts.match('the #Acronym').not('(iou|fomo|yolo|diy|dui|nimby)').lastTerm().tag('Organization', 'the-acronym');
    ts.match('#Acronym').match('#Possessive').tag('Organization', 'possessive-acronym');
  }
  return ts;
};
module.exports = organization_step;

},{"../../world/more-data/orgWords":172}],85:[function(_dereq_,module,exports){
'use strict';
const isPlural = _dereq_('../../subset/nouns/isPlural');

const pluralStep = function(ts) {
  for (let i = 0; i < ts.terms.length; i++) {
    let t = ts.terms[i];
    if (t.tags.Noun) {
      //skip existing fast
      if (t.tags.Singular || t.tags.Plural) {
        continue;
      }
      //check if it's plural
      let plural = isPlural(t); //can be null if unknown
      if (isPlural(t) === true) {
        t.tag('Plural', 'pluralStep');
      } else if (plural === false) {
        t.tag('Singular', 'pluralStep');
      }
    }
  }
  return ts;
};

module.exports = pluralStep;

},{"../../subset/nouns/isPlural":29}],86:[function(_dereq_,module,exports){

//patterns are .match() statements to be run after the tagger
const posthoc = function(ts) {
  const patterns = ts.world.patterns;
  Object.keys(patterns).forEach((k) => {
    ts.match(k).tag(patterns[k], 'post-hoc: ' + k);
  });
  return ts;
};
module.exports = posthoc;

},{}],87:[function(_dereq_,module,exports){
//yep,
//https://github.com/mathiasbynens/emoji-regex/blob/master/index.js
module.exports = /(?:0\u20E3\n1\u20E3|2\u20E3|3\u20E3|4\u20E3|5\u20E3|6\u20E3|7\u20E3|8\u20E3|9\u20E3|#\u20E3|\*\u20E3|\uD83C(?:\uDDE6\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF2|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFD|\uDDFF)|\uDDE7\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFC|\uDDFE|\uDDFF)|\uDDE8\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDE9\uD83C(?:\uDDEA|\uDDEC|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDFF)|\uDDEA\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDED|\uDDF7|\uDDF8|\uDDF9|\uDDFA)|\uDDEB\uD83C(?:\uDDEE|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDF7)|\uDDEC\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF1|\uDDF2|\uDDF3|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFE)|\uDDED\uD83C(?:\uDDF0|\uDDF2|\uDDF3|\uDDF7|\uDDF9|\uDDFA)|\uDDEE\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9)|\uDDEF\uD83C(?:\uDDEA|\uDDF2|\uDDF4|\uDDF5)|\uDDF0\uD83C(?:\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDF2|\uDDF3|\uDDF5|\uDDF7|\uDDFC|\uDDFE|\uDDFF)|\uDDF1\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDEE|\uDDF0|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFE)|\uDDF2\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDF3\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFF)|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C(?:\uDDE6|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF7|\uDDF8|\uDDF9|\uDDFC|\uDDFE)|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C(?:\uDDEA|\uDDF4|\uDDF8|\uDDFA|\uDDFC)|\uDDF8\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDE9|\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFD|\uDDFE|\uDDFF)|\uDDF9\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF9|\uDDFB|\uDDFC|\uDDFF)|\uDDFA\uD83C(?:\uDDE6|\uDDEC|\uDDF2|\uDDF8|\uDDFE|\uDDFF)|\uDDFB\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDEE|\uDDF3|\uDDFA)|\uDDFC\uD83C(?:\uDDEB|\uDDF8)|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C(?:\uDDEA|\uDDF9)|\uDDFF\uD83C(?:\uDDE6|\uDDF2|\uDDFC)))|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]/g;

},{}],88:[function(_dereq_,module,exports){
//just some of the most common emoticons
//faster than
//http://stackoverflow.com/questions/28077049/regex-matching-emoticons
module.exports = {
  ':(': true,
  ':)': true,
  ':P': true,
  ':p': true,
  ':O': true,
  ':3': true,
  ':|': true,
  ':/': true,
  ':\\': true,
  ':$': true,
  ':*': true,
  ':@': true,
  ':-(': true,
  ':-)': true,
  ':-P': true,
  ':-p': true,
  ':-O': true,
  ':-3': true,
  ':-|': true,
  ':-/': true,
  ':-\\': true,
  ':-$': true,
  ':-*': true,
  ':-@': true,
  ':^(': true,
  ':^)': true,
  ':^P': true,
  ':^p': true,
  ':^O': true,
  ':^3': true,
  ':^|': true,
  ':^/': true,
  ':^\\': true,
  ':^$': true,
  ':^*': true,
  ':^@': true,
  '):': true,
  '(:': true,
  '$:': true,
  '*:': true,
  ')-:': true,
  '(-:': true,
  '$-:': true,
  '*-:': true,
  ')^:': true,
  '(^:': true,
  '$^:': true,
  '*^:': true,
  '<3': true,
  '</3': true,
  '<\\3': true
};

},{}],89:[function(_dereq_,module,exports){
'use strict';
//markov-like stats about co-occurance, for hints about unknown terms
//basically, a little-bit better than the noun-fallback
//just top n-grams from nlp tags, generated from nlp-corpus

//after this word, here's what happens usually
let afterThisWord = {
  i: 'Verb', //44% //i walk..
  first: 'Noun', //50% //first principles..
  it: 'Verb', //33%
  there: 'Verb', //35%
  // to: 'Verb', //32%
  not: 'Verb', //33%
  because: 'Noun', //31%
  if: 'Noun', //32%
  but: 'Noun', //26%
  who: 'Verb', //40%
  this: 'Noun', //37%
  his: 'Noun', //48%
  when: 'Noun', //33%
  you: 'Verb', //35%
  very: 'Adjective', // 39%
  old: 'Noun', //51%
  never: 'Verb', //42%
  before: 'Noun', //28%
};

//in advance of this word, this is what happens usually
let beforeThisWord = {
  there: 'Verb', //23% // be there
  me: 'Verb', //31% //see me
  man: 'Adjective', // 80% //quiet man
  only: 'Verb', //27% //sees only
  him: 'Verb', //32% //show him
  were: 'Noun', //48% //we were
  what: 'Verb', //25% //know what
  took: 'Noun', //38% //he took
  himself: 'Verb', //31% //see himself
  went: 'Noun', //43% //he went
  who: 'Noun', //47% //person who
  jr: 'Person'
};

//following this POS, this is likely
let afterThisPos = {
  Adjective: 'Noun', //36% //blue dress
  Possessive: 'Noun', //41% //his song
  Determiner: 'Noun', //47%
  Adverb: 'Verb', //20%
  // Person: 'Verb', //40%
  Pronoun: 'Verb', //40%
  Value: 'Noun', //47%
  Ordinal: 'Noun', //53%
  Modal: 'Verb', //35%
  Superlative: 'Noun', //43%
  Demonym: 'Noun', //38%
  Organization: 'Verb', //33%
  Honorific: 'Person', //
// FirstName: 'Person', //
};

//in advance of this POS, this is likely
let beforeThisPos = {
  Copula: 'Noun', //44% //spencer is
  PastTense: 'Noun', //33% //spencer walked
  Conjunction: 'Noun', //36%
  Modal: 'Noun', //38%
  PluperfectTense: 'Noun', //40%
  PerfectTense: 'Verb', //32%
// LastName: 'FirstName', //
};
module.exports = {
  beforeThisWord: beforeThisWord,
  afterThisWord: afterThisWord,

  beforeThisPos: beforeThisPos,
  afterThisPos: afterThisPos
};

},{}],90:[function(_dereq_,module,exports){
'use strict';
//regex suffix patterns and their most common parts of speech,
//built using wordnet, by spencer kelly.
//this mapping shrinks-down the uglified build
const Adj = 'Adjective';
const Inf = 'Infinitive';
const Pres = 'PresentTense';
const Sing = 'Singular';
const Past = 'PastTense';
const Adverb = 'Adverb';
const Exp = 'Expression';
const Actor = 'Actor';
const Verb = 'Verb';
const Noun = 'Noun';
const Last = 'LastName';
//the order here matters.

//regexes indexed by mandated last-character
module.exports = {
  a: [
    [/.[aeiou]na$/, Noun],
    [/.[oau][wvl]ska$/, Last], //polish (female)
    [/.[^aeiou]ica$/, Sing],
    [/^([hyj]a)+$/, Exp] //hahah
  ],
  c: [[/.[^aeiou]ic$/, Adj]],
  d: [
    [/.[ia]sed$/, Adj],
    [/.[gt]led$/, Adj],
    [/.[aeiou][td]ed$/, Past],
    [/.[^aeiou]led$/, Past], //rumbled
    [/[^aeiou]ard$/, Sing],
    [/[aeiou][^aeiou]id$/, Adj],
    [/[aeiou]c?ked$/, Past], //hooked
    [/.[vrl]id$/, Adj]
  ],
  e: [
    [/.[lnr]ize$/, Inf],
    [/.[^aeiou]ise$/, Inf],
    [/.[aeiou]te$/, Inf],
    [/.[^aeiou][ai]ble$/, Adj],
    [/.[^aeiou]eable$/, Adj],
    [/.[^aeiou]ive$/, Adj]
  ],
  h: [
    [/.[^aeiouf]ish$/, Adj],
    [/.v[iy]ch$/, Last], //east-europe
    [/^ug?h+$/, Exp], //uhh
    [/^uh[ -]?oh$/, Exp] //uhoh
  ],
  i: [
    [/.[oau][wvl]ski$/, Last] //polish (male)
  ],
  k: [
    [/^(k)+$/, Exp] //kkkk
  ],
  l: [
    [/.[nrtumcd]al$/, Adj],
    [/.[gl]ial$/, Adj],
    [/.[^aeiou]eal$/, Adj],
    [/.[^aeiou][ei]al$/, Adj],
    [/.[^aeiou]ful$/, Adj]
  ],
  m: [
    [/.[^aeiou]ium$/, Sing],
    [/[^aeiou]ism$/, Sing],
    [/.[^aeiou]ium$/, Sing],
    [/^mmm+$/, Exp], //mmmm
    [/^[hu]m+$/, Exp], //ummmm
    [/^[0-9]+ ?(am|pm)$/, 'Date']
  ],
  n: [[/.[lsrnpb]ian$/, Adj], [/[^aeiou]ician$/, Actor]],
  o: [
    [/^no+$/, Exp], //noooo
    [/^(yo)+$/, Exp], //yoyo
    [/^woo+[pt]?$/, Exp] //woo
  ],
  r: [[/.[ilk]er$/, 'Comparative'], [/[aeiou][pns]er$/, Sing], [/[^i]fer$/, Inf], [/.[^aeiou][ao]pher$/, Actor]],
  t: [[/.[di]est$/, 'Superlative'], [/.[icldtgrv]ent$/, Adj], [/[aeiou].*ist$/, Adj], [/^[a-z]et$/, Verb]],
  s: [
    [/.[rln]ates$/, Pres],
    [/.[^z]ens$/, Verb],
    [/.[lstrn]us$/, Sing],
    [/[aeiou][^aeiou]is$/, Sing],
    [/[a-z]\'s$/, Noun],
    [/^yes+$/, Exp] //yessss
  ],
  v: [
    [/.[^aeiou][ai][kln]ov$/, Last] //east-europe
  ],
  y: [
    [/.[cts]hy$/, Adj],
    [/.[st]ty$/, Adj],
    [/.[gk]y$/, Adj],
    [/.[tnl]ary$/, Adj],
    [/.[oe]ry$/, Sing],
    [/[rdntkbhs]ly$/, Adverb],
    [/...lly$/, Adverb],
    [/[bszmp]{2}y$/, Adj],
    [/.(gg|bb|zz)ly$/, Adj],
    [/.[aeiou]my$/, Adj],
    [/.[^aeiou]ity$/, Sing],
    [/[ea]{2}zy$/, Adj],
    [/.[^aeiou]ity$/, Sing]
  ]
};

},{}],91:[function(_dereq_,module,exports){
'use strict';
//just a foolish lookup of known suffixes
const Adj = 'Adjective';
const Inf = 'Infinitive';
const Pres = 'PresentTense';
const Sing = 'Singular';
const Past = 'PastTense';
const Avb = 'Adverb';
const Plrl = 'Plural';
const Actor = 'Actor';
const Vb = 'Verb';
const Noun = 'Noun';
const Last = 'LastName';
const Modal = 'Modal';

module.exports = [
  null, //0
  null, //1
  {
    //2-letter
    ea: Sing,
    ia: Noun,
    ic: Adj,
    ly: Avb,
    '\'n': Vb,
    '\'t': Vb
  },
  {
    //3-letter
    que: Adj,
    lar: Adj,
    ike: Adj,
    ffy: Adj,
    nny: Adj,
    rmy: Adj,
    azy: Adj,
    oid: Adj,
    mum: Adj,
    ean: Adj,
    ous: Adj,
    end: Vb,
    sis: Sing,
    rol: Sing,
    ize: Inf,
    ify: Inf,
    zes: Pres,
    nes: Pres,
    ing: 'Gerund', //likely to be converted to Adj after lexicon pass
    ' so': Avb,
    '\'ll': Modal,
    '\'re': 'Copula'
  },
  {
    //4-letter
    teen: 'Value',
    tors: Noun,
    ends: Vb,
    oses: Pres,
    fies: Pres,
    ects: Pres,
    nded: Past,
    cede: Inf,
    tage: Inf,
    gate: Inf,
    vice: Sing,
    tion: Sing,
    ette: Sing,
    some: Adj,
    llen: Adj,
    ried: Adj,
    gone: Adj,
    made: Adj,
    fore: Avb,
    less: Avb,
    ices: Plrl,
    ions: Plrl,
    ints: Plrl,
    aped: Past,
    lked: Past,
    ould: Modal,
    tive: Actor,
    sson: Last, //swedish male
    czyk: Last, //polish (male)
    chuk: Last, //east-europe
    enko: Last, //east-europe
    akis: Last, //greek
    nsen: Last //norway
  },
  {
    //5-letter
    fully: Avb,
    where: Avb,
    wards: Avb,
    urned: Past,
    tized: Past,
    eased: Past,
    ances: Plrl,
    tures: Plrl,
    ports: Plrl,
    ettes: Plrl,
    ities: Plrl,
    rough: Adj,
    bound: Adj,
    tieth: 'Ordinal',
    ishes: Pres,
    tches: Pres,
    nssen: Last, //norway
    marek: Last //polish (male)
  },
  {
    //6-letter
    keeper: Actor,
    logist: Actor,
    auskas: Last, //lithuania
    teenth: 'Value'
  },
  {
    //7-letter
    sdottir: Last, //swedish female
    opoulos: Last //greek
  }
];

},{}],92:[function(_dereq_,module,exports){
'use strict';
//add 'downward' tags (that immediately depend on this one)
const addDownword = function(tags) {
  const keys = Object.keys(tags);
  keys.forEach(k => {
    tags[k].downward = [];
    //look for tags with this as parent
    for (let i = 0; i < keys.length; i++) {
      if (tags[keys[i]].isA && tags[keys[i]].isA === k) {
        tags[k].downward.push(keys[i]);
      }
    }
  });
};
module.exports = addDownword;

},{}],93:[function(_dereq_,module,exports){
'use strict';

//list of inconsistent parts-of-speech
module.exports = [
  //top-level pos are all inconsistent
  [
    'Noun',
    'Verb',
    'Adjective',
    'Adverb',
    'Determiner',
    'Conjunction',
    'Preposition',
    'QuestionWord',
    'Expression',
    'Url',
    'PhoneNumber',
    'Email',
    'Emoji'
  ],
  //exlusive-nouns
  ['Person', 'Organization', 'Value', 'Place', 'Actor', 'Demonym', 'Pronoun'],
  //things that can't be plural
  ['Plural', 'Singular'],
  // ['Plural', 'Pronoun'],
  // ['Plural', 'Person'],
  // ['Plural', 'Organization'],
  // ['Plural', 'Currency'],
  // ['Plural', 'Ordinal'],
  //exlusive-people
  ['MaleName', 'FemaleName'],
  ['FirstName', 'LastName', 'Honorific'],
  //adjectives
  ['Comparative', 'Superlative'],
  //values
  ['Value', 'Verb', 'Adjective'],
  // ['Value', 'Year'],
  ['Ordinal', 'Cardinal'],
  ['TextValue', 'NumericValue'],
  ['NiceNumber', 'TextValue'],
  ['Ordinal', 'Currency'], //$5.50th
  //verbs
  ['PastTense', 'PresentTense', 'FutureTense'],
  ['Pluperfect', 'Copula', 'Modal', 'Participle', 'Infinitive', 'Gerund', 'FuturePerfect', 'PerfectTense'],
  ['Auxiliary', 'Noun', 'Value'],
  //date
  ['Month', 'WeekDay', 'Year', 'Duration', 'Holiday'],
  ['Particle', 'Conjunction', 'Adverb', 'Preposition'],
  ['Date', 'Verb', 'Adjective', 'Person'],
  ['Date', 'Money', 'RomanNumeral', 'Fraction'],
  //a/an -> 1
  ['Value', 'Determiner'],
  ['Url', 'Value', 'HashTag', 'PhoneNumber', 'Emoji'],
  //roman numerals
  ['RomanNumeral', 'Fraction', 'NiceNumber'],
  ['RomanNumeral', 'Money'],
  //cases
  ['UpperCase', 'TitleCase', 'CamelCase'],
  //phrases
  ['VerbPhrase', 'Noun', 'Adjective', 'Value'],
  //QuestionWord
  ['QuestionWord', 'VerbPhrase']
];

},{}],94:[function(_dereq_,module,exports){
'use strict';
const conflicts = _dereq_('./conflicts');
const nouns = _dereq_('./tags/nouns');
const verbs = _dereq_('./tags/verbs');
const values = _dereq_('./tags/values');
const dates = _dereq_('./tags/dates');
const misc = _dereq_('./tags/misc');
const addDownward = _dereq_('./addDownward');

//used for pretty-printing on the server-side
const colors = {
  Noun: 'blue',
  Date: 'red',
  Value: 'red',
  Verb: 'green',
  Auxiliary: 'green',
  Negative: 'green',
  VerbPhrase: 'green',
  Preposition: 'cyan',
  Condition: 'cyan',
  Conjunction: 'cyan',
  Determiner: 'cyan',
  Adjective: 'magenta',
  Adverb: 'cyan'
};

//extend tagset with new tags
const addIn = function(obj, tags) {
  Object.keys(obj).forEach(k => {
    tags[k] = obj[k];
  });
};

//add tags to remove when tagging this one
const addConflicts = function(tags) {
  Object.keys(tags).forEach(k => {
    tags[k].notA = {};
    for (let i = 0; i < conflicts.length; i++) {
      let arr = conflicts[i];
      if (arr.indexOf(k) !== -1) {
        arr = arr.filter(a => a !== k);
        arr.forEach(e => {
          tags[k].notA[e] = true;
        });
      }
    }
    tags[k].notA = Object.keys(tags[k].notA);
  });
};

const addColors = function(tags) {
  Object.keys(tags).forEach(k => {
    if (colors[k]) {
      tags[k].color = colors[k];
      return;
    }
    if (tags[k].isA && colors[tags[k].isA]) {
      tags[k].color = colors[tags[k].isA];
      return;
    }
    if (tags[k].isA && tags[tags[k].isA].color) {
      tags[k].color = tags[tags[k].isA].color;
    }
  });
};

const build = () => {
  let tags = {};
  addIn(nouns, tags);
  addIn(verbs, tags);
  addIn(values, tags);
  addIn(dates, tags);
  addIn(misc, tags);
  //downstream
  addDownward(tags);
  //add enemies
  addConflicts(tags);
  //for nice-logging
  addColors(tags);
  return tags;
};
module.exports = build();

},{"./addDownward":92,"./conflicts":93,"./tags/dates":95,"./tags/misc":96,"./tags/nouns":97,"./tags/values":98,"./tags/verbs":99}],95:[function(_dereq_,module,exports){
module.exports = {
  Date: {}, //not a noun, but usually is
  Month: {
    isA: 'Date',
    also: 'Singular'
  },
  WeekDay: {
    isA: 'Date',
    also: 'Noun'
  },
  RelativeDay: {
    isA: 'Date'
  },
  Year: {
    isA: 'Date'
  },
  Duration: {
    isA: 'Date',
    also: 'Noun'
  },
  Time: {
    isA: 'Date',
    also: 'Noun'
  },
  Holiday: {
    isA: 'Date',
    also: 'Noun'
  }
};

},{}],96:[function(_dereq_,module,exports){
module.exports = {
  Adjective: {},
  Comparable: {
    isA: 'Adjective'
  },
  Comparative: {
    isA: 'Adjective'
  },
  Superlative: {
    isA: 'Adjective'
  },

  NumberRange: {
    isA: 'Contraction'
  },
  Adverb: {},

  Currency: {},
  //glue
  Determiner: {},
  Conjunction: {},
  Preposition: {},
  QuestionWord: {},
  Expression: {},
  Url: {},
  PhoneNumber: {},
  HashTag: {},
  AtMention: {
    is: 'Noun'
  },
  Emoji: {},
  Email: {},

  //non-exclusive
  Condition: {},
  VerbPhrase: {},
  Auxiliary: {},
  Negative: {},
  Contraction: {},

  TitleCase: {},
  CamelCase: {},
  UpperCase: {},
  Hyphenated: {},
  Acronym: {},
  ClauseEnd: {},
  Quotation: {}
};

},{}],97:[function(_dereq_,module,exports){
module.exports = {
  Noun: {},
  // - singular
  Singular: {
    isA: 'Noun'
  },

  // -- people
  Person: {
    isA: 'Singular'
  },
  FirstName: {
    isA: 'Person'
  },
  MaleName: {
    isA: 'FirstName'
  },
  FemaleName: {
    isA: 'FirstName'
  },
  LastName: {
    isA: 'Person'
  },
  Honorific: {
    isA: 'Noun'
  },
  Place: {
    isA: 'Singular'
  },

  // -- places
  Country: {
    isA: 'Place'
  },
  City: {
    isA: 'Place'
  },
  Region: {
    isA: 'Place'
  },
  Address: {
    isA: 'Place'
  },
  Organization: {
    isA: 'Singular'
  },
  SportsTeam: {
    isA: 'Organization'
  },
  Company: {
    isA: 'Organization'
  },
  School: {
    isA: 'Organization'
  },

  // - plural
  Plural: {
    isA: 'Noun'
  },
  Uncountable: {
    //(not plural or singular)
    isA: 'Noun'
  },
  Pronoun: {
    isA: 'Noun'
  },
  Actor: {
    isA: 'Noun'
  },
  Activity: {
    isA: 'Noun'
  },
  Unit: {
    isA: 'Noun'
  },
  Demonym: {
    isA: 'Noun'
  },
  Possessive: {
    isA: 'Noun'
  }
};

},{}],98:[function(_dereq_,module,exports){
module.exports = {
  Value: {},
  Ordinal: {
    isA: 'Value'
  },
  Cardinal: {
    isA: 'Value'
  },
  Multiple: {
    isA: 'Value'
  },
  RomanNumeral: {
    isA: 'Cardinal'
  },
  Fraction: {
    isA: 'Value'
  },
  TextValue: {
    isA: 'Value'
  },
  NumericValue: {
    isA: 'Value'
  },
  NiceNumber: {
    isA: 'Value'
  },
  Money: {},
  Percent: {
    isA: 'Value'
  }
};

},{}],99:[function(_dereq_,module,exports){
module.exports = {
  Verb: {
    isA: 'VerbPhrase'
  },
  PresentTense: {
    isA: 'Verb'
  },
  Infinitive: {
    isA: 'PresentTense'
  },
  Gerund: {
    isA: 'PresentTense'
  },
  PastTense: {
    isA: 'Verb'
  },
  PerfectTense: {
    isA: 'Verb'
  },
  FuturePerfect: {
    isA: 'Verb'
  },
  Pluperfect: {
    isA: 'Verb'
  },
  Copula: {
    isA: 'Verb'
  },
  Modal: {
    isA: 'Verb'
  },
  Participle: {
    isA: 'Verb'
  },
  Particle: {
    isA: 'Verb'
  },
  PhrasalVerb: {
    isA: 'Verb'
  }
};

},{}],100:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('./paths').fns;
const build_whitespace = _dereq_('./whitespace');
const makeUID = _dereq_('./makeUID');
//normalization
const addNormal = _dereq_('./methods/normalize/normalize').addNormal;
const addRoot = _dereq_('./methods/normalize/root');

const Term = function(str, world) {
  this.tags = {};
  this._text = fns.ensureString(str);
  this.world = world;
  // this.world = function() {
  //   return world;
  // };
  //seperate whitespace from the text
  let parsed = build_whitespace(this._text);
  this.whitespace = parsed.whitespace;
  this._text = parsed.text;
  this.parent = null;
  this.silent_term = '';
  this.lumped = false;
  //normalize the _text
  addNormal(this);
  addRoot(this);
  //has this term been modified
  this.dirty = false;
  //make a unique id for this term
  this.uid = makeUID(this.normal);

  //getters/setters
  Object.defineProperty(this, 'text', {
    get: function() {
      return this._text;
    },
    set: function(txt) {
      txt = txt || '';
      this._text = txt.trim();
      this.dirty = true;
      if (this._text !== txt) {
        this.whitespace = build_whitespace(txt);
      }
      this.normalize();
    }
  });
  //bit faster than .constructor.name or w/e
  Object.defineProperty(this, 'isA', {
    get: function() {
      return 'Term';
    }
  });
};

/**run each time a new text is set */
Term.prototype.normalize = function() {
  addNormal(this);
  addRoot(this);
  return this;
};
/** where in the sentence is it? zero-based. */
Term.prototype.index = function() {
  let ts = this.parentTerms;
  if (!ts) {
    return null;
  }
  return ts.terms.indexOf(this);
};
/** make a copy with no originals to the original  */
Term.prototype.clone = function() {
  let term = new Term(this._text, this.world);
  term.tags = fns.copy(this.tags);
  term.whitespace = fns.copy(this.whitespace);
  term.silent_term = this.silent_term;
  return term;
};

_dereq_('./methods/misc')(Term);
_dereq_('./methods/out')(Term);
_dereq_('./methods/tag')(Term);
_dereq_('./methods/case')(Term);
_dereq_('./methods/punctuation')(Term);

module.exports = Term;

},{"./makeUID":101,"./methods/case":103,"./methods/misc":104,"./methods/normalize/normalize":106,"./methods/normalize/root":107,"./methods/out":110,"./methods/punctuation":113,"./methods/tag":115,"./paths":118,"./whitespace":119}],101:[function(_dereq_,module,exports){
'use strict';
//this is a not-well-thought-out way to reduce our dependence on `object===object` original stuff
//generates a unique id for this term
//may need to change when the term really-transforms? not sure.
const uid = (str) => {
  let nums = '';
  for(let i = 0; i < 5; i++) {
    nums += parseInt(Math.random() * 9, 10);
  }
  return str + '-' + nums;
};
module.exports = uid;

},{}],102:[function(_dereq_,module,exports){
'use strict';
// const tagSet = require('../paths').tags;
const boringTags = {
  Auxiliary: 1,
  Possessive: 1,
  TitleCase: 1,
  ClauseEnd: 1,
  Comma: 1,
  CamelCase: 1,
  UpperCase: 1,
  Hyphenated: 1
};

const bestTag = function(t) {
  const tagSet = t.world.tags;
  let tags = Object.keys(t.tags);
  tags = tags.sort(); //alphabetical, first
  //then sort by #of parent tags
  tags = tags.sort((a, b) => {
    //bury the tags we dont want
    if (boringTags[b] || !tagSet[a] || !tagSet[b]) {
      return -1;
    }
    if (tagSet[a].downward.length > tagSet[b].downward.length) {
      return -1;
    }
    return 1;
  });
  return tags[0];
};
module.exports = bestTag;

},{}],103:[function(_dereq_,module,exports){
'use strict';

const addMethods = Term => {
  const methods = {
    toUpperCase: function() {
      this.text = this.text.toUpperCase();
      this.tag('#UpperCase', 'toUpperCase');
      return this;
    },
    toLowerCase: function() {
      this.text = this.text.toLowerCase();
      this.unTag('#TitleCase');
      this.unTag('#UpperCase');
      return this;
    },
    toTitleCase: function() {
      this.text = this.text.replace(/^( +)?[a-z]/, x => x.toUpperCase());
      this.tag('#TitleCase', 'toTitleCase');
      return this;
    },
    //(camelCase() is handled in `./terms` )

    /** is it titlecased because it deserves it? Like a person's name? */
    needsTitleCase: function() {
      const titleCases = [
        'Person',
        'Place',
        'Organization',
        'Acronym',
        'UpperCase',
        'Currency',
        'RomanNumeral',
        'Month',
        'WeekDay',
        'Holiday',
        'Demonym'
      ];
      for (let i = 0; i < titleCases.length; i++) {
        if (this.tags[titleCases[i]]) {
          return true;
        }
      }
      //specific words that keep their titlecase
      //https://en.wikipedia.org/wiki/Capitonym
      const irregulars = ['i', 'god', 'allah'];
      for (let i = 0; i < irregulars.length; i++) {
        if (this.normal === irregulars[i]) {
          return true;
        }
      }
      return false;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],104:[function(_dereq_,module,exports){
'use strict';
const isAcronym = _dereq_('./normalize/isAcronym');
const bestTag = _dereq_('./bestTag');

//regs-
const hasVowel = /[aeiouy]/i;
const hasLetter = /[a-z]/;
const hasNumber = /[0-9]/;

const addMethods = (Term) => {

  const methods = {
    /** which tag best-represents this term?*/
    bestTag: function () {
      return bestTag(this);
    },

    /** is this term like F.B.I. or NBA */
    isAcronym: function () {
      return isAcronym(this._text);
    },
    /** check if it is word-like in english */
    isWord: function () {
      let t = this;
      //assume a contraction produces a word-word
      if (t.silent_term) {
        return true;
      }
      //no letters or numbers
      if (/[a-z|A-Z|0-9]/.test(t.text) === false) {
        return false;
      }
      //has letters, but with no vowels
      if (t.normal.length > 1 && hasLetter.test(t.normal) === true && hasVowel.test(t.normal) === false) {
        return false;
      }
      //has numbers but not a 'value'
      if (hasNumber.test(t.normal) === true) {
        //s4e
        if (/[a-z][0-9][a-z]/.test(t.normal) === true) {
          return false;
        }
        //ensure it looks like a 'value' eg '-$4,231.00'
        if (/^([$-])*?([0-9,\.])*?([s\$%])*?$/.test(t.normal) === false) {
          return false;
        }
      }
      return true;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach((k) => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./bestTag":102,"./normalize/isAcronym":105}],105:[function(_dereq_,module,exports){
'use strict'
//regs -
const periodAcronym = /([A-Z]\.)+[A-Z]?$/
const oneLetterAcronym = /^[A-Z]\.$/
const noPeriodAcronym = /[A-Z]{3}('s)?$/

/** does it appear to be an acronym, like FBI or M.L.B. */
const isAcronym = function(str) {
  //like N.D.A
  if (periodAcronym.test(str) === true) {
    return true
  }
  //like 'F.'
  if (oneLetterAcronym.test(str) === true) {
    return true
  }
  //like NDA
  if (noPeriodAcronym.test(str) === true) {
    return true
  }
  return false
}
module.exports = isAcronym

},{}],106:[function(_dereq_,module,exports){
'use strict';
const killUnicode = _dereq_('./unicode');
const isAcronym = _dereq_('./isAcronym');

//some basic operations on a string to reduce noise
exports.normalize = function(str) {
  str = str || '';
  str = str.toLowerCase();
  str = str.trim();
  let original = str;
  //(very) rough asci transliteration -  bjŏrk -> bjork
  str = killUnicode(str);
  //hashtags, atmentions
  str = str.replace(/^[#@]/, '');
  //punctuation
  str = str.replace(/[,;.!?]+$/, '');
  // coerce single curly quotes
  str = str.replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]+/g, '\'');
  // coerce double curly quotes
  str = str.replace(/[\u201C\u201D\u201E\u201F\u2033\u2036"]+/g, '');
  //coerce unicode elipses
  str = str.replace(/\u2026/g, '...');
  //en-dash
  str = str.replace(/\u2013/g, '-');
  //lookin’->looking (make it easier for conjugation)
  if (/[a-z][^aeiou]in['’]$/.test(str) === true) {
    str = str.replace(/in['’]$/, 'ing');
  }
  //strip leading & trailing grammatical punctuation
  if (/^[:;]/.test(str) === false) {
    str = str.replace(/\.{3,}$/g, '');
    str = str.replace(/['",\.!:;\?\)]$/g, '');
    str = str.replace(/^['"\(]/g, '');
  }
  //do this again..
  str = str.trim();
  //oh shucks,
  if (str === '') {
    str = original;
  }
  return str;
};

exports.addNormal = function(term) {
  let str = term._text || '';
  str = exports.normalize(str);
  //compact acronyms
  if (isAcronym(term._text)) {
    str = str.replace(/\./g, '');
  }
  //nice-numbers
  str = str.replace(/([0-9]),([0-9])/g, '$1$2');
  term.normal = str;
};

// console.log(normalize('Dr. V Cooper'));

},{"./isAcronym":105,"./unicode":108}],107:[function(_dereq_,module,exports){
'use strict';
//
const rootForm = function(term) {
  let str = term.normal || term.silent_term || '';
  //handle apostrophes and stuff (go further than normalize())
  str = str.replace(/'s\b/, '');
  str = str.replace(/'$/, '');
  term.root = str;
};

module.exports = rootForm;

},{}],108:[function(_dereq_,module,exports){
'use strict';
//a hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters to english ascii.
//approximate visual (not semantic or phonetic) relationship between unicode and ascii characters
//http://en.wikipedia.org/wiki/List_of_Unicode_characters
//https://docs.google.com/spreadsheet/ccc?key=0Ah46z755j7cVdFRDM1A2YVpwa1ZYWlpJM2pQZ003M0E
let compact = {
  '!': '¡',
  '?': '¿Ɂ',
  '-': '—–',
  'a': 'ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАДадѦѧӐӑӒӓƛɅæ',
  'b': 'ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬбвъьѢѣҌҍҔҕƥƾ',
  'c': '¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾϿЄСсєҀҁҪҫ',
  'd': 'ÐĎďĐđƉƊȡƋƌǷ',
  'e': 'ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬӭ',
  'f': 'ƑƒϜϝӺӻҒғӶӷſ',
  'g': 'ĜĝĞğĠġĢģƓǤǥǦǧǴǵ',
  'h': 'ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ',
  'I': 'ÌÍÎÏ',
  'i': 'ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії',
  'j': 'ĴĵǰȷɈɉϳЈј',
  'k': 'ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ',
  'l': 'ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ',
  'm': 'ΜϺϻМмӍӎ',
  'n': 'ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ',
  'o': 'ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ¤ƍΏ',
  'p': 'ƤƿΡρϷϸϼРрҎҏÞ',
  'q': 'Ɋɋ',
  'r': 'ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ',
  's': 'ŚśŜŝŞşŠšƧƨȘșȿςϚϛϟϨϩЅѕ',
  't': 'ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮϯТт҂Ҭҭ',
  'u': 'µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύϑЏЦЧцџҴҵҶҷӋӌӇӈ',
  'v': 'νѴѵѶѷ',
  'w': 'ŴŵƜωώϖϢϣШЩшщѡѿ',
  'x': '×ΧχϗϰХхҲҳӼӽӾӿ',
  'y': 'ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ',
  'z': 'ŹźŻżŽžƩƵƶȤȥɀΖζ'
};
//decompress data into two hashes
let unicode = {};
Object.keys(compact).forEach(function (k) {
  compact[k].split('').forEach(function (s) {
    unicode[s] = k;
  });
});

const killUnicode = (str) => {
  let chars = str.split('');
  chars.forEach((s, i) => {
    if (unicode[s]) {
      chars[i] = unicode[s];
    }
  });
  return chars.join('');
};
module.exports = killUnicode;
// console.log(killUnicode('bjŏȒk—Ɏó'));

},{}],109:[function(_dereq_,module,exports){
'use strict';
const paths = _dereq_('../../paths');
const fns = paths.fns;
const tagset = paths.tags;

//a nicer logger for the client-side
const clientSide = (t) => {
  let color = 'silver';
  let tags = Object.keys(t.tags);
  for(let i = 0; i < tags.length; i++) {
    if (tagset[tags[i]] && tagset[tags[i]].color) {
      color = tagset[tags[i]].color;
      break;
    }
  }
  let word = fns.leftPad(t.text, 12);
  word += ' ' + tags;
  console.log('%c ' + word, 'color: ' + color);
};
module.exports = clientSide;

},{"../../paths":118}],110:[function(_dereq_,module,exports){
'use strict';
const renderHtml = _dereq_('./renderHtml');
const clientDebug = _dereq_('./client');
const serverDebug = _dereq_('./server');

const methods = {
  /** a pixel-perfect reproduction of the input, with whitespace preserved */
  text: function(r) {
    return r.whitespace.before + r._text + r.whitespace.after;
  },
  /** a lowercased, punctuation-cleaned, whitespace-trimmed version of the word */
  normal: function(r) {
    return r.normal;
  },
  /** even-more normalized than normal */
  root: function(r) {
    return r.root || r.normal;
  },
  /** the &encoded term in a span element, with POS as classNames */
  html: function(r) {
    return renderHtml(r);
  },
  /** a simplified response for Part-of-Speech tagging*/
  tags: function(r) {
    return {
      text: r.text,
      normal: r.normal,
      tags: Object.keys(r.tags)
    };
  },
  /** check-print information for the console */
  debug: function(t) {
    if (typeof module !== 'undefined' && this.module !== module) {
      serverDebug(t);
    } else {
      clientDebug(t);
    }
  }
};

const addMethods = Term => {
  //hook them into result.proto
  Term.prototype.out = function(fn) {
    if (!methods[fn]) {
      fn = 'text';
    }
    return methods[fn](this);
  };
  return Term;
};

module.exports = addMethods;

},{"./client":109,"./renderHtml":111,"./server":112}],111:[function(_dereq_,module,exports){
'use strict';
//turn xml special characters into apersand-encoding.
//i'm not sure this is perfectly safe.
const escapeHtml = (s) => {
  const HTML_CHAR_MAP = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    ' ': '&nbsp;'
  };
  return s.replace(/[<>&"' ]/g, function(ch) {
    return HTML_CHAR_MAP[ch];
  });
};

//remove html elements already in the text
//not tested!
//http://stackoverflow.com/questions/295566/sanitize-rewrite-html-on-the-client-side
const sanitize = (html) => {
  const tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
  const tagOrComment = new RegExp(
    '<(?:'
    // Comment body.
    + '!--(?:(?:-*[^->])*--+|-?)'
    // Special "raw text" elements whose content should be elided.
    + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
    + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
    // Regular name
    + '|/?[a-z]'
    + tagBody
    + ')>',
    'gi');
  let oldHtml;
  do {
    oldHtml = html;
    html = html.replace(tagOrComment, '');
  } while (html !== oldHtml);
  return html.replace(/</g, '&lt;');
};

//turn the term into ~properly~ formatted html
const renderHtml = function(t) {
  let classes = Object.keys(t.tags).filter((tag) => tag !== 'Term');
  classes = classes.map(c => 'nl-' + c);
  classes = classes.join(' ');
  let text = sanitize(t.text);
  text = escapeHtml(text);
  let el = '<span class="' + classes + '">' + text + '</span>';
  return escapeHtml(t.whitespace.before) + el + escapeHtml(t.whitespace.after);
};

module.exports = renderHtml;

},{}],112:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../../paths').fns;

//pretty-print a term on the nodejs console
const serverDebug = function(t) {
  let tags = Object.keys(t.tags)
    .map(tag => {
      return fns.printTag(tag);
    })
    .join(', ');
  let word = t.text;
  word = '\'' + fns.yellow(word || '-') + '\'';
  let silent = '';
  if (t.silent_term) {
    silent = '[' + t.silent_term + ']';
  }
  word = fns.leftPad(word, 20);
  word += fns.leftPad(silent, 8);
  console.log('   ' + word + '   ' + '     - ' + tags);
};
module.exports = serverDebug;

},{"../../paths":118}],113:[function(_dereq_,module,exports){
'use strict';
// const endPunct = /([^\/,:;.()!?]{0,1})([\/,:;.()!?]+)$/i;
const endPunct = /([a-z ])([,:;.!?]+)$/i; //old

const addMethods = Term => {
  const methods = {
    /** the punctuation at the end of this term*/
    endPunctuation: function() {
      let m = this.text.match(endPunct);
      if (m) {
        return m[2];
      }
      return null;
    },

    setPunctuation: function(punct) {
      this.killPunctuation();
      this.text += punct;
      return this;
    },

    /** check if the term ends with a comma */
    hasComma: function() {
      if (this.endPunctuation() === ',') {
        return true;
      }
      return false;
    },

    killPunctuation: function() {
      this.text = this._text.replace(endPunct, '$1');
      return this;
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],114:[function(_dereq_,module,exports){
'use strict';

//recursively-check compatibility of this tag and term
const canBe = function(term, tag) {
  const tagset = term.world.tags;
  //fail-fast
  if (tagset[tag] === undefined) {
    return true;
  }
  //loop through tag's contradictory tags
  let enemies = tagset[tag].notA || [];
  for (let i = 0; i < enemies.length; i++) {
    if (term.tags[enemies[i]] === true) {
      return false;
    }
  }
  if (tagset[tag].isA !== undefined) {
    return canBe(term, tagset[tag].isA); //recursive
  }
  return true;
};

module.exports = canBe;

},{}],115:[function(_dereq_,module,exports){
'use strict';
const setTag = _dereq_('./setTag');
const unTag = _dereq_('./unTag');
const canBe = _dereq_('./canBe');

//symbols used in sequential taggers which mean 'do nothing'
//.tag('#Person #Place . #City')
const ignore = {
  '.': true
};
const addMethods = (Term) => {

  const methods = {
    /** set the term as this part-of-speech */
    tag: function(tag, reason) {
      if (ignore[tag] !== true) {
        setTag(this, tag, reason);
      }
    },
    /** remove this part-of-speech from the term*/
    unTag: function(tag, reason) {
      if (ignore[tag] !== true) {
        unTag(this, tag, reason);
      }
    },
    /** is this tag compatible with this word */
    canBe: function (tag) {
      tag = tag || '';
      if (typeof tag === 'string') {
        //everything can be '.'
        if (ignore[tag] === true) {
          return true;
        }
        tag = tag.replace(/^#/, '');
      }
      return canBe(this, tag);
    }
  };

  //hook them into term.prototype
  Object.keys(methods).forEach((k) => {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./canBe":114,"./setTag":116,"./unTag":117}],116:[function(_dereq_,module,exports){
'use strict';
//set a term as a particular Part-of-speech
const path = _dereq_('../../paths');
const log = path.log;
const fns = path.fns;
const unTag = _dereq_('./unTag');
// const tagset = path.tags;
// const tagset = require('../../../tagset');

const putTag = (term, tag, reason) => {
  const tagset = term.world.tags;
  tag = tag.replace(/^#/, '');
  //already got this
  if (term.tags[tag] === true) {
    return;
  }
  term.tags[tag] = true;
  log.tag(term, tag, reason);

  //extra logic per-each POS
  if (tagset[tag]) {
    //drop any conflicting tags
    let enemies = tagset[tag].notA || [];
    for (let i = 0; i < enemies.length; i++) {
      if (term.tags[enemies[i]] === true) {
        unTag(term, enemies[i], reason);
      }
    }
    //apply implicit tags
    if (tagset[tag].isA) {
      let doAlso = tagset[tag].isA;
      if (term.tags[doAlso] !== true) {
        putTag(term, doAlso, ' --> ' + tag); //recursive
      }
    }
  }
};

//give term this tag
const wrap = function(term, tag, reason) {
  if (!term || !tag) {
    return;
  }
  const tagset = term.world.tags;
  //handle multiple tags
  if (fns.isArray(tag)) {
    tag.forEach(t => putTag(term, t, reason)); //recursive
    return;
  }
  putTag(term, tag, reason);
  //add 'extra' tag (for some special tags)
  if (tagset[tag] && tagset[tag].also !== undefined) {
    putTag(term, tagset[tag].also, reason);
  }
};

module.exports = wrap;

},{"../../paths":118,"./unTag":117}],117:[function(_dereq_,module,exports){
'use strict';
//set a term as a particular Part-of-speech
const path = _dereq_('../../paths');
const log = path.log;

//remove a tag from a term
const unTag = (term, tag, reason) => {
  const tagset = term.world.tags;
  if (term.tags[tag]) {
    log.unTag(term, tag, reason);
    delete term.tags[tag];

    //delete downstream tags too
    if (tagset[tag]) {
      let also = tagset[tag].downward;
      for (let i = 0; i < also.length; i++) {
        unTag(term, also[i], ' - -   - ');
      }
    }
  }
};

const wrap = (term, tag, reason) => {
  if (!term || !tag) {
    return;
  }
  //support '*' flag - remove all-tags
  if (tag === '*') {
    term.tags = {};
    return;
  }
  //remove this tag
  unTag(term, tag, reason);
  return;
};
module.exports = wrap;

},{"../../paths":118}],118:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('../fns'),
  log: _dereq_('../log')
};

},{"../fns":3,"../log":6}],119:[function(_dereq_,module,exports){
'use strict';
//punctuation regs-
const before = /^(\s|-+|\.\.+)+/;
const minusNumber = /^( *)-(\$|€|¥|£)?([0-9])/;
const after = /(\s+|-+|\.\.+)$/;

//seperate the 'meat' from the trailing/leading whitespace.
//works in concert with ./src/text/tokenize.js
const build_whitespace = (str) => {
  let whitespace = {
    before: '',
    after: ''
  };
  //get before punctuation/whitespace
  //mangle 'far - fetched', but don't mangle '-2'
  let m = str.match(minusNumber);
  if (m !== null) {
    whitespace.before = m[1];
    str = str.replace(/^ */, '');
  } else {
    m = str.match(before);
    if (m !== null) {
      whitespace.before = str.match(before)[0];
      str = str.replace(before, '');
    }
  }
  //get after punctuation/whitespace
  m = str.match(after);
  if (m !== null) {
    str = str.replace(after, '');
    whitespace.after = m[0];
  }
  return {
    whitespace: whitespace,
    text: str
  };
};
module.exports = build_whitespace;

},{}],120:[function(_dereq_,module,exports){
'use strict';
const Term = _dereq_('../term');
const wordlike = /\S/;
const isBoundary = /^[!?.]+$/;

const notWord = {
  '.': true,
  '-': true, //dash
  '–': true, //en-dash
  '—': true, //em-dash
  '--': true,
  '...': true
};

const hasHyphen = function(str) {
  let reg = /^([a-z]+)(-|–|—)([a-z0-9].*)/i;
  if (reg.test(str) === true) {
    return true;
  }
  //support weird number-emdash combo '2010–2011'
  let reg2 = /^([0-9]+)(–|—)([0-9].*)/i;
  if (reg2.test(str)) {
    return true;
  }
  return false;
};

//turn a string into an array of terms (naiive for now, lumped later)
const fromString = function(str, world) {
  let result = [];
  let arr = [];
  //start with a naiive split
  str = str || '';
  if (typeof str === 'number') {
    str = '' + str;
  }
  const firstSplit = str.split(/(\S+)/);
  for (let i = 0; i < firstSplit.length; i++) {
    const word = firstSplit[i];
    if (hasHyphen(word) === true) {
      //support multiple-hyphenated-terms
      const hyphens = word.split(/[-–—]/);
      for (let o = 0; o < hyphens.length; o++) {
        if (o === hyphens.length - 1) {
          arr.push(hyphens[o]);
        } else {
          arr.push(hyphens[o] + '-');
        }
      }
    } else {
      arr.push(word);
    }
  }
  //greedy merge whitespace+arr to the right
  let carry = '';
  for (let i = 0; i < arr.length; i++) {
    //if it's more than a whitespace
    if (
      wordlike.test(arr[i]) === true &&
      notWord.hasOwnProperty(arr[i]) === false &&
      isBoundary.test(arr[i]) === false
    ) {
      result.push(carry + arr[i]);
      carry = '';
    } else {
      carry += arr[i];
    }
  }
  //handle last one
  if (carry && result.length > 0) {
    result[result.length - 1] += carry; //put it on the end
  }
  return result.map(t => new Term(t, world));
};
module.exports = fromString;

},{"../term":100}],121:[function(_dereq_,module,exports){
'use strict';

//getters/setters for the Terms class
module.exports = {

  parent: {
    get: function() {
      return this.refText || this;
    },
    set: function(r) {
      this.refText = r;
      return this;
    }
  },

  parentTerms: {
    get: function() {
      return this.refTerms || this;
    },
    set: function(r) {
      this.refTerms = r;
      return this;
    }
  },

  dirty: {
    get: function() {
      for(let i = 0; i < this.terms.length; i++) {
        if (this.terms[i].dirty === true) {
          return true;
        }
      }
      return false;
    },
    set: function(dirt) {
      this.terms.forEach((t) => {
        t.dirty = dirt;
      });
    }
  },

  refTerms: {
    get: function() {
      return this._refTerms || this;
    },
    set: function(ts) {
      this._refTerms = ts;
      return this;
    }
  },
  found: {
    get: function() {
      return this.terms.length > 0;
    }
  },
  length: {
    get: function() {
      return this.terms.length;
    }
  },
  isA: {
    get: function() {
      return 'Terms';
    }
  },
  whitespace: {
    get: function() {
      return {
        before: (str) => {
          this.firstTerm().whitespace.before = str;
          return this;
        },
        after: (str) => {
          this.lastTerm().whitespace.after = str;
          return this;
        },
      };
    }
  },


};

},{}],122:[function(_dereq_,module,exports){
'use strict';
const build = _dereq_('./build');
const getters = _dereq_('./getters');
let w = _dereq_('../world');

//Terms is an array of Term objects, and methods that wrap around them
const Terms = function(arr, world, refText, refTerms) {
  this.terms = arr;
  this.world = world || w;
  this.refText = refText;
  this._refTerms = refTerms;
  this.get = n => {
    return this.terms[n];
  };
  //apply getters
  let keys = Object.keys(getters);
  for (let i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], getters[keys[i]]);
  }
};

Terms.fromString = function(str, world) {
  let termArr = build(str, world);
  let ts = new Terms(termArr, world, null);
  //give each term a original to this ts
  ts.terms.forEach(t => {
    t.parentTerms = ts;
  });
  return ts;
};

// Terms = require('./methods/lookup')(Terms);
_dereq_('./match')(Terms);
_dereq_('./methods/tag')(Terms);
_dereq_('./methods/loops')(Terms);
_dereq_('./match/not')(Terms);
_dereq_('./methods/delete')(Terms);
_dereq_('./methods/insert')(Terms);
_dereq_('./methods/misc')(Terms);
_dereq_('./methods/out')(Terms);
_dereq_('./methods/replace')(Terms);
_dereq_('./methods/split')(Terms);
_dereq_('./methods/transform')(Terms);
// require('./methods/lump')(Terms);
module.exports = Terms;

},{"../world":166,"./build":120,"./getters":121,"./match":123,"./match/not":132,"./methods/delete":133,"./methods/insert":134,"./methods/loops":135,"./methods/misc":136,"./methods/out":137,"./methods/replace":138,"./methods/split":139,"./methods/tag":140,"./methods/transform":141}],123:[function(_dereq_,module,exports){
'use strict';
const syntax = _dereq_('./lib/syntax');
const startHere = _dereq_('./lib/startHere');
const Text = _dereq_('../../text');
const match = _dereq_('./lib');

const matchMethods = Terms => {
  const methods = {
    //support regex-like whitelist-match
    match: function(reg, verbose) {
      //fail-fast #1
      if (this.terms.length === 0) {
        return new Text([], this.world, this.parent);
      }
      //fail-fast #2
      if (!reg) {
        return new Text([], this.world, this.parent);
      }
      let matches = match(this, reg, verbose);
      matches = matches.map(a => {
        return new Terms(a, this.world, this.refText, this.refTerms);
      });
      return new Text(matches, this.world, this.parent);
    },

    /**return first match */
    matchOne: function(str) {
      //fail-fast
      if (this.terms.length === 0) {
        return null;
      }
      let regs = syntax(str);
      for (let t = 0; t < this.terms.length; t++) {
        //don't loop through if '^'
        if (regs[0] && regs[0].starting && t > 0) {
          break;
        }
        let m = startHere(this, t, regs);
        if (m) {
          return m;
        }
      }
      return null;
    },

    /**return first match */
    has: function(str) {
      return this.matchOne(str) !== null;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = matchMethods;

},{"../../text":146,"./lib":126,"./lib/startHere":130,"./lib/syntax":131}],124:[function(_dereq_,module,exports){
'use strict';
//take all the matches, and if there is a [capture group], only return that.
const onlyCaptureGroup = function(matches) {
  let results = [];
  matches.forEach((terms) => {
    //if there's no capture group, we good.
    if (terms.find(t => t.captureGroup === true) === undefined) {
      results.push(terms);
      return;
    }
    //otherwise, just return them as seperate subsets
    let current = [];
    for(let i = 0; i < terms.length; i += 1) {
      if (terms[i].captureGroup) {
        current.push(terms[i]);
      } else if (current.length > 0) {
        results.push(current);
        current = [];
      }
    }
    if (current.length > 0) {
      results.push(current);
    }
  });
  return results;
};
module.exports = onlyCaptureGroup;

},{}],125:[function(_dereq_,module,exports){
'use strict';
//
//find easy reasons to skip running the full match on this
const fastPass = (ts, regs) => {
  for (let i = 0; i < regs.length; i++) {
    let reg = regs[i];
    let found = false;
    //we can't cheat on these fancy rules:
    if (reg.optional === true || reg.negative === true || reg.minMax !== undefined) {
      continue;
    }
    //look-for missing term-matches
    if (reg.normal !== undefined) {
      for (let o = 0; o < ts.terms.length; o++) {
        if (ts.terms[o].normal === reg.normal || ts.terms[o].silent_term === reg.normal) {
          found = true;
          break;
        }
        //we can't handle lumped-terms with this method
        if (ts.terms[o].lumped === true) {
          return false;
        }
      }
      if (found === false) {
        return true;
      }
    }
    //look for missing tags
    if (reg.tag !== undefined) {
      for (let o = 0; o < ts.terms.length; o++) {
        if (ts.terms[o].tags[reg.tag] === true) {
          found = true;
          break;
        }
      }
      if (found === false) {
        return true;
      }
    }
  }
  return false;
};
module.exports = fastPass;

},{}],126:[function(_dereq_,module,exports){
'use strict';
const syntax = _dereq_('./syntax');
const startHere = _dereq_('./startHere');
const fastPass = _dereq_('./fastPass');
const handleCaptureGroup = _dereq_('./captureGroup');

//ensure we have atleast one non-optional demand
// const isTautology = function(regs) {
//   for (let i = 0; i < regs.length; i++) {
//     if (!regs[i].optional && !regs[i].astrix && !regs[i].anyOne) {
//       return false;
//     }
//   }
//   return true;
// };

//make a reg syntax from a text object
const findFromTerms = function(ts) {
  let arr = ts.terms.map(t => {
    return {
      id: t.uid
    };
  });
  return arr;
};
//
const match = (ts, reg, verbose) => {
  //parse for backwards-compatibility
  if (typeof reg === 'string') {
    reg = syntax(reg);
  } else if (reg && reg.isA === 'Text') {
    reg = findFromTerms(reg.list[0]);
  } else if (reg && reg.isA === 'Terms') {
    reg = findFromTerms(reg);
  }
  if (!reg || reg.length === 0) {
    return [];
  }
  //do a fast-pass for easy negatives
  if (fastPass(ts, reg, verbose) === true) {
    return [];
  }
  //ok, start long-match
  let matches = [];
  for (let t = 0; t < ts.terms.length; t += 1) {
    //don't loop through if '^'
    if (t > 0 && reg[0] && reg[0].starting) {
      break;
    }
    let m = startHere(ts, t, reg, verbose);
    if (m && m.length > 0) {
      matches.push(m);
      //handle capture-groups subset
      // let hasCapture=matches
      //ok, don't try to match these again.
      let skip = m.length - 1;
      t += skip; //this could use some work
    }
  }
  //handle capture-group subset
  matches = handleCaptureGroup(matches);
  return matches;
};
module.exports = match;

},{"./captureGroup":124,"./fastPass":125,"./startHere":130,"./syntax":131}],127:[function(_dereq_,module,exports){
'use strict';

//compare 1 term to one reg
const perfectMatch = (term, reg) => {
  if (!term || !reg) {
    return false;
  }
  //support '.' - any
  if (reg.anyOne === true) {
    return true;
  }
  //pos-match
  if (reg.tag !== undefined) {
    return term.tags[reg.tag];
  }
  //id-match
  if (reg.id !== undefined) {
    return reg.id === term.uid;
  }
  //text-match
  if (reg.normal !== undefined) {
    return reg.normal === term.normal || reg.normal === term.silent_term;
  }
  //suffix matches '-nny'
  if (reg.suffix === true && reg.partial !== undefined) {
    const len = term.normal.length;
    return term.normal.substr(len - reg.partial.length, len) === reg.partial;
  }
  //prefix matches 'fun-'
  if (reg.prefix === true && reg.partial !== undefined) {
    return term.normal.substr(0, reg.partial.length) === reg.partial;
  }
  //infix matches '-nn-'
  if (reg.infix === true && reg.partial !== undefined) {
    return term.normal.indexOf(reg.partial) !== -1;
  }
  //full-on regex-match '/a*?/'
  if (reg.regex !== undefined) {
    return reg.regex.test(term.normal) || reg.regex.test(term.text);
  }
  //one-of term-match
  if (reg.oneOf !== undefined) {
    for (let i = 0; i < reg.oneOf.tagArr.length; i++) {
      if (term.tags.hasOwnProperty(reg.oneOf.tagArr[i]) === true) {
        return true;
      }
    }
    return reg.oneOf.terms.hasOwnProperty(term.normal) || reg.oneOf.terms.hasOwnProperty(term.silent_term);
  }
  return false;
};

//wrap above method, to support '!' negation
const isMatch = (term, reg, verbose) => {
  if (!term || !reg) {
    return false;
  }
  let found = perfectMatch(term, reg, verbose);
  //flag it as a capture-group
  if (reg.capture) {
    term.captureGroup = true;
  } else {
    term.captureGroup = undefined;
  }
  //reverse it for .not()
  if (reg.negative) {
    found = !!!found;
  }
  return found;
};
module.exports = isMatch;

},{}],128:[function(_dereq_,module,exports){
'use strict';

const almostMatch = (reg_str, term) => {
  let want = term.normal.substr(0, reg_str.length);
  return want === reg_str;
};

// match ['john', 'smith'] regs, when the term is lumped
const lumpMatch = function(term, regs, reg_i, verbose) {
  let reg_str = regs[reg_i].normal;
  //is this a partial match? 'tony'& 'tony hawk'
  if (reg_str !== undefined && almostMatch(reg_str, term)) {
    //try to grow it
    reg_i = reg_i + 1;
    for (reg_i; reg_i < regs.length; reg_i++) {
      reg_str += ' ' + regs[reg_i].normal;
      // is it now perfect?
      if (reg_str === term.normal) {
        return reg_i;
      }
      // is it still almost?
      if (almostMatch(reg_str, term) === false) {
        return null;
      }
    }
  }
  return null;
};

module.exports = lumpMatch;

},{}],129:[function(_dereq_,module,exports){
arguments[4][47][0].apply(exports,arguments)
},{"../../paths":143,"dup":47}],130:[function(_dereq_,module,exports){
'use strict';
const lumpMatch = _dereq_('./lumpMatch');
const isMatch = _dereq_('./isMatch');

// match everything until this point - '*'
const greedyUntil = (ts, i, reg) => {
  for (; i < ts.length; i++) {
    if (isMatch(ts.terms[i], reg)) {
      return i;
    }
  }
  return null;
};

//keep matching this reg as long as possible
const greedyOf = (ts, i, reg, until) => {
  for (; i < ts.length; i++) {
    let t = ts.terms[i];
    //found next reg ('until')
    if (until && isMatch(t, until)) {
      return i;
    }
    //stop here
    if (!isMatch(t, reg)) {
      return i;
    }
  }
  return i;
};

//try and match all regs, starting at this term
const startHere = (ts, startAt, regs, verbose) => {
  let term_i = startAt;
  //check each regex-thing
  for (let reg_i = 0; reg_i < regs.length; reg_i++) {
    let term = ts.terms[term_i];
    let reg = regs[reg_i];
    let next_reg = regs[reg_i + 1];

    if (!term) {
      //we didn't need it anyways
      if (reg.optional === true) {
        continue;
      }
      return null;
    }

    //catch '^' errors
    if (reg.starting === true && term_i > 0) {
      return null;
    }

    //catch '$' errors
    if (reg.ending === true && term_i !== ts.length - 1 && !reg.minMax) {
      return null;
    }

    //support '*'
    if (regs[reg_i].astrix === true) {
      //just grab until the end..
      if (!next_reg) {
        return ts.terms.slice(startAt, ts.length);
      }
      let foundAt = greedyUntil(ts, term_i, regs[reg_i + 1]);
      if (!foundAt) {
        return null;
      }
      term_i = foundAt + 1;
      reg_i += 1;
      continue;
    }

    //support '#Noun{x,y}'
    if (regs[reg_i].minMax !== undefined) {
      let min = regs[reg_i].minMax.min || 0;
      let max = regs[reg_i].minMax.max;
      let until = regs[reg_i + 1];
      for (let i = 0; i < max; i++) {
        //TODO: please clean this loop up..
        let t = ts.terms[term_i + i];
        if (!t) {
          return null;
        }
        //end here
        if (isMatch(t, reg) === false) {
          return null;
        }
        //should we be greedier?
        if (i < min - 1) {
          continue; //gotta keep going!
        }
        //we can end here, after the minimum
        if (!until) {
          term_i += 1;
          break;
        }
        // we're greedy-to-now
        if (i >= min && isMatch(t, until)) {
          break;
        }
        //end with a greedy-match for next term
        let nextT = ts.terms[term_i + i + 1];
        if (nextT && isMatch(nextT, until)) {
          term_i += i + 2;
          reg_i += 1;
          break;
        } else if (i === max - 1) {
          //we've maxed-out
          return null;
        }
      }
      continue;
    }

    //if optional, check next one
    if (reg.optional === true) {
      let until = regs[reg_i + 1];
      term_i = greedyOf(ts, term_i, reg, until);
      continue;
    }

    //check a perfect match
    if (isMatch(term, reg, verbose)) {
      term_i += 1;
      //try to greedy-match '+'
      if (reg.consecutive === true) {
        let until = regs[reg_i + 1];
        term_i = greedyOf(ts, term_i, reg, until);
      }
      continue;
    }

    if (term.silent_term && !term.normal) {
      //skip over silent contraction terms
      //we will continue on it, but not start on it
      if (reg_i === 0) {
        return null;
      }
      //try the next term, but with this regex again
      term_i += 1;
      reg_i -= 1;
      continue;
    }

    //handle partial-matches of lumped terms
    let lumpUntil = lumpMatch(term, regs, reg_i, verbose);
    if (lumpUntil !== null) {
      reg_i = lumpUntil;
      term_i += 1;
      continue;
    }

    //was it optional anways?
    if (reg.optional === true) {
      continue;
    }
    return null;
  }
  return ts.terms.slice(startAt, term_i);
};

module.exports = startHere;

},{"./isMatch":127,"./lumpMatch":128}],131:[function(_dereq_,module,exports){
'use strict';
// parse a search lookup term find the regex-like syntax in this term
const fns = _dereq_('./paths').fns;
//regs-
const range = /\{[0-9,]+\}$/;

//trim char#0
const noFirst = function(str) {
  return str.substr(1, str.length);
};
const noLast = function(str) {
  return str.substring(0, str.length - 1);
};

//turn 'regex-like' search string into parsed json
const parse_term = function(term) {
  term = term || '';
  term = term.trim();

  let reg = {};
  //order matters here

  //1-character hasta be a text-match
  if (term.length === 1 && term !== '.' && term !== '*') {
    reg.normal = term;
    return reg;
  }
  //negation ! flag
  if (term.charAt(0) === '!') {
    term = noFirst(term);
    reg.negative = true;
  }
  //leading ^ flag
  if (term.charAt(0) === '^') {
    term = noFirst(term);
    reg.starting = true;
  }
  //trailing $ flag means ending
  if (term.charAt(term.length - 1) === '$') {
    term = noLast(term);
    reg.ending = true;
  }
  //optional flag
  if (term.charAt(term.length - 1) === '?') {
    term = noLast(term);
    reg.optional = true;
  }
  //atleast-one-but-greedy flag
  if (term.charAt(term.length - 1) === '+') {
    term = noLast(term);
    reg.consecutive = true;
  }
  //prefix/suffix/infix matches
  if (term.charAt(term.length - 1) === '_') {
    term = noLast(term);
    reg.prefix = true;
    //try both '-match-'
    if (term.charAt(0) === '_') {
      term = noFirst(term);
      reg.prefix = undefined;
      reg.infix = true;
    }
    reg.partial = term;
    term = '';
  } else if (term.charAt(0) === '_') {
    term = noFirst(term);
    reg.suffix = true;
    reg.partial = term;
    term = '';
  }
  //min/max any '{1,3}'
  if (term.charAt(term.length - 1) === '}' && range.test(term) === true) {
    let m = term.match(/\{([0-9]+)?,? ?([0-9]+)\}/);
    reg.minMax = {
      min: parseInt(m[1], 10) || 0,
      max: parseInt(m[2], 10)
    };
    term = term.replace(range, '');
  }
  //pos flag
  if (term.charAt(0) === '#') {
    term = noFirst(term);
    reg.tag = fns.titleCase(term);
    term = '';
  }
  //support /regex/ mode
  if (term.charAt(0) === '/' && term.charAt(term.length - 1) === '/') {
    term = noLast(term);
    term = noFirst(term);
    //actually make the regex
    reg.regex = new RegExp(term, 'i');
    term = '';
  }
  //one_of options flag
  if (term.charAt(0) === '(' && term.charAt(term.length - 1) === ')') {
    term = noLast(term);
    term = noFirst(term);
    let arr = term.split(/\|/g);
    reg.oneOf = {
      terms: {},
      tagArr: []
    };
    arr.forEach(str => {
      //try a tag match
      if (str.charAt(0) === '#') {
        let tag = str.substr(1, str.length);
        tag = fns.titleCase(tag);
        reg.oneOf.tagArr.push(tag);
      } else {
        reg.oneOf.terms[str] = true;
      }
    });
    term = '';
  }
  //a period means any one term
  if (term === '.') {
    reg.anyOne = true;
    term = '';
  }
  //a * means anything until sentence end
  if (term === '*') {
    reg.astrix = true;
    term = '';
  }
  if (term !== '') {
    //support \ encoding of #[]()*+?^
    term = term.replace(/\\([\\#\*\.\[\]\(\)\+\?\^])/g, '');
    reg.normal = term.toLowerCase();
  }
  return reg;
};

//turn a match string into an array of objects
const parse_all = function(input) {
  input = input || '';
  let regs = input.split(/ +/);
  let captureOn = false;
  regs = regs.map((reg) => {
    let hasEnd = false;
    //support [#Noun] capture-group syntax
    if (reg.charAt(0) === '[') {
      reg = noFirst(reg);
      captureOn = true;
    }
    if (reg.charAt(reg.length - 1) === ']') {
      reg = noLast(reg);
      captureOn = false;
      hasEnd = true;
    }
    reg = parse_term(reg);
    if (captureOn === true || hasEnd === true) {
      reg.capture = true;
    }
    return reg;
  });
  return regs;
};

module.exports = parse_all;

},{"./paths":129}],132:[function(_dereq_,module,exports){
'use strict';
//
const syntax = _dereq_('./lib/syntax');
const startHere = _dereq_('./lib/startHere');
const Text = _dereq_('../../text');

const addfns = Terms => {
  const fns = {
    //blacklist from a {word:true} object
    notObj: function(r, obj) {
      let matches = [];
      let current = [];
      r.terms.forEach(t => {
        //TODO: support multi-word blacklists
        //we should blacklist this term
        if (obj.hasOwnProperty(t.normal)) {
          if (current.length) {
            matches.push(current);
          }
          current = [];
        } else {
          current.push(t);
        }
      });
      //add remainder
      if (current.length) {
        matches.push(current);
      }
      matches = matches.map(a => {
        return new Terms(a, r.world, r.refText, r.refTerms);
      });
      return new Text(matches, r.world, r.parent);
    },

    //blacklist from a match string
    notString: function(r, want, verbose) {
      let matches = [];
      let regs = syntax(want);
      let terms = [];
      //try the match starting from each term
      for (let i = 0; i < r.terms.length; i++) {
        let bad = startHere(r, i, regs, verbose);
        if (bad && bad.length > 0) {
          //reset matches
          if (terms.length > 0) {
            matches.push(terms);
            terms = [];
          }
          //skip these terms now
          i += bad.length - 1;
          continue;
        }
        terms.push(r.terms[i]);
      }
      //remaining ones
      if (terms.length > 0) {
        matches.push(terms);
      }
      matches = matches.map(a => {
        return new Terms(a, r.world, r.refText, r.refTerms);
      });
      // return matches
      return new Text(matches, r.world, r.parent);
    }
  };
  //blacklist from a [word, word] array
  fns.notArray = function(r, arr) {
    let obj = arr.reduce((h, a) => {
      h[a] = true;
      return h;
    }, {});
    return fns.notObj(r, obj);
  };

  /**return everything but these matches*/
  Terms.prototype.not = function(want, verbose) {
    //support [word, word] blacklist
    if (typeof want === 'object') {
      let type = Object.prototype.toString.call(want);
      if (type === '[object Array]') {
        return fns.notArray(this, want, verbose);
      }
      if (type === '[object Object]') {
        return fns.notObj(this, want, verbose);
      }
    }
    if (typeof want === 'string') {
      return fns.notString(this, want, verbose);
    }
    return this;
  };
  return Terms;
};

module.exports = addfns;

},{"../../text":146,"./lib/startHere":130,"./lib/syntax":131}],133:[function(_dereq_,module,exports){
'use strict';
const mutate = _dereq_('../mutate');

const addMethod = (Terms) => {

  //hook it into Terms.proto
  Terms.prototype.delete = function (reg) {
    //don't touch parent if empty
    if (!this.found) {
      return this;
    }
    //remove all selected
    if (!reg) {
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      return this;
    }
    //only remove a portion of this
    let found = this.match(reg);
    if (found.found) {
      let r = mutate.deleteThese(this, found);
      return r;
    }
    return this.parentTerms;
  };

  return Terms;
};

module.exports = addMethod;

},{"../mutate":142}],134:[function(_dereq_,module,exports){
'use strict';
const mutate = _dereq_('../mutate');

//whitespace
const addSpaceAt = (ts, i) => {
  if (!ts.terms.length || !ts.terms[i]) {
    return ts;
  }
  ts.terms[i].whitespace.before = ' ';
  return ts;
};

const insertMethods = (Terms) => {

  //accept any sorta thing
  const ensureTerms = function(input, world) {
    if (input.isA === 'Terms') {
      return input;
    }
    if (input.isA === 'Term') {
      return new Terms([input], world);
    }
    //handle a string
    let ts = Terms.fromString(input, world);
    ts.tagger();
    return ts;
  };

  const methods = {

    insertBefore: function (input, tag) {
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      if (tag) {
        ts.tag(tag);
      }
      let index = this.index();
      //pad a space on parent
      addSpaceAt(this.parentTerms, index);
      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        this.terms = ts.terms.concat(this.terms);
      }
      return this;
    },

    insertAfter: function (input, tag) {
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      if (tag) {
        ts.tag(tag);
      }
      let index = this.terms[this.terms.length - 1].index();
      //beginning whitespace to ts
      addSpaceAt(ts, 0);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index + 1, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        this.terms = this.terms.concat(ts.terms);
      }
      return this;
    },

    insertAt: function (index, input, tag) {
      if (index < 0) {
        index = 0;
      }
      let original_l = this.terms.length;
      let ts = ensureTerms(input, this.world);
      //tag that thing too
      if (tag) {
        ts.tag(tag);
      }
      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts);
      //also copy them to current selection
      if (this.terms.length === original_l) {
        //splice the new terms into this (yikes!)
        Array.prototype.splice.apply(this.terms, [index, 0].concat(ts.terms));
      }
      //beginning whitespace to ts
      if (index === 0) {
        this.terms[0].whitespace.before = '';
        ts.terms[ts.terms.length - 1].whitespace.after = ' ';
      }
      return this;
    }

  };

  //hook them into result.proto
  Object.keys(methods).forEach((k) => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = insertMethods;

},{"../mutate":142}],135:[function(_dereq_,module,exports){
'use strict';
//these methods are simply term-methods called in a loop

const addMethods = (Terms) => {

  const foreach = [
    // ['tag'],
    // ['unTag'],
    // ['canBe'],
    ['toUpperCase', 'UpperCase'],
    ['toLowerCase'],
    ['toTitleCase', 'TitleCase'],
  // ['toCamelCase', 'CamelCase'],
  ];

  foreach.forEach((arr) => {
    let k = arr[0];
    let tag = arr[1];
    let myFn = function () {
      let args = arguments;
      this.terms.forEach((t) => {
        t[k].apply(t, args);
      });
      if (tag) {
        this.tag(tag, k);
      }
      return this;
    };
    Terms.prototype[k] = myFn;
  });
  return Terms;
};

module.exports = addMethods;

},{}],136:[function(_dereq_,module,exports){
'use strict';
const tagger = _dereq_('../../tagger');

const miscMethods = Terms => {
  const methods = {
    tagger: function() {
      tagger(this);
      return this;
    },
    firstTerm: function() {
      return this.terms[0];
    },
    lastTerm: function() {
      return this.terms[this.terms.length - 1];
    },
    all: function() {
      return this.parent;
    },
    data: function() {
      return {
        text: this.out('text'),
        normal: this.out('normal')
      };
    },
    term: function(n) {
      return this.terms[n];
    },
    first: function() {
      let t = this.terms[0];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    last: function() {
      let t = this.terms[this.terms.length - 1];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    slice: function(start, end) {
      let terms = this.terms.slice(start, end);
      return new Terms(terms, this.world, this.refText, this.refTerms);
    },
    endPunctuation: function() {
      return this.last().terms[0].endPunctuation();
    },
    index: function() {
      let parent = this.parentTerms;
      let first = this.terms[0];
      if (!parent || !first) {
        return null; //maybe..
      }
      for (let i = 0; i < parent.terms.length; i++) {
        if (first === parent.terms[i]) {
          return i;
        }
      }
      return null;
    },
    termIndex: function() {
      let first = this.terms[0];
      let ref = this.refText || this;
      if (!ref || !first) {
        return null; //maybe..
      }
      let n = 0;
      for (let i = 0; i < ref.list.length; i++) {
        let ts = ref.list[i];
        for (let o = 0; o < ts.terms.length; o++) {
          if (ts.terms[o] === first) {
            return n;
          }
          n += 1;
        }
      }
      return n;
    },
    //number of characters in this match
    chars: function() {
      return this.terms.reduce((i, t) => {
        i += t.whitespace.before.length;
        i += t.text.length;
        i += t.whitespace.after.length;
        return i;
      }, 0);
    },
    //just .length
    wordCount: function() {
      return this.terms.length;
    },

    //this has term-order logic, so has to be here
    toCamelCase: function() {
      this.toTitleCase();
      this.terms.forEach((t, i) => {
        if (i !== 0) {
          t.whitespace.before = '';
        }
        t.whitespace.after = '';
      });
      this.tag('#CamelCase', 'toCamelCase');
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = miscMethods;

},{"../../tagger":62}],137:[function(_dereq_,module,exports){
'use strict';
const fns = _dereq_('../paths').fns;

const methods = {
  text: function(ts) {
    return ts.terms.reduce((str, t) => {
      str += t.out('text');
      return str;
    }, '');
  },
  //like 'text', but no leading/trailing whitespace
  match: function(ts) {
    let str = '';
    let len = ts.terms.length;
    for (let i = 0; i < len; i++) {
      if (i > 0) {
        str += ts.terms[i].whitespace.before;
      }
      str += ts.terms[i].text.replace(/[,.?!]$/, ''); //remove comma
      if (i < len - 1) {
        str += ts.terms[i].whitespace.after;
      }
    }
    return str;
  },

  normal: function(ts) {
    let terms = ts.terms.filter(t => {
      return t.text;
    });
    terms = terms.map(t => {
      return t.normal; //+ punct;
    });
    return terms.join(' ');
  },

  grid: function(ts) {
    let str = '  ';
    str += ts.terms.reduce((s, t) => {
      s += fns.leftPad(t.text, 11);
      return s;
    }, '');
    return str + '\n\n';
  },

  color: function(ts) {
    return ts.terms.reduce((s, t) => {
      s += fns.printTerm(t);
      return s;
    }, '');
  },
  csv: function(ts) {
    return ts.terms.map(t => t.normal.replace(/,/g, '')).join(',');
  },

  newlines: function(ts) {
    return ts.terms
      .reduce((str, t) => {
        str += t.out('text').replace(/\n/g, ' ');
        return str;
      }, '')
      .replace(/^\s/, '');
  },
  /** no punctuation, fancy business **/
  root: function(ts) {
    return ts.terms.map(t => t.silent_term || t.root).join(' ').toLowerCase();
  },

  html: function(ts) {
    return ts.terms.map(t => t.render.html()).join(' ');
  },
  debug: function(ts) {
    ts.terms.forEach(t => {
      t.out('debug');
    });
  }
};
methods.plaintext = methods.text;
methods.normalize = methods.normal;
methods.normalized = methods.normal;
methods.colors = methods.color;
methods.tags = methods.terms;

const renderMethods = Terms => {
  Terms.prototype.out = function(str) {
    if (methods[str]) {
      return methods[str](this);
    }
    return methods.text(this);
  };
  //check method
  Terms.prototype.debug = function() {
    return methods.debug(this);
  };
  return Terms;
};

module.exports = renderMethods;

},{"../paths":143}],138:[function(_dereq_,module,exports){
'use strict';
const mutate = _dereq_('../mutate');

const replaceMethods = Terms => {
  const methods = {
    /**swap this for that */
    replace: function(str1, str2, keepTags) {
      //in this form, we 'replaceWith'
      if (str2 === undefined) {
        return this.replaceWith(str1, keepTags);
      }
      //support capture-group syntax
      // if (str2.match(/\$1\b/)) {
      //   //this is not very well-done and should be handled better:
      //   let captureThis = str1.match(/\[(.+?)\]/);
      //   if (captureThis && captureThis[1]) {
      //     let found = this.match(str1).match(captureThis[1]);
      //     found = found.out('text').trim();
      //     //insert captured-text in the replace string
      //     str2 = str2.replace(/\$1\b/g, found);
      //   }
      // }
      this.match(str1).replaceWith(str2, keepTags);
      return this;
    },

    /**swap this for that */
    replaceWith: function(str, keepTags) {
      let newTs = Terms.fromString(str, this.world);
      newTs.tagger();
      //if instructed, apply old tags to new terms
      if (keepTags) {
        this.terms.forEach((t, i) => {
          let tags = Object.keys(t.tags);
          if (newTs.terms[i] !== undefined) {
            tags.forEach(tg => newTs.terms[i].tag(tg, 'from-memory'));
          }
        });
      }
      let index = this.index();
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, newTs);
      this.terms = newTs.terms;
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = replaceMethods;

},{"../mutate":142}],139:[function(_dereq_,module,exports){
'use strict';

//break apart a termlist into (before, match after)
const breakUpHere = (terms, ts) => {
  let firstTerm = ts.terms[0];
  let len = ts.terms.length;
  for (let i = 0; i < terms.length; i++) {
    if (terms[i] === firstTerm) {
      return {
        before: terms.slice(0, i),
        match: terms.slice(i, i + len),
        after: terms.slice(i + len, terms.length)
      };
    }
  }
  return {
    after: terms
  };
};

const splitMethods = Terms => {
  const methods = {
    /** at the end of the match, split the terms **/
    splitAfter: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before && section.match) {
          all.push(section.before.concat(section.match));
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //make them termlists
      all = all.map(ts => {
        let parent = this.refText; //|| this;
        return new Terms(ts, this.world, parent, this.refTerms);
      });
      return all;
    },

    /** return only before & after  the match**/
    splitOn: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before) {
          all.push(section.before);
        }
        if (section.match) {
          all.push(section.match);
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //make them termlists
      all = all.filter(a => a && a.length);
      all = all.map(ts => new Terms(ts, ts.world, ts.refText, this.refTerms));
      return all;
    },

    /** at the start of the match, split the terms**/
    splitBefore: function(reg, verbose) {
      let ms = this.match(reg, verbose); //Array[ts]
      let termArr = this.terms;
      let all = [];
      ms.list.forEach(lookFor => {
        let section = breakUpHere(termArr, lookFor);
        if (section.before) {
          all.push(section.before);
        }
        if (section.match) {
          all.push(section.match);
        }
        termArr = section.after;
      });
      //add the remaining
      if (termArr.length) {
        all.push(termArr);
      }
      //cleanup-step: merge all (middle) matches with the next one
      for (let i = 0; i < all.length; i++) {
        for (let o = 0; o < ms.length; o++) {
          if (ms.list[o].terms[0] === all[i][0]) {
            if (all[i + 1]) {
              all[i] = all[i].concat(all[i + 1]);
              all[i + 1] = [];
            }
          }
        }
      }
      //make them termlists
      all = all.filter(a => a && a.length);
      all = all.map(ts => new Terms(ts, ts.world, ts.refText, this.refTerms));
      return all;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = splitMethods;
exports = splitMethods;

},{}],140:[function(_dereq_,module,exports){
'use strict';
const addMethod = Terms => {
  const methods = {
    tag: function(tag, reason) {
      let tags = [];
      if (typeof tag === 'string') {
        tags = tag.split(' ');
      }
      //fancy version:
      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach((t, i) => {
          t.tag(tags[i], reason);
        });
        return this;
      }
      //non-fancy version:
      this.terms.forEach(t => {
        t.tag(tag, reason);
      });
      return this;
    },

    unTag: function(tag, reason) {
      let tags = [];
      if (typeof tag === 'string') {
        tags = tag.split(' ');
      }
      //fancy version:
      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach((t, i) => {
          t.unTag(tags[i], reason);
        });
        return this;
      }
      //non-fancy version:
      this.terms.forEach(t => {
        t.unTag(tag, reason);
      });
      return this;
    },

    //which terms are consistent with this tag
    canBe: function(tag) {
      let terms = this.terms.filter(t => t.canBe(tag));
      return new Terms(terms, this.world, this.refText, this.refTerms);
    }
  };
  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = addMethod;

},{}],141:[function(_dereq_,module,exports){
'use strict';

const transforms = Terms => {
  const methods = {
    clone: function() {
      // this.world = this.world.clone();
      let terms = this.terms.map(t => {
        return t.clone();
      });
      return new Terms(terms, this.world, this.refText, null); //, this.refTerms
    },
    hyphenate: function() {
      this.terms.forEach((t, i) => {
        if (i !== this.terms.length - 1) {
          t.whitespace.after = '-';
        }
        if (i !== 0) {
          t.whitespace.before = '';
        }
      });
      return this;
    },
    dehyphenate: function() {
      this.terms.forEach(t => {
        if (t.whitespace.after === '-') {
          t.whitespace.after = ' ';
        }
      });
      return this;
    },
    trim: function() {
      if (this.length <= 0) {
        return this;
      }
      this.terms[0].whitespace.before = '';
      this.terms[this.terms.length - 1].whitespace.after = '';
      return this;
    }
  };

  //hook them into result.proto
  Object.keys(methods).forEach(k => {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = transforms;

},{}],142:[function(_dereq_,module,exports){
'use strict';
//
const getTerms = (needle) => {
  let arr = [];
  if (needle.isA === 'Terms') {
    arr = needle.terms;
  } else if (needle.isA === 'Text') {
    arr = needle.flatten().list[0].terms;
  } else if (needle.isA === 'Term') {
    arr = [needle];
  }
  return arr;
};

//remove them
exports.deleteThese = (source, needle) => {
  let arr = getTerms(needle);
  source.terms = source.terms.filter((t) => {
    for (let i = 0; i < arr.length; i++) {
      if (t === arr[i]) {
        return false;
      }
    }
    return true;
  });
  return source;
};

//add them
exports.insertAt = (terms, i, needle) => {
  needle.dirty = true;
  let arr = getTerms(needle);
  //handle whitespace
  if (i > 0 && arr[0] && !arr[0].whitespace.before) {
    arr[0].whitespace.before = ' ';
  }
  //gnarly splice
  //-( basically  - terms.splice(i+1, 0, arr) )
  Array.prototype.splice.apply(terms, [i, 0].concat(arr));
  return terms;
};

},{}],143:[function(_dereq_,module,exports){
module.exports = {
  fns: _dereq_('../fns'),
  Term: _dereq_('../term')
};

},{"../fns":3,"../term":100}],144:[function(_dereq_,module,exports){
'use strict';
const Text = _dereq_('./index');
const tokenize = _dereq_('./tokenize');
const paths = _dereq_('./paths');
const Terms = paths.Terms;
const fns = paths.fns;

const fromString = (str, world) => {
  let sentences = [];
  //allow pre-tokenized input
  if (fns.isArray(str)) {
    sentences = str;
  } else {
    str = fns.ensureString(str);
    sentences = tokenize(str);
  }
  let list = sentences.map(s => Terms.fromString(s, world));

  let doc = new Text(list, world);
  //give each ts a ref to the result
  doc.list.forEach(ts => {
    ts.refText = doc;
  });
  return doc;
};
module.exports = fromString;

},{"./index":146,"./paths":157,"./tokenize":158}],145:[function(_dereq_,module,exports){
module.exports = {
  /** did it find anything? */
  found: function() {
    return this.list.length > 0;
  },
  /** just a handy wrap*/
  parent: function() {
    return this.original || this;
  },
  /** how many Texts are there?*/
  length: function() {
    return this.list.length;
  },
  /** nicer than constructor.call.name or whatever*/
  isA: function() {
    return 'Text';
  },
  /** the whitespace before and after this match*/
  whitespace: function() {
    return {
      before: str => {
        this.list.forEach(ts => {
          ts.whitespace.before(str);
        });
        return this;
      },
      after: str => {
        this.list.forEach(ts => {
          ts.whitespace.after(str);
        });
        return this;
      }
    };
  }
};

},{}],146:[function(_dereq_,module,exports){
'use strict';
//a Text is an array of termLists
const getters = _dereq_('./getters');

function Text(arr, world, original) {
  this.list = arr || [];
  if (typeof world === 'function') {
    world = world();
  }
  this.world = () => {
    return world;
  };
  this.original = original;
  //apply getters
  let keys = Object.keys(getters);
  for (let i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], {
      get: getters[keys[i]]
    });
  }
}
module.exports = Text;

Text.addMethods = function(cl, obj) {
  let fns = Object.keys(obj);
  for (let i = 0; i < fns.length; i++) {
    cl.prototype[fns[i]] = obj[fns[i]];
  }
};

//make a sub-class of this class easily
Text.makeSubset = function(methods, find) {
  let Subset = function(arr, world, original) {
    Text.call(this, arr, world, original);
  };
  //inheritance
  Subset.prototype = Object.create(Text.prototype);
  Text.addMethods(Subset, methods);
  Subset.find = find;
  return Subset;
};

//apply instance methods
_dereq_('./methods/misc')(Text);
_dereq_('./methods/loops')(Text);
_dereq_('./methods/match')(Text);
_dereq_('./methods/out')(Text);
_dereq_('./methods/sort')(Text);
_dereq_('./methods/split')(Text);
// require('./methods/normalize')(Text);
// require('./subsets')(Text);

//apply subset methods
const subset = {
  // acronyms: require('../subset/acronyms'),
  // adjectives: require('../subset/adjectives'),
  // adverbs: require('../subset/adverbs'),
  contractions: _dereq_('../subset/contractions'),
  dates: _dereq_('../subset/dates'),
  // nouns: require('../subset/nouns'),
  // people: require('../subset/people'),
  // sentences: require('../subset/sentences'),
  terms: _dereq_('../subset/terms'),
  values: _dereq_('../subset/values'),
// verbs: require('../subset/verbs'),
// ngrams: require('../subset/ngrams'),
// startGrams: require('../subset/ngrams/startGrams'),
// endGrams: require('../subset/ngrams/endGrams')
};
Object.keys(subset).forEach(k => {
  Text.prototype[k] = function(num, arg) {
    let sub = subset[k];
    let m = sub.find(this, num, arg);
    return new subset[k](m.list, this.world, this.parent);
  };
});
//aliases
Text.prototype.words = Text.prototype.terms;

},{"../subset/contractions":19,"../subset/dates":21,"../subset/terms":33,"../subset/values":39,"./getters":145,"./methods/loops":147,"./methods/match":148,"./methods/misc":149,"./methods/out":150,"./methods/sort":154,"./methods/split":156}],147:[function(_dereq_,module,exports){
'use strict';
//this methods are simply loops around each termList object.
const methods = [
  'toTitleCase',
  'toUpperCase',
  'toLowerCase',
  'toCamelCase',

  'hyphenate',
  'dehyphenate',
  'trim',

  'insertBefore',
  'insertAfter',
  'insertAt',

  'replace',
  'replaceWith',

  'delete',
  'lump',

  'tagger',

  // 'tag',
  'unTag',
];

const addMethods = (Text) => {
  methods.forEach((k) => {
    Text.prototype[k] = function () {
      for(let i = 0; i < this.list.length; i++) {
        this.list[i][k].apply(this.list[i], arguments);
      }
      return this;
    };
  });

  //add an extra optimisation for tag method
  Text.prototype.tag = function() {
    //fail-fast optimisation
    if (this.list.length === 0) {
      return this;
    }
    for(let i = 0; i < this.list.length; i++) {
      this.list[i].tag.apply(this.list[i], arguments);
    }
    return this;
  };
};

module.exports = addMethods;

},{}],148:[function(_dereq_,module,exports){
'use strict';
const syntaxParse = _dereq_('../../../terms/match/lib/syntax');
const Terms = _dereq_('../../../terms');

const splitMethods = Text => {
  //support "#Noun word" regex-matches
  const matchReg = function(r, reg, verbose) {
    //parse the 'regex' into some json
    let list = [];
    reg = syntaxParse(reg);
    r.list.forEach(ts => {
      //an array of arrays
      let matches = ts.match(reg, verbose);
      matches.list.forEach(ms => {
        list.push(ms);
      });
    });
    let parent = r.parent || r;
    return new Text(list, r.world(), parent);
  };

  //support {word:true} whitelist
  const matchObj = function(r, obj) {
    let matches = [];
    r.list.forEach(ts => {
      ts.terms.forEach(t => {
        if (obj.hasOwnProperty(t.normal) === true) {
          matches.push(t);
        }
      });
    });
    matches = matches.map(t => {
      return new Terms([t], r.world(), r, t.parentTerms);
    });
    return new Text(matches, r.world(), r.parent);
  };

  //support [word, word] whitelist
  const matchArr = function(r, arr) {
    //its faster this way
    let obj = arr.reduce((h, a) => {
      h[a] = true;
      return h;
    }, {});
    return matchObj(r, obj);
  };

  const methods = {
    /** do a regex-like search through terms and return a subset */
    match: function(reg, verbose) {
      //fail-fast
      if (this.list.length === 0 || reg === undefined || reg === null) {
        let parent = this.parent || this;
        return new Text([], this.world(), parent);
      }
      //match "#Noun word" regex
      if (typeof reg === 'string' || typeof reg === 'number') {
        return matchReg(this, reg, verbose);
      }
      //match [word, word] whitelist
      let type = Object.prototype.toString.call(reg);
      if (type === '[object Array]') {
        return matchArr(this, reg);
      }
      //match {word:true} whitelist
      if (type === '[object Object]') {
        return matchObj(this, reg);
      }
      return this;
    },

    not: function(reg, verbose) {
      let list = [];
      this.list.forEach(ts => {
        let found = ts.not(reg, verbose);
        list = list.concat(found.list);
      });
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    if: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          list.push(this.list[i]);
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    ifNo: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === false) {
          list.push(this.list[i]);
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    has: function(reg) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          return true;
        }
      }
      return false;
    },

    /**find a match, and return everything infront of it*/
    before: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        let m = this.list[i].matchOne(reg);
        if (m) {
          let index = m[0].index();
          let found = this.list[i].slice(0, index);
          if (found.length > 0) {
            list.push(found);
          }
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    /**find a match, and return everything after of it*/
    after: function(reg) {
      let list = [];
      for (let i = 0; i < this.list.length; i++) {
        let m = this.list[i].matchOne(reg);
        if (m) {
          let lastTerm = m[m.length - 1];
          let index = lastTerm.index();
          let found = this.list[i].slice(index + 1, this.list[i].length);
          if (found.length > 0) {
            list.push(found);
          }
        }
      }
      let parent = this.parent || this;
      return new Text(list, this.world(), parent);
    }
  };
  //alias 'and'
  methods.and = methods.match;

  //hook them into result.proto
  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{"../../../terms":122,"../../../terms/match/lib/syntax":131}],149:[function(_dereq_,module,exports){
'use strict';
const Terms = _dereq_('../../terms');

const miscMethods = Text => {
  const methods = {
    all: function() {
      return this.parent;
    },
    index: function() {
      return this.list.map(ts => ts.index());
    },
    wordCount: function() {
      return this.terms().length;
    },
    data: function() {
      return this.list.map(ts => ts.data());
    },
    /* javascript array loop-wrappers */
    map: function(fn) {
      return this.list.map((ts, i) => {
        let text = new Text([ts], this.world);
        return fn(text, i);
      });
    },
    forEach: function(fn) {
      this.list.forEach((ts, i) => {
        let text = new Text([ts], this.world);
        fn(text, i);
      });
      return this;
    },
    filter: function(fn) {
      let list = this.list.filter((ts, i) => {
        let text = new Text([ts], this.world);
        return fn(text, i);
      });
      return new Text(list, this.world);
    },
    reduce: function(fn, h) {
      return this.list.reduce((_h, ts) => {
        let text = new Text([ts], this.world);
        return fn(_h, text);
      }, h);
    },
    find: function(fn) {
      for (let i = 0; i < this.list.length; i++) {
        let ts = this.list[i];
        let text = new Text([ts], this.world);
        if (fn(text)) {
          return text;
        }
      }
      return undefined;
    },
    /**copy data properly so later transformations will have no effect*/
    clone: function() {
      let list = this.list.map(ts => {
        return ts.clone();
      });
      return new Text(list, this.world); //this.lexicon, this.parent
    },

    /** get the nth term of each result*/
    term: function(n) {
      let list = this.list.map(ts => {
        let arr = [];
        let el = ts.terms[n];
        if (el) {
          arr = [el];
        }
        return new Terms(arr, this.world, this.refText, this.refTerms);
      });
      return new Text(list, this.world, this.parent);
    },
    firstTerm: function() {
      return this.match('^.');
    },
    lastTerm: function() {
      return this.match('.$');
    },

    /** grab a subset of the results*/
    slice: function(start, end) {
      this.list = this.list.slice(start, end);
      return this;
    },

    /** use only the nth result*/
    get: function(n) {
      //return an empty result
      if ((!n && n !== 0) || !this.list[n]) {
        return new Text([], this.world, this.parent);
      }
      let ts = this.list[n];
      return new Text([ts], this.world, this.parent);
    },
    /**use only the first result */
    first: function(n) {
      if (!n && n !== 0) {
        return this.get(0);
      }
      return new Text(this.list.slice(0, n), this.world, this.parent);
    },
    /**use only the last result */
    last: function(n) {
      if (!n && n !== 0) {
        return this.get(this.list.length - 1);
      }
      let end = this.list.length;
      let start = end - n;
      return new Text(this.list.slice(start, end), this.world, this.parent);
    },

    concat: function() {
      //any number of params
      for (let i = 0; i < arguments.length; i++) {
        let p = arguments[i];
        if (typeof p === 'object') {
          //Text()
          if (p.isA === 'Text' && p.list) {
            this.list = this.list.concat(p.list);
          }
          //Terms()
          if (p.isA === 'Terms') {
            this.list.push(p);
          }
        }
      }
      return this;
    },

    /** make it into one sentence/termlist */
    flatten: function() {
      let terms = [];
      this.list.forEach(ts => {
        terms = terms.concat(ts.terms);
      });
      //dont create an empty ts
      if (!terms.length) {
        return new Text(null, this.world, this.parent);
      }
      let ts = new Terms(terms, this.world, this, null);
      return new Text([ts], this.world, this.parent);
    },

    /** see if these terms can become this tag*/
    canBe: function(tag) {
      this.list.forEach(ts => {
        ts.terms = ts.terms.filter(t => {
          return t.canBe(tag);
        });
      });
      return this;
    },

    /** sample part of the array */
    random: function(n) {
      n = n || 1;
      let r = Math.floor(Math.random() * this.list.length);
      let arr = this.list.slice(r, r + n);
      //if we're off the end, add some from the start
      if (arr.length < n) {
        let diff = n - arr.length;
        if (diff > r) {
          diff = r; //prevent it from going full-around
        }
        arr = arr.concat(this.list.slice(0, diff));
      }
      return new Text(arr, this.world, this.parent);
    }
  };
  Text.addMethods(Text, methods);
};

module.exports = miscMethods;

},{"../../terms":122}],150:[function(_dereq_,module,exports){
'use strict';
const topk = _dereq_('./topk');
const offset = _dereq_('./offset');
const termIndex = _dereq_('./indexes');

const methods = {
  text: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('text');
      return str;
    }, '');
  },
  match: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('match');
      return str;
    }, '');
  },
  normal: r => {
    return r.list
      .map(ts => {
        let str = ts.out('normal');
        let last = ts.last();
        if (last) {
          let punct = ts.endPunctuation();
          if (punct === '.' || punct === '!' || punct === '?') {
            str += punct;
          }
        }
        return str;
      })
      .join(' ');
  },
  root: r => {
    return r.list
      .map(ts => {
        return ts.out('root');
      })
      .join(' ');
  },
  /** output where in the original output string they are*/
  offsets: r => {
    return offset(r);
  },
  /** output the tokenized location of this match*/
  index: r => {
    return termIndex(r);
  },
  grid: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('grid');
      return str;
    }, '');
  },
  color: r => {
    return r.list.reduce((str, ts) => {
      str += ts.out('color');
      return str;
    }, '');
  },
  array: r => {
    return r.list.map(ts => {
      return ts.out('normal');
    });
  },
  csv: r => {
    return r.list
      .map(ts => {
        return ts.out('csv');
      })
      .join('\n');
  },
  newlines: r => {
    return r.list
      .map(ts => {
        return ts.out('newlines');
      })
      .join('\n');
  },
  json: r => {
    return r.list.reduce((arr, ts) => {
      let terms = ts.terms.map(t => {
        return {
          text: t.text,
          normal: t.normal,
          tags: t.tag
        };
      });
      arr.push(terms);
      return arr;
    }, []);
  },
  html: r => {
    let html = r.list.reduce((str, ts) => {
      let sentence = ts.terms.reduce((sen, t) => {
        sen += '\n    ' + t.out('html');
        return sen;
      }, '');
      return (str += '\n  <span>' + sentence + '\n  </span>');
    }, '');
    return '<span> ' + html + '\n</span>';
  },
  terms: r => {
    let arr = [];
    r.list.forEach(ts => {
      ts.terms.forEach(t => {
        arr.push({
          text: t.text,
          normal: t.normal,
          tags: Object.keys(t.tags)
        });
      });
    });
    return arr;
  },
  debug: r => {
    console.log('====');
    r.list.forEach(ts => {
      console.log('   --');
      ts.debug();
    });
    return r;
  },
  topk: r => {
    return topk(r);
  }
};
methods.plaintext = methods.text;
methods.normalized = methods.normal;
methods.colors = methods.color;
methods.tags = methods.terms;
methods.offset = methods.offsets;
methods.idexes = methods.index;
methods.frequency = methods.topk;
methods.freq = methods.topk;
methods.arr = methods.array;

const addMethods = Text => {
  Text.prototype.out = function(fn) {
    if (methods[fn]) {
      return methods[fn](this);
    }
    return methods.text(this);
  };
  Text.prototype.debug = function() {
    return methods.debug(this);
  };
  return Text;
};

module.exports = addMethods;

},{"./indexes":151,"./offset":152,"./topk":153}],151:[function(_dereq_,module,exports){
'use strict';
//find where in the original text this match is found, by term-counts
const termIndex = (r) => {
  let result = [];
  //find the ones we want
  let want = {};
  r.terms().list.forEach((ts) => {
    want[ts.terms[0].uid] = true;
  });

  //find their counts
  let sum = 0;
  let parent = r.all();
  parent.list.forEach((ts, s) => {
    ts.terms.forEach((t, i) => {
      if (want[t.uid] !== undefined) {
        result.push({
          text: t.text,
          normal: t.normal,
          term: sum,
          sentence: s,
          sentenceTerm: i
        });
      }
      sum += 1;
    });
  });

  return result;
};
module.exports = termIndex;

},{}],152:[function(_dereq_,module,exports){
'use strict';
/** say where in the original output string they are found*/

const findOffset = (parent, term) => {
  let sum = 0;
  for(let i = 0; i < parent.list.length; i++) {
    for(let o = 0; o < parent.list[i].terms.length; o++) {
      let t = parent.list[i].terms[o];
      if (t.uid === term.uid) {
        return sum;
      } else {
        sum += t.whitespace.before.length + t._text.length + t.whitespace.after.length;
      }
    }
  }
  return null;
};

//like 'text' for the middle, and 'normal' for the start+ends
//used for highlighting the actual words, without whitespace+punctuation
const trimEnds = function(ts) {
  let terms = ts.terms;
  if (terms.length <= 2) {
    return ts.out('normal');
  }
  //the start
  let str = terms[0].normal;
  //the middle
  for(let i = 1; i < terms.length - 1; i++) {
    let t = terms[i];
    str += t.whitespace.before + t.text + t.whitespace.after;
  }
  //the end
  str += ' ' + terms[ts.terms.length - 1].normal;
  return str;
};

//map over all-dem-results
const allOffset = (r) => {
  let parent = r.all();
  return r.list.map((ts) => {
    let words = [];
    for(let i = 0; i < ts.terms.length; i++) {
      words.push(ts.terms[i].normal);
    }
    let nrml = trimEnds(ts);
    let txt = ts.out('text');
    let startAt = findOffset(parent, ts.terms[0]);
    let beforeWord = ts.terms[0].whitespace.before;
    let wordStart = startAt + beforeWord.length;
    return {
      text: txt,
      normal: ts.out('normal'),
      //where we begin
      offset: startAt,
      length: txt.length,
      wordStart: wordStart,
      wordEnd: wordStart + nrml.length,
    // wordLength: words.join(' ').length
    };
  });
};
module.exports = allOffset;

},{}],153:[function(_dereq_,module,exports){
'use strict';
//
const topk = function (r, n) {
  //count occurance
  let count = {};
  r.list.forEach((ts) => {
    let str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  });
  //turn into an array
  let all = [];
  Object.keys(count).forEach((k) => {
    all.push({
      normal: k,
      count: count[k],
    });
  });
  //add percentage
  all.forEach((o) => {
    o.percent = parseFloat(((o.count / r.list.length) * 100).toFixed(2));
  });
  //sort by freq
  all = all.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    }
    return 1;
  });
  if (n) {
    all = all.splice(0, n);
  }
  return all;
};

module.exports = topk;

},{}],154:[function(_dereq_,module,exports){
'use strict';
const sorter = _dereq_('./methods');

const addMethods = (Text) => {

  const fns = {

    /**reorder result.list alphabetically */
    sort: function (method) {
      //default sort
      method = method || 'alphabetical';
      method = method.toLowerCase();
      if (!method || method === 'alpha' || method === 'alphabetical') {
        return sorter.alpha(this, Text);
      }
      if (method === 'chron' || method === 'chronological') {
        return sorter.chron(this, Text);
      }
      if (method === 'length') {
        return sorter.lengthFn(this, Text);
      }
      if (method === 'freq' || method === 'frequency') {
        return sorter.freq(this, Text);
      }
      if (method === 'wordcount') {
        return sorter.wordCount(this, Text);
      }
      return this;
    },

    /**reverse the order of result.list */
    reverse: function () {
      this.list = this.list.reverse();
      return this;
    },

    unique: function () {
      let obj = {};
      this.list = this.list.filter((ts) => {
        let str = ts.out('root');
        if (obj.hasOwnProperty(str)) {
          return false;
        }
        obj[str] = true;
        return true;
      });
      return this;
    }
  };
  //hook them into result.proto
  Text.addMethods(Text, fns);
  return Text;
};

module.exports = addMethods;

},{"./methods":155}],155:[function(_dereq_,module,exports){
'use strict';

//perform sort on pre-computed values
const sortEm = function(arr) {
  arr = arr.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index === b.index) {
      return 0;
    }
    return -1;
  });
  //return ts objects
  return arr.map((o) => o.ts);
};

//alphabetical sorting of a termlist array
exports.alpha = function(r) {
  r.list.sort((a, b) => {
    //#1 performance speedup
    if (a === b) {
      return 0;
    }
    //#2 performance speedup
    if (a.terms[0] && b.terms[0]) {
      if (a.terms[0].root > b.terms[0].root) {
        return 1;
      }
      if (a.terms[0].root < b.terms[0].root) {
        return -1;
      }
    }
    //regular compare
    if (a.out('root') > b.out('root')) {
      return 1;
    }
    return -1;
  });
  return r;
};

//the order they were recieved (chronological~)
exports.chron = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.termIndex()
    };
  });
  r.list = sortEm(tmp);
  return r;
};

//shortest matches first
exports.lengthFn = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.chars()
    };
  });
  r.list = sortEm(tmp).reverse();
  return r;
};

//count the number of terms in each match
exports.wordCount = function(r) {
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    return {
      ts: ts,
      index: ts.length
    };
  });
  r.list = sortEm(tmp);
  return r;
};

//sort by frequency (like topk)
exports.freq = function(r) {
  //get counts
  let count = {};
  r.list.forEach((ts) => {
    let str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  });
  //pre-compute indexes
  let tmp = r.list.map((ts) => {
    let num = count[ts.out('root')] || 0;
    return {
      ts: ts,
      index: num * -1 //quick-reverse it
    };
  });
  r.list = sortEm(tmp);
  return r;
};

},{}],156:[function(_dereq_,module,exports){
'use strict';

const splitMethods = (Text) => {

  const methods = {
    /** turn result into two seperate results */
    splitAfter: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitAfter(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
    /** turn result into two seperate results */
    splitBefore: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitBefore(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
    /** turn result into two seperate results */
    splitOn: function(reg, verbose) {
      let list = [];
      this.list.forEach((ts) => {
        ts.splitOn(reg, verbose).forEach((mts) => {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },
  };

  //hook them into result.proto
  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{}],157:[function(_dereq_,module,exports){
module.exports = _dereq_('../paths');

},{"../paths":8}],158:[function(_dereq_,module,exports){
//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2017 MIT
'use strict';
const abbreviations = Object.keys(_dereq_('../world/more-data/abbreviations'));
//regs-
const abbrev_reg = new RegExp('\\b(' + abbreviations.join('|') + ')[.!?] ?$', 'i');
const acronym_reg = new RegExp('[ |.][A-Z].?( *)?$', 'i');
const elipses_reg = new RegExp('\\.\\.+( +)?$');

//start with a regex:
const naiive_split = function(text) {
  let all = [];
  //first, split by newline
  let lines = text.split(/(\n+)/);
  for (let i = 0; i < lines.length; i++) {
    //split by period, question-mark, and exclamation-mark
    let arr = lines[i].split(/(\S.+?[.!?])(?=\s+|$)/g);
    for (let o = 0; o < arr.length; o++) {
      all.push(arr[o]);
    }
  }
  return all;
};

const sentence_parser = function(text) {
  text = text || '';
  text = '' + text;
  let sentences = [];
  //first do a greedy-split..
  let chunks = [];
  //ensure it 'smells like' a sentence
  if (!text || typeof text !== 'string' || /\S/.test(text) === false) {
    return sentences;
  }
  //start somewhere:
  let splits = naiive_split(text);
  //filter-out the grap ones
  for (let i = 0; i < splits.length; i++) {
    let s = splits[i];
    if (s === undefined || s === '') {
      continue;
    }
    //this is meaningful whitespace
    if (/\S/.test(s) === false) {
      //add it to the last one
      if (chunks[chunks.length - 1]) {
        chunks[chunks.length - 1] += s;
        continue;
      } else if (splits[i + 1]) {
        //add it to the next one
        splits[i + 1] = s + splits[i + 1];
        continue;
      }
    }
    //else, only whitespace, no terms, no sentence
    chunks.push(s);
  }

  //detection of non-sentence chunks:
  //loop through these chunks, and join the non-sentence chunks back together..
  for (let i = 0; i < chunks.length; i++) {
    let c = chunks[i];
    //should this chunk be combined with the next one?
    if (chunks[i + 1] !== undefined && (abbrev_reg.test(c) || acronym_reg.test(c) || elipses_reg.test(c))) {
      chunks[i + 1] = c + (chunks[i + 1] || '');
    } else if (c && c.length > 0) {
      //this chunk is a proper sentence..
      sentences.push(c);
      chunks[i] = '';
    }
  }
  //if we never got a sentence, return the given text
  if (sentences.length === 0) {
    return [text];
  }
  return sentences;
};

module.exports = sentence_parser;
// console.log(sentence_parser('john f. kennedy'));

},{"../world/more-data/abbreviations":167}],159:[function(_dereq_,module,exports){
module.exports=`{"words":"Comparative¦better|Superlative¦earlier|PresentTense¦sounds|Value¦a few|Noun¦0:2V;1:2T;'2Xa2Mb2Ic1Yd1Se1Pf1Kg1Fh14i12j11k0Ul0Rm0Fn0Do07p03q02r01sPtEusDvolts,wAy5z4°3µ2;g,s;c,f,n;b,ett1E;a1Xb,d24e5o2;tt1Cu2;!r2;!s15;ars old,sterd04;att0b,e2int1M;!ek2;d01e1A;! doll1Y;aAb9e8h5ic,mr4o2ragedy,sp;dYmorrow,n2;!ne0;!w;e2i2Cou;ir0m2re,y;!seS;a4r0X;!l,sp;ble2l1;spo0W;heCky,omeAq5t3u2yst29;mm16per bowl;andard17u2;de10ff; ft,uare 2;c1Cd1Bf4i19kilom1Km2ya18;et1Kil2;e0l1B;eet0o17; 2t1V;dEpoi0T;!'s;al1oom;t,uart0;a4e3i2ou1Nrobl1Vt,urpo04;c1Knt0;rce0Nt0D;!rt,scals,te0M;cean,hms,ne d6thers,u2z;n0Gr2;!s2;!e2;lves;ay;an1Bewt07o2umb0J; doubt,ne,t1F;/s,b,e9g,i5l,m4o3p2yV²,³;h,s;del,nopo1;!²;!/h,cro4l2ne;e2li0T;! GsF²;g0Us13;!eti17gVter2;! 3s2;! 2;per secoW;b,i3m,u2x;men0nch,x0;ly,t0M;b,elvin0g,i3m2n0A;!/h,ph,²;lo2tty;by0Ng0Jmeter2;! 3s2;! 2;per hour;el1oule0;!l,n2t0;²,³;e7g,i5o2z;l1me3u2;se;! run;m2s;!se5;!'s,ad start,ct5r2;!e,s2tz0;!e2;lf;a0Iog02;al4b,ig3laciHod,ra2ul1;in0m0nd slam;aby03;!l2;on0;a5emt04l3ol1rie2tPundi0A;nd; oz,uid oun2y;ce0;hrenheit0mi1rad0;b,conomy,gg,lXner6om,ve3xa2;byUmpW;nt;aylight6e5g,inn4l,mHo2;cumentPg2i1l1or;gy;er;ath,ciH; time;aJeEg,hocolate,iCl,mBoAredit card,u2;bic 2p0;c6d5fo4i3mEya2;rd0;nch0;ot0;ec3;ent2;im8;ttage,ulomb0;!²,³;ty,vil w2;ar;iliJlsius0nti2;g4lit3m2;et2;er0;ram0;n2rat0;ary;ankiCbl,el1o3reakfast,y2;te0;dy,tt2;le;cAd hominCl1n5tt2utumn;os2;eco2;nd0;oma1y2;one,t2;hi2;ng;ly;re0;!s;em|Copula¦a1is,w0;as,ere;m,re|Condition¦if,unless|Preposition¦'o,-,aKbHcGdFexcept,from,inEmidPnotwithstandiQoCpRqua,sBt6u3vi2w0;/o,hereMith0;!in,oQ;a,s-a-vis;n1p0;!on;like,til;h1ill,o0;!wards;an,r0;ough0u;!oH;ans,ince,o that;',f0n1ut;!f;!to;espite,own,u3;hez,irca;ar1e0y;low,sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut|PastTense¦be2came,d1had,mea0sa1taken,we0;nt;id;en,gan|Gerund¦accord0be0develop0go0result0stain0;ing|Negative¦n0;ever,o0;!n,t|QuestionWord¦how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s|Infinitive¦0:6R;1:75;2:72;3:58;4:6X;5:73;6:66;7:6E;8:71;9:6W;A:6P;B:6Z;C:6K;D:61;a6Hb60c53d4Be3Wf3Jg3Ch35i2Tj2Rk2Nl2Em25n22o1Yp1Jques3Kr0Vs02tTuPvMwFyE;awn,ield;aHe1Yhist7iGoEre68;nd0rE;k,ry;n,pe,sh,th0;lk,nFrEsh,tCve;n,ra7C;d0t;aFiEo8;ew,s9;l6Iry;nEpli42r2se;dEi8lo5X;erEo;go,mi59;aLeKhIie,oHrFuEwi4;ne,rn;aEeat,i5Su4y;de,in,nsf0p,v5G;r31uC;ank,rE;eat2Pi5;nd,st;ke,lk,rg5Gs8;a05c02eYhVi4Ckip,lUmTneSo4YpPtIuEwitC;bm9ck,ff0gge4ppFrEspe6;ge,pri1rou4Vvi5;ly,oE;rt,se;aJeIoHrFuE;dy,mb7;aDeEi5;ngth2Ess,tC;p,re;m,p;in,ke,r0Sy;iFla55oil,rinE;g,k7;n,t;ak,e36;a51e1Vi7o52;am,e1Kip;aFiv0oE;ck,ut;re,ve;arCeGle6nFr5tE;!t7;d,se;k,m;aFo3rE;atCew;le,re;il,ve;aZeGisk,oFuE;b,in,le,n,sh;am,ll;aVcUduAfTgSje6lPmOnt,pMquLsItHvEwa5M;eEiew,o4L;al,l,rE;se,t;aDi3u3T;eFi4o3XtE;!o3ri6;mb7nt,r5;e4i3;air,lEo3Trese5P;aAy;aDemb0i3Qo5;aFeEi5y;a1nt;te,x;a57r44;act1Ule6u1;a0Yei5k5Jogni28yc7;ch,li27s5I;i1nE;ge,k;aRerQiPlNoLrGuE;b1Xll,mp,rEsh,t;cha1s4L;ai1eHi5AoE;cFduAgreBhib9mi1te4vE;e,i2Q;eBlaim;di6pa3ss,ve56;i55p,rtr3YsEur;e,t;a3MuE;g,n2;ck,le;fo2Ym9si4;ck,i4Zrt4Hss,u1y;bGccur,ff0pera8utweFverEwe;co42lap,ta3Lu1whelm;igh;ser5taD;eFotE;e,iA;ed,gle6;aJeIiGoFuE;ltip3Ard0;nit11ve;nErr10;d,g7us;asu3lt,n0Nr2ssa2;intaDke d3Vna2rFtE;ch,t0;k34ry;aKeJiGoEu1B;aEck,ok,ve;d,n;ft,ke,m9nFstEve;!en;e,k;a2Bc0Et;b0Nck,uE;gh,nC;eGiFnoE;ck,w;ck,ll,ss;ep;am,oDuE;d2mp;gno3mNnEss3D;cLdica8flu0JhKsHterGvE;eEol5;nt,st;a6fe3;i4tE;aEru6;ll;ab9ib9;lu1Cr1A;agi1YpE;o1Wro5;aIeGi3oFuE;nt,rry;ld fa4n01pe,st;aElp;d,t;nd7ppErm,te;en;aJet,loBoIrGuE;arEeBi11;ant35d;aEip,ow,umb7;b,sp;es,ve1E;in,th0ze;aOeaNiLlJoGracFuncE;ti3E;tu3;cus,lFrE;ce,eca4m,s2W;d,l1Y;a1UoE;at,od,w;gu3lEni1Sx;e,l;r,tu3;il,ll,vE;or;a0Zcho,d9le6mPnMstKvalua8xE;a07cIerHi4pEte12;a11eElaDo12reB;ct,riE;enA;ci1t;el,han2;abEima8;li1F;ab7couVdFga2hanAj01riCsu3t0vE;isi2Sy;!u3;body,er2pE;hasiEow0;ze;a04eSiKoJrFuE;mp;aGeFiEop;ft;am,ss;g,in;!d2ubt;e,ff0p,re6sFvE;e,iVorA;aHcEli10miBpl15tingui0Z;oEuB;uEv0;ra2;gr1VppE;ear,ro5;al,cLem,fJliv0ma09ny,pIsFterE;mi0A;cribe,er5iFtrE;oy;gn,re;a05e04i6os9;eEi05y;at,ct;iGlFrE;ea1;a3i01;de;ma2nAre,te;a07e06h03i8l00oHrEut;aFeEoBu0Fy;a8d9;ck,ve;llVmPnFok,py,uEv0;gh,nt;ceMdu6fKsItGvE;eEinA;rt,y;aDin0UrE;a4ibu8ol;iEtitu8;d0st;iEoEro1G;rm;rn;biIe,foHmaGpE;a3laD;re;nd;rt;ne;ap1e6;aFiEo1;ng,p;im,w;aFeE;at,ck,w;llen2n2r2;a1nt0;ll,ncFrEt0u1;e,ry;el;aSeOloNoLrIuE;dgGlFrE;n,y;ly;et;aFuE;sh;ke;a4mb,o4rrEth0unA;ow;ck;ar,coQgDlFnef9trE;ay;ie5ong;in;nEse;!g;band0Hc09d04ffo03gr02id,lZmu1nWppRrOsIttEvoid,wa9;acGeFra6;ct;m0Dnd;h,k;k,sE;eGiFocia8uE;me;gn,st;mb7rt;le;chFgEri5;ue;!i5;eaHlGroE;aCve;ch;aud,y;l,r;nounAsw0tE;icipa8;ce;lFt0;er;e2ow;ee;rd;dGju4m9oP;it;st;!reB;ss;cHhie5knowled2tiva8;te;ge;ve;eGouFu1;se;nt;pt;on|WeekDay¦fri4mon4s2t1wed0;!nesd4;hurs2ues2;at0un1;!urd1;!d0;ay0;!s|Date¦autumn,daylight9eom,one d8s5t2w0yesterd8;eek0int5;d6end;mr1o0;d4morrow;!w;ome 1tandard3umm0;er;d0point;ay; time|Time¦a6breakfast 5dinner5e3lunch5m2n0oclock,some5to7;i7o0;on,w;id4or1;od,ve0;ning;time;fternoon,go,ll day,t 0;ni0;ght|Holiday¦0:1Q;1:1P;a1Fb1Bc12d0Ye0Of0Kg0Hh0Di09june07kwanzaa,l04m00nYoVpRrPsFt9v6w4xm03y2;om 2ule;hasho16kippur;hit2int0Xomens equalit8; 0Ss0T;alentines3e2ictor1E;r1Bteran1;! 0;-0ax 0h6isha bav,rinityMu2; b3rke2;y 0;ish2she2;vat;a0Xe prophets birth0;a6eptember14h4imchat tor0Ut 3u2;kk4mmer T;a8p7s6valentines day ;avu2mini atzeret;ot;int 2mhain;a4p3s2valentine1;tephen1;atrick1;ndrew1;amadan,ememberanc0Yos2;a park1h hashana;a3entecost,reside0Zur2;im,ple heart 0;lm2ssovE; s04;rthodox 2stara;christma1easter2goOhoJn0C;! m07;ational 2ew years09;freedom 0nurse1;a2emorial 0lHoOuharram;bMr2undy thurs0;ch0Hdi gr2tin luther k0B;as;a2itRughnassadh;bour 0g baom2ilat al-qadr;er; 2teenth;soliU;d aJmbolc,n2sra and miraj;augurGd2;ependen2igenous people1;c0Bt1;a3o2;ly satur0;lloween,nukkUrvey mil2;k 0;o3r2;ito de dolores,oundhoW;odW;a4east of 2;our lady of guadalupe,the immaculate concepti2;on;ther1;aster8id 3lectYmancip2piphany;atX;al-3u2;l-f3;ad3f2;itr;ha;! 2;m8s2;un0;ay of the dead,ecemb3i2;a de muertos,eciseis de septiembre,wali;er sol2;stice;anad8h4inco de mayo,o3yber m2;on0;lumbu1mmonwealth 0rpus christi;anuk4inese n3ristmas2;! N;ew year;ah;a 0ian tha2;nksgiving;astillCeltaine,lack4ox2;in2;g 0; fri0;dvent,ll 9pril fools,rmistic8s6u2;stral4tum2;nal2; equinox;ia 0;cens2h wednes0sumption of mary;ion 0;e 0;hallows 6s2;ai2oul1t1;nt1;s 0;day;eve|Month¦aBdec9feb7j2mar,nov9oct1sep0;!t8;!o8;an3u0;l1n0;!e;!y;!u1;!ru0;ary;!em0;ber;pr1ug0;!ust;!il|Duration¦centur4d2hour3m0seconds,week3year3;i0onth2;llisecond1nute1;ay0ecade0;!s;ies,y|Honorific¦ayatullah,c8d7excellency,general,king,l5mayDp2queen,r1s0;ecretary,ultA;abbi,everend;astAr0;eside2ince0ofess9;!ss;ady,ieutena0ord;nt;oct5utchess;aptain,hance3o0;mmander,ngress0unci2;m0wom0;an;ll0;or|Verb¦awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en|Modal¦c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to;ay,ight,ust;an,o0;uld|Comparable¦0:41;1:4I;2:45;3:4B;4:2Y;5:3X;a4Ob44c3Od3De35f2Rg2Fh24i1Vj1Uk1Rl1Im1Cn16o14p0Tqu0Rr0IsRtKuIvFw7y6za12;ell27ou3;aBe9hi1Yi7r6;o3y;ck0Mde,l6n1ry,se;d,y;a6i4Mt;k,ry;n1Tr6sI;m,y;a7e6ulgar;nge5rda2xi3;gue,in,st;g0n6pco3Mse5;like0ti1;aAen9hi8i7ough,r6;anqu2Qen1ue;dy,g3Ume0ny,r09;ck,n,rs2R;d42se;ll,me,rt,s6wd47;te5;aVcarUeThRiQkin0GlMmKoHpGqua1HtAu7w6;eet,ift;b7dd15per0Hr6;e,re2J;sta2Ht4;aAe9iff,r7u6;pXr1;a6ict,o3;ig3Hn0W;a1ep,rn;le,rk;e24i3Hright0;ci2Aft,l7o6re,ur;n,thi3;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g37m6;!y;ek,nd3F;ck,l0mp4;a6iUort,rill,y;dy,ll0Zrp;cu0Tve0Txy;ce,ed,y;d,fe,int0l1Xv16;aBe9i8o6ude;mantic,o1Ksy,u6;gh,nd;ch,pe,tzy;a6d,mo0J;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aFhoEi1SlCoBr8u6;ny,r6;e,p4;egna2ic7o6;fou00ud;ey,k0;li06or,te1D;a6easa2;in,nt;ny;in5le;dd,f6i0ld,ranR;fi11;aAe8i7o6;b4isy,rm16sy;ce,mb4;a6w;r,t;ive,rr02;aAe8ild,o7u6;nda1Ate;ist,o1;a6ek,llY;n,s0ty;d,tuR;aCeBi9o6ucky;f0Vn7o1Eu6ve0w18y0U;d,sy;e0g;g1Uke0tt4v6;e0i3;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti3;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b4id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t4uiY;u1y;aIeeb4iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm,t;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi3;gey,lm8r6;e5i3;ful;!i3;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i3;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd|Adverb¦a07by 05d01eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,w0Bye0;p,s; to,wards5;h1o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hXtimes,w07;a1e0;alS;ndomRthN;ar excellDer0oint blank; Mhaps;f3n0;ce0ly;! 0;ag00moU; courHten;ewJo0; longEt 0;onHwithstanding;aybe,eanwhiAore0;!ovB;! aboS;deed,steT;en0;ce;or2u0;l9rther0;!moH; 0ev3;examp0good,suF;le;n mas1v0;er;se;e0irect1; 1finite0;ly;ju7trop;far,n0;ow; CbroBd nauseam,gAl5ny2part,side,t 0w3;be5l0mo5wor5;arge,ea4;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori|Expression¦a02b01dXeVfuck,gShLlImHnGoDpBshAu7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la|Conjunction¦aDb9cuz,for,how7in caCno6o5p3supposing,th1vers4wh0yet;eth7ile;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh|Determiner¦aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0nough,very;!se;ch;e0u;!s;!n0;!o0y;th0;er","conjugations":":can,could,can,_|:be,was,is,am,been|:is,was,is,being","patterns":{"Person":["master of #Noun","captain of the #Noun"]},"regex":{"HashTag":["^#[a-z]+"],"Gerund":["^[a-z]+n['’]$"],"Possessive":["^[a-z]+s'$"],"PhoneNumber":["^[0-9]{3}-[0-9]{4}$","^[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$"],"Time":["^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$","^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$","^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$","^[PMCE]ST$","^utc ?[+-]?[0-9]+?$","^[a-z0-9]*? o'?clock$"],"Date":["^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$","^[0-9]{1,4}/[0-9]{1,2}/[0-9]{1,4}$"],"Money":["^[-+]?[$€¥£][0-9]+(.[0-9]{1,2})?$","^[-+]?[$€¥£][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$"],"Value":["^[-+]?[$€¥£][0-9]+(.[0-9]{1,2})?$","^[-+]?[$€¥£][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$","^[0-9.]{1,2}-[0-9]{1,2}$"],"NumberRange":["^[0-9.]{1,4}(st|nd|rd|th)?-[0-9]{1,4}(st|nd|rd|th)?$","^[0-9.]{1,2}-[0-9]{1,2}$"],"NiceNumber":["^[-+]?[0-9.,]{1,3}(,[0-9.,]{3})+(.[0-9]+)?$"],"NumericValue":["^[-+]?[0-9]+(.[0-9]+)?$","^.?[0-9]+([0-9,.]+)?%$"],"Percent":["^.?[0-9]+([0-9,.]+)?%$"],"Cardinal":["^.?[0-9]+([0-9,.]+)?%$"],"Fraction":["^[0-9]{1,4}/[0-9]{1,4}$"],"LastName":["^ma?c'.*","^o'[drlkn].*"]}}`
},{}],160:[function(_dereq_,module,exports){
'use strict';
const conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js');

//extend our current irregular conjugations, overwrite if exists
//also, map the irregulars for easy infinitive lookup - {bought: 'buy'}
const addConjugations = function(obj) {
  Object.keys(obj).forEach((inf) => {
    this.conjugations[inf] = this.conjugations[inf] || {};
    //add it to the lexicon
    this.words[inf] = this.words[inf] || 'Infinitive';
    Object.keys(obj[inf]).forEach((tag) => {
      let word = obj[inf][tag];
      //add this to our conjugations
      this.conjugations[inf][tag] = word;
      //add it to the lexicon, too
      this.words[word] = this.words[word] || tag;
      //also denormalize to cache.toInfinitive
      this.cache.toInfinitive[obj[inf][tag]] = inf;
    });
    //guess the other conjugations
    let forms = conjugate(inf, this);
    Object.keys(forms).forEach((k) => {
      let word = forms[k];
      if (this.words.hasOwnProperty(word) === false) {
        this.words[word] = k;
      }
    });
  });
  return obj;
};
module.exports = addConjugations;

},{"../subset/verbs/methods/conjugate/faster.js":50}],161:[function(_dereq_,module,exports){

//
const addPatterns = function(obj) {
  Object.keys(obj).forEach((k) => {
    this.patterns[k] = obj[k];
  });
  return obj;
};
module.exports = addPatterns;

},{}],162:[function(_dereq_,module,exports){
'use strict';
//put singular->plurals in world, the reverse in cache,
//and both forms in the lexicon
const addPlurals = function(obj) {
  Object.keys(obj).forEach((sing) => {
    let plur = obj[sing];
    this.plurals[sing] = plur;
    //add them both to the lexicon
    this.words[plur] = this.words[plur] || 'Plural';
    this.words[sing] = this.words[sing] || 'Singular';
    //denormalize them in cache.toPlural
    this.cache.toSingular[plur] = sing;
  });
  return obj;
};
module.exports = addPlurals;

},{}],163:[function(_dereq_,module,exports){

//
const addRegex = function(obj) {
  Object.keys(obj).forEach((k) => {
    this.regex.push({
      reg: new RegExp(k, 'i'),
      tag: obj[k]
    });
  });
};
module.exports = addRegex;

},{}],164:[function(_dereq_,module,exports){
'use strict';
//add 'downward' tags (that immediately depend on this one)
const addDownword = _dereq_('../tags/addDownward');

//extend our known tagset with these new ones
const addTags = function(tags) {
  Object.keys(tags).forEach((tag) => {
    let obj = tags[tag];
    obj.notA = obj.notA || [];
    obj.downward = obj.downward || [];
    this.tags[tag] = obj;
  });
  addDownword(this.tags);
  return tags;
};
module.exports = addTags;

},{"../tags/addDownward":92}],165:[function(_dereq_,module,exports){
'use strict';
const normalize = _dereq_('../term/methods/normalize/normalize').normalize;
const inflect = _dereq_('../subset/nouns/methods/pluralize');
const conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js');
const adjFns = _dereq_('../subset/adjectives/methods');
const wordReg = / /;


const cleanUp = function(str) {
  str = normalize(str);
  //extra whitespace
  str = str.replace(/\s+/, ' ');
  //remove sentence-punctuaion too
  str = str.replace(/[.\?,;\!]/g, '');
  return str;
};

//
const addWords = function(words) {
  //go through each word
  Object.keys(words).forEach((word) => {
    let tag = words[word];
    word = cleanUp(word);
    this.words[word] = tag;
    //add it to multi-word cache,
    if (wordReg.test(word) === true) {
      let arr = word.split(wordReg);
      this.cache.firstWords[arr[0]] = true;
    }

    //turn singulars into plurals
    if (tag === 'Singular') {
      let plural = inflect(word, {});
      if (plural && plural !== word) {
        this.words[plural] = 'Plural';
      }
      return;
    }
    //turn infinitives into all conjugations
    if (tag === 'Infinitive') {
      let conj = conjugate(word, this);
      Object.keys(conj).forEach((k) => {
        this.words[conj[k]] = k;
      });
      return;
    }
    //phrasals like 'pull out' get conjugated too
    if (tag === 'PhrasalVerb') {
      let arr = word.split(/ /);
      let conj = conjugate(arr[0], this);
      Object.keys(conj).forEach((k) => {
        let form = conj[k] + ' ' + arr[1];
        this.words[form] = 'PhrasalVerb';
        //add it to cache, too
        this.cache.firstWords[conj[k]] = true;
      });
      return;
    }
    //turn some adjectives into superlatives
    if (tag === 'Comparable') {
      let comp = adjFns.toComparative(word);
      if (comp && word !== comp) {
        this.words[comp] = 'Comparative';
      }
      let supr = adjFns.toSuperlative(word);
      if (supr && word !== supr) {
        this.words[supr] = 'Superlative';
      }
    }
  });

  return words;
};
module.exports = addWords;

},{"../subset/adjectives/methods":9,"../subset/nouns/methods/pluralize":32,"../subset/verbs/methods/conjugate/faster.js":50,"../term/methods/normalize/normalize":106}],166:[function(_dereq_,module,exports){
'use strict';
// const addWords = require('./addWords');
const fns = _dereq_('../fns');
let data = _dereq_('./_data');
let moreData = _dereq_('./more-data');
let tags = _dereq_('../tags');
let unpack = _dereq_('./unpack');
let addTags = _dereq_('./addTags');
let addWords = _dereq_('./addWords');
let addRegex = _dereq_('./addRegex');
let addConjugations = _dereq_('./addConjugations');
let addPatterns = _dereq_('./addPatterns');
let addPlurals = _dereq_('./addPlurals');
let misc = _dereq_('./more-data/misc');

//lazier/faster object-merge
const extend = (main, obj) => {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    main[keys[i]] = obj[keys[i]];
  }
  return main;
};

//class World
let World = function() {
  this.words = {};
  this.tags = tags;
  this.regex = [];
  this.patterns = {};
  this.conjugations = {};
  this.plurals = {};
  //denormalized data for faster-lookups
  this.cache = {
    firstWords: {},
    toInfinitive: {},
    toSingular: {}
  };
};

World.prototype.addTags = addTags;
World.prototype.addWords = addWords;
World.prototype.addRegex = addRegex;
World.prototype.addConjugations = addConjugations;
World.prototype.addPlurals = addPlurals;
World.prototype.addPatterns = addPatterns;

//make a no-reference copy of all the data
World.prototype.clone = function() {
  let w2 = new World();
  ['words', 'firstWords', 'tagset', 'regex', 'patterns', 'conjugations', 'plurals'].forEach((k) => {
    if (this[k]) {
      w2[k] = fns.copy(this[k]);
    }
  });
  return w2;
};

//add all the things, in all the places
World.prototype.plugin = function(obj) {
  //untangle compromise-plugin
  obj = unpack(obj);
  //add all-the-things to this world object
  //(order may matter)
  if (obj.tags) {
    this.addTags(obj.tags);
  }
  if (obj.regex) {
    this.addRegex(obj.regex);
  }
  if (obj.patterns) {
    this.addPatterns(obj.patterns);
  }
  if (obj.conjugations) {
    this.addConjugations(obj.conjugations);
  }
  if (obj.plurals) {
    this.addPlurals(obj.plurals);
  }
  if (obj.words) {
    this.addWords(obj.words);
  }
};

//export a default world
let w = new World();
w.plugin(data);
w.addWords(misc);
moreData.forEach((obj) => {
  extend(w.words, obj);
});

module.exports = {
  w: w,
  reBuild: function() {
    //export a default world
    let w2 = new World();
    w2.plugin(data);
    w2.addWords(misc);
    moreData.forEach((obj) => {
      extend(w2.words, obj);
    });
    return w2;
  }
};

},{"../fns":3,"../tags":94,"./_data":159,"./addConjugations":160,"./addPatterns":161,"./addPlurals":162,"./addRegex":163,"./addTags":164,"./addWords":165,"./more-data":168,"./more-data/misc":170,"./unpack":174}],167:[function(_dereq_,module,exports){
//these are common word shortenings used in the lexicon and sentence segmentation methods
//there are all nouns,or at the least, belong beside one.
'use strict';

//common abbreviations
let compact = {
  Noun: [
    'arc',
    'al',
    'exp',
    'fy',
    'pd',
    'pl',
    'plz',
    'tce',
    'bl',
    'ma',
    'ba',
    'lit',
    'ex',
    'eg',
    'ie',
    'ca',
    'cca',
    'vs',
    'etc',
    'esp',
    'ft',
    //these are too ambiguous
    'bc',
    'ad',
    'md',
    'corp',
    'col'
  ],
  Organization: [
    'dept',
    'univ',
    'assn',
    'bros',
    'inc',
    'ltd',
    'co',
    //proper nouns with exclamation marks
    'yahoo',
    'joomla',
    'jeopardy'
  ],

  Place: [
    'rd',
    'st',
    'dist',
    'mt',
    'ave',
    'blvd',
    'cl',
    'ct',
    'cres',
    'hwy',
    //states
    'ariz',
    'cal',
    'calif',
    'colo',
    'conn',
    'fla',
    'fl',
    'ga',
    'ida',
    'ia',
    'kan',
    'kans',

    'minn',
    'neb',
    'nebr',
    'okla',
    'penna',
    'penn',
    'pa',
    'dak',
    'tenn',
    'tex',
    'ut',
    'vt',
    'va',
    'wis',
    'wisc',
    'wy',
    'wyo',
    'usafa',
    'alta',
    'ont',
    'que',
    'sask'
  ],

  Month: ['jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'sept', 'oct', 'nov', 'dec'],
  Date: ['circa'],

  //Honorifics
  Honorific: [
    'adj',
    'adm',
    'adv',
    'asst',
    'atty',
    'bldg',
    'brig',
    'capt',
    'cmdr',
    'comdr',
    'cpl',
    'det',
    'dr',
    'esq',
    'gen',
    'gov',
    'hon',
    'jr',
    'llb',
    'lt',
    'maj',
    'messrs',
    'mister',
    'mlle',
    'mme',
    'mr',
    'mrs',
    'ms',
    'mstr',
    'op',
    'ord',
    'phd',
    'prof',
    'pvt',
    'rep',
    'reps',
    'res',
    'rev',
    'sen',
    'sens',
    'sfc',
    'sgt',
    'sir',
    'sr',
    'supt',
    'surg'
    //miss
    //misses
  ]
};

//unpack the compact terms into the misc lexicon..
let abbreviations = {};
const keys = Object.keys(compact);
for (let i = 0; i < keys.length; i++) {
  const arr = compact[keys[i]];
  for (let i2 = 0; i2 < arr.length; i2++) {
    abbreviations[arr[i2]] = keys[i];
  }
}
module.exports = abbreviations;

},{}],168:[function(_dereq_,module,exports){
module.exports = [
  _dereq_('./abbreviations'),
  _dereq_('./irregularAdjectives').lexicon,
  _dereq_('./numbers').lexicon,
// require('./orgWords'),
];

},{"./abbreviations":167,"./irregularAdjectives":169,"./numbers":171}],169:[function(_dereq_,module,exports){
'use strict';
//adjectives that have irregular conjugations to adverb, comparative, and superlative forms
const toAdverb = {
  bad: 'badly',
  best: 'best',
  early: 'early',
  fast: 'fast',
  good: 'well',
  hard: 'hard',
  icy: 'icily',
  idle: 'idly',
  late: 'late',
  latter: 'latter',
  little: 'little',
  long: 'long',
  low: 'low',
  male: 'manly',
  public: 'publicly',
  simple: 'simply',
  single: 'singly',
  special: 'especially',
  straight: 'straight',
  vague: 'vaguely',
  well: 'well',
  whole: 'wholly',
  wrong: 'wrong'
};

const toComparative = {
  grey: 'greyer',
  gray: 'grayer',
  green: 'greener',
  yellow: 'yellower',
  red: 'redder',
  good: 'better',
  well: 'better',
  bad: 'worse',
  sad: 'sadder',
  big: 'bigger'
};

const toSuperlative = {
  nice: 'nicest',
  late: 'latest',
  hard: 'hardest',
  inner: 'innermost',
  outer: 'outermost',
  far: 'furthest',
  worse: 'worst',
  bad: 'worst',
  good: 'best',
  big: 'biggest',
  large: 'largest'
};

const combine = function(lexicon, obj, tag) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    lexicon[keys[i]] = 'Comparable';
    if (lexicon[obj[keys[i]]] === undefined) {
      lexicon[obj[keys[i]]] = tag;
    }
  }
  return lexicon;
};
let lexicon = combine({}, toSuperlative, 'Superlative');
lexicon = combine(lexicon, toComparative, 'Comparative');
lexicon = combine(lexicon, toAdverb, 'Adverb');

module.exports = {
  lexicon: lexicon,
  toAdverb: toAdverb,
  toComparative: toComparative,
  toSuperlative: toSuperlative
};

},{}],170:[function(_dereq_,module,exports){
//words that can't be compressed, for whatever reason
module.exports = {
  '20th century fox': 'Organization',
  '3m': 'Organization',
  '7 eleven': 'Organization',
  '7-eleven': 'Organization',
  'g8': 'Organization',
  'motel 6': 'Organization',
  'vh1': 'Organization',
  'q1': 'Date',
  'q2': 'Date',
  'q3': 'Date',
  'q4': 'Date',
};

},{}],171:[function(_dereq_,module,exports){
'use strict';
const cardinal = {
  ones: {
    // 'a': 1,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  },
  teens: {
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
  },
  tens: {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
  },
  multiples: {
    hundred: 1e2,
    thousand: 1e3,
    grand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18,
    sextillion: 1e21,
    septillion: 1e24
  }
};

const ordinal = {
  ones: {
    zeroth: 0,
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9
  },
  teens: {
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19
  },
  tens: {
    twentieth: 20,
    thirtieth: 30,
    fourtieth: 40,
    fiftieth: 50,
    sixtieth: 60,
    seventieth: 70,
    eightieth: 80,
    ninetieth: 90
  },
  multiples: {
    hundredth: 1e2,
    thousandth: 1e3,
    millionth: 1e6,
    billionth: 1e9,
    trillionth: 1e12,
    quadrillionth: 1e15,
    quintillionth: 1e18,
    sextillionth: 1e21,
    septillionth: 1e24
  }
};

//used for the units
const prefixes = {
  yotta: 1,
  zetta: 1,
  exa: 1,
  peta: 1,
  tera: 1,
  giga: 1,
  mega: 1,
  kilo: 1,
  hecto: 1,
  deka: 1,
  deci: 1,
  centi: 1,
  milli: 1,
  micro: 1,
  nano: 1,
  pico: 1,
  femto: 1,
  atto: 1,
  zepto: 1,
  yocto: 1,

  square: 1,
  cubic: 1,
  quartic: 1
};

//create an easy mapping between ordinal-cardinal
let toOrdinal = {};
let toCardinal = {};
let lexicon = {};
Object.keys(ordinal).forEach(k => {
  let ord = Object.keys(ordinal[k]);
  let card = Object.keys(cardinal[k]);
  for (let i = 0; i < ord.length; i++) {
    toOrdinal[card[i]] = ord[i];
    toCardinal[ord[i]] = card[i];
    lexicon[ord[i]] = ['Ordinal', 'TextValue'];
    lexicon[card[i]] = ['Cardinal', 'TextValue'];
    if (k === 'multiples') {
      lexicon[ord[i]].push('Multiple');
      lexicon[card[i]].push('Multiple');
    }
  }
});

module.exports = {
  toOrdinal: toOrdinal,
  toCardinal: toCardinal,
  cardinal: cardinal,
  ordinal: ordinal,
  prefixes: prefixes,
  lexicon: lexicon
};

},{}],172:[function(_dereq_,module,exports){
//nouns that also signal the title of an unknown organization
//todo remove/normalize plural forms
const orgWords = [
  'administration',
  'agence',
  'agences',
  'agencies',
  'agency',
  'airlines',
  'airways',
  'army',
  'assoc',
  'associates',
  'association',
  'assurance',
  'authority',
  'autorite',
  'aviation',
  'bank',
  'banque',
  'board',
  'boys',
  'brands',
  'brewery',
  'brotherhood',
  'brothers',
  'building society',
  'bureau',
  'cafe',
  'caisse',
  'capital',
  'care',
  'cathedral',
  'center',
  'central bank',
  'centre',
  'chemicals',
  'choir',
  'chronicle',
  'church',
  'circus',
  'clinic',
  'clinique',
  'club',
  'co',
  'coalition',
  'coffee',
  'collective',
  'college',
  'commission',
  'committee',
  'communications',
  'community',
  'company',
  'comprehensive',
  'computers',
  'confederation',
  'conference',
  'conseil',
  'consulting',
  'containers',
  'corporation',
  'corps',
  'council',
  'crew',
  'daily news',
  'data',
  'departement',
  'department',
  'department store',
  'departments',
  'design',
  'development',
  'directorate',
  'division',
  'drilling',
  'education',
  'eglise',
  'electric',
  'electricity',
  'energy',
  'ensemble',
  'enterprise',
  'enterprises',
  'entertainment',
  'estate',
  'etat',
  'evening news',
  'faculty',
  'federation',
  'financial',
  'fm',
  'foundation',
  'fund',
  'gas',
  'gazette',
  'girls',
  'government',
  'group',
  'guild',
  'health authority',
  'herald',
  'holdings',
  'hospital',
  'hotel',
  'hotels',
  'inc',
  'industries',
  'institut',
  'institute',
  'institute of technology',
  'institutes',
  'insurance',
  'international',
  'interstate',
  'investment',
  'investments',
  'investors',
  'journal',
  'laboratory',
  'labs',
  // 'law',
  'liberation army',
  'limited',
  'local authority',
  'local health authority',
  'machines',
  'magazine',
  'management',
  'marine',
  'marketing',
  'markets',
  'media',
  'memorial',
  'mercantile exchange',
  'ministere',
  'ministry',
  'military',
  'mobile',
  'motor',
  'motors',
  'musee',
  'museum',
  // 'network',
  'news',
  'news service',
  'observatory',
  'office',
  'oil',
  'optical',
  'orchestra',
  'organization',
  'partners',
  'partnership',
  // 'party',
  'people\'s party',
  'petrol',
  'petroleum',
  'pharmacare',
  'pharmaceutical',
  'pharmaceuticals',
  'pizza',
  'plc',
  'police',
  'polytechnic',
  'post',
  'power',
  'press',
  'productions',
  'quartet',
  'radio',
  'regional authority',
  'regional health authority',
  'reserve',
  'resources',
  'restaurant',
  'restaurants',
  'savings',
  'school',
  'securities',
  'service',
  'services',
  'social club',
  'societe',
  'society',
  'sons',
  'standard',
  'state police',
  'state university',
  'stock exchange',
  'subcommittee',
  'syndicat',
  'systems',
  'telecommunications',
  'telegraph',
  'television',
  'times',
  'tribunal',
  'tv',
  'union',
  'university',
  'utilities',
  'workers'
];

module.exports = orgWords.reduce(function(h, str) {
  h[str] = 'Noun';
  return h;
}, {});

},{}],173:[function(_dereq_,module,exports){
'use strict';
//supported verb forms:
const forms = [
  null,
  'PastTense',
  'PresentTense',
  'Gerund',
  'Participle',
];
//
const unpackVerbs = function(str) {
  let verbs = str.split('|');
  return verbs.reduce((h, s) => {
    let parts = s.split(':');
    let prefix = parts[0];
    let ends = parts[1].split(',');
    //grab the infinitive
    let inf = prefix + ends[0];
    if (ends[0] === '_') {
      inf = prefix;
    }
    h[inf] = {};
    //we did the infinitive, now do the rest:
    for (let i = 1; i < forms.length; i++) {
      let word = parts[0] + ends[i];
      if (ends[i] === '_') {
        word = parts[0];
      }
      if (ends[i]) {
        h[inf][forms[i]] = word;
      }
    }
    return h;
  }, {});
};
module.exports = unpackVerbs;

},{}],174:[function(_dereq_,module,exports){
'use strict';
const unpack = {
  words: _dereq_('efrt-unpack'),
  plurals: _dereq_('./plurals'),
  conjugations: _dereq_('./conjugations'),
  keyValue: _dereq_('./key-value')
};
/*
 == supported plugin fields ==
  name
  words        - efrt packed
  tags         - stringified
  regex        - key-value
  patterns     - key-value
  plurals      - plural-unpack
  conjugations - conjugation-unpack
*/

const unpackPlugin = function(str) {
  let obj = str;
  if (typeof str === 'string') {
    obj = JSON.parse(str);
  }
  //words is packed with efrt
  if (obj.words && typeof obj.words === 'string') {
    obj.words = unpack.words(obj.words);
  }
  //patterns is pivoted as key-value
  if (obj.patterns) {
    obj.patterns = unpack.keyValue(obj.patterns);
  }
  //regex, too
  if (obj.regex) {
    obj.regex = unpack.keyValue(obj.regex);
  }
  //plurals is packed in a ad-hoc way
  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpack.plurals(obj.plurals);
  }
  //conjugations is packed in another ad-hoc way
  if (obj.conjugations && typeof obj.conjugations === 'string') {
    obj.conjugations = unpack.conjugations(obj.conjugations);
  }
  return obj;
};
module.exports = unpackPlugin;

},{"./conjugations":173,"./key-value":175,"./plurals":176,"efrt-unpack":1}],175:[function(_dereq_,module,exports){
'use strict';
//pivot k:[val,val] ->  val:k, val:k
const keyValue = function(obj) {
  let keys = Object.keys(obj);
  let isCompressed = true;
  if (keys[0] && typeof obj[keys[0]] === 'string') {
    isCompressed = false;
  }
  return keys.reduce((h, k) => {
    if (isCompressed === true) {
      let arr = obj[k];
      arr.forEach((a) => {
        if (h[a]) {
          //convert val to an array
          if (typeof h[a] === 'string') {
            h[a] = [h[a]];
          }
          //add it
          h[a].push(k);
        } else {
          h[a] = k;
        }
      });
    } else {
      h[k] = obj[k];
    }
    return h;
  }, {});
};
module.exports = keyValue;

},{}],176:[function(_dereq_,module,exports){
'use strict';
const unpackPlurals = function(str) {
  return str.split(/,/g).reduce((h, s) => {
    let arr = s.split(/\|/g);
    if (arr.length === 3) {
      h[arr[0] + arr[1]] = arr[0] + arr[2];
    } else if (arr.length === 2) {
      h[arr[0]] = arr[0] + arr[1];
    } else {
      h[arr[0]] = arr[0];
    }
    return h;
  }, {});
};
module.exports = unpackPlurals;

},{}]},{},[4])(4)
});