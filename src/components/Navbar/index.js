import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Wrapper } from "./styles";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    // nav section ul, li, link and hambuger menu //
    <Wrapper>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item logo-box">
          <Link to="/" className="Navbar-logo">
            <h1 id="logo">
              T<sub>r</sub>
              <span className="logoS"></span>
            </h1>
          </Link>
        </li>
        <li>
          <Link
            to="/scheduling"
            className="nav-links"
            onClick={closeMobileMenu}>
            SCHEDULING
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            FLIGHTS
            <i className="fas fa-caret-down" />
          </Link>
        </li>

        <li>
          <Link to="/sales" className="nav-links" onClick={closeMobileMenu}>
            SALES
            <i className="fas fa-caret-down" />
          </Link>
        </li>

        <li>
          <Link to="/ops" className="nav-links" onClick={closeMobileMenu}>
            OPS
            <i className="fas fa-caret-down" />
          </Link>
        </li>

        <li>
          <Link
            to="/contact-us"
            className="nav-links"
            onClick={closeMobileMenu}>
            HANDLING
            <i className="fas fa-caret-down" />
          </Link>
        </li>

        <li>
          <Link to="/crew" className="nav-links" onClick={closeMobileMenu}>
            CREW
            <i className="fas fa-caret-down" />
          </Link>
        </li>

        <li>
          <p className="nav-links" onClick={closeMobileMenu}>
            REPORT
            <i className="fas fa-caret-down" />
          </p>
        </li>
      </ul>

      <ul className={click ? "nav-menu1 active" : "nav-menu1"}>
        <li>
          <Link to="/" className="nav-links1" onClick={closeMobileMenu}></Link>
        </li>

        <li>
          <Link to="/products" className="nav-links1" onClick={closeMobileMenu}>
            <i className="fas fa-caret-down" />
          </Link>
        </li>

        <li>
          <Link
            to="/admin-settings"
            className="nav-links1"
            onClick={closeMobileMenu}></Link>
        </li>

        <li>
          <Link
            to="/user-settinngs"
            className="nav-links1"
            onClick={closeMobileMenu}></Link>
        </li>

        <li>
          <Link
            to="/refresh"
            className="nav-links1"
            onClick={closeMobileMenu}></Link>
        </li>
      </ul>

      <ul className="btn">
        <li>
          <Link
            to="/log-out"
            className="nav-links-mobile"
            onClick={closeMobileMenu}>
            Logout
          </Link>
        </li>
      </ul>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </Wrapper>
  );
}

export default Navbar;
