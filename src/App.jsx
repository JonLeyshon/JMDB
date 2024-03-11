import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./css/App.css";
import Interface from "./components/interface";

const App = () => {
  return (
    <>
      <header></header>
      <main>
        <Interface />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
