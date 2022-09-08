import Dialog from "@reach/dialog"
import { ModalStates } from "../pages"

interface Modal3Props {
  isShowModal: boolean,
  modalState?: ModalStates['states'],
  handleModalClose: () => void
}

export const Modal3 = ({ isShowModal, modalState, handleModalClose }: Modal3Props) => {
  // lagay mo yung API shiz mo dito

  return (
    <Dialog
      isOpen={isShowModal}
      onDismiss={handleModalClose}
    >
      {modalState === 'login' && <LoginForm handleSubmit={handleLogin} isLoading={isLoading}/>}
      {modalState === 'register' && <RegisterForm handleSubmit={handleRegister} isLoading={isLoading}/>}
    </Dialog>
  )
}
