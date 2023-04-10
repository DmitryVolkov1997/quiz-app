import React from 'react'
import {Box, Button, ButtonGroup, Flex, Progress, useToast} from '@chakra-ui/react'
import {FormProps} from 'types'
import {StepOne, StepTwo, StepThree} from 'features'
import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import {useAppDispatch, useAppSelector} from 'store/redux-hooks'
import {setNextStep, setPrevStep, setProgress, setStep} from 'store/slices/contactFormSlice'

interface MultistepProps extends FormProps {
	isValid: boolean
	isSubmitSuccessful: boolean
	isLoading: boolean
}

export const Multistep = ({register, errors, isValid, isSubmitSuccessful, isLoading}: MultistepProps) => {
	const toast = useToast()
	const dispatch = useAppDispatch()
	const {step, progress} = useAppSelector(state => state.contactForm)

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
						dispatch(setPrevStep())
						dispatch(setProgress(progress - 33.33))
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
								dispatch(setNextStep())
								dispatch(setProgress(progress + 33.33))
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
						px={14}
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
									duration: 7000,
									isClosable: true,
									position: 'top',
								})
							}
						}}>
						Зарегистрироваться
					</Button>
				) : null}
			</ButtonGroup>
		</Box>
	)
}

