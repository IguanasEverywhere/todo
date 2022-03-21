/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    font-family: 'Fredoka', sans-serif;\\n}\\n\\n.addProjectBtn, .allProjectsBtn {\\n    font-family: 'Fredoka', sans-serif;\\n    background-color:red;\\n    margin: 20px;\\n    color: #ffff10;\\n    box-shadow: 5px 5px 10px gray;\\n}\\n\\n.projectNameBtn {\\n    background-color: #085bf1;\\n    font-family: 'Fredoka', sans-serif;\\n    color: #ffff10;\\n    margin: 10px;\\n    box-shadow: 5px 5px 10px gray;\\n\\n}\\n\\n.addProjectBtn:hover, .allProjectsBtn:hover {\\n    background-color: #ff0000a6;\\n}\\n\\n.projectNameBtn:hover {\\n    background-color: #085bf194;\\n}\\n\\n.check {\\n    width: 50px;\\n    height: 50px;\\n    border-radius: 100%;\\n    \\n}\\n#content {\\n    display: flex;\\n    height: 100%;\\n}\\n\\n#leftMenu {\\n    background-color: #ffff10;\\n    width: 15%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n#projectDisplay {\\n    background-color: #2d6ad5;\\n    display: flex;\\n    flex-direction: column;\\n    width: 15%;\\n    height: 100%;\\n    align-items: center;\\n    font-size: 2rem;\\n    color:#f9f9f9;\\n    text-shadow: 2px 2px grey;\\n    text-align: center;\\n}\\n\\n#taskDisplay {\\n    background-color: #f9f9f9eb;\\n    width: 70%;\\n    height: 100%;\\n    position: relative;\\n}\\n\\n.taskHolder {\\n    display: flex;\\n    justify-content: space-around;\\n    border: 1px solid black;\\n    position: relative;\\n    border-top-width: 0;\\n    border-left-width: 0;\\n    border-right-width: 0;\\n}\\n\\n.taskHolder:hover {\\n    background-color: grey;\\n    color:#f9f9f9eb;\\n}\\n\\n.websiteTitleLogo {\\n    color: red;\\n    font-size: 2rem;\\n    font-weight: 600;\\n    text-shadow: 2px 2px grey;\\n}\\n\\n.addTaskBtn {\\n    background-color: #f9f9f9;\\n    width: 50px;\\n    height: 50px;\\n    border-radius: 100%;\\n    border-style: double;\\n    font-size: 2rem;\\n    transition: 0.5s;\\n}\\n\\n.addTaskBtn:hover {\\n    width: 65px;\\n    height: 65px;\\n}\\n\\n#taskHeading{\\n    display: flex;\\n    justify-content: space-around;\\n    background-color: #ff0200;\\n    color: #f9f9f9;\\n}\\n\\n.createTaskMenu {\\n    padding: 5px;\\n    margin: 20px 0;\\n    background-color: #8db4ed;\\n    display: flex;\\n    flex-direction: column;\\n    height: 250px;\\n    justify-content: space-between;\\n}\\n\\n.dropDown {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    background-color: yellow;\\n    color: white;\\n    font-size: 1rem;\\n}\\n\\n\\n.priorityButton {\\n    font-family: 'Fredoka', sans-serif;\\n    background-color:#00cb00;\\n    color: white;\\n}\\n\\n.priorityLevelButtons {\\n    font-family: 'Fredoka', sans-serif;\\n    background-color: #149314;\\n    border: none;\\n    width: 100%;\\n    text-align: center;\\n    text-shadow: 0 0 white;\\n}\\n\\n.priorityLevelButtons:hover {\\n    background-color: green;\\n}\\n\\n.priorityDiv {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.submitBtn {\\n    background-color: #f9f9f9;\\n}\\n\\n.submitBtn:hover {\\n    background-color:#00d000;\\n}\\n\\n.taskPopUp {\\n    border: 2px solid black;\\n    background-color: #fdff00;\\n    width: 75%;\\n    height: 50%;\\n    z-index: 1;\\n    position: absolute;\\n    top: 150px;\\n    left: 115px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-around;\\n    padding: 20px;\\n\\n    animation-name: taskPopUp;\\n    animation-duration: 1s;\\n}\\n\\n.taskPopUpCloseBtn {\\n    position: absolute;\\n    top: 2%;\\n    right: 96%;\\n    border-radius: 100%;\\n    border: 1px solid black;\\n    background-color: #ff0000;\\n    color: #f9f9f9;\\n}\\n\\n@keyframes taskPopUp {\\n    from {top: 0;}\\n    to {top: 150px;}\\n}\\n\\n.allTasksMsg, .projectTasksMsg {\\n    text-align: center;\\n    font-size: 1rem;\\n    font-style: italic;\\n    font-weight: 100;\\n}\\n\\n.deleteBtn, .editBtn {\\n    border-style: none;\\n    background-color: #00c400;\\n    color: #f9f9f9;\\n    padding: 5px;\\n    margin: 10px;\\n}\\n\\n.deleteBtn:hover, .editBtn:hover {\\n    background-color: #149314;\\n}\\n\\n#projectBtnHolder {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n#deleteMenu {\\n    border: 1px solid black;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    background-color: #ff0000;\\n    text-align: center;\\n    position: absolute;\\n    height: 100%;\\n    width: 15%;\\n\\n    animation-name: deleteMenuAnimation;\\n    animation-duration: 1s;\\n}\\n\\n@keyframes deleteMenuAnimation {\\n    from {left: -200px;}\\n    to {left: 0px;}\\n}\\n\\n.editInputs {\\n    width: 33%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addButtonToProjectDisplay.js":
/*!******************************************!*\
  !*** ./src/addButtonToProjectDisplay.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addButtonToProjectDisplay\": () => (/* binding */ addButtonToProjectDisplay)\n/* harmony export */ });\n/* harmony import */ var _pushTaskToProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushTaskToProject */ \"./src/pushTaskToProject.js\");\n/* harmony import */ var _makeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeTask */ \"./src/makeTask.js\");\n\n\n\nconst addButtonToProjectDisplay = (currentProject) => {\n    const projectDisplay = document.getElementById(\"projectDisplay\");\n    const addTaskBtn = document.createElement(\"button\");\n    addTaskBtn.textContent = \"+\";\n    addTaskBtn.classList.add(\"addTaskBtn\");\n    projectDisplay.appendChild(addTaskBtn);\n\n    addTaskBtn.addEventListener(\"click\", () => {\n\n        addTaskBtn.setAttribute(\"disabled\", true);\n\n        const createTaskMenu = document.createElement(\"div\");\n        createTaskMenu.classList.add(\"createTaskMenu\");\n        projectDisplay.appendChild(createTaskMenu);\n\n        let titleInput = document.createElement(\"input\");\n        titleInput.setAttribute(\"placeholder\", \"Task Name\");\n        createTaskMenu.appendChild(titleInput);\n\n        let descriptionInput = document.createElement(\"textarea\");\n        descriptionInput.setAttribute(\"rows\", \"5\");\n        descriptionInput.setAttribute(\"placeholder\", \"Task Description\");\n        createTaskMenu.appendChild(descriptionInput);\n\n        let dueDateInput = document.createElement(\"input\");\n        dueDateInput.type=\"date\";\n        createTaskMenu.appendChild(dueDateInput);\n\n        // add drop down menu for the priority input\n        let priorityDiv = document.createElement(\"div\");\n        createTaskMenu.appendChild(priorityDiv);\n        priorityDiv.classList.add(\"priorityDiv\");\n        let priorityInput = document.createElement(\"button\");\n        priorityInput.textContent = \"Select Priority ↓\";\n        priorityInput.classList.add(\"priorityButton\");\n        priorityDiv.appendChild(priorityInput);\n        let highPriority = document.createElement(\"button\");\n        highPriority.textContent = \"High\";\n        highPriority.classList.add(\"priorityLevelButtons\");\n        let lowPriority = document.createElement(\"button\");\n        lowPriority.textContent = \"Low\";\n        lowPriority.classList.add(\"priorityLevelButtons\");\n        let dropDown = document.createElement(\"div\");\n        dropDown.classList.add(\"dropDown\");\n        priorityDiv.appendChild(dropDown);\n        dropDown.style.visibility = \"hidden\";\n        priorityInput.addEventListener(\"click\", () => {\n            dropDown.style.visibility = \"visible\";\n        });\n        dropDown.appendChild(highPriority);\n        dropDown.appendChild(lowPriority);\n        highPriority.addEventListener(\"click\", () => {\n            priorityInput.value = \"High\";\n            priorityInput.textContent = \"High Priority\";\n            dropDown.style.visibility=\"hidden\";\n        });\n        lowPriority.addEventListener(\"click\", () => {\n            priorityInput.value = \"Low\";\n            priorityInput.textContent = \"Low Priority\";\n            dropDown.style.visibility=\"hidden\";\n        });\n\n\n        let submitBtn = document.createElement(\"button\");\n        submitBtn.textContent = \"Create Task\";\n        submitBtn.classList.add(\"submitBtn\");\n        createTaskMenu.appendChild(submitBtn);\n\n        submitBtn.addEventListener(\"click\", () => {\n            (0,_pushTaskToProject__WEBPACK_IMPORTED_MODULE_0__.pushTaskToProject)((0,_makeTask__WEBPACK_IMPORTED_MODULE_1__.makeTask)(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value), currentProject);\n            addTaskBtn.removeAttribute(\"disabled\");\n            createTaskMenu.remove();\n        });\n    });\n\n}\n\n\n\n//# sourceURL=webpack://todo/./src/addButtonToProjectDisplay.js?");

