import React from 'react'
import {FormProps} from 'types/index'
import {
	StatusSelect,
	RegionSelect,
	CitySelect,
	InstitutionSelect,
	EducationInstitutionSelect, FormStudySelect, EducationalProgram
} from 'features/form/components/index'
import {Heading} from '@chakra-ui/react'

interface StepTwoProps extends FormProps {
}

export const StepTwo = ({register, errors}: StepTwoProps) => {

	return (
		<>
			<Heading
				w="100%"
				textAlign="center"
				fontWeight="medium"
				mb="2%">
				Регистрация
			</Heading>

			<StatusSelect register={register} errors={errors}/>
			<RegionSelect register={register} errors={errors}/>
			<CitySelect register={register} errors={errors}/>
			<InstitutionSelect register={register} errors={errors}/>
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
		</>
	)
}

