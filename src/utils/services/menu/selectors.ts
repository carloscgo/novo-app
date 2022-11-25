/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSelector } from 'reselect';

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

/**
 * @function makeDataSelector
 * @return {string} data from state
 */
export const makeDataSelector: any = () =>
  createSelector(
    selectDomain,
    substate => substate
  );