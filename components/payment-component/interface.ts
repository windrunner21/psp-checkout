import { Item } from "../../models/item";

interface PaymentProps {
  sessionId: string;

  totalPrice: number;
  setTotalPrice: (params: any) => void;

  cardNumber: string;
  setCardNumber: (params: any) => void;
  month: string;
  setMonth: (params: any) => void;
  year: string;
  setYear: (params: any) => void;
  cvc: string;
  setCVC: (params: any) => void;
  cardHolderName: string;
  setCardHolderName: (params: any) => void;
  email: string;
  setEmail: (params: any) => void;
  phone: string;
  setPhone: (params: any) => void;

  setPaymentResponse: (params: any) => void;
  setSuccess: (params: any) => void;

  setThreeDSecureModal: (params: any) => void;
}

export default PaymentProps;
