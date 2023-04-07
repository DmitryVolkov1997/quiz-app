import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getEducationalProgram} from 'services'

export const useEducationalPrograms = (programType: string) => {
	const toast = useToast()

	return useQuery({
		queryFn: () => getEducationalProgram(programType),
		queryKey: ["educational-programs", programType],
		enabled: !!programType,
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