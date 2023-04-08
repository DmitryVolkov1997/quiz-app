import React, {useEffect} from 'react'
import styles from './FormPage.module.sass'
import {Layout} from 'layout/Layout'
import {ContactForm} from 'features'
import {Box} from '@chakra-ui/react'

export const FormPage = () => {
	return (
		<Layout>
			<Box className={styles.wrapper}>
				<ContactForm/>
			</Box>
		</Layout>
	)
}

