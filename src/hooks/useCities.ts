import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getCitiesById} from 'services'

export const useCities = (regionId: number) => {
	const toast = useToast()

	return useQuery({
		queryFn: () => getCitiesById(regionId),
		queryKey: ["cities", regionId],
		enabled: !!regionId,
		select({data}) {
			return data
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