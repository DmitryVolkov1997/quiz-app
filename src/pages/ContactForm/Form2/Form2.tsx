import React from 'react'
import styles from './Form2.module.sass'
import {Box, Heading, Select} from '@chakra-ui/react'
import {useFormQuery} from 'hooks/useFormQuery'

export const Form2 = () => {
	const {data: res, isLoading, isSuccess} = useFormQuery()

	return (
		<Box>
			<Heading w="100%"
					 textAlign="center"
					 fontWeight="normal"
					 mb="2%">
				Сведения о пользователе
			</Heading>
			{
				isLoading ? <Heading>Loading...</Heading> : isSuccess ? (
					<>
						<Select
							placeholder="Социальный статус"
							mb={4}>
							{
								res.social_statuses.map(status => (
									<option key={status.value} value="option1">
										{status.value}
									</option>
								))
							}
						</Select>

						<Select
							placeholder="Аймақ (Регион)"
							mb={4}>
							{
								res.regions.map(status => (
									<option key={status.id} value="option1">
										{status.name}
									</option>
								))
							}
						</Select>
					</>
				) : (
					<Heading>
						Loading...
					</Heading>
				)
			}
		</Box>
	)
}

//Сделать спиннер
