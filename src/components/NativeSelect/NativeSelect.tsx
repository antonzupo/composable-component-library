import {
  NativeSelect as NativeSelectRoot,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/ui/native-select";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type NativeSelectProps = Components["NativeSelect"];

export function NativeSelect(props: NativeSelectProps) {
  const {
    optionMode,
    options,
    optionGroups,
    placeholder,
    defaultValue,
    disabled,
    size,
    className,
    id,
  } = props;

  const selectProps = {
    defaultValue: defaultValue || undefined,
    disabled,
    size,
    className: cn(className),
    id: id || undefined,
  };

  if (optionMode === "grouped" && optionGroups.length > 0) {
    return (
      <NativeSelectRoot {...selectProps}>
        {placeholder ? (
          <NativeSelectOption value="">{placeholder}</NativeSelectOption>
        ) : null}
        {optionGroups.map((group, gi) => (
          <NativeSelectOptGroup key={gi} label={group.groupLabel || "Group"}>
            {group.options.map((opt, oi) => (
              <NativeSelectOption key={oi} value={opt.value}>
                {opt.label}
              </NativeSelectOption>
            ))}
          </NativeSelectOptGroup>
        ))}
      </NativeSelectRoot>
    );
  }

  return (
    <NativeSelectRoot {...selectProps}>
      {placeholder ? (
        <NativeSelectOption value="">{placeholder}</NativeSelectOption>
      ) : null}
      {options.map((opt, i) => (
        <NativeSelectOption key={i} value={opt.value}>
          {opt.label}
        </NativeSelectOption>
      ))}
    </NativeSelectRoot>
  );
}
