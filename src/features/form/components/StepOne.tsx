import React from 'react'
import {Box, FormControl, Heading, Input} from '@chakra-ui/react'
import {inputs, registerName} from 'features/index'
import {FormDataTypes, FormProps} from 'types/index'
import {RegisterOptions} from 'react-hook-form'

interface StepOneProps extends FormProps {
}

export const StepOne = ({register, errors}: StepOneProps) => {
	return (
		<>
			<Heading
				fontFamily="Open Sans"
				w="100%"
				textAlign="center"
				fontWeight="bold"
				fontStyle={'italic'}
				mb="2%">
				Регистрация
			</Heading>

			{
				inputs.map(el => (
					<FormControl
						key={el.id}
						marginBottom={{base: "6%", md: "3%", lg: "2%"}}
					>
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

