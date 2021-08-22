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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      comments: article.comments
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9BcnRpY2xlLnRzeCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsInBpY3R1cmUiLCJ1cmwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb21tZW50cyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUllLFNBQVNBLE9BQVQsT0FBbUQ7QUFBQSxNQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQzlELHNCQUNJO0FBQUssYUFBUyxFQUFDLHNHQUFmO0FBQUEsZUFDS0EsT0FBTyxDQUFDQyxPQUFSLENBQWdCLENBQWhCLEVBQW1CQyxHQUFuQixpQkFDRztBQUFBLDZCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksV0FBRyxFQUFFRixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJDLEdBRDVCO0FBRUksYUFBSyxFQUFFLEdBRlg7QUFHSSxjQUFNLEVBQUUsR0FIWjtBQUlJLGNBQU0sRUFBQyxZQUpYO0FBS0ksaUJBQVMsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsZUFZSTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtCQUFtQ0YsT0FBTyxDQUFDRztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSxrQkFBbUNILE9BQU8sQ0FBQ0k7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLGVBZ0JJLHFFQUFDLG9EQUFEO0FBQWEsY0FBUSxFQUFFSixPQUFPLENBQUNLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkosZUFpQkkscUVBQUMsb0RBQUQ7QUFBYSxZQUFNLEVBQUVMLE9BQU8sQ0FBQ007QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDtLQXRCdUJQLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjRkZTk1ZmM2ODE2ZWRmMTNmZDFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFBvc3RXaXRoQXV0aG9yQW5kUGljdHVyZXMgfSBmcm9tIFwicGFnZXNcIjtcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuL0NvbW1lbnRMaXN0XCI7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBhcnRpY2xlOiBQb3N0V2l0aEF1dGhvckFuZFBpY3R1cmVzO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZSh7IGFydGljbGUgfTogSVByb3BzKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNi8xMiBtdC04OCBoLWZ1bGwgbWItODggZmxleCBmbGV4LWNvbCBpdGVtLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge2FydGljbGUucGljdHVyZVswXS51cmwgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnRpY2xlLnBpY3R1cmVbMF0udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTZcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC03MDBcIj57YXJ0aWNsZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMTAgZm9udC0yMDBcIj57YXJ0aWNsZS5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29tbWVudExpc3QgY29tbWVudHM9e2FydGljbGUuY29tbWVudHN9IC8+XG4gICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdElkPXthcnRpY2xlLmlkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==