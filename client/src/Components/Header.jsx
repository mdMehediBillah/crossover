import React from "react";
import { NavLink } from "react-router-dom";
// import { FaShoppingCart, FaCar, FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-orange-400" : "text-white";
  };
  return (
    <header className="header-container">
      <div className="flex justify-between header-content-container">
        <div>
          <p>Crossover</p>
        </div>
        <nav>
          <ul className="flex">
            <li className="px-2 py-1">
              <NavLink className={navLinkStyles} to="/">
                Home
              </NavLink>
            </li>
            <li className="px-2 py-1">
              <NavLink className={navLinkStyles} to="/about">
                About
              </NavLink>
            </li>
            <li className="px-2 py-1">
              <NavLink className={navLinkStyles} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="px-2 py-1">
              <NavLink className={navLinkStyles} to="/user">
                User
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
