import axios from 'axios'
import {FormPaymentResponse} from 'types'

export const getFormPayments = async (): Promise<FormPaymentResponse> => {
	return await axios.get("/form_payment")
}