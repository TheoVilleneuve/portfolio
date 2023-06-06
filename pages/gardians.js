import styles from '../styles/Gardians.module.css';
import Header from '../components/Header';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';

export default function GardiansPage() {

  //Style de la modale
  const customStyles = {
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'none',
      },
    content: {
        position: 'absolute',
        borderRadius: 0,
        padding: 0,
        marginTop: '43%',
        border: 'none',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        height: '70%',
        overflow: 'hidden',
    },
  };

//Map pour envoyer les images dans en affichage
const gardiansImgs = []

for (let i=0 ; i < 9 ; i++){
    gardiansImgs.push (
        `/collection-gardians/gardianLookbook/${i}.jpeg` 
      );
    }

console.log('GARDIANSIMGS',gardiansImgs)

//États d'affichage conditionnel des imgs
const [visibility, setVisibility]= useState(false)
const [imageSrc, setImageSrc]= useState('')

// fonction d'affichage de la modale
function displayImg(i){
    if (imageSrc === gardiansImgs[i]) {
        setVisibility(!visibility)
    } else {
        setImageSrc(gardiansImgs[i])
    }            
}

//Map pour faire apparaitre les boutons
const imgBtns = gardiansImgs.map((data, i) => {
    return (
        <button onClick={() => displayImg(i) } className={styles.lookBtn}>-LOOK {i+1}-</button>
    );
  });

return (
  <>
    <Header/>

    <div className={styles.modele}>
      <img className={styles.gardianImg1} src={'/collection-gardians/gardians-edito45LQ.jpeg'} alt='Edito image'/>
      <h2 className={styles.titleContainer}>
        <span className={styles.titleGard}>GARD</span> 
        <span className={styles.titleIans}>IANS</span>
      </h2>
    </div> 

    <div className={styles.modeleCollection}>
      <img className={styles.atmosphereImg} src={'/collection-gardians/gardians-edito8LQ.jpeg'} alt='Edito image'/>

      <div className={styles.lookBtnContainer}>
        <Modal
        isOpen = {visibility}
        onRequestClose={() => setVisibility(false)}
        style={customStyles}
        >
          <img className={styles.imgLookbook} src={imageSrc} />
        </Modal>

        {imgBtns}        
      </div>

    </div>
  </>
  )
}