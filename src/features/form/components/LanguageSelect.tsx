import React from 'react'
import {FormProps} from 'types'
import {useLanguages} from 'hooks'
import {Box, FormControl, Select} from '@chakra-ui/react'

interface LanguageSelectProps extends FormProps {
}

export const LanguageSelect = ({register, errors}: LanguageSelectProps) => {
	const {data, isSuccess} = useLanguages()

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Оқу тілі (Язык обучения)"
				size="md"
				{...register("language", {
					required: "Обязательное поле"
				})}
			>
				{isSuccess && Object.values(data).map((el, idx) => (
					<option
						key={idx}
						value={el.value}
					>
						{el.label}
					</option>
				))}
			</Select>

			{errors.language &&
				errors.language.message && (
					<Box
						as="strong"
						color="red"
						fontWeight="medium"
					>
						{errors.language.message}
					</Box>
				)}
		</FormControl>
	)
}

