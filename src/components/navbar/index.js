import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "gray" : "black",
    };
  };

  return (
    <header className={styles.navbar}>
      <nav>
        <ul className={nav ? [styles.menu,styles.active].join(' ') : styles.menu }>
          <li>
            <NavLink to="search" style={navLinkStyles}>
              <IoSearch size={22} />
            </NavLink>
          </li>
          <li>
            <NavLink to="user" style={navLinkStyles}>
              <AiOutlineUser size={22} />
            </NavLink>
          </li>
          <li>
            <NavLink to="categories" style={navLinkStyles}>
              دسته بندی محصولات
            </NavLink>
          </li>
          <li>
            <NavLink to="aboutUs" style={navLinkStyles}>
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink to="contactUs" style={navLinkStyles}>
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/" style={navLinkStyles}>
        <img src={logo} alt="sofaShop" className={styles.img} />
      </NavLink>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};
  
export default Navbar;
