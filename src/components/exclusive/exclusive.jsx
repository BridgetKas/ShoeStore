import ButtonComp from '../common/Button';
import styles from './exclusive.module.css'
import { colors } from "../../utilis/color"
import { borderRadius } from '../../utilis/theme';


function ExclusiveComp() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <h1>Exclusive Hot Deal Ends Soon</h1>
        <p className={styles.description}>Who are in extremely love with eco friendly system</p>
        <div className={styles.dateContainer}>
          <div><span id="days"></span> Days</div>
          <div><span id="hours"></span> Hours</div>
          <div><span id="minutes"></span> Minutes</div>
          <div><span id="seconds"></span> Seconds</div>
        </div>
        <ButtonComp variant="contained" 
          size="medium" 
          btnTitle="Shop"  
          style={{ background: colors.yellowGrad, position:"relative", zIndex:"2"}} 
          onClick={() => alert('Clicked')}
        />
      </div>

    </div>
  )
}

export default ExclusiveComp