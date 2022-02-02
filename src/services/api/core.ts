import { apiProvider } from "./provider";

interface Options {
  chainId: number;
  getTokenBalances?: boolean;
}

export class ApiCore {
  getTokenBalances?: (address: string) => Promise<any>;

  constructor(options: Options) {
    if (options.getTokenBalances) {
      this.getTokenBalances = (address: string) => {
        return apiProvider.getTokenBalances(address, options.chainId);
      };
    }
  }
}
