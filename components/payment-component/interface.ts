import { Item } from "../../models/item";

interface PaymentProps {
  items: Item[];
  sessionId: string;

  setPaymentResponse: (params: any) => void;
  setSuccess: (params: any) => void;
}

export default PaymentProps;
