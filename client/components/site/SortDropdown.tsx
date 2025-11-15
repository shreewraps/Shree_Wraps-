import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";

export type SortOption = "none" | "price-asc" | "price-desc" | "name-asc" | "name-desc";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <ArrowUpDown className="h-4 w-4" />
        Sort by
      </div>
      <Select value={value} onValueChange={(val) => onChange(val as SortOption)}>
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">Default</SelectItem>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="name-asc">Alphabetical: A-Z</SelectItem>
          <SelectItem value="name-desc">Alphabetical: Z-A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
