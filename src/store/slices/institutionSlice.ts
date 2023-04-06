import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InstitutionSlice = {
	institutionType: string
}

const initialState: InstitutionSlice = {
	institutionType: ''
}

const institutionSlice = createSlice({
	name: "institution",
	initialState,
	reducers: {
		setInstitutionType(state, action: PayloadAction<string>) {
			state.institutionType = action.payload
		}
	}
})

export const {setInstitutionType} = institutionSlice.actions
export default institutionSlice.reducer


