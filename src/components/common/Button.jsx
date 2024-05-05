import Button from '@mui/material/Button';

function ButtonComp({variant, size, color, startIcon, endIcon, btnTitle, style={}, rounded="none"}) {
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
          borderRadius:rounded == "medium" ? "10px" : rounded == "small" ? "5px" : "0"
        }}
      >
        {btnTitle} 
      </Button>
    </div>
  )
}

export default ButtonComp