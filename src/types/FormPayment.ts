import {LabelValue} from 'types'

type FormPayment = LabelValue & {}

export type FormPaymentResponse = {
	data: FormPayment[]
}