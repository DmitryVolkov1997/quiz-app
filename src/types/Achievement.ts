import {LabelValue} from 'types'

type Achievement = LabelValue & {}

export type AchievementResponse = {
	data: Achievement[]
}