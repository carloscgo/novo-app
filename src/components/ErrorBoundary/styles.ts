import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const ErrorContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-retry {
    border: none;
    position: relative;
    top: 50px;
  }
`;

export const BG = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`

export default ErrorContainer;
