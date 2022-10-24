import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export let theme = createTheme({
  palette: {
    primary: {
      main: '#364037',
    },
    secondary: {
      main: '#986c43',
    },
    text: {
      primary: '#21243D',
    },
  },
})

theme = responsiveFontSizes(theme)
