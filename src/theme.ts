import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
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

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

const theme = extendTheme({
	config,
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Raleway', sans-serif`,
	}
})

export default theme
