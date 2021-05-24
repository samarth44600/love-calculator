import axios from "axios";

export const calculate = ({ partner1, partner2 }) => {
  return async (dispatch) => {
    const { data } = await axios.post("http://localhost:4000/api", {
      partner1,
      partner2,
    });
    await console.log(data.constructor.name);
    if (data.constructor.name === "Array") {
      await dispatch(calculate_success(data[0]));
      return;
    }
    await dispatch(calculate_success(data));
  };
};

export const calculate_success = (data) => {
  return {
    type: "DATA_RECEIVED",
    payload: data,
  };
};
