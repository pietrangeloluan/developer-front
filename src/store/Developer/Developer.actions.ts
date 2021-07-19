import { DeveloperType } from '../../types/Developer.types'

export const types = Object.freeze({
  CREATE_DEVELOPER: '@developer/createDeveloper',
  DELETE_DEVELOPER: '@developer/deleteDeveloper',
  EDIT_DEVELOPER: '@developer/editDeveloper',
  FETCH_ALL: '@developer/fetchAll',
  FETCH_ONE: '@developer/fetchOne',
  SET_LOADING: '@developer/setLoading',
  SET_DEVELOPER: '@developer/setDeveloper',
  SET_DEVELOPERS: '@developer/setDevelopers'
})

export function fetchAll(
  { params = {} }: { params?: Record<string, any> } = { params: {} }
) {
  return { type: types.FETCH_ALL, payload: { params } }
}

export function setDevelopers({ developers = [] } = {}) {
  return { type: types.SET_DEVELOPERS, payload: { developers } }
}

export function createDeveloper(developer: DeveloperType) {
  return {
    type: types.CREATE_DEVELOPER,
    payload: developer
  }
}

export function fetchOne(id: string) {
  return {
    type: types.FETCH_ONE,
    payload: { id }
  }
}

export function setDeveloper({ developer = [] } = {}) {
  return { type: types.SET_DEVELOPER, payload: { developer, loading: false } }
}

export function editDeveloper(developer: DeveloperType) {
  return {
    type: types.EDIT_DEVELOPER,
    payload: developer
  }
}

export function deleteDeveloper({ id }) {
  return {
    type: types.DELETE_DEVELOPER,
    payload: id
  }
}

export function setLoading({ loading = false } = {}) {
  return { type: types.SET_LOADING, payload: { loading } }
}
