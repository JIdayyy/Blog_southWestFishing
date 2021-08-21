webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AnimatedComponents_FadeIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/AnimatedComponents/FadeIn */ \"./src/components/AnimatedComponents/FadeIn.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AnimatedComponents_ScaleWhileHover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/AnimatedComponents/ScaleWhileHover */ \"./src/components/AnimatedComponents/ScaleWhileHover.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/julien/DEV/Blog_southWestFishing/src/components/Header/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar contactButtons = [{\n  id: 1,\n  name: \"Tel\",\n  value: \"06.33.45.32.34\",\n  image: \"/icons/tel.png\"\n}, {\n  id: 2,\n  name: \"Insta\",\n  value: \"www.instagram.com\",\n  image: \"/icons/insta.png\"\n}, {\n  id: 3,\n  name: \"Mail\",\n  value: \"southwestfishing@gmail.com\",\n  image: \"/icons/mail.png\"\n}];\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isShow = _useState[0],\n      setIsShow = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      selected = _useState2[0],\n      setSelected = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"w-full sm:h-320 h-full relative flex flex-col items-center align-middle justify-center\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute top-20 left-28 z-10 flex items-center align-middle justify-between h-40 flex-col\",\n      children: contactButtons.map(function (button) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AnimatedComponents_ScaleWhileHover__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          className: \"flex\",\n          scale: 1.2,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            onMouseEnter: function onMouseEnter() {\n              setSelected(button.id);\n              setIsShow(true);\n            },\n            onMouseLeave: function onMouseLeave() {\n              setSelected(null);\n            },\n            className: \"my-6 cursor-pointer\",\n            src: button.image,\n            width: 15,\n            height: 15\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, _this), isShow && selected === button.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-10 mx-8 text-gray-600\",\n            children: button.value\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 29\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      src: \"/images/bg_southwestfishing.jpg\",\n      layout: \"fill\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AnimatedComponents_FadeIn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      delay: 0.2,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        className: \"animate-pulse\",\n        src: \"/images/logo_southwestfishing.png\",\n        width: 300,\n        height: 300\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Header, \"Vb2Gjx/6eFIxi0WueXdhtsrLJoQ=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9hZWViIl0sIm5hbWVzIjpbImNvbnRhY3RCdXR0b25zIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJpbWFnZSIsIkhlYWRlciIsInVzZVN0YXRlIiwiaXNTaG93Iiwic2V0SXNTaG93Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm1hcCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxjQUFjLEdBQUcsQ0FDbkI7QUFBRUMsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLEtBQWY7QUFBc0JDLE9BQUssRUFBRSxnQkFBN0I7QUFBK0NDLE9BQUssRUFBRTtBQUF0RCxDQURtQixFQUVuQjtBQUNJSCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsT0FGVjtBQUdJQyxPQUFLLEVBQUUsbUJBSFg7QUFJSUMsT0FBSyxFQUFFO0FBSlgsQ0FGbUIsRUFRbkI7QUFDSUgsSUFBRSxFQUFFLENBRFI7QUFFSUMsTUFBSSxFQUFFLE1BRlY7QUFHSUMsT0FBSyxFQUFFLDRCQUhYO0FBSUlDLE9BQUssRUFBRTtBQUpYLENBUm1CLENBQXZCO0FBZ0JlLFNBQVNDLE1BQVQsR0FBK0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZEMsc0RBQVEsQ0FBQyxLQUFELENBRE07QUFBQSxNQUNuQ0MsTUFEbUM7QUFBQSxNQUMzQkMsU0FEMkI7O0FBQUEsbUJBRVZGLHNEQUFRLENBQWdCLElBQWhCLENBRkU7QUFBQSxNQUVuQ0csUUFGbUM7QUFBQSxNQUV6QkMsV0FGeUI7O0FBRzFDLHNCQUNJO0FBQUssYUFBUyxFQUFDLHdGQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsMkZBQWY7QUFBQSxnQkFDS1YsY0FBYyxDQUFDVyxHQUFmLENBQW1CLFVBQUNDLE1BQUQ7QUFBQSw0QkFDaEIscUVBQUMsc0ZBQUQ7QUFBaUIsbUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxlQUFLLEVBQUUsR0FBekM7QUFBQSxrQ0FDSSxxRUFBQyxpREFBRDtBQUNJLHdCQUFZLEVBQUUsd0JBQU07QUFDaEJGLHlCQUFXLENBQUNFLE1BQU0sQ0FBQ1gsRUFBUixDQUFYO0FBQ0FPLHVCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsYUFKTDtBQUtJLHdCQUFZLEVBQUUsd0JBQU07QUFDaEJFLHlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0gsYUFQTDtBQVFJLHFCQUFTLEVBQUMscUJBUmQ7QUFTSSxlQUFHLEVBQUVFLE1BQU0sQ0FBQ1IsS0FUaEI7QUFVSSxpQkFBSyxFQUFFLEVBVlg7QUFXSSxrQkFBTSxFQUFFO0FBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQWNLRyxNQUFNLElBQUlFLFFBQVEsS0FBS0csTUFBTSxDQUFDWCxFQUE5QixpQkFDRztBQUFLLHFCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQkFDS1csTUFBTSxDQUFDVDtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQW5CO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBeUJJLHFFQUFDLGlEQUFEO0FBQU8sU0FBRyxFQUFDLGlDQUFYO0FBQTZDLFlBQU0sRUFBQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJKLGVBMEJJLHFFQUFDLDZFQUFEO0FBQVEsV0FBSyxFQUFFLEdBQWY7QUFBQSw2QkFDSSxxRUFBQyxpREFBRDtBQUNJLGlCQUFTLEVBQUMsZUFEZDtBQUVJLFdBQUcsRUFBQyxtQ0FGUjtBQUdJLGFBQUssRUFBRSxHQUhYO0FBSUksY0FBTSxFQUFFO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQ0g7O0dBeEN1QkUsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFkZUluIGZyb20gXCJAY29tcG9uZW50cy9BbmltYXRlZENvbXBvbmVudHMvRmFkZUluXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IFNjYWxlV2hpbGVIb3ZlciBmcm9tIFwiQGNvbXBvbmVudHMvQW5pbWF0ZWRDb21wb25lbnRzL1NjYWxlV2hpbGVIb3ZlclwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBjb250YWN0QnV0dG9ucyA9IFtcbiAgICB7IGlkOiAxLCBuYW1lOiBcIlRlbFwiLCB2YWx1ZTogXCIwNi4zMy40NS4zMi4zNFwiLCBpbWFnZTogXCIvaWNvbnMvdGVsLnBuZ1wiIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJJbnN0YVwiLFxuICAgICAgICB2YWx1ZTogXCJ3d3cuaW5zdGFncmFtLmNvbVwiLFxuICAgICAgICBpbWFnZTogXCIvaWNvbnMvaW5zdGEucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIk1haWxcIixcbiAgICAgICAgdmFsdWU6IFwic291dGh3ZXN0ZmlzaGluZ0BnbWFpbC5jb21cIixcbiAgICAgICAgaW1hZ2U6IFwiL2ljb25zL21haWwucG5nXCIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOmgtMzIwIGgtZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIwIGxlZnQtMjggei0xMCBmbGV4IGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1iZXR3ZWVuIGgtNDAgZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdEJ1dHRvbnMubWFwKChidXR0b24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFNjYWxlV2hpbGVIb3ZlciBjbGFzc05hbWU9XCJmbGV4XCIgc2NhbGU9ezEuMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoYnV0dG9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtidXR0b24uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzU2hvdyAmJiBzZWxlY3RlZCA9PT0gYnV0dG9uLmlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMTAgbXgtOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidXR0b24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1NjYWxlV2hpbGVIb3Zlcj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvYmdfc291dGh3ZXN0ZmlzaGluZy5qcGdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgICAgIDxGYWRlSW4gZGVsYXk9ezAuMn0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ29fc291dGh3ZXN0ZmlzaGluZy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GYWRlSW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ })

})