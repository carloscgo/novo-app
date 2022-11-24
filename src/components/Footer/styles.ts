import styled, { css } from 'styled-components';
import Container from 'react-bootstrap/Container';

const center = css`
  display: flex;
  align-items: center;  
  justify-content: center; 
`

const Footer = styled(Container)`
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100% !important;
`

export const Logo = styled.div`
  width: 30%;
  min-width: 120px;
  ${center} 
`

export const Copyright = styled.div`
  width: auto;
  flex-grow: 1;
  min-width: 200px;
  color: var(--text-white);
  ${center} 
`

export default Footer