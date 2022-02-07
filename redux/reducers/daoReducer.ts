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
      type: "TOGGLE_DAO_TREASURY_LOADING";
    }
  | {
      type: "SET_DAO_TOKEN";
      payload: Token;
    }
  | {
      type: "TOGGLE_DAO_TOKEN_LOADED";
    }
  | {
      type: "RESET_DAO_TOKEN";
    }
  | {
      type: "RESET_DAO";
    };

export type Token = {
  contract_ticker_symbol: string;
  contract_address: string;
  logoUrl: string;
};

type StateType = {
  treasury?: number;
  name?: string;
  id?: number | string;
  description?: string;
  logo?: string;
  isTreasuryLoading?: boolean;
  token?: Token;
  isTokenLoaded?: boolean;
};

const initState: StateType = {
  treasury: undefined,
  id: undefined,
  name: undefined,
  description: undefined,
  logo: undefined,
  isTreasuryLoading: false,
  token: undefined,
  isTokenLoaded: false,
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

    case "TOGGLE_DAO_TREASURY_LOADING":
      return {
        ...state,
        isTreasuryLoading: !state.isTreasuryLoading,
      };

    case "TOGGLE_DAO_TOKEN_LOADED":
      return {
        ...state,
        isTokenLoaded: !state.isTokenLoaded,
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

    case "RESET_DAO_TOKEN":
      return {
        ...state,
        token: undefined,
      };

    case "RESET_DAO":
      return { ...initState };

    default:
      return { ...state };
  }
};

export default daoReducer;
