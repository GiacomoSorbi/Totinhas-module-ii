import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { basePath } from "../../constants";

const Header = ({ isLoggedIn, goToHomePage }) => {
  return (
    <header>
      <div id="top">
        <div className="displayLeft" onClick={goToHomePage}>
          TPWARS
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to={basePath} exact>
              Home
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink activeClassName="active" to={basePath + "/dashboard"}>
                Dashboard
              </NavLink>
            </li>
          ) : null}

          <li>
            <NavLink activeClassName="active" to={basePath + "/contacts"}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
