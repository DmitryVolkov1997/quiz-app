import React from 'react'
import styles from './Form3.module.sass'
import {useAchievementsQuery} from 'hooks'
import {Box, Heading, Select, Textarea} from '@chakra-ui/react'
import {useFormPaymentQuery, useLanguagesQuery, useConsultantsQuery} from 'hooks'
import {FieldErrors, UseFormRegister} from 'react-hook-form'
import {FormValues} from 'types/form-values'

export interface Form3Props {
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>
}
export const Form3 = ({register,errors}:Form3Props) => {
	const {data: achievements, isSuccess: IsAchievementsSuccess} = useAchievementsQuery()
	const {data: payments, isSuccess: isPaymentsSuccess} = useFormPaymentQuery()
	const {data:languages, isSuccess:isLanguagesSuccess} = useLanguagesQuery()
	const {data:consultants, isSuccess:isConsultantsSuccess} = useConsultantsQuery()

	return (
		<Box>
			<Heading w="100%"
					 textAlign="center"
					 fontWeight="normal"
					 mb="2%">
				Регистрация пользователя
			</Heading>

			<Select
				placeholder="Награды и достижение"
				mb={4}>
				{
					IsAchievementsSuccess && achievements.map((achievement, idx) => (
						<option key={idx}>
							{achievement.value}
						</option>
					))
				}
			</Select>

			<Select
				placeholder="Предполагаемая форма оплаты за обучение в ВУЗе"
				mb={4}>
				{
					isPaymentsSuccess && payments.map((payment, idx) => (
						<option key={idx}>
							{payment.value}
						</option>
					))
				}
			</Select>

			<Select
				placeholder="Оқу тілі (Язык обучения)"
				mb={4}>
				{
					isLanguagesSuccess && languages.map((language, idx) => (
						<option key={idx}>
							{language.value}
						</option>
					))
				}
			</Select>

			<Select
				placeholder="Кафедра-консультант - от кого получена информация о ВУЗе)"
				mb={4}>
				{
					isConsultantsSuccess && consultants.map((consultant, idx) => (
						<option key={idx}>
							{consultant.value}
						</option>
					))
				}
			</Select>

			<Textarea placeholder='Сіздің сұрақ/жауап (Ваш вопрос/ответ)' />
		</Box>
	)
}

