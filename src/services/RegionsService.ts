import axios from 'axios'
import {RegionResponse} from 'types'

export const getRegions = async (): Promise<RegionResponse> => {
	return await axios.get("/regions")
}