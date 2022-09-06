import "@reach/dialog/styles.css";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Dialog } from "@reach/dialog";
import { cloneElement, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import tw from "tailwind-styled-components";
import {
  Modal,
  ModalDismissButton,
  ModalContents,
  ModalOpenButton,
} from "../components/Modal";

const Button = tw.button`py-10px px-15px border-0 leading-none rounded-3`;

const LoginButton = tw(Button)`text-white bg-custom_blue`;
const RegisterButton = tw(Button)`text-custom_gray bg-custom_light_gray2`;

const LoginForm = ({ onSubmit, submitButton }) => {
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

const circleDismissButton = (
  <div className="closeFormDiv">
    <ModalDismissButton>
      <button className="closeFormButton">
        <span className="closeFormSpan">Close</span>
        <span aria-hidden="true">x</span>
      </button>
    </ModalDismissButton>
  </div>
);

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
        router.push("/list");
      } else {
        throw new Error(res);
      }
    });
  };

  const register = (formData: React.FormEvent<HTMLInputElement>) => {
    console.log("register", formData);
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
              {circleDismissButton}
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
              {circleDismissButton}
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
