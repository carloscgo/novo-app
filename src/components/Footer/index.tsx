import DOMPurify from 'dompurify'
import {
  PropsFooter
} from '../../utils/interfaces';
import Container, { Logo, Copyright } from './styles';

const Footer = ({ copyright, logoLeft, logoRight }: PropsFooter) => {
  return (
    <Container fluid className="p-0">
      <Logo>{logoLeft}</Logo>
      <Copyright dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(copyright) }} />
      <Logo>{logoRight}</Logo>
    </Container>
  )
}

export default Footer