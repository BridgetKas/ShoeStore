import ButtonComp from '../common/Button'
import styles from './review.module.css'


function ReviewComp({image}) {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.nameContainer}>
          <img src={image}/>
          <div >
            <p className={styles.name}>Blake Ruiz</p>
            <p className={styles.date}> 12th Feb, 2018 at 05:56 pm</p>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <ButtonComp variant="contained" 
            size="medium" 
            btnTitle="Reply"  
            style={{ backgroundColor:"gray"}} 
            onClick={() => alert('Clicked')}
          />
          
        </div>
      </div>
      <div >
        <p className={styles.review}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </p>
      </div>

    </div>
  )
}

export default ReviewComp