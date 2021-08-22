webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/components/Post/Article.tsx":
/*!*****************************************!*\
  !*** ./src/components/Post/Article.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Article; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentForm */ "./src/components/Post/CommentForm.tsx");
/* harmony import */ var _CommentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentList */ "./src/components/Post/CommentList.tsx");

var _jsxFileName = "/home/jidayyy/Blog_southWestFishing/src/components/Post/Article.tsx";



function Article(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full lg:w-6/12 mt-88 h-full mb-88 flex flex-col item-center align-middle justify-center text-white",
    children: [article.picture[0].url && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        src: article.picture[0].url,
        width: 150,
        height: 150,
        layout: "responsive",
        className: "rounded-6"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full flex flex-col",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-xl font-700",
        children: article.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-10 font-200",
        children: article.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentList__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      postId: article.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
_c = Article;

var _c;

$RefreshReg$(_c, "Article");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9BcnRpY2xlLnRzeCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsInBpY3R1cmUiLCJ1cmwiLCJ0aXRsZSIsImNvbnRlbnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFJZSxTQUFTQSxPQUFULE9BQW1EO0FBQUEsTUFBaENDLE9BQWdDLFFBQWhDQSxPQUFnQztBQUM5RCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxzR0FBZjtBQUFBLGVBQ0tBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixDQUFoQixFQUFtQkMsR0FBbkIsaUJBQ0c7QUFBQSw2QkFDSSxxRUFBQyxpREFBRDtBQUNJLFdBQUcsRUFBRUYsT0FBTyxDQUFDQyxPQUFSLENBQWdCLENBQWhCLEVBQW1CQyxHQUQ1QjtBQUVJLGFBQUssRUFBRSxHQUZYO0FBR0ksY0FBTSxFQUFFLEdBSFo7QUFJSSxjQUFNLEVBQUMsWUFKWDtBQUtJLGlCQUFTLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZSLGVBWUk7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxrQkFBbUNGLE9BQU8sQ0FBQ0c7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0JBQW1DSCxPQUFPLENBQUNJO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSixlQWdCSSxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKLGVBaUJJLHFFQUFDLG9EQUFEO0FBQWEsWUFBTSxFQUFFSixPQUFPLENBQUNLO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7S0F0QnVCTixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS4wMWNjMTFjMDI0ZDliYTY1YWE5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBQb3N0V2l0aEF1dGhvckFuZFBpY3R1cmVzIH0gZnJvbSBcInBhZ2VzXCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi9Db21tZW50TGlzdFwiO1xuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgYXJ0aWNsZTogUG9zdFdpdGhBdXRob3JBbmRQaWN0dXJlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGUoeyBhcnRpY2xlIH06IElQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTYvMTIgbXQtODggaC1mdWxsIG1iLTg4IGZsZXggZmxleC1jb2wgaXRlbS1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIHthcnRpY2xlLnBpY3R1cmVbMF0udXJsICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5waWN0dXJlWzBdLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNTB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC02XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtNzAwXCI+e2FydGljbGUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTEwIGZvbnQtMjAwXCI+e2FydGljbGUuY29udGVudH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbW1lbnRMaXN0IC8+XG4gICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdElkPXthcnRpY2xlLmlkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==