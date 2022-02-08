import { apiProvider } from "./provider";

interface Options {
  chainId: number;
  getTokenBalances?: boolean;
  getHistoricalPortfolioValue?: boolean;
  getTokenHolders?: boolean;
  getHistoricalTokenPrices?: boolean;
}

export class ApiCore {
  getTokenBalances?: (address: string) => Promise<any>;
  getHistoricalPortfolioValue?: (address: string) => Promise<any>;
  getTokenHolders?: (
    address: string,
    pageNumber?: number,
    pageSize?: number
  ) => Promise<any>;
  getHistoricalTokenPrices?: (
    address: string,
    from: string,
    to: string
  ) => Promise<any>;

  constructor(options: Options) {
    if (options.getTokenBalances) {
      this.getTokenBalances = (address: string) => {
        return apiProvider.getTokenBalances(address, options.chainId);
      };
    }

    if (options.getHistoricalPortfolioValue) {
      this.getHistoricalPortfolioValue = (address: string) => {
        return apiProvider.getHistoricalPortfolioValue(
          address,
          options.chainId
        );
      };
    }

    if (options.getTokenHolders) {
      this.getTokenHolders = (
        address: string,
        pageNumber: number = 0,
        pageSize: number = 10
      ) => {
        return apiProvider.getTokenHolders(
          address,
          options.chainId,
          pageNumber,
          pageSize
        );
      };
    }

    if (options.getHistoricalTokenPrices) {
      this.getHistoricalTokenPrices = (
        address: string,
        from: string,
        to: string
      ) => {
        return apiProvider.getHistoricalTokenPrices(
          address,
          options.chainId,
          from,
          to
        );
      };
    }
  }
}
