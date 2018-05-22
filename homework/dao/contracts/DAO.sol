// 这是目前还是一个基本的合约，后面会扩展为一个简易的 DAICO 模型
// 关于 DAICO 可以看这篇文章 https://ethresear.ch/t/explanation-of-daicos/465

pragma solidity ^0.4.20;

contract DAO {
  /* This creates an array with all balances */
  mapping (address => uint256) public balanceOf;
  uint256 ticket = 1 ether;
  
  /* Initializes contract with initial supply tokens to the creator of the contract */
  constructor(uint256 initialSupply) public {
    balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens
  }

  /* 转账合约 */
  function transfer(address _to, uint256 _value) public {
    require(balanceOf[msg.sender] >= _value);           // Check if the sender has enough
    require(balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
    balanceOf[msg.sender] -= _value;                    // Subtract from the sender
    balanceOf[_to] += _value;                           // Add the same to the recipient
  }

  /* 退款合约 */
  function () public payable {
    require(msg.value >= ticket);
    if (msg.value > ticket) {
      var refundFee = msg.value - ticket;
      msg.sender.transfer(refundFee);
    }
  }
}
