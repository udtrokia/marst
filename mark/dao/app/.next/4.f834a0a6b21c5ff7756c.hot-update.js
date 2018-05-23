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
var _jsxFileName = "/Users/mercury/Code/outsource/marst/mark/dao/app/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/** DEPS **/


/*********/

/*
* WEB3 API **/

var web3 = new __WEBPACK_IMPORTED_MODULE_1_web3___default.a('http://localhost:8545');
var contractAddress = "0x21b741b4dfb37ef14fddf699b7eeb7e11065f799"; // 这里修改为合约的地址

var DAOContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__["abi"], contractAddress);
var contractFund;
web3.eth.getAccounts(function (err, res) {
  if (err) {
    console.log(err);
  }

  web3.eth.defaultAccount = res[0];
}).then(function () {
  web3.eth.getBalance(web3.eth.defaultAccount, function (err, res) {
    console.log(res);
  });
});

function transfer() {
  DAOContract.methods.transfer(contractAddress, 1).send({
    from: web3.eth.defaultAccount
  }).then(function (res) {
    alert("交易ID为:" + res.transactionHash);
    alert("消耗gas:" + res.gasUsed);
    console.log(res);
    return;
  });
}
/*
********/

/*
* APP **/


var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: css.ctn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text", {
    style: css.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "DAO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    style: css.btn,
    onClick: function onClick() {
      return transfer();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "Crowdfund")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "contractAddress:  ", contractAddress), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text", {
    style: css.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
  /*
  *****/

};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(web3, "web3", "/Users/mercury/Code/outsource/marst/mark/dao/app/pages/index.js");
  reactHotLoader.register(contractAddress, "contractAddress", "/Users/mercury/Code/outsource/marst/mark/dao/app/pages/index.js");
  reactHotLoader.register(DAOContract, "DAOContract", "/Users/mercury/Code/outsource/marst/mark/dao/app/pages/index.js");
  reactHotLoader.register(contractFund, "contractFund", "/Users/mercury/Code/outsource/marst/mark/dao/app/pages/index.js");
  reactHotLoader.register(transfer, "transfer", "/Users/mercury/Code/outsource/marst/mark/dao/app/pages/index.js");
  reactHotLoader.register(css, "css", "/Users/mercury/Code/outsource/marst/mark/dao/app/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/mercury/Code/outsource/marst/mark/dao/app/pages/index.js");
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
//# sourceMappingURL=4.f834a0a6b21c5ff7756c.hot-update.js.map