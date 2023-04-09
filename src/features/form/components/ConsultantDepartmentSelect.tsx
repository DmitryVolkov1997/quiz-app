import React from 'react'
import {FormProps} from 'types'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {useConsultantDepartment} from 'hooks/useConsultantDepartment'

interface ConsultantDepartmentSelectProps extends FormProps {
}

export const ConsultantDepartmentSelect = ({register, errors}: ConsultantDepartmentSelectProps) => {
	const {data, isSuccess} = useConsultantDepartment()

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Кафедра-консультант - от кого получена информация о ВУЗе)"
				size="md"
				{...register("consultant", {
					required: "Обязательное поле"
				})}
			>
				{isSuccess && Object.values(data).map((el, idx) => (
					<option
						key={idx}
						value={el.value}
						data-name={el.value}
					>
						{el.label}
					</option>
				))}
			</Select>

			{errors.consultant && errors.consultant.message && (
				<Box
					as="strong"
					color="red"
					fontWeight="medium"
				>
					{errors.consultant.message}
				</Box>
			)}
		</FormControl>
	)
}

