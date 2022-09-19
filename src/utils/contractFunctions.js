import Web3 from "web3";
import {approve_address} from '../contract/address';
import {approve_abi} from '../contract/abi';

const web3 = new Web3(window.ethereum);

export const getApproveContract = async () => {
    const contract = await new web3.eth.Contract(approve_abi, approve_address)
    console.log(contract)
    return contract;
}
