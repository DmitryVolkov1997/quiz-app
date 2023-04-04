import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {LanguageService} from '../services'

export const useLanguagesQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => LanguageService.getLanguages(),
		queryKey: ['languages'],
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