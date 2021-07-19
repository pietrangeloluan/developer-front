import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  StoreEnhancer
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, takeLatest } from 'redux-saga/effects'

import { tron } from 'config'

import { developer, developerActions, developerSagas } from './Developer'

export type RootState = {
  developer: ReturnType<typeof developer>
}

const saga = createSagaMiddleware()

function* rootSaga() {
  yield all([
    takeLatest(developerActions.types.CREATE_DEVELOPER, developerSagas.create),
    takeLatest(
      developerActions.types.DELETE_DEVELOPER,
      developerSagas.deleteDeveloper
    ),
    takeLatest(developerActions.types.EDIT_DEVELOPER, developerSagas.edit),
    takeLatest(developerActions.types.FETCH_ALL, developerSagas.fetchAll),
    takeLatest(developerActions.types.FETCH_ONE, developerSagas.fetchOne)
  ])
}

const rootReducer = combineReducers({
  developer
})

const rootEnhancer: StoreEnhancer = compose(
  ...[applyMiddleware(saga), tron.createEnhancer()].filter(e => e)
)

export const store = createStore(rootReducer, rootEnhancer)
saga.run(rootSaga)
