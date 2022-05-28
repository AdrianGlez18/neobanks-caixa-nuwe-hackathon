//Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

// Files
import App from './App'

// Styles
import theme from './lib/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
)
