/**
 *
 * Tests for App
 *
 */

import { StoreWrapper, render, fireEvent } from '../../../../jest.setup'

import { App, mapDispatchToProps } from '../index'

import {
  getMenuRequestAction,
} from '../../../utils/services/menu/actions';

jest.mock('../../../assets/react.svg', () => ({
  __esModule: true,

  default: (...props: any) => <div {...props}></div>
}))

jest.mock('../../../components', () => ({
  __esModule: true,

  Toast: (...props: any) => <div aria-label='onClose-action' {...props} onClick={props.onClose} />,
  Header: (...props: any) => <div {...props}></div>,
  Footer: (...props: any) => <div {...props}></div>,
  Logo: (...props: any) => <div {...props}></div>,
  Loading: (...props: any) => <div {...props}></div>,
}))

const getMenuRequestActionHandler = jest.fn()

describe('<App />', () => {
  const renderComponent = (...props: any) => render(
    <StoreWrapper>
      <App {...props} getMenuRequestActionHandler={getMenuRequestActionHandler} />
    </StoreWrapper>
  )

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  it('Expect to not log errors in console', () => {
    const container = renderComponent({
      menu: {
        loading: false,
        data: [{
          id: '1',
          name: 'Item 1',
          children: []
        }]
      }
    })

    expect(container.baseElement).toMatchSnapshot()
  })

  it('Expect render with loading', () => {
    const container = renderComponent({
      menu: {
        loading: true,
        data: []
      }
    })

    expect(container.baseElement).toMatchSnapshot()
  })

  it('Expect event onClose for Toast', () => {
    const container = renderComponent()

    const onClose = container.getByLabelText('onClose-action')

    fireEvent.click(onClose)

    expect(container.baseElement).toMatchSnapshot()
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn((cb) => cb)

    const DispatchToProps = mapDispatchToProps(dispatch)

    DispatchToProps.getMenuRequestActionHandler()

    expect(dispatch).toHaveBeenCalledWith(getMenuRequestAction())
  })
})
