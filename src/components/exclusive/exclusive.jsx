import styles from './exclusive.module.css'
import dealsImage from '../../assets/exclusive.jpg'

function ExclusiveComp() {
  return (
    <div>
      <p>fkfkfk</p>
      <div className={styles.imageContainer}>
        <img src={dealsImage} alt="Shoe Deals"/>
      </div>
    </div>
  )
}

export default ExclusiveComp