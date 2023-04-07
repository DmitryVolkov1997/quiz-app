import axios from 'axios'
import {FormStudyResponse} from 'types'

export const getFormStudies = async (): Promise<FormStudyResponse> => {
	return await axios.get("/form_study")
}