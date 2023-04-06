import {FieldErrors, UseFormRegister} from 'react-hook-form'
import {FormDataTypes} from 'types'

export type FormProps = {
	register: UseFormRegister<FormDataTypes>
	errors: FieldErrors<FormDataTypes>
}