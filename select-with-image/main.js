/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"items\", function() { return items; });\nconst items = [\r\n  {\r\n    \"image_url\": 'data:image/png;base64,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',\r\n    \"title\": 'First'\r\n  },\r\n  {\r\n    \"image_url\": 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADlCAMAAAAP8WnWAAAAZlBMVEX/////hV3/gFX/fVD/g1r/h1//mHj/5t//kG3/yLn/4dn/xLT/wK//imT/kGv/6uP/ekv/ooX/vKn/8/D/spv/zL7/2c7/+Pb/0MP/l3b/qpH/3tT/t6P/noH/lHH/sJj/p4z/1cl7+eSMAAAFkUlEQVR4nO2d63riIBBACUGtWhWvibbe3v8ld7s1ZsItIYIEds7PfiNyGkUgzIQQBEEQBEH+e1brxWgYLHaFY7cDZywbBozSrVu5PLQShJ2dut0HJZdxp5duSkP7NMgnKIdyQI4Fxa8cu4xDsvQq57ZVa+ZeuvGUm7ls1ZpPlLMF5fyDctagnH9QzhqU8w/KWYNy/gkmN9usL+dTadx2+43Z994BCSR3WOb072qS5vlG28jXhf/EMMqvPXcew8ht+HOVTBeaC/MJYtiqVzeCyO3gzh9jyuvy3YjJe9mFkCt5BmFLRcxdiMn6dCOEnLjRnk/lmJEQRPXfTT0B5KbidjQbSTF7acua9hhUAsiNpVskcthajjnYdyOAHBf7ndG5GCNv6tJP+268X65QyH2LQYqYnX034pG72ndjoB9L+RZYn+EygNxRHiy+xJhzrAPKpzRaUG0DQC6On4JC7Lj8lSOFeOX6jCdBZijz5jeKMVULwreuz294mInzrdFzrnzrUzOm16o3zJLnVI+YTBdzrZc8TB5xOhFosbpnOftdiK616+xyVMWce67Fg20zlKfLYjneGN/2fjq2xpjADSJrUM4/KGcNyvkH5axBOf+gnDUo5x+Uswbl/PNfypXHxQuMsiHL3bibk9NDlCvlLe9eDFJO3s1OSO4D5VAuJC1yKY6WT7mPZS8WMcjJZyi6sR/yDOVVuUFPv1DOAMr5B+WsQTn/oJw1KOcflLMG5fyDctagnH9QzhqU8w/KWYNy/kE5a1DOPyhnDcr5B+WsQTn/oJw1KOcflLMG5fzjWS5s8U6/cvR7P9VhLC200r+uO/sb8ymXUQNcnx2946YXdqY6KuRJzoi2uNLacQHvEHK65O91t1cPXE493pxduzmWKzvKqX4p3LsJheFfldt2OyOtkhu7d2OLxju8Ktes2mUj58Et481qIy/LkQ3P9VQCstyxdqNVNJP+Yge7N9/jdTlSzPR862ZnwC2/VtHXR2doaWhSjzRoOZAzoZt6XoBb/Qv/nET1K7gnEUZO7UY2KcgtgRusbZOAXAGO+zfcEpArFrUbb845o5eDbuJ8Ona5AlR85GJRvcjltguDW+Ry2wy4yYU8o5bbjoxuUcttwfPO+F4RHbFc4zOpcotYbkuBW6mMjlVu0vhMqt1ilaNT6HbXREcql4Flt9YtWjngpi88Gr2cqahq7HLcVOIxcjlz+cq45Vru4kUt13aHMmI51nqDMl65drd45bo8HyNWOUY7dDgyuUNeuXUp8xuZHPmdL3e6bvHJTX4eOURZt/LMscmR7fVy3HQshx6dnA0oZwHKvQuUswDl3gXKWYBy7wLlLEC5d4FyFqDcu0A5C1DuXfg6b5lN5yZMm/xFaXxpd6bVM1edy5nTSfKjtoU9z51krMCkFddyLdCLpoEvR/XJIe+Wy+hY3YD8RM4I5TK6Vjbg4cI5k7P4x9Pbu+R4z+cHimxo+3tV5Krn8nqQE5JWXmBkY6dI8nMvx4wnHqzYjk3pKo2cFWWSXyXH+mWoyPCsx+N/9XqTFjZ1LlIuPXj5IcfGq7ZmOuJoMOkMyLSSDkpWcuqxNAZ2wE44Thi/HLnV3zvhYFoCcjB1tnnEKQU5mKjYOFCShFwjVRGMaGnIgWkoPHiRiBxIMWLZ0y4ROVIwYFcdUEhFDqZ0sOXDLhk5sqqzndnH75/SkSOTeqryWJonJEdmXLBLSY4cgN2PUFJy5A7sbqnJkX1t93dpnpgcmQO7ag8mGTkClubPY77JyCmKoCQkR06iXUpycGmenpxYHSktOaGGUGJyzXsoqcmRJUtYDlbISE4O1lpITw5k7ScoR1bP6dcpdFc8MHlMonNNRYK4mf3bVqHL0P3ww4zlOV93TEWKj8mXoxv0CIIgCIIgSIT8AWPKfVLUwzQQAAAAAElFTkSuQmCC',\r\n    \"title\": 'Second'\r\n  },\r\n  {\r\n    \"image_url\": 'data:image/png;base64,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',\r\n    \"title\": 'Third'\r\n  },\r\n  {\r\n    \"image_url\": 'data:image/png;base64,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',\r\n    \"title\": 'Fouth'\r\n  },\r\n  {\r\n    \"image_url\": 'data:image/png;base64,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',\r\n    \"title\": 'Fifth'\r\n  }\r\n];\n\n//# sourceURL=webpack:///./src/items.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDom */ \"./src/js/createDom.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items */ \"./src/items.js\");\n\r\n\r\n\r\n\r\nconst select = _createDom__WEBPACK_IMPORTED_MODULE_1__[\"createSelect\"]('mySelect');\r\nconst div = _createDom__WEBPACK_IMPORTED_MODULE_1__[\"createDiv\"]('selector');\r\ndiv.appendChild(select);\r\ndocument.body.append(div);\r\n_createDom__WEBPACK_IMPORTED_MODULE_1__[\"createSelectTable\"](select, _items__WEBPACK_IMPORTED_MODULE_2__[\"items\"]);\r\nselect.focus();\r\n\r\n_createDom__WEBPACK_IMPORTED_MODULE_1__[\"setValueSelect\"](select, 'Second');\r\n\r\nselect.addEventListener('click', function () {\r\n   const element = document.getElementsByClassName('select-items');\r\n   element[0].classList.toggle('open');\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/createDom.js":
/*!*****************************!*\
  !*** ./src/js/createDom.js ***!
  \*****************************/
