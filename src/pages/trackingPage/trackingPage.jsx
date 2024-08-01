import {useState} from 'react'
import ButtonComp from '../../components/common/Button';
import Input from '../../components/common/input';
import styles from './trackingPage.module.css'
import { colors } from "../../utilis/color"
import HeaderComp from '../../layout/Header/header';



function TrackingPage() {
  const [email,setEmail] = useState('')
  const [ordernumber, setOrderNumber] = useState('')

  return (
    <div>
      <HeaderComp  title='LogIn' firstpage='first' nextpage='next'/>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h3 className={styles.track}>To track your order please enter your Order ID in the box below 
            and press the  &quot;Track&quot; button. 
            This was given to you on your receipt and in the confirmation email you should have received.
          </h3>
          <div className={styles.inputContainer}>
            <Input placeholder="Order Id" 
              margin="dense" 
              fullWidth 
              value={ordernumber} 
              onChange={(e)=>{setOrderNumber(e.target.value)}}
            />
            <Input placeholder ="Billing Email address" 
              margin="dense" 
              fullWidth
              value={email} 
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <ButtonComp variant="contained" size="large" btnTitle="Track Order" 
            style={{ background: colors.yellowGrad, marginTop:"15px"}}  
          />
        </div>
      </div>
    </div>
  )
}

export default TrackingPage