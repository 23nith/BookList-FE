import Dialog from "@reach/dialog";
import styles from "../styles/Home.module.css";
import { login } from "../api/login";
import { register } from "../api/register";
import { LoginForm } from "./LoginForm";

export const Modal = ({ openModal, setOpenModal }) => {
  const handleClickDismiss = () => {
    setOpenModal(false);
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
        <LoginForm onSubmit={login} buttonText={openModal} />
      )}
      {openModal === "register" && (
        <LoginForm onSubmit={register} buttonText={openModal} />
      )}
    </Dialog>
  );
};
