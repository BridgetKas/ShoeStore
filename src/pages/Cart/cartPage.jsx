import CartItemComp from '../../components/cart/cart'
import ButtonComp from '../../components/common/Button'
import HeaderComp from '../../layout/Header/header'
import styles from './cartPage.module.css'

function CartPageComp() {
  return (
    <div>
      <HeaderComp title='Shopping Cart' firstpage='first' nextpage='next'/>
      <CartItemComp/>
      <CartItemComp/>
      <CartItemComp/>

      <div className={styles.maincashContainer}>
        <div className={styles.cashContainer}>
          <div>
            <ButtonComp btnTitle="UPDATE CART"/>
          </div>
          <div className={styles.btnContainer}>
            <ButtonComp btnTitle="Coupon code" />
            <ButtonComp btnTitle="APPLY"/>
            <ButtonComp btnTitle="CLOSE COUPON"/>
          </div>
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.cash}></div>
          <div>
            <p>Subtotal</p>
            <p>$2160.00</p>
          </div>
        
        </div>
      </div>

    </div>
  )
}

export default CartPageComp