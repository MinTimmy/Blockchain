var Caller = artifacts.require("Caller");
const truffleAssert = require('truffle-assertions');

contract("Caller", (accounts) => {

  it("Caller start run", async () => {
    // const caller = await Caller.deployed();
    const caller = await Caller.at("0xc48149939831B26C3653598865fFc0a4559b53CA");
    console.log("Smart contract address:", caller.address);
    assert(caller.address !== "");
    
    let owner = await caller.getOwner();
    console.log('The owner:', owner);
    let balance = await caller.getBalance();
    console.log('The balance:', web3.utils.fromWei(balance, 'ether'), 'ether');
    
    // console.log("==========================================================================================");
    // console.log("Deposit 0.1 ether from 0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29");
    // await caller.deposit({from : "0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29", value : 100000000000000000});
    
    // balance = await caller.getBalance();
    // console.log('The balance:', web3.utils.fromWei(balance, 'ether'), 'ether');

    // console.log("==========================================================================================");
    // console.log("Withdraw 0.1 ether to 0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29");
    // // await callee.withdrawMyself(BigInt(100000000000000000), "0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29");
    // await caller.withdrawMyself(BigInt(100000000000000000), String(owner));
    
    // balance = await caller.getBalance();
    // console.log('The balance:', web3.utils.fromWei(balance, 'ether'), 'ether');

    // console.log("==========================================================================================");
    // console.log("Double call");
    // uint amount, address payable destAddr, Callee _callee
    // await caller.withdraw_myself_and_callee(BigInt(100000000000000000), String(owner), "0xbd12A3C7eEBeb43D2CCA7b7a753F8E8b5b18F980");
    // let res = await myEvent.test();
    // truffleAssert.eventEmitted(res, 'Log', (ev) => {
    //   console.log(ev.message);
    //   return ev.message;
    // });
  });
});