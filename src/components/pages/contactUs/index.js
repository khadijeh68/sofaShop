import { Button, Form, Card, ListGroup } from "react-bootstrap";
import style from "./contact.module.css";
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailOutline,
} from "react-icons/io5";

function ContactUs() {
  return (
    <div className={style.main}>
      <h2>تماس با ما</h2>
      <div className={style.contact}>
        <Form className="w-50 m-3">
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
        <Card style={{ width: "18rem" }} className={style.card}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div>
                <IoLocationOutline className="h4" />
                <p className="mb-0">تهران</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <IoCallOutline className="h4" />
                <p className="mb-0">021-66332211</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <IoMailOutline className="h4" />
                <p className="mb-0">hi@email.com</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="h4">
              <IoLogoFacebook />
              <IoLogoLinkedin />
              <IoLogoTwitter />
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default ContactUs;
