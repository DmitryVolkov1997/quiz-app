import React, {useState} from 'react'
import {Box, Button, ButtonGroup, Flex, Progress, useToast} from '@chakra-ui/react'
import {FormProps} from 'types'
import {StepOne, StepTwo, StepThree} from 'features'
import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'

interface MultistepProps extends FormProps {
	isValid: boolean
	isSubmitSuccessful: boolean
}

export const Multistep = ({register, errors, isValid, isSubmitSuccessful}: MultistepProps) => {
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
						colorScheme="red"
						variant="solid"
						type="submit"
						onClick={() => {
							toast({
								title: isSubmitSuccessful ? 'Спасибо за регистрацию!' : 'Упс что-то пошло не так',
								status: isSubmitSuccessful ? 'success' : 'error',
								duration: 3000,
								isClosable: true,
								position: 'top'
							})
						}}>
						Зарегистрироваться
					</Button>
				) : null}
			</ButtonGroup>
		</Box>
	)
}

