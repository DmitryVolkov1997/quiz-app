import axios from 'axios'
import {EducationalInstitutionsResponse} from 'types/educational-institutions'

export const EducationalInstitutionsService = {
	async getEducationalInstitutions(cityId: number, type: string): Promise<EducationalInstitutionsResponse> {
		return await axios.get(`/educational_institutions/?cityId=${cityId}&type=${type}`)
	}
}