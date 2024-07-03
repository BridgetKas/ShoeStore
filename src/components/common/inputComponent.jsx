import ButtonComp from './Button'
import Input from './input'
import styles from './input.module.css'
import {colors} from '../../utilis/color'

function InputComponent({title}) {
  return (
    <div>
      <div>
        <h1 className={styles.comment}>{title}</h1>
        <div className={styles.inputContainer}>
          <Input placeholder="Your Full name" fullWidth/>
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder="Enter email" fullWidth/>
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder="Phone number" fullWidth/>
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder="Message" multiline fullwidth/>
        </div>
        <div className={styles.btnContainer}>
            
          <ButtonComp variant="contained" 
            size="large" 
            btnTitle="SUBMIT NOW"  
            style={{ backgroundColor:colors.yellowGrad}} 
            onClick={() => alert('Clicked')}
            sx={{marginTop:"15px"
            }}
          />
        </div>
                

      </div>

    </div>
  )
}

export default InputComponent