/***/ }),

/***/ "./src/changeCurrentProject.js":
/*!*************************************!*\
  !*** ./src/changeCurrentProject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCurrentProject\": () => (/* binding */ changeCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushProjectToArray */ \"./src/pushProjectToArray.js\");\n/* harmony import */ var _addButtonToProjectDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addButtonToProjectDisplay */ \"./src/addButtonToProjectDisplay.js\");\n/* harmony import */ var _renderTaskDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTaskDisplay */ \"./src/renderTaskDisplay.js\");\n\n\n\n\nconst changeCurrentProject = (projectName) => {\n    const projectDisplay = document.getElementById(\"projectDisplay\");\n    projectDisplay.textContent = projectName;\n\n    let currentProject = _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.find(project => project.projectName === projectName);\n\n    console.log(\"Current project is \" + currentProject.projectName); // for debugging in console\n    console.log(currentProject);\n\n    const taskDisplay = document.getElementById(\"taskDisplay\");\n    while (taskDisplay.firstElementChild) {\n        taskDisplay.firstElementChild.remove();\n    }\n\n\n    (0,_renderTaskDisplay__WEBPACK_IMPORTED_MODULE_2__.displayAddedTasks)(currentProject);\n\n    (0,_addButtonToProjectDisplay__WEBPACK_IMPORTED_MODULE_1__.addButtonToProjectDisplay)(currentProject);\n\n    return currentProject;\n}\n\n\n\n//# sourceURL=webpack://todo/./src/changeCurrentProject.js?");

