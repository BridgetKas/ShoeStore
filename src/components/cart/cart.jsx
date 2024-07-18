import styles from './cart.module.css'
import imageCart from '../../assets/cart.jpg'

function CartItemComp() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.mainCartContainer}>
          <div className={styles.imageCartContainer}>
            <div>
              <img src={imageCart} alt="image of the item purchased" />
            </div>
            <p>Minimalist shop for multipurpose use</p>
          </div>
          <div className={styles.priceCartContainer}>
            <p className={styles.priceCart}>$700</p>
            <input type="number" value='1' className={styles.inputCart}/>
            <p className={styles.priceCart}>$2300</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CartItemComp