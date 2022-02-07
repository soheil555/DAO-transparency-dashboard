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
      type: "SET_ERROR";
      payload: {
        message: Error["message"];
      };
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

type Error = {
  message: string;
};

type StateType = {
  treasury?: number;
  name?: string;
  id?: number | string;
  description?: string;
  logo?: string;
  isTreasuryLoaded?: boolean;
  token?: Token;
  isTokenLoaded?: boolean;
  error?: Error;
};

const initState: StateType = {
  treasury: undefined,
  id: undefined,
  name: undefined,
  description: undefined,
  logo: undefined,
  isTreasuryLoaded: false,
  token: undefined,
  isTokenLoaded: false,
  error: undefined,
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
