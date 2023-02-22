import { PaymentStatus } from "./enums/payment-status";
import { PaymentDetails } from "./payment-details";

export type CompleteCheckoutSession = {
  payment_status: PaymentStatus;
  payment_details: PaymentDetails;
};
