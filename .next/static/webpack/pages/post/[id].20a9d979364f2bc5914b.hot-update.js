webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/components/Post/CommentList.tsx":
/*!*********************************************!*\
  !*** ./src/components/Post/CommentList.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _CommentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentCard */ "./src/components/Post/CommentCard.tsx");




var _jsxFileName = "/home/jidayyy/Blog_southWestFishing/src/components/Post/CommentList.tsx",
    _s = $RefreshSig$();




function CommentList() {
  _s();

  var _this = this;

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useQuery"])("getComments", /*#__PURE__*/Object(_home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    return _home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:3000/api/comments/").then(function (r) {
              return r.data;
            })["catch"](function (r) {
              return console.log(r);
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))),
      data = _useQuery.data,
      error = _useQuery.error,
      isLoading = _useQuery.isLoading;

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Error gettings comments"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 23
  }, this);
  if (isLoading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Loading comments"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 27
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: data && data.map(function (comment) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        comment: comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(CommentList, "vamb9feK/asxjJLX6wcKCD8DQJA=", false, function () {
  return [react_query__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = CommentList;

var _c;

$RefreshReg$(_c, "CommentList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsiQ29tbWVudExpc3QiLCJ1c2VRdWVyeSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaXNMb2FkaW5nIiwibWFwIiwiY29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBb0M7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsNERBQVEsQ0FDdkMsYUFEdUMsb1VBRXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNVQyw0Q0FBSyxDQUNOQyxHQURDLENBQ0cscUNBREgsRUFFREMsSUFGQyxDQUVJLFVBQUNDLENBQUQ7QUFBQSxxQkFBT0EsQ0FBQyxDQUFDQyxJQUFUO0FBQUEsYUFGSixXQUdLLFVBQUNELENBQUQ7QUFBQSxxQkFBT0UsT0FBTyxDQUFDQyxHQUFSLENBQVlILENBQVosQ0FBUDtBQUFBLGFBSEwsQ0FEVjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRnVDLEdBREk7QUFBQSxNQUN2Q0MsSUFEdUMsYUFDdkNBLElBRHVDO0FBQUEsTUFDakNHLEtBRGlDLGFBQ2pDQSxLQURpQztBQUFBLE1BQzFCQyxTQUQwQixhQUMxQkEsU0FEMEI7O0FBUy9DLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsTUFBSUMsU0FBSixFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDZixzQkFDSTtBQUFBLGNBQ0tKLElBQUksSUFDREEsSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsT0FBRDtBQUFBLDBCQUNMLHFFQUFDLG9EQUFEO0FBQWEsZUFBTyxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREs7QUFBQSxLQUFUO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0dBbkJ1QlosVztVQUNlQyxvRDs7O0tBRGZELFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjIwYTlkOTc5MzY0ZjJiYzU5MTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi5wcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IENvbW1lbnRDYXJkIGZyb20gXCIuL0NvbW1lbnRDYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRMaXN0KCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxuICAgICAgICBcImdldENvbW1lbnRzXCIsXG4gICAgICAgIGFzeW5jICgpID0+XG4gICAgICAgICAgICBhd2FpdCBheGlvc1xuICAgICAgICAgICAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NvbW1lbnRzL1wiKVxuICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiByLmRhdGEpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyKSA9PiBjb25zb2xlLmxvZyhyKSksXG4gICAgKTtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkVycm9yIGdldHRpbmdzIGNvbW1lbnRzPC9kaXY+O1xuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcgY29tbWVudHM8L2Rpdj47XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKGNvbW1lbnQ6IENvbW1lbnQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRDYXJkIGNvbW1lbnQ9e2NvbW1lbnR9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9