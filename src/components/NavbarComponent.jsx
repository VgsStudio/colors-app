import React from "react";
import { Route, Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/"} className="li">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about-us"} className="li">
            About us
          </Link>
        </li>
        <li>
          <Link to={"/settings"} className="li">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
