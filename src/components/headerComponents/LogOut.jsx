import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLoggedIn } from "../../redux/LoggedInOrOut";
import { url } from "../utils/config";

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      const { data } = await axios.delete(`${url}/logout`, {
        headers: { token: localStorage.getItem("token") },
      });
      localStorage.removeItem("token");
      dispatch(setLoggedIn(false));
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="logOutContainer">
      <Link to="/">
        <button onClick={handleLogOut} className="logOutButton">
          Log Out
        </button>
      </Link>
    </div>
  );
};

export default LogOut;
