import "@reach/dialog/styles.css";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  CircleDismissButton,
  LoginButton,
  RegisterButton,
} from "../components/styled";
import { Modal, ModalContents, ModalOpenButton } from "../components/Modal";
import { LoginForm } from "../components/LoginForm";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

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
        </div>
      </div>
    </>
  );
};

export default Home;
