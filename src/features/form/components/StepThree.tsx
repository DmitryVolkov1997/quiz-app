import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import {
	AchievementSelect,
	ConsultantDepartmentSelect,
	FormPaymentSelect,
	LanguageSelect, Question
} from 'features/form/components/index'
import {FormProps} from 'types/index'

interface StepThreeProps extends FormProps {
}

export const StepThree = ({register, errors}: StepThreeProps) => {
	return (
		<>
			<Heading
				w="100%"
				textAlign="center"
				fontWeight="medium"
				mb="2%">
				Регистрация
			</Heading>

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
		</>
	)
}

