import {useQuery} from '@tanstack/react-query'
import {FormService} from '../services/form.service'
import {useToast} from '@chakra-ui/react'

export const useFormQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => FormService.getSocialStatuses(),
		queryKey: ['social-statuses'],
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