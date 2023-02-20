import axios from "axios";
import { HOST, PORT, CONNECTION } from "../constants";

export const getMerchant = (publicKey: string) =>
  axios
    .get(`${CONNECTION}://${HOST}:${PORT}/v1/checkout/merchant/${publicKey}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
