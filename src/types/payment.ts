export type Payment = {
	label: string
	value: string
}

export type PaymentResponse = {
	data: Payment[]
}