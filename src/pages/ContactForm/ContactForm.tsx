import React from 'react'
import styles from './ContactForm.module.sass'
import {Box} from '@chakra-ui/react'
import {Layout} from 'layout/Layout'
import {Form1} from 'pages/ContactForm/Form1/Form1'
import {Form2} from 'pages/ContactForm/Form2/Form2'

export const ContactForm = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<form className={styles.form}>
					<Form1/>
					<Form2/>
				</form>
			</div>
		</Layout>
	)
}

