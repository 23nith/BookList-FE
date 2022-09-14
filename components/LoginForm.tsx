import { useFormik } from "formik";
import * as Yup from "yup";
import { FormValues } from "../Interfaces/interfaces";
import { Spinner } from "./styled";

interface LoginFormProps {
  onSubmit: (formData: FormValues) => void;
  buttonText: string;
  isLoading: boolean;
}

export const LoginForm = ({
  onSubmit,
  buttonText,
  isLoading,
}: LoginFormProps) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(8, "Must not be greater than 8 characters.")
        .required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="loginForm">
      <div className="loginFormDiv">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className="dialogInputField"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <p>{formik.errors.username}</p>
        ) : null}
      </div>
      <div className="loginFormDiv">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="dialogInputField"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}
      </div>
      <div className="loginFormButtonDiv">
        {isLoading ? (
          <Spinner />
        ) : (
          <button
            className={
              buttonText == "login"
                ? "loginFormButtonLogin"
                : "loginFormButtonRegister"
            }
            type="submit"
          >
            {buttonText}
          </button>
        )}
      </div>
    </form>
  );
};
