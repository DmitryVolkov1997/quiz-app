import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import {EducationalInstitutionsService} from '../services/educational-institutions.service'

export const useEducationalInstitutions = (cityId: number, type: string) => {
	const toast = useToast()

	return useQuery({
		queryFn: () => EducationalInstitutionsService.getEducationalInstitutions(cityId, type),
		queryKey: ['cities', cityId, type],
		enabled: !!cityId && !!type,
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
