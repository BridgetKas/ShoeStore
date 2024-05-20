import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function Input({placeholder, required=false, icon, color,margin,fullWidth}) {
  return (
    <div>
      <TextField  
        variant="outlined"  
        placeholder={placeholder} 
        required={required}
        color={color}
        InputProps={{
          endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
        }}
        margin={margin}
        fullWidth={fullWidth}
      />

    </div>
  )
}

export default Input