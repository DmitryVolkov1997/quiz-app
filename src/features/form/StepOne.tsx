import React from 'react'
import {Box, FormControl, Heading, Input} from '@chakra-ui/react'
import {inputs, registerName} from 'features'
import {FormDataTypes, FormProps} from 'types'
import {RegisterOptions} from 'react-hook-form'

interface StepOneProps extends FormProps {
}

export const StepOne = ({register, errors}: StepOneProps) => {
	return (
		<>
			<Heading
				w="100%"
				textAlign="center"
				fontWeight="medium"
				mb="2%">
				Регистрация
			</Heading>

			{
				inputs.map(el => (
					<FormControl key={el.id} mb="2%">
						<Input
							placeholder={el.label}
							type={el.type}
							{...register(
								el.name,
								el.registerOptions as RegisterOptions<FormDataTypes, registerName>
							)}
						/>

						{
							errors[el.name] && (
								<Box
									as="strong"
									color="red"
									fontWeight="medium"
								>
									{errors[el.name]?.message}
								</Box>
							)
						}
					</FormControl>
				))
			}
		</>
	)
}

