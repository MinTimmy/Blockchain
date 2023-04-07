let Bank = artifacts.require("Bank");

module.exports = async(callback) => {
  // TODO: implement your actions
//   let bank = await Bank.at("0x61D6764325387F8B0F4BB1B117113B2712b93928");
  let bank = await Bank.deployed();
  console.log("Hello");
  console.log(bank.address);
  await bank.deposit({from : "0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29", value : 100000000000000000});
  let balance = await bank.get_balance();
  console.log('Balance of Account 0 =', BigInt(balance));
  let owner = await bank.get_owner();
  console.log('owner =', owner);
  callback();
};
