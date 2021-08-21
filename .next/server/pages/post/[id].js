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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPostIds\", function() { return getAllPostIds; });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prisma/client */ \"./prisma/client.ts\");\n\nasync function getAllPostIds() {\n  const posts = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findMany();\n  const paths = posts.map(post => {\n    return {\n      params: {\n        id: post.id\n      }\n    };\n  });\n  return paths;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAllPostIds);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ2V0QWxsUG9zdElkcy50cz8xMjM1Il0sIm5hbWVzIjpbImdldEFsbFBvc3RJZHMiLCJwb3N0cyIsInByaXNtYSIsInBvc3QiLCJmaW5kTWFueSIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwiaWQiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ08sZUFBZUEsYUFBZixHQUVMO0FBQ0UsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLHNEQUFNLENBQUNDLElBQVAsQ0FBWUMsUUFBWixFQUFwQjtBQUNBLFFBQU1DLEtBQUssR0FBR0osS0FBSyxDQUFDSyxHQUFOLENBQVdILElBQUQsSUFBVTtBQUM5QixXQUFPO0FBQ0hJLFlBQU0sRUFBRTtBQUNKQyxVQUFFLEVBQUVMLElBQUksQ0FBQ0s7QUFETDtBQURMLEtBQVA7QUFLSCxHQU5hLENBQWQ7QUFRQSxTQUFPSCxLQUFQO0FBQ0g7QUFDY0wsNEVBQWYiLCJmaWxlIjoiLi9saWIvZ2V0QWxsUG9zdElkcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLnByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uL3ByaXNtYS9jbGllbnRcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0SWRzKCk6IFByb21pc2U8XG4gICAgeyBwYXJhbXM6IHsgaWQ6IFBvc3RbXCJpZFwiXSB9IH1bXVxuPiB7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSgpO1xuICAgIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZDogcG9zdC5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGF0aHM7XG59XG5leHBvcnQgZGVmYXVsdCBnZXRBbGxQb3N0SWRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/getAllPostIds.ts\n");

/***/ }),

/***/ "./pages/post/[id].tsx":
/*!*****************************!*\
  !*** ./pages/post/[id].tsx ***!
  \*****************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"babel-plugin-superjson-next/tools\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../prisma/client */ \"./prisma/client.ts\");\n/* harmony import */ var _lib_getAllPostIds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/getAllPostIds */ \"./lib/getAllPostIds.ts\");\n\n\n\nvar _jsxFileName = \"/Users/julien/DEV/Blog_southWestFishing/pages/post/[id].tsx\";\n\n\n\nfunction article(props) {\n  console.log(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"text-white\",\n    children: props.post.id\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 12\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__[\"withSuperJSONPage\"])(article));\nconst getStaticProps = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__[\"withSuperJSONProps\"])(async function getStaticProps(params) {\n  const {\n    id\n  } = params.params;\n  console.log(id);\n  const post = await _prisma_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post.findUnique({\n    where: {\n      id: id\n    },\n    rejectOnNotFound: true\n  });\n  return {\n    props: {\n      post\n    }\n  };\n}, []);\nasync function getStaticPaths() {\n  const paths = await Object(_lib_getAllPostIds__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  console.log(paths);\n  return {\n    paths,\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0Ly50c3g/ZDFhZCJdLCJuYW1lcyI6WyJhcnRpY2xlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwcmlzbWEiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJyZWplY3RPbk5vdEZvdW5kIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImdldEFsbFBvc3RJZHMiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBS2UsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBNkM7QUFDeERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUEsc0JBQU87QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLGNBQTZCQSxLQUFLLENBQUNHLElBQU4sQ0FBV0M7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBSmMsMkpBQVNMLE9BQXhCO0FBTU8sTUFBZU0sY0FBdEIsK0dBQXNCQSxjQUF0QixDQUFxQ0MsTUFBckMsRUFJMEM7QUFDdEMsUUFBTTtBQUFFRjtBQUFGLE1BQVNFLE1BQU0sQ0FBQ0EsTUFBdEI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLENBQVlFLEVBQVo7QUFDQSxRQUFNRCxJQUFJLEdBQUcsTUFBTUksc0RBQU0sQ0FBQ0osSUFBUCxDQUFZSyxVQUFaLENBQXVCO0FBQ3RDQyxTQUFLLEVBQUU7QUFDSEwsUUFBRSxFQUFFQTtBQURELEtBRCtCO0FBSXRDTSxvQkFBZ0IsRUFBRTtBQUpvQixHQUF2QixDQUFuQjtBQU1BLFNBQU87QUFDSFYsU0FBSyxFQUFFO0FBQ0hHO0FBREc7QUFESixHQUFQO0FBS0gsQ0FsQkQ7QUFvQk8sZUFBZVEsY0FBZixHQUdKO0FBQ0MsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLGtFQUFhLEVBQWpDO0FBQ0FaLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVSxLQUFaO0FBQ0EsU0FBTztBQUNIQSxTQURHO0FBRUhFLFlBQVEsRUFBRTtBQUZQLEdBQVA7QUFJSCIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9wcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc1Jlc3VsdCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZ2V0QWxsUG9zdElkcyBmcm9tIFwiLi4vLi4vbGliL2dldEFsbFBvc3RJZHNcIjtcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLnByaXNtYS9jbGllbnRcIjtcbnR5cGUgSVByb3BzID0ge1xuICAgIHBvc3Q6IFBvc3Q7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJ0aWNsZShwcm9wczogSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnNvbGUubG9nKHByb3BzKTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57cHJvcHMucG9zdC5pZH08L2Rpdj47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhwYXJhbXM6IHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICB9O1xufSk6IFByb21pc2U8R2V0U3RhdGljUHJvcHNSZXN1bHQ8SVByb3BzPj4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcy5wYXJhbXM7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0T25Ob3RGb3VuZDogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKTogUHJvbWlzZTx7XG4gICAgcGF0aHM6IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9W107XG4gICAgZmFsbGJhY2s6IGJvb2xlYW47XG59PiB7XG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBnZXRBbGxQb3N0SWRzKCk7XG4gICAgY29uc29sZS5sb2cocGF0aHMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[id].tsx\n");

/***/ }),

/***/ "./prisma/client.ts":
/*!**************************!*\
  !*** ./prisma/client.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmlzbWEvY2xpZW50LnRzP2JhNTgiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQywyREFBSixFQUFmO0FBRWVELHFFQUFmIiwiZmlsZSI6Ii4vcHJpc21hL2NsaWVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./prisma/client.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-plugin-superjson-next/tools\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIj81MjJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29sc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///babel-plugin-superjson-next/tools\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });