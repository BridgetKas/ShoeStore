import photo1 from '../../assets/ShoeGallery/c1.jpg'
import photo2 from '../../assets/ShoeGallery/c2.jpg'
import photo3 from '../../assets/ShoeGallery/c3.jpg'
import photo4 from '../../assets/ShoeGallery/c4.jpg'
import photo5 from '../../assets/DealsImages/c5.jpg'
import styles from './overlay.module.css'


function OverlayComp() {
  // const photoArr = [
  //   {
  //     photo:photo1
  //   },
  //   {
  //     photo:photo2
  //   },
  //   {
  //     photo:photo3
  //   },
  //   {
  //     photo:photo4
  //   },
  //   {
  //     photo:photo5
  //   },
  // ]
  return (
    <div className={styles.mainContainer}>
      <div  className={styles.imageContainer}><img src={photo1}/></div>
      <div  className={styles.imageContainer}><img src={photo2}/></div>
      <div  className={styles.imageContainer}><img src={photo3}/></div>
      <div  className={styles.imageContainer}><img src={photo4}/></div>
      <div  className={styles.imageContainer}><img src={photo5}/></div>
    </div>
  )
}

export default OverlayComp