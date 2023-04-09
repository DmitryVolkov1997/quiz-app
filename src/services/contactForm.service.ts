import axios from 'axios'
import {FormDataTypes, FormDataTypesRus} from 'types'

export const submitFormData = async (data: FormDataTypesRus): Promise<any> => {
	return await axios.post("/contact_form_data.json", data)
}