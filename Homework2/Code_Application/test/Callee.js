var Callee = artifacts.require("Callee");
const truffleAssert = require('truffle-assertions');

contract("Callee", (accounts) => {

  it("Callee start run", async () => {
    // const callee = await Callee.deployed();
    const callee = await Callee.at("0x4Ce60D7708e10D47dB742a24eEb300368fdc808c");
    console.log("Smart contract address:", callee.address);
    assert(callee.address !== "");

    let owner = await callee.getOwner();
    console.log('The owner:', owner);
    let balance = await callee.getBalance();
    // console.log('The balance:', BigInt(balance));
    console.log('The balance:', web3.utils.fromWei(balance, 'ether'), 'ether');
    
    console.log("==========================================================================================");
    console.log("Deposit 0.3 ether from 0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29");
    await callee.deposit({from : "0x1b33b86EFf047398727A9E894A0Aa2C6594B4Fb4", value : 1000000000000000000});
    // await caller.deposit({from : "0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29", value : 100000000000000000});

    balance = await callee.getBalance();
    console.log('The balance:', web3.utils.fromWei(balance, 'ether'), 'ether');

    // console.log("==========================================================================================");
    // console.log("Withdraw 0.1 ether to 0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29");
    // await callee.withdrawMyself(BigInt(100000000000000000), String(owner));
    
    // balance = await callee.getBalance();
    // console.log('The balance:', web3.utils.fromWei(balance, 'ether'), 'ether');

    // truffleAssert.eventEmitted(res, 'DepositLog', (ev) => {
    //   // console.log(ev.sender);
    //   // console.log(ev.value);
    //   return ev.value;
    // });
  });
});