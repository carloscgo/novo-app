/**
 *
 * Tests for Logo
 *
 */

import Logo from '../index'

import { render } from '../../../../jest.setup'

describe('<Logo />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })


  const renderComponent = () => render(
    <Logo width={100} height={100} image='../../../assets/react.svg' />
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).not.toHaveBeenCalled()
  })
})
