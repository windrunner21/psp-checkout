import axios from "axios";
import { HOST, PORT, CONNECTION } from "../constants";
import { BankDetails } from "../models/bank-response";
import { ThreeDSecureStatus } from "../models/enums/three-d-secure-status";
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

export const check3DSecureCheckoutSession = (sessionId: string) =>
  axios
    .get(
      `${CONNECTION}://${HOST}:${PORT}/v1/checkout/session/${sessionId}/three_d_secure`
    )
    .then((response) => response.data)
    .catch((error) => error.response.data);

export const checkCompleted3DSecureCheckoutSession = (bankOrderId: string) =>
  axios
    .get(
      `${CONNECTION}://${HOST}:${PORT}/v1/checkout/session/${bankOrderId}/three_d_secure/completed`
    )
    .then((response) => response.data)
    .catch((error) => error.response.data);

export const complete3DSecureCheckoutSession = (
  sessionId: string,
  payment_details: PaymentDetails,
  bank_response_details: BankDetails,
  three_d_secure: ThreeDSecureStatus
) =>
  axios
    .post(
      `${CONNECTION}://${HOST}:${PORT}/v1/checkout/session/${sessionId}/three_d_secure/${three_d_secure}/complete`,
      {
        payment_details: payment_details,
        bank_response_details: bank_response_details,
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
