import axios from 'axios'
import {PaymentResponse} from 'types'

export const PaymentService = {
	async getFormPayments():Promise<PaymentResponse> {
		return axios.get('/form_payment')
	}
}