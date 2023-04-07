type EducationInstitution = {
	id: number
	name: string
	type: string
	cityId: number
}

export type EducationInstitutionResponse = {
	data: EducationInstitution[]
}