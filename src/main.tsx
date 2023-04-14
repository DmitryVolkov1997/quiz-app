import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import '@fontsource/open-sans/700-italic.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500-italic.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/700-italic.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/800-italic.css'
import '@fontsource/raleway/800.css'
import '@fontsource/raleway/900-italic.css'
import '@fontsource/raleway/900.css'
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'store/store'
import { App } from './App'
import './index.sass'
import theme from './theme'
const queryClient = new QueryClient()
// const API_URL = 'http://localhost:3004'
const API_URL = 'https://portfolio-db722-default-rtdb.firebaseio.com'
axios.defaults.baseURL = API_URL

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<ChakraProvider>
						<ColorModeScript initialColorMode={theme.config.initialColorMode} />
						<ReactQueryDevtools initialIsOpen={false} />
						<App />
					</ChakraProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
)
