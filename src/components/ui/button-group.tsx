import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
      appearance: {
        // Merged: no gap, shared borders (segmented / continuous outer border)
        merged: "gap-0 has-[>[data-slot=button-group]]:gap-2",
        // Separate: gap, each button fully rounded (distinct action buttons)
        separate: "gap-2 has-[>[data-slot=button-group]]:gap-2",
      },
    },
    compoundVariants: [
      {
        appearance: "merged",
        orientation: "horizontal",
        class:
          "[&>*:only-child]:flex [&>*:only-child]:flex-row [&>*:only-child]:items-stretch [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none [&_button:not(:first-of-type)]:rounded-l-none [&_button:not(:first-of-type)]:border-l-0 [&_button:not(:last-of-type)]:rounded-r-none",
      },
      {
        appearance: "merged",
        orientation: "vertical",
        class:
          "[&>*:only-child]:flex [&>*:only-child]:flex-col [&>*:only-child]:items-stretch [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none [&_button:not(:first-of-type)]:rounded-t-none [&_button:not(:first-of-type)]:border-t-0 [&_button:not(:last-of-type)]:rounded-b-none",
      },
    ],
    defaultVariants: {
      orientation: "horizontal",
      appearance: "separate",
    },
  }
)

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>
>(function ButtonGroup({ className, orientation, appearance, ...props }, ref) {
  return (
    <div
      ref={ref}
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      data-appearance={appearance}
      className={cn(buttonGroupVariants({ orientation, appearance }), className)}
      {...props}
    />
  )
})

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "bg-muted shadow-xs flex items-center gap-2 rounded-md border px-4 text-sm font-medium [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

const ButtonGroupSeparator = React.forwardRef<
  React.ComponentRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(function ButtonGroupSeparator(
  { className, orientation = "vertical", ...props },
  ref
) {
  return (
    <Separator
      ref={ref}
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
})

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
