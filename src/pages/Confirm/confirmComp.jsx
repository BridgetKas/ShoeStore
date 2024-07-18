import HeaderComp from "../../layout/Header/header"
import styles from './confirmComp.module.css'

function ConfirmComp() {
  return (
    <div className={styles.mainContainer}>
      <HeaderComp title='Checkout' firstpage='first' nextpage='next'/>
      <div>
        <h3 className={styles.order}>Thank you. Your order has been received</h3>
        <div className={styles.orderContainer}>
          <p>Order Info</p>
          <div className={styles.container}>
            <p className={styles.title}>Order number</p>
            <p className={styles.description}>:60235</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>Date </p>
            <p className={styles.description}>:Los Angeles</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>Total</p>
            <p className={styles.description}>:USD 2210</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>Payment method</p>
            <p className={styles.description}>:Check payment</p>
          </div>
        </div>
        <div className={styles.orderContainer}>
          <p>Billing Address</p>
          <div className={styles.container}>
            <p className={styles.title}>Street</p>
            <p className={styles.description}>:58/6</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>City</p>
            <p className={styles.description}>:Los Angeles</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>Country</p>
            <p className={styles.description}>:United States</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>Postcode</p>
            <p className={styles.description}>:36952</p>
          </div>
        </div>
        <div className={styles.orderContainer}>
          <p>Shipping Address</p>
          <div className={styles.container}>
            <p className={styles.title}>Street</p>
            <p className={styles.description}>:58/6</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>City</p>
            <p className={styles.description}>:Los Angeles</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>Country</p>
            <p className={styles.description}>:United States</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>Postcode</p>
            <p className={styles.description}>:36952</p>
          </div>
        </div>
      </div>

        

    </div>
  )
}

export default ConfirmComp