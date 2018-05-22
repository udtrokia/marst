var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//var abi = JSON.parse('
//[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs": [{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":
//[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs": [{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs": [{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs": [{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs": [{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs": [],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs": [{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]
//')

var abi = [{
  "constant":false,
  "inputs":[{"name":"candidate","type":"bytes32"}],
  "name":"totalVotesFor",
  "outputs": [{"name":"","type":"uint8"}],
  "payable":false,
  "type":"function"
},{
  "constant":false,
  "inputs": [{"name":"candidate","type":"bytes32"}],
  "name":"validCandidate",
  "outputs":[{"name":"","type":"bool"}],
  "payable":false,"type":"function"
},{
  "constant":true,
  "inputs": [{"name":"","type":"bytes32"}],
  "name":"votesReceived",
  "outputs":[{"name":"","type":"uint8"}],
  "payable":false,
  "type":"function"
},{
  "constant":true,
  "inputs": [{"name":"x","type":"bytes32"}],
  "name":"bytes32ToString",
  "outputs":[{"name":"","type":"string"}],
  "payable":false,
  "type":"function"
},{"constant":true,
   "inputs": [{"name":"","type":"uint256"}],
   "name":"candidateList",
   "outputs":[{"name":"","type":"bytes32"}],
   "payable":false,"type":"function"
},{
  "constant":false,"inputs": [{"name":"candidate","type":"bytes32"}],
  "name":"voteForCandidate",
  "outputs":[],
  "payable":false,
  "type":"function"
},{
  "constant":true,
  "inputs": [],
  "name":"contractOwner",
  "outputs":[{"name":"","type":"address"}],
  "payable":false,
  "type":"function"
},{
  "inputs": [{"name":"candidateNames","type":"bytes32[]"}],
  "payable":false,
  "type":"constructor"
}]


var VotingContract = web3.eth.contract(abi);

var contractInstance = VotingContract.at("0x5dfe87d35cd0012048405aaad19de1e705c1d13b");

var candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"};

function voteForCandidate() {
  candidateName = $("#candidate").val();
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString()); 
  })
}

$(document).ready(function() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];

    let val = contractInstance.totalVotesFor.call(name).toString();
    $("#" + candidates[name]).html(val);
  }
})

console.log("hello")
