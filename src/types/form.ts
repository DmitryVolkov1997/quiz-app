import {SocialStatus} from 'types/social-status'
import {Region} from 'types/region'

type Form = {
	social_statuses: SocialStatus[],
	regions: Region[]
}

export type FormResponse = {
	data: Form
}