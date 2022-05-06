//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20Votes {

    uint256 public s_maxSupply = 1000000000000000000000000; // 1 million tokens to 18 decimals

    /**
    * @notice 
    * - All the tokens are minted to me to test the Governane
    * (in real life they would be sent to users)
    */
    constructor() ERC20("GovernanceToken" , "GT") ERC20Permit("GovernanceToken") {
        _mint(msg.sender, s_maxSupply);
    }

}