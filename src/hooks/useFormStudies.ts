import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getFormStudies} from 'services'

export const useFormStudies = ()=>{
	const toast = useToast()

	return useQuery({
		queryFn: getFormStudies,
		queryKey: ["form-studies"],
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