import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'
import { orange } from '@mui/material/colors'

const theme  = createTheme({
  palette: {
    primary: {
      main: "#030080"
    },
    text: {
      primary: "#030080"
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
