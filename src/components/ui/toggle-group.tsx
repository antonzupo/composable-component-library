import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> | null
>(null)

type ToggleGroupRootProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  VariantProps<typeof toggleVariants> & {
    spacing?: 0 | 1 | 2 | 3
  }

const gapMap = { 0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3" } as const

const outlineGroupStyles = {
  horizontal:
    "gap-0 [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
  vertical:
    "gap-0 flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
} as const

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupRootProps
>(({ className, variant, size, spacing = 1, orientation, children, ...props }, ref) => {
  const isOutline = variant === "outline"
  const dir = orientation === "vertical" ? "vertical" : "horizontal"
  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      orientation={orientation}
      className={cn(
        "flex items-center justify-center",
        isOutline ? outlineGroupStyles[dir] : cn(gapMap[spacing ?? 1], orientation === "vertical" && "flex-col"),
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
})

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  const variantStyles = toggleVariants({
    variant: context?.variant ?? variant ?? "default",
    size: context?.size ?? size ?? "default",
  })

  if (context === null) {
    return (
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className={cn(toggleVariants({ variant: variant ?? "default", size: size ?? "default" }), className)}
        role="button"
      >
        {children}
      </span>
    )
  }

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(variantStyles, className)}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
