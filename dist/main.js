(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"body {\n    background-color: yellowgreen;\n}\n\n.entryHolder {\n    display: flex;\n}\n\n.entry {\n    color: blue;\n    border:3px solid black;\n    margin: 10px;\n    width: 200px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],d=r.base?l[0]+r.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:v,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var l=r(e,o),d=0;d<a.length;d++){var s=n(a[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),l=n.n(i),d=n(216),s=n.n(d),u=n(589),p=n.n(u),m=n(426),v={};v.styleTagTransform=p(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=s(),t()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const f=document.createElement("input");f.setAttribute("placeholder","Title");const h=document.createElement("input");h.setAttribute("placeholder","Description");const y=document.createElement("input");y.setAttribute("placeholder","Due Date");const C=document.createElement("input");C.setAttribute("placeholder","Priority");const b=document.createElement("button");b.textContent="Add New To-Do-Item";let g=[];b.addEventListener("click",(()=>{g.push({title:f.value,description:h.value,dueDate:y.value,priority:C.value}),f.value=h.value=y.value=C.value=null,(()=>{let e=document.getElementById("content");const t=document.getElementsByClassName("entry");for(;t.length>0;)t[0].parentNode.removeChild(t[0]);let n=document.createElement("div");e.appendChild(n),n.classList.add("entryHolder"),g.forEach((e=>{let t=document.createElement("div");t.classList.add("entry"),n.appendChild(t);let r=document.createElement("li");r.textContent=e.title,t.appendChild(r);let o=document.createElement("li");o.textContent=e.description,t.appendChild(o);let a=document.createElement("li");a.textContent=e.dueDate,t.appendChild(a);let c=document.createElement("li");c.textContent=e.priority,t.appendChild(c)}))})(),console.log(g),(()=>{const e=document.getElementById("content");e.removeChild(f),e.removeChild(h),e.removeChild(y),e.removeChild(C),e.removeChild(b)})()}));const E=document.createElement("button");E.textContent="Click Here To Add a New Item",document.getElementById("content").appendChild(E),E.addEventListener("click",(()=>{(()=>{const e=document.getElementById("content");e.appendChild(f),e.appendChild(h),e.appendChild(y),e.appendChild(C),e.appendChild(b)})()}))})()})();