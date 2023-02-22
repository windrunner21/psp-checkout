import axios from "axios";
import { HOST, PORT, CONNECTION } from "../constants";
import { CompleteCheckoutSession } from "../models/complete-checkout-session";

export const completeCheckoutSession = (
  sessionId: string,
  completeCheckoutSessionData: CompleteCheckoutSession
) =>
  axios
    .post(
      `${CONNECTION}://${HOST}:${PORT}/v1/checkout/session/${sessionId}/complete`,
      {
        payment_status: completeCheckoutSessionData.payment_status,
        payment_details: completeCheckoutSessionData.payment_details,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.data);

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
