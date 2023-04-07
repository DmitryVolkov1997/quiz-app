import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getLanguages} from 'services'

export const useLanguages = () => {
	const toast = useToast()

	return useQuery({
		queryFn: getLanguages,
		queryKey: ["languages"],
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