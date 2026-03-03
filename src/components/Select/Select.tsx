import {
  Select as SelectRoot,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";
import * as React from "react";

export type SelectProps = Components["Select"];

export function Select({
  defaultValue,
  value,
  disabled,
  required,
  name,
  dir,
  triggerClassName,
  placeholder,
  position,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
  collisionPadding,
  hideWhenDetached,
  contentClassName,
  optionMode,
  options,
  optionGroups,
  separatorBetweenGroups,
  className,
  id,
}: SelectProps) {
  const rootValue = value !== "" ? value : undefined;
  const rootDefaultValue = defaultValue !== "" ? defaultValue : undefined;

  const rootProps = {
    value: rootValue,
    defaultValue: rootDefaultValue,
    disabled,
    required,
    name: name || undefined,
    dir: dir !== "ltr" ? dir : undefined,
  };

  const contentProps = {
    position,
    side,
    sideOffset,
    align,
    alignOffset,
    avoidCollisions,
    collisionPadding,
    hideWhenDetached,
    className: contentClassName || undefined,
  };

  // Radix Select.Item forbids empty string value; use a sentinel for new/empty options.
  const itemValue = (v: string, fallback: string) => (v.trim() !== "" ? v : fallback);

  return (
    <div className={cn("w-full", className)} id={id || undefined}>
      <SelectRoot {...rootProps}>
        <SelectTrigger className={triggerClassName || undefined}>
          <SelectValue placeholder={placeholder || "Select…"} />
        </SelectTrigger>
        <SelectContent {...contentProps}>
          {optionMode === "grouped" && optionGroups.length > 0 ? (
            <>
              {optionGroups.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  <SelectGroup>
                    <SelectLabel>{group.groupLabel || "Group"}</SelectLabel>
                    {(group.options ?? []).map((opt, optIndex) => (
                      <SelectItem
                        key={optIndex}
                        value={itemValue(opt.value, `__option-${groupIndex}-${optIndex}`)}
                        disabled={opt.disabled}
                        textValue={opt.label}
                      >
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  {separatorBetweenGroups && groupIndex < optionGroups.length - 1 && (
                    <SelectSeparator />
                  )}
                </React.Fragment>
              ))}
            </>
          ) : (
            (options ?? []).map((opt, index) => (
              <SelectItem
                key={index}
                value={itemValue(opt.value, `__option-${index}`)}
                disabled={opt.disabled}
                textValue={opt.label}
              >
                {opt.label}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </SelectRoot>
    </div>
  );
}
