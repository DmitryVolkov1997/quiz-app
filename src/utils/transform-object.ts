import {FormDataTypes, FormDataTypesRus} from 'types'

export const transformObject = (data: FormDataTypes): FormDataTypesRus => {
	return {
		"Имя": data.firstName,
		"Фамилия": data.lastName,
		"Отчество": data.patronymic,
		"Email": data.email,
		"Телефон": data.phone,
		"Год рождения": data.birthday,
		"Социальный статус": data.statuses,
		"Регион": data.regions,
		"Город": data.cities,
		"Вид учебного заведения": data.institutionType,
		"Учебное заведение": data.educationInstitution,
		"Форма обучения": data.formStudy,
		"Образовательная программа": data.educationalProgram,
		"Награды и достижения": data.achievement,
		"Форма оплаты": data.formPayment,
		"Язык обучения": data.language,
		"Кафедра консультант": data.consultant,
		"Вопрос": data.question,
	}
}