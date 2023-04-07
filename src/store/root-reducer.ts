import {combineReducers} from '@reduxjs/toolkit'
import regionSlice from './slices/regionSlice'
import citySlice from './slices/citySlice'
import institutionSlice from './slices/institutionSlice'
import formStudySlice from './slices/formStudy.slice'

export const rootReducer = combineReducers({
	region: regionSlice,
	city: citySlice,
	institution: institutionSlice,
	formStudy: formStudySlice
})