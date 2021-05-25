import React from "react";
import Header from "./Header";
import Names from "./Names";
import Loader from "./Loader";

const Main = () => {
  return (
    <div className="main-comp">
      <Header />
      <Names />
      <Loader />
    </div>
  );
};

export default Main;
