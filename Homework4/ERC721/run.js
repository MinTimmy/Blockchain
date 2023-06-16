var TimNFT = artifacts.require("TimNFT");
const accounts = [
  "0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29",  
  "0x7734a1F703A7a8a9faDd0e5d59DA19aa842f072C",
  "0x986d3d5aF9455cbFa2132001696809646c1b982c",
];

const names = [
  "Alice",
  "Bob",
  "Cindy"
];
module.exports = async(callback) => {
  // TODO: implement your actions
  let timNFT = await TimNFT.at("0x8a2A1629B6B958F9F22cbA727eAc7db67F45aa05");
  
  let name = await timNFT.name();
  console.log("The name:", name);
  let owner = await timNFT.owner();
  console.log("The owner:", owner);
  let symbol = await timNFT.symbol();
  console.log("The symbol:", symbol);
  let balance = await timNFT.balanceOf(owner);
  console.log("The balance of owner:", balance["words"][0]);

  // await timNFT.mint(
  //   owner,
  //   0,
  //   "https://gateway.pinata.cloud/ipfs/QmZHT3gvdzKR1c35f8hHV6Qpzau3BoSLBdZ1XYYoX9jMxH/1",
  // )

  // let tokenURL_1 = await timNFT.tokenURI(0);
  // console.log(tokenURL_1);

  let tokenOwner = await timNFT.ownerOf(0);
  console.log(tokenOwner);

  await timNFT.transferFrom(accounts[0], accounts[1], 0);
  await timNFT.SafeTransferFrom(accounts[0], accounts[1], 0);

  tokenOwner = await timNFT.ownerOf(0);
  console.log(tokenOwner);
  callback();
};
