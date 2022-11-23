

export interface IMenu {
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  age: number | string;
  gender: string;
}

export interface Props extends IMenu {
  id: number;
}
