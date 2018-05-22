
/** DEPS **/
import Web3 from "web3";
import { abi } from "../../build/contracts/DAO.json";
/*********/


/*
* WEB3 API **/
var web3 = new Web3('http://localhost:8545');// init web3
var DAOContract = new web3.eth.Contract(abi,"0x8acf5f84036bce8adb09b4d33aaa159616422dac");// init Contract

web3.eth.getAccounts(function(err, res){
  if(err) {console.log(err)}
  web3.eth.defaultAccount = res[0]
}).then(function(){
  web3.eth.getBalance(web3.eth.defaultAccount,function(err, res){
    console.log(res)
  })
}).then(function(){
  web3.eth.getBalance("0x8acf5f84036bce8adb09b4d33aaa159616422dac",function(err, res){
    console.log(res)
  })
})

function transfer() {
  DAOContract.methods.transfer("0x8acf5f84036bce8adb09b4d33aaa159616422dac",1).call().then(function(res){
    console.log(res);
  })
}
/*
********/


/*
* APP **/
export default () => (
  <div style={css.ctn}>
    <text style={css.title}>DAO</text>
    <button style={css.btn} onClick={()=>alert("sorry, not now, tomorrow")}><h3>Crowdfund</h3></button>
    <text>Pool:</text>
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
