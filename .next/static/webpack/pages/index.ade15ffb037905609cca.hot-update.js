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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");

var _jsxFileName = "/home/jidayyy/SouthWestFishing/src/Post/Card.tsx";



function Card(_ref) {
  var post = _ref.post;
  console.log(post);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    whileHover: {
      backgroundColor: "#2F4F4F",
      scale: 1.02
    },
    className: "text-white items-start align-middle cursor-pointer justify-between flex text-13 w-full h-96 my-10 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      width: 200,
      height: 200,
      src: post.picture[0].url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex  w-full h-full flex-col items-start p-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-xl text-whtie",
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-10 w-full overflow-fade  overflow-hidden",
        children: post.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-10 text-gray-500 w-full text-right",
        children: [post.author.name, " le ", post.createdAt.toLocaleDateString()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1Bvc3QvQ2FyZC50c3giXSwibmFtZXMiOlsiQ2FyZCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGUiLCJwaWN0dXJlIiwidXJsIiwidGl0bGUiLCJjb250ZW50IiwiYXV0aG9yIiwibmFtZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFLZSxTQUFTQSxJQUFULE9BQTZDO0FBQUEsTUFBN0JDLElBQTZCLFFBQTdCQSxJQUE2QjtBQUN4REMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxzQkFDSSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDSSxjQUFVLEVBQUU7QUFBRUcscUJBQWUsRUFBRSxTQUFuQjtBQUE4QkMsV0FBSyxFQUFFO0FBQXJDLEtBRGhCO0FBRUksYUFBUyxFQUFDLG9HQUZkO0FBQUEsNEJBSUkscUVBQUMsaURBQUQ7QUFBTyxXQUFLLEVBQUUsR0FBZDtBQUFtQixZQUFNLEVBQUUsR0FBM0I7QUFBZ0MsU0FBRyxFQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFNSTtBQUFLLGVBQVMsRUFBQywrQ0FBZjtBQUFBLDhCQUNJLHFFQUFDLHNFQUFEO0FBQU8saUJBQVMsRUFBQyxvQkFBakI7QUFBQSxrQkFBdUNOLElBQUksQ0FBQ087QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLCtDQUFmO0FBQUEsa0JBQ0tQLElBQUksQ0FBQ1E7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFLSTtBQUFLLGlCQUFTLEVBQUMseUNBQWY7QUFBQSxtQkFDS1IsSUFBSSxDQUFDUyxNQUFMLENBQVlDLElBRGpCLFVBQzJCVixJQUFJLENBQUNXLFNBQUwsQ0FBZUMsa0JBQWYsRUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7S0FwQnVCYixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkZTE1ZmZiMDM3OTA1NjA5Y2NhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGl0bGUgZnJvbSBcIkBjb21wb25lbnRzL0Fzc2V0cy9UaXRsZS9UaXRsZVwiO1xuaW1wb3J0IHsgUG9zdFdpdGhBdXRob3JBbmRQaWN0dXJlcyB9IGZyb20gXCJwYWdlc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcG9zdDogUG9zdFdpdGhBdXRob3JBbmRQaWN0dXJlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IHBvc3QgfTogSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnNvbGUubG9nKHBvc3QpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMkY0RjRGXCIsIHNjYWxlOiAxLjAyIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGl0ZW1zLXN0YXJ0IGFsaWduLW1pZGRsZSBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWJldHdlZW4gZmxleCB0ZXh0LTEzIHctZnVsbCBoLTk2IG15LTEwIFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gc3JjPXtwb3N0LnBpY3R1cmVbMF0udXJsfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIHctZnVsbCBoLWZ1bGwgZmxleC1jb2wgaXRlbXMtc3RhcnQgcC0xMlwiPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtd2h0aWVcIj57cG9zdC50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xMCB3LWZ1bGwgb3ZlcmZsb3ctZmFkZSAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTEwIHRleHQtZ3JheS01MDAgdy1mdWxsIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3QuYXV0aG9yLm5hbWV9IGxlIHtwb3N0LmNyZWF0ZWRBdC50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=