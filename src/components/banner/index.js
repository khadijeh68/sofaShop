import styles from "./banner.module.css";
import bazaarLogo from "../../assets/images/logo/bazaarLogo.png";
import myketLogo from "../../assets/images/logo/myketLogo.png";
import Google_PlayLogo from "../../assets/images/logo/Google_PlayLogo.png";
import sibapp from "../../assets/images/logo/sibapp.png";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <p>دانلود اپلیکیشن</p>
      <img src={bazaarLogo} alt="bazaar-logo" />
      <img src={myketLogo} alt="myketLogo" />
      <img src={Google_PlayLogo} alt="Google_PlayLogo" />
      <img src={sibapp} alt="sibapp" />
    </div>
  );
};
