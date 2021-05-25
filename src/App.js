import React from "react";
import "./Styles/App.css";
//component
import Main from "./Components/Main-page";
import Error from "./Components/Error-msg";
import { useSelector } from "react-redux";

function App() {
  const hasError = useSelector((state) => state.error.nameError);

  return <div className="app">{hasError ? <Error /> : <Main />}</div>;
}

export default App;
