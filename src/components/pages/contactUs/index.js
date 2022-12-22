import { Button, Form } from "react-bootstrap";
import style from "./contact.module.css";

function ContactUs() {
  return (
    <div className={style.contact}>
      <h2>تماس با ما</h2>
      <Form className={style.form}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="نام و نام خانوادگی" size="sm" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="آدرس ایمیل" size="sm"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" placeholder="پیام" rows={3} size="sm"/>
        </Form.Group>
        <Button variant="primary" type="submit">
        ثبت
      </Button>
      </Form>
    </div>
  );
}

export default ContactUs;
