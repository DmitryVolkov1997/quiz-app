import {LabelValue} from 'types'

type Language = LabelValue & {}

export type LanguageResponse = {
	data: Language[]
}