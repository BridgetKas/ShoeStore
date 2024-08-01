import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import styles from './contact.module.css'
import Input from '../../components/common/input';
import TextField from '@mui/material/TextField';
import ButtonComp from '../../components/common/Button';
import { colors } from "../../utilis/color"


function Contact() {
  return (
    <div className={styles.outermainContainer}>
      <div className={styles.mainContainer}>
        <div>
          <div className={styles.iconContainer}>
            <div>
              <HomeOutlinedIcon color='primary'/>
            </div>
            <div>
              <div className={styles. state}>California, United States</div>
              <div className={styles.address}>Santa monica bullevard</div>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <div>
              <LocalPhoneOutlinedIcon color='primary'/>
            </div>
            <div>
              <div className={styles. state}>00 (440) 9865 562</div>
              <div className={styles.address}>Mon to Fri 9am to 6 pm</div>
            </div>
          </div>
          <div className={styles.iconContainer}>
            <div>
              <MailOutlineOutlinedIcon color='primary'/>
            </div>
            <div>
              <div className={styles. state}>support@colorlib.com</div>
              <div className={styles.address}>Send us your query anytime!</div>
            </div>
          </div>
        </div>
        {/* Ask about this */}
        <div style={{width:"33%"}}>
          <Input placeholder="Enter your name" fullWidth />
          <Input placeholder="Enter  email address" margin="dense" fullWidth/>
          <Input placeholder="Enter Subject" margin="dense" fullWidth/>

        </div>
        <div style={{width:"33%"}}>
          <TextField placeholder="Enter message" fullWidth multiline rows={7}/>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <ButtonComp variant="contained" 
          size="large" 
          btnTitle="Send Message"  
          style={{ background: colors.yellowGrad}} 
          onClick={() => alert('Clicked')}
        />
      </div>
    </div>
  )
}

export default Contact