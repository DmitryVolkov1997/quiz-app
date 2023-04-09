import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FormDataTypesRus} from 'types'

type StudentSlice = {
	student: null | FormDataTypesRus
}

const initialState: StudentSlice = {
	student: null
}

const studentSlice = createSlice({
	name: "student",
	initialState,
	reducers: {
		setStudent(state, action: PayloadAction<FormDataTypesRus | null>) {
			state.student = action.payload
		}
	}
})

export const {setStudent} = studentSlice.actions
export default studentSlice.reducer


