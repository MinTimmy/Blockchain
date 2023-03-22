// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Callee {
    address public owner;
    uint256 public balance;
    
    constructor() {
        owner = msg.sender; // store information who deployed contract
    }
    
    receive() payable external {
        balance += msg.value; // keep track of balance (in WEI)
    }


    /*
        Function: Withdraw the amount of money from smart contract to the withdrawal destination address
        uint amount: The money you want to withdraw
        address payable destAddr: The withdrawal destination address
    */
    function withdraw_myself(uint amount, address payable destAddr) public {        
        (bool success, ) = destAddr.call{gas: 1000000, value:amount}("");
        balance -= amount;
        require(success,"Failed to send Ether");
    }

    // Contract destructor
    function destroy() public {
        require(msg.sender == owner, "msg.sender is not the owner");
        selfdestruct(payable(owner));
    }

}

























contract Caller {
    address public owner;
    uint256 public balance;
    
    constructor() {
        owner = msg.sender; // store information who deployed contract
    }
    
    receive() payable external {
        balance += msg.value; // keep track of balance (in WEI)
    }

    function withdraw_myself(uint amount, address payable destAddr) public {
        require(msg.sender == owner, "Only owner can withdraw");
        require(amount <= balance, "Insufficient funds");
        
        (bool success, ) = destAddr.call{value:amount}("");
        balance -= amount;
        require(success,"Failed to send Ether");
    }

    /*
        Function: Withdraw the amount of money from Caller smart contract and Callee smart contract 
                  to the withdrawal destination address
        uint amount: The money you want to withdraw
        address payable destAddr: The withdrawal destination address
        Callee _callee: The address of class Callee 
    */
    function withdraw_myself_and_callee(uint amount, address payable destAddr, Callee _callee) public {
        require(msg.sender == owner, "Only owner can withdraw");
        require(amount <= balance, "Insufficient funds");
        
        (bool success, ) = destAddr.call{gas: 1000000, value:amount}("");
        balance -= amount;
        require(success,"Failed to send Ether");

        _callee.withdraw_myself(amount, destAddr);

    }

    // Contract destructor
    function destroy() public {
        require(msg.sender == owner, "msg.sender is not the owner");
        selfdestruct(payable(owner));
    }
}