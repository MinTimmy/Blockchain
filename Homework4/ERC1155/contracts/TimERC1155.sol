// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract TimERC1155 is ERC1155 {
    // uint256 public constant Red = 1;
    // uint256 public constant Green = 2;
    // uint256 public constant Blue = 3;
    
    uint256[] ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    uint256[] amounts = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmZHT3gvdzKR1c35f8hHV6Qpzau3BoSLBdZ1XYYoX9jMxH/{id}") {
        // _mint(msg.sender, Red, 1, "");
        // _mint(msg.sender, Green, 1, "");
        // _mint(msg.sender, Blue, 1, "");
        // for(uint i = 0; i < 100; i++){
        //     ids.push(i);
        //     amounts.push(1);
        // }
        // _mintBatch(
        //   msg.sender,
        //   ids,
        //   amounts,
        //   ""
        // );    
    }
    function mint(address account, uint256 id, uint256 amount, bytes memory data) public{
      _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public{
        _mintBatch(to, ids, amounts, data);
    }
} 