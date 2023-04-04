import {useQuery} from '@tanstack/react-query'
import {FormStudyService} from 'services'
import {useToast} from '@chakra-ui/react'

export const useFormStudiesQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => FormStudyService.getFormStudies(),
		queryKey: ['form-studies'],
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