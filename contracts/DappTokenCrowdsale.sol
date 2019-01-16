pragma solidity >=0.4.21 <0.6.0;

/* import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol"; */
import "openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";

contract DappTokenCrowdsale is Crowdsale, MintedCrowdsale {
  constructor (uint256 _rate, address payable _wallet, IERC20 _token)
  Crowdsale(_rate, _wallet, _token) public {



  }
}
