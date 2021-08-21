module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/getAllPostIds.ts":
/*!******************************!*\
  !*** ./lib/getAllPostIds.ts ***!
  \******************************/
/*! exports provided: getAllPostIds, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPostIds", function() { return getAllPostIds; });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prisma/client */ "./prisma/client.ts");

async function getAllPostIds() {
  const posts = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__["default"].post.findMany();
  const paths = posts.map(post => {
    return {
      params: {
        id: post.id
      }
    };
  });
  return paths;
}
/* harmony default export */ __webpack_exports__["default"] = (getAllPostIds);

/***/ }),

/***/ "./pages/post/[id].tsx":
/*!*****************************!*\
  !*** ./pages/post/[id].tsx ***!
  \*****************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "babel-plugin-superjson-next/tools");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../prisma/client */ "./prisma/client.ts");
/* harmony import */ var _lib_getAllPostIds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/getAllPostIds */ "./lib/getAllPostIds.ts");



var _jsxFileName = "/home/jidayyy/SouthWestFishing/pages/post/[id].tsx";



function article(props) {
  console.log(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-white",
    children: props.post.id
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONPage"])(article));
const getStaticProps = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONProps"])(async function getStaticProps(params) {
  const {
    id
  } = params.params;
  console.log(id);
  const post = await _prisma_client__WEBPACK_IMPORTED_MODULE_2__["default"].post.findUnique({
    where: {
      id: id
    },
    rejectOnNotFound: true
  });
  return {
    props: {
      post
    }
  };
}, []);
async function getStaticPaths() {
  const paths = await Object(_lib_getAllPostIds__WEBPACK_IMPORTED_MODULE_3__["default"])();
  console.log(paths);
  return {
    paths,
    fallback: false
  };
}

/***/ }),

/***/ "./prisma/client.ts":
/*!**************************!*\
  !*** ./prisma/client.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__["PrismaClient"]();
/* harmony default export */ __webpack_exports__["default"] = (prisma);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2dldEFsbFBvc3RJZHMudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC8udHN4Iiwid2VicGFjazovLy8uL3ByaXNtYS9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnZXRBbGxQb3N0SWRzIiwicG9zdHMiLCJwcmlzbWEiLCJwb3N0IiwiZmluZE1hbnkiLCJwYXRocyIsIm1hcCIsInBhcmFtcyIsImlkIiwiYXJ0aWNsZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwicmVqZWN0T25Ob3RGb3VuZCIsImdldFN0YXRpY1BhdGhzIiwiZmFsbGJhY2siLCJQcmlzbWFDbGllbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFDTyxlQUFlQSxhQUFmLEdBQStCO0FBQ2xDLFFBQU1DLEtBQUssR0FBRyxNQUFNQyxzREFBTSxDQUFDQyxJQUFQLENBQVlDLFFBQVosRUFBcEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssR0FBTixDQUFXSCxJQUFELElBQVU7QUFDOUIsV0FBTztBQUNISSxZQUFNLEVBQUU7QUFDSkMsVUFBRSxFQUFFTCxJQUFJLENBQUNLO0FBREw7QUFETCxLQUFQO0FBS0gsR0FOYSxDQUFkO0FBUUEsU0FBT0gsS0FBUDtBQUNIO0FBQ2NMLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUdBOztBQU9lLFNBQVNTLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQTZDO0FBQ3hEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUVBLHNCQUFPO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSxjQUE2QkEsS0FBSyxDQUFDUCxJQUFOLENBQVdLO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztBQUpjLDJKQUFTQyxPQUF4QjtBQU1PLE1BQWVJLGNBQXRCLCtHQUFzQkEsY0FBdEIsQ0FDSU4sTUFESixFQUV5QztBQUNyQyxRQUFNO0FBQUVDO0FBQUYsTUFBU0QsTUFBTSxDQUFDQSxNQUF0QjtBQUNBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUosRUFBWjtBQUNBLFFBQU1MLElBQUksR0FBRyxNQUFNRCxzREFBTSxDQUFDQyxJQUFQLENBQVlXLFVBQVosQ0FBdUI7QUFDdENDLFNBQUssRUFBRTtBQUNIUCxRQUFFLEVBQUVBO0FBREQsS0FEK0I7QUFJdENRLG9CQUFnQixFQUFFO0FBSm9CLEdBQXZCLENBQW5CO0FBTUEsU0FBTztBQUNITixTQUFLLEVBQUU7QUFDSFA7QUFERztBQURKLEdBQVA7QUFLSCxDQWhCRDtBQWtCTyxlQUFlYyxjQUFmLEdBQWdDO0FBQ25DLFFBQU1aLEtBQUssR0FBRyxNQUFNTCxrRUFBYSxFQUFqQztBQUNBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWjtBQUNBLFNBQU87QUFDSEEsU0FERztBQUVIYSxZQUFRLEVBQUU7QUFGUCxHQUFQO0FBSUgsQzs7Ozs7Ozs7Ozs7O0FDekNEO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTWhCLE1BQU0sR0FBRyxJQUFJaUIsMkRBQUosRUFBZjtBQUVlakIscUVBQWYsRTs7Ozs7Ozs7Ozs7QUNKQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wb3N0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Bvc3QvW2lkXS50c3hcIik7XG4iLCJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi9wcmlzbWEvY2xpZW50XCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdElkcygpIHtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHByaXNtYS5wb3N0LmZpbmRNYW55KCk7XG4gICAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBwb3N0LmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXRocztcbn1cbmV4cG9ydCBkZWZhdWx0IGdldEFsbFBvc3RJZHM7XG4iLCJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9wcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc1Jlc3VsdCB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBnZXRBbGxQb3N0SWRzIGZyb20gXCIuLi8uLi9saWIvZ2V0QWxsUG9zdElkc1wiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XG50eXBlIElQcm9wcyA9IHtcbiAgICBwb3N0OiBQb3N0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFydGljbGUocHJvcHM6IElQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3Byb3BzLnBvc3QuaWR9PC9kaXY+O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoXG4gICAgcGFyYW1zOiBQYXJhbXMsXG4pOiBQcm9taXNlPEdldFN0YXRpY1Byb3BzUmVzdWx0PElQcm9wcz4+IHtcbiAgICBjb25zdCB7IGlkIH0gPSBwYXJhbXMucGFyYW1zO1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdE9uTm90Rm91bmQ6IHRydWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3QsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUG9zdElkcygpO1xuICAgIGNvbnNvbGUubG9nKHBhdGhzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=