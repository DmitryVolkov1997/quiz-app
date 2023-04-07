import React from 'react'
import {Textarea} from '@chakra-ui/react'
import {FormProps} from 'types'

interface QuestionProps extends FormProps {
}

export const Question = ({register}: QuestionProps) => {
	return (
		<Textarea
			placeholder="Сіздің сұрақ/жауап (Ваш вопрос/ответ)"
			{...register("question")}
		/>
	)
}

