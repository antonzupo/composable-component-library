import * as React from "react";

import {
  ButtonGroup as ButtonGroupPrimitive,
  ButtonGroupSeparator as ButtonGroupSeparatorPrimitive,
} from "@/components/ui/button-group";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type ButtonGroupProps = Omit<Components["ButtonGroup"], "content"> & {
  children?: React.ReactNode;
};
export type ButtonGroupSeparatorProps = Components["ButtonGroupSeparator"];

export type ButtonGroupContextValue = {
  buttonVariant: Components["ButtonGroup"]["buttonVariant"];
};

export const ButtonGroupContext = React.createContext<ButtonGroupContextValue | null>(null);

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    {
      orientation,
      appearance,
      buttonVariant = "outline",
      ariaLabel,
      ariaLabelledby,
      className,
      id,
      children,
      ...rest
    },
    ref
  ) {
    return (
      <ButtonGroupContext.Provider value={{ buttonVariant }}>
        <ButtonGroupPrimitive
          ref={ref}
          orientation={orientation}
          appearance={appearance}
          aria-label={ariaLabel || undefined}
          aria-labelledby={ariaLabelledby || undefined}
          className={cn(className)}
          id={id || undefined}
          {...rest}
        >
          {children}
        </ButtonGroupPrimitive>
      </ButtonGroupContext.Provider>
    );
  }
);

export const ButtonGroupSeparator = React.forwardRef<
  React.ComponentRef<typeof ButtonGroupSeparatorPrimitive>,
  ButtonGroupSeparatorProps
>(function ButtonGroupSeparator({ orientation, className, ...rest }, ref) {
  return (
    <ButtonGroupSeparatorPrimitive
      ref={ref}
      orientation={orientation}
      className={cn(className)}
      {...rest}
    />
  );
});