/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushProjectToArray */ \"./src/pushProjectToArray.js\");\n/* harmony import */ var _changeCurrentProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeCurrentProject */ \"./src/changeCurrentProject.js\");\n/* harmony import */ var _renderAllTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderAllTasks */ \"./src/renderAllTasks.js\");\n\n\n\n\n\nconst deleteProject = (projectName) => {\n\n    let leftMenu = document.getElementById(\"leftMenu\");\n    const deleteMenu = document.createElement(\"div\");\n    deleteMenu.setAttribute(\"id\", \"deleteMenu\");\n\n    const deleteMessage = document.createElement(\"h5\");\n    deleteMessage.textContent = \"Which Projects Would You Like to Delete?\";\n    deleteMenu.appendChild(deleteMessage);\n\n    const projectButtons = document.getElementsByClassName(\"projectNameBtn\");\n    let projectButtonsArray = Array.from(projectButtons);\n    projectButtonsArray.forEach(btn => {\n        let btnForDelete = document.createElement(\"button\");\n        btnForDelete.classList.add(\"projectNameBtn\");\n        btnForDelete.textContent = btn.textContent;\n        deleteMenu.appendChild(btnForDelete);\n\n        btnForDelete.addEventListener(\"click\", () => {\n            let projToDelete = _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.indexOf(_pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.find(element => element.projectName === btnForDelete.textContent));\n            console.log(\"INDEX IS \" + projToDelete);\n            _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.splice(projToDelete, 1);\n            console.log(\"PROJECT ARRAY IS \" + _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray);\n            deleteMenu.style.display = \"none\";\n\n            while (projectBtnHolder.firstChild) {\n                projectBtnHolder.removeChild(projectBtnHolder.firstChild);\n            }\n\n            while (deleteMenu.firstChild) {\n                deleteMenu.removeChild(deleteMenu.firstChild);\n            }\n\n            _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.forEach(project => {\n                let projectNameBtn = document.createElement(\"button\");\n                projectNameBtn.classList.add(\"projectNameBtn\");\n                projectNameBtn.textContent = project.projectName;\n                projectBtnHolder.appendChild(projectNameBtn);\n                projectNameBtn.addEventListener(\"click\", () => {\n                    (0,_changeCurrentProject__WEBPACK_IMPORTED_MODULE_1__.changeCurrentProject)(project.projectName);\n                });\n            });\n            (0,_renderAllTasks__WEBPACK_IMPORTED_MODULE_2__.renderAllTasks)();\n        });\n    });\n\n\n    leftMenu.appendChild(deleteMenu);\n\n}\n\n\n\n//# sourceURL=webpack://todo/./src/deleteProject.js?");

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushProjectToArray */ \"./src/pushProjectToArray.js\");\n/* harmony import */ var _renderTaskDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTaskDisplay */ \"./src/renderTaskDisplay.js\");\n\n\n\n\nconst deleteTask = (currentProject, title) => {\n    let selectedProject = _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.find(project => project.projectName === currentProject);\n    console.log(\"Selected Project: \" + selectedProject);\n\n    let currentTask = selectedProject.taskArray.find(task => task.title === title );\n    console.log(\"Current task: \" + currentTask);\n\n    let itemToDelete = selectedProject.taskArray.indexOf(currentTask);\n    selectedProject.taskArray.splice(itemToDelete, 1);\n    console.log(selectedProject);\n    (0,_renderTaskDisplay__WEBPACK_IMPORTED_MODULE_1__.displayAddedTasks)(selectedProject);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/deleteTask.js?");

