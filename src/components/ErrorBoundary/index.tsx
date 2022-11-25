/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, Component } from "react";
import Button from "react-bootstrap/Button";

import Container, { BG } from './styles';

type Props = {
  children: ReactElement | HTMLElement | any
}
type State = {
  hasError: boolean
}

import image from '../../assets/error.svg'

export const retry = () => {
  window.location.reload()
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container fluid className="p-0">
          <BG style={{ backgroundImage: `url(${image})` }}>
            <Button variant="primary" size="lg" className="btn-retry" onClick={retry}>Retry again</Button>
          </BG>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary as React.ComponentClass<any>;