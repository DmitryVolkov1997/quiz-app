import React from 'react'
import styles from './ContactForm.module.sass'
import {Box, Button} from '@chakra-ui/react'
import {StepOne, StepTwo} from 'features'
import {SubmitHandler, useForm} from 'react-hook-form'
import {FormDataTypes} from 'types'
import {
	AchievementSelect,
	ConsultantDepartmentSelect, EducationalProgram,
	EducationInstitutionSelect,
	FormPaymentSelect, FormStudySelect,
	LanguageSelect, Question
} from './components'

export const ContactForm = () => {
	const {register, handleSubmit, formState: {errors}} = useForm<FormDataTypes>({
		mode: "onBlur"
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
			<StepOne
				register={register}
				errors={errors}
			/>
			<StepTwo
				register={register}
				errors={errors}
			/>
			<EducationInstitutionSelect
				register={register}
				errors={errors}
			/>
			<FormStudySelect
				register={register}
				errors={errors}
			/>
			<EducationalProgram
				register={register}
				errors={errors}/>
			<AchievementSelect
				register={register}
				errors={errors}
			/>
			<FormPaymentSelect
				register={register}
				errors={errors}
			/>
			<LanguageSelect
				register={register}
				errors={errors}
			/>
			<ConsultantDepartmentSelect
				register={register}
				errors={errors}
			/>
			<Question
				register={register}
				errors={errors}
			/>
			<Button type="submit">Submit</Button>
		</Box>
	)
}

