import axios from 'axios'
import {FormDataTypes} from 'types'

export const submitFormData = async (data: FormDataTypes): Promise<any> => {
	return await axios.post("/contact_form_data.json", data)
}