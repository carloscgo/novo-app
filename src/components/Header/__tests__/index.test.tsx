/**
 *
 * Tests for Header
 *
 */

import Header from '../index'

import { render, BrowserRouter, fireEvent } from '../../../../jest.setup'

describe('<Header />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  const renderComponent = () => render(
    <BrowserRouter>
      <Header brand="Brand" userName="Carlos Camacho" menu={[{
        id: '1',
        name: 'Item 1',
        children: []
      }]} onSelect={jest.fn()} />
    </BrowserRouter>
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).not.toHaveBeenCalled()
  })

  it('expect render with onSelect event', () => {
    const container = renderComponent()

    const onSelect = container.getByLabelText('link-menu-1')

    fireEvent.click(onSelect)

    expect(container.baseElement).toMatchSnapshot()
  })
})
