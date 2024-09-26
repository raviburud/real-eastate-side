import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../css/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Project">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs">About</NavLink>
            </li>
            <li>
              <NavLink to="/Enquiry">Enquiry</NavLink>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img
            src={require("../utils/Assets/icons8-twitter-48.png")}
            style={{ height: "40px", width: "40px", marginRight:"30px" }}
          />
        </div>
        <div className="logo">
          <img
            src={require("../utils/Assets/icons8-facebook-48.png")}
            style={{ height: "40px", width: "40px" ,marginRight:"30px"}}
          />
        </div>
        <div className="logo">
          <img
            src={require("../utils/Assets/icons8-instagram-50.png")}
            style={{ height: "40px", width: "40px", marginRight:"30px" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
