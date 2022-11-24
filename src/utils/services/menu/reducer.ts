/*
 * menu reducer
 */

import produce from 'immer';
import { isArray, orderBy } from 'lodash';

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
import {
  pascalCase,
} from '../../services';

export const initialState = {
  loading: false,
  data: [],
}

type ACTION = {
  type: string,
  list: Array<PropsMenu>,
}
type DRAFT = {
  loading: boolean,
  data: Array<PropsMenu>,
}

export const recursive = (menu: any[], parentId: string, menuItems: any[] = []) => {
  menu.filter((element: any) => element).forEach((element: any, key: number) => {
    Object.keys(element).forEach((item: string | number, index: number) => {
      if (item) {
        const childrens = element[item]
        const id = `${parentId}-${index}-${key}`

        menuItems.push({
          id,
          name: pascalCase(item as string),
          children: isArray(childrens) && (Object.keys(childrens).length) ? recursive(childrens, id, menuItems[index]) : null
        })
      }
    })
  })

  return menuItems
}

const reducer = (state = initialState, action: ACTION) =>
  produce(state, (draft: DRAFT) => {
    switch (action.type) {
      case GET_MENU_ACTION_REQUEST:
        draft.loading = true
        break

      case GET_MENU_ACTION_SUCCESS:
        draft.loading = false
        draft.data = orderBy(recursive(action.list, '0'), ['name'], ['asc'])
        break

      case ACTION_ERROR:
        draft.loading = false
        break
    }
  });

export default reducer;
