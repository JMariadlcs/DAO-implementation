# DAO-implementation

This is a Decentralized Autonomous Organization (DAO) workshop that focuses on applications using an ERC20 governance token with 100% on-chain voting by Chainlink Hackathon 2022.

- Governance:
There are 2 types of governance in DAOS.
1. On-Chain Governance: by using Smart Contracts.
2. Off-Chain Governance: Database (IPFS) + Oracles (Chainlink). 

The workshop followed to complete this repo is [this one](https://www.youtube.com/watch?v=i5-3Wx_BrSA&t=482s).
The repo that we are going to implement is like [this one](https://github.com/zeuslawyer/hackathon-dao-governance-demo).

## Dependencies and Set-Up
- Install dependencies:
```bash
yarn add --dev hardhat @openzeppelin/contracts typescript typechain ts-node @typechain/ethers-v5 @typechain/hardhat @types/chai @types/node hardhat-deploy @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```

- Start hardhat project:
```bash
yarn hardhat
```

## Resources
- [Hackathon DAO governance demo](https://github.com/zeuslawyer/hackathon-dao-governance-demo): The repo that we are going to implement.

