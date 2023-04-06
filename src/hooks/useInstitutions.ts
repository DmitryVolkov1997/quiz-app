import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getInstitutions} from 'services'

export const useInstitutions = () => {
	const toast = useToast()

	return useQuery({
		queryFn: getInstitutions,
		queryKey: ["institutions"],
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