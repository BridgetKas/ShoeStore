import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function Input({placeholder,required=false,icon,color}) {
  return (
    <div>
      <TextField  
        variant="outlined"  
        placeholder={placeholder} 
        required={required}
        color={color}
        endAdornment={
          <InputAdornment position="end">
            {icon}
          </InputAdornment>
        }
        style={{backgroundColor:"secondary"}}
      />

    </div>
  )
}

export default Input