import CartItemComp from '../../components/cart/cart'
import ButtonComp from '../../components/common/Button'
import HeaderComp from '../../layout/Header/header'
import styles from './cartPage.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CartPageComp() {
  return (
    <div>
      <HeaderComp title='Shopping Cart' firstpage='first' nextpage='next'/>
      <div className={styles.mainContainer}>
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
            <p>Subtotal</p>
            <p>$2160.00</p>
          </div>
          <div className={styles.rateContainer}>
            <div className={styles.rate}>
              <label >Shipping Flat rate: $50.00</label>
              <input type="radio"  value="rate"/>
            </div>
            <div className={styles.rate}>
              <label >Free shipping </label>
              <input type="radio"  value="rate"/>
            </div>
            <div className={styles.rate}>
              <label >Flat rate: $10.00 </label>
              <input type="radio"  value="rate"/>
            </div>
            <div className={styles.rate}>
              <label >Local Delivery </label>
              <input type="radio"  value="rate"/>
            </div>
            <div className={styles.rate}>
              <p >Calculate Shipping </p>
              <ArrowDropDownIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPageComp