import React, {ChangeEvent, useState} from 'react'
import styles from './Form2.module.sass'
import {Box, Heading, Select} from '@chakra-ui/react'
import {
	useSocialStatusesQuery,
	useRegionsQuery,
	useCitiesQuery,
	useInstitutionsTypesQuery,
	useEducationalInstitutions, useProgramsGroupQuery, useFormStudiesQuery
} from 'hooks'
import {FieldErrors, UseFormRegister} from 'react-hook-form'
import {FormValues} from 'types'

export interface Form2Props {
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>
}

export const Form2 = ({register, errors}:Form2Props) => {
	const [regionId, setRegionId] = useState(0)
	const [institutionType, setInstitutionType] = useState('')
	const [formType, setFormType] = useState('')
	const {data: statuses, isSuccess: isStatusesSuccess} = useSocialStatusesQuery()
	const {data: regions, isSuccess: isRegionsSuccess} = useRegionsQuery()
	const {data: cities, isSuccess: isCitiesSuccess} = useCitiesQuery(regionId)
	const {data: institutionsTypes, isSuccess: isInstitutionsTypes} = useInstitutionsTypesQuery()
	const {data: institutions, isSuccess: isInstitutionsSuccess} = useEducationalInstitutions(regionId, institutionType)
	const {data: formStudies, isSuccess: isFormStudiesSuccess} = useFormStudiesQuery()
	const {data: programs, isSuccess: isProgramsSuccess} = useProgramsGroupQuery(formType)

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

	const handleFormStudiesChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		if (value) {
			setFormType(value)
		}
	}

	return (
		<Box>
			<Heading w="100%"
					 textAlign="center"
					 fontWeight="normal"
					 mb="2%">
				Регистрация пользователя
			</Heading>

			<Select
				placeholder="Социальный статус"
				mb={4}
				{...register("socialStatus")}
			>
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
				placeholder="Оқу орны (Учебное заведение)"
				mb={4}
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

			<Select
				placeholder="Оқу түрі (Форма обучения)"
				mb={4}
				onChange={handleFormStudiesChange}
			>
				{
					isFormStudiesSuccess && formStudies.map((el, idx) => (
						<option
							key={idx}
							value={el.type}
						>
							{el.label}
						</option>
					))
				}
			</Select>

			<Select
				placeholder="Болжамдық білім беру бағдарламасы (Предполагаемая группа образовательных программ)"
				mb={4}
			>
				{
					isProgramsSuccess && programs.map(el => (
						<option key={el.id} value={el.id}>
							{el.name}
						</option>
					))
				}
			</Select>


		</Box>
	)
}

