import { createTheme} from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main:"#6c757d",
    },
    success: {
      main:"#28a745",
    },
    warning: {
      main:"#ffc107"
    },
    danger: {
      main:"#dc3545"
    },
    light: {
      main:"#f8f9fa"
    },
    dark: {
      main:"#343a40"
    },
    info: {
      main:"#17a2b8"
    },
    darkGray: {
      main:" #343a40"
    },
    gray: {
      main:"#6c757d"
    },
    white: {
      main:"#fff"
    },
    cyan: {
      main:"#17a2b8"
    },
    teal: {
      main:"#20c997"
    },
    green: {
      main:"#28a745"
    },
    yellow: {
      main:"#ffc107"
    },
    orange: {
      main:"#fd7e14"
    },
    red: {
      main:"#dc3545"
    },
    pink: {
      main:"#e83e8c"
    },
    purple: {
      main:"#6f42c1"
    },
    indigo: {
      main:"#6610f2"
    },
    blue: {
      main:"#007bff"
    },
  },
  components: {
    MuiTextField:{
      styleOverrides:{
        root:{
          backgroundColor:"white"
        }
      }
    }
  },
  
});


export const borderRadius = {
  medium:"15px",
  small:"5px",
  none:"0px"
}
