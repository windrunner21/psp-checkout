import { CardBrand } from "./enums/card-brand";

export type Card = {
  last4: string;
  exp_month: string;
  exp_year: string;
  name: string;
  brand: CardBrand;
};
