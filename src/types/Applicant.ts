import {FormDataTypes} from 'types'

export type Applicant = FormDataTypes & {
	id:string
}

export type ApplicantResponse = {
	data: Applicant[]
}
