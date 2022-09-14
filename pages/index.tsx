import "@reach/dialog/styles.css";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { LoginButton, RegisterButton } from "../components/styled";
import { Modal } from "../components/Modal";

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState<String | Boolean>(false);

  return (
    <>
      <Head>
        <title>Bookshelf</title>
      </Head>
      <div className={"homeContainer"}>
        <Image src="/logo.png" width={80} height={80} />
        <h1 className={styles.bookshelfH1}>Bookshelf</h1>
        <div className={styles.buttonContainer}>
          <LoginButton
            onClick={() => {
              setOpenModal("login");
            }}
          >
            Login
          </LoginButton>
          <RegisterButton
            onClick={() => {
              setOpenModal("register");
            }}
          >
            Register
          </RegisterButton>
        </div>
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </>
  );
};

export default Home;
