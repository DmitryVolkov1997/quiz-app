import axios from 'axios'
import {UserResponse} from 'types'

export const getUserDatabase = async (email: string): Promise<UserResponse> => {
	return await axios.get(`/contact_form_data.json/?orderBy="Email"&equalTo="${email}"`)
}