type City = {
	name: string
	id: number
}

export type Region = City & {
	cities: City[]
}

