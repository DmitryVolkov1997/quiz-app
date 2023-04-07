type EducationalProgram = {
	id: number
	name: string
	type: string
}

export type EducationalProgramResponse = {
	data: EducationalProgram[]
}