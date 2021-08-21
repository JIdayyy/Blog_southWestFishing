webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./src/components/Menu/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Assets/Title/Title */ "./src/components/Assets/Title/Title.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/jidayyy/SouthWestFishing/src/components/Menu/index.tsx",
    _s = $RefreshSig$();




function Menu() {
  _s();

  var variants = {
    open: {
      width: "100%"
    },
    close: {
      width: "0%"
    }
  };
  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    variants: variants,
    animate: "open",
    initial: "close",
    className: "fixed h-screen w-screen flex  z-20",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:w-1/4 w-full flex flex-col items-center align-middle justify-center h-screen bg-black",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: function onClick() {
            return router.push("/");
          },
          children: "SOUTH WEST FISHING"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(Menu, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Menu;

var _c;

$RefreshReg$(_c, "Menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3giXSwibmFtZXMiOlsiTWVudSIsInZhcmlhbnRzIiwib3BlbiIsIndpZHRoIiwiY2xvc2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNlLFNBQVNBLElBQVQsR0FBNkI7QUFBQTs7QUFDeEMsTUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQURPO0FBRWJDLFNBQUssRUFBRTtBQUFFRCxXQUFLLEVBQUU7QUFBVDtBQUZNLEdBQWpCO0FBSUEsTUFBTUUsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUNBLHNCQUNJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLFlBQVEsRUFBRUwsUUFEZDtBQUVJLFdBQU8sRUFBQyxNQUZaO0FBR0ksV0FBTyxFQUFDLE9BSFo7QUFJSSxhQUFTLEVBQUMsb0NBSmQ7QUFBQSwyQkFNSTtBQUFLLGVBQVMsRUFBQywwRkFBZjtBQUFBLDZCQUNJLHFFQUFDLHNFQUFEO0FBQU8saUJBQVMsRUFBQyxZQUFqQjtBQUFBLCtCQUNJO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNSSxNQUFNLENBQUNFLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQXRCdUJQLEk7VUFLTE0saUU7OztLQUxLTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2M0MmE2Y2RjZjIwYzVkNjAyM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tIFwiQGNvbXBvbmVudHMvQXNzZXRzL1RpdGxlL1RpdGxlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICAgICAgb3BlbjogeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgY2xvc2U6IHsgd2lkdGg6IFwiMCVcIiB9LFxuICAgIH07XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICAgIGFuaW1hdGU9XCJvcGVuXCJcbiAgICAgICAgICAgIGluaXRpYWw9XCJjbG9zZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4ICB6LTIwXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvNCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU09VVEggV0VTVCBGSVNISU5HXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9