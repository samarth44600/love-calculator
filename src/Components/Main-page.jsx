import React from "react";
import Header from "./Header";
import Names from "./Names";
import Loader from "./Loader";
import Error from "./Error-msg";

const Main = () => {
  return (
    <div className="main-comp">
      <Header />
      <Names />
      <Loader />
      <Error />
    </div>
  );
};

export default Main;
