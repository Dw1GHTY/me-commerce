"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { SelectScrollable } from "../Select/search-filter";
import { useState } from "react";
import { TCategory } from "@/types/entities";
import { useQuery } from "@tanstack/react-query";

const SearchBar: React.FC = () => {
  const { data, isLoading, isError } = useQuery<Array<TCategory>>({
    queryKey: ["categories"],
    queryFn: async () => {
      const url = `${window.location.origin}/api/categories`;
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      } else {
        return await data;
      }
    },
  });
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };

  console.log("Selected filter:", selectedFilter);
  return (
    <div
      className="
      flex flex-row
      items-center gap-2 p-2 w-full max-w-xl
      rounded-md bg-background"
    >
      {isLoading ? (
        <div className="text-muted-foreground">Loading categories...</div>
      ) : (
        <SelectScrollable
          categories={data}
          onValueChange={handleFilterChange}
        />
      )}
      <Separator orientation="vertical" className="h-6 bg-accent" />

      {/* //TODO: Search input */}
      <div className="relative flex-1 w-3xl md:w-6xl">
        <Input
          type="text"
          placeholder="Search me-commerce"
          className="pl-4 pr-10"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      </div>
    </div>
  );
};

export default SearchBar;
