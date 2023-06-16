var TimCoin = artifacts.require("TimCoin");
const accounts = [
                    "0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29",
                    "0x7734a1F703A7a8a9faDd0e5d59DA19aa842f072C",
                    // "0x986d3d5aF9455cbFa2132001696809646c1b982c",
                  ];

                  const names = [
                    "Alice",
                    "Bob",
];
async function showBalance(instance){
  console.log("=============================================================");
  let balance = 0;
  for(let i = 0; i < accounts.length; i++){
    balance = await instance.balanceOf(accounts[i]);
    // console.log("The address" ,accounts[i] , ":", balance["words"][0], "TC");
    console.log(names[i],":", balance["words"][0], "TC" );
  }
  console.log("=============================================================");
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
 
async function delay() {
    console.log('Alice’s transaction is waiting for being mined...');
    await sleep(5000);
    console.log('Be mined successfully');
}
 
module.exports = async(callback) => {
  // TODO: implement your actions
  let timCoin = await TimCoin.at("0xF7Ef07500B1d8A45751DE11f63b2264735E79A41");
  
  let totalSupply = await timCoin.totalSupply();
  console.log("The total supply:",totalSupply["words"][0], "TC");
  await showBalance(timCoin);
  

  await timCoin.approve(accounts[1],20);
  // await timCoin.approve(accounts[1], 0);
  
  
  await delay();
  // Bob calls transferFrom()

  await timCoin.approve(accounts[1], 30);
  
  // Bob calls transferFrom()
  await sleep(5000);
  await showBalance(timCoin);
  callback();
};



