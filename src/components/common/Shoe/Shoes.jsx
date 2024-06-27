import prev from '../../../assets/prev.png'
import next from '../../../assets/next.png'
import styles from './shoe.module.css'
import ShoeO from './shoe';


export default function ShoeComp() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.directionContainer}>
        <img src={prev}/>
        <img src={next}/>
      </div>
      <div className={styles.productsContainer}>
        <p className={styles.product}>Latest Products</p>
        <p className={styles.productdescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorum possimus,non recusandae veniam tempore quisquam mollitia.
        </p>
      </div>
      <div className={styles.container}>
        <ShoeO/>
      </div>
    </div>
  );
}
