var Callee = artifacts.require("Callee");
var Caller = artifacts.require("Caller");

async function showBalance(instance){
  let balance = await instance.getBalance();
  console.log('The balance:', web3.utils.fromWei(balance, 'ether'), 'ether');
}
async function showSmartContractInformation (instance) {
  let owner = await instance.getOwner();
  console.log("Smart contract address:", instance.address);  
  console.log('The owner:', owner);
  await showBalance(instance);
}

async function doDeposit(instance, amount){
  console.log('Deposit', web3.utils.fromWei(String(amount),'ether'), 'ether from 0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29');
  await instance.deposit({from : "0x1b33b86EFf047398727A9E894A0Aa2C6594B4Fb4", value : amount});
}
async function doWithdraw(instance, amount){
  console.log("Withdraw" , web3.utils.fromWei(String(amount),'ether'), "ether to 0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29");
  owner = await instance.getOwner();
  await instance.withdrawMyself(BigInt(100000000000000000), String(owner));
}
module.exports = async(callback) => {
  // TODO: implement your actions
  let caller = await Caller.at("0xcdFa653F8Ec7Bf3456aaFdeEB7e2F4B738e12fAB");
  let callee = await Callee.at("0x7a38C3aD975443FEDB7f9FEF10DA174b9AB03300");
  
  console.log("<Caller>");
  await showSmartContractInformation(caller);
  
  console.log("-----------------------------------------");

  console.log("<Callee>");
  await showSmartContractInformation(callee);


  console.log("\n==========================================================================================\n");
  console.log("<Caller>");
  await doDeposit(caller, 300000000000000000);
  await showBalance(caller);
  
  console.log("-----------------------------------------");
  
  console.log("<Callee>");
  await doDeposit(callee, 300000000000000000);

  await showBalance(callee);
  
  console.log("\n==========================================================================================\n");

  console.log("<Caller>");
  await doWithdraw(caller, 100000000000000000);
  await showBalance(caller);

  console.log("-----------------------------------------");

  console.log("<Callee>");
  await doWithdraw(callee, 100000000000000000);
  await showBalance(callee);

  console.log("\n==========================================================================================\n");
  amount = 100000000000000000;
  console.log(
    "Use the smart contract \'caller\' to call the smart contract \'callee's\' function withdraw_myself\nto Withdraw", 
    web3.utils.fromWei(String(amount),'ether'), 
    "ether to 0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29"
  ); 
  await caller.withdraw_myself_and_callee(BigInt(amount), String(owner), String(callee.address));
  console.log("<Caller>");
  await showBalance(caller);

  console.log("-----------------------------------------");

  console.log("<Callee>");
  await showBalance(callee);
  callback();
};
 