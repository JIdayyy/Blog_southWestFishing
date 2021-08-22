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
    children: data && data.map(function (comment, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        index: index,
        comment: comment
      }, index, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsiQ29tbWVudExpc3QiLCJ1c2VRdWVyeSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaXNMb2FkaW5nIiwibWFwIiwiY29tbWVudCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxHQUFvQztBQUFBOztBQUFBOztBQUFBLGtCQUNaQyw0REFBUSxDQUN2QyxhQUR1QyxvVUFFdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1VDLDRDQUFLLENBQ05DLEdBREMsQ0FDRyxxQ0FESCxFQUVEQyxJQUZDLENBRUksVUFBQ0MsQ0FBRDtBQUFBLHFCQUFPQSxDQUFDLENBQUNDLElBQVQ7QUFBQSxhQUZKLFdBR0ssVUFBQ0QsQ0FBRDtBQUFBLHFCQUFPRSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBWixDQUFQO0FBQUEsYUFITCxDQURWOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGdUMsR0FESTtBQUFBLE1BQ3ZDQyxJQUR1QyxhQUN2Q0EsSUFEdUM7QUFBQSxNQUNqQ0csS0FEaUMsYUFDakNBLEtBRGlDO0FBQUEsTUFDMUJDLFNBRDBCLGFBQzFCQSxTQUQwQjs7QUFTL0MsTUFBSUQsS0FBSixFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxNQUFJQyxTQUFKLEVBQWUsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNmLHNCQUNJO0FBQUEsY0FDS0osSUFBSSxJQUNEQSxJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQW1CQyxLQUFuQjtBQUFBLDBCQUNMLHFFQUFDLG9EQUFEO0FBQXlCLGFBQUssRUFBRUEsS0FBaEM7QUFBdUMsZUFBTyxFQUFFRDtBQUFoRCxTQUFrQkMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURLO0FBQUEsS0FBVDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztHQW5CdUJiLFc7VUFDZUMsb0Q7OztLQURmRCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS44N2MyZDc1ODllY2JmYzBiMzI0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBDb21tZW50Q2FyZCBmcm9tIFwiLi9Db21tZW50Q2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50TGlzdCgpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShcbiAgICAgICAgXCJnZXRDb21tZW50c1wiLFxuICAgICAgICBhc3luYyAoKSA9PlxuICAgICAgICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jb21tZW50cy9cIilcbiAgICAgICAgICAgICAgICAudGhlbigocikgPT4gci5kYXRhKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgocikgPT4gY29uc29sZS5sb2cocikpLFxuICAgICk7XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBnZXR0aW5ncyBjb21tZW50czwvZGl2PjtcbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIGNvbW1lbnRzPC9kaXY+O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChjb21tZW50OiBDb21tZW50LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50Q2FyZCBrZXk9e2luZGV4fSBpbmRleD17aW5kZXh9IGNvbW1lbnQ9e2NvbW1lbnR9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9