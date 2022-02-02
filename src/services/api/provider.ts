import axios from "axios";
import { handleResponse, handleError } from "./response";

const BASE_URL = "https://api.covalenthq.com/v1";
const KEY = process.env.NEXT_PUBLIC_COVALENT_KEY;

const getTokenBalances = (address: string, chainId: number) => {
  return axios
    .get(`${BASE_URL}/${chainId}/address/${address}/balances_v2/?key=${KEY}`)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getTokenBalances,
};
