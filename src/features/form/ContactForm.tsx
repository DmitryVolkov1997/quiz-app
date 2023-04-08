import React from 'react'
import styles from './ContactForm.module.sass'
import {Box, Button} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {FormDataTypes} from 'types'
import {
	Multistep
} from './components'

export const ContactForm = () => {
	const {register, handleSubmit, formState: {errors, isValid, isSubmitSuccessful}, reset} = useForm<FormDataTypes>({
		mode: "onBlur"
	})

	const onSubmit: SubmitHandler<FormDataTypes> = (data) => {
		console.log(data)
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
			/>
			{/*<Button type="submit">Submit</Button>*/}
		</Box>
	)
}

