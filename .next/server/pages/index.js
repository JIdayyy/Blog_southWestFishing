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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1N0Q":
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "1ccW":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Home", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ pages_getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "babel-plugin-superjson-next/tools"
var tools_ = __webpack_require__("is+Z");

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__("1N0Q");

// CONCATENATED MODULE: ./prisma/client.ts

const prisma = new client_["PrismaClient"]();
/* harmony default export */ var client = (prisma);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./src/components/AnimatedComponents/FadeIn.tsx


function FadeIn({
  children,
  className,
  delay = 0
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
    animate: {
      opacity: 1
    },
    initial: {
      opacity: 0
    },
    transition: {
      delay: delay
    },
    className: className,
    children: children
  });
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./src/components/Header/index.tsx




function Header() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-full sm:h-320 h-full relative flex flex-col items-center align-middle justify-center",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "absolute top-20 left-20 z-10 flex flex-col",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        className: "my-6",
        src: "/icons/tel.png",
        width: 20,
        height: 20
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        className: "my-6",
        src: "/icons/mail.png",
        width: 20,
        height: 20
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        className: "my-6",
        src: "/icons/insta.png",
        width: 20,
        height: 20
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      src: "/images/bg_southwestfishing.jpg",
      layout: "fill"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FadeIn, {
      delay: 0.2,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        className: "animate-pulse",
        src: "/images/logo_southwestfishing.png",
        width: 300,
        height: 300
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Assets/Title/Title.tsx
var Title = __webpack_require__("ilDJ");

// CONCATENATED MODULE: ./src/Post/Card.tsx





function Card({
  post
}) {
  console.log(post);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].div, {
    whileHover: {
      backgroundColor: "#2F4F4F",
      scale: 1.02
    },
    className: "text-white items-start align-middle cursor-pointer justify-between flex text-13 w-full h-96 my-10 ",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      width: 200,
      height: 200,
      src: post.picture[0].url
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex  w-full h-full flex-col items-start p-12",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title["a" /* default */], {
        className: "text-xl text-whtie",
        children: post.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "text-10 w-full overflow-fade  overflow-hidden",
        children: post.content
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "text-10 text-gray-500 w-full text-right",
        children: [post.author.name, " le ", post.createdAt.toLocaleDateString()]
      })]
    })]
  });
}
// CONCATENATED MODULE: ./src/Post/index.tsx


function PostList({
  posts
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "w-full px-10 flex flex-col h-640 overflow-y-auto overflow-x-hidden  items-start align-middle ",
    children: posts.map(post => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card, {
      post: post
    }, post.id))
  });
}
// CONCATENATED MODULE: ./src/components/Main/index.tsx





function Main({
  posts
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "md:w-6/12 flex flex-col ",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-col",
      children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Title["a" /* default */], {
        className: "text-white ",
        children: "South west fishing"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Title["a" /* default */], {
        className: "text-white text-20 font-600 my-8",
        children: "Guidage, stages, et initiation \xE0 la p\xEAche au Pays Basque/Sud Landes"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      className: "rounded-4 ",
      src: "/images/main.jpg",
      height: 600,
      width: 400
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title["a" /* default */], {
        className: "text-white text-18 font-400 mt-24",
        children: "Bienvenue sur South West Fishing"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "text-white text-8 font-200  border-b py-14",
        children: ["D\xE9couvrez la p\xEAche dans le sud ouest avec un guide dipl\xF4m\xE9 exp\xE9riment\xE9.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Partir en s\xE9jour ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: "guidage"
        }), " ou initiation s\u2019est s\u2019assurer une journ\xE9e de p\xEAche dans les meilleures conditions, et la certitude de se faire", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: " accompagner"
        }), " par un", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: " encadrant passionn\xE9 et exp\xE9riment\xE9"
        }), ".", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Que vous soyez d\xE9butant ou p\xEAcheur chevron\xE9, nos guidages s\u2019adaptent \xE0 vos besoins.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Vous \xEAtes pl\xFBtot truite ? Enfillez vos wadders et embarquez sur les nives qui nous offiront de splendides paysages et des ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: "poissons"
        }), " joueurs.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Plutot ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: "carnassiers"
        }), " ?", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          children: "L\u2019\xE9tang blanc"
        }), " et ses 183 Hectares abrite Black-Bass Brochet Perches et plus encore ..."]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Title["a" /* default */], {
      className: "text-white text-4xl",
      children: "Actus :"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PostList, {
      posts: posts
    })]
  });
}
// CONCATENATED MODULE: ./src/components/Main/About.tsx



function About() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FadeIn, {
    className: "w-full p-16 text-10 font-300 ",
    children: ["Qui suis-je? Je m'appelle", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      className: "font-600",
      children: "M Bazard Mathieu"
    }), " J'ai 33 ans.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "P\xEAcheur"
    }), " depuis l'\xE2ge de 6 ans, gr\xE2ce \xE0 p\xE8re et mon grand p\xE8re.je suis \xE9galement impliqu\xE9 dans une", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "association"
    }), " de p\xEAche depuis plusieurs ann\xE9es.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " Ma participation \xE0 l'\xE9cole de p\xEAche de", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "l'aappma Nivelle C\xF4te Basque (APN)"
    }), " ma ouvert les yeux me donnant envie d'aller plus loin et de passer mon dipl\xF4me de", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "moniteur guide de p\xEAche"
    }), " et de transmettre ma passion dans un cadre ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "Professionnel"
    }), ". Aujourd'hui,je vous offre mes ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
      children: "services"
    }), " afin de partager mes connaissances et mon savoir-faire."]
  });
}
// CONCATENATED MODULE: ./src/components/Main/Column.tsx





function Column() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FadeIn, {
    delay: 0.3,
    className: "bg-blue-dark w-full md:w-192 md:my-0 text-white flex flex-col justify-start items-start",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "relative w-full h-200 md:h-136",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        className: "rounded-t-4",
        src: "/images/main.jpg",
        layout: "fill"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(About, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-full h-288 p-12 flex flex-col justify-around items-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        className: "my-8",
        src: "/images/epf.png",
        width: 200,
        height: 200
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        src: "/images/st_croix.png",
        width: 230,
        height: 100
      })]
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./pages/index.tsx









function Home(props) {
  console.log(props);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      backgroundColor: "black"
    },
    className: "w-screen min-h-full flex flex-col bg-black",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: " flex md:flex-row flex-col my-48  justify-around",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Main, {
        posts: props.posts
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Column, {})]
    })]
  });
}
const pages_getStaticProps = Object(tools_["withSuperJSONProps"])(async function getStaticProps() {
  const posts = await client.post.findMany({
    include: {
      picture: true,
      author: true,
      comments: true
    }
  });
  console.log(posts);
  return {
    props: {
      posts
    }
  };
}, []);
/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(tools_["withSuperJSONPage"])(Home));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "98FW":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

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

/***/ "is+Z":
/***/ (function(module, exports) {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ })

/******/ });