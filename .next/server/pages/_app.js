module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/tailwindcss/tailwind.css
var tailwind = __webpack_require__("uXJ4");

// EXTERNAL MODULE: ./src/styles/global.css
var global = __webpack_require__("rMck");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./src/services/graphql/index.ts

let graphql_apolloClient = null;
const createApolloClient = new client_["ApolloClient"]({
  ssrMode: true,
  uri: "https://api.spacex.land/graphql/",
  cache: new client_["InMemoryCache"]()
});
const initializeApollo = () => {
  // For SSG and SSR always create a new Apollo Client
  if (true) {
    return createApolloClient;
  } // Create the Apollo Client once in the client


  if (!graphql_apolloClient) {
    graphql_apolloClient = createApolloClient;
  }

  return graphql_apolloClient;
};
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__("iddH");

// EXTERNAL MODULE: external "react-query/hydration"
var hydration_ = __webpack_require__("iqMz");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./src/redux/slices/counter/index.ts

const initialState = {
  count: 20
};
const counterSlice = Object(toolkit_["createSlice"])({
  name: "counter",
  initialState,
  reducers: {
    increase: state => {
      state.count++;
    },
    decrease: state => {
      state.count--;
    }
  }
});
const {
  increase,
  decrease
} = counterSlice.actions;
/* harmony default export */ var counter = (counterSlice.reducer);
// CONCATENATED MODULE: ./src/redux/reducers.ts


const rootReducer = Object(external_redux_["combineReducers"])({
  counter: counter
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./src/redux/store.ts



const store = Object(toolkit_["configureStore"])({
  reducer: reducers
});
const useAppDispatch = () => Object(external_react_redux_["useDispatch"])();
/* harmony default export */ var redux_store = (store);
// CONCATENATED MODULE: ./src/components/Assets/button/Burger.tsx


function Burger({
  setIsMenu
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
    onClick: () => setIsMenu(c => !c),
    id: "menuToggle",
    className: "absolute top-20 right-20 z-9999",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      type: "checkbox"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
  });
}
// EXTERNAL MODULE: ./src/components/Assets/Title/Title.tsx
var Title = __webpack_require__("ilDJ");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./src/components/Menu/index.tsx



function Menu() {
  const variants = {
    open: {
      width: "100%"
    },
    close: {
      width: "0%"
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
    variants: variants,
    animate: "open",
    initial: "close",
    className: "fixed h-screen w-screen flex  z-20",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "md:w-1/4 w-full flex flex-col items-center align-middle justify-center h-screen bg-black",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Title["a" /* default */], {
        className: "text-white",
        children: "SOUTH WEST FISHING"
      })
    })
  });
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/Layout/index.tsx






function Layout({
  children,
  page
}) {
  const {
    0: isMenu,
    1: setIsMenu
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      backgroundColor: "black"
    },
    className: "w-screen min-h-screen flex flex-col",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: page
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-screen min-h-screen flex flex-col",
      children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Burger, {
        setIsMenu: setIsMenu
      }), isMenu && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu, {}), children]
    })]
  });
}
// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const apolloClient = initializeApollo();
  const queryClient = new external_react_query_["QueryClient"]();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(client_["ApolloProvider"], {
    client: apolloClient,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_query_["QueryClientProvider"], {
      client: queryClient,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(hydration_["Hydrate"], {
        state: pageProps.dehydratedState,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
          store: redux_store,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, {
            page: "South West Fishing",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
          })
        })
      })
    })
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iddH":
/***/ (function(module, exports) {

module.exports = require("react-query");

/***/ }),

/***/ "ilDJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Title; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Title({
  children,
  className
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: className,
    children: children
  });
}

/***/ }),

/***/ "iqMz":
/***/ (function(module, exports) {

module.exports = require("react-query/hydration");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rMck":
/***/ (function(module, exports) {



/***/ }),

/***/ "uXJ4":
/***/ (function(module, exports) {



/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });