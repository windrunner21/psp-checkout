import axios from "axios";
import { HOST, PORT, CONNECTION } from "../constants";
import { PaymentDetails } from "../models/payment-details";

export const completeCheckoutSession = (
  sessionId: string,
  payment_details: PaymentDetails
) =>
  axios
    .post(
      `${CONNECTION}://${HOST}:${PORT}/v1/checkout/session/${sessionId}/complete`,
      {
        ...payment_details,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => error.response.data);

export const getTransaction = (sessionId: string) =>
  axios
    .get(
      `${CONNECTION}://${HOST}:${PORT}/v1/transactions/${sessionId}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.data);
