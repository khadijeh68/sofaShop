import styles from "./footerSection.module.css";
import anjomanLogo from "../../assets/images/namads/anjomanLogo.png";
import enamadLogo from "../../assets/images/namads/enamadLogo.png";
import majaziLogo from "../../assets/images/namads/majaziLogo.png";
import samandehiLogo from "../../assets/images/namads/samandehiLogo.png";

const FooterSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.namads}>
        <div>
          <img src={anjomanLogo} alt="anjoman Logo" />
          <img src={enamadLogo} alt="enamad Logo" />
        </div>
        <div>
          <img src={majaziLogo} alt="majazi Logo" />
          <img src={samandehiLogo} alt="samandehi Logo" />
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
