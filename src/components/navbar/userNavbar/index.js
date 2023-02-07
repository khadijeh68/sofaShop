import { IoSearch, IoCartSharp } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styles from "./userNavbar.module.css";
// import logo from "../../assets/images/logo.png";
import { useState } from "react";

const UserNavbar = () => {
  const [nav, setNav] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "gray" : "black",
    };
  };

  return (
    <>
      <header className={styles.navbar}>
        <nav>
          <ul
            className={
              nav ? [styles.menu, styles.active].join(" ") : styles.menu
            }
          >
            <li>
              <NavLink
                to="/categories"
                style={navLinkStyles}
                className={styles.item}
              >
                دسته بندی محصولات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                style={navLinkStyles}
                className={styles.item}
              >
                <IoSearch size={22} />
              </NavLink>
            </li>
            <NavLink to="/shoppingCart" style={navLinkStyles}>
              <div>
                <IoCartSharp size={22}/>
                <span>0</span>
              </div>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default UserNavbar;
