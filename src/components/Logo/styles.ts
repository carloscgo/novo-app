import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import {
  IStyle
} from '../../utils/interfaces';

const Logo = styled(Container)`
  width: ${(props: IStyle) => `${props.width}px`};
  height: ${(props: IStyle) => `${props.height}px`};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
  }
`

export default Logo