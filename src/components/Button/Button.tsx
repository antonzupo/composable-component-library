import * as React from "react";

import { Button as UIButton, buttonVariants } from "@/components/ui/button";
import type { ButtonProps as UIButtonProps } from "@/components/ui/button";
import { ButtonGroupContext } from "@/components/ButtonGroup/ButtonGroup";

export type ButtonProps = UIButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant, ...props }, ref) {
    const group = React.useContext(ButtonGroupContext);
    const resolvedVariant = group?.buttonVariant ?? variant;
    return <UIButton ref={ref} variant={resolvedVariant} {...props} />;
  }
);

export { buttonVariants };
