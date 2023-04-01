import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/700.css'
import '@fontsource/open-sans/700.css'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import theme from './theme'
const queryClient = new QueryClient()
import axios from 'axios'
const API_URL = 'http://localhost:3004'
axios.defaults.baseURL = API_URL

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider>
					<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
					<ReactQueryDevtools initialIsOpen={false}/>
					<App/>
				</ChakraProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
