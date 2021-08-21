webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Post/Card.tsx":
/*!***************************!*\
  !*** ./src/Post/Card.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Assets/Title/Title */ "./src/components/Assets/Title/Title.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/jidayyy/SouthWestFishing/src/Post/Card.tsx";


function Card(_ref) {
  var post = _ref.post;
  console.log(post);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-white items-center align-middle justify-between flex text-13 w-full h-136 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: 200,
      height: 200,
      src: post.picture[0].url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex  w-full h-full flex-col items-start p-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-xl text-whtie",
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-10 w-full overflow-fade  overflow-hidden",
        children: post.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-10 text-gray-800 w-full text-right",
        children: [post.author.name, " le ", post.createdAt.toLocaleDateString()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
_c = Card;

var _c;

$RefreshReg$(_c, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1Bvc3QvQ2FyZC50c3giXSwibmFtZXMiOlsiQ2FyZCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwicGljdHVyZSIsInVybCIsInRpdGxlIiwiY29udGVudCIsImF1dGhvciIsIm5hbWUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTWUsU0FBU0EsSUFBVCxPQUE2QztBQUFBLE1BQTdCQyxJQUE2QixRQUE3QkEsSUFBNkI7QUFDeERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUZBQWY7QUFBQSw0QkFDSSxxRUFBQyxpREFBRDtBQUFPLFdBQUssRUFBRSxHQUFkO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxTQUFHLEVBQUVBLElBQUksQ0FBQ0csT0FBTCxDQUFhLENBQWIsRUFBZ0JDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUdJO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsOEJBQ0kscUVBQUMsc0VBQUQ7QUFBTyxpQkFBUyxFQUFDLG9CQUFqQjtBQUFBLGtCQUF1Q0osSUFBSSxDQUFDSztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsK0NBQWY7QUFBQSxrQkFDS0wsSUFBSSxDQUFDTTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtJO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLG1CQUNLTixJQUFJLENBQUNPLE1BQUwsQ0FBWUMsSUFEakIsVUFDMkJSLElBQUksQ0FBQ1MsU0FBTCxDQUFlQyxrQkFBZixFQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIO0tBakJ1QlgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYzViZGNlNDhjZmY3YWQyZjQ0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpdGxlIGZyb20gXCJAY29tcG9uZW50cy9Bc3NldHMvVGl0bGUvVGl0bGVcIjtcbmltcG9ydCB7IFBvc3RXaXRoQXV0aG9yQW5kUGljdHVyZXMgfSBmcm9tIFwicGFnZXNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBwb3N0OiBQb3N0V2l0aEF1dGhvckFuZFBpY3R1cmVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgcG9zdCB9OiBJUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc29sZS5sb2cocG9zdCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1iZXR3ZWVuIGZsZXggdGV4dC0xMyB3LWZ1bGwgaC0xMzYgXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IHNyYz17cG9zdC5waWN0dXJlWzBdLnVybH0gLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICB3LWZ1bGwgaC1mdWxsIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHAtMTJcIj5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdodGllXCI+e3Bvc3QudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMTAgdy1mdWxsIG92ZXJmbG93LWZhZGUgIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5jb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xMCB0ZXh0LWdyYXktODAwIHctZnVsbCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmF1dGhvci5uYW1lfSBsZSB7cG9zdC5jcmVhdGVkQXQudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=