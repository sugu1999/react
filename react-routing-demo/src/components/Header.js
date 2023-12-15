import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="nav bg-dark justify-content-end fs-4 p-3">
      <li className="nav-item">
        <NavLink className="nav-link" to="">
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="register">
          Register
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="technologies">
          Technologies
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
