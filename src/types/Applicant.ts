import {FormDataTypes} from 'types'

export type Applicant = FormDataTypes & {}

export type ApplicantResponse = {
	data: Applicant[]
}
