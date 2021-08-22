webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/components/Post/CommentCard.tsx":
/*!*********************************************!*\
  !*** ./src/components/Post/CommentCard.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Assets/Title/Title */ "./src/components/Assets/Title/Title.tsx");

var _jsxFileName = "/home/jidayyy/Blog_southWestFishing/src/components/Post/CommentCard.tsx";

function CommentCard(_ref) {
  var comment = _ref.comment,
      index = _ref.index;
  console.log(index);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full h-224 bg-black my-8 flex ".concat(index % 2 === 0 ? "flex-row" : "flex-row-reverse"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white w-full h-full",
      children: comment.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-full",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: comment.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: comment.createdAt.toDateString()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: comment.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
_c = CommentCard;

var _c;

$RefreshReg$(_c, "CommentCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50Q2FyZC50c3giXSwibmFtZXMiOlsiQ29tbWVudENhcmQiLCJjb21tZW50IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsInVzZXJuYW1lIiwiY3JlYXRlZEF0IiwidG9EYXRlU3RyaW5nIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFNZSxTQUFTQSxXQUFULE9BQThEO0FBQUEsTUFBdkNDLE9BQXVDLFFBQXZDQSxPQUF1QztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFDekVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Esc0JBQ0k7QUFDSSxhQUFTLDRDQUNMQSxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0IsVUFBbEIsR0FBK0Isa0JBRDFCLENBRGI7QUFBQSw0QkFLSSxxRUFBQyxzRUFBRDtBQUFPLGVBQVMsRUFBQywwQkFBakI7QUFBQSxnQkFDS0QsT0FBTyxDQUFDSTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQVFJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDSSxxRUFBQyxzRUFBRDtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQSxrQkFBK0JKLE9BQU8sQ0FBQ0s7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsc0VBQUQ7QUFBTyxpQkFBUyxFQUFDLFlBQWpCO0FBQUEsa0JBQ0tMLE9BQU8sQ0FBQ00sU0FBUixDQUFrQkMsWUFBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFLSSxxRUFBQyxzRUFBRDtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQSxrQkFBK0JQLE9BQU8sQ0FBQ1E7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIO0tBcEJ1QlQsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uMWI0YTliOWNjMDlkYjY1MjdiMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLnByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQGNvbXBvbmVudHMvQXNzZXRzL1RpdGxlL1RpdGxlXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGNvbW1lbnQ6IENvbW1lbnQ7XG4gICAgaW5kZXg6IG51bWJlcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRDYXJkKHsgY29tbWVudCwgaW5kZXggfTogSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC0yMjQgYmctYmxhY2sgbXktOCBmbGV4ICR7XG4gICAgICAgICAgICAgICAgaW5kZXggJSAyID09PSAwID8gXCJmbGV4LXJvd1wiIDogXCJmbGV4LXJvdy1yZXZlcnNlXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAge2NvbW1lbnQuY29udGVudH1cbiAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2NvbW1lbnQudXNlcm5hbWV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jcmVhdGVkQXQudG9EYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntjb21tZW50LmVtYWlsfTwvVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=