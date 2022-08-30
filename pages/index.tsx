import "@reach/dialog/styles.css";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Dialog } from "@reach/dialog";
import { useState } from "react";

function LoginForm({ onSubmit, buttonText }) {
  function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div className={styles.loginFormDiv}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" className={styles.dialogInputField} />
      </div>
      <div className={styles.loginFormDiv}>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" className={styles.dialogInputField} />
      </div>
      <div className={styles.loginFormButtonDiv}>
        <button
          className={
            buttonText == "Login"
              ? styles.loginFormButtonLogin
              : styles.loginFormButtonRegister
          }
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState("none");

  function login(formData: React.FormEvent<HTMLInputElement>) {
    console.log("login", formData);
  }

  function register(formData: React.FormEvent<HTMLInputElement>) {
    console.log("register", formData);
  }

  return (
    <div className={`${styles.container} ${styles.homeContainer}`}>
      <img src="/logo.png" width={80} height={80} />
      <h1 className={styles.bookshelfH1}>Bookshelf</h1>
      <div className={styles.buttonContainer}>
        <button
          className={styles.buttonLogin}
          onClick={() => {
            setOpenModal("login");
          }}
        >
          Login
        </button>
        <button
          className={styles.buttonRegister}
          onClick={() => {
            setOpenModal("register");
          }}
        >
          Register
        </button>
      </div>
      <Dialog
        aria-label="Login form"
        isOpen={openModal === "login"}
        className={styles.formContainer}
      >
        <div className="closeFormDiv">
          <button
            onClick={() => {
              setOpenModal("none");
            }}
            className="closeFormButton"
          >
            <span className="closeFormSpan">Close</span>
            <span aria-hidden="true">x</span>
          </button>
        </div>
        <h3 className={styles.dialogH3}>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog
        aria-label="Registration form"
        isOpen={openModal === "register"}
        className={styles.formContainer}
      >
        <div className="closeFormDiv">
          <button
            onClick={() => {
              setOpenModal("none");
            }}
            className="closeFormButton"
          >
            <span className="closeFormSpan">Close</span>
            <span aria-hidden="true">x</span>
          </button>
        </div>
        <h3 className={styles.dialogH3}>Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  );
};

export default Home;
