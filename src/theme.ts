import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({


  palette: {
    primary: {
      main:'#001219',
    },
    secondary: {
      main: '#94D2BD',
    },
    
  },

  typography:{
    fontFamily: 'Roboto'
  },


 
}) 

theme = responsiveFontSizes(theme);

 export default theme;