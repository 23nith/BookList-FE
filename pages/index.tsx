import "@reach/dialog/styles.css";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import {
  CircleDismissButton,
  LoginButton,
  RegisterButton,
} from "../components/styled";
import { Modal, ModalContents, ModalOpenButton } from "../components/Modal";
import { useModal } from "../components/Modal2";
import { LoginForm } from "../components/LoginForm";
import { Modal3 } from "../components/Modal3";
import { BookList } from "../components/BookList";

export interface ModalStates {
  states: 'login' | 'register'
}

const Home: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setModal, unSetModal } = useModal();
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalState, setModalState] = useState<ModalStates['states'] | undefined>()

  const handleModalClick = (modalKind: ModalStates['states']) => {
    setIsShowModal(true)
    setModalState(modalKind)
  }

  const handleModalClose = () => {
    setIsShowModal(false)
  }

  const login = (formData: FormValues) => {
    setIsLoading(true);
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
      setIsLoading(false);
      unSetModal();
    });
  };

  const register = (formData: FormValues) => {
    setIsLoading(true);
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
        setIsLoading(false);
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
                isLoading={isLoading}
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
                isLoading={isLoading}
                submitButton={<RegisterButton>Register</RegisterButton>}
              />
            </ModalContents>
          </Modal>

          {/* <label
            onClick={() => {
              setModal(
                <>
                  <h3 className="dialogH3">Login</h3>
                  <LoginForm
                    onSubmit={login}
                    isLoading={isLoading}
                    // submitButton={<LoginButton>Login</LoginButton>}
                    submitButton="Login"
                  />
                </>
              );
            }}
          >
            <LoginButton>Login</LoginButton>
          </label> */}
          <Modal3 handleModalClose={handleModalClose} modalState={modalState} isShowModal={isShowModal} handleLogin={login} handleRegister={register} isLoading={isLoading}/>
          <button onClick={() => handleModalClick('login')}>Login</button>
          <button onClick={() => handleModalClick('register')}>Register</button>
          <BookList />
        </div>
      </div>
    </>
  );
};

export default Home;
