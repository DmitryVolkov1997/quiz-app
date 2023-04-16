import { Box, Heading, Spinner } from '@chakra-ui/react'
import { useApplicants } from 'hooks'
import styles from './Dashboard.module.sass'
import { ApplicantTable } from './components'

export const Dashboard = () => {
	const { data: applicants, isLoading, isSuccess: isApplicantsSuccess } = useApplicants()

	return (
		<Box className={styles.dashboard}>
			<Box className={styles.row}>
				{
					isLoading ? (
						<Box textAlign="center" mt={16}>
							<Spinner
								thickness="4px"
								speed="0.65s"
								emptyColor="gray.200"
								color="blue.500"
								size="xl"
							/>
						</Box>
					) :
						isApplicantsSuccess ? (
							<ApplicantTable
								applicants={applicants}
							/>
						) : (
							<Heading textAlign="center" mt={16}>
								Данные не найдены
							</Heading>
						)
				}
			</Box>
		</Box>
	)
}

