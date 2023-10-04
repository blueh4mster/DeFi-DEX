const ethers = require("ethers");

const { ERC20, Factory, Router } = require("./abi.js");

const factoryAddr = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
const routerAddr = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
const fromAddr = "0xe9e7cea3dedca5984780bafc599bd69add087d56"; //BUSD
const toAddr = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; //WBNB

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed1.binance.org/"
);

const factoryInstance = new ethers.Contract(factoryAddr, Factory, provider);

const routerInstance = new ethers.Contract(routerAddr, Router, provider);

const priceFetch = async (amount) => {
  const token0 = new ethers.Contract(fromAddr, ERC20, provider);
  const token1 = new ethers.Contract(toAddr, ERC20, provider);
  const decimal = await token0.decimals();

  const amountIn = ethers.utils.parseUnits(amount, decimal).toString();
  console.log(amountIn);
  const amountOut = await routerInstance.getAmountsOut(amountIn, [
    fromAddr,
    toAddr,
  ]);
  const result = ethers.utils.formatUnits(amountOut[1].toString(), decimal);
  console.log(result);
};

const amt = "100";
priceFetch(amt);
