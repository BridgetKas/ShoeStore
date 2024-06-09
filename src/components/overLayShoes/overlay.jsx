import photo1 from '../../assets/ShoeGallery/c1.jpg'
import photo2 from '../../assets/ShoeGallery/c2.jpg'
import photo3 from '../../assets/ShoeGallery/c3.jpg'
import photo4 from '../../assets/ShoeGallery/c4.jpg'
import photo5 from '../../assets/DealsImages/c5.jpg'
import styles from './overlay.module.css'


function OverlayComp() {
  return (
    <div className={styles.mainContainer}>
      <div  className={styles.imageContainerone}><img src={photo1}/></div>
      <div  className={styles.imageContainer}><img src={photo2}/></div>
      <div  className={styles.imageContainer}><img src={photo3}/></div>
      <div  className={styles.imageContainertwo}><img src={photo4}/></div>
      <div  className={styles.imageContainerthree}><img src={photo5}/></div>
      
    </div>
  )
}

export default OverlayComp