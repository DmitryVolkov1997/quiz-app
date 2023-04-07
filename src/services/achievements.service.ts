import axios from 'axios'
import {AchievementResponse} from 'types'

export const getAchievements = async (): Promise<AchievementResponse> => {
	return await axios.get("/achievements")
}