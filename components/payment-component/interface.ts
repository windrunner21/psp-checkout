interface PaymentProps {
  sessionId: string;

  setPaymentResponse: (params: any) => void;
  setSuccess: (params: any) => void;
}

export default PaymentProps;
