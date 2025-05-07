import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react"; // lucide-react icons, also used by shadcn
import { SelectScrollable } from "../Select/select-shadcn";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-background w-full max-w-xl">
      <SelectScrollable />

      <Separator orientation="vertical" className="h-6" />

      <div className="relative flex-1">
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
