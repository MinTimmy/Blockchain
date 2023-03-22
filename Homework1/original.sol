pragma solidity >=0.8.0 < 0.9.0;

contract Bank { 
    address payable public owner;
    
    constructor() payable{
        owner = payable(msg.sender); 
    }
    
    function deposit() public payable{}
    
    
    function withdraw() public {
        uint amount = address(this).balance;
        (bool success, ) = owner.call{value:amount}("");
        require(success,"Failed to send Ether");
    }

    function checkBalance() public view returns(uint balance){
        return address(this).balance;
    }
}