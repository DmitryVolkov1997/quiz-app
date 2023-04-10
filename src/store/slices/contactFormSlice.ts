import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type ContactFormSlice = {
	step: number
	progress: number
}

const initialState: ContactFormSlice = {
	step: 1,
	progress: 33.33
}

const contactFormSlice = createSlice({
	name: 'contactForm',
	initialState,
	reducers: {
		setStep(state, action: PayloadAction<number>) {
			state.step = action.payload
		},
		setNextStep(state) {
			state.step = state.step + 1
		},
		setPrevStep(state) {
			state.step = state.step - 1
		},
		setProgress(state, action: PayloadAction<number>) {
			state.progress = action.payload
		}
	}
})

export const {setStep, setNextStep, setPrevStep, setProgress} = contactFormSlice.actions
export default contactFormSlice.reducer