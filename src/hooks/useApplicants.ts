import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import {getApplicants} from 'services'

export const useApplicants = () => {
	const toast = useToast()

	return useQuery({
		queryFn: getApplicants,
		queryKey: ["applicants"],
		select({data}) {
			return Object.values(data).map((applicant, idx) => {
				return {
					...applicant,
					id: Object.keys(data)[idx],
				}
			})
		},
		onError(error) {
			if (error instanceof Error) {
				toast({
					title: 'Error',
					description: error.message,
					status: 'error',
					duration: 5000,
					isClosable: true,
				})
			}
		}
	})
}