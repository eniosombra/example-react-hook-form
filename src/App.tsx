import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import Routes from './routes'

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark'
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  )
}

export default App
