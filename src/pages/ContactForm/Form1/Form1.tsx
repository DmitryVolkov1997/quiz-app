import {Box, Flex, FormControl, Heading, Input} from '@chakra-ui/react'
import React from 'react'
import styles from './Form1.module.sass'

export const Form1 = () => {
	return (
		<Box>
			<Heading
				w="100%"
				textAlign="center"
				fontWeight="normal"
				mb="2%">
				Регистрация пользователя
			</Heading>

			<Flex>
				<FormControl
					mb={4}
					mr="5%">
					<Input type="text" placeholder="Аты (Имя)*"/>
				</FormControl>
				<FormControl mb={4}>
					<Input type="text" placeholder="Тегі (Фамилия)*"/>
				</FormControl>
			</Flex>

			<FormControl mb={4}>
				<Input type="text" placeholder="Әкесінің аты (Отчество)"/>
			</FormControl>

			<FormControl mb={4}>
				<Input type="email" placeholder="Email*"/>
			</FormControl>

			<FormControl mb={4}>
				<Input type="number" placeholder="Телефон"/>
			</FormControl>
		</Box>
	)
}

