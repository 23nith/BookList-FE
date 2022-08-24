import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} ${styles.homeContainer}`}>
      <img src="/logo.png" width={80} height={80}/>
      <h1 className={styles.bookshelfH1}>Bookshelf</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonLogin} onClick={()=>{ alert('login clicked')}}>Login</button>
        <button className={styles.buttonRegister} onClick={()=>{ alert('register clicked')}}>Register</button>
      </div>
      
    </div>
  )
}

export default Home
