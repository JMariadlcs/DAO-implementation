//SPDX-License-Identifier: MIT

// Box.sol is going to be owned by the Governance

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {

    uint256 private value;

    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) public onlyOwner{
        value = newValue;
        
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns(uint256) {
        return value;
    }
}