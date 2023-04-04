import {useQuery} from '@tanstack/react-query'

import {useToast} from '@chakra-ui/react'
import { InstitutionTypeService } from 'services'


export const useInstitutionsTypesQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => InstitutionTypeService.getInstitutionTypes(),
		queryKey: ['institutions'],
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