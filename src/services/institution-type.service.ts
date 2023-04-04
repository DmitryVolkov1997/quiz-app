import axios from 'axios'
import {InstitutionTypeResponse} from 'types'

export const InstitutionTypeService = {
	async getInstitutionTypes(): Promise<InstitutionTypeResponse> {
		return await axios.get('/institution_type')
	}
}