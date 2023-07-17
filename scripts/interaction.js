require("dotenv").config();
const { Web3 } = require("web3");
const ERC20 = require("../artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json");

const goldAbi = ERC20.abi;
const goldAddress = "0xF4F7dB1BdF7Eb718C293b5d9b5D4f97827D1Ed74";
const privateKey = process.env.PRIV_KEY;
const address = "0x9B0A2787d685dd68245EfD2C737386F392cDD8aE";
const addressTo = "0x04E407C7d7C2A6aA7f2e66B0B8C0dBcafA5E3Afe"
async function interact() {
    const web3 = await new Web3(process.env.RPC_ENDPOINT || "https://bsc-testnet.publicnode.com");
    const goldContract = await new web3.eth.Contract(goldAbi, goldAddress);

    //Call getBalance
    const myBalance = await goldContract.methods.balanceOf(address).call();
    console.log(myBalance);

    //Send transfer -> modify the state of the blockchain

}
interact()