import * as React from "react";
import { Combobox as UICombobox } from "@/components/ui/combobox";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  options?: ComboboxOption[];
  value?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export function Combobox({
  options = [],
  value = "",
  placeholder = "Select option...",
  searchPlaceholder = "Search option...",
  emptyText = "No option found.",
  disabled = false,
  className,
  id,
}: ComboboxProps) {
  const [internalValue, setInternalValue] = React.useState(value);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <div id={id || undefined}>
      <UICombobox
        options={options}
        value={internalValue}
        onValueChange={setInternalValue}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        emptyText={emptyText}
        disabled={disabled}
        className={className}
      />
    </div>
  );
}
