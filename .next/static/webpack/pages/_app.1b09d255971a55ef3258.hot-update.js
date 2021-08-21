webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");

var _jsxFileName = "/home/jidayyy/Blog_southWestFishing/src/components/Main/Column.tsx";




function Column() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AnimatedComponents_FadeIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    delay: 0.3,
    className: "bg-gray-800 mt-88  w-full md:w-160  text-white flex flex-col justify-start items-start align-middle",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      whileHover: {
        scale: 1.1
      },
      className: "relative w-full h-288 md:h-160",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "rounded-t-4",
        src: "/images/column_pic.jpeg",
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_About__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full h-288 p-6 flex flex-col justify-around items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: "my-8",
        src: "/images/epf.png",
        width: 200,
        height: 200
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        src: "/images/st_croix.png",
        width: 230,
        height: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9Db2x1bW4udHN4Il0sIm5hbWVzIjpbIkNvbHVtbiIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBK0I7QUFDMUMsc0JBQ0kscUVBQUMsNkVBQUQ7QUFDSSxTQUFLLEVBQUUsR0FEWDtBQUVJLGFBQVMsRUFBQyxxR0FGZDtBQUFBLDRCQUlJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLGdCQUFVLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FEaEI7QUFFSSxlQUFTLEVBQUMsZ0NBRmQ7QUFBQSw2QkFJSSxxRUFBQyxpREFBRDtBQUNJLGlCQUFTLEVBQUMsYUFEZDtBQUVJLFdBQUcsRUFBQyx5QkFGUjtBQUdJLGNBQU0sRUFBQztBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFjSSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEosZUFlSTtBQUFLLGVBQVMsRUFBQyw0REFBZjtBQUFBLDhCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksaUJBQVMsRUFBQyxNQURkO0FBRUksV0FBRyxFQUFDLGlCQUZSO0FBR0ksYUFBSyxFQUFFLEdBSFg7QUFJSSxjQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFPSSxxRUFBQyxpREFBRDtBQUFPLFdBQUcsRUFBQyxzQkFBWDtBQUFrQyxhQUFLLEVBQUUsR0FBekM7QUFBOEMsY0FBTSxFQUFFO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJCSDtLQTVCdUJELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xYjA5ZDI1NTk3MWE1NWVmMzI1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCIuL0Fib3V0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBGYWRlSW4gZnJvbSBcIkBjb21wb25lbnRzL0FuaW1hdGVkQ29tcG9uZW50cy9GYWRlSW5cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2x1bW4oKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGYWRlSW5cbiAgICAgICAgICAgIGRlbGF5PXswLjN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBtdC04OCAgdy1mdWxsIG1kOnctMTYwICB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBhbGlnbi1taWRkbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLTI4OCBtZDpoLTE2MFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdC00XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9jb2x1bW5fcGljLmpwZWdcIlxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTI4OCBwLTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktOFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZXBmLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvc3RfY3JvaXgucG5nXCIgd2lkdGg9ezIzMH0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GYWRlSW4+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=