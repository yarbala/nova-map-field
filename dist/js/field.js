/*! For license information please see field.js.LICENSE.txt */
(()=>{"use strict";var t,e={72:(t,e,n)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function l(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var f=l(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:s,updater:m(p,e),references:1}),r.push(s)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(t,e){var n,r,o;if(e.singleton){var i=v++;n=h||(h=u(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=c(t,e),u=0;u<n.length;u++){var s=l(n[u]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},262:(t,e)=>{e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[t,r]of e)n[t]=r;return n}},308:(t,e,n)=>{const r=Vue;const o={props:["resourceName","field"],computed:{fieldValue:function(){return this.field.displayedAs||this.field.value}}};var i=n(262);const a=(0,i.A)(o,[["render",function(t,e,n,o,i,a){return(0,r.openBlock)(),(0,r.createElementBlock)("span",null,(0,r.toDisplayString)(a.fieldValue),1)}]]);var l=["src"],c={style:{display:"block"}},u={style:{display:"block"}};const s={props:["index","resource","resourceName","resourceId","field"]},f=(0,i.A)(s,[["render",function(t,e,n,o,i,a){var s=(0,r.resolveComponent)("PanelItem");return(0,r.openBlock)(),(0,r.createBlock)(s,{index:n.index,field:n.field},{value:(0,r.withCtx)((function(){return[n.field.api_key?((0,r.openBlock)(),(0,r.createElementBlock)("img",{key:0,src:"https://maps.googleapis.com/maps/api/staticmap?center=".concat(n.field.value.coordinates[1],",").concat(n.field.value.coordinates[0],"&zoom=16&size=400x400&key=").concat(n.field.api_key,"&markers=color:red|").concat(n.field.value.coordinates[1],",").concat(n.field.value.coordinates[0]),alt:"Static Google Map"},null,8,l)):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("span",c,"Lat: "+(0,r.toDisplayString)(n.field.value.coordinates[1]),1),(0,r.createElementVNode)("span",u,"Lng: "+(0,r.toDisplayString)(n.field.value.coordinates[0]),1)]})),_:1},8,["index","field"])}]]);var p=["id"],d={class:"flex flex-wrap w-full"},h={class:"flex w-1/2 justify-center"},v={class:"w-1/5 py-3 pl-2"},m=["for"],g={class:"py-3 w-4/5"},y=["id"],b={class:"flex w-1/2 justify-center"},w={class:"w-1/5 py-3 pl-2"},x=["for"],L={class:"py-3 w-4/5"},M=["id"];const k=LaravelNova;function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(){j=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),l=new A(r||[]);return o(a,"_invoke",{value:O(t,n,l)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",d="suspendedYield",h="executing",v="completed",m={};function g(){}function y(){}function b(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(P([])));L&&L!==n&&r.call(L,a)&&(w=L);var M=b.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,l){var c=f(t[o],t,i);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==S(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,l)}),(function(t){n("throw",t,a,l)})):e.resolve(s).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,l)}))}l(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,n,r){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var c=C(l,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var u=f(e,n,r);if("normal"===u.type){if(o=r.done?v:d,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function C(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(S(e)+" is not iterable")}return y.prototype=b,o(M,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(M),t},e.awrap=function(t){return{__await:t}},k(E.prototype),u(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(M),u(M,c,"Generator"),u(M,a,(function(){return this})),u(M,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function C(t,e,n,r,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,o)}function _(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){C(i,r,o,a,l,"next",t)}function l(t){C(i,r,o,a,l,"throw",t)}a(void 0)}))}}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}function A(t,e,n){return(e=P(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){var e=function(t,e){if("object"!=S(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==S(e)?e:e+""}var I=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,"currentPosition",null),A(this,"currentMarker",null),this.context=e},e=[{key:"init",value:(o=_(j().mark((function t(e,n,r){var o,i=this;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("[SimpleMap][GoogleMapService][init] Initializing Map at "+e+", "+n),this.currentLatLng=new google.maps.LatLng(e,n),t.next=4,this.createMap(r);case 4:o=t.sent,google.maps.event.addListener(o,"click",(function(t){return i.onMapClick(o,t.latLng.lat(),t.latLng.lng())}));case 6:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return o.apply(this,arguments)})},{key:"createMap",value:(r=_(j().mark((function t(e){var n,r,o,i,a=this;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,google.maps.importLibrary("marker");case 2:return n=t.sent,r=n.AdvancedMarkerElement,o={zoom:this.context.field.zoom||4,center:this.currentLatLng,mapId:""+this.context._.uid,streetViewControl:!1,zoomControl:!0,mapTypeControl:!1},console.log("[SimpleMap][GoogleMapService][createMap] Map options",o),t.prev=6,i=new google.maps.Map(e,o),console.log("[SimpleMap][GoogleMapService][createMap] Map initialized successfully"),this.currentMarker=new r({position:this.currentLatLng,map:i,gmpDraggable:!0}),this.currentMarker.addListener("dragend",(function(t){var e=a.currentMarker.position;a.updateCurrentMarker(e.lat,e.lng)})),console.log("[SimpleMap][GoogleMapService][createMap] Marker placed at:",this.currentLatLng),t.abrupt("return",i);case 15:return t.prev=15,t.t0=t.catch(6),console.error("[SimpleMap][GoogleMapService][createMap] Failed to initialize map:",t.t0),t.abrupt("return");case 19:case"end":return t.stop()}}),t,this,[[6,15]])}))),function(t){return r.apply(this,arguments)})},{key:"onMapClick",value:function(t,e,n){console.log("[SimpleMap][GoogleMapService][onMapClick] Map Clicked",{lat:e,lng:n}),this.updateCurrentMarker(e,n)}},{key:"updateCurrentMarker",value:function(t,e){this.updateCurrentMarkerLng(e),this.updateCurrentMarkerLat(t)}},{key:"updateCurrentMarkerLng",value:function(t){this.currentPosition&&(this.currentPosition.lng=t),this.currentMarker&&(this.currentMarker.position=new google.maps.LatLng(this.currentMarker.position.lat,t)),this.context.value=O(O({},this.context.value),{lng:t}),this.context.field.lng=t}},{key:"updateCurrentMarkerLat",value:function(t){this.currentPosition&&(this.currentPosition.lat=t),this.currentMarker&&(this.currentMarker.position=new google.maps.LatLng(t,this.currentMarker.position.lng)),this.context.value=O(O({},this.context.value),{lat:t}),this.context.field.lat=t}}],e&&N(t.prototype,e),n&&N(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n,r,o}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function T(){T=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),l=new _(r||[]);return o(a,"_invoke",{value:E(t,n,l)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",d="suspendedYield",h="executing",v="completed",m={};function g(){}function y(){}function b(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(N([])));L&&L!==n&&r.call(L,a)&&(w=L);var M=b.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,l){var c=f(t[o],t,i);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==F(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,l)}),(function(t){n("throw",t,a,l)})):e.resolve(s).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,l)}))}l(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function E(e,n,r){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var c=O(l,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var u=f(e,n,r);if("normal"===u.type){if(o=r.done?v:d,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function O(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(F(e)+" is not iterable")}return y.prototype=b,o(M,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(M),t},e.awrap=function(t){return{__await:t}},k(S.prototype),u(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(M),u(M,c,"Generator"),u(M,a,(function(){return this})),u(M,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function G(t,e,n,r,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,o)}function V(t){return D(t)?t.coordinates[1]:JSON.parse(t).lat}function B(t){return D(t)?t.coordinates[0]:JSON.parse(t).lng}function D(t){return Object.keys(t).indexOf("coordinates")>=0}const z={mixins:[k.FormField,k.HandlesValidationErrors],props:["resourceName","resourceId","field"],data:function(){var t={service:new I(this),latId:"lat-"+this._.uid,lngId:"lng-"+this._.uid,map:"google-"+this._.uid};return console.log("[SimpleMap][Data] values:",t),t},mounted:(J=T().mark((function t(){var e,n,r;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("[SimpleMap][Mounted] Init Value: ",this.value),this.value&&(this.field.lat=V(this.value),this.field.lng=B(this.value)),console.log("[SimpleMap][Mounted] Map: "+this.map),e=document.getElementById(this.map)){t.next=7;break}return console.error("[SimpleMap][Mounted] Map (#"+this.map+") container element not found!"),t.abrupt("return");case 7:if(console.log("[SimpleMap][Mounted] Element (#"+this.map+"): ",e),n=this.value?V(this.value):this.field.lat,r=this.value?B(this.value):this.field.lng,console.log("[SimpleMap][Mounted] Initial coordinates:",{lat:n,lng:r}),this.map!=="google-"+this._.uid){t.next=14;break}return t.next=14,this.service.init(n,r,e);case 14:case"end":return t.stop()}}),t,this)})),H=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=J.apply(t,e);function i(t){G(o,n,r,i,a,"next",t)}function a(t){G(o,n,r,i,a,"throw",t)}i(void 0)}))},function(){return H.apply(this,arguments)}),methods:{fill:function(t){console.log("[SimpleMap][Fill] Field: ",this.value),t.append(this.fieldAttribute,JSON.stringify({lat:this.field.lat,lng:this.field.lng}))}},watch:{"field.lat":function(t){console.log("[SimpleMap][Watch] Lat changed: ",t),this.service&&this.service.updateCurrentMarkerLat(t)},"field.lng":function(t){console.log("[SimpleMap][Watch] Lng changed: ",t),this.service&&this.service.updateCurrentMarkerLng(t)}}};var J,H,U=n(72),R=n.n(U),W=n(586),Y={insert:"head",singleton:!1};R()(W.A,Y);W.A.locals;const q=(0,i.A)(z,[["render",function(t,e,n,o,i,a){var l=(0,r.resolveComponent)("DefaultField");return(0,r.openBlock)(),(0,r.createBlock)(l,{field:n.field,errors:t.errors,"show-help-text":t.showHelpText,"full-width-content":t.fullWidthContent},{field:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",{class:"map w-full",id:t.map},null,8,p),(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("div",h,[(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("label",{class:"inline-block text-80 pt-2 leading-tight",for:t.latId},"Lat",8,m)]),(0,r.createElementVNode)("div",g,[(0,r.withDirectives)((0,r.createElementVNode)("input",{id:t.latId,class:(0,r.normalizeClass)(["w-full form-control form-input form-input-bordered",t.errorClasses]),"onUpdate:modelValue":e[0]||(e[0]=function(t){return n.field.lat=t}),type:"text",disabled:""},null,10,y),[[r.vModelText,n.field.lat]])])]),(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("label",{class:"inline-block text-80 pt-2 leading-tight",for:t.lngId},"Lng",8,x)]),(0,r.createElementVNode)("div",L,[(0,r.withDirectives)((0,r.createElementVNode)("input",{id:t.lngId,class:(0,r.normalizeClass)(["w-full form-control form-input form-input-bordered",t.errorClasses]),"onUpdate:modelValue":e[1]||(e[1]=function(t){return n.field.lng=t}),type:"text",disabled:""},null,10,M),[[r.vModelText,n.field.lng]])])])])]})),_:1},8,["field","errors","show-help-text","full-width-content"])}],["__scopeId","data-v-79f7d052"]]);Nova.booting((function(t,e){t.component("index-simple-map",a),t.component("detail-simple-map",f),t.component("form-simple-map",q)}))},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},586:(t,e,n)=>{n.d(e,{A:()=>l});var r=n(991),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([t.id,".map[data-v-79f7d052]{background:gray;border:1px solid #ccc;height:300px;margin:0 auto;width:720px}","",{version:3,sources:["webpack://./resources/js/components/FormField.vue"],names:[],mappings:"AA4CA,sBAII,eAAgB,CAChB,qBAAqB,CAHrB,YAAa,CACb,aAAc,CAFd,WAKJ",sourcesContent:['<template>\n    <DefaultField\n        :field="field"\n        :errors="errors"\n        :show-help-text="showHelpText"\n        :full-width-content="fullWidthContent"\n    >\n        <template #field>\n            <div class="map w-full" :id="map"></div>\n\n            <div class="flex flex-wrap w-full">\n                <div class="flex w-1/2 justify-center">\n                    <div class="w-1/5 py-3 pl-2">\n                        <label class="inline-block text-80 pt-2 leading-tight" :for="latId">Lat</label>\n                    </div>\n                    <div class="py-3 w-4/5">\n                        <input :id="latId"\n                               class="w-full form-control form-input form-input-bordered"\n                               :class="errorClasses"\n                               v-model="field.lat"\n                               type="text"\n                               disabled\n                        />\n                    </div>\n                </div>\n                <div class="flex w-1/2 justify-center">\n                    <div class="w-1/5 py-3 pl-2">\n                        <label class="inline-block text-80 pt-2 leading-tight" :for="lngId">Lng</label>\n                    </div>\n                    <div class="py-3 w-4/5">\n                        <input :id="lngId"\n                               class="w-full form-control form-input form-input-bordered"\n                               :class="errorClasses"\n                               v-model="field.lng"\n                               type="text"\n                               disabled\n                        />\n                    </div>\n                </div>\n            </div>\n        </template>\n    </DefaultField>\n</template>\n<style scoped>\n.map {\n    width: 720px;\n    height: 300px;\n    margin: 0 auto;\n    background: gray;\n    border:solid 1px #ccc;\n}\n</style>\n<script>\nimport {FormField, HandlesValidationErrors} from \'laravel-nova\'\nimport GoogleMapService from "../services/GoogleMapService";\n\nfunction getLat(value) {\n    if(isPoint(value)) {\n        return value.coordinates[1];\n    }\n\n    const v = JSON.parse(value);\n    return v.lat;\n}\n\nfunction getLng(value) {\n    if(isPoint(value)) {\n        return value.coordinates[0];\n    }\n\n    const v = JSON.parse(value);\n    return v.lng;\n}\n\nfunction isPoint(value) {\n    return Object.keys(value).indexOf(\'coordinates\') >= 0;\n}\n\nexport default {\n    mixins: [FormField, HandlesValidationErrors],\n\n    props: [\'resourceName\', \'resourceId\', \'field\'],\n\n    data: function () {\n        const data = {\n            service: new GoogleMapService(this),\n            latId: \'lat-\' + this._.uid,\n            lngId: \'lng-\' + this._.uid,\n            map: \'google-\' + this._.uid,\n        };\n\n        console.log(\'[SimpleMap][Data] values:\', data);\n\n        return data;\n    },\n    mounted: async function () {\n        console.log(\'[SimpleMap][Mounted] Init Value: \', this.value);\n\n        if(this.value) {\n            this.field.lat = getLat(this.value);\n            this.field.lng = getLng(this.value);\n        }\n\n        console.log(\'[SimpleMap][Mounted] Map: \' + this.map);\n\n        const element = document.getElementById(this.map);\n        if (!element) {\n            console.error(\'[SimpleMap][Mounted] Map (#\' + this.map + \') container element not found!\');\n\n            return;\n        }\n\n        console.log(\'[SimpleMap][Mounted] Element (#\' + this.map + \'): \', element);\n\n        const lat = this.value ? getLat(this.value) : this.field.lat;\n        const lng = this.value ? getLng(this.value) : this.field.lng;\n\n        console.log(\'[SimpleMap][Mounted] Initial coordinates:\', {lat, lng});\n\n        if(this.map === (\'google-\' + this._.uid)) {\n            await this.service.init(lat, lng, element);\n        }\n    },\n\n    methods: {\n        /**\n         * Fill the given FormData object with the field\'s internal value.\n         */\n        fill(formData) {\n            console.log(\'[SimpleMap][Fill] Field: \', this.value);\n\n            formData.append(this.fieldAttribute, JSON.stringify({\n                lat: this.field.lat,\n                lng: this.field.lng,\n            }))\n        },\n    },\n    watch: {\n        \'field.lat\': function (lat) {\n            console.log(\'[SimpleMap][Watch] Lat changed: \', lat);\n            if(this.service) {\n                this.service.updateCurrentMarkerLat(lat)\n            }\n        },\n        \'field.lng\': function (lng) {\n            console.log(\'[SimpleMap][Watch] Lng changed: \', lng);\n            if(this.service) {\n                this.service.updateCurrentMarkerLng(lng)\n            }\n        }\n    }\n}\n<\/script>\n'],sourceRoot:""}]);const l=a},835:()=>{},991:t=>{function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var n=e(t,4),r=n[1],o=n[3];if(!o)return r;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),l="/*# ".concat(a," */"),c=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[r].concat(c).concat([l]).join("\n")}return[r].join("\n")}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(s=0;s<t.length;s++){for(var[n,o,i]=t[s],l=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(l=!1,i<a&&(a=i));if(l){t.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,o,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={222:0,101:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,l,c]=n,u=0;if(a.some((e=>0!==t[e]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var s=c(r)}for(e&&e(n);u<a.length;u++)i=a[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(s)},n=self.webpackChunkyarbala_simple_map=self.webpackChunkyarbala_simple_map||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.nc=void 0,r.O(void 0,[101],(()=>r(308)));var o=r.O(void 0,[101],(()=>r(835)));o=r.O(o)})();
//# sourceMappingURL=field.js.map