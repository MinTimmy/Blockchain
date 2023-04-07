// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Callee {
    address owner;
    uint256 balance;
    bool locked;

    constructor() {
        owner = msg.sender; // store information who deployed contract
    }
    event DepositLog(address sender, uint256 value);
    event WithdrawLog(address sender, uint256 value);

    function deposit() public payable {
        balance += msg.value; //存款
        emit DepositLog(msg.sender, msg.value);
    }


    receive() payable external {
        balance += msg.value; // keep track of balance (in WEI)
        emit DepositLog(msg.sender, msg.value);
    }

    // Modifier to check that the caller is the owner of
    // the contract.
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        // Underscore is a special character only used inside
        // a function modifier and it tells Solidity to
        // execute the rest of the code.
        _;
    }

    // Modifiers can take inputs. This modifier checks that the
    // address passed in is not the zero address.
    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not valid address");
        _;
    }

    // Modifiers can be called before and / or after a function.
    // This modifier prevents a function from being called while
    // it is still executing.
    modifier noReentrancy() {
        require(!locked, "No reentrancy");

        locked = true;
        _;
        locked = false;
    }

    function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
        owner = _newOwner;
    }

    /*
        Function: Withdraw the amount of money from smart contract to the withdrawal destination address
        uint amount: The money you want to withdraw
        address payable destAddr: The withdrawal destination address
    */
    function withdrawMyself(uint amount, address payable destAddr) public noReentrancy validAddress(destAddr){        
        // (bool success, ) = destAddr.call{gas: 1000000, value:amount}("");
        destAddr.transfer(amount);
        balance -= amount;
        // require(success,"Failed to send Ether");
        emit DepositLog(destAddr, amount);
    }

    function getOwner() view public returns(address){
        return owner;
    }
    function getBalance() view public returns(uint256){
        return balance;
    }
    function getLocked() view public returns(bool){
        return locked;
    }


    // Contract destructor
    function destroy() public noReentrancy onlyOwner {
        (bool sent, ) = msg.sender.call{value: balance}(""); 
        require(sent, "Failed to send all Ether");      
        // selfdestruct(payable(owner));
    }

}