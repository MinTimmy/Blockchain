// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Bank {
    address owner;
    uint256 balance;
    
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