/***/ }),

/***/ "./src/editTaskDetails.js":
/*!********************************!*\
  !*** ./src/editTaskDetails.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTaskDetails\": () => (/* binding */ editTaskDetails)\n/* harmony export */ });\n/* harmony import */ var _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushProjectToArray */ \"./src/pushProjectToArray.js\");\n/* harmony import */ var _renderTaskDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTaskDisplay */ \"./src/renderTaskDisplay.js\");\n\n\n\nconst editTaskDetails = (titleContent, descriptionContent, dueDateContent, priorityContent, currentProject, title) => {\n    const taskPopUp = document.getElementsByClassName(\"taskPopUp\")[0];\n    while (taskPopUp.firstChild) {\n        taskPopUp.removeChild(taskPopUp.firstChild);\n    }\n\n    let editTaskHeading = document.createElement(\"h3\");\n    editTaskHeading.textContent = \"Edit This Task:\";\n    taskPopUp.appendChild(editTaskHeading);\n\n    let titleEdit = document.createElement(\"input\");\n    titleEdit.setAttribute(\"value\", titleContent);\n    titleEdit.classList.add(\"editInputs\");\n    taskPopUp.appendChild(titleEdit);\n\n    let descriptionEdit = document.createElement(\"textarea\");\n    descriptionEdit.setAttribute(\"rows\", \"5\");\n    // descriptionEdit.setAttribute(\"value\", descriptionContent);\n    descriptionEdit.value = descriptionContent;\n    descriptionEdit.classList.add(\"editInputs\");\n    taskPopUp.appendChild(descriptionEdit);\n  \n\n    let dueDateEdit = document.createElement(\"input\");\n    dueDateEdit.setAttribute(\"type\", \"date\");\n    dueDateEdit.classList.add(\"editInputs\");\n    taskPopUp.appendChild(dueDateEdit);\n\n    let priorityEdit = document.createElement(\"input\");\n    taskPopUp.appendChild(priorityEdit);\n    priorityEdit.classList.add(\"editInputs\");\n    priorityEdit.setAttribute(\"value\", priorityContent);\n\n    let finishEditBtn = document.createElement(\"button\");\n    finishEditBtn.classList.add(\"editBtn\");\n    finishEditBtn.textContent = \"Complete Edits\";\n    taskPopUp.appendChild(finishEditBtn);\n\n\n    finishEditBtn.addEventListener(\"click\", () => {\n\n        console.log(currentProject);\n        let currentProjectToEdit = _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.find(project => project.projectName === currentProject);\n\n\n        let currentTask = currentProjectToEdit.taskArray.find(task => task.title === titleContent);\n        currentTask.title = titleEdit.value;\n        currentTask.description = descriptionEdit.value;\n        currentTask.dueDate = dueDateEdit.value;\n        currentTask.priority = priorityEdit.value;\n\n        console.log(currentProjectToEdit); //for debugging\n\n\n        (0,_renderTaskDisplay__WEBPACK_IMPORTED_MODULE_1__.displayAddedTasks)(currentProjectToEdit);\n\n    });\n\n\n}\n\n\n\n//# sourceURL=webpack://todo/./src/editTaskDetails.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _renderLeftMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderLeftMenu */ \"./src/renderLeftMenu.js\");\n/* harmony import */ var _renderProjectDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderProjectDisplay */ \"./src/renderProjectDisplay.js\");\n/* harmony import */ var _renderTaskDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTaskDisplay */ \"./src/renderTaskDisplay.js\");\n\n\n\n\n\n(0,_renderLeftMenu__WEBPACK_IMPORTED_MODULE_1__.renderLeftMenu)();\n(0,_renderProjectDisplay__WEBPACK_IMPORTED_MODULE_2__.renderProjectDisplay)();\n(0,_renderTaskDisplay__WEBPACK_IMPORTED_MODULE_3__.renderTaskDisplay)();\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/makeProject.js":
