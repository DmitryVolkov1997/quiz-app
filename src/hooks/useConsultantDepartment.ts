import {useToast} from '@chakra-ui/react'
import {useQuery} from '@tanstack/react-query'
import {getConsultantDepartment} from 'services'

export const useConsultantDepartment = ()=>{
	const toast = useToast()

	return useQuery({
		queryFn: getConsultantDepartment,
		queryKey: ["consultants"],
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