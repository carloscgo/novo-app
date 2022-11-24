/* eslint-disable @typescript-eslint/no-explicit-any */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from '../injectReducer';
import { useInjectSaga } from '../injectSaga';
import routes from '../routes';
import DataService from './firebase';

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
  searchRoute,
  mapError,
  DataService
}