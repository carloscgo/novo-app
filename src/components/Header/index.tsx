import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  PropsHeader
} from '../../utils/interfaces';
import { searchRoute } from '../../utils/services';
import NavHeader from './styles';
import Menu from "../Menu";

const Header = ({ brand, userName, menu }: PropsHeader) => {
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
          <Menu items={menu} onClick={(e) => console.log(e)} selection={null} />
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header