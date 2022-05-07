import { ethers, network } from "hardhat";
import { DESCRIPTION, FUNC_ARGS, FUNC, developmentChains, MIN_DELAY } from "../hardhat-helper-config";
import { moveBlocks, moveTime } from "../helpers";

export async function queueAndExecute(functionToCall: string, args: number[], proposalDescription: string) {

    const box = await ethers.getContract("Box");
    const encodedFunctionCall = box.interface.encodeFunctionData( // use to encode the funciton we are executing in the propose()
       functionToCall,
       args
   );

   const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(proposalDescription));

   // Queue the proposal
   const governor = await ethers.getContract("GovernorContract");
   const queueTx = await governor.queue(
        [box.address],
        [0],
        [encodedFunctionCall],
        descriptionHash
   );
    queueTx.wait(1);
    console.log("Proposal in queue!");

    // Jump Time again BUT -> In terms of blocks and in terms of time
    if (developmentChains.includes(network.name)) {
        await moveBlocks(1);
        await moveTime(MIN_DELAY + 1);
     }

    // Execute 
    const executeTx = await governor.execute(
        [box.address],
        [0],
        [encodedFunctionCall],
        descriptionHash
    );

    executeTx.wait(1);
    console.log("Executed!");

}

// Call queueAndExecute function
queueAndExecute(FUNC, [FUNC_ARGS], DESCRIPTION).then(() =>
    process.exit(0)
).catch(err => {console.log(err), process.exit(1);
});