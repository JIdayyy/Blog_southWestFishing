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
    className: "w-full p-10 rounded-8 h-92 bg-black my-8 flex ".concat(index % 2 === 0 ? "flex-row" : "flex-row-reverse"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white w-full h-full flex items-center align-middle justify-center",
      children: comment.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "h-full mx-10 text-10 flex FLEX-COL items-center align-middle justify-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: comment.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "text-white",
        children: new Date(comment.createdAt).toLocaleDateString()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50Q2FyZC50c3giXSwibmFtZXMiOlsiQ29tbWVudENhcmQiLCJjb21tZW50IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsInVzZXJuYW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBTWUsU0FBU0EsV0FBVCxPQUE4RDtBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQ3pFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLHNCQUNJO0FBQ0ksYUFBUywwREFDTEEsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLFVBQWxCLEdBQStCLGtCQUQxQixDQURiO0FBQUEsNEJBS0kscUVBQUMsc0VBQUQ7QUFBTyxlQUFTLEVBQUMsd0VBQWpCO0FBQUEsZ0JBQ0tELE9BQU8sQ0FBQ0k7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFRSTtBQUFLLGVBQVMsRUFBQyw2RUFBZjtBQUFBLDhCQUNJLHFFQUFDLHNFQUFEO0FBQU8saUJBQVMsRUFBQyxZQUFqQjtBQUFBLGtCQUErQkosT0FBTyxDQUFDSztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyxzRUFBRDtBQUFPLGlCQUFTLEVBQUMsWUFBakI7QUFBQSxrQkFDSyxJQUFJQyxJQUFKLENBQVNOLE9BQU8sQ0FBQ08sU0FBakIsRUFBNEJDLGtCQUE1QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtJLHFFQUFDLHNFQUFEO0FBQU8saUJBQVMsRUFBQyxZQUFqQjtBQUFBLGtCQUErQlIsT0FBTyxDQUFDUztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7S0FwQnVCVixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS43YTExMjhiMTdkZjhlOTJjNmZmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJAY29tcG9uZW50cy9Bc3NldHMvVGl0bGUvVGl0bGVcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY29tbWVudDogQ29tbWVudDtcbiAgICBpbmRleDogbnVtYmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudENhcmQoeyBjb21tZW50LCBpbmRleCB9OiBJUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBwLTEwIHJvdW5kZWQtOCBoLTkyIGJnLWJsYWNrIG15LTggZmxleCAke1xuICAgICAgICAgICAgICAgIGluZGV4ICUgMiA9PT0gMCA/IFwiZmxleC1yb3dcIiA6IFwiZmxleC1yb3ctcmV2ZXJzZVwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7Y29tbWVudC5jb250ZW50fVxuICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIG14LTEwIHRleHQtMTAgZmxleCBGTEVYLUNPTCBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57Y29tbWVudC51c2VybmFtZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShjb21tZW50LmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntjb21tZW50LmVtYWlsfTwvVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=