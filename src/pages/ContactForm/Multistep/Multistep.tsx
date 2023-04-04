import React, {useState} from 'react'
import styles from './Multistep.module.sass'
import {Box, Button, ButtonGroup, Flex, Progress, useToast} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {FormValues} from 'types/form-values'
import {Form1, Form2, Form3} from 'pages'


export const Multistep = () => {
	const {register, handleSubmit, watch, formState: {errors, isValid}} = useForm<FormValues>({
		mode: "onChange"
	})

	const toast = useToast()
	const [step, setStep] = useState(1)
	const [progress, setProgress] = useState(33.33)


	const onSubmit = (data: FormValues) => console.log(data)

	return (
		<Box
			borderWidth="1px"
			rounded="lg"
			shadow="1px 1px 3px rgba(0,0,0,0.3)"
			maxWidth={800}
			width="100%"
			p={6}
			m="10px auto"
			as="form"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Progress
				hasStripe
				value={progress}
				mb="5%"
				mx="5%"
				isAnimated>
			</Progress>
			{step === 1 ? <Form1 register={register} errors={errors}/> : step === 2 ?
				(
					<Form2
						register={register}
						errors={errors}
					/>
				) : (
					<Form3
						register={register}
						errors={errors}
					/>
				)}
			<ButtonGroup mt="5%" w="100%">
				<Flex w="100%" justifyContent="space-between">
					<Flex>
						<Button
							onClick={() => {
								setStep(step - 1)
								setProgress(progress - 33.33)
							}}
							isDisabled={step === 1}
							colorScheme="teal"
							variant="solid"
							w="7rem"
							mr="5%">
							Назад
						</Button>
						<Button
							w="7rem"
							isDisabled={step === 3}
							onClick={() => {
								setStep(step + 1)
								if (step === 2) {
									setProgress(100)
								} else {
									setProgress(progress + 33.33)
								}
							}}
							colorScheme={isValid ? "teal" : "red"}
							variant="outline">
							Следующий
						</Button>
					</Flex>
					{step === 3 ? (
						<Button
							type="submit"
							colorScheme="red"
							variant="solid"
							onClick={() => {
								toast({
									title: 'Данные успешно отправлены',
									status: 'success',
									duration: 3000,
									isClosable: true,
								})
							}}>
							Зарегистрироваться
						</Button>
					) : null}
				</Flex>
			</ButtonGroup>
		</Box>
	)
}

