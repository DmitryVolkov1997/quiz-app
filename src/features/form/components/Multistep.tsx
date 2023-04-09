import React, {Dispatch, SetStateAction, useState} from 'react'
import {Box, Button, ButtonGroup, Flex, Progress, useToast} from '@chakra-ui/react'
import {FormProps} from 'types'
import {StepOne, StepTwo, StepThree} from 'features'
import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'

interface MultistepProps extends FormProps {
	isValid: boolean
	isSubmitSuccessful: boolean
	isLoading: boolean
	setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const Multistep = ({register, errors, isValid, isSubmitSuccessful, isLoading, setIsLoading}: MultistepProps) => {
	const toast = useToast()
	const [step, setStep] = useState(1)
	const [progress, setProgress] = useState(33.33)

	return (
		<Box>
			<Progress
				hasStripe
				value={progress}
				mb="5%"
				mx="5%"
				isAnimated/>

			{step === 1 ? (
				<StepOne
					register={register}
					errors={errors}
				/>
			) : step === 2 ? (
				<StepTwo
					register={register}
					errors={errors}
				/>
			) : (
				<StepThree
					register={register}
					errors={errors}
				/>
			)}

			<ButtonGroup
				mt="5%" w="100%">
				<Flex w="100%" justifyContent="space-between">
					<Button onClick={() => {
						setStep(step - 1)
						setProgress(progress - 33.33)
					}}
							isDisabled={step === 1}
							colorScheme="teal"
							variant="solid"
							w="4rem"
							mr="5%"
					>
						<ArrowBackIcon fontSize={'3xl'}/>
					</Button>

					{
						step === 3 ? null : (
							<Button onClick={() => {
								setStep(step + 1)
								setProgress(progress + 33.33)
							}}
									isDisabled={step === 3 || !isValid}
									colorScheme="teal"
									variant="solid"
									w="4rem"
							>
								<ArrowForwardIcon fontSize={'3xl'}/>
							</Button>
						)
					}
				</Flex>

				{step === 3 ? (
					<Button
						px={10}
						colorScheme={isValid ? 'green' : "red"}
						variant="solid"
						type="submit"
						isLoading={isLoading}
						disabled={isLoading}
						onClick={() => {
							if (isSubmitSuccessful) {
								toast({
									title: 'Спасибо за регистрацию!',
									status: 'success',
									duration: 5000,
									isClosable: true,
									position: 'top'
								})
							} else if (errors || !isValid) {
								toast({
									title: 'Проверьте корректность заполнения полей формы',
									status: 'error',
									duration: 5000,
									isClosable: true,
									position: 'top'
								})
							} else {
								setIsLoading(true)
							}
						}}>
						Зарегистрироваться
					</Button>
				) : null}
			</ButtonGroup>
		</Box>
	)
}

