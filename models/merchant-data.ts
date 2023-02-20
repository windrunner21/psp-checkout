export type MerchantData = {
  displayName: string;
  legalName: string;
  address: {
    address: string;
    city: string;
    postalCode: string;
  };
  logo?: string;
};
