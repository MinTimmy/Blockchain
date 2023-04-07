// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./Callee.sol";

contract Caller is Callee {
    constructor() {
        owner = msg.sender; // store information who deployed contract
    }
    /*
        Function: Withdraw the amount of money from Caller smart contract and Callee smart contract 
                  to the withdrawal destination address
        uint amount: The money you want to withdraw
        address payable destAddr: The withdrawal destination address
        Callee _callee: The address of class Callee 
    */
    function withdraw_myself_and_callee(uint amount, address payable destAddr, Callee _callee) public onlyOwner  {
        require(msg.sender == owner, "Only owner can withdraw");
        require(amount <= balance, "Insufficient funds");
        
        (bool success, ) = destAddr.call{gas: 1000000, value:amount}("");
        balance -= amount;
        require(success,"Failed to send Ether");

        _callee.withdrawMyself(amount, destAddr);
    }
}