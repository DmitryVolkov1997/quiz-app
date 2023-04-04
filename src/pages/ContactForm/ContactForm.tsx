import React from 'react'
import styles from './ContactForm.module.sass'
import {Layout} from 'layout/Layout'
import {Multistep} from 'pages/ContactForm/Multistep/Multistep'

export const ContactForm = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<Multistep/>
			</div>
		</Layout>
	)
}

