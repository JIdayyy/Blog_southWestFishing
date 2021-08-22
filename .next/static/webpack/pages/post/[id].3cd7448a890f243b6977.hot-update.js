webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/components/Post/CommentForm.tsx":
/*!*********************************************!*\
  !*** ./src/components/Post/CommentForm.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/home/jidayyy/Blog_southWestFishing/src/components/Post/CommentForm.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_jidayyy_Blog_southWestFishing_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function CommentForm(postId) {
  _s();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var onSubmit = function onSubmit(data) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:3000/api/comments", _objectSpread(_objectSpread({}, data), {}, {
      postId: postId.postId
    })).then(function (res) {
      return console.log(res);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "text-white flex flex-col ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
      className: "border-white border-b px-4 py-2 bg-black",
      type: "text",
      placeholder: "username"
    }, register("username", {
      required: true,
      min: 1,
      maxLength: 50
    })), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
      className: "border-white border-b px-4 py-2 bg-black",
      type: "email",
      placeholder: "Email"
    }, register("email", {
      required: true,
      maxLength: 50
    })), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", _objectSpread({
      className: "border-white border-b px-4 py-2 bg-black",
      placeholder: "Comment"
    }, register("content", {
      maxLength: 500
    })), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

_s(CommentForm, "RyzdsH99oRiC6Tk17zdHQ1P7Rik=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"]];
});

_c = CommentForm;

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdC9Db21tZW50Rm9ybS50c3giXSwibmFtZXMiOlsiQ29tbWVudEZvcm0iLCJwb3N0SWQiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJvblN1Ym1pdCIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVyciIsInJlcXVpcmVkIiwibWluIiwibWF4TGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9lLFNBQVNBLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQThEO0FBQUE7O0FBQUEsaUJBS3JFQywrREFBTyxFQUw4RDtBQUFBLE1BRXJFQyxRQUZxRSxZQUVyRUEsUUFGcUU7QUFBQSxNQUdyRUMsWUFIcUUsWUFHckVBLFlBSHFFO0FBQUEsTUFJeERDLE1BSndELFlBSXJFQyxTQUpxRSxDQUl4REQsTUFKd0Q7O0FBTXpFLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBMEI7QUFDdkNDLGdEQUFLLENBQ0FDLElBREwsQ0FDVSxvQ0FEVixrQ0FFV0YsSUFGWDtBQUdRUCxZQUFNLEVBQUVBLE1BQU0sQ0FBQ0E7QUFIdkIsUUFLS1UsSUFMTCxDQUtVLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsS0FMVixXQU1XLFVBQUNHLEdBQUQ7QUFBQSxhQUFTRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixDQUFUO0FBQUEsS0FOWDtBQU9ILEdBUkQ7O0FBVUEsc0JBQ0k7QUFDSSxZQUFRLEVBQUVYLFlBQVksQ0FBQ0csUUFBRCxDQUQxQjtBQUVJLGFBQVMsRUFBQywyQkFGZDtBQUFBLDRCQUlJO0FBQ0ksZUFBUyxFQUFDLDBDQURkO0FBRUksVUFBSSxFQUFDLE1BRlQ7QUFHSSxpQkFBVyxFQUFDO0FBSGhCLE9BSVFKLFFBQVEsQ0FBQyxVQUFELEVBQWE7QUFDckJhLGNBQVEsRUFBRSxJQURXO0FBRXJCQyxTQUFHLEVBQUUsQ0FGZ0I7QUFHckJDLGVBQVMsRUFBRTtBQUhVLEtBQWIsQ0FKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBY0k7QUFDSSxlQUFTLEVBQUMsMENBRGQ7QUFFSSxVQUFJLEVBQUMsT0FGVDtBQUdJLGlCQUFXLEVBQUM7QUFIaEIsT0FJUWYsUUFBUSxDQUFDLE9BQUQsRUFBVTtBQUFFYSxjQUFRLEVBQUUsSUFBWjtBQUFrQkUsZUFBUyxFQUFFO0FBQTdCLEtBQVYsQ0FKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRKLGVBb0JJO0FBQ0ksZUFBUyxFQUFDLDBDQURkO0FBRUksaUJBQVcsRUFBQztBQUZoQixPQUdRZixRQUFRLENBQUMsU0FBRCxFQUFZO0FBQUVlLGVBQVMsRUFBRTtBQUFiLEtBQVosQ0FIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCSixlQTBCSTtBQUFPLFVBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4Qkg7O0dBOUN1QmxCLFc7VUFLaEJFLHVEOzs7S0FMZ0JGLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjNjZDc0NDhhODkwZjI0M2I2OTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGNvbW1lbnQ6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50Rm9ybShwb3N0SWQ6IHsgcG9zdElkOiBzdHJpbmcgfSk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCB7XG4gICAgICAgIHJlZ2lzdGVyLFxuICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgICB9ID0gdXNlRm9ybSgpO1xuICAgIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IEZvcm1EYXRhKTogdm9pZCA9PiB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvY29tbWVudHNcIiwge1xuICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgcG9zdElkOiBwb3N0SWQucG9zdElkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItd2hpdGUgYm9yZGVyLWIgcHgtNCBweS0yIGJnLWJsYWNrXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwidXNlcm5hbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDUwLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci13aGl0ZSBib3JkZXItYiBweC00IHB5LTIgYmctYmxhY2tcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiA1MCB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItd2hpdGUgYm9yZGVyLWIgcHgtNCBweS0yIGJnLWJsYWNrXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbW1lbnRcIlxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImNvbnRlbnRcIiwgeyBtYXhMZW5ndGg6IDUwMCB9KX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9