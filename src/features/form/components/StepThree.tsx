import React from 'react'
import {Box} from '@chakra-ui/react'
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
		<Box>
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
		</Box>
	)
}

