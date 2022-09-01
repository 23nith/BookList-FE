import "@reach/dialog/styles.css";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Dialog } from "@reach/dialog";
import { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = ({ onSubmit, buttonText }) => {
  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <div className="loginFormDiv">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" className="dialogInputField" />
      </div>
      <div className="loginFormDiv">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" className="dialogInputField" />
      </div>
      <div className="loginFormButtonDiv">
        <button
          className={
            buttonText == "Login"
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

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState<String>("none");
  const router = useRouter();

  const login = (formData: React.FormEvent<HTMLInputElement>) => {
    console.log("login", formData);
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: formData.username,
          password: formData.password,
        },
      }),
    }).then((res) => {
      if (res.ok) {
        console.log("res: ", res);
        localStorage.setItem("token", res.headers.get("Authorization"));
        router.push("/authenticated");
      } else {
        throw new Error(res);
      }
    });
  };

  const register = (formData: React.FormEvent<HTMLInputElement>) => {
    console.log("register", formData);
  };

  return (
    <div className={"homeContainer"}>
      <img src="/logo.png" width={80} height={80} />
      <h1 className={styles.bookshelfH1}>Bookshelf</h1>
      <div className={styles.buttonContainer}>
        <button
          className="loginFormButtonLogin"
          onClick={() => {
            setOpenModal("login");
          }}
        >
          Login
        </button>
        <button
          className="loginFormButtonRegister"
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
        <h3 className="dialogH3">Login</h3>
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
        <h3 className="dialogH3">Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  );
};

export default Home;
