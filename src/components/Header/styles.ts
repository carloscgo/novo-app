import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

const Header = styled(Navbar)`
  background-color: var(--main-color);
  justify-content: space-between;
  width: 100% !important;

  a:not(.dropdown-item), .dropdown.show > a {
    color: var(--text-white);

    &:hover {
      color: var(--text-white);
    }
  }

  .brand * {
    font-style: 1.5rem;
    font-weight: 700;
    text-decoration: none;
  }

  .menu-user {
    display: block !important;
    width: 200px;
    flex-grow: 0;
    justify-content: flex-end;
  }

  .menu-bar {
    background-color: var(--bg-white) !important;
  }
`

export default Header