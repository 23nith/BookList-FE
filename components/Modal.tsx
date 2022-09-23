import Dialog from "@reach/dialog";
import styles from "../styles/Home.module.css";
import { login } from "../api/auth/login";
import { register } from "../api/auth/register";
import { LoginForm } from "./LoginForm";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormValues } from "../api/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalProps {
  openModal: string | boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ openModal, setOpenModal }: ModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleClickDismiss = () => {
    setOpenModal(false);
  };
  const handleLogin = async (values: FormValues) => {
    const onCompleted = () => {
      router.push("/list");
    };
    const onFail = () => {
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    await login(values, onCompleted, setIsLoading, onFail);
  };
  const handleRegister = async (values: FormValues) => {
    const onCompleted = () => {
      toast.success("Registered successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    const onFail = () => {
      toast.error("Bad credentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    await register(values, onCompleted, setIsLoading, onFail);
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
        <ToastContainer />
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
