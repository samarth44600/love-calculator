const initialState = {
  partner1: "",
  partner2: "",
  percentage: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return {
        ...state,
        partner1: action.payload.partner1,
        partner2: action.payload.partner2,
        percentage: action.payload.percentage,
      };
    default:
      return state;
  }
};
