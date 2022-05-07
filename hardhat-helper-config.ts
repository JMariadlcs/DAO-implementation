export const VOTING_DELAY = 1 // 1 block
export const VOTING_PERIOD = 45818; // 1 week in blocks
export const QUORUM_PERCENTAGE = 4; // 5 percent

export const MIN_DELAY = 3600;
export const PROPOSERS: string[] = [];
export const EXECUTORS: string[] = [];

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000" // no address in particular -> everybody

// Arguments in propose.ts 
export const FUNC = "store";
export const FUNC_ARGS = 100;
export const DESCRIPTION = "Proposal #1 - Update Box's value to 100";

// Development networks (local netoworks - not testnet)
export const developmentChains = ["hardhat", "localhost"];

// PROPOSAL FILE
export const PROPOSAL_FILE = "proposal.json";

// PROPOSAL REASON
export const VOTE_REASON = "Cause we like number 100";