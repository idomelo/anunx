import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#FFBA1F',
    },
    secondary: {
      main: '#121212'  
    },
    background: {
      default: 'rgb(242, 244, 245)',
      white: '#ffffff',
    },
  }
})

theme = responsiveFontSizes(theme)

export default theme