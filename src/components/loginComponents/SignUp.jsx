import { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import "../../css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn, setLoggedIn } from "../../redux/LoggedInOrOut";

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    first_name: "",
    second_name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    console.log(userInput);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/add", userInput);
      if (data.status === 200) {
        console.log(data);
        localStorage.setItem("token", data.token);
        dispatch(setLoggedIn(true));
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="signUpContainer">
      <div className="signUpCard">
        <h2>Sign Up</h2>
        <form onInput={onInput} onSubmit={onSubmit} className="signUpForm">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" name="first_name" id="first_name" required />
          <label htmlFor="second_name">Surname:</label>
          <input type="text" name="second_name" id="second_name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
