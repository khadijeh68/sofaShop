import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "rgb(211, 211, 211)" : "white",
    };
  };
  return (
    <nav className={style.nav}>
      <NavLink to="search" style={navLinkStyles}>
        <span>
          <IoSearch />
        </span>{" "}
      </NavLink>

      <div className={style.item}>
        <NavLink to="categories" style={navLinkStyles}>
          <span>دسته بندی محصولات</span>{" "}
        </NavLink>
        <NavLink to="aboutUs" style={navLinkStyles}>
          <span>درباره ما </span>
        </NavLink>
        <NavLink to="contactUs" style={navLinkStyles}>
          <span>تماس با ما </span>
        </NavLink>
      </div>
      <NavLink to="/" style={navLinkStyles}>
        <span>sofaShop</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
