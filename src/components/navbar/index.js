import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={style.nav}>
      <NavLink to="/">
        <span>sofaShop</span>
      </NavLink>
      <div className={style.item}>
        <NavLink to="products">
          <span>محصولات</span>{" "}
        </NavLink>
        <NavLink to="aboutUs">
          <span>درباره ما </span>
        </NavLink>
        <NavLink to="contactUs">
          <span>تماس با ما </span>
        </NavLink>
      </div>
      <NavLink to="search">
        <span><IoSearch/></span>{" "}
      </NavLink>
    </nav>
  );
}

export default Navbar;
