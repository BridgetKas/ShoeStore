import ButtonIcon from '../common/buttonIcon'
import styles from './banner.module.css'
import AddIcon from '@mui/icons-material/Add';
import bannerImage from '../../assets/banner-img.png'



function BannerComp() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.secondaryContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>Nike New Collection!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus fuga autem, 
            odio corrupti nostrum reiciendis doloremque tempore quibusdam accusamus voluptatibus rem molestiae, 
            perspiciatis nisi. Quos nemo quas incidunt consectetur perferendis.
          </p>
          <div className={styles.iconContainer}>
            <ButtonIcon size="large" 
              color="black" 
              icon={<AddIcon/>} 
              backgroundColor="orange" 
              text="ADD TO BAG"
              textColor='black'
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={bannerImage} className={styles.image}/>
        </div>
      </div>
    </div>
  )
}

export default BannerComp