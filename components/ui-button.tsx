import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
        outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
        ghost: "hover:bg-blue-100 text-blue-500",
        link: "text-blue-500 underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 shadow-md hover:shadow-lg",
        white: "bg-white text-blue-500 hover:bg-blue-50 shadow-md hover:shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 rounded-md",
        lg: "h-12 px-6 rounded-lg text-base",
        xl: "h-14 px-8 rounded-lg text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  className?: string
}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return <ShadcnButton className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
