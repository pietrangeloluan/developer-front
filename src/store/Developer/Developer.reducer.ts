import { get } from 'lodash'
import { DeveloperType, DevelopersType } from 'types/Developer.types'

import { types } from './Developer.actions'

type Developer = {
  loading: Boolean
  developer?: DeveloperType
  developers?: DevelopersType
}

const INITIAL_STATE = {
  loading: false,
  developer: {} as DeveloperType,
  developers: [] as DevelopersType
}

function setState(state: Developer) {
  return function _handle(payload: Record<string, any>) {
    return { ...state, ...payload }
  }
}

export default function _reducer(state = INITIAL_STATE, { type, payload }) {
  const _handlers = {
    [types.SET_LOADING]: setState(state),
    [types.SET_DEVELOPER]: setState(state),
    [types.SET_DEVELOPERS]: setState(state),
    _default: () => state
  }

  return get(_handlers, type, _handlers._default)(payload)
}
