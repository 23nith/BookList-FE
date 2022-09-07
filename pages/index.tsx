import "@reach/dialog/styles.css";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { cloneElement } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { CircleDismissButton, LoginButton, RegisterButton } from "./styled";
import { Modal, ModalContents, ModalOpenButton } from "../components/Modal";
import { useFormik } from "formik";

const LoginForm = ({ onSubmit, submitButton }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });

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
        {cloneElement(
          submitButton,
          { type: "submit" },
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children])
        )}
      </div>
    </form>
  );
};

const Home: NextPage = () => {
  const router = useRouter();

  const login = (formData: React.FormEvent<HTMLInputElement>) => {
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
        localStorage.setItem("token", res.headers.get("Authorization"));
        router.push("/list");
      } else {
        throw new Error(res);
      }
    });
  };

  const register = (formData: React.FormEvent<HTMLInputElement>) => {
    fetch("http://localhost:3000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        user: {
          username: formData.username,
          password: formData.password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        return data;
      });
  };

  return (
    <>
      <Head>
        <title>Bookshelf</title>
      </Head>
      <div className={"homeContainer"}>
        <Image src="/logo.png" width={80} height={80} />
        <h1 className={styles.bookshelfH1}>Bookshelf</h1>
        <div className={styles.buttonContainer}>
          <Modal>
            <ModalOpenButton>
              <LoginButton>Login</LoginButton>
            </ModalOpenButton>
            <ModalContents aria-label="">
              <CircleDismissButton />
              <h3 className="dialogH3">Login</h3>
              <LoginForm
                onSubmit={login}
                submitButton={<LoginButton>Login</LoginButton>}
              />
            </ModalContents>
          </Modal>

          <Modal>
            <ModalOpenButton>
              <RegisterButton>Register</RegisterButton>
            </ModalOpenButton>
            <ModalContents aria-label="">
              <CircleDismissButton />
              <h3 className="dialogH3">Register</h3>
              <LoginForm
                onSubmit={register}
                submitButton={<RegisterButton>Register</RegisterButton>}
              />
            </ModalContents>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Home;
