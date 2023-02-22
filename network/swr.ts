import useSWR from "swr";
import { TransactionData } from "../models/transaction";
import { getMerchant } from "./merchant";
import { getTransaction } from "./payment";

export function useMerchant(publicKey: string) {
  console.log(publicKey);
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
