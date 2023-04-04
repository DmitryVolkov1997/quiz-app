import { AchievementResponse } from "types";
import axios from 'axios'

export const AchievementService = {
	async getAchievements():Promise<AchievementResponse> {
		return await axios.get('/achievements')
	}
}