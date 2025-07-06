import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "btn-base disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        secondary: "btn-secondary",
        text: "btn-text",
        // Legacy variants for compatibility
        default: "btn-primary",
        destructive: "bg-functional-error text-primary-white hover:bg-red-600 hover:scale-[1.02] focus:ring-functional-error",
        outline: "btn-secondary",
        ghost: "btn-text",
        link: "text-secondary-navy underline-offset-4 hover:underline bg-transparent px-2 py-1",
      },
      size: {
        default: "px-4 py-3",
        sm: "px-3 py-2 text-sm",
        lg: "px-6 py-4 text-lg",
        icon: "p-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 