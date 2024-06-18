import ButtonComp from '../common/Button';
import styles from './exclusive.module.css'
import { colors } from "../../utilis/color"
import next from '../../assets/next.png'
import prev from '../../assets/prev.png'
import shoe from '../../assets/e-p1.png'
import ButtonIcon from '../common/buttonIcon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



function ExclusiveComp() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <h1>Exclusive Hot Deal Ends Soon</h1>
        <p className={styles.description}>Who are in extremely love with eco friendly system</p>
        <div className={styles.dateContainer}>
          <div><span id="days"></span> Days</div>
          <div><span id="hours"></span> Hours</div>
          <div><span id="minutes"></span> Minutes</div>
          <div><span id="seconds"></span> Seconds</div>
        </div>
        <div className={styles.btnContainer}>
          <ButtonComp variant="contained" 
            size="medium" 
            btnTitle="Shop"  
            style={{ background: colors.yellowGrad, position:"relative", zIndex:"2"}} 
            onClick={() => alert('Clicked')}
            rounded='medium'
          />
        </div>
        
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.imgContainer}>
          <img src={prev} className={styles.image}/>
        </div>
        <div className={styles.shoeContainer} >
          <img src={shoe}/>
          <div className={styles.priceContainer}>
            <p className={styles.price}>$150.00</p>
            <p className={styles.firstPrice}>$210.00</p>
          </div>
          <div>
            <h2 className={styles.feature}>Addidas New Hammer Sole for Sports Person</h2>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={next} className={styles.image}/>
        </div>
        <div>
          <ButtonIcon size="small" 
            color="white" 
            icon={<ShoppingBagIcon/>} 
            backgroundColor="orange" 
            text=" Add to Bag"
          />
        </div>
      </div>
      
    </div>
  )
}

export default ExclusiveComp