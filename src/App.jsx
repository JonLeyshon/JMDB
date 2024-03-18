import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./css/JMDB.css";
import "./css/headerCSS/header.css";
import "./css/footer.css";
import "./css/movieSearch.css";
import Interface from "./components/interface";
import Header from "./components/headerComponents/Header";
import Footer from "./components/footerComponents/Footer";

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
