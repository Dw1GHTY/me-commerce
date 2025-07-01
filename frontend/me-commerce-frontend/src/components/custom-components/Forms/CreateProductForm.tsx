"use client";
import React, { useState } from "react";
import { createProductSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CreateProductForm = () => {
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
  const [showDiscount, setShowDiscount] = useState(false);
  const form = useForm({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      category: null,
      price: 0,
      discount: null,
      stock: 0,
    },
  });

  let categoryFetchTimer: NodeJS.Timeout | null = null;

  const fetchCategories = async (query: string) => {
    if (categoryFetchTimer) {
      clearTimeout(categoryFetchTimer);
    }
    categoryFetchTimer = setTimeout(async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/categories", {
          params: { q: query },
        });
        setCategoryOptions(res.data.map((c: any) => c.name));
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    }, 3000);
  };

  const handleCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    fetchCategories(input);
  };

  const onSubmit = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="flex flex-col w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Product Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label>Product Name</Label>
                <FormControl>
                  <Input placeholder="Placeholder..." {...field} />
                </FormControl>
                <FormDescription>
                  This name will be displayed in on-site and web search.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category (Search Dropdown) */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <Label>Category</Label>
                <FormControl>
                  <div>
                    <Input
                      placeholder="Search all categories"
                      onChange={(e) => {
                        field.onChange(null); // clear on input
                        handleCategoryInput(e);
                      }}
                    />
                    <div className="max-h-40 overflow-y-auto mt-1 border rounded-md bg-white shadow-sm">
                      {categoryOptions.map((cat, idx) => (
                        <div
                          key={idx}
                          onClick={() => form.setValue("category", cat)}
                          className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                        >
                          {cat}
                        </div>
                      ))}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <Label>Price</Label>
                <FormControl>
                  <Input type="number" placeholder="0.00 RSD" {...field} />
                </FormControl>
                <FormDescription>The price of your product</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Discount Toggle + Input */}
          {showDiscount ? (
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <Label>Discount (%)</Label>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter discount"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : null}

          <Button
            type="button"
            variant="outline"
            onClick={() => setShowDiscount(!showDiscount)}
          >
            {showDiscount ? "Remove Discount" : "Discount?"}
          </Button>

          {/* Stock */}
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <Label>Stock</Label>
                <FormControl>
                  <Input
                    className="w-1/5"
                    type="number"
                    placeholder="0"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  How much of this product you have in stock
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateProductForm;
