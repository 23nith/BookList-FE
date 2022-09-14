import Dialog from "@reach/dialog";
import styles from "../styles/Home.module.css";
import { login } from "../api/login";
import { register } from "../api/register";
import { LoginForm } from "./LoginForm";
import { useRouter } from "next/router";
import { useState } from "react";

export const Modal = ({ openModal, setOpenModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleClickDismiss = () => {
    setOpenModal(false);
  };
  const handleLogin = async (values) => {
    const onCompleted = () => {
      router.push("/list");
    };
    await login(values, onCompleted, setIsLoading);
  };
  const handleRegister = async (values) => {
    const onCompleted = () => {
      router.push("/list");
    };
    await register(values, onCompleted);
  };
  return (
    <Dialog
      isOpen={openModal !== false}
      onDismiss={handleClickDismiss}
      className={styles.formContainer}
    >
      <div className="closeFormDiv">
        <button onClick={handleClickDismiss} className="closeFormButton">
          <span className="closeFormSpan">Close</span>
          <span aria-hidden="true">x</span>
        </button>
      </div>
      <h3 className="dialogH3">
        {openModal == "login" ? "Login" : "Register"}
      </h3>
      {openModal === "login" && (
        <LoginForm
          onSubmit={handleLogin}
          buttonText={openModal}
          isLoading={isLoading}
        />
      )}
      {openModal === "register" && (
        <LoginForm
          onSubmit={handleRegister}
          buttonText={openModal}
          isLoading={isLoading}
        />
      )}
    </Dialog>
  );
};
