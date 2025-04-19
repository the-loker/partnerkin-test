export interface IOrder {
  id: number;
  user_id: number;
  user_login: string;
  name: string;
  url: string;
  category_id: number;
  category_name: string;
  price: number;
  currency: string;
  price_format: string;
  dedline: string;
  publish_date: number;
  publish_date_format: string;
  text: string;
}
