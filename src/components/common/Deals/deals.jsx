import {Fragment} from 'react'
import image1 from '../../../assets/DealsImages/r1.jpg'
import image2 from '../../../assets/DealsImages/r2.jpg'
import image3 from '../../../assets/DealsImages/r3.jpg'
// import image4 from '../../../assets/DealsImages/r4.jpg'
import image5 from '../../../assets/DealsImages/r5.jpg'
import image6 from '../../../assets/DealsImages/r6.jpg'
import image7 from '../../../assets/DealsImages/r7.jpg'
// import image8 from '../../../assets/DealsImages/r8.jpg'
import image9 from '../../../assets/DealsImages/r9.jpg'
import image10 from '../../../assets/DealsImages/r10.jpg'
import image11 from '../../../assets/DealsImages/r11.jpg'
import friday from '../../../assets/DealsImages/c5.jpg'
import styles from './deals.module.css'





function DealsComp() {
  const dealsArr = [
    {
      image:image1,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
    {
      image:image2,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
    {
      image:image3,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
   
    {
      image:image5,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
    {
      image:image6,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
    {
      image:image7,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
  
    {
      image:image9,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
    {
      image:image10,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
    {
      image:image11,
      itemname:"Black Lace Heels",
      itemPrice:189.00,
      originalprice:210.00
    },
  ]
  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <h1 className={styles.deals}>Deals of the week</h1>
        <h3 className={styles.dealsDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <div className={styles.container}>
          {/* <div className={styles.mainKontainer}> */}
          <div className={styles.dealsContainer}>
            {dealsArr.map((item,index) =>(
              <div key={index} className={styles.itemContainer}>
                <div >
                  <img src={item.image} />
                </div>
                <div>
                  <div className={styles.name}><a>{item.itemname}</a></div>
                  <div className={styles.priceContainer}>
                    <a className={styles.finalprice}>${item.itemPrice}.00</a>
                    <a className={styles.firstprice}>${item.originalprice}.00</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
          <div className={styles.blackFridayContainer}>
            <img src={friday} alt="Black Friday Banner" className={styles.friday}/>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default DealsComp