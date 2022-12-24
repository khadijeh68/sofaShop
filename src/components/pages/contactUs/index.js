import { Button, Form } from "react-bootstrap";
import style from "./contact.module.css";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

function ContactUs() {
  return (
    <div className={style.main}>
      <h2>تماس با ما</h2>
      <div className={style.contact}>
        <Form className={style.form}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="نام و نام خانوادگی"
              size="sm"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="آدرس ایمیل" size="sm" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" placeholder="پیام" rows={3} size="sm" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            ارسال
          </Button>
        </Form>
        <div className={style.icon}>
          <h3>
            <IoLocationOutline />
          </h3>
          <p>تهران</p>
        </div>
        <div className={style.icon}>
          <h3>
            <IoCallOutline />
          </h3>
          <p>021-66332211</p>
        </div>
        <div className={style.icon}>
          <h3>
            <IoMailOutline />
          </h3>
          <p>hi@email.com</p>
        </div>
       
      </div>
    </div>
  );
}

export default ContactUs;
