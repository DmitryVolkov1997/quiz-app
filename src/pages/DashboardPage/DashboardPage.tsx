import React from 'react'
import styles from './DashboardPage.module.sass'
import {Layout} from 'layout/Layout'
import { Dashboard } from 'features'

export const DashboardPage = () => {
	return (
		<Layout>
			<Dashboard/>
		</Layout>
	)
}

