import { Button, Card, ListGroup } from "react-bootstrap";
import style from "./contact.module.css";
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailOutline,
} from "react-icons/io5";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function ContactUs() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()

      .min(2, "تعداد کاراکتر وارد شده کم است!")

      .max(50, "تعداد کاراکتر وارد شده زیاد است!")

      .required("پر کردن فیلد الزامی است"),

    email: Yup.string()
      .email("ایمیل نامعتبر است")
      .required("پر کردن فیلد الزامی است"),
    message: Yup.string()

      .min(2, "تعداد کاراکتر وارد شده کم است!")

      .required("پر کردن فیلد الزامی است"),
  });

  return (
    <div className={style.main}>
      <h2>تماس با ما</h2>
      <div className={style.contact}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
              <Form>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className={style.form}
                  />
                  {errors.name && touched.name ? (
                    <div className={style.error}>{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="آدرس ایمیل"
                    className={style.form}
                  />
                  {errors.email && touched.email ? (
                    <div className={style.error}>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="پیام"
                    className={style.form}
                  />
                  {errors.message && touched.message ? (
                    <div className={style.error}>{errors.message}</div>
                  ) : null}
                </div>
                <Button variant="secondary" type="submit" className="m-3">
                  ارسال
                </Button>
              </Form> 
          )}
        </Formik>
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
