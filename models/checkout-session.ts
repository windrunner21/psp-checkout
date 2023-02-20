import { Customer } from "./customer";
import { CheckoutSessionStatus } from "./enums/checkout-session-status";
import { Currency } from "./enums/currency";
import { PaymentMode } from "./enums/payment-mode";
import { PaymentStatus } from "./enums/payment-status";
import { Item } from "./item";

export type CheckoutSession = {
  id: string;
  created: string;
  status: CheckoutSessionStatus;
  payment_status: PaymentStatus;

  customer?: Customer;
  items: Item[];
  success_url: string;
  mode: PaymentMode;
  cancel_url?: string;
  customer_email?: string;
  currency?: Currency;

  url: string;
  livemode: string;

  publicKey: string;
};
