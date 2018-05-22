module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../build/contracts/DAO.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"DAO","abi":[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b5060405160208061033583398101806040528101908080519060200190929190505050806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550506102af806100866000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806370a0823114610051578063a9059cbb146100a8575b600080fd5b34801561005d57600080fd5b50610092600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100f5565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100f3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061010d565b005b60006020528060005260406000206000915090505481565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561015a57600080fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401101515156101e757600080fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555050505600a165627a7a72305820772e30c0d8299d6126fee11931fea54b6650c3acb6aef30fed5cec186f8f7e7c0029","deployedBytecode":"0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806370a0823114610051578063a9059cbb146100a8575b600080fd5b34801561005d57600080fd5b50610092600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100f5565b6040518082815260200191505060405180910390f35b3480156100b457600080fd5b506100f3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061010d565b005b60006020528060005260406000206000915090505481565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561015a57600080fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401101515156101e757600080fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555050505600a165627a7a72305820772e30c0d8299d6126fee11931fea54b6650c3acb6aef30fed5cec186f8f7e7c0029","sourceMap":"26:770:0:-;;;228:142;8:9:-1;5:2;;;30:1;27;20:12;5:2;228:142:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;300:13;276:9;:21;286:10;276:21;;;;;;;;;;;;;;;:37;;;;228:142;26:770;;;;;;","deployedSourceMap":"26:770:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;91:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;91:45:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;393:401;;8:9:-1;5:2;;;30:1;27;20:12;5:2;393:401:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;91:45;;;;;;;;;;;;;;;;;:::o;393:401::-;486:6;461:9;:21;471:10;461:21;;;;;;;;;;;;;;;;:31;;453:40;;;;;;;;578:9;:14;588:3;578:14;;;;;;;;;;;;;;;;568:6;551:9;:14;561:3;551:14;;;;;;;;;;;;;;;;:23;:41;;543:50;;;;;;;;647:6;622:9;:21;632:10;622:21;;;;;;;;;;;;;;;;:31;;;;;;;;;;;724:6;706:9;:14;716:3;706:14;;;;;;;;;;;;;;;;:24;;;;;;;;;;;393:401;;:::o","source":"pragma solidity ^0.4.20;\n\ncontract DAO {\n  /* This creates an array with all balances */\n  mapping (address => uint256) public balanceOf;\n\n  /* Initializes contract with initial supply tokens to the creator of the contract */\n  constructor(uint256 initialSupply) public {\n    balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens\n  }\n\n  /* Send coins */\n  function transfer(address _to, uint256 _value) public {\n    require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough\n    require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows\n    balanceOf[msg.sender] -= _value;                    // Subtract from the sender\n    balanceOf[_to] += _value;                           // Add the same to the recipient\n  }\n}\n","sourcePath":"/Users/mercury/Code/outsource/marst/dao/contracts/DAO.sol","ast":{"absolutePath":"/Users/mercury/Code/outsource/marst/dao/contracts/DAO.sol","exportedSymbols":{"DAO":[61]},"id":62,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":61,"linearizedBaseContracts":[61],"name":"DAO","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":5,"name":"balanceOf","nodeType":"VariableDeclaration","scope":61,"src":"91:45:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":4,"keyType":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"100:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"91:28:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":3,"name":"uint256","nodeType":"ElementaryTypeName","src":"111:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":17,"nodeType":"Block","src":"270:100:0","statements":[{"expression":{"argumentTypes":null,"id":15,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":10,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"276:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":13,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":11,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"286:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":12,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"286:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"276:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":14,"name":"initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7,"src":"300:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"276:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":16,"nodeType":"ExpressionStatement","src":"276:37:0"}]},"documentation":null,"id":18,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":8,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7,"name":"initialSupply","nodeType":"VariableDeclaration","scope":18,"src":"240:21:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6,"name":"uint256","nodeType":"ElementaryTypeName","src":"240:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"239:23:0"},"payable":false,"returnParameters":{"id":9,"nodeType":"ParameterList","parameters":[],"src":"270:0:0"},"scope":61,"src":"228:142:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":59,"nodeType":"Block","src":"447:347:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":31,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":26,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"461:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":29,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":27,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"471:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":28,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"471:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"461:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">=","rightExpression":{"argumentTypes":null,"id":30,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"486:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"461:31:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":25,"name":"require","nodeType":"Identifier","overloadedDeclarations":[79,80],"referencedDeclaration":79,"src":"453:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":32,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"453:40:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":33,"nodeType":"ExpressionStatement","src":"453:40:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":35,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"551:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"id":36,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":20,"src":"561:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"551:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"id":38,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"568:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"551:23:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">=","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":40,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"578:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":42,"indexExpression":{"argumentTypes":null,"id":41,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":20,"src":"588:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"578:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"551:41:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":34,"name":"require","nodeType":"Identifier","overloadedDeclarations":[79,80],"referencedDeclaration":79,"src":"543:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":44,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"543:50:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":45,"nodeType":"ExpressionStatement","src":"543:50:0"},{"expression":{"argumentTypes":null,"id":51,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":46,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"622:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":49,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":47,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"632:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":48,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"632:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"622:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":50,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"647:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"622:31:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":52,"nodeType":"ExpressionStatement","src":"622:31:0"},{"expression":{"argumentTypes":null,"id":57,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":53,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"706:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":55,"indexExpression":{"argumentTypes":null,"id":54,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":20,"src":"716:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"706:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":56,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"724:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"706:24:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":58,"nodeType":"ExpressionStatement","src":"706:24:0"}]},"documentation":null,"id":60,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","parameters":{"id":23,"nodeType":"ParameterList","parameters":[{"constant":false,"id":20,"name":"_to","nodeType":"VariableDeclaration","scope":60,"src":"411:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":19,"name":"address","nodeType":"ElementaryTypeName","src":"411:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":22,"name":"_value","nodeType":"VariableDeclaration","scope":60,"src":"424:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":21,"name":"uint256","nodeType":"ElementaryTypeName","src":"424:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"410:29:0"},"payable":false,"returnParameters":{"id":24,"nodeType":"ParameterList","parameters":[],"src":"447:0:0"},"scope":61,"src":"393:401:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":62,"src":"26:770:0"}],"src":"0:797:0"},"legacyAST":{"absolutePath":"/Users/mercury/Code/outsource/marst/dao/contracts/DAO.sol","exportedSymbols":{"DAO":[61]},"id":62,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".20"],"nodeType":"PragmaDirective","src":"0:24:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":61,"linearizedBaseContracts":[61],"name":"DAO","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":5,"name":"balanceOf","nodeType":"VariableDeclaration","scope":61,"src":"91:45:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":4,"keyType":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"100:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"91:28:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":3,"name":"uint256","nodeType":"ElementaryTypeName","src":"111:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"body":{"id":17,"nodeType":"Block","src":"270:100:0","statements":[{"expression":{"argumentTypes":null,"id":15,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":10,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"276:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":13,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":11,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"286:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":12,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"286:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"276:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":14,"name":"initialSupply","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":7,"src":"300:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"276:37:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":16,"nodeType":"ExpressionStatement","src":"276:37:0"}]},"documentation":null,"id":18,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":8,"nodeType":"ParameterList","parameters":[{"constant":false,"id":7,"name":"initialSupply","nodeType":"VariableDeclaration","scope":18,"src":"240:21:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":6,"name":"uint256","nodeType":"ElementaryTypeName","src":"240:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"239:23:0"},"payable":false,"returnParameters":{"id":9,"nodeType":"ParameterList","parameters":[],"src":"270:0:0"},"scope":61,"src":"228:142:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":59,"nodeType":"Block","src":"447:347:0","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":31,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":26,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"461:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":29,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":27,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"471:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":28,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"471:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"461:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">=","rightExpression":{"argumentTypes":null,"id":30,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"486:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"461:31:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":25,"name":"require","nodeType":"Identifier","overloadedDeclarations":[79,80],"referencedDeclaration":79,"src":"453:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":32,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"453:40:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":33,"nodeType":"ExpressionStatement","src":"453:40:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":35,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"551:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"id":36,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":20,"src":"561:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"551:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"+","rightExpression":{"argumentTypes":null,"id":38,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"568:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"551:23:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":">=","rightExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":40,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"578:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":42,"indexExpression":{"argumentTypes":null,"id":41,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":20,"src":"588:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"578:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"551:41:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":34,"name":"require","nodeType":"Identifier","overloadedDeclarations":[79,80],"referencedDeclaration":79,"src":"543:7:0","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":44,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"543:50:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":45,"nodeType":"ExpressionStatement","src":"543:50:0"},{"expression":{"argumentTypes":null,"id":51,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":46,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"622:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":49,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":47,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":76,"src":"632:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":48,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"632:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"622:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":50,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"647:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"622:31:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":52,"nodeType":"ExpressionStatement","src":"622:31:0"},{"expression":{"argumentTypes":null,"id":57,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":53,"name":"balanceOf","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"706:9:0","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":55,"indexExpression":{"argumentTypes":null,"id":54,"name":"_to","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":20,"src":"716:3:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"706:14:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":56,"name":"_value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":22,"src":"724:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"706:24:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":58,"nodeType":"ExpressionStatement","src":"706:24:0"}]},"documentation":null,"id":60,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"transfer","nodeType":"FunctionDefinition","parameters":{"id":23,"nodeType":"ParameterList","parameters":[{"constant":false,"id":20,"name":"_to","nodeType":"VariableDeclaration","scope":60,"src":"411:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":19,"name":"address","nodeType":"ElementaryTypeName","src":"411:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":22,"name":"_value","nodeType":"VariableDeclaration","scope":60,"src":"424:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":21,"name":"uint256","nodeType":"ElementaryTypeName","src":"424:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"410:29:0"},"payable":false,"returnParameters":{"id":24,"nodeType":"ParameterList","parameters":[],"src":"447:0:0"},"scope":61,"src":"393:401:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":62,"src":"26:770:0"}],"src":"0:797:0"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"1526991514627":{"events":{},"links":{},"address":"0x80ea9554944a2cc330f2823019949c9ad6fe05cd","transactionHash":"0x2b975fc5149730b50eae44088e9919e9f4a1a43b75fc35bf99f91f19f7ed7c8b"},"1526995762693":{"events":{},"links":{},"address":"0x99cfd5da48099cf183a95f2fb979f0e9b1aab852","transactionHash":"0x2b975fc5149730b50eae44088e9919e9f4a1a43b75fc35bf99f91f19f7ed7c8b"},"1527002229291":{"events":{},"links":{},"address":"0x8acf5f84036bce8adb09b4d33aaa159616422dac","transactionHash":"0x564dcf9cd62fea641655aab7473a6c9197bf27b70d94547cabc24770d525ea0e"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-22T15:32:38.262Z"}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__ = __webpack_require__("../build/contracts/DAO.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__);
var _jsxFileName = "/Users/mercury/Code/outsource/marst/dao/app/pages/index.js";


/** DEPS **/


/*********/

/*
* WEB3 API **/

var web3 = new __WEBPACK_IMPORTED_MODULE_1_web3___default.a('http://localhost:8545'); // init web3

var DAOContract = new web3.eth.Contract(__WEBPACK_IMPORTED_MODULE_2__build_contracts_DAO_json__["abi"], "0x8acf5f84036bce8adb09b4d33aaa159616422dac"); // init Contract

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
});

function transfer() {
  DAOContract.methods.transfer("0x8acf5f84036bce8adb09b4d33aaa159616422dac", 1).call().then(function (res) {
    console.log(res);
  });
}
/*
********/

/*
* APP **/


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: css.ctn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text", {
    style: css.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "DAO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    style: css.btn,
    onClick: function onClick() {
      return alert("sorry, not now, tomorrow");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Crowdfund")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Pool:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text", {
    style: css.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "2018-5-23"));
});
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

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map