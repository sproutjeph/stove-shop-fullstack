export interface CartItem {
  id: string | number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

export interface IUserRegData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}
