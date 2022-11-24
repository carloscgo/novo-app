/*
 * menu reducer
 */

import produce from 'immer';

import {
  GET_MENU_ACTION_REQUEST,
  GET_MENU_ACTION_SUCCESS,
} from './constants';

import {
  ACTION_ERROR
} from '../getError/constants';
import {
  PropsMenu,
} from '../../interfaces';

export const initialState = {
  loading: false,
  data: [],
  message: null
}

type ACTION = {
  type: string,
  list: Array<PropsMenu>,
  message: string,
}
type DRAFT = {
  loading: boolean,
  data: Array<PropsMenu>,
  message: string | null,
}

const reducer = (state = initialState, action: ACTION) =>
  produce(state, (draft: DRAFT) => {
    switch (action.type) {
      case GET_MENU_ACTION_REQUEST:
        draft.loading = true
        draft.message = null
        break

      case GET_MENU_ACTION_SUCCESS:
        draft.loading = false
        draft.data = action.list
        break

      case ACTION_ERROR:
        draft.loading = false
        break

      default:
        return initialState
    }
  });

export default reducer;
