import st from "./Sign.module.css";
import { Inputs } from "../Inputs/Inputs";
import { Formik } from "formik";
import * as Yup from "yup";
export const Sign = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/[A-Z]{1}[a-z]/, "The first letter must be uppercase")
      .required("The field can't be empty"),
    surname: Yup.string()
      .matches(/[A-Z]{1}[a-z]/, "The first letter must be uppercase")
      .required("The field can't be empty"),
    phone: Yup.number()
      .required("The field can't be empty")
      .positive("The value must be positive")
      .integer("Number must be integer"),
    password: Yup.string()
      .min(8, "The password must include at least 8 characters")
      .required("The field can't be empty"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password")],
      "There is no match"
    ),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        phone: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={SignupSchema}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Inputs
            type="text"
            onChange={handleChange}
            value={values.name}
            name="name"
            placeholder="Name"
          />
          {errors.name && touched.name && <label>{errors.name}</label>}
          <Inputs
            type="text"
            onChange={handleChange}
            value={values.surname}
            name="surname"
            placeholder="Surname"
          />
          {errors.surname && touched.surname && <label>{errors.surname}</label>}
          <Inputs
            type="text"
            onChange={handleChange}
            value={values.phone}
            name="phone"
            placeholder="Phone Number"
          />
          {errors.phone && touched.phone && <label>{errors.phone}</label>}
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
          <Inputs
            type="text"
            onChange={handleChange}
            value={values.passwordConfirmation}
            name="passwordConfirmation"
            placeholder="Confirm password"
          />
          {errors.passwordConfirmation && touched.passwordConfirmation && (
            <label>{errors.passwordConfirmation}</label>
          )}
          <button type="text">Sign Up</button>
        </form>
      )}
    </Formik>
  );
};
