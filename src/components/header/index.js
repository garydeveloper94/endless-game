import React from "react";
import { ReactComponent as Logo } from "../../img/logo-endless.svg";
import "./header.css";

const Header = () => (
  <header>
    <nav>
      <span className="brand-logo">
        <Logo />
      </span>
    </nav>
  </header>
);

export default Header;
