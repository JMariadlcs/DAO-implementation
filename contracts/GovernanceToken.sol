//SPDX-License-Identifier: MIT

// Governance token Smart Contract used for voting

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

    /**
    * @notice The functions below are overrides required by Solidity
    * @dev Function to update states after transfer of funds
    */
    function _afterTokenTransfer(address from, address to, uint256 amount) internal override(ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    /// @dev Function to mint tokens: increases amount of tokens in circulation
    function _mint(address to, uint256 amount) internal override(ERC20Votes) {
        super._mint(to, amount);
    }

     /// @dev Function to burn tokens: decreases amount of tokens in circulation
    function _burn(address account, uint256 amount) internal override(ERC20Votes) {
        super._burn(account, amount);
    }

}