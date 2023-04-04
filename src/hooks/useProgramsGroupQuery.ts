import {useQuery} from '@tanstack/react-query'
import {useToast} from '@chakra-ui/react'
import {ProgramsGroupService} from 'services'


export const useProgramsGroupQuery = (type: string) => {
	const toast = useToast()

	return useQuery({
		queryFn: () => ProgramsGroupService.getProgramsGroup(type),
		enabled: !!type,
		queryKey: ['programs-group', type],
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