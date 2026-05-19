import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-k-2 border border-rule bg-bg-input px-[14px] py-[11px] text-body-sm text-fg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-fg-mute transition-colors duration-hover ease-out-expo hover:border-k-rule-2 focus-visible:outline-none focus-visible:border-k-orange aria-[invalid=true]:border-[#E55353] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
