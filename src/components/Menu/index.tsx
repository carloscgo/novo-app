import isArray from 'lodash/isArray';
import {
  CProps, TItem
} from '../../utils/interfaces';
import { Link } from './styles';

const Menu = ({ items, onClick, selection }: CProps) => {
  return (
    <ul>
      {isArray(items) && items.map((item: TItem) =>
        <li key={item.id} className={(item.id === selection?.id ? 'selected' : null) as string}>
          <Link href="#" onClick={() => onClick(item)}>
            {item.name}
          </Link>

          {isArray(item.children) && item.children.length
            ? <Menu
              items={item.children}
              onClick={onClick}
              selection={selection}
            />
            : null}
        </li>
      )}
    </ul>
  )
}

export default Menu