import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {ConsultantService} from 'services'

export const useConsultantsQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => ConsultantService.getConsultant(),
		queryKey: ['consultants'],
		select: ({data}) => {
			return data
		},
		onError: (error) => {
			if (error instanceof Error) {
				toast({
					status: 'error',
					title: error.message,
					position: 'top'
				})
			}
		}
	})
}