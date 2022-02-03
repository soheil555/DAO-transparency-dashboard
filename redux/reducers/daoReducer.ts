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
      type: "RESET_DAO";
    };

type Token = {
  contract_ticker_symbol: string;
  contract_address: string;
};

type StateType = {
  treasury?: number;
  name?: string;
  description?: string;
  logo?: string;
  isTreasuryLoading?: boolean;
  token?: Token;
};

const initState: StateType = {
  treasury: undefined,
  name: undefined,
  description: undefined,
  logo: undefined,
  isTreasuryLoading: undefined,
  token: undefined,
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

    case "SET_DAO_INFO":
      return {
        ...state,
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
        },
      };

    case "RESET_DAO":
      return { ...initState };

    default:
      return { ...state };
  }
};

export default daoReducer;