/*!****************************!*\
  !*** ./src/makeProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeProject\": () => (/* binding */ makeProject)\n/* harmony export */ });\n\nconst makeProject = (projectName) => {\n    let taskArray = [];\n\n    return { taskArray, projectName };\n}\n\n\n\n//# sourceURL=webpack://todo/./src/makeProject.js?");

/***/ }),

/***/ "./src/makeTask.js":
/*!*************************!*\
  !*** ./src/makeTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeTask\": () => (/* binding */ makeTask)\n/* harmony export */ });\nconst makeTask = (title, description, dueDate, priority) => {\n    return { title, description, dueDate, priority };\n}\n\n\n\n//# sourceURL=webpack://todo/./src/makeTask.js?");

/***/ }),

/***/ "./src/pushProjectToArray.js":
/*!***********************************!*\
  !*** ./src/pushProjectToArray.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectArray\": () => (/* binding */ projectArray),\n/* harmony export */   \"pushToProjectArray\": () => (/* binding */ pushToProjectArray)\n/* harmony export */ });\n\nlet projectArray = [];\n\nconst pushToProjectArray = (newProject) => {\n    projectArray.push(newProject);\n    console.log(projectArray);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/pushProjectToArray.js?");

/***/ }),

/***/ "./src/pushTaskToProject.js":
/*!**********************************!*\
  !*** ./src/pushTaskToProject.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pushTaskToProject\": () => (/* binding */ pushTaskToProject)\n/* harmony export */ });\n/* harmony import */ var _renderTaskDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTaskDisplay */ \"./src/renderTaskDisplay.js\");\n\n\nconst pushTaskToProject = (task, currentProject) => {\n    currentProject.taskArray.push(task);\n    console.log(currentProject);\n    (0,_renderTaskDisplay__WEBPACK_IMPORTED_MODULE_0__.displayAddedTasks)(currentProject);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/pushTaskToProject.js?");

/***/ }),

/***/ "./src/renderAllTasks.js":
/*!*******************************!*\
  !*** ./src/renderAllTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAllTasks\": () => (/* binding */ renderAllTasks)\n/* harmony export */ });\n/* harmony import */ var _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushProjectToArray */ \"./src/pushProjectToArray.js\");\n/* harmony import */ var _renderTaskDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTaskDisplay */ \"./src/renderTaskDisplay.js\");\n/* harmony import */ var _renderTaskHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTaskHeading */ \"./src/renderTaskHeading.js\");\n/* harmony import */ var _renderTaskDetailsPopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTaskDetailsPopUp */ \"./src/renderTaskDetailsPopUp.js\");\n/* harmony import */ var _changeCurrentProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeCurrentProject */ \"./src/changeCurrentProject.js\");\n\n\n\n\n\n\nconst renderAllTasks = () => {\n    \n    const projectDisplay = document.getElementById(\"projectDisplay\");\n    projectDisplay.textContent = \"All Tasks\";\n    // this has a lot of repeated code from renderTaskDisplay. Let's try to refactor?\n\n    const taskDisplay = document.getElementById(\"taskDisplay\");\n\n\n    while (taskDisplay.firstElementChild) {\n        taskDisplay.firstElementChild.remove();\n    }\n\n    (0,_renderTaskHeading__WEBPACK_IMPORTED_MODULE_2__.renderTaskHeading)();\n\n    _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.forEach(currentProject => {\n        currentProject.taskArray.forEach(task => {\n            let taskHolder = document.createElement(\"div\");\n            taskHolder.classList.add(\"taskHolder\");\n            taskDisplay.appendChild(taskHolder);\n    \n            let taskTitle = document.createElement(\"p\");\n            taskTitle.textContent = task.title;\n            taskHolder.appendChild(taskTitle);\n    \n            let taskDueDate = document.createElement(\"p\");\n            taskDueDate.textContent = task.dueDate;\n            taskHolder.appendChild(taskDueDate);\n    \n            taskHolder.addEventListener(\"click\", () => {\n                (0,_changeCurrentProject__WEBPACK_IMPORTED_MODULE_4__.changeCurrentProject)(currentProject.projectName);\n            });\n        });\n    });\n    const allTasksMsg = document.createElement(\"p\");\n    allTasksMsg.classList.add(\"allTasksMsg\");\n    allTasksMsg.textContent = \"Click a task to be taken to its project listing\";\n    taskDisplay.appendChild(allTasksMsg);\n\n}\n\n\n\n//# sourceURL=webpack://todo/./src/renderAllTasks.js?");

