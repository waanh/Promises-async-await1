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

/***/ "./src/GameSavingLoader.js":
/*!*********************************!*\
  !*** ./src/GameSavingLoader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameSavingLoader)\n/* harmony export */ });\n/* harmony import */ var _reader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reader.js */ \"./src/reader.js\");\n/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser.js */ \"./src/parser.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar GameSavingLoader = /*#__PURE__*/function () {\n  function GameSavingLoader() {\n    _classCallCheck(this, GameSavingLoader);\n  }\n  return _createClass(GameSavingLoader, null, [{\n    key: \"load\",\n    value: function load() {\n      return (0,_reader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(function (data) {\n        return (0,_parser_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n      }).then(function (jsonData) {\n        return JSON.parse(jsonData);\n      })[\"catch\"](function (error) {\n        throw new Error('Error loading game saving data');\n      });\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://promises-async-await1/./src/GameSavingLoader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameSavingLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSavingLoader */ \"./src/GameSavingLoader.js\");\n\n_GameSavingLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"].load().then(function (saving) {\n  console.log(saving);\n})[\"catch\"](function (error) {\n  console.error(error);\n});\n\n//# sourceURL=webpack://promises-async-await1/./src/index.js?");

/***/ }),

/***/ "./src/parser.js":
/*!***********************!*\
  !*** ./src/parser.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ json)\n/* harmony export */ });\nfunction json(data) {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));\n    }, 500);\n  });\n}\n\n//# sourceURL=webpack://promises-async-await1/./src/parser.js?");

/***/ }),

/***/ "./src/reader.js":
/*!***********************!*\
  !*** ./src/reader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ read)\n/* harmony export */ });\nfunction read() {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      var data = '{\"id\":9,\"created\":1546300800,\"userInfo\":{\"id\":1,\"name\":\"Hitman\",\"level\":10,\"points\":2000}}';\n      var buffer = new ArrayBuffer(data.length * 2);\n      var bufferView = new Uint16Array(buffer);\n      for (var i = 0; i < data.length; i++) {\n        bufferView[i] = data.charCodeAt(i);\n      }\n      resolve(buffer);\n    }, 1000);\n  });\n}\n\n//# sourceURL=webpack://promises-async-await1/./src/reader.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;