import { Input } from "@/components/ui/input";
import React from "react";

const Searchbar = () => {
  return (
    <div className="flex w-lg md:w-2xl h-2/3">
      <Input
        className="bg-accent rounded-2xl size-full"
        placeholder="Search me-commerce"
      ></Input>
    </div>
  );
};

export default Searchbar;
