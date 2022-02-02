type ActionType =
  | {
      type: "SET_DAO_TREASURY";
      payload: {
        treasury: StateType["treasury"];
      };
    }
  | {
      type: "RESET_DAO";
    };

type StateType = {
  treasury?: number;
};

const initState: StateType = {
  treasury: undefined,
};

const daoReducer: (state: StateType, action: ActionType) => StateType = (
  state = initState,
  action
) => {
  switch (action.type) {
    case "SET_DAO_TREASURY":
      return {
        ...state,
        treasury: action.payload.treasury,
      };

    case "RESET_DAO":
      return { ...initState };

    default:
      return { ...state };
  }
};

export default daoReducer;
