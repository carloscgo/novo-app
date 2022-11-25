/**
 *
 * Tests for Loading
 *
 */

import Loading from '../index'

import { render } from '../../../../jest.setup'

describe('<Loading />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  const renderComponent = (show: boolean) => render(
    <Loading show={show} />
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent(true)

    expect(spy).not.toHaveBeenCalled()
  })

  it('expect without render', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent(false)

    expect(spy).not.toHaveBeenCalled()
  })
})
