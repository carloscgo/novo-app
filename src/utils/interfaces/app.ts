
import { IFunc } from './common'
import { Props as PropsMenu } from './menu'

export interface Props {
  error: string;
  menu: {
    loading: boolean,
    data: PropsMenu
  };
  getMenuRequestActionHandler: IFunc;
}
