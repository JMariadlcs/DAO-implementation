// SPDX-License-Identifier: MIT

// Time controler of Governance

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract TimeLock is TimelockController {

     /**
    * @dev
    * - proposers: address that can propose a new proposal
    * - executors: address that can execute a new proposal once time is over
    */
    constructor(uint256 minDelay, address[] memory proposers, address[] memory executors) TimelockController(minDelay, proposers, executors) {

    }
}