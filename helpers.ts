import { network } from "hardhat"

export const moveBlocks = async( amount: number ) => {
    for (let i = 0; i < amount; i++) {
        await network.provider.request({
            method: "evm_mine",
            params: [],
        });
    }
    console.log(`Moved ${amount} blocks`);
}