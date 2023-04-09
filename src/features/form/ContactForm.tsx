import React, {useState} from 'react'
import styles from './ContactForm.module.sass'
import {Box, useToast} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {FormDataTypes} from 'types'
import {
	Multistep
} from './components'
import {transformObject} from 'utils'
import {useAppDispatch} from 'store/redux-hooks'
import {setStudent} from 'store/slices/studentSlice'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {submitFormData} from 'services'
import axios from 'axios'

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid, isSubmitSuccessful},
		reset
	} = useForm<FormDataTypes>({
		mode: "onBlur"
	})
	const toast = useToast()
	const dispatch = useAppDispatch()
	const queryClient = useQueryClient()
	const {mutateAsync} = useMutation({
		mutationFn: submitFormData,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['submit-data']}).then(r => console.log(r))
		},
	})
	const [isLoading, setIsLoading] = useState(false)

	const onSubmit: SubmitHandler<FormDataTypes> = async (data) => {
		if (isLoading) {
			return
		}

		setIsLoading(true)

		const existingRecord = await axios.get(`/contact_form_data.json?orderBy="Email"&equalTo="${data.email}"`)

		try {
			if (!!Object.keys(existingRecord.data).length) {
				toast({
					title: "Ошибка",
					description: "Пользователь с такими данными уже существует",
					status: 'error',
					duration: 7000,
					isClosable: true,
					position: "top"
				})
			} else {
				const applicantData = transformObject(data)
				dispatch(setStudent(applicantData))

				mutateAsync(applicantData).then(r => console.log(r))
			}
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
		reset()
	}

	return (
		<Box
			as="form"
			onSubmit={handleSubmit(onSubmit)}
			borderWidth="1px"
			rounded="lg"
			shadow="1px 1px 3px rgba(0,0,0,0.3)"
			maxWidth={800}
			width="100%"
			p={6}
			m="10px auto"
		>
			<Multistep
				register={register}
				errors={errors}
				isValid={isValid}
				isSubmitSuccessful={isSubmitSuccessful}
				isLoading={isLoading}
				setIsLoading={setIsLoading}
			/>
		</Box>
	)
}

