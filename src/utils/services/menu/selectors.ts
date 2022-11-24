/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';
import isInteger from 'lodash/isInteger';

import { initialState } from './reducer';

/**
 * Direct selector to the menu state domain
 */
type STATE = {
  menu: {
    loading: boolean | null,
    data: Array<any>,
  }
}

export const selectDomain = (state: STATE) => state.menu || initialState;

export const recursive = (menu: any, parentId: number, menuItems: any[] = []) => {
  if (isEmpty(menu) || !Object.keys(menu).length) {
    return
  }

  Object.keys(menu).forEach((item: string | number, index: number) => {
    const childrens = menu[item]

    menuItems.push({
      id: `${parentId}-${index}`,
      name: item,
      children: !isEmpty(childrens) && Object.keys(childrens).length ? recursive(childrens[index], index, menuItems[index]) : null
    })
  })

  return menuItems
}

/**
 * @function makeDataSelector
 * @return {string} data from state
 */
export const makeDataSelector: any = () =>
  createSelector(
    selectDomain,
    substate => {
      return {
        ...substate,
        data: recursive(substate.data || [], 0)
      }
    }
  );