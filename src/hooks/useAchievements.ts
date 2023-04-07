import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getAchievements} from 'services'

export const useAchievements = () => {
	const toast = useToast()

	return useQuery({
		queryFn: getAchievements,
		queryKey: ["achievements"],
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