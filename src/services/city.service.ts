import axios from 'axios'
import {CityResponse} from 'types/city'

export const CityService = {
	async getCities(regionId: number):Promise<CityResponse> {
		return await axios.get(`/cities/?regionId=${regionId}`)
	}
}