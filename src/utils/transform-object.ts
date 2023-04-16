import { FormDataTypes } from 'types'

export const transformObject = (data: FormDataTypes): FormDataTypes => {
	return {
		firstName: `${data.firstName
			.slice(0, 1)
			.toUpperCase()}${data.firstName.slice(1)}`,
		lastName: `${data.lastName.slice(0, 1).toUpperCase()}${data.lastName.slice(
			1
		)}`,
		patronymic: data.patronymic
			? `${data.patronymic.slice(0, 1).toUpperCase()}${data.patronymic.slice(
					1
			  )}`
			: 'не указано',
		email: data.email,
		phone: data.phone,
		birthday: data.birthday,
		created_at: new Date().toLocaleString(),
		status: data.status,
		region: data.region,
		city: data.city,
		institutionType: data.institutionType,
		educationInstitution: data.educationInstitution,
		formStudy: data.formStudy,
		educationalProgram: data.educationalProgram,
		achievement: data.achievement,
		formPayment: data.formPayment,
		language: data.language,
		consultant: data.consultant,
		question: data.question ? data.question : 'нет вопросов',
	}
}
