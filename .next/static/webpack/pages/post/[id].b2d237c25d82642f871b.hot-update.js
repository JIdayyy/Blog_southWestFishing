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
      key = _ref.key;
  console.log(key);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full h-224 bg-black my-8 flex ".concat(key % 2 === 0 ? "flex-row" : "flew-row-reverse"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: comment.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: comment.createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: comment.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white",
      children: comment.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50Q2FyZC50c3giXSwibmFtZXMiOlsiQ29tbWVudENhcmQiLCJjb21tZW50Iiwia2V5IiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwiY3JlYXRlZEF0IiwiZW1haWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBTWUsU0FBU0EsV0FBVCxPQUE0RDtBQUFBLE1BQXJDQyxPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUE1QkMsR0FBNEIsUUFBNUJBLEdBQTRCO0FBQ3ZFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLHNCQUNJO0FBQ0ksYUFBUyw0Q0FDTEEsR0FBRyxHQUFHLENBQU4sS0FBWSxDQUFaLEdBQWdCLFVBQWhCLEdBQTZCLGtCQUR4QixDQURiO0FBQUEsNEJBS0k7QUFBQSw4QkFDSSxxRUFBQyxzRUFBRDtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQSxrQkFBK0JELE9BQU8sQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsc0VBQUQ7QUFBTyxpQkFBUyxFQUFDLFlBQWpCO0FBQUEsa0JBQStCSixPQUFPLENBQUNLO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJLHFFQUFDLHNFQUFEO0FBQU8saUJBQVMsRUFBQyxZQUFqQjtBQUFBLGtCQUErQkwsT0FBTyxDQUFDTTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFVSSxxRUFBQyxzRUFBRDtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBLGdCQUErQk4sT0FBTyxDQUFDTztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDtLQWhCdUJSLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLmIyZDIzN2MyNWQ4MjY0MmY4NzFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi5wcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIkBjb21wb25lbnRzL0Fzc2V0cy9UaXRsZS9UaXRsZVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBjb21tZW50OiBDb21tZW50O1xuICAgIGtleTogbnVtYmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudENhcmQoeyBjb21tZW50LCBrZXkgfTogSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtMjI0IGJnLWJsYWNrIG15LTggZmxleCAke1xuICAgICAgICAgICAgICAgIGtleSAlIDIgPT09IDAgPyBcImZsZXgtcm93XCIgOiBcImZsZXctcm93LXJldmVyc2VcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57Y29tbWVudC51c2VybmFtZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2NvbW1lbnQuY3JlYXRlZEF0fTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57Y29tbWVudC5lbWFpbH08L1RpdGxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntjb21tZW50LmNvbnRlbnR9PC9UaXRsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=