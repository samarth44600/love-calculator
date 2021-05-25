import React from "react";
import { useDispatch } from "react-redux";
import { noError } from "../redux/actions/action";

const Error = () => {
  const dispatch = useDispatch();
  return (
    <div className="error-msg">
      <h2 className="msg">Please fill both the name fields...</h2>
      <span
        id="ok"
        onClick={() => {
          dispatch(noError());
        }}
      >
        OK
      </span>
    </div>
  );
};

export default Error;
