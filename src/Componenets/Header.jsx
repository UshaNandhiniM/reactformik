import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary-rgb">
        <div className="container-fluid">
          <NavLink to="/#">Library Management System</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/author">Author</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin">Admin</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Header;
