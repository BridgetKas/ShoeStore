import ButtonComp from "../../components/common/Button"
import Input from "../../components/common/input"
import card from '../../assets/card.jpg'
import styles from './checkout.module.css'

function CheckoutComp() {
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.return}>
        <p>Returning Customer? <a className={styles.click}> Click here to login ?</a></p>
      </div>
      <p className={styles.customer}>
        If you have shopped with us before , please enter your details in the boxes below. 
        If you are a new customer,please proceed to the Billing and Shipping section.
      </p>
      <div className={styles.inputContainer}>
        <Input placeholder="Username or Email" required ={true} fullWidth/>
      </div>
      <div className={styles.inputContainer}>
        <Input placeholder="Password" required ={true} fullWidth/>
      </div>
      <div className={styles.checkContainer}>
        <ButtonComp btnTitle="LOGIN" size="large"/>
        <div className={styles.meContainer}>
          <input type="checkbox" value="remember" className={styles.checkbox}/>
          <label>Remember me </label>
        </div>
      </div>
      <p className={styles.customer}>Lost your password?</p>
      <div className={styles.return}>
        <p>Have a coupon? <a className={styles.click}>Click here to enter your code</a></p>
      </div>
      <div className={styles.couponContainer}>
        <Input placeholder="Enter coupon code" fullWidth />
        <ButtonComp btnTitle="APPLY COUPON" />
      </div>
      <div className={styles.billContainer}>
        <p>Billing Details</p>
        <ul className={styles.list}>
          <li><Input placeholder="First name" required ={true} fullWidth/></li>
          <li><Input placeholder="Last name" required ={true} fullWidth/></li>
          <li><Input placeholder="Company name" required ={true} fullWidth/></li>
          <li><Input placeholder="Phone number" required ={true} fullWidth/></li>
          <li><Input placeholder="Email Address" required ={true} fullWidth/></li>
          <li><Input placeholder="Country" required ={true} fullWidth/></li>
          <li><Input placeholder="Address line1" required ={true} fullWidth/></li>
          <li><Input placeholder="Address line2" required ={true} fullWidth/></li>
          <li><Input placeholder="Town/City" required ={true} fullWidth/></li>
          <li><Input placeholder="District" required ={true} fullWidth/></li>
          <li><Input placeholder="Postcode/ZIP" required ={true} fullWidth/></li>
        </ul>
        <div className={`${styles.inputContainer} ${styles.Address}`}>
          <input type="checkbox" className={styles.checkbox}/>
          <label>Ship to a different address</label>
        </div>
        <Input placeholder="Order Notes" multiline/>
      </div>
      <div className={styles.orderContainer}>
        <div>
          <p className={styles.order}>Your Order</p>
          <div className={styles.payContainer}>
            <div>
              <p className={styles.product}>Product</p>
              <div className={styles.freshContainer}>
                <p>Fresh Berry</p>
                <p>*02 </p>
              </div>
              <div className={styles.freshContainer}>
                <p>Fresh Tomatoes</p>
                <p>*02 </p>
              </div>
              <div className={styles.freshContainer}>
                <p>Fresh Brocolli</p>
                <p>*02 </p>
              </div>
              <div>
                <p>SubTotal</p>
                <p>Shipping </p>
                <p>Total </p>

              </div>
            </div>
            <div>
              <p className={styles.product}>Total</p>
              <ul className={styles.price}>
                <li>$720.00</li>
                <li>$720.00</li>
                <li>$720.00</li>
                <li>$2160.00</li>
                <li>Flat rate:$50.00</li>
                <li>$2210.00</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.inputContainer} >
          <input type="checkbox" className={styles.checkbox}/>
          <label>CHECK PAYMENTS</label>
        </div>
        <div>
          <p>Please send a check to store Name, Store Street, Store Town, Store State/County, Store Postcode.</p>
        </div>
        <div className={styles.payPal}>
          <div className={styles.inputContainer} >
            <input type="checkbox" className={styles.checkbox}/>
            <label>PAYPAL</label>
          </div>
          <div>
            <img src={card}/>
          </div>
        </div>
        <div>
          <p>Pay via PayPal; you can pay with your credit card if you don`&apos;t have a PayPal account</p>
        </div>
        <div>
          <div >
            <input type="checkbox" className={styles.checkbox}/>
            <label>
              I have read and accept the terms and conditions.
            </label>
          </div>
        </div>
        <ButtonComp btnTitle="PROCCCED TO PAYPAL"/>
      </div>
    </div>
  )
}

export default CheckoutComp