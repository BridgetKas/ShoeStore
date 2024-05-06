import Button from '@mui/material/Button';
import { borderRadius } from '../../utilis/theme';

function ButtonComp({variant, size, color, startIcon, endIcon, btnTitle, style={}, rounded="none",onClick}) {
  return (
    <div>
      <Button 
        variant={variant} 
        size ={size} 
        color={color} 
        startIcon={startIcon} 
        endIcon={endIcon}
        style={{
          ...style,
          borderRadius:borderRadius[rounded]
        }}
        onClick={onClick}
      >
        {btnTitle} 
      </Button>
    </div>
  )
}

export default ButtonComp