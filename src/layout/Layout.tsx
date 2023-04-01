import React, {ReactNode} from 'react'
import styles from './Layout.module.sass'
import {Box} from '@chakra-ui/react'
import {Header} from 'layout'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
	return (
		<Box className={styles.layout}>
			<Header className={styles.header}/>

			<main className={styles.main}>
				{children}
			</main>
		</Box>
	)
}

