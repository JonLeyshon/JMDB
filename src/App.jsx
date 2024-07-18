import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./css/JMDB.css";
import "./css/headerCSS/header.css";
import "./css/footer.css";
import "./css/movieSearch.css";
import "./css/homepage.css";
import "./css/individualMedia.css";
import "./css/spinner.css";
import "./css/dashboard.css";
import Interface from "./components/interface";
import Header from "./components/headerComponents/Header";
import Footer from "./components/footerComponents/Footer";

const App = () => {
  return (
    <div id="content-body">
      <div className="content">
        <header>
          <Header />
        </header>
        <main>
          <Interface />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
