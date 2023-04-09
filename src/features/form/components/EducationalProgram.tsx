import React from 'react'
import {useEducationalPrograms} from 'hooks'
import {FormProps} from 'types'
import {useAppSelector} from 'store/redux-hooks'
import {Box, FormControl, Select} from '@chakra-ui/react'

interface EducationalProgramProps extends FormProps {}

export const EducationalProgram = ({register, errors}: EducationalProgramProps) => {
	const {type} = useAppSelector(state => state.formStudy)
	const {data, isSuccess} = useEducationalPrograms(type)

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Болжамдық білім беру бағдарламасы (Предполагаемая группа образовательных программ)"
				size="md"
				{...register("educationalProgram", {
					required: "Обязательное поле"
				})}
			>
				{isSuccess && Object.values(data).map((el, idx) => (
					<option
						key={el.id}
						value={el.name}
						data-name={el.type}
					>
						{el.name}
					</option>
				))}
			</Select>

			{errors.educationalProgram && errors.educationalProgram.message && (
				<Box
					as="strong"
					color="red"
					fontWeight="medium"
				>
					{errors.educationalProgram.message}
				</Box>
			)}
		</FormControl>
	)
}

