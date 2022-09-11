import { useFormik } from "formik";
// import { Spinner } from "./styled";

interface FormValues {
  username: string;
  password: string;
}
interface LoginFormProps {
  onSubmit: (formData: FormValues) => void;
  buttonText: string;
}

export const LoginForm = ({ onSubmit, buttonText }: LoginFormProps) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });
  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { username, password }: FormValues = formik.values;

    onSubmit({
      username: username,
      password: password,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <div className="loginFormDiv">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          className="dialogInputField"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div className="loginFormDiv">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="dialogInputField"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="loginFormButtonDiv">
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
      </div>
    </form>
  );
};
