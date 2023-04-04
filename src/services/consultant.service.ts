import axios from 'axios'
import {ConsultantResponse} from 'types'

export const ConsultantService = {
	async getConsultant():Promise<ConsultantResponse>{
		return axios.get('/consultants')
	}
}