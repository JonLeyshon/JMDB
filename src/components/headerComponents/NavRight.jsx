import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/LoggedInOrOut";

const NavRight = () => {
  const loggedIn = useSelector(selectLoggedIn);
  console.log(loggedIn);
  if (loggedIn === true) {
    return (
      <>
        <ul>
          <Link to={"/Dashboard"}>
            <li>My Account</li>
          </Link>
        </ul>
      </>
    );
  }

  // const LoggedIn = useSelector(selectLoggedIn);
  // if (LoggedIn === true) {
  //   return (
  //     <>
  //       <LogOut />
  //     </>
  //   );
  // }

  return (
    <ul>
      <Link to={"/login"}>
        <li>Log in / Sign Up</li>
      </Link>
    </ul>
  );
};

export default NavRight;
