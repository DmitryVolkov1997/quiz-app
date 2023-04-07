import axios from 'axios'
import {ConsultantDepartmentResponse} from 'types/ConsultantDepartment'

export const getConsultantDepartment = async (): Promise<ConsultantDepartmentResponse> => {
	return await axios.get("/consultants")
}