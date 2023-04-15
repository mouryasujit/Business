import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <NavLink to="/" className="as">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="as">
                AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourproducts" className="as">
                Our Products
              </NavLink>
            </li>

            <li
              style={{
                textDecoration: "none",
                overflow: "hidden",
              }}
            >
              <NavLink to="/contact" className="as">
                <button
                  className="button-64 "
                  style={{ overflow: "hidden", width: "max-content" }}
                >
                  <span
                    className="text"
                    style={{ overflow: "hidden", width: "max-content" }}
                  >
                    Contact
                  </span>
                </button>
              </NavLink>
            </li>
          </ul>
          <div className="logo-container" style={{ cursor: "pointer" }}>
            <img src="/images/MLOGO.png" alt="Company Logo" className="logo" />
            <span className="nones">MG</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
