import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";


const deployGovernanceToken: DeployFunction = async(hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts , deployments, network } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy, log } = deployments;

    log("Deploying GovernanceToken...")
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
        // waitConfirmations: 3
    });

    log(`Deployed'GovernanceToken' at ${governanceToken.address}`)

    // Delegate tokens
    await delegate(governanceToken.address, deployer);
    log("01-Delegated!");
};

export default deployGovernanceToken;
deployGovernanceToken.tags = ["all", "governanceToken"];

// execute delegate function
const delegate = async (governanceTokenAddress: string, delegatedAccount: string) => {
    const governanceToken = await ethers.getContractAt("GovernanceToken", governanceTokenAddress);
    const txResponse = await governanceToken.delegate(delegatedAccount);
    await txResponse.wait(1);

    console.log(`Checkpoints: ${await governanceToken.numCheckpoints(delegatedAccount)}`);
};