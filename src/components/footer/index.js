import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import aparatLogo from "../../assets/images/aparatLogo.png"
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.container_sofaShop}>
          تمامی حقوق متعلق به شرکت سوفاشاپ می باشد.
        </p>
        <ul className={styles.contact}>
          <li><IoLogoFacebook /></li>
          <li><IoLogoLinkedin /></li>
          <li><IoLogoTwitter/></li>
          <li><IoLogoInstagram/></li>
          <li><IoLogoYoutube/></li>
          <li><BsTelegram/></li>
          <li><img src={aparatLogo} alt="aparat Logo" style={{width: "18px" , height: "18px"}}/></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
