export type registerName = 'firstName' | 'lastName' | 'patronymic' | 'email' | 'phone' | 'birthday'

type InputData = {
	id: number
	name: registerName
	label: string
	type: 'text' | 'date' | 'search' | 'email' | 'tel' | 'number',
	registerOptions?: {
		required?: string | boolean,
		pattern?: {
			value?: RegExp,
			message?: string,
		},
		minLength?: {
			value?: number
			message?: string
		} | undefined,
		maxLength?: {
			value?: number
			message?: string
		} | undefined
	}
}

export const inputs: InputData[] = [
	{
		id: 1,
		name: "firstName",
		label: "Аты (Имя)*",
		type: "text",
		registerOptions: {
			required: "Обязательное поле",
			minLength: {
				value: 2,
				message: "Минимум 2 символа"
			}
		}
	},
	{
		id: 2,
		name: "lastName",
		label: "Тегі (Фамилия)*",
		type: "text",
		registerOptions: {
			required: "Обязательное поле",
			minLength: {
				value: 2,
				message: "Минимум 2 символа"
			}
		}
	},
	{
		id: 3,
		name: "patronymic",
		label: "Әкесінің аты (Отчество)",
		type: "text",
	},
	{
		id: 4,
		name: "email",
		label: "Email*",
		type: "email",
		registerOptions: {
			required: "Укажите Email",
			pattern: {
				value: /\S+@\S+\.\S+/,
				message: "Email адрес введен неверно"
			},
		}
	},
	{
		id: 5,
		name: "phone",
		label: "+77005550000*",
		type: "tel",
		registerOptions: {
			required: "Укажите номер телефона",
			maxLength: {
				value: 12,
				message:"Максимальная длина номера - 12 символов, начиная со знака '+'"
			},
			pattern: {
				value: /^\+[1-9]\d{10}$/,
				message: "Номер телефона введен неверно",
			},
		}
	},
	{
		id: 6,
		name: "birthday",
		label: "Дата рождения*",
		type: "date",
		registerOptions: {
			required: "Укажите дату рождения",
		}
	},
]