/**
 *
 * Tests for Toast
 *
 */

import Toast from '../index'

import { render } from '../../../../jest.setup'

describe('<Toast />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })


  const renderComponent = (open: boolean) => render(
    <Toast open={open} message="text" onClose={jest.fn()} />
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent(false)

    expect(spy).not.toHaveBeenCalled()
  })

  it('expect render with open toast', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent(true)

    expect(spy).not.toHaveBeenCalled()
  })
})
