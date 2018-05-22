webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("./node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__ = __webpack_require__("../build/contracts/DAO.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);

var _jsxFileName = "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

// 引入 API

 // 引入 React

 // init web3

var web3 = new __WEBPACK_IMPORTED_MODULE_1_web3___default.a('http://localhost:8545'); // init Contract

var DAOContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__["abi"], "0x8acf5f84036bce8adb09b4d33aaa159616422dac");

/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var accounts;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return web3.eth.getAccounts();

        case 2:
          accounts = _context.sent;

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

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

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    style: css.ctn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("text", {
    style: css.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "DAO"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("button", {
    style: css.btn,
    onClick: function onClick() {
      return alert("sorry, not now, tomorrow");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Crowdfund")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("text", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Pool:"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("text", {
    style: css.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "2018-5-23"));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
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
  reactHotLoader.register(css, "css", "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js");
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
//# sourceMappingURL=4.0ab92ae0a6c7b85ec5fa.hot-update.js.map