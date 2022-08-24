import '@reach/dialog/styles.css'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Dialog} from '@reach/dialog'
import { useState } from 'react'

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState('none')

  return (
    <div className={`${styles.container} ${styles.homeContainer}`}>
      <img src="/logo.png" width={80} height={80}/>
      <h1 className={styles.bookshelfH1}>Bookshelf</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonLogin} onClick={()=>{ setOpenModal('login')}}>Login</button>
        <button className={styles.buttonRegister} onClick={()=>{ setOpenModal('register')}}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={()=>{ setOpenModal('none')}}>Close</button>
        </div>
        <h3>Login</h3>
      </Dialog>
      <Dialog aria-label="Login form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={()=>{ setOpenModal('none')}}>Close</button>
        </div>
        <h3>Register</h3>
      </Dialog>
      
    </div>
  )
}

export default Home
