import React from 'react'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {FormProps} from 'types'
import {useEducationInstitutions} from 'hooks'
import {useAppSelector} from 'store/redux-hooks'

interface EducationInstitutionSelectProps extends FormProps {
}

export const EducationInstitutionSelect = ({register, errors}: EducationInstitutionSelectProps) => {
	const {cityId} = useAppSelector(state => state.city)
	const {institutionType} = useAppSelector(state => state.institution)
	const {data, isSuccess} = useEducationInstitutions(cityId, institutionType)

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Оқу орны (Учебное заведение)"
				size="md"
				{...register("educationInstitution", {
					required: "Обязательное поле"
				})}
			>
				{isSuccess && Object.values(data).map(el => (
					<option
						key={el.id}
						value={el.name}
					>
						{el.name}
					</option>
				))}
			</Select>

			{errors.educationInstitution
				&& errors.educationInstitution.message && (
				<Box
					as="strong"
					color="red"
					fontWeight="medium"
				>
					{errors.educationInstitution.message}
				</Box>
			)}
		</FormControl>
	)
}

