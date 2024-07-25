import ButtonComp from "../../components/common/Button"
import Input from "../../components/common/input"
import card from '../../assets/card.jpg'
import styles from './checkout.module.css'
import HeaderComp from "../../layout/Header/header"
import TextField from '@mui/material/TextField';

function CheckoutComp() {
  return (
    <div>
      <HeaderComp title='Checkout' firstpage='first' nextpage='next'/>
      <div className={styles.checkoutContainer}>
        <div className={styles.return}>
          <p>Returning Customer? <a className={styles.click}> Click here to login ?</a></p>
        </div>
        <p className={styles.customer}>
          If you have shopped with us before , please enter your details in the boxes below. 
          If you are a new customer,please proceed to the Billing and Shipping section.
        </p>
        <div className={styles.maininputContainer}>
          <div className={styles.informationContainer}>
            <Input placeholder="Username or Email" required ={true} fullWidth/>
          </div>
          <div className={styles.informationContainer}>
            <Input placeholder="Password" required ={true} fullWidth/>
          </div>
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
        <div className={styles.outercouponContainer}>
          <div >
            <Input placeholder="Enter coupon code" fullWidth className={styles.couponCode}/>
            <ButtonComp btnTitle="APPLY COUPON" />
          </div>
        </div>
        <div className={styles.contactInformation}>
          <div className={styles.billContainer}>
            <p className={styles.bill}>Billing Details</p>
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
            <TextField
              id="outlined-textarea"
              multiline
              rows={5}
              fullWidth
              defaultValue="Order Notes"
            />
          </div>
        
          <div className={styles.orderContainer}>
            <table>
              <caption className={styles.caption}>Your Order</caption>
              <thead>
                <tr>
                  <th>Product</th>
                  <th className={styles.quality}>Quality</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fresh Blackberry</td>
                  <th>X 02</th>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td>Fresh Tomatoes</td>
                  <th>X 02</th>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td>Fresh Brocoli</td>
                  <th>X 02</th>
                  <td>$720.00</td>
                </tr>
            
                <tr>
                  <td colSpan='2'>SUBTOTAL</td>
                  <td>$2160.00</td>
                </tr>
                <tr>
                  <td colSpan='2'>SHIPPING</td>
                  <td>Flat rate:$50.00</td>
                </tr>
                <tr>
                  <td colSpan='2'>TOTAL</td>
                  <td>$2210.00</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.container}>
              <div className={`${styles.inputContainer} ${styles.check}` }>
                <input type="radio" className={styles.radio}/>
                <label className={styles.check}>CHECK PAYMENTS</label>
              </div>
              <div className={styles.payPalContainer}>
                <p className={styles.confirmInformation}>
                  Please send a check to store Name,Store Street, Store Town, Store State/County, Store Postcode.
                </p>
              </div>
              <div className={styles.payPal}>
                <div className={styles.inputContainer} >
                  <input type="radio" className={styles.radio}/>
                  <label className={styles.check}>PAYPAL</label>
                </div>
                <div>
                  <img src={card}/>
                </div>
              </div>
              <div className={styles.payPalContainer}>
                <p className={styles.confirmInformation}>
                  Pay via PayPal; you can pay with your credit card if you don`&apos;t have a PayPal account
                </p>
              </div>
           
              <div className={styles.termsContainer} >
                <input type="checkbox" className={`${styles.checkbox} ${styles.last}`}/>
                <label>
                  I have read and accept the <span>terms and conditions</span>.
                </label>
              </div>
              <div className={styles.paymentContainer}>
                <ButtonComp btnTitle="PROCCCED TO PAYPAL"/>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutComp