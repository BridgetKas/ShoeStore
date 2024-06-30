import bannerImage from '../../assets/banner-img.png'
import styles from './page.module.css'
import ButtonIcon from '../../components/common/buttonIcon'
import ButtonComp from '../../components/common/Button'

function Product() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.mainproductContainer}>
        <div className={styles.productImageContainer}>
          <img src={bannerImage} className={styles.productImage}/>
        </div>
        <div className={styles.productdescriptionContainer}>
          <h1 className={styles.jeans}>Faded SkyBlu Denim Jeans</h1>
          <h1 className={styles.productPrice}>$149.99</h1>
          <p>Category:    <span className={styles.household}>Household</span></p>
          <p>Availability:    <span className={styles.stock}>In Stock</span></p>
          <hr/>
          <p>
            Mill Oil is an innovative oil filled radiator with the most modern technology. 
            If you are looking for something that can make your interior look awesome, 
            and at the same time give you the pleasant warm feeling during the winter.
          </p>
          <div className={styles.qualityContainer}>
            <p>Quality:</p>
            <div >
              <input type='number' value='1'/>
            </div>
          </div>
          <div>
            <ButtonIcon text='heteh' color="red"/>
            <ButtonComp/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product