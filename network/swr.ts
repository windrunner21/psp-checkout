import useSWR from "swr";
import { getMerchant } from "./merchant";

export function useMerchant(publicKey: string) {
  const { data, isLoading, error } = useSWR(publicKey, getMerchant);

  return {
    merchant: data,
    isLoading,
    isError: error,
  };
}
