import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./css/App.css";
import "./css/JMDB.css";
import "./css/header.css";
import Interface from "./components/interface";
import Header from "./components/headerComponents/Header";
import Footer from "./components/footerComponents/Footer";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Interface />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
