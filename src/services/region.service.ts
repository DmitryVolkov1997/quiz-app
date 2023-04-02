import axios from 'axios'
import {RegionResponse} from 'types'

export const RegionService = {
	async getRegions(): Promise<RegionResponse> {
		return await axios.get('/regions')
	}
}