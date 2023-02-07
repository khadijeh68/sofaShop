import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/account");
  };

  const SignupSchema = Yup.object().shape({
    username: Yup.string()

      .min(2, "تعداد کاراکتر وارد شده کمتر از حد مجاز است!")

      .max(50, "تعداد کاراکتر وارد شده بیشتر از حد مجاز است!")

      .required("پر کردن فیلد الزامی است"),

    password: Yup.string()

      .min(2, "تعداد کاراکتر وارد شده کمتر از حد مجاز است!")

      .required("پر کردن فیلد الزامی است"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <Field name="username" type="text" placeholder="نام کاربری" />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
          </div>

          <div>
            <Field name="password" type="password" placeholder="رمز عبور" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>
          <Button variant="primary" type="submit" className="m-3">
            ورود
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
