import axios from 'axios'
import {ApplicantResponse} from 'types'

const getApplicants = async (): Promise<ApplicantResponse> => {
	return await axios.get("/contact_form_data.json")
}

const deleteApplicant = async (id:string) => {
	return await axios.delete(`/contact_form_data/${id}.json`)
}

export {getApplicants, deleteApplicant}