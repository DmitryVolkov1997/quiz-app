import axios from 'axios'
import {SocialStatusResponse} from 'types'

export const SocialStatuses = async (): Promise<SocialStatusResponse> => {
	return await axios.get('/social_statuses')
}