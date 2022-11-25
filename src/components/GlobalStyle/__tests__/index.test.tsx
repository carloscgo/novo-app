/**
 *
 * Tests for GlobalStyle
 *
 */

import GlobalStyle from '../index'

import { render } from '../../../../jest.setup'


describe('<GlobalStyle />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  const renderComponent = () => render(
    <GlobalStyle />
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).not.toHaveBeenCalled()
  })
})
