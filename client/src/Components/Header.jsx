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
              <NavLink to="/contact" className={navLinkStyles}>
                Contact
              </NavLink>
            </li>

            <li className="px-2 py-1">
              <NavLink to="/comment-list" className={navLinkStyles}>
                Comments
              </NavLink>
            </li>
            <li className="px-2 py-1">
              <NavLink className={navLinkStyles} to="/register">
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
