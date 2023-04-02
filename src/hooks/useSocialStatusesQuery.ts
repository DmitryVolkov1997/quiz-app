import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import { SocialStatusService } from 'services'


export const useSocialStatusesQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => SocialStatusService.getSocialStatuses(),
		queryKey: ['social-statuses'],
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