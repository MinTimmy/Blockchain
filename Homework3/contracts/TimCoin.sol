// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

//Safe Math Interface
 
contract SafeMath {
 
  function safeAdd(uint a, uint b) public pure returns (uint c) {
    c = a + b;
    require(c >= a);
  }
 
  function safeSub(uint a, uint b) public pure returns (uint c) {
    require(b <= a);
    c = a - b;
  }
 
  function safeMul(uint a, uint b) public pure returns (uint c) {
    c = a * b;
    require(a == 0 || c / a == b);
  }
 
  function safeDiv(uint a, uint b) public pure returns (uint c) {
    require(b > 0);
    c = a / b;
  }
}
//Contract function to receive approval and execute function in one call
 
// contract ApproveAndCallFallBack {
//     function receiveApproval(address from, uint256 tokens, address token, bytes data) public;
// }

contract TimCoin is IERC20, SafeMath{
  string public symbol;
  string public  name;
  uint8 public decimals;
  uint public _totalSupply;
 
  mapping(address => uint) balances;
  mapping(address => mapping(address => uint)) allowed;
 
  constructor(){
    symbol = "TC";
    name = "Tim Coin";
    decimals = 2;
    _totalSupply = 100000;
    balances[0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29] = _totalSupply;
    emit Transfer(address(0), 0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29, _totalSupply);
  }
 
  function totalSupply() public view returns (uint) {
    return _totalSupply  - balances[address(0)];
  }
 
  function balanceOf(address tokenOwner) public view returns (uint balance) {
    return balances[tokenOwner];
  }
 
  function transfer(address to, uint tokens) public returns (bool success) {
    balances[msg.sender] = safeSub(balances[msg.sender], tokens);
    balances[to] = safeAdd(balances[to], tokens);
    emit Transfer(msg.sender, to, tokens);
    return true;
  }
 
  function approve(address spender, uint tokens) public returns (bool success) {
    allowed[msg.sender][spender] = tokens;
    emit Approval(msg.sender, spender, tokens);
    return true;
  }
 
  function transferFrom(address from, address to, uint tokens) public returns (bool success) {
    require(tokens <= balances[from], "_from doesnt have enough balance.");
    require(tokens <= allowed[from][msg.sender], "Allowance of msg.sender is not enough.");
    require(to != address(0), "Cannot send to all zero address.");

    balances[from] = safeSub(balances[from], tokens);
    allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
    balances[to] = safeAdd(balances[to], tokens);
    emit Transfer(from, to, tokens);
    return true;
  }
 
  function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
    return allowed[tokenOwner][spender];
  }
   
  // function approveAndCall(address spender, uint tokens, bytes data) public returns (bool success) {
  //   allowed[msg.sender][spender] = tokens;
  //   emit Approval(msg.sender, spender, tokens);
  //   ApproveAndCallFallBack(spender).receiveApproval(msg.sender, tokens, this, data);
  //   return true;
  // }
 
  // function () public payable {
  //  revert();
  // }
}