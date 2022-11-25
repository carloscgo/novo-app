/**
 *
 * Tests for Header
 *
 */

import Header from '../index'

import { render, BrowserRouter } from '../../../../jest.setup'

describe('<Header />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  const renderComponent = () => render(
    <BrowserRouter>
      <Header brand="Brand" userName="Carlos Camacho" menu={[]} />
    </BrowserRouter>
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).not.toHaveBeenCalled()
  })
})
