import { RefObject } from "react";

interface CardProps {
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
  cardHolderName: string;

  setCardNumber: (params: any) => void;
  setMonth: (params: any) => void;
  setYear: (params: any) => void;
  setCVC: (params: any) => void;
  setCardHolderName: (params: any) => void;

  cardNumberHasError: boolean;
  monthHasError: boolean;
  yearHasError: boolean;
  cvcHasError: boolean;
  cardHolderNameHasError: boolean;

  setCardNumberHasError: (params: any) => void;
  setMonthHasError: (params: any) => void;
  setYearHasError: (params: any) => void;
  setCVCHasError: (params: any) => void;
  setCardHolderNameHasError: (params: any) => void;

  emailRef?: RefObject<HTMLInputElement>;
}

export default CardProps;
