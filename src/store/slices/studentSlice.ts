import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FormDataTypes} from 'types'

type StudentSlice = {
	student: null | FormDataTypes
}

const initialState: StudentSlice = {
	student: null
}

const studentSlice = createSlice({
	name: "student",
	initialState,
	reducers: {
		setStudent(state, action: PayloadAction<FormDataTypes | null>) {
			state.student = action.payload
		}
	}
})

export const {setStudent} = studentSlice.actions
export default studentSlice.reducer


