import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { VOTING_DELAY, VOTING_PERIOD, QUORUM_PERCENTAGE } from "../hardhat-helper-config"; // constructor args for timelock deployment


const deployGovernorContract: DeployFunction = async(hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts , deployments, network } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy, log, get } = deployments; // get used to get deployed contract on development network (localhost)

    // we are getting the first 2 deployed contract to pass as arguments to the GovernorContract constructor
    const governancetoken = await get("GovernanceToken");
    const timeLock = await get("TimeLock");

    log("Deploying Governor contract...");
    const governor = await deploy("GovernorContract", {
        from: deployer,
        args: [governancetoken.address, timeLock.address, VOTING_DELAY, VOTING_PERIOD, QUORUM_PERCENTAGE],
        log: true,
        // waitConfirmations: 3,
    });
    log(`03- 'GovernorContract' contract deployed at ${governor.address}`);
};

export default deployGovernorContract;
deployGovernorContract.tags = ["all", "governor"];