export type EducationalInstitutions = {
	id: number
	name: string
	type: string
	cityId: number
}

export type EducationalInstitutionsResponse = {
	data: EducationalInstitutions[]
}
