/**
 *
 * Tests for Menu
 *
 */

import Menu from '../index'

import { render, BrowserRouter, fireEvent, act } from '../../../../jest.setup'

describe('<Menu />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  const onClick = jest.fn()

  const items = [{
    id: '1',
    name: 'item 1'
  }, {
    id: '2',
    name: 'item 2',
    children: [{
      id: '3',
      name: 'item 3'
    }]
  }]

  const renderComponent = (items: any[], selection: any = null) => render(
    <BrowserRouter>
      <Menu items={items} onClick={onClick} selection={selection} />
    </BrowserRouter>
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent([])

    expect(spy).not.toHaveBeenCalled()
  })

  it('expect render with items', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent(items)

    expect(spy).not.toHaveBeenCalled()
  })

  it('expect render with onClick event', () => {
    const container = renderComponent(items)

    const onClick = container.getByLabelText('link-menu-1')

    fireEvent.click(onClick)

    expect(container.baseElement).toMatchSnapshot()
  })

  it('expect render with selected item', () => {
    const container = renderComponent(items, items[0])

    expect(container.baseElement).toMatchSnapshot()
  })
})
