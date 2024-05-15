import st from "./Log.module.css";
import { Inputs } from "../Inputs/Inputs";
import { Formik } from "formik";
import * as Yup from "yup";
export const Log = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("This email is not found")
      .required("The field can't be empty"),
    password: Yup.string()
      .min(8, "The password must include at least 8 characters")
      .required("The field can't be empty"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={SignupSchema}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <form action="" onSubmit={handleSubmit}>
          <Inputs
            type="text"
            onChange={handleChange}
            value={values.email}
            name="email"
            placeholder="Email"
          />
          {errors.email && touched.email && <label>{errors.email}</label>}
          <Inputs
            type="text"
            onChange={handleChange}
            value={values.password}
            name="password"
            placeholder="Password"
          />
          {errors.password && touched.password && (
            <label>{errors.password}</label>
          )}
          <button type="submit">Log In</button>
        </form>
      )}
    </Formik>
  );
};
