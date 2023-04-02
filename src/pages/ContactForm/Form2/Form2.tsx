import React, {ChangeEvent, useState} from 'react'
import styles from './Form2.module.sass'
import {Box, Heading, Select} from '@chakra-ui/react'
import {
	useSocialStatusesQuery,
	useRegionsQuery,
	useCitiesQuery,
	useInstitutionsTypesQuery,
	useEducationalInstitutions
} from 'hooks'

export const Form2 = () => {
	const [regionId, setRegionId] = useState(0)
	const [institutionType, setInstitutionType] = useState('')
	const {data: statuses, isSuccess: isStatusesSuccess} = useSocialStatusesQuery()
	const {data: regions, isSuccess: isRegionsSuccess} = useRegionsQuery()
	const {data: cities, isSuccess: isCitiesSuccess} = useCitiesQuery(regionId)
	const {data: institutionsTypes, isSuccess: isInstitutionsTypes} = useInstitutionsTypesQuery()
	const {data: institutions, isSuccess: isInstitutionsSuccess} = useEducationalInstitutions(regionId, institutionType)

	const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		if (value) {
			setRegionId(+value)
		}
	}

	const handleInstitutionTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		if (value) {
			setInstitutionType(value)
		}
	}

	return (
		<Box>
			<Heading w="100%"
					 textAlign="center"
					 fontWeight="normal"
					 mb="2%">
				Сведения о пользователе
			</Heading>

			<Select
				placeholder="Социальный статус"
				mb={4}>
				{
					isStatusesSuccess && statuses.map((status, idx) => (
						<option key={idx}>{status.label}</option>
					))
				}
			</Select>

			<Select
				placeholder="Аймақ (Регион)"
				mb={4}
				onChange={handleRegionChange}
			>
				{
					isRegionsSuccess && regions.map(region => (
						<option
							key={region.id}
							value={region.id}
						>
							{region.name}
						</option>
					))
				}
			</Select>

			<Select
				placeholder="Қала/кент/ауыл (Город/поселок/село)"
				mb={4}
			>
				{
					isCitiesSuccess && cities.map(city => (
						<option
							key={city.id}
							value={city.id}
						>
							{city.name}
						</option>
					))
				}
			</Select>

			<Select
				placeholder="Вид учебного заведения"
				mb={4}
				onChange={handleInstitutionTypeChange}
			>
				{
					isInstitutionsTypes && institutionsTypes.map((type, idx) => (
						<option
							key={idx}
							value={type.type}
						>
							{type.label}
						</option>
					))
				}
			</Select>

			<Select
				placeholder="Вид учебного заведения"
				mb={4}
				onChange={handleInstitutionTypeChange}
			>
				{
					isInstitutionsSuccess && institutions.map((el) => (
						<option
							key={el.id}
							value={el.name}
						>
							{el.name}
						</option>
					))
				}
			</Select>
		</Box>
	)
}

