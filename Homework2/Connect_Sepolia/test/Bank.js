const Bank = artifacts.require("Bank");

contract("Bank", () => {
  it("start", async () => {
    // const bank = await Bank.deployed();
    let bank = await Bank.at("0x61D6764325387F8B0F4BB1B117113B2712b93928");
    // return MyEvent.at("0x25c207B45B7911e18727b8Da531434250a2D25c0").then(function(instance) {

    console.log("Hello");
    console.log(bank.address);
    assert(bank.address !== "");
    await bank.deposit({from : "0x00e2DcE6e15BC5612a3EB5242CaC4c71672c6b29", value : 100000000000000000});
    let balance = await bank.get_balance();
    console.log('Balance of Account 0 =', BigInt(balance));
    // bank.withdraw_myself(10000000000000000n, '0x5616d860E7Bd36A1dc6188e788251A0A794f0d45')
;
  });
});