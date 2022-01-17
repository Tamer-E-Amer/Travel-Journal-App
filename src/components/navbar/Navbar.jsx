import React from "react";
// css
import "./navbar.css";
// importing icons
import { FaBars } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { IconContext } from "react-icons";
const Navbar = () => {
  return (
    <div className="travel-journal__navbar">
      <IconContext.Provider
        value={{ className: "travel-journal__navbar__logo-img" }}
      >
        <SiYourtraveldottv />
      </IconContext.Provider>

      <span className="travel-journal__navbar__logo-text">G.Reise</span>

      <IconContext.Provider
        value={{ className: "travel-journal__navbar__menu" }}
      >
        <FaBars />
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
