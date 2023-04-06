import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import {SocialStatuses} from 'services'

export const useSocialStatuses = () => {
	const toast = useToast()

	return useQuery({
		queryFn: SocialStatuses,
		queryKey: ["socialStatuses"],
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