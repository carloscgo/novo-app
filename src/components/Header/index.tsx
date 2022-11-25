import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react'
import { Link } from "react-router-dom";
import {
  PropsHeader, TItem
} from '../../utils/interfaces';
import { searchRoute } from '../../utils/services';
import Menu from "../Menu";
import NavHeader from './styles';

const Header = ({ brand, userName, menu, onSelect }: PropsHeader) => {
  const [select, setSelect] = useState<Omit<TItem, 'children'>>({} as TItem)

  const handlerSelect = (e: TItem) => {
    setSelect(e)
    onSelect(e)
  }

  return (
    <Container fluid className="p-0">
      <NavHeader expand="lg">
        <Container>
          <Navbar.Brand className="brand">
            <Link to={searchRoute('home')}>{brand}</Link>
          </Navbar.Brand>

          <Navbar.Collapse className="menu-user" id="user-navbar-nav">
            <Nav>
              <NavDropdown title={userName}>
                <NavDropdown.Item href="#action">Action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavHeader>

      <Navbar className="menu-bar" expand="lg">
        <Container className="align-items-start">
          <Menu items={menu} onClick={handlerSelect} selection={select} />
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header