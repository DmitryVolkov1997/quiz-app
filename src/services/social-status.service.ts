import axios from 'axios'
import {SocialStatusResponse} from 'types'

export const SocialStatusService = {
	async getSocialStatuses(): Promise<SocialStatusResponse> {
		return await axios.get('/social_statuses')
	}
}