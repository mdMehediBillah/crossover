import React from "react";
// import { Link, NavLink } from "react-router-dom";
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
            <li className="px-2 py-1">Home</li>
            <li className="px-2 py-1">About</li>
            <li className="px-2 py-1">Contact</li>
            <li className="px-2 py-1">User</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
