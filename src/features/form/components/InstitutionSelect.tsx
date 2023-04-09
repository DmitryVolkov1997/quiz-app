import React, {ChangeEvent} from 'react'
import {useInstitutions} from 'hooks'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {FormProps} from 'types'
import {useAppDispatch} from 'store/redux-hooks'
import {setInstitutionType} from 'store/slices/institutionSlice'

interface InstitutionSelectProps extends FormProps {}

export const InstitutionSelect = ({register, errors}: InstitutionSelectProps) => {
	const {data, isSuccess} = useInstitutions()
	const dispatch = useAppDispatch()

	const handleChangeInstitutionType = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = e.target.options[e.target.selectedIndex]

		if (selectedOption.dataset && selectedOption.dataset.name) {
			const optionName = selectedOption.dataset.name
			dispatch(setInstitutionType(optionName))

		} else {
			dispatch(setInstitutionType(''))
		}
	}

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Вид учебного заведения"
				size="md"
				{...register("institutionType", {
					required: "Обязательное поле"
				})}
				onChange={handleChangeInstitutionType}
			>
				{isSuccess && Object.values(data).map((el, idx) => (
					<option
						key={idx}
						value={el.value}
						data-name={el.type}
					>
						{el.label}
					</option>
				))}
			</Select>

			{errors.institutionType && errors.institutionType.message && (
				<Box
					as="strong"
					color="red"
					fontWeight="medium"
				>
					{errors.institutionType.message}
				</Box>
			)}
		</FormControl>
	)
}

