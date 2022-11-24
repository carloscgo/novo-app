import {
  PropsLogo
} from '../../utils/interfaces';
import Container from './styles';

const Logo = ({ width, height, image, ...props }: PropsLogo) => {
  return (
    <Container {...{ width, height, ...props }}>
      <img src={image} alt='Logo' />
    </Container>
  )
}

export default Logo