import { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import erc20Abi from "../contracts/erc20.json";
import abi from "../contracts/abi.json";
import { useAuthContext } from "./AuthProvider";
import { config } from "../config";

export const ContractContext = createContext({
  busdcontract: null,
  contract: null,
  web: null,
  wrongNetwork: false,
  getBusdBalance: () => null,
  fromWei: () => null,
  toWei: () => null,
  getBusdApproved: () => null,
});

export const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState();
  const [web3, setWeb3] = useState();
  const { chainId, setSnackbar } = useAuthContext();
  const [wrongNetwork, setWrongNetwork] = useState(false);

  useEffect(() => {
    if (!chainId) {
      return;
    }
    if (parseInt(chainId) !== config.chainId) {
      setSnackbar({
        type: "error",
        message: "Wrong network",
      });
      setWrongNetwork(true);
      return;
    }
    setWrongNetwork(false);
    const web3Instance = new Web3();
    web3Instance.setProvider(Web3.givenProvider);

    setWeb3(web3Instance);
    const contract = new web3Instance.eth.Contract(abi, config.contractAddress);
    setContract(contract);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId]);

  const web3Instance2 = new Web3();
  web3Instance2.setProvider(Web3.givenProvider);
  const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const busdcontract = new web3Instance2.eth.Contract(erc20Abi, busdAddress);
  const getBusdBalance = (address) => busdcontract.methods.balanceOf(address).call();
  const getBusdApproved = (address) => busdcontract.methods.allowance(address,config.contractAddress).call();
  const fromWei = (wei, unit = "ether") =>
    parseFloat(Web3.utils.fromWei(wei, unit)).toFixed(3);
  const toWei = (amount, unit = "ether") => Web3.utils.toWei(amount, unit);

  return (
    <ContractContext.Provider
      value={{ web3, busdcontract, contract, wrongNetwork, getBusdBalance, fromWei, toWei, getBusdApproved }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useContractContext = () => useContext(ContractContext);
