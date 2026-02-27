"use client";

import * as React from "react";
import { Input as UIInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export function Input({
  type = "text",
  placeholder,
  defaultValue,
  disabled = false,
  className,
  id,
}: InputProps) {
  return (
    <UIInput
      id={id}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      className={cn(className)}
    />
  );
}
