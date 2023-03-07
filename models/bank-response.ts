import { PaymentStatus } from "./enums/payment-status";

export type BankDetails = {
  payment_status: PaymentStatus;
  approval_code?: string;
  rrn?: string;
  order_id?: string;
};
