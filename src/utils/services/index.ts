/* eslint-disable @typescript-eslint/no-explicit-any */
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { startCase, camelCase } from 'lodash';

import { useInjectReducer } from '../store/injectReducer';
import { useInjectSaga } from '../store/injectSaga';
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

const pascalCase = (str: string): string => startCase(camelCase(str))

export {
  connect,
  createStructuredSelector,
  compose,
  useInjectReducer,
  useInjectSaga,
  searchRoute,
  mapError,
  DataService,
  pascalCase
}