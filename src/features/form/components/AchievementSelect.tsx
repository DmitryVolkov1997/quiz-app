import React from 'react'
import {FormProps} from 'types'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {useAchievements} from 'hooks/useAchievements'

interface AchievementSelectProps extends FormProps {
}

export const AchievementSelect = ({register, errors}: AchievementSelectProps) => {
	const {data, isSuccess} = useAchievements()

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Награды и достижение"
				size="md"
				{...register("achievement", {
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

			{errors.achievement && errors.achievement.message && (
				<Box
					as="strong"
					color="red"
					fontWeight="medium"
				>
					{errors.achievement.message}
				</Box>
			)}
		</FormControl>
	)
}

