interface CreditDebitCardProps {
  expireMonth: string;
  expireYear: string;
  setFullName: (props: any) => void;
  setCardNumber: (props: any) => void;
  setExpireMonth: (props: any) => void;
  setExpireYear: (props: any) => void;
  setPassword: (props: any) => void;
  setCardAssociation: (props: any) => void;
}

export default CreditDebitCardProps;
