import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getFormPayments} from 'services'

export const useFormPayments = () => {
	const toast = useToast()

	return useQuery({
		queryFn: getFormPayments,
		queryKey: ["form-payments"],
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