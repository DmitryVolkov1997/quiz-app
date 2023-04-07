import axios from 'axios'
import {CityResponse} from 'types'

export const getCitiesById = async (regionId: number):Promise<CityResponse> => {
	return await axios.get(`/cities/?regionId=${regionId}`)
}