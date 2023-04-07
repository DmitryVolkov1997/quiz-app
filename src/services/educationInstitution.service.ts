import axios from 'axios'
import {EducationInstitutionResponse} from 'types'

export const getEducationInstitutions = async (cityId: number, type: string): Promise<EducationInstitutionResponse> => {
	return await axios.get(`/educational_institutions/?cityId=${cityId}&type=${type}`)
}