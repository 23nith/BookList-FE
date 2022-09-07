import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { Dialog } from "@reach/dialog";
import styles from "../styles/Home.module.css";

const ModalContext = createContext();

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={{ isOpen, setIsOpen }} {...props} />;
};

const ModalDismissButton = ({ children: child }) => {
  const { setIsOpen } = useContext(ModalContext);
  return cloneElement(child, {
    onClick: () => setIsOpen(false),
  });
};

const ModalOpenButton = ({ children: child }) => {
  const { setIsOpen } = useContext(ModalContext);
  return cloneElement(child, {
    onClick: () => setIsOpen(true),
  });
};

const ModalContents = (props) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const handleClickDismiss = () => {
    setIsOpen(false);
  };
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={handleClickDismiss}
      className={styles.formContainer}
      {...props}
    />
  );
};

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents };
