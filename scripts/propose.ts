// SCRIPT USED TO MAKE A PROPOSAL

// PARAMETERS FROM PROPOSE FUNCTION IN GovernorContract.sol:
// address[] memory targets -> Box.sol address (array of contracts)
// uint256[] memory values -> Ethers sent
// bytes[] memory calldatas -> The funciton we are calling
// string memory description -> What is being proposed

import { ethers } from "hardhat"
import { FUNC, FUNC_ARGS, DESCRIPTION } from "../hardhat-helper-config"

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

   const proposeReceipt = proposeTx.wait(1)
};

// Call makeProposal function
makeProposal(FUNC, [FUNC_ARGS], DESCRIPTION).then(() =>
    process.exit(0)
).catch(err => { console.log(err), process.exit(1)
});



