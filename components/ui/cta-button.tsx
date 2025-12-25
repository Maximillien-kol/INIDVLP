import type React from "react"
import Link from "next/link"
import { ArrowUpRight, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type CTAVariant = "primary" | "secondary" | "outline" | "ghost"
type CTASize = "sm" | "md" | "lg"
type IconPosition = "left" | "right"

interface CTAButtonProps {
  href?: string
  children: React.ReactNode
  /** Visual variant of the button. Defaults to 'primary' */
  variant?: CTAVariant
  /** Size of the button. Defaults to 'md' */
  size?: CTASize
  /** Custom icon component. Defaults to ArrowUpRight */
  icon?: LucideIcon
  /** Position of the icon. Defaults to 'right' */
  iconPosition?: IconPosition
  /** Whether to show icon. Defaults to true */
  showIcon?: boolean
  /** Opens link in new tab if true */
  external?: boolean
  /** Render as button instead of link */
  asButton?: boolean
  /** Button type when asButton is true */
  type?: "button" | "submit" | "reset"
  /** Click handler when asButton is true */
  onClick?: () => void
  className?: string
}

const variantStyles: Record<CTAVariant, string> = {
  primary: "text-white border-white hover:border-white/70",
  secondary: "text-[#1C1C1C] border-[#1C1C1C] hover:border-[#1C1C1C]/50",
  outline: "text-primary border-primary hover:border-primary/70",
  ghost: "text-[#1C1C1C] border-[#1C1C1C] hover:border-[#1C1C1C]/50",
}

const sizeStyles: Record<CTASize, string> = {
  sm: "text-sm pb-0.5 gap-1.5",
  md: "text-base pb-1 gap-2",
  lg: "text-lg pb-1.5 gap-2.5",
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon = ArrowUpRight,
  iconPosition = "right",
  showIcon = true,
  external = false,
  asButton = false,
  type = "button",
  onClick,
  className = "",
}: CTAButtonProps) {
  const buttonClasses = cn(
    "group inline-flex items-center font-medium border-b transition-colors",
    variantStyles[variant],
    sizeStyles[size],
    iconPosition === "left" && "flex-row-reverse",
    className
  )

  const iconSize = size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"

  const iconElement = showIcon && (
    <Icon
      className={cn(
        iconSize,
        "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
      )}
    />
  )

  if (asButton) {
    return (
      <button type={type} onClick={onClick} className={buttonClasses}>
        {children}
        {iconElement}
      </button>
    )
  }

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <Link href={href || "#"} className={buttonClasses} {...linkProps}>
      {children}
      {iconElement}
    </Link>
  )
}
