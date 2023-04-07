import React from 'react'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {useSocialStatuses} from 'hooks'
import {FormProps} from 'types'

interface StatusSelectProps extends FormProps {
}

export const StatusSelect = ({register, errors}: StatusSelectProps) => {
	const {data, isSuccess} = useSocialStatuses()

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Социальный статус"
				size="md"
				{...register("statuses", {
					required: "Обязательное поле"
				})}
			>
				{isSuccess && data.map((el, idx) => (
					<option
						key={idx}
						value={el.value}>
						{el.label}
					</option>
				))}
			</Select>

			{errors.statuses && (
				<Box
					as="strong"
					color="red"
					fontWeight="medium"
				>
					{errors.statuses.message}
				</Box>
			)}
		</FormControl>
	)
}

