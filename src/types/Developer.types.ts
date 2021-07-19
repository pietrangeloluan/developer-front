export type DeveloperType = {
  age: number
  birthdate: Date
  createdAt?: Date
  hobby: string
  id?: string
  name: string
  sex: string
  updatedAt?: Date
}

export type PaginationType = {
  page: number
  perPage: number
  total: number
}

export type DevelopersType = {
  developers?: DeveloperType[]
  pagination?: PaginationType
}
