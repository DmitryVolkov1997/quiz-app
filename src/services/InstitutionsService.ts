import axios from 'axios'
import {InstitutionResponse} from 'types'

export const getInstitutions = async (): Promise<InstitutionResponse> => {
	return await axios.get('/institution_type')
}