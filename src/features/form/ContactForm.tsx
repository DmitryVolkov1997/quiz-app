import React from 'react'
import styles from './ContactForm.module.sass'
import {Box, Button} from '@chakra-ui/react'
import {StepOne, StepTwo} from 'features'
import {SubmitHandler, useForm} from 'react-hook-form'
import {FormDataTypes} from 'types'

export const ContactForm = () => {
	const {register, handleSubmit, formState: {errors}} = useForm<FormDataTypes>({
		mode: "onChange"
	})

	const submit: SubmitHandler<FormDataTypes> = (data) => {
		console.log(data)
	}

	return (
		<Box
			as="form"
			onSubmit={handleSubmit(submit)}
			w="800px"
		>
			<StepOne register={register} errors={errors}/>
			<StepTwo register={register} errors={errors}/>

			<Button type="submit">Submit</Button>
		</Box>
	)
}

