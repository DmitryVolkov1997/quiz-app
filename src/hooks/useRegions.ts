import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getRegions} from 'services'

export const useRegions = () => {
	const toast = useToast()

	return useQuery({
		queryFn: getRegions,
		queryKey: ["regions"],
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