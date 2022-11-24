/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * sagas
 */

import { all, put, takeLatest } from 'redux-saga/effects';

import { DataService, mapError } from '..';

/** ACTIONS */
import {
  getMenuSuccessAction,
} from './actions';
import {
  getErrorAction, cleanErrorAction
} from '../getError/actions';

/** CONSTANTS */
import {
  GET_MENU_ACTION_REQUEST,
} from './constants';

import {
  PropsMenu,
} from '../../../utils/interfaces';

/**
 * @param {Array<PropsMenu>} snapshot - Menu
 * @return {array} list
 */
export const setMenu = (snapshot: PropsMenu[]) => {
  const list: PropsMenu[] = []

  snapshot.forEach((doc: any) => {
    const menu = doc.data()

    list.push(menu)
  })

  return list
}

/**
 * @function getAll
 * @yields getMenuRequestAction / getErrorAction
 */
export function* getAll(): any {
  try {
    yield put(cleanErrorAction())

    const snapshot = yield DataService.getAll()

    const error = DataService.getError()

    if (error) {
      yield put(getErrorAction(error))
    }

    const list: PropsMenu[] = setMenu(snapshot)

    yield put(getMenuSuccessAction(list))
  } catch (err: unknown) {
    yield put(getErrorAction(mapError(err) as string))
  }
}

/**
 * @function watchGetMenuAction
 * @yields
 */
export function* watchGetMenuAction() {
  yield takeLatest(GET_MENU_ACTION_REQUEST as any, getAll)
}

/**
 * @function saga
 * @yields all actions required
 */
export default function* saga() {
  yield all([
    watchGetMenuAction(),
  ])
}
