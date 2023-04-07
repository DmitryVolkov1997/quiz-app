import axios from 'axios'
import {LanguageResponse} from 'types'

export const getLanguages = async (): Promise<LanguageResponse> => {
	return await axios.get("/languages")
}