export type Size = string | number

export interface IStyle {
  width: Size;
  height: Size;
}

export interface Props extends IStyle {
  image: string;
  props?: object | undefined;
}
