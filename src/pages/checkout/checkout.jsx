import ButtonComp from "../../components/common/Button"
import Input from "../../components/common/input"
import card from '../../assets/card.jpg'

function CheckoutComp() {
  return (
    <div>
      <div>
        <p>Returning Customer? <a> Click here to login</a></p>
      </div>
      <p>
        If you have shopped with us before , please enter your details in the boxes below. 
        If you are a new customer,please proceed to the Billing and Shipping section.
      </p>
      <Input placeholder="Username or Email" required ={true} fullWidth/>
      <Input placeholder="Password" required ={true} fullWidth/>
      <div>
        <ButtonComp btnTitle="LOGIN" size="large"/>
        <div>
          <input type="radio" value="remember"/>
          <label>Remember me </label>
        </div>
      </div>
      <p>Lost your password?</p>
      <div>
        <p>Have a coupon? <a>Click here to enter your code</a></p>
      </div>
      <Input placeholder="Enter coupon code"/>
      <ButtonComp btnTitle="APPLY COUPON"/>
      <p>Billing Details</p>

      <div>
        <Input placeholder="First name" required ={true} fullWidth/>
        <Input placeholder="Last name" required ={true} fullWidth/>
        <Input placeholder="Company name" required ={true} fullWidth/>
        <Input placeholder="Phone number" required ={true} fullWidth/>
        <Input placeholder="Email Address" required ={true} fullWidth/>
        <Input placeholder="Country" required ={true} fullWidth/>
        <Input placeholder="Address line1" required ={true} fullWidth/>
        <Input placeholder="Address line2" required ={true} fullWidth/>
        <Input placeholder="Town/City" required ={true} fullWidth/>
        <Input placeholder="District" required ={true} fullWidth/>
        <Input placeholder="Postcode/ZIP" required ={true} fullWidth/>
      </div>
      <div>
        <input type="radio"/>
        <label>Ship to a different address</label>
      </div>
      <Input placeholder="Order Notes" multiline/>

      <div>
        <p>Your Order</p>
        <div>
          <div>
            <p>Product</p>
            <div>
              <p>Fresh Berry</p>
              <p>*02 </p>
            </div>
            <div>
              <p>Fresh Tomatoes</p>
              <p>*02 </p>
            </div>
            <div>
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
            <p>Total</p>
            <div>
              <p>$720.00</p>
            </div>
            <div>
              <p>$720.00</p>
            </div>
            <div>
              <p>$720.00</p>
            </div>
            <div>
              <p>$2160.00</p>
            </div>
            <div>
              <p>Flat rate:$50.00</p>
            </div>
            <div>
              <p>$2210.00</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input type="radio"/>
        <label>CHECK PAYMENTS</label>
      </div>
      <div>
        <p>Please send a check to store Name, Store Street, Store Town, Store State/County, Store Postcode.</p>
      </div>
      <div>
        <div>
          <input type="radio"/>
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
        <div>
          <input type="radio"/>
          <label>
            I have read and accept the terms and conditions.
          </label>
        </div>
      </div>
      <ButtonComp btnTitle="PROCCCED TO PAYPAL"/>
    </div>
  )
}

export default CheckoutComp