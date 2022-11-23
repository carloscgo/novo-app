

/*
 * getMenu actions
 */

import {
  GET_MENU_ACTION_REQUEST,
  GET_MENU_ACTION_SUCCESS,
} from './constants';
import {
  PropsMenu
} from '../../interfaces';

/**
 * @function getMenuRequestAction
 * @return {object} { type }
 */
export const getMenuRequestAction = () => ({
  type: GET_MENU_ACTION_REQUEST,
});

/**
 * @function getMenuSuccessAction
 * @param {Array<PropsMenu>} list - Menu
 * @return {object} { type, list }
 */
export const getMenuSuccessAction = (list: Array<PropsMenu>) => ({
  type: GET_MENU_ACTION_SUCCESS,
  list,
});
