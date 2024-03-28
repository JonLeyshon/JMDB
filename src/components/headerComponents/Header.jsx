import { useState } from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

const Header = () => {
  return (
    <div className="row align-items-center">
      <NavLeft />
      <NavRight />
    </div>
  );
};

export default Header;
