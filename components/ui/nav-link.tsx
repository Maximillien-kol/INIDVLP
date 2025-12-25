import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "transparent" | "solid"
}

export function NavLink({ href, children, className = "", onClick, variant = "transparent" }: NavLinkProps) {
  const isTransparent = variant === "transparent"
  const textColorClasses = isTransparent
    ? "text-white/90 hover:text-white"
    : "text-[#1C1C1C]/90 hover:text-[#1C1C1C]"

  return (
    <Link
      href={href}
      className={cn("text-sm transition-colors", textColorClasses, className)}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
