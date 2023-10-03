const { ethers } = require("ethers");
// 0x44db73d2362c508650d7224897a2d7394ff9e38d

const INfuraID =
  "https://sepolia.infura.io/v3/28d9b4f2bb944660a9ba7ad5196a1d8e";
const provider = new ethers.providers.JsonRpcProvider(INfuraID);

const walletaddress = "0x44db73d2362c508650d7224897a2d7394ff9e38d";
const walletAbi = [
  {
    inputs: [],
    name: "SendEtherContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEtherUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "sendValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const main = async () => {
  const walletContract = new ethers.Contract(
    walletaddress,
    walletAbi,
    provider
  );

  const contractName = await walletContract.name();
  console.log("name", contractName);

  const num = await walletContract.getValue();
  console.log("Number:-", String(num));

  const balancecontract = await walletContract.contractBalance();
  console.log(await ethers.utils.formatEther(balancecontract));

  const userbalance = await walletContract.accountBalance(
    "0x12D0637dd6e2Eaf0Fc5ca5C7784B78b28d75c937"
  );
  console.log(await ethers.utils.formatEther(userbalance));
};

main();
