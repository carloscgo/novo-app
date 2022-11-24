import styled from 'styled-components';
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';

const Container = styled.div`
  width: 100%;
  height: 25px;
  background-color: var(--bg-white);
  display: flex;
  align-items: center;

  .item-width {
    min-width: 120px;
  }
`

const LinkMenu = styled(Link)`
  text-decoration: none !important;
  color: var(--text-black);
  border-bottom: 3px solid transparent;
  padding-bottom: 10px;

  &:hover {
    color: var(--text-black);
    border-bottom: 2px solid var(--main-color);
  }
`

const DropdownMenu = styled(NavDropdown)`
  text-decoration: none !important;
  color: var(--text-black);
  border-bottom: 2px solid transparent;
  padding-bottom: 10px;
  
  &:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu > div {
    flex-direction: column;
    height: auto;
  }

  &:hover {
    color: var(--text-black);
    border-bottom: 2px solid var(--main-color);
  }

  a {
    color: var(--text-black);
    
      &:hover {
      color: var(--text-black);
    }
  }

  .dropdown-toggle {
    padding-bottom: 0 !important;

    &::after {
      border-top: none !important;
    }
  }
`

export {
  Container,
  LinkMenu,
  DropdownMenu,
}