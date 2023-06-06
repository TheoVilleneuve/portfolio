import styles from '../styles/Home.module.css';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div className={styles.webPortfolio}>
        <div className={styles.header}><Header/></div>
        <div className={styles.footer}><Footer/></div>
      </div>      
    </div>
  );
}

export default Home;
