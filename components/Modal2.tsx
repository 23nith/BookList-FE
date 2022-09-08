import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { CloseFormDiv, CloseFormButton, CloseFormSpan } from "./styled";

const ModalContext = React.createContext();

const Modal = ({ modal, unSetModal }) => {
  useEffect(() => {
    const bind = (e) => {
      if (e.keycode !== 27) {
        return;
      }
      if (
        document.activeElement &&
        ["INPUT", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }
      unSetModal();
    };

    document.addEventListener("keyup", bind);
    return () => document.removeEventListener("keyup", bind);
  }, [modal, unSetModal]);
  return (
    <div className={styles.modal_}>
      <button className={styles.modal__close} onClick={unSetModal} />
      <div className={styles.modal__inner}>
        <CloseFormDiv>
          <CloseFormButton onClick={unSetModal}>
            <CloseFormSpan>Close</CloseFormSpan>
            <span aria-hidden="true">x</span>
          </CloseFormButton>
        </CloseFormDiv>
        {modal}
      </div>
    </div>
  );
};

const ModalProvider = (props) => {
  const [modal, setModal] = useState();
  const unSetModal = useCallback(() => {
    setModal();
  }, [setModal]);

  return (
    <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal modal={modal} unSetModal={unSetModal} />}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export { ModalProvider, useModal };
