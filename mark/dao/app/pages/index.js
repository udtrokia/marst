
/** DEPS **/
import Web3 from "web3";
import { abi } from "../../build/contracts/DAO.json";
/*********/


/*
* WEB3 API **/
var web3 = new Web3('http://localhost:8545');
var contractAddress = "0x21b741b4dfb37ef14fddf699b7eeb7e11065f799";// 这里修改为合约的地址
var DAOContract = new web3.eth.Contract(abi, contractAddress);
var contractFund;

web3.eth.getAccounts(function(err, res){
  if(err) {console.log(err)}
  web3.eth.defaultAccount = res[0]
}).then(function(){
  web3.eth.getBalance(web3.eth.defaultAccount,function(err, res){
    console.log(res)
  })
})


function transfer() {
  DAOContract.methods.transfer(contractAddress, 1).send({from: web3.eth.defaultAccount}).then(function(res){
    alert("交易ID为:" + res.transactionHash)
    alert("消耗gas:" + res.gasUsed)
    console.log(res);
    return
  })
}
/*
********/


/*
* APP **/
export default () => (
  <div style={css.ctn}>
    <text style={css.title}>DAO</text>
    <button style={css.btn} onClick={()=>transfer()}><h3>Crowdfund</h3></button>
    <text>pool:  {contractAddress}</text>
    <text style={css.date}>2018-5-23</text>
  </div>
)

const css = {
  ctn: {
    "height": "100vh",
    "width": "100vw",
    "display": "flex",
    "flex":1,
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column"
  },title:{
    "fontSize": "5rem",
  },btn: {
    "width": "8rem",
    "height": "3rem",
    "border-radius": "30px",
    "margin": "3rem"        
  },pool: {
    
  },date: {
    "margin": "3rem"
  }
}
/*
*****/
