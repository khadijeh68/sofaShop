import styles from "./footerSection.module.css";
// import anjomanLogo from "../../assets/images/namads/anjomanLogo.png";
import enamadLogo from "../../assets/images/namads/enamadLogo.png";
import majaziLogo from "../../assets/images/namads/majaziLogo.png";
import samandehiLogo from "../../assets/images/namads/samandehiLogo.png";

const FooterSection = () => {
  return (
    <div className={styles.main}>
     
      <div className={styles.shoppingGuide}>
        <ul>
          <p>راهنمای خرید</p>
          <li>
            <a href="/">نحوه ثبت سفارش</a>
          </li>
          <li>
            <a href="/">رویه ارسال سفارش</a>
          </li>
          <li>
            <a href="/">شیوه های ارسال سفارش</a>
          </li>
          <li>
            <a href="/">شیوه های پرداخت</a>
          </li>
          <li>
            <a href="/">فروش اقساطی</a>
          </li>
        </ul>
      </div>

      <div className={styles.account}>
        <ul>
          <p>خدمات مشتریان</p>
          <li>
            <a href="/">پاسخ به پرسش های متداول</a>
          </li>
          <li>
            <a href="/">شرایط استفاده</a>
          </li>
        </ul>
      </div>

      
      <div className={styles.form}>
        <form action="">
          <div className={styles.input}>
            <p>با ثبت ایمیل، از آخرین محصولات و جدیدترین تخفیف ها باخبر شوید</p>
            <div className={styles.form_email}>
              <input
                className={styles.email}
                type="text"
                placeholder="لطفا ایمیل خود را وارد کنید..."
              />
              <button className={styles.email_btn}>ثبت</button>
            </div>
          </div>
        </form>
        <div className={styles.namads}>
          <img src={enamadLogo} alt="enamad Logo" />
          <img src={majaziLogo} alt="majazi Logo" />
          <img src={samandehiLogo} alt="samandehi Logo" />
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
