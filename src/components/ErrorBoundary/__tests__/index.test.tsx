/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 *
 * Tests for ErrorBoundary
 *
 */

import ErrorBoundary, { retry } from '../index'

import configureStore from '../../../utils/store/configureStore'
import { Provider, render, setWindowProperty } from '../../../../jest.setup'

jest.mock('../../../assets/error.svg', () => ({
  __esModule: true,

  default: (...props: any) => <div {...props}></div>
}))

describe('<ErrorBoundary />', () => {
  let store: any

  beforeAll(() => {
    store = configureStore({}, { history })

    jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  const renderComponent = (LazyComponent: JSX.IntrinsicAttributes | any) => render(
    <Provider store={store} >
      <ErrorBoundary>
        <LazyComponent />
      </ErrorBoundary>
    </Provider>
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    const LazyComponent = () => <div />

    renderComponent(LazyComponent)

    expect(spy).not.toHaveBeenCalled()
  })

  it('expect to log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent('')

    expect(spy).toHaveBeenCalled()
  })

  it('expect event to retry method', () => {
    const reload = jest.fn()

    setWindowProperty(window, 'location', {
      reload
    })

    retry()

    expect(reload).toHaveBeenCalled()
  })
})
