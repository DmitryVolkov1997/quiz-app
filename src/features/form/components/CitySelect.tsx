import React, {ChangeEvent} from 'react'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {useCities} from 'hooks'
import {FormProps} from 'types'
import {useAppDispatch, useAppSelector} from 'store/redux-hooks'
import {setCityId} from 'store/slices/citySlice'

interface CitySelectProps extends FormProps {}

export const CitySelect = ({register, errors}: CitySelectProps) => {
	const {regionId} = useAppSelector(state => state.region)
	const {data, isSuccess} = useCities(regionId)
	const dispatch = useAppDispatch()


	const handleChangeCity = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = e.target.options[e.target.selectedIndex]

		if (selectedOption.dataset && selectedOption.dataset.name) {
			const optionName = +selectedOption.dataset.name
			dispatch(setCityId(optionName))

		} else {
			dispatch(setCityId(0))
		}
	}

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Қала/кент/ауыл (Город/поселок/село)"
				size="md"
				{...register("city", {
					required: "Обязательное поле"
				})}
				onChange={handleChangeCity}
			>
				{isSuccess && Object.values(data).map((el) => (
					<option
						key={el.id}
						value={el.name}
						data-name={el.id}
					>
						{el.name}
					</option>
				))}
			</Select>

			{errors.city && errors.city.message && (
				<Box
					as="strong"
					color="red"
					fontWeight="medium"
				>
					{errors.city.message}
				</Box>
			)}
		</FormControl>
	)
}

