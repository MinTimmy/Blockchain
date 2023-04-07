# Blockchain

## The Information of the Smart Contract
```

```


### use npm to install truffle, truffle-hdwallet-provider and dotenv
```
$ npm install -g truffle
$ npm install @truffle/hdwallet-provider
$ npm install dotenv
$ npm install truffle-assertions
```

## Deploy the New Smart Contract

Compile the sol file
```
$ truffle compile                       
```

Deplot to localhost
```
$ truffle deploy
```

Deploy to the network sepolia
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
$ let contract = await MyEvent.at("0x7c90AbCF2404071E8337E09d88dA82314aAbF6cb")
```

```
MyEvent.at("0x7c90AbCF2404071E8337E09d88dA82314aAbF6cb").then(function(instance) {instance.test();})
```

## Test

```
truffle test --network sepolia
```