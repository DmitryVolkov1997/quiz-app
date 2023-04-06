import {combineReducers} from '@reduxjs/toolkit'
import regionSlice from './slices/regionSlice'
import citySlice from './slices/citySlice'
import institutionSlice from './slices/institutionSlice'

export const rootReducer = combineReducers({
	region: regionSlice,
	city: citySlice,
	institution: institutionSlice
})