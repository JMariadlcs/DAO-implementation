# DAO-implementation

This is a Decentralized Autonomous Organization (DAO) workshop that focuses on applications using an ERC20 governance token with 100% on-chain voting by Chainlink Hackathon 2022.

- Governance:
There are 2 types of governance in DAOS.
1. On-Chain Governance: by using Smart Contracts.
2. Off-Chain Governance: Database (IPFS) + Oracles (Chainlink). 

We are implementing 1. 100% On-Chain Governance.

The workshop followed to complete this repo is [this one](https://www.youtube.com/watch?v=i5-3Wx_BrSA&t=482s).
The repo that we are going to implement is like [this one](https://github.com/zeuslawyer/hackathon-dao-governance-demo).

## Dependencies and Set-Up
- Start hardhat project:
```bash
yarn hardhat
npm init -y
npm install --save-dev hardhat
```

- Install dependencies:
```bash
yarn add --dev hardhat @openzeppelin/contracts typescript typechain ts-node @typechain/ethers-v5 @typechain/hardhat @types/chai @types/node hardhat-deploy @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```

## How to compile
```bash
yarn hardhat compile
```

## How to deploy
We are using the Hardhat Blockchain development network. We are not using testnets in this case.

Insert the following imports inside [hardhat.config.ts](https://github.com/JMariadlcs/DAO-implementation/blob/main/hardhat.config.ts):
```bash
import "@typechain/hardhat"
import "hardhat-deploy"
import "@nomiclabs/hardhat-ethers"
```

```bash
yarn hardhat deploy
```

- ¡¡NOTICE!!


## Resources
- [Hackathon DAO governance demo](https://github.com/zeuslawyer/hackathon-dao-governance-demo): The repo that we are going to implement.
- [Openzeppelin github](https://github.com/OpenZeppelin/openzeppelin-contracts).
- [Openzeppelin access contracts](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/access).
- [Openzeppeling Wizard](https://docs.openzeppelin.com/contracts/4.x/wizard): used for helping on creating a secure governance mechanism.

