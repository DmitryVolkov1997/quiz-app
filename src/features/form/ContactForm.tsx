import React, {useState} from 'react'
import styles from './ContactForm.module.sass'
import {Box, useToast} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {FormDataTypes} from 'types'
import {
	Multistep
} from './components'
import {useAppDispatch} from 'store/redux-hooks'
import {setStudent} from 'store/slices/studentSlice'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {submitFormData} from 'services'
import axios from 'axios'
import {setProgress, setStep} from 'store/slices/contactFormSlice'
import {transformObject} from '../../utils'

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
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
	const [isUser, setIsUser] = useState(true)

	const resetForm = () => {
		reset()
		dispatch(setStep(1))
		dispatch(setProgress(33.33))
	}

	const timeoutForm = () => {
		const timeout = setTimeout(() => {
			if (isValid) {
				resetForm()
			}
		}, 5000)

		if (!isValid) {
			clearTimeout(timeout)
		}
	}

	const onSubmit: SubmitHandler<FormDataTypes> = async (data) => {
		if (isLoading) {
			return
		}

		setIsLoading(true)

		const existingRecord = await axios.get(`/contact_form_data.json?orderBy="email"&equalTo="${data.email}"`)

		try {
			if (!!Object.keys(existingRecord.data).length) {
				toast({
					title: "Ошибка",
					description: "Пользователь с такими данными уже существует",
					status: 'error',
					duration: 8000,
					isClosable: true,
					position: "top"
				})

				setIsUser(true)

				timeoutForm()

			} else {
				setIsUser(false)
				const applicantData = transformObject(data)
				dispatch(setStudent(applicantData))

				mutateAsync(applicantData).then(r => console.log(r))
				timeoutForm()
			}
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<Box
			as="form"
			onSubmit={handleSubmit(onSubmit)}
			borderWidth="1px"
			rounded="lg"
			shadow="1px 1px 3px rgba(0,0,0,0.3)"
			maxWidth={900}
			width="100%"
			p={6}
		>
			<Multistep
				register={register}
				errors={errors}
				isValid={isValid}
				isSubmitSuccessful={isUser}
				isLoading={isLoading}
			/>
		</Box>
	)
}

