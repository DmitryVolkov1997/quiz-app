import {EducationalProgramResponse} from 'types'
import axios from 'axios'

export const getEducationalProgram = async (programType: string): Promise<EducationalProgramResponse> => {
	return axios.get(`/programs_group.json?orderBy="type"&equalTo="${programType}"`)
}