import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getEducationInstitutions} from 'services'

export const useEducationInstitutions = (cityId: number, type: string) => {
	const toast = useToast()

	return useQuery({
		queryFn: () => getEducationInstitutions(cityId, type),
		queryKey: ["education-institutions", cityId, type],
		enabled: !!cityId && !!type,
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