/***/ }),

/***/ "./src/renderLeftMenu.js":
/*!*******************************!*\
  !*** ./src/renderLeftMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderLeftMenu\": () => (/* binding */ renderLeftMenu)\n/* harmony export */ });\n/* harmony import */ var _greenCheck_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greenCheck.png */ \"./src/greenCheck.png\");\n/* harmony import */ var _renderAllTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderAllTasks */ \"./src/renderAllTasks.js\");\n/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteProject */ \"./src/deleteProject.js\");\n/* harmony import */ var _renderProjectButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderProjectButtons */ \"./src/renderProjectButtons.js\");\n\n\n\n\n\n\nconst renderLeftMenu = () => {\n    const content = document.getElementById(\"content\");\n\n    const leftMenu = document.createElement(\"div\");\n    leftMenu.setAttribute(\"id\", \"leftMenu\");\n\n    const websiteTitleLogo = document.createElement(\"div\");\n    websiteTitleLogo.classList.add(\"websiteTitleLogo\");\n    websiteTitleLogo.textContent = \"To-Do List\";\n    leftMenu.appendChild(websiteTitleLogo);\n\n    const check = new Image();\n    check.src = _greenCheck_png__WEBPACK_IMPORTED_MODULE_0__;\n    check.classList.add(\"check\");\n    leftMenu.appendChild(check); // may revisit this image src\n\n    content.appendChild(leftMenu);\n\n    const addProjectBtn = document.createElement(\"button\");\n    addProjectBtn.classList.add(\"addProjectBtn\");\n    addProjectBtn.textContent = \"Add Project To WorkSpace\";\n    leftMenu.appendChild(addProjectBtn);\n    addProjectBtn.addEventListener(\"click\",() => {\n        while (projectBtnHolder.firstChild) {\n            projectBtnHolder.removeChild(projectBtnHolder.firstChild);\n        }\n        (0,_renderProjectButtons__WEBPACK_IMPORTED_MODULE_3__.renderProjectButtons)();\n    });\n\n    const allProjectsBtn = document.createElement(\"button\");\n    allProjectsBtn.textContent = \"View All Tasks From All Projects\";\n    allProjectsBtn.classList.add(\"allProjectsBtn\");\n    leftMenu.appendChild(allProjectsBtn);\n    allProjectsBtn.addEventListener(\"click\", () => {\n        (0,_renderAllTasks__WEBPACK_IMPORTED_MODULE_1__.renderAllTasks)();\n    });\n\n    const deleteProjectBtn = document.createElement(\"button\");\n    deleteProjectBtn.textContent = \"Delete A Project From Workspace\";\n    deleteProjectBtn.classList.add(\"allProjectsBtn\");\n    leftMenu.appendChild(deleteProjectBtn);\n\n    deleteProjectBtn.addEventListener(\"click\", () => {\n        (0,_deleteProject__WEBPACK_IMPORTED_MODULE_2__.deleteProject)();\n        \n    });\n\n    let projectBtnHolder = document.createElement(\"div\");\n    projectBtnHolder.setAttribute(\"id\", \"projectBtnHolder\");\n    leftMenu.appendChild(projectBtnHolder);\n}\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/renderLeftMenu.js?");

/***/ }),

