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
          className: "outline-none focus:outline-none outline-none",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjb250YWN0QnV0dG9ucyIsImlkIiwibmFtZSIsInZhbHVlIiwiaW1hZ2UiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzU2hvdyIsInNldElzU2hvdyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJtYXAiLCJidXR0b24iLCJ5IiwiZGVsYXkiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyxDQUNuQjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsS0FBZjtBQUFzQkMsT0FBSyxFQUFFLGdCQUE3QjtBQUErQ0MsT0FBSyxFQUFFO0FBQXRELENBRG1CLEVBRW5CO0FBQ0lILElBQUUsRUFBRSxDQURSO0FBRUlDLE1BQUksRUFBRSxPQUZWO0FBR0lDLE9BQUssRUFBRSxtQkFIWDtBQUlJQyxPQUFLLEVBQUU7QUFKWCxDQUZtQixFQVFuQjtBQUNJSCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxNQUFJLEVBQUUsTUFGVjtBQUdJQyxPQUFLLEVBQUUsNEJBSFg7QUFJSUMsT0FBSyxFQUFFO0FBSlgsQ0FSbUIsQ0FBdkI7QUFnQmUsU0FBU0MsTUFBVCxHQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNkQyxzREFBUSxDQUFDLEtBQUQsQ0FETTtBQUFBLE1BQ25DQyxNQURtQztBQUFBLE1BQzNCQyxTQUQyQjs7QUFBQSxtQkFFVkYsc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FGRTtBQUFBLE1BRW5DRyxRQUZtQztBQUFBLE1BRXpCQyxXQUZ5Qjs7QUFHMUMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsd0ZBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywwRkFBZjtBQUFBLGdCQUNLVixjQUFjLENBQUNXLEdBQWYsQ0FBbUIsVUFBQ0MsTUFBRDtBQUFBLDRCQUNoQixxRUFBQyxzRkFBRDtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQWtDLGVBQUssRUFBRSxJQUF6QztBQUFBLGtDQUNJLHFFQUFDLGlEQUFEO0FBQ0ksd0JBQVksRUFBRSx3QkFBTTtBQUNoQkYseUJBQVcsQ0FBQ0UsTUFBTSxDQUFDWCxFQUFSLENBQVg7QUFDQU8sdUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxhQUpMO0FBS0ksd0JBQVksRUFBRSx3QkFBTTtBQUNoQkUseUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUYsdUJBQVMsQ0FBQyxLQUFELENBQVQ7QUFDSCxhQVJMO0FBU0kscUJBQVMsRUFBQyxxQkFUZDtBQVVJLGVBQUcsRUFBRUksTUFBTSxDQUFDUixLQVZoQjtBQVdJLGlCQUFLLEVBQUUsRUFYWDtBQVlJLGtCQUFNLEVBQUU7QUFaWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBZUtHLE1BQU0sSUFBSUUsUUFBUSxLQUFLRyxNQUFNLENBQUNYLEVBQTlCLGlCQUNHLHFFQUFDLDZFQUFEO0FBQVEscUJBQVMsRUFBQyw0QkFBbEI7QUFBQSxzQkFDS1csTUFBTSxDQUFDVDtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZ0I7QUFBQSxPQUFuQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQTBCSSxxRUFBQyxpREFBRDtBQUFPLFNBQUcsRUFBQyxpQ0FBWDtBQUE2QyxZQUFNLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSixlQTRCSSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDSSxhQUFPLEVBQUU7QUFBRVUsU0FBQyxFQUFFO0FBQUwsT0FEYjtBQUVJLGFBQU8sRUFBRTtBQUFFQSxTQUFDLEVBQUUsQ0FBQztBQUFOLE9BRmI7QUFHSSxnQkFBVSxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BSGhCO0FBQUEsNkJBS0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNJLHFFQUFDLG9EQUFELENBQVEsTUFBUjtBQUNJLG1CQUFTLEVBQUMsOENBRGQ7QUFFSSxvQkFBVSxFQUFFO0FBQUVDLGlCQUFLLEVBQUU7QUFBVCxXQUZoQjtBQUdJLGtCQUFRLEVBQUU7QUFBRUEsaUJBQUssRUFBRTtBQUFULFdBSGQ7QUFBQSxpQ0FLSSxxRUFBQyw2RUFBRDtBQUFRLGlCQUFLLEVBQUUsR0FBZjtBQUFBLG1DQUNJLHFFQUFDLGlEQUFEO0FBQ0ksdUJBQVMsRUFBQyxlQURkO0FBRUksaUJBQUcsRUFBQyxtQ0FGUjtBQUdJLG1CQUFLLEVBQUUsR0FIWDtBQUlJLG9CQUFNLEVBQUU7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFESDs7R0F4RHVCVixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzRjOGUzZTUwMGY2MTlmNmYyZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGYWRlSW4gZnJvbSBcIkBjb21wb25lbnRzL0FuaW1hdGVkQ29tcG9uZW50cy9GYWRlSW5cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFNjYWxlV2hpbGVIb3ZlciBmcm9tIFwiQGNvbXBvbmVudHMvQW5pbWF0ZWRDb21wb25lbnRzL1NjYWxlV2hpbGVIb3ZlclwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgY29udGFjdEJ1dHRvbnMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogXCJUZWxcIiwgdmFsdWU6IFwiMDYuMzMuNDUuMzIuMzRcIiwgaW1hZ2U6IFwiL2ljb25zL3RlbC5wbmdcIiB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6IFwiSW5zdGFcIixcbiAgICAgICAgdmFsdWU6IFwid3d3Lmluc3RhZ3JhbS5jb21cIixcbiAgICAgICAgaW1hZ2U6IFwiL2ljb25zL2luc3RhLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogXCJNYWlsXCIsXG4gICAgICAgIHZhbHVlOiBcInNvdXRod2VzdGZpc2hpbmdAZ21haWwuY29tXCIsXG4gICAgICAgIGltYWdlOiBcIi9pY29ucy9tYWlsLnBuZ1wiLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IFtpc1Nob3csIHNldElzU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTpoLTMyMCBoLWZ1bGwgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yMCBsZWZ0LTI4IHotMTAgZmxleCBpdGVtcy1zdGFydCBhbGlnbi1taWRkbGUganVzdGlmeS1iZXR3ZWVuIGgtNDAgZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICB7Y29udGFjdEJ1dHRvbnMubWFwKChidXR0b24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFNjYWxlV2hpbGVIb3ZlciBjbGFzc05hbWU9XCJmbGV4XCIgc2NhbGU9ezEuMDF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkKGJ1dHRvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU2hvdyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTYgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YnV0dG9uLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1Nob3cgJiYgc2VsZWN0ZWQgPT09IGJ1dHRvbi5pZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGVJbiBjbGFzc05hbWU9XCJ0ZXh0LTEwIG14LTggdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZUluPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TY2FsZVdoaWxlSG92ZXI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2JnX3NvdXRod2VzdGZpc2hpbmcuanBnXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwIH19XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAtMTAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGVJbiBkZWxheT17MC4yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1wdWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nb19zb3V0aHdlc3RmaXNoaW5nLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGVJbj5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=