import { Card } from "./card";

export type PaymentDetails = {
  card: Card;
  price: number;
  email: string;
  phone?: string;
};