/***/ "./src/renderProjectButtons.js":
/*!*************************************!*\
  !*** ./src/renderProjectButtons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjectButtons\": () => (/* binding */ renderProjectButtons)\n/* harmony export */ });\n/* harmony import */ var _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushProjectToArray */ \"./src/pushProjectToArray.js\");\n/* harmony import */ var _changeCurrentProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeCurrentProject */ \"./src/changeCurrentProject.js\");\n/* harmony import */ var _makeProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeProject */ \"./src/makeProject.js\");\n\n\n\n\n\nconst renderProjectButtons = () => {\n    let projectName = prompt(\"What is the project named?\");\n    \n    (0,_pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.pushToProjectArray)((0,_makeProject__WEBPACK_IMPORTED_MODULE_2__.makeProject)(projectName));\n\n    _pushProjectToArray__WEBPACK_IMPORTED_MODULE_0__.projectArray.forEach(project => {\n        let projectNameBtn = document.createElement(\"button\");\n        projectNameBtn.classList.add(\"projectNameBtn\");\n        projectNameBtn.textContent = project.projectName;\n        projectBtnHolder.appendChild(projectNameBtn);\n        projectNameBtn.addEventListener(\"click\", () => {\n            (0,_changeCurrentProject__WEBPACK_IMPORTED_MODULE_1__.changeCurrentProject)(project.projectName);\n        });\n    });\n\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/renderProjectButtons.js?");

/***/ }),

/***/ "./src/renderProjectDisplay.js":
/*!*************************************!*\
  !*** ./src/renderProjectDisplay.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjectDisplay\": () => (/* binding */ renderProjectDisplay)\n/* harmony export */ });\n\nconst renderProjectDisplay = () => {\n    const content = document.getElementById(\"content\");\n\n    const projectDisplay = document.createElement(\"div\");\n    projectDisplay.setAttribute(\"id\", \"projectDisplay\");\n\n    content.appendChild(projectDisplay);\n\n}\n\n\n\n//# sourceURL=webpack://todo/./src/renderProjectDisplay.js?");

/***/ }),

/***/ "./src/renderTaskDetailsPopUp.js":
/*!***************************************!*\
  !*** ./src/renderTaskDetailsPopUp.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTaskDetailsPopUp\": () => (/* binding */ renderTaskDetailsPopUp)\n/* harmony export */ });\n/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask.js */ \"./src/deleteTask.js\");\n/* harmony import */ var _editTaskDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTaskDetails.js */ \"./src/editTaskDetails.js\");\n\n\n\nconst renderTaskDetailsPopUp = (title, description, dueDate, priority) => {\n\n    const taskDisplay = document.getElementById(\"taskDisplay\");\n\n    const taskPopUp = document.createElement(\"div\");\n    taskPopUp.classList.add(\"taskPopUp\");\n    taskPopUp.style.visibility = \"visible\";\n\n    let taskTitle = document.createElement(\"h1\");\n    taskTitle.textContent = title;\n    taskPopUp.appendChild(taskTitle);\n\n    let taskDescription = document.createElement(\"p\");\n    taskDescription.textContent = description;\n    taskPopUp.appendChild(taskDescription);\n\n    let taskDueDate = document.createElement(\"h3\");\n    taskDueDate.textContent = \"Due Date: \" + dueDate;\n    taskPopUp.appendChild(taskDueDate);\n\n    let taskPriority = document.createElement(\"h4\");\n    taskPriority.textContent = priority + \" Priority\";\n    taskPopUp.appendChild(taskPriority);\n\n    let closeBtn = document.createElement(\"button\");\n    closeBtn.classList.add(\"taskPopUpCloseBtn\")\n    closeBtn.textContent = \"X\";\n    taskPopUp.appendChild(closeBtn);\n\n    closeBtn.addEventListener(\"click\", () => {\n        taskPopUp.remove();\n    });\n\n    let deleteBtn = document.createElement(\"button\");\n    deleteBtn.classList.add(\"deleteBtn\");\n    deleteBtn.textContent = \"Delete This Task\";\n    taskPopUp.appendChild(deleteBtn);\n\n    let editBtn = document.createElement(\"button\");\n    editBtn.classList.add(\"editBtn\");\n    editBtn.textContent = \"Edit This Task\";\n    taskPopUp.appendChild(editBtn);\n\n    taskDisplay.appendChild(taskPopUp);\n\n    let currentProjectText = document.getElementById(\"projectDisplay\");\n    let currentProject = currentProjectText.textContent.slice(0, currentProjectText.textContent.length - 1); // to get rid of + sign from textContent\n    deleteBtn.addEventListener(\"click\", () => {\n        (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(currentProject, title);\n    });\n\n    editBtn.addEventListener(\"click\", () => {\n        (0,_editTaskDetails_js__WEBPACK_IMPORTED_MODULE_1__.editTaskDetails)(taskTitle.textContent, taskDescription.textContent, taskDueDate.textContent, taskPriority.textContent, currentProject, title);\n    });\n\n}\n\n\n\n//# sourceURL=webpack://todo/./src/renderTaskDetailsPopUp.js?");

