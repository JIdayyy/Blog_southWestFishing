webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].tsx":
/*!*****************************!*\
  !*** ./pages/post/[id].tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ "./node_modules/babel-plugin-superjson-next/tools.js");
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/jidayyy/Blog_southWestFishing/pages/post/[id].tsx";


function article(props) {
  console.log(props);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full lg:w-6/12 mt-88 h-full flex flex-col item-center align-middle justify-center text-white",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full flex flex-col",
      children: [props.post.picture[0].url && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
          src: props.post.picture[0].url,
          width: 150,
          height: 150,
          layout: "responsive",
          className: "rounded-6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-xl font-700",
        children: props.post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-10 font-200",
        children: props.post.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__["withSuperJSONPage"])(article));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8udHN4Il0sIm5hbWVzIjpbImFydGljbGUiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicGljdHVyZSIsInVybCIsInRpdGxlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBSWUsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBNkM7QUFDeERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0dBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLGlCQUNLQSxLQUFLLENBQUNHLElBQU4sQ0FBV0MsT0FBWCxDQUFtQixDQUFuQixFQUFzQkMsR0FBdEIsaUJBQ0c7QUFBQSwrQkFDSSxxRUFBQyxpREFBRDtBQUNJLGFBQUcsRUFBRUwsS0FBSyxDQUFDRyxJQUFOLENBQVdDLE9BQVgsQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBRC9CO0FBRUksZUFBSyxFQUFFLEdBRlg7QUFHSSxnQkFBTSxFQUFFLEdBSFo7QUFJSSxnQkFBTSxFQUFDLFlBSlg7QUFLSSxtQkFBUyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixlQVlJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtCQUFtQ0wsS0FBSyxDQUFDRyxJQUFOLENBQVdHO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixlQWFJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtCQUFtQ04sS0FBSyxDQUFDRyxJQUFOLENBQVdJO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7OztBQXRCYywySkFBU1IsT0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmIyMGI5ZTg1NTc2YzJhNTExZjZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi9wcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wc1Jlc3VsdCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZ2V0QWxsUG9zdElkcyBmcm9tIFwiLi4vLi4vbGliL2dldEFsbFBvc3RJZHNcIjtcblxuaW1wb3J0IHsgUG9zdFdpdGhBdXRob3JBbmRQaWN0dXJlcyB9IGZyb20gXCJwYWdlc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG50eXBlIElQcm9wcyA9IHtcbiAgICBwb3N0OiBQb3N0V2l0aEF1dGhvckFuZFBpY3R1cmVzO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFydGljbGUocHJvcHM6IElQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTYvMTIgbXQtODggaC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbS1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMucG9zdC5waWN0dXJlWzBdLnVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLnBvc3QucGljdHVyZVswXS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC03MDBcIj57cHJvcHMucG9zdC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMTAgZm9udC0yMDBcIj57cHJvcHMucG9zdC5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhwYXJhbXM6IHtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IHN0cmluZztcbiAgICB9O1xufSk6IFByb21pc2U8R2V0U3RhdGljUHJvcHNSZXN1bHQ8SVByb3BzPj4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcy5wYXJhbXM7XG5cbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIHBpY3R1cmU6IHRydWUsXG4gICAgICAgICAgICBhdXRob3I6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdE9uTm90Rm91bmQ6IHRydWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3QsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCk6IFByb21pc2U8e1xuICAgIHBhdGhzOiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfVtdO1xuICAgIGZhbGxiYWNrOiBib29sZWFuO1xufT4ge1xuICAgIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUG9zdElkcygpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=