/*! exports provided: createDiv, setValueSelect, createSelect, createSelectTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDiv\", function() { return createDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setValueSelect\", function() { return setValueSelect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSelect\", function() { return createSelect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSelectTable\", function() { return createSelectTable; });\nfunction createDiv(className, id = '') {\r\n    const div = document.createElement('div');\r\n    div.className = className;\r\n    if(id !== '') {\r\n        div.setAttribute('id', id);\r\n    }\r\n    return div;\r\n};\r\n\r\n\r\nfunction setValueSelect(select, value) {\r\n    select.value = value;\r\n    const checkedNode = document.querySelector(`.select-items .item[value=${value}]`);\r\n    checkedNode.classList.toggle('active');\r\n}\r\n\r\nfunction createSelect(id) {\r\n    const select = document.createElement('input');\r\n    select.setAttribute('id', id);\r\n    return select;\r\n};\r\n\r\nfunction createOption({ title, image_url }) {\r\n    const option = createDiv('item');\r\n    option.setAttribute('value', title);\r\n    const image = document.createElement('img');\r\n    image.src = image_url;\r\n    image.alt = title;\r\n    const simplyText = document.createTextNode(title);\r\n    option.append(image, simplyText);\r\n    return option;\r\n}\r\n\r\nconst removeActiveSelect = () => {\r\n    const active = document.querySelector('.select-items .item.active');\r\n    if(active) active.classList.remove('active');\r\n};\r\n\r\nfunction createSelectTable(select, items) {\r\n    const container = createDiv('select-items');\r\n    items.forEach(item => {\r\n        const div = createOption(item);\r\n        container.appendChild(div);\r\n    });\r\n    container.addEventListener('click', function (event) {\r\n        const checked = event.target.getAttribute('alt') || event.target.getAttribute('value');\r\n       console.log(checked);\r\n\r\n        document.getElementById('mySelect').value = checked;\r\n        const checkedNode = document.querySelector(`.select-items .item[value=${checked}]`);\r\n        removeActiveSelect();\r\n        checkedNode.classList.toggle('active');\r\n\r\n        const element = document.getElementsByClassName('select-items');\r\n        element[0].classList.toggle('open');\r\n    });\r\n    select.parentNode.appendChild(container);\r\n}\n\n//# sourceURL=webpack:///./src/js/createDom.js?");

/***/ })

/******/ });