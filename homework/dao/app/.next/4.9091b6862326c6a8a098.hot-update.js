webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("./node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__ = __webpack_require__("../build/contracts/DAO.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app__ = __webpack_require__("./node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);

var _jsxFileName = "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 引入 API

 // 引入 React


 // init web3

var web3 = new __WEBPACK_IMPORTED_MODULE_1_web3___default.a('http://localhost:8545'); // init Contract

var DAOContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__["abi"], "0x8acf5f84036bce8adb09b4d33aaa159616422dac");
web3.eth.getAccounts(function (err, res) {
  if (err) {
    console.log(err);
  }

  web3.eth.defaultAccount = res[0];
}).then(function () {
  web3.eth.getBalance(web3.eth.defaultAccount, function (err, res) {
    console.log(res);
  });
}).then(function () {
  web3.eth.getBalance("0x8acf5f84036bce8adb09b4d33aaa159616422dac", function (err, res) {
    console.log(res);
  });
}); // Transfer

function transfer() {
  DAOContract.methods.transfer("0x8acf5f84036bce8adb09b4d33aaa159616422dac", 1).call().then(function (res) {
    console.log(res);
  });
}

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        style: css.ctn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("text", {
        style: css.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "DAO"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", {
        style: css.btn,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Crowdfund")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("text", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Pool:"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("text", {
        style: css.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, new Date().toString()));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_3_next_app___default.a);


var css = {
  ctn: {
    "height": "100vh",
    "width": "100vw",
    "display": "flex",
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column"
  },
  title: {
    "fontSize": "5rem"
  },
  btn: {
    "width": "8rem",
    "height": "3rem",
    "border-radius": "30px",
    "margin": "3rem"
  },
  pool: {},
  date: {
    "margin": "3rem"
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(web3, "web3", "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js");
  reactHotLoader.register(DAOContract, "DAOContract", "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js");
  reactHotLoader.register(transfer, "transfer", "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js");
  reactHotLoader.register(MyApp, "MyApp", "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js");
  reactHotLoader.register(css, "css", "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.9091b6862326c6a8a098.hot-update.js.map