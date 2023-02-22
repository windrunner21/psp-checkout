import moment from "moment";

export const formatDate = (value: string) => {
  return moment(value).format("DD/MM/YYYY");
};

export const formatTime = (value: string) => {
  return moment(value).format("HH:mm");
};
