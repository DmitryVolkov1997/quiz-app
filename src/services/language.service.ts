import axios from 'axios'
import {LanguageResponse} from 'types'

export const LanguageService = {
	async getLanguages():Promise<LanguageResponse>{
		return axios.get('/languages')
	}
}