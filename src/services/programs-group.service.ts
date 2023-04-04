import axios from 'axios'
import {ProgramsGroupResponse} from 'types'

export const ProgramsGroupService = {
	async getProgramsGroup(type: string): Promise<ProgramsGroupResponse> {
		return await axios.get(`/programs_group/?type=${type}`)
	}
}