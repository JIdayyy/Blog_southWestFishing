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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");

var _jsxFileName = "/home/jidayyy/Blog_southWestFishing/src/components/Post/CommentCard.tsx";


function CommentCard(_ref) {
  var comment = _ref.comment,
      index = _ref.index;
  console.log(index);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    whileHover: {
      backgroundColor: "#2F4F4F",
      scale: 1.02
    },
    className: "w-full p-10 rounded-8 h-92 bg-transparent border-b my-20  flex ".concat(index % 2 === 0 ? "flex-row" : "flex-row-reverse"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white text-10 w-full h-full flex items-center align-middle justify-center",
      children: comment.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-full mx-10 text-10 font-800 flex flex-col text-left items-center align-middle justify-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white w-full",
        children: comment.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white w-full",
        children: new Date(comment.createdAt).toLocaleDateString()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white w-full",
        children: comment.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50Q2FyZC50c3giXSwibmFtZXMiOlsiQ29tbWVudENhcmQiLCJjb21tZW50IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGUiLCJjb250ZW50IiwidXNlcm5hbWUiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLZSxTQUFTQSxXQUFULE9BQThEO0FBQUEsTUFBdkNDLE9BQXVDLFFBQXZDQSxPQUF1QztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFDekVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Esc0JBQ0kscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0ksY0FBVSxFQUFFO0FBQUVHLHFCQUFlLEVBQUUsU0FBbkI7QUFBOEJDLFdBQUssRUFBRTtBQUFyQyxLQURoQjtBQUVJLGFBQVMsMkVBQ0xKLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQixVQUFsQixHQUErQixrQkFEMUIsQ0FGYjtBQUFBLDRCQU1JLHFFQUFDLHNFQUFEO0FBQU8sZUFBUyxFQUFDLGdGQUFqQjtBQUFBLGdCQUNLRCxPQUFPLENBQUNNO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBU0k7QUFBSyxlQUFTLEVBQUMsZ0dBQWY7QUFBQSw4QkFDSSxxRUFBQyxzRUFBRDtBQUFPLGlCQUFTLEVBQUMsbUJBQWpCO0FBQUEsa0JBQXNDTixPQUFPLENBQUNPO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLHNFQUFEO0FBQU8saUJBQVMsRUFBQyxtQkFBakI7QUFBQSxrQkFDSyxJQUFJQyxJQUFKLENBQVNSLE9BQU8sQ0FBQ1MsU0FBakIsRUFBNEJDLGtCQUE1QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtJLHFFQUFDLHNFQUFEO0FBQU8saUJBQVMsRUFBQyxtQkFBakI7QUFBQSxrQkFBc0NWLE9BQU8sQ0FBQ1c7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIO0tBckJ1QlosVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uOGEyOGRiNThkNTQxNzIwODBjMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLnByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQGNvbXBvbmVudHMvQXNzZXRzL1RpdGxlL1RpdGxlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY29tbWVudDogQ29tbWVudDtcbiAgICBpbmRleDogbnVtYmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudENhcmQoeyBjb21tZW50LCBpbmRleCB9OiBJUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMkY0RjRGXCIsIHNjYWxlOiAxLjAyIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcC0xMCByb3VuZGVkLTggaC05MiBiZy10cmFuc3BhcmVudCBib3JkZXItYiBteS0yMCAgZmxleCAke1xuICAgICAgICAgICAgICAgIGluZGV4ICUgMiA9PT0gMCA/IFwiZmxleC1yb3dcIiA6IFwiZmxleC1yb3ctcmV2ZXJzZVwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0xMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbnRlbnR9XG4gICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgbXgtMTAgdGV4dC0xMCBmb250LTgwMCBmbGV4IGZsZXgtY29sIHRleHQtbGVmdCBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsXCI+e2NvbW1lbnQudXNlcm5hbWV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbFwiPntjb21tZW50LmVtYWlsfTwvVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9