/***/ }),

/***/ "./src/renderTaskDisplay.js":
/*!**********************************!*\
  !*** ./src/renderTaskDisplay.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAddedTasks\": () => (/* binding */ displayAddedTasks),\n/* harmony export */   \"renderTaskDisplay\": () => (/* binding */ renderTaskDisplay)\n/* harmony export */ });\n/* harmony import */ var _renderTaskHeading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTaskHeading */ \"./src/renderTaskHeading.js\");\n/* harmony import */ var _renderTaskDetailsPopUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTaskDetailsPopUp */ \"./src/renderTaskDetailsPopUp.js\");\n\n\n\nconst renderTaskDisplay = () => {\n    const content = document.getElementById(\"content\");\n\n    const taskDisplay = document.createElement(\"div\");\n    taskDisplay.setAttribute(\"id\", \"taskDisplay\");\n    content.appendChild(taskDisplay);\n\n    (0,_renderTaskHeading__WEBPACK_IMPORTED_MODULE_0__.renderTaskHeading)();\n\n}\n\nconst displayAddedTasks = (currentProject) => {\n    const taskDisplay = document.getElementById(\"taskDisplay\");\n\n\n    while (taskDisplay.firstElementChild) {\n        taskDisplay.firstElementChild.remove();\n    }\n\n    (0,_renderTaskHeading__WEBPACK_IMPORTED_MODULE_0__.renderTaskHeading)();\n\n    currentProject.taskArray.forEach(task => {\n        let taskHolder = document.createElement(\"div\");\n        taskHolder.classList.add(\"taskHolder\");\n        taskDisplay.appendChild(taskHolder);\n        taskHolder.addEventListener(\"click\", () => {\n            (0,_renderTaskDetailsPopUp__WEBPACK_IMPORTED_MODULE_1__.renderTaskDetailsPopUp)(task.title, task.description, task.dueDate, task.priority);\n        });\n\n        let taskTitle = document.createElement(\"p\");\n        taskTitle.textContent = task.title;\n        taskHolder.appendChild(taskTitle);\n\n        let taskDueDate = document.createElement(\"p\");\n        taskDueDate.textContent = task.dueDate;\n        taskHolder.appendChild(taskDueDate);\n\n    });\n\n    const projectTasksMsg = document.createElement(\"p\");\n    projectTasksMsg.classList.add(\"projectTasksMsg\");\n    projectTasksMsg.textContent = \"Click a task to view more details\";\n    taskDisplay.appendChild(projectTasksMsg);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/renderTaskDisplay.js?");

/***/ }),

/***/ "./src/renderTaskHeading.js":
/*!**********************************!*\
  !*** ./src/renderTaskHeading.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTaskHeading\": () => (/* binding */ renderTaskHeading)\n/* harmony export */ });\nconst renderTaskHeading = () => {\n    const taskDisplay = document.getElementById(\"taskDisplay\");\n\n    const taskHeading = document.createElement(\"div\");\n    taskHeading.setAttribute(\"id\", \"taskHeading\");\n    taskDisplay.appendChild(taskHeading);\n\n\n    const titleHeading = document.createElement(\"p\");\n    titleHeading.textContent = \"Task Name\";\n    taskHeading.appendChild(titleHeading);\n\n    // const descriptionHeading = document.createElement(\"p\");\n    // descriptionHeading.textContent = \"Description\";\n    // taskHeading.appendChild(descriptionHeading);\n\n    const dueDateHeading = document.createElement(\"p\");\n    dueDateHeading.textContent = \"Due Date\";\n    taskHeading.appendChild(dueDateHeading);\n\n    // const priorityHeading = document.createElement(\"p\");\n    // priorityHeading.textContent = \"Priority\";\n    // taskHeading.appendChild(priorityHeading);\n}\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/renderTaskHeading.js?");

/***/ }),

/***/ "./src/greenCheck.png":
/*!****************************!*\
  !*** ./src/greenCheck.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc33bca1dcb9cba70ebc.png\";\n\n//# sourceURL=webpack://todo/./src/greenCheck.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;