import useSWR from "swr";
import { getMerchant } from "./merchant";
import { check3DSecureCheckoutSession, getTransaction } from "./payment";

export function useMerchant(publicKey: string) {
  const { data, isLoading, error } = useSWR(publicKey, getMerchant);

  return {
    merchant: data,
    isLoading,
    isError: error,
  };
}

export function useTransaction(transactionId: string) {
  const { data, isLoading, error } = useSWR(transactionId, getTransaction);

  return {
    transaction: data,
    isLoading,
    isError: error,
  };
}

export function useCheck3DSecure(sessionId: string, shouldFetch: boolean) {
  const { data, isLoading, error } = useSWR(
    shouldFetch ? sessionId : null,
    check3DSecureCheckoutSession,
    { refreshInterval: 1200 }
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
