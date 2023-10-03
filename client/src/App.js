import React from "react";
import { useEffect } from "react";

const { ethers } = require("ethers");

const App = () => {
  const walletaddress = "0x44db73d2362c508650d7224897a2d7394ff9e38d";

  useEffect(() => {
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
    const writeContract = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts");

      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletaddress, walletAbi, signer);
        await contract.sendValue(5);
      await contract.SendEtherContract({
        value: ethers.utils.parseEther("0.01"),
      });

      await contract.sendEtherUser(
        "0x1dfe45DC0fdD199Af0eec654e60c7C554eb4Ee24",
        { value: ethers.utils.parseEther("0.01") }
      );
    };
    writeContract();
  }, []);

  return <>Arnab Kumar HAnsda</>;
};

export default App;
