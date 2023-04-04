import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import {PaymentService} from 'services'

export const useFormPaymentQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => PaymentService.getFormPayments(),
		queryKey: ['payments'],
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