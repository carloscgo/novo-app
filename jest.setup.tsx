/* eslint-disable @typescript-eslint/no-explicit-any */

import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent, act } from '@testing-library/react'
import { waitFor } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import history from './src/utils/store/history'
import { compose } from './src/utils/services'

const createMockReducer = (injectedReducers = {}) => combineReducers({
  router: connectRouter(history),
  ...injectedReducers
})

export const configureStore = (initialState: any, historyBrowser: any) => {
  const composeEnhancers = compose
  const reduxSagaMonitorOptions = {}

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(historyBrowser)]

  const enhancers = [applyMiddleware(...middlewares)]

  const store: any = createStore(
    createMockReducer(),
    initialState,
    composeEnhancers(...enhancers)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {} // Reducer registry
  store.injectedSagas = {} // Saga registry

  return store
}

const StoreWrapper = ({ children }: any) => {
  const store = configureStore({}, history)

  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}

const awaitPromise = () => new Promise(resolve => setTimeout(resolve, 0))

const mockError = { message: 'Test Error', code: 401 }

const setWindowProperty = (parent: any, property: any, value: any) => {
  Object.defineProperty(parent, property, {
    value,
    configurable: true,
    writable: true
  })
}

export {
  render,
  cleanup,
  fireEvent,
  act,
  waitFor,
  userEvent,
  StoreWrapper,
  Provider,
  BrowserRouter,
  awaitPromise,
  mockError,
  MemoryRouter,
  setWindowProperty,
}
