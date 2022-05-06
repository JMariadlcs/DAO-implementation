import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { ADDRESS_ZERO } from "../hardhat-helper-config";

// script used to setup the Governance Contracts

const deploySetupGovernanceContracts: DeployFunction = async(hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts , deployments, network } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy, log, get } = deployments; // get used to get deployed contract on development network (localhost)

    // We need to import previously deployed contracts
    const governanceToken = await ethers.getContract("GovernanceToken", deployer);
    const timeLock = await ethers.getContract("TimeLock", deployer);
    const governor = await ethers.getContract("GovernorContract", deployer);

    // We need to get access to TimeController.sol roles
    log("Setting up governance roles...");
    const proposerRole = await timeLock.PROPOSER_ROLE();
    const executorRole = await timeLock.EXECUTOR_ROLE();
    const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE();

    const proposerTx = await timeLock.grantRole(proposerRole, governor.address);
    await proposerTx.wait(1);

    const executorTx = await timeLock.grantRole(executorRole, ADDRESS_ZERO);
    await executorTx.wait(1);

    const revokeTx = await timeLock.revokeRole(adminRole, deployer);
    await revokeTx.wait(1);

  log("04-Roles setup OK. Deployer is no longer the admin for 'TimeLock'.");
};


export default deploySetupGovernanceContracts;
deploySetupGovernanceContracts.tags = ["all", "setupGovernanceContracts"];
