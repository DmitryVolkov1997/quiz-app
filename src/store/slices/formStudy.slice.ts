import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type FormStudySlice = {
	type: string
}

const initialState: FormStudySlice = {
	type: ''
}

const formStudySlice = createSlice({
	name: "formStudy",
	initialState,
	reducers: {
		setFormStudy(state, action: PayloadAction<string>) {
			state.type = action.payload
		}
	}
})

export const {setFormStudy} = formStudySlice.actions
export default formStudySlice.reducer


