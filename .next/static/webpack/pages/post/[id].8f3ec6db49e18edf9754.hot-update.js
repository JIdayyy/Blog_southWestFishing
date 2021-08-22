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
  var comment = _ref.comment;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full h-224 bg-black my-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white",
      children: comment.username
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white",
      children: comment.createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white",
      children: comment.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Assets_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-white",
      children: comment.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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

/***/ }),

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
        comment: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 48
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50Q2FyZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bvc3QvQ29tbWVudExpc3QudHN4Il0sIm5hbWVzIjpbIkNvbW1lbnRDYXJkIiwiY29tbWVudCIsInVzZXJuYW1lIiwiY3JlYXRlZEF0IiwiZW1haWwiLCJjb250ZW50IiwiQ29tbWVudExpc3QiLCJ1c2VRdWVyeSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaXNMb2FkaW5nIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBS2UsU0FBU0EsV0FBVCxPQUF1RDtBQUFBLE1BQWhDQyxPQUFnQyxRQUFoQ0EsT0FBZ0M7QUFDbEUsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQSw0QkFDSSxxRUFBQyxzRUFBRDtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBLGdCQUErQkEsT0FBTyxDQUFDQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxzRUFBRDtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBLGdCQUErQkQsT0FBTyxDQUFDRTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxzRUFBRDtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBLGdCQUErQkYsT0FBTyxDQUFDRztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSSxxRUFBQyxzRUFBRDtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBLGdCQUErQkgsT0FBTyxDQUFDSTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDtLQVR1QkwsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x4QjtBQUNBO0FBQ0E7QUFFZSxTQUFTTSxXQUFULEdBQW9DO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLDREQUFRLENBQ3ZDLGFBRHVDLG9VQUV2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVUMsNENBQUssQ0FDTkMsR0FEQyxDQUNHLHFDQURILEVBRURDLElBRkMsQ0FFSSxVQUFDQyxDQUFEO0FBQUEscUJBQU9BLENBQUMsQ0FBQ0MsSUFBVDtBQUFBLGFBRkosV0FHSyxVQUFDRCxDQUFEO0FBQUEscUJBQU9FLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFaLENBQVA7QUFBQSxhQUhMLENBRFY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUZ1QyxHQURJO0FBQUEsTUFDdkNDLElBRHVDLGFBQ3ZDQSxJQUR1QztBQUFBLE1BQ2pDRyxLQURpQyxhQUNqQ0EsS0FEaUM7QUFBQSxNQUMxQkMsU0FEMEIsYUFDMUJBLFNBRDBCOztBQVMvQyxNQUFJRCxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLE1BQUlDLFNBQUosRUFBZSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2Ysc0JBQ0k7QUFBQSxjQUNLSixJQUFJLElBQ0RBLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNoQixPQUFEO0FBQUEsMEJBQXNCLHFFQUFDLG9EQUFEO0FBQWEsZUFBTyxFQUFFVztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXRCO0FBQUEsS0FBVDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQWpCdUJOLFc7VUFDZUMsb0Q7OztLQURmRCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS44ZjNlYzZkYjQ5ZTE4ZWRmOTc1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJAY29tcG9uZW50cy9Bc3NldHMvVGl0bGUvVGl0bGVcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgY29tbWVudDogQ29tbWVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRDYXJkKHsgY29tbWVudCB9OiBJUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0yMjQgYmctYmxhY2sgbXktOFwiPlxuICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57Y29tbWVudC51c2VybmFtZX08L1RpdGxlPlxuICAgICAgICAgICAgPFRpdGxlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57Y29tbWVudC5jcmVhdGVkQXR9PC9UaXRsZT5cbiAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2NvbW1lbnQuZW1haWx9PC9UaXRsZT5cbiAgICAgICAgICAgIDxUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2NvbW1lbnQuY29udGVudH08L1RpdGxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCBDb21tZW50Q2FyZCBmcm9tIFwiLi9Db21tZW50Q2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50TGlzdCgpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShcbiAgICAgICAgXCJnZXRDb21tZW50c1wiLFxuICAgICAgICBhc3luYyAoKSA9PlxuICAgICAgICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jb21tZW50cy9cIilcbiAgICAgICAgICAgICAgICAudGhlbigocikgPT4gci5kYXRhKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgocikgPT4gY29uc29sZS5sb2cocikpLFxuICAgICk7XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBnZXR0aW5ncyBjb21tZW50czwvZGl2PjtcbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nIGNvbW1lbnRzPC9kaXY+O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChjb21tZW50OiBDb21tZW50KSA9PiA8Q29tbWVudENhcmQgY29tbWVudD17ZGF0YX0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==