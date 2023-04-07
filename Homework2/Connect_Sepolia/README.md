# Blockchain

## The Information of the Smart Contract
```
Starting migrations...
======================
> Network name:    'sepolia'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Bank'
   ----------------
   > transaction hash:    0xa7148e2d4d6da17041dfe47a38219bc478c864c22fdf802feca1fb0417beeedf
   > Blocks: 1            Seconds: 9
   > contract address:    0x7Bd49e5A1d6F906100A2f1Fd2d34F663c1857De7
   > block number:        3236123
   > block timestamp:     1680760776
   > account:             0x5616d860E7Bd36A1dc6188e788251A0A794f0d45
   > balance:             26.209351774057086289
   > gas used:            406903 (0x63577)
   > gas price:           2.500000007 gwei
   > value sent:          0 ETH
   > total cost:          0.001017257502848321 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 3236124)
   > confirmation number: 2 (block: 3236125)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.001017257502848321 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.001017257502848321 ETH

```


### use npm to install truffle, truffle-hdwallet-provider and dotenv
```
$ npm install -g truffle
$ npm install @truffle/hdwallet-provider
$ npm install dotenv
```

## Deploy the New Smart Contract
```
$ truffle compile                       
```

```
$ truffle migrate --network sepolia
```

## Truffle Console commands

Open the console
```
$ truffle console --network sepolia
```

Connect to the smart contract
```
$ let contract = await Bank.at('0x7Bd49e5A1d6F906100A2f1Fd2d34F663c1857De7')
```

Assign the output of the function get_balance to the variable balance
```
$ let balance = await contract.get_balance()
```

Show the variable balance.
```
$ console.log('Balance of Account 0 =', BigInt(balance));

```

Call the function withdraw_myself
```
$ contract.withdraw_myself(10000000000000000n, '0x5616d860E7Bd36A1dc6188e788251A0A794f0d45')
```

Run the smart contract with the js file.
```
$ truffle exec run.js
```


Test the smart contract.
```
$ truffle test
```