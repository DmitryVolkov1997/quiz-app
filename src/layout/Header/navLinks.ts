type Link = {
	id: number
	label: string
	to: string
}
export const navLinks: Link[] = [
	{id: 1, label: 'Регистрация', to: '/'},
	{id: 2, label: 'Пробное тестирование', to: '/quizzes'},
]