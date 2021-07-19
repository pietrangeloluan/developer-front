import { call, put } from 'redux-saga/effects'

import { toasts } from 'utils/toasts'

import { DeveloperService } from '../../services'

import * as actions from './Developer.actions'

export function* fetchAll(action) {
  const { params } = action.payload

  const $developer = new DeveloperService()
  const fetchAll = $developer.fetchAll.bind($developer)
  const { success, status, data: developers } = yield call(fetchAll, { params })

  if (status === 404) {
    return yield put(actions.setDevelopers({ developers: [] }))
  } else if (!success) return

  if (success) yield put(actions.setDevelopers({ developers }))
}

export function* create(action) {
  const { payload } = action

  yield put(actions.setLoading({ loading: true }))

  const $developer = new DeveloperService()
  const developer = yield call($developer.create.bind($developer), { payload })

  if (developer.success) {
    toasts.created()
    return yield put(actions.fetchAll({}))
  }

  toasts.generalFail()
  yield put(actions.setLoading({ loading: false }))
}

export function* fetchOne(action) {
  const { id } = action.payload

  yield put(actions.setLoading({ loading: true }))

  const $developer = new DeveloperService()
  const developer = yield call($developer.fetchOne.bind($developer), id)

  if (developer.success) {
    return yield put(
      actions.setDeveloper({
        developer: developer.data
      })
    )
  }

  yield put(actions.setLoading({ loading: false }))
}

export function* edit(action) {
  const { payload } = action

  yield put(actions.setLoading({ loading: true }))

  const $developer = new DeveloperService()
  const { success } = yield call($developer.edit.bind($developer), payload)

  if (success) {
    toasts.edited()
    return yield put(actions.fetchAll({}))
  }

  toasts.generalFail()
  yield put(actions.setLoading({ loading: false }))
}

export function* deleteDeveloper(action) {
  const id = action.payload
  const $developer = new DeveloperService()

  const developer = yield call($developer.deleteDeveloper.bind($developer), {
    id
  })

  if (developer.success) {
    toasts.deleted()
    return yield put(actions.fetchAll())
  }
}
