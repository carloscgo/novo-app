import Nav from 'react-bootstrap/Nav';
import isArray from 'lodash/isArray';
import {
  CProps, TItem
} from '../../utils/interfaces';
import { LinkMenu, DropdownMenu, Container } from './styles';

const Menu = ({ items, onClick, selection }: CProps) => {
  const hasChildren = (item: TItem) => isArray(item.children) && !!item.children.length

  return (
    <Container>
      {isArray(items) && items.map((item: TItem) =>
        <Nav key={item.id} className={`item-width align-items-start ` + (item.id === selection?.id ? 'selected' : null) as string}>
          {hasChildren(item) && (
            <DropdownMenu title={item.name} id={`${item.id}-nav-dropdown`} renderMenuOnMount={true}>
              <Menu
                items={item.children}
                onClick={onClick}
                selection={selection}
              />
            </DropdownMenu>
          )}

          {!hasChildren(item) && (
            <Nav.Link as='div'>
              <LinkMenu to="#" aria-label={`link-menu-${item.id}`} onClick={() => onClick(item)}>
                {item.name}
              </LinkMenu>
            </Nav.Link>
          )}
        </Nav>
      )}
    </Container>
  )
}

export default Menu