import { cn } from "@/lib/utils";

export type FilterOption = "all" | "connected" | "not-connected" | "error";

interface FilterTabsProps {
  value: FilterOption;
  onChange: (value: FilterOption) => void;
}

const tabs: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All" },
  { value: "connected", label: "Connected" },
  { value: "not-connected", label: "Not connected" },
  { value: "error", label: "Error" },
];

export function FilterTabs({ value, onChange }: FilterTabsProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            value === tab.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
