import {useApplicants} from 'hooks'
import {ApplicantTable} from './components'
import {Box} from '@chakra-ui/react'
import styles from './Dashboard.module.sass'

export const Dashboard = () => {
	const {data: applicants, isLoading, isSuccess: isApplicantsSuccess} = useApplicants()


	return (
		<Box className={styles.dashboard}>
			<Box className={styles.row}>
				{
					isApplicantsSuccess ? (
						<ApplicantTable
							applicants={Object.values(applicants)}
						/>
					) : null
				}
			</Box>
		</Box>
	)
}

