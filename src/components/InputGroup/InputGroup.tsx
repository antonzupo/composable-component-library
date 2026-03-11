import * as React from "react";
import {
  InputGroup as UIInputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { DynamicIcon } from "lucide-react/dynamic";
import type { Components } from "@/puck/types";

export type InputGroupAddonAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

export type InputGroupProps = Components["InputGroup"];

export function InputGroup({
  addonStart = "",
  addonEnd = "",
  addonStartAlign = "inline-start",
  addonEndAlign = "inline-end",
  addonStartType = "text",
  addonEndType = "text",
  addonStartIcon = "",
  addonEndIcon = "",
  placeholder = "Enter value...",
  type = "text",
  useTextarea = false,
  disabled = false,
  className,
  id,
}: InputGroupProps) {
  const hasStart =
    addonStartType === "icon"
      ? addonStartIcon != null && addonStartIcon.trim() !== ""
      : addonStart != null && addonStart.trim() !== "";
  const hasEnd =
    addonEndType === "icon"
      ? addonEndIcon != null && addonEndIcon.trim() !== ""
      : addonEnd != null && addonEnd.trim() !== "";

  const startAddonContent =
    addonStartType === "icon" && addonStartIcon ? (
      <DynamicIcon
        name={addonStartIcon as React.ComponentProps<typeof DynamicIcon>["name"]}
      />
    ) : (
      <InputGroupText>{addonStart}</InputGroupText>
    );

  const endAddonContent =
    addonEndType === "icon" && addonEndIcon ? (
      <DynamicIcon
        name={addonEndIcon as React.ComponentProps<typeof DynamicIcon>["name"]}
      />
    ) : (
      <InputGroupText>{addonEnd}</InputGroupText>
    );

  return (
    <UIInputGroup id={id} className={cn(className)}>
      {hasStart && (
        <InputGroupAddon align={addonStartAlign}>
          {startAddonContent}
        </InputGroupAddon>
      )}
      {useTextarea ? (
        <InputGroupTextarea
          placeholder={placeholder}
          disabled={disabled}
          rows={3}
        />
      ) : (
        <InputGroupInput
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
      {hasEnd && (
        <InputGroupAddon align={addonEndAlign}>{endAddonContent}</InputGroupAddon>
      )}
    </UIInputGroup>
  );
}
