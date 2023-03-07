import axios from "axios";

export const collectCardHolderBrowserInfo = (url: string) =>
  axios
    .post(`${url}`)
    .then((response) => response.data)
    .catch((error) => error.response.data);

export const receiveOTP = (url: string, data: string) =>
  axios.post(`${url}`, {});
