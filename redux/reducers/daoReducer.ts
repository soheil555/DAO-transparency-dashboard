import { Reducer } from "redux";

type ActionType =
  | {
      type: "SET_DAO_TREASURY";
      payload: {
        treasury: StateType["treasury"];
      };
    }
  | {
      type: "SET_DAO_INFO";
      payload: {
        id: number | string;
        name: string;
        description: string;
        logo: string;
      };
    }
  | {
      type: "SET_DAO_TOKEN";
      payload: Token;
    }
  | {
      type: "SET_DAO_GOVERNANCE";
      payload: Governance;
    }
  | {
      type: "SET_DAO_TOP_TOKEN_HOLDERS";
      payload: TokenHolder[];
    }
  | {
      type: "SET_DAO_TOKEN_NOT_FOUND";
    }
  | {
      type: "SET_DAO_HISTORICAL_TREASURY";
      payload: Treasury[];
    }
  | {
      type: "DAO_TOP_TOKEN_HOLDERS_ERROR";
    }
  | {
      type: "SET_DAO_TOKEN_PRICES";
      payload: TokenPrice[];
    }
  | {
      type: "SET_ERROR";
      payload: Error;
    }
  | {
      type: "HIDE_ERROR";
    }
  | {
      type: "RESET_DAO";
    };

export type Token = {
  contract_ticker_symbol: string;
  contract_address: string;
  logoUrl: string;
};

export type Governance = {
  proposalsCount: number;
  followersCount: number;
  name: string;
  symbol: string;
};

export type TokenHolder = {
  address: string;
  balance: string;
  total_supply: string;
};

export type Treasury = {
  date: string;
  treasury: number;
  treasuryShort: string;
};

export type TokenPrice = {
  date: string;
  price: number;
  contract_metadata: object;
};

type Error = {
  message: string;
};

type StateType = {
  treasury?: number;
  name?: string;
  id?: number | string;
  description?: string;
  logo?: string;
  token?: Token;
  error?: Error;
  governance?: Governance;
  topTokenHolders?: TokenHolder[];
  topTokenHoldersError?: boolean;
  historicalTreasury?: Treasury[];
  tokenPrices?: TokenPrice[];
  tokenNotFound?: boolean;
};

const initState: StateType = {
  treasury: undefined,
  id: undefined,
  name: undefined,
  description: undefined,
  logo: undefined,
  token: undefined,
  error: undefined,
  governance: undefined,
  topTokenHolders: undefined,
  historicalTreasury: undefined,
  tokenPrices: undefined,
  topTokenHoldersError: false,
  tokenNotFound: false,
};

const daoReducer: Reducer<StateType, ActionType> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case "SET_DAO_TREASURY":
      return {
        ...state,
        treasury: action.payload.treasury,
      };

    case "SET_DAO_INFO":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        description: action.payload.description,
        logo: action.payload.logo,
      };

    case "SET_DAO_TOKEN":
      return {
        ...state,
        token: {
          contract_ticker_symbol: action.payload.contract_ticker_symbol,
          contract_address: action.payload.contract_address,
          logoUrl: action.payload.logoUrl,
        },
      };

    case "SET_DAO_TOKEN_NOT_FOUND":
      return {
        ...state,
        tokenNotFound: true,
      };

    case "SET_DAO_GOVERNANCE":
      return {
        ...state,
        governance: {
          name: action.payload.name,
          symbol: action.payload.symbol,
          proposalsCount: action.payload.proposalsCount,
          followersCount: action.payload.followersCount,
        },
      };

    case "SET_DAO_TOP_TOKEN_HOLDERS":
      return {
        ...state,
        topTokenHolders: action.payload,
      };

    case "DAO_TOP_TOKEN_HOLDERS_ERROR":
      return {
        ...state,
        topTokenHoldersError: true,
      };

    case "SET_DAO_HISTORICAL_TREASURY":
      return {
        ...state,
        historicalTreasury: action.payload,
      };

    case "SET_DAO_TOKEN_PRICES":
      return {
        ...state,
        tokenPrices: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: {
          message: action.payload.message,
        },
      };

    case "HIDE_ERROR":
      return {
        ...state,
        error: undefined,
      };

    case "RESET_DAO":
      return { ...initState };

    default:
      return { ...state };
  }
};

export default daoReducer;
