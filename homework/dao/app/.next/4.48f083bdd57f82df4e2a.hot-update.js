webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("./node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__ = __webpack_require__("../build/contracts/DAO.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__);
var _jsxFileName = "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// 引入 API

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
}).then(transfer()); // transfer

function transfer() {
  DAOContract.methods.transfer("0x8acf5f84036bce8adb09b4d33aaa159616422dac", 1).call().then(function (res) {
    console.log(res);
  });
}

var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "height:100%;width:100%;",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    style: {
      "textAlign": "center",
      "marginTop": "10rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "DAO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    style: {
      "width": "8rem",
      "height": "8rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Crowdfund"));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
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
//# sourceMappingURL=4.48f083bdd57f82df4e2a.hot-update.js.map