webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AnimatedComponents_FadeIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/AnimatedComponents/FadeIn */ "./src/components/AnimatedComponents/FadeIn.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AnimatedComponents_ScaleWhileHover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/AnimatedComponents/ScaleWhileHover */ "./src/components/AnimatedComponents/ScaleWhileHover.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");


var _jsxFileName = "/home/jidayyy/Blog_southWestFishing/src/components/Header/index.tsx",
    _s = $RefreshSig$();







var contactButtons = [{
  id: 1,
  name: "Tel",
  value: "06.33.45.32.34",
  image: "/icons/tel.png"
}, {
  id: 2,
  name: "Insta",
  value: "www.instagram.com",
  image: "/icons/insta.png"
}, {
  id: 3,
  name: "Mail",
  value: "southwestfishing@gmail.com",
  image: "/icons/mail.png"
}];
function Header() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isShow = _useState[0],
      setIsShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      selected = _useState2[0],
      setSelected = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full sm:h-320 h-full relative flex flex-col items-center align-middle justify-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute top-20 left-28 z-10 flex items-start align-middle justify-between h-40 flex-col",
      children: contactButtons.map(function (button) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AnimatedComponents_ScaleWhileHover__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "flex",
          scale: 1.01,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
            onMouseEnter: function onMouseEnter() {
              setSelected(button.id);
              setIsShow(true);
            },
            onMouseLeave: function onMouseLeave() {
              setSelected(null);
              setIsShow(false);
            },
            className: "my-6 cursor-pointer",
            src: button.image,
            width: 15,
            height: 15
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this), isShow && selected === button.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AnimatedComponents_FadeIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
            className: "text-10 mx-8 text-gray-600",
            children: button.value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      src: "/images/bg_southwestfishing.jpg",
      layout: "fill"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
      animate: {
        y: 0
      },
      initial: {
        y: -10
      },
      transition: {
        delay: 0.2
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].button, {
          className: " outline-none",
          whileHover: {
            scale: 1.02
          },
          whileTap: {
            scale: 0.95
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AnimatedComponents_FadeIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
            delay: 0.2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
              className: "animate-pulse",
              src: "/images/logo_southwestfishing.png",
              width: 300,
              height: 300
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(Header, "Vb2Gjx/6eFIxi0WueXdhtsrLJoQ=");

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjb250YWN0QnV0dG9ucyIsImlkIiwibmFtZSIsInZhbHVlIiwiaW1hZ2UiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzU2hvdyIsInNldElzU2hvdyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJtYXAiLCJidXR0b24iLCJ5IiwiZGVsYXkiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxDQUNuQjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsS0FBZjtBQUFzQkMsT0FBSyxFQUFFLGdCQUE3QjtBQUErQ0MsT0FBSyxFQUFFO0FBQXRELENBRG1CLEVBRW5CO0FBQ0lILElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxPQUZWO0FBR0lDLE9BQUssRUFBRSxtQkFIWDtBQUlJQyxPQUFLLEVBQUU7QUFKWCxDQUZtQixFQVFuQjtBQUNJSCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsTUFGVjtBQUdJQyxPQUFLLEVBQUUsNEJBSFg7QUFJSUMsT0FBSyxFQUFFO0FBSlgsQ0FSbUIsQ0FBdkI7QUFnQmUsU0FBU0MsTUFBVCxHQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFDLEtBQUQsQ0FETTtBQUFBLE1BQ25DQyxNQURtQztBQUFBLE1BQzNCQyxTQUQyQjs7QUFBQSxtQkFFVkYsc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FGRTtBQUFBLE1BRW5DRyxRQUZtQztBQUFBLE1BRXpCQyxXQUZ5Qjs7QUFHMUMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsd0ZBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywwRkFBZjtBQUFBLGdCQUNLVixjQUFjLENBQUNXLEdBQWYsQ0FBbUIsVUFBQ0MsTUFBRDtBQUFBLDRCQUNoQixxRUFBQyxzRkFBRDtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQWtDLGVBQUssRUFBRSxJQUF6QztBQUFBLGtDQUNJLHFFQUFDLGlEQUFEO0FBQ0ksd0JBQVksRUFBRSx3QkFBTTtBQUNoQkYseUJBQVcsQ0FBQ0UsTUFBTSxDQUFDWCxFQUFSLENBQVg7QUFDQU8sdUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxhQUpMO0FBS0ksd0JBQVksRUFBRSx3QkFBTTtBQUNoQkUseUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUYsdUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDSCxhQVJMO0FBU0kscUJBQVMsRUFBQyxxQkFUZDtBQVVJLGVBQUcsRUFBRUksTUFBTSxDQUFDUixLQVZoQjtBQVdJLGlCQUFLLEVBQUUsRUFYWDtBQVlJLGtCQUFNLEVBQUU7QUFaWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBZUtHLE1BQU0sSUFBSUUsUUFBUSxLQUFLRyxNQUFNLENBQUNYLEVBQTlCLGlCQUNHLHFFQUFDLDZFQUFEO0FBQVEscUJBQVMsRUFBQyw0QkFBbEI7QUFBQSxzQkFDS1csTUFBTSxDQUFDVDtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFuQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQTBCSSxxRUFBQyxpREFBRDtBQUFPLFNBQUcsRUFBQyxpQ0FBWDtBQUE2QyxZQUFNLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSixlQTRCSSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDSSxhQUFPLEVBQUU7QUFBRVUsU0FBQyxFQUFFO0FBQUwsT0FEYjtBQUVJLGFBQU8sRUFBRTtBQUFFQSxTQUFDLEVBQUUsQ0FBQztBQUFOLE9BRmI7QUFHSSxnQkFBVSxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BSGhCO0FBQUEsNkJBS0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNJLHFFQUFDLG9EQUFELENBQVEsTUFBUjtBQUNJLG1CQUFTLEVBQUMsZUFEZDtBQUVJLG9CQUFVLEVBQUU7QUFBRUMsaUJBQUssRUFBRTtBQUFULFdBRmhCO0FBR0ksa0JBQVEsRUFBRTtBQUFFQSxpQkFBSyxFQUFFO0FBQVQsV0FIZDtBQUFBLGlDQUtJLHFFQUFDLDZFQUFEO0FBQVEsaUJBQUssRUFBRSxHQUFmO0FBQUEsbUNBQ0kscUVBQUMsaURBQUQ7QUFDSSx1QkFBUyxFQUFDLGVBRGQ7QUFFSSxpQkFBRyxFQUFDLG1DQUZSO0FBR0ksbUJBQUssRUFBRSxHQUhYO0FBSUksb0JBQU0sRUFBRTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcURIOztHQXhEdUJWLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMDI3ZWJhNGQyOWI2N2YzNGRlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhZGVJbiBmcm9tIFwiQGNvbXBvbmVudHMvQW5pbWF0ZWRDb21wb25lbnRzL0ZhZGVJblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU2NhbGVXaGlsZUhvdmVyIGZyb20gXCJAY29tcG9uZW50cy9BbmltYXRlZENvbXBvbmVudHMvU2NhbGVXaGlsZUhvdmVyXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBjb250YWN0QnV0dG9ucyA9IFtcbiAgICB7IGlkOiAxLCBuYW1lOiBcIlRlbFwiLCB2YWx1ZTogXCIwNi4zMy40NS4zMi4zNFwiLCBpbWFnZTogXCIvaWNvbnMvdGVsLnBuZ1wiIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJJbnN0YVwiLFxuICAgICAgICB2YWx1ZTogXCJ3d3cuaW5zdGFncmFtLmNvbVwiLFxuICAgICAgICBpbWFnZTogXCIvaWNvbnMvaW5zdGEucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIk1haWxcIixcbiAgICAgICAgdmFsdWU6IFwic291dGh3ZXN0ZmlzaGluZ0BnbWFpbC5jb21cIixcbiAgICAgICAgaW1hZ2U6IFwiL2ljb25zL21haWwucG5nXCIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2lzU2hvdywgc2V0SXNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOmgtMzIwIGgtZnVsbCByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIwIGxlZnQtMjggei0xMCBmbGV4IGl0ZW1zLXN0YXJ0IGFsaWduLW1pZGRsZSBqdXN0aWZ5LWJldHdlZW4gaC00MCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgIHtjb250YWN0QnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U2NhbGVXaGlsZUhvdmVyIGNsYXNzTmFtZT1cImZsZXhcIiBzY2FsZT17MS4wMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQoYnV0dG9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTaG93KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1Nob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtidXR0b24uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzU2hvdyAmJiBzZWxlY3RlZCA9PT0gYnV0dG9uLmlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZUluIGNsYXNzTmFtZT1cInRleHQtMTAgbXgtOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidXR0b24udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlSW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1NjYWxlV2hpbGVIb3Zlcj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvYmdfc291dGh3ZXN0ZmlzaGluZy5qcGdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cblxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAgfX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0xMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlSW4gZGVsYXk9ezAuMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ29fc291dGh3ZXN0ZmlzaGluZy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlSW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9