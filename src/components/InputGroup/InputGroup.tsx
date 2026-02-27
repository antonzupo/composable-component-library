"use client";

import * as React from "react";
import {
  InputGroup as UIInputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export type InputGroupAddonAlign =
  | "inline-start"
  | "inline-end"
  | "block-start"
  | "block-end";

export interface InputGroupProps {
  addonStart?: string;
  addonEnd?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  useTextarea?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export function InputGroup({
  addonStart,
  addonEnd,
  placeholder = "Enter value...",
  type = "text",
  useTextarea = false,
  disabled = false,
  className,
  id,
}: InputGroupProps) {
  const hasStart = addonStart != null && addonStart.trim() !== "";
  const hasEnd = addonEnd != null && addonEnd.trim() !== "";

  return (
    <UIInputGroup id={id} className={cn(className)}>
      {hasStart && (
        <InputGroupAddon align="inline-start">
          <InputGroupText>{addonStart}</InputGroupText>
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
        <InputGroupAddon align="inline-end">
          <InputGroupText>{addonEnd}</InputGroupText>
        </InputGroupAddon>
      )}
    </UIInputGroup>
  );
}
