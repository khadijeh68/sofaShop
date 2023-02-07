import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import aparatLogo from "../../assets/images/aparatLogo.png";
import styles from "./footer.module.css";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Footer = () => {

  const handleUp = () => {
    window.location.href="#"
  };

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.container_sofaShop}>
          تمامی حقوق متعلق به شرکت سوفاشاپ می باشد.
        </p>
      <div className={styles.footer_left}>
        <ul className={styles.contact}>
          <li>
            <a href="https://www.facebook.com/sofaShop">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/sofaShop">
              <IoLogoLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/sofaShop">
              <IoLogoTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sofaShop">
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/sofaShop">
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.telegram.com/sofaShop">
              <BsTelegram />
            </a>
          </li>
          <li>
            <a href="https://www.aparat.com/sofaShop">
              <img
                src={aparatLogo}
                alt="aparat Logo"
                style={{ width: "18px", height: "18px" }} />
            </a>
          </li>
         
        </ul>
        <div onClick={handleUp}>
          <IoIosArrowDropupCircle size={50}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
