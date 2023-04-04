import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import { AchievementService } from 'services'

export const useAchievementsQuery = () => {
	const toast = useToast()

	return useQuery({
		queryFn: () => AchievementService.getAchievements(),
		queryKey: ['achievements'],
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