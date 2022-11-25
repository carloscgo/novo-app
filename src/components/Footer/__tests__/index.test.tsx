/**
 *
 * Tests for Footer
 *
 */

import Footer from '../index'

import { render } from '../../../../jest.setup'

const Logo = () => (<div></div>)
const logo = <Logo />

describe('<Footer />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { })
  })

  const renderComponent = () => render(
    <Footer copyright='copyright' logoLeft={logo} logoRight={logo} />
  )

  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error')

    renderComponent()

    expect(spy).not.toHaveBeenCalled()
  })
})
