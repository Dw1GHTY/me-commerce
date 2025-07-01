import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  category: z.string().nullable(),
  price: z.coerce.number().nonnegative("Price must be positive"),
  discount: z.union([z.coerce.number().positive(), z.literal(null)]).optional(),
  stock: z.coerce.number().int("Stock must be an integer").nonnegative(),
});