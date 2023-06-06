import styles from '../styles/Clan.module.css';
import Header from '../components/Header';

export default function ClanPage() {
return (
  <>
    <Header/>        

    <div className={styles.background}>            
      <h2 className={styles.titleContainer}>
        <span className={styles.titleClan}>CLANÉ</span> 
        <span className={styles.titleEmergent}>MERGENT</span>
      </h2>

      <div className={styles.imgContainer}>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ16.jpeg'} alt='LOOK 1'/>
          <p className={styles.look}>- LOOK 1 -</p>
        </div>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ12.jpeg'} alt='LOOK 2'/>
          <p className={styles.look}>- LOOK 2 -</p>
        </div>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ11.jpeg'} alt='LOOK 3'/>
          <p className={styles.look}>- LOOK 3 -</p>
        </div>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ15.jpeg'} alt='LOOK 4'/>
          <p className={styles.look}>- LOOK 4 -</p>
        </div>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ9.jpeg'} alt='EDITO'/>
          <p className={styles.look}>- EDITO -</p>
        </div>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ14.jpeg'} alt='LOOK 5'/>
          <p className={styles.look}>- LOOK 5 -</p>
        </div>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ2.jpeg'} alt='EDITO'/>
          <p className={styles.look}>- EDITO -</p>
        </div>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ17.jpeg'} alt='LOOK 6'/>
          <p className={styles.look}>- LOOK 6 -</p>
        </div>

        <div className={styles.modele}>
          <img className={styles.img} src={'/collection-clan/clanLQ8.jpeg'} alt='EDITO'/>
          <p className={styles.look}>- EDITO -</p>
        </div>
        
      </div>   
           
    </div>
  </>
)
}
