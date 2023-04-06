import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type CitySlice = {
	cityId: number
}

const initialState: CitySlice = {
	cityId: 0
}

const citySlice = createSlice({
	name: "city",
	initialState,
	reducers: {
		setCityId(state, action: PayloadAction<number>) {
			state.cityId = action.payload
		}
	}
})

export const {setCityId} = citySlice.actions
export default citySlice.reducer


