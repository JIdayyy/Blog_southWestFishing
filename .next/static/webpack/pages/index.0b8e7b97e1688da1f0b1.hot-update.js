webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Main/Column.tsx":
/*!****************************************!*\
  !*** ./src/components/Main/Column.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Column; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/components/Main/About.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AnimatedComponents_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/AnimatedComponents/FadeIn */ "./src/components/AnimatedComponents/FadeIn.tsx");

var _jsxFileName = "/home/jidayyy/SouthWestFishing/src/components/Main/Column.tsx";



function Column() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AnimatedComponents_FadeIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    delay: 0.3,
    className: "bg-blue-dark w-full md:w-192 text-white flex flex-col justify-around items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative w-full h-136",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "rounded-t-4",
        src: "/images/main.jpg",
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_About__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full h-288 p-12 flex flex-col justify-around items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "my-8",
        src: "/images/epf.png",
        width: 200,
        height: 200
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/images/st_croix.png",
        width: 230,
        height: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = Column;

var _c;

$RefreshReg$(_c, "Column");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9Db2x1bW4udHN4Il0sIm5hbWVzIjpbIkNvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQStCO0FBQzFDLHNCQUNJLHFFQUFDLDZFQUFEO0FBQ0ksU0FBSyxFQUFFLEdBRFg7QUFFSSxhQUFTLEVBQUMsbUZBRmQ7QUFBQSw0QkFJSTtBQUFLLGVBQVMsRUFBQyx1QkFBZjtBQUFBLDZCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksaUJBQVMsRUFBQyxhQURkO0FBRUksV0FBRyxFQUFDLGtCQUZSO0FBR0ksY0FBTSxFQUFDO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQVdJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSixlQVlJO0FBQUssZUFBUyxFQUFDLDZEQUFmO0FBQUEsOEJBQ0kscUVBQUMsaURBQUQ7QUFDSSxpQkFBUyxFQUFDLE1BRGQ7QUFFSSxXQUFHLEVBQUMsaUJBRlI7QUFHSSxhQUFLLEVBQUUsR0FIWDtBQUlJLGNBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU9JLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFDLHNCQUFYO0FBQWtDLGFBQUssRUFBRSxHQUF6QztBQUE4QyxjQUFNLEVBQUU7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JIO0tBekJ1QkEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjhlN2I5N2UxNjg4ZGExZjBiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCIuL0Fib3V0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBGYWRlSW4gZnJvbSBcIkBjb21wb25lbnRzL0FuaW1hdGVkQ29tcG9uZW50cy9GYWRlSW5cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbHVtbigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZhZGVJblxuICAgICAgICAgICAgZGVsYXk9ezAuM31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtZGFyayB3LWZ1bGwgbWQ6dy0xOTIgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtMTM2XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdC00XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9tYWluLmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBYm91dCAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yODggcC0xMiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS04XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9lcGYucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9zdF9jcm9peC5wbmdcIiB3aWR0aD17MjMwfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGVJbj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==