import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, selectLoggedIn } from "../../redux/LoggedInOrOut";
import EmailPassword from "./EmailPassword";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { url } from "../utils/config";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
    console.log(userInput);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/login`, userInput);
      if (data.status === 200) {
        console.log(data.status);
        localStorage.setItem("token", data.token);
        dispatch(setLoggedIn(true));
        setLoginErrorMsg("");
      } else {
        dispatch(setLoggedIn(false));
        setLoginErrorMsg(
          "Incorrect Credentials, please try again, or create an account"
        );
      }
    } catch (error) {
      console.error("Login failed:", error);
      dispatch(setLoggedIn(false));
    }
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <div className="loginLeft">
          <h2>Sign In</h2>
          <form onInput={onInput} onSubmit={onSubmit}>
            <EmailPassword name={"Login"} />
          </form>
          <p> {loginErrorMsg}</p>
        </div>
        <div className="loginRight">
          <h1>Welcome to JMDB</h1>
          <h3>Don't have an account?</h3>
          <Link to={"/SignUp"}>
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
