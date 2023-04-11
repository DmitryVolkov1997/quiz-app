import {extendTheme, type ThemeConfig} from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/700.css'
import '@fontsource/open-sans/700.css'

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

const fonts = {
	heading: `'Open Sans', sans-serif`,
	body: `'Raleway', sans-serif`,
}

const theme = extendTheme({
	config, fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Raleway', sans-serif`,
	}
})

export default theme