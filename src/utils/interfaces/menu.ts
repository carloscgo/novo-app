
import { IFunc } from './common'

export type IMenu = string | null

export type Props = Array<Props | IMenu>

export type TItem = {
  id: string,
  name: string,
  children: null | TItem[]
}

export interface CProps {
  items: TItem[];
  onClick: IFunc;
  selection: Omit<TItem, 'children'> | null;
}