import { Item } from "../../models/item";
import { MerchantData } from "../../models/merchant-data";

interface CheckoutProps {
  items: Item[];
  merchant: MerchantData;
  cancelUrl?: string;
}

export default CheckoutProps;
