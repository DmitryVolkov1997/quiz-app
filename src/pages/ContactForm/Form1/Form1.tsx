import React from 'react'
import styles from './Form1.module.sass'
import {Box, Flex, FormControl, Heading, Input} from '@chakra-ui/react'
import {UseFormRegister, FieldErrors} from 'react-hook-form'

import {FormValues} from 'types'

export interface Form1Props {
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>
}

export const Form1 = ({register, errors}: Form1Props) => {
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
					<Input
						type="text"
						placeholder="Аты (Имя)*"
						{...register("firstName", {
							required: true,
							minLength: {
								value: 2,
								message: "Минимум 2 символа"
							}
						})}
					/>

					{errors.firstName && (
						<Box as="span" color="red.500">
							{errors.firstName.message}
						</Box>
					)}
				</FormControl>
				<FormControl mb={4}>
					<Input
						type="text"
						placeholder="Тегі (Фамилия)*"
						{...register("lastName", {
							required: true,
							minLength: {
								value: 2,
								message: "Минимум 2 символа"
							}
						})}
					/>
					{errors.lastName && (
						<Box as="span" color="red.500">
							{errors.lastName.message}
						</Box>
					)}
				</FormControl>
			</Flex>

			<FormControl mb={4}>
				<Input
					type="text"
					placeholder="Әкесінің аты (Отчество)"
					{...register("patronymic")}
				/>
			</FormControl>

			<FormControl mb={4}>
				<Input
					type="email"
					placeholder="Email*"
					{...register("email", {
						required: "Поле обязательно к заполнению",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Введите корректный email"
						}
					})}
				/>

				{errors.email && (
					<Box as="span" color="red.500">
						{errors.email.message}
					</Box>
				)}
			</FormControl>

			<FormControl mb={4}>
				<Input
					type="tel"
					placeholder="+77005451010"
					{...register("phone",
						{
							required: "Поле обязательно к заполнению",
							pattern: {
								value: /^\+7\d{10}$/,
								message: "Введите корректный номер телефона"
							}
						})}
				/>
				{errors.phone && (
					<Box as="span" color="red.500">
						{errors.phone.message}
					</Box>
				)}
			</FormControl>
		</Box>
	)
}

