import React, {ChangeEvent} from 'react'
import {FormProps} from 'types'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {useFormStudies} from 'hooks'
import {useAppDispatch} from 'store/redux-hooks'
import { setFormStudy } from 'store/slices/formStudySlice'

interface FormStudySelectProps extends FormProps {

}

export const FormStudySelect = ({register, errors}: FormStudySelectProps) => {
	const {data, isSuccess} = useFormStudies()
	const dispatch = useAppDispatch()

	const handleChangeFormStudy = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = e.target.options[e.target.selectedIndex]

		if (selectedOption.dataset && selectedOption.dataset.name) {
			const optionName = selectedOption.dataset.name
			dispatch(setFormStudy(optionName))
		} else {
			dispatch(setFormStudy(''))
		}
	}

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Оқу түрі (Форма обучения)"
				size="md"
				{...register("formStudy", {
					required: "Обязательное поле"
				})}
				onChange={handleChangeFormStudy}
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

			{errors.formStudy && errors.formStudy.message && (
				<Box
					as="strong"
					color="red"
					fontWeight="medium"
				>
					{errors.formStudy.message}
				</Box>
			)}
		</FormControl>
	)
}

