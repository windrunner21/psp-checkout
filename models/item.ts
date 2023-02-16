import { Schema } from "../../../utils/schema";

export interface Item {
  price: number;
  name: string;

  description?: string;
  image?: string;
}

export const ItemSchema: Schema = {
  fields: {
    price: "number",
    name: "string",

    description: "string",
    image: "string",
  },
  required: ["price", "name"],
};
