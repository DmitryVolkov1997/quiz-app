import axios from 'axios'
import {EducationInstitutionResponse} from 'types'

export const getEducationInstitutions = async (cityId: number, type: string): Promise<EducationInstitutionResponse> => {
	return await axios.get(`/educational_institutions.json/?orderBy="cityId"&equalTo=${cityId}&orderBy="type"&equalTo=${type}`)
}