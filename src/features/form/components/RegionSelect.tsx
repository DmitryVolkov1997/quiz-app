import React, {ChangeEvent, useState} from 'react'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {useRegions} from 'hooks'
import {FormProps} from 'types'
import {setRegionId} from 'store/slices/regionSlice'
import {useAppDispatch} from 'store/redux-hooks'

interface RegionSelectProps extends FormProps {
}

export const RegionSelect = ({register, errors}: RegionSelectProps) => {
	const {data, isSuccess} = useRegions()
	const dispatch = useAppDispatch()

	const handleRegion = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = e.target.options[e.target.selectedIndex]

		if (selectedOption.dataset && selectedOption.dataset.name) {
			const optionName = +selectedOption.dataset.name

			dispatch(setRegionId(optionName))
		} else {
			dispatch(setRegionId(0))
		}
	}

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Аймақ (Регион)"
				size="md"
				{...register("regions", {
					required: "Обязательное поле"
				})}
				onChange={handleRegion}
			>
				{isSuccess && data.map((el) => (
					<option
						key={el.id}
						value={el.name}
						data-name={el.id}
					>
						{el.name}
					</option>
				))}
			</Select>

			{errors.regions && errors.regions.message && (
				<Box
					as="strong"
					color="red">
					{errors.regions.message}
				</Box>
			)}
		</FormControl>
	)
}

