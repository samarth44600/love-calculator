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

export const errorReducer = (state = { nameError: false }, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        nameError: true,
      };
    case "NO_ERROR":
      return {
        ...state,
        nameError: false,
      };
    default:
      return state;
  }
};
