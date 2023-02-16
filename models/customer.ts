import { Schema } from "../../../utils/schema";

export type Customer = {
  id: string;
  fullname?: string;
  phone?: string;
  email?: string;
  address?: string;
};

export const CustomerSchema: Schema = {
  fields: {
    id: "string",
    fullname: "string",
    phone: "string",
    email: "string",
    address: "string",
  },
  required: ["id"],
};
