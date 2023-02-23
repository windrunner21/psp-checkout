import { CardBrand } from "./enums/card-brand";

export type Card = {
  number: string;
  exp_month: string;
  exp_year: string;
  cvc: string;
  name: string;
  brand: CardBrand;
};
