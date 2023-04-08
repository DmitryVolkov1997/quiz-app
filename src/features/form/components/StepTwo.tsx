import React from 'react'
import {FormProps} from 'types/index'
import {
	StatusSelect,
	RegionSelect,
	CitySelect,
	InstitutionSelect,
	EducationInstitutionSelect, FormStudySelect, EducationalProgram
} from 'features/form/components/index'

interface StepTwoProps extends FormProps {
}

export const StepTwo = ({register, errors}: StepTwoProps) => {

	return (
		<>
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

