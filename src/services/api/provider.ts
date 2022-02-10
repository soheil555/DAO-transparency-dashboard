import axios from "axios";

const BASE_URL = "https://api.covalenthq.com/v1";
const KEY = process.env.NEXT_PUBLIC_COVALENT_KEY;

const getTokenBalances = (address: string, chainId: number) => {
  return axios.get(
    `${BASE_URL}/${chainId}/address/${address}/balances_v2/?key=${KEY}`
  );
};

const getHistoricalPortfolioValue = (address: string, chainId: number) => {
  return axios.get(
    `${BASE_URL}/${chainId}/address/${address}/portfolio_v2/?key=${KEY}`
  );
};

const getTokenHolders = (
  address: string,
  chainId: number,
  pageNumber: number,
  pageSize: number
) => {
  return axios.get(
    `${BASE_URL}/${chainId}/tokens/${address}/token_holders/?key=${KEY}&page-number=${pageNumber}&page-size=${pageSize}`
  );
};

const getHistoricalTokenPrices = (
  address: string,
  chainId: number,
  from: string,
  to: string
) => {
  return axios.get(
    `${BASE_URL}/pricing/historical_by_addresses_v2/${chainId}/USD/${address}/?quote-currency=USD&format=JSON&from=${from}&to=${to}&key=${KEY}`
  );
};

export const apiProvider = {
  getTokenBalances,
  getHistoricalPortfolioValue,
  getTokenHolders,
  getHistoricalTokenPrices,
};
