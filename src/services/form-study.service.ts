import axios from 'axios'
import {FormStudyResponse} from 'types/form-study'

export const FormStudyService = {
	async getFormStudies():Promise<FormStudyResponse>{
		return await axios.get('/form_study')
	}
}