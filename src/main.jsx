import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import App from './App.jsx';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'transparent',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
