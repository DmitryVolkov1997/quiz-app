import React, {ReactNode} from 'react'
import styles from './Layout.module.sass'
import {Box} from '@chakra-ui/react'
import {Header} from 'layout'
import {motion} from 'framer-motion'
import {Td} from '@chakra-ui/table'

interface LayoutProps {
	children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
	const MotionBox = motion(Box)

	return (
		<MotionBox className={styles.layout}>
			<Header className={styles.header}/>

			<main className={styles.main}>
				{children}
			</main>
		</MotionBox>
	)
}

