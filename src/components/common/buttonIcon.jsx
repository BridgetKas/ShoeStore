
import IconButton from '@mui/material/IconButton';

function ButtonIcon({size, color, icon, text, backgroundColor, style={}, onClick}) {
  return (
    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
      <IconButton 
        size={size} 
        color={color} 
        style={{...style,
          backgroundColor: backgroundColor
        }}
        onClick={onClick}
      >
        {icon}
      </IconButton>
      <div>{text}</div>
    </div>
  )
}

export default ButtonIcon