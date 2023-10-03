const { ethers } = require("ethers");

const INFURAID =
  "https://mainnet.infura.io/v3/28d9b4f2bb944660a9ba7ad5196a1d8e";

const provider = new ethers.providers.JsonRpcProvider(INFURAID);

const main = async () => {
  const block = await provider.getBlockNumber();
  console.log(block);
  const address = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5";

  const balance = await provider.getBalance(address);
  console.log(ethers.utils.formatEther(balance));
};

main();
