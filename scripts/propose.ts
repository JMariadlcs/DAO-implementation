// SCRIPT USED TO MAKE A PROPOSAL

// PARAMETERS FROM PROPOSE FUNCTION IN GovernorContract.sol:
// address[] memory targets -> Box.sol address (array of contracts)
// uint256[] memory values -> Ethers sent
// bytes[] memory calldatas -> The funciton we are calling
// string memory description -> What is being proposed

import { ethers, network } from "hardhat"
import { FUNC, FUNC_ARGS, DESCRIPTION, VOTING_DELAY, developmentChains, PROPOSAL_FILE } from "../hardhat-helper-config"
import { moveBlocks } from "../helpers";
import * as fs from "fs";

export async function makeProposal(functionToCall: string, args: number[], proposalDescription: string) {

    // Import needed contracts
   const governor = await ethers.getContract("GovernorContract")
   const box = await ethers.getContract("Box")

   const encodedFunctionCall = box.interface.encodeFunctionData( // use to encode the funciton we are executing in the propose()
       functionToCall,
       args
   );

   // We call to propose function in GovernorContract.sol
   const proposeTx = await governor.propose(
       [box.address],
       [0],
       [encodedFunctionCall],
       proposalDescription
   )

   const proposeReceipt = await proposeTx.wait(1)

   // Jump time -> We are colling moveBlocks function in helpers.ts
   // BUT JUST DO THIS IN DEVELOPMENT ENVIRONMENT (LOCAL NETWORK)
   if (developmentChains.includes(network.name)) {
      await moveBlocks(VOTING_DELAY + 1);
   }

   const proposalId = proposeReceipt.events[0].args.proposalId;
   console.log("ProposalId is ", proposalId.toString());

   // We are writing to proposal to a FILE
   fs.writeFileSync(
    PROPOSAL_FILE,
    JSON.stringify({
      [network.config.chainId!.toString()]: [proposalId.toString()],
    })
  );
};

// Call makeProposal function
makeProposal(FUNC, [FUNC_ARGS], DESCRIPTION).then(() =>
    process.exit(0)
).catch(err => {console.log(err), process.exit(1)
});



