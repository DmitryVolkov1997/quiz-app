import React from 'react'
import {FormProps} from 'types'
import {StatusSelect, RegionSelect, CitySelect, InstitutionSelect} from 'features/form/components'

interface StepTwoProps extends FormProps {
}

export const StepTwo = ({register, errors}: StepTwoProps) => {

	return (
		<>
			<StatusSelect register={register} errors={errors}/>
			<RegionSelect register={register} errors={errors}/>
			<CitySelect register={register} errors={errors}/>
			<InstitutionSelect register={register} errors={errors}/>
		</>
	)
}

