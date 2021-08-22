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
      backgroundColor: "#f0f0f0"
    },
    className: "w-full p-10 rounded-8 h-92 bg-transparent border-b my-20  flex ".concat(index % 2 === 0 ? "flex-row" : "flex-row-reverse"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white text-base w-full h-full flex items-center align-middle justify-center",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50Q2FyZC50c3giXSwibmFtZXMiOlsiQ29tbWVudENhcmQiLCJjb21tZW50IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwiY29udGVudCIsInVzZXJuYW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBS2UsU0FBU0EsV0FBVCxPQUE4RDtBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQ3pFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLHNCQUNJLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNJLGNBQVUsRUFBRTtBQUFFRyxxQkFBZSxFQUFFO0FBQW5CLEtBRGhCO0FBRUksYUFBUywyRUFDTEgsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLFVBQWxCLEdBQStCLGtCQUQxQixDQUZiO0FBQUEsNEJBTUkscUVBQUMsc0VBQUQ7QUFBTyxlQUFTLEVBQUMsa0ZBQWpCO0FBQUEsZ0JBQ0tELE9BQU8sQ0FBQ0s7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFTSTtBQUFLLGVBQVMsRUFBQyxnR0FBZjtBQUFBLDhCQUNJLHFFQUFDLHNFQUFEO0FBQU8saUJBQVMsRUFBQyxtQkFBakI7QUFBQSxrQkFBc0NMLE9BQU8sQ0FBQ007QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsc0VBQUQ7QUFBTyxpQkFBUyxFQUFDLG1CQUFqQjtBQUFBLGtCQUNLLElBQUlDLElBQUosQ0FBU1AsT0FBTyxDQUFDUSxTQUFqQixFQUE0QkMsa0JBQTVCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBS0kscUVBQUMsc0VBQUQ7QUFBTyxpQkFBUyxFQUFDLG1CQUFqQjtBQUFBLGtCQUFzQ1QsT0FBTyxDQUFDVTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7S0FyQnVCWCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS40MTBmYWU4N2M1YWY4Y2RlNDhhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJAY29tcG9uZW50cy9Bc3NldHMvVGl0bGUvVGl0bGVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBjb21tZW50OiBDb21tZW50O1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50Q2FyZCh7IGNvbW1lbnQsIGluZGV4IH06IElQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmMGYwZjBcIiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHAtMTAgcm91bmRlZC04IGgtOTIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLWIgbXktMjAgIGZsZXggJHtcbiAgICAgICAgICAgICAgICBpbmRleCAlIDIgPT09IDAgPyBcImZsZXgtcm93XCIgOiBcImZsZXgtcm93LXJldmVyc2VcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtYmFzZSB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbnRlbnR9XG4gICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgbXgtMTAgdGV4dC0xMCBmb250LTgwMCBmbGV4IGZsZXgtY29sIHRleHQtbGVmdCBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdy1mdWxsXCI+e2NvbW1lbnQudXNlcm5hbWV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8VGl0bGUgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHctZnVsbFwiPntjb21tZW50LmVtYWlsfTwvVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9