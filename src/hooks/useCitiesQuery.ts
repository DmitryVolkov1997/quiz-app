import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import {CityService} from '../services'

export const useCitiesQuery = (regionId: number) => {
	const toast = useToast()

	return useQuery({
		queryFn: () => CityService.getCities(regionId),
		queryKey: ['cities', regionId],
		enabled:!!regionId,
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