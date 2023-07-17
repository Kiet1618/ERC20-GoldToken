// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    address public owner;

    constructor() ERC20("Gold", "GLD") {
        uint256 totalSupply = 21000000 * 10 ** decimals();
        _mint(msg.sender, totalSupply);
        owner = msg.sender;
    }
}
