/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from '../injectReducer';
import { useInjectSaga } from '../injectSaga';
import routes from '../routes';
import DataService from './firebase';

const setStorage = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));
const getStorage = (key: string, def?: any) => JSON.parse(localStorage.getItem(key) as string) || def;

const searchRoute = (slug: string) => routes.find((route: any) => route.slug === slug)?.path as string

const mapError = (e: unknown) => {
  if (typeof e === "string") {
    return e.toUpperCase()
  } else if (e instanceof Error) {
    return e.message
  }
}

export {
  connect,
  createStructuredSelector,
  compose,
  useInjectReducer,
  useInjectSaga,
  setStorage,
  getStorage,
  searchRoute,
  mapError,
  DataService
}