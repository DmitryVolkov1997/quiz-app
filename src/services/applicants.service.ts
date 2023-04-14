import axios from 'axios'
import {ApplicantResponse} from 'types'

export const getApplicants = async (): Promise<ApplicantResponse> => {
	return await axios.get("/contact_form_data.json")
}