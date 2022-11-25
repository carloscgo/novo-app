
import { TItem } from './menu';
import { IFunc } from './common'

export interface Props {
  brand: string;
  userName: string;
  menu: TItem[];
  onSelect: IFunc
}