import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TCategory } from "@/types/entities";

interface SelectScrollableProps {
  categories?: Array<TCategory>;
  onValueChange: (value: string) => void;
}

export const SelectScrollable: React.FC<SelectScrollableProps> = ({
  categories,
  onValueChange,
}) => {
  return (
    <Select defaultValue="all" onValueChange={onValueChange}>
      <SelectTrigger className="w-1/3">
        <SelectValue className="w-1/2" defaultValue={"all"} defaultChecked />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectGroup>
          <SelectLabel>Dynamic Label</SelectLabel>
          {categories?.map((category) => (
            <SelectItem key={category.id} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
