import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

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
            <NavLink activeClassName="active" to="/" exact>
              Home
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink activeClassName="active" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          ) : null}

          <li>
            <NavLink activeClassName="active" to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
