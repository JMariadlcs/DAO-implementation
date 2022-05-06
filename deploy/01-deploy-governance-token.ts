import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployGovernanceToken: DeployFunction = async(hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts , deployments, network } = hre;
    const { deployer } = await getNamedAccounts();
    const { deploy, log } = deployments;

    log("Deploying GovernanceToken...")
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: 3
    });

    log(`Deployed'GovernanceToken' at ${governanceToken.address}`)
};

export default deployGovernanceToken;
deployGovernanceToken.tags = ["all", "governanceToken"];