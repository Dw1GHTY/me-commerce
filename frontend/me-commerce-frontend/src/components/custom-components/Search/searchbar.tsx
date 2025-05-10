"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { SelectScrollable } from "../Select/search-filter";
import { useState } from "react";

export default function SearchBar() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };
  console.log(selectedFilter);
  return (
    <div
      className="
      flex flex-row
      items-center gap-2 p-2 w-full max-w-xl
      rounded-md bg-background"
    >
      <SelectScrollable onValueChange={handleFilterChange} />

      <Separator orientation="vertical" className="h-6 bg-accent" />

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
}
