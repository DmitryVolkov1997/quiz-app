import axios from "axios"
import {FormResponse} from 'types'

export const FormService = {
	async getSocialStatuses():Promise<FormResponse> {
		return await axios.get('/form_data')
	}
}