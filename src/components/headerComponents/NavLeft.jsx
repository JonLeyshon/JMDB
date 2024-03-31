import { Link } from "react-router-dom";

const NavLeft = () => {
  return (
    <Link to="/">
      <img src="/Images/cover.png" alt="Logo Image" className="headerLogo" />
    </Link>
  );
};

export default NavLeft;
