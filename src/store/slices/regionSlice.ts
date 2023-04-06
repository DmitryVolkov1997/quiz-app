import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type RegionSlice = {
	regionId: number
}

const initialState: RegionSlice = {
	regionId: 0
}

const regionSlice = createSlice({
	name: "region",
	initialState,
	reducers: {
		setRegionId(state, action: PayloadAction<number>) {
			state.regionId = action.payload
		}
	}
})

export const {setRegionId} = regionSlice.actions
export default regionSlice.reducer


