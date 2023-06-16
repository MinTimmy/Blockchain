var TimERC1155 = artifacts.require("TimERC1155");
const accounts = [
  "0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29",  
  "0x7734a1F703A7a8a9faDd0e5d59DA19aa842f072C",
  // "0x986d3d5aF9455cbFa2132001696809646c1b982c",
];

const names = [
  "Alice",
  "Bob",
  "Cindy",
];
module.exports = async(callback) => {
  // TODO: implement your actions
  let timERC1155 = await TimERC1155.at("0x2AA4778db8996EFfA994d5A3F9B0865235e272ad");
  
  // let _balance = await timERC1155.balanceOf(accounts[0],3);
  const ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  // let ids = [];
  // let amounts = [];
  const amounts = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  // for(let i = 0; i < 20; i++){
  //   ids.push(i);
  //   amounts.push(1);
  // }
  await timERC1155.mintBatch(
    accounts[0],
    ids,
    amounts,
    ""
  );    
  // console.log(_balance);
  callback();
};