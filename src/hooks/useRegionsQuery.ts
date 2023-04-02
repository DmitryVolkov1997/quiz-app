import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import {RegionService} from 'services'

export const useRegionsQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => RegionService.getRegions(),
		queryKey: ['regions'],
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