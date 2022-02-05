import { ApiCore } from "./core";

export const covalentEth = new ApiCore({
  chainId: 1,
  getTokenBalances: true,
  getHistoricalPortfolioValue: true,
  getTokenHolders: true,
  getHistoricalTokenPrices: true,
});
