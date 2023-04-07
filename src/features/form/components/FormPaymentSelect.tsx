import React from 'react'
import {FormProps} from 'types'
import {Box, FormControl, Select} from '@chakra-ui/react'
import {useFormPayments} from 'hooks/useFormPayments'

interface FormPaymentsProps extends FormProps {
}

export const FormPaymentSelect = ({register, errors}: FormPaymentsProps) => {
	const {data, isSuccess} = useFormPayments()

	return (
		<FormControl mb="2%">
			<Select
				placeholder="Предполагаемая форма оплаты за обучение в ВУЗе"
				size="md"
				{...register("formPayment", {
					required: "Обязательное поле"
				})}
			>
				{isSuccess && data.map((el, idx) => (
					<option
						key={idx}
						value={el.value}
					>
						{el.label}
					</option>
				))}
			</Select>

			{errors.formPayment &&
				errors.formPayment.message && (
					<Box
						as="strong"
						color="red"
						fontWeight="medium"
					>
						{errors.formPayment.message}
					</Box>
				)}
		</FormControl>
	)
}

