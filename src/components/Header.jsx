import { useState } from "react";
import NavLeft from "./headerComponents/NavLeft";
import NavRight from "./headerComponents/NavRight";

const Header = () => {
  return (
    <>
      <NavLeft />
      <NavRight />
    </>
  );
};

export default Header;
