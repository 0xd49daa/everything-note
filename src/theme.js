import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '20px',
          backgroundColor: 'unset',
          backgroundImage: 'unset',
          border: '1px solid #5f6368'
        }
      }
    }
  }
})

export default theme
