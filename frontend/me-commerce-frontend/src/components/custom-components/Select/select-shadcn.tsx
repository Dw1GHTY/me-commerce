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

//? Fetch all categories from the backend and pass here

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-1/3">
        <SelectValue
          className="w-1/2"
          defaultValue={"all"}
          defaultChecked
          // placeholder="Select a timezone"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectGroup>
          <SelectLabel>IT</SelectLabel>
          <SelectItem value="software">Software</SelectItem>
          <SelectItem value="hardware">Hardware</SelectItem>
          <SelectItem value="networking">Networking</SelectItem>
          <SelectItem value="cloud">Cloud Computing</SelectItem>
          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>Tools</SelectLabel>
          <SelectItem value="hand-tools">Hand Tools</SelectItem>
          <SelectItem value="power-tools">Power Tools</SelectItem>
          <SelectItem value="garden-tools">Garden Tools</SelectItem>
          <SelectItem value="measuring-tools">Measuring Tools</SelectItem>
          <SelectItem value="workshop-tools">Workshop Equipment</SelectItem>
          <SelectItem value="safety-tools">Safety Equipment</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
