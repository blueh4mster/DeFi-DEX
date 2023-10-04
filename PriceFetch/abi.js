const ERC20 = ["function decimals() public view returns (uint8)"];
const Factory = [
  "function getPair(address tokenA, address tokenB) external view returns (address pair)",
];
const Router = [
  "function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)",
];

module.exports = { ERC20, Factory, Router };
