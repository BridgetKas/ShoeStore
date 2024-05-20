import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ButtonComp from "../../components/common/Button"
import { colors } from "../../utilis/color"
import styles from "./LogPage.module.css"


export default function LogInPage({color}) {
  const [name,setName] =useState("")
  const [password,setPassword] = useState("")
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {setChecked(e.target.checked)}

  return (
    <div className={styles.logInContainer}>
      <div className={styles.logInImage}>
        <h2>New to our website?</h2>
        <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
        <div style={{ margin:"5px auto"}}>
          <ButtonComp variant="contained" 
            size="medium" 
            btnTitle="Create an Account"  
            style={{ background: colors.yellowGrad}} 
            onClick={() => alert('Clicked')}
          />
        </div>
      </div>
      <div className={styles.container}>
        <h1>Log in to Enter</h1>
        
        <TextField id="standard-basic" 
          variant="standard" 
          label="Username"
          color={color}
          style={{marginBottom:"15px",paddingLeft:"10px"}}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField id="standard-basic" 
          variant="standard" 
          label="Password"
          color={color}
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />

        <FormControlLabel control={<Checkbox  color="yellow" checked={checked} onChange={handleChange}/>} 
          label="Keep me logged in"
        />

        <div style={{width:"100%"}}>
          <ButtonComp variant="contained" 
            size="Large" 
            btnTitle="Log In"  
            style={{ background: colors.yellowGrad, width:"100%"}} 
            onClick={() => alert('Clicked')}
          />
        </div>
        <h4>Forgot Password</h4>
      </div>
    </div>
  )
}

