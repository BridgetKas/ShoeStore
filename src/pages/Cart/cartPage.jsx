import CartItemComp from '../../components/cart/cart'
import ButtonComp from '../../components/common/Button'
import HeaderComp from '../../layout/Header/header'
import styles from './cartPage.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react'
import Input from '../../components/common/input';




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
            <div className={`${styles.rate} ${styles.one}`}>
              <label >Flat rate: $50.00</label>
              <input type="radio"  value="rate" />
            </div>
            <div className={`${styles.rate} ${styles.two}`}>
              <label >Free shipping </label>
              <input type="radio"  value="rate" className={styles.radio}/>
            </div>
            <div className={`${styles.rate} ${styles.one}`}>
              <label >Flat rate: $10.00 </label>
              <input type="radio"  value="rate" className={styles.radio}/>
            </div>
            <div className={`${styles.rate} ${styles.three}`}>
              <label >Local Delivery </label>
              <input type="radio"  value="rate"className={styles.radio}/>
            </div>
            <div className={styles.rate}>
              <p className={styles.shipping}>Calculate Shipping </p>
              <ArrowDropDownIcon/>
            </div>
          </div>
        </div>
        <div className={styles.selectContainer}>
          <SelectConfirmationPage textcolor="primary" background="#fff" showCountry={true}/>
          <SelectConfirmationPage textcolor="primary" background="#fff" showCountry={false}/>
          <Input placeholder="Postal code/Zip code" required ={true} />
          <ButtonComp btnTitle="UPDATE DETAILS"/>
        </div>
        <div className={styles.checkoutContainer}>
          <ButtonComp btnTitle="CONTINUE SHOPPING" />
          <ButtonComp btnTitle="PROCEED TO CHECKOUT" />

        </div>

      </div>
    </div>
  )
}




function SelectConfirmationPage({textcolor,background,showCountry=true}) {

  const [valuez, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      {
        showCountry ?
          (<FormControl sx={{ m: 1, minWidth: 120,margin:0}}>
            <Select
              value={valuez}
              onChange={handleChange}
              displayEmpty
              style={{
                color:textcolor,
                backgroundColor:background
              }}

            >
              <MenuItem value=""> <em>Bangaladesh</em> </MenuItem>
              <MenuItem value={20}>India</MenuItem>
              <MenuItem value={30}>Pakistian</MenuItem>
            </Select>
          </FormControl>) 
          :
          ( <FormControl sx={{ m: 1, minWidth: 120,margin:0}}>
            <Select
              value={valuez}
              onChange={handleChange}
              displayEmpty
              style={{
                color:textcolor,
                backgroundColor:background
              }}
            >
              <MenuItem value=""> <em>Select a state</em> </MenuItem>
              <MenuItem value={20}>Select a state</MenuItem>
              <MenuItem value={30}>Select a state</MenuItem>
            </Select>
          </FormControl>
          )
      }
    </div>
  )
}


export default CartPageComp