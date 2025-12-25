"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { NavLink } from "@/components/ui/nav-link"
import { cn } from "@/lib/utils"

export interface NavItem {
  label: string
  href: string
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
]

interface HeaderProps {
  /** Navigation items to display. Defaults to standard navigation */
  navItems?: NavItem[]
  /** Header background variant. 'transparent' for hero sections, 'solid' for inner pages */
  variant?: "transparent" | "solid"
  /** Custom logo component. Defaults to standard Logo */
  logo?: React.ReactNode
  /** Additional className for the header */
  className?: string
}

export function Header({
  navItems = defaultNavItems,
  variant = "transparent",
  logo,
  className,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (variant !== "transparent") return

    const handleScroll = () => {
      // Change header when scrolled past 500px (roughly where hero section ends)
      setIsScrolled(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [variant])

  const isTransparentAndNotScrolled = variant === "transparent" && !isScrolled
  const shouldBeWhite = variant === "solid" || (variant === "transparent" && isScrolled)

  const headerClasses = cn(
    "top-0 left-0 right-0 z-50 py-6 transition-all duration-300",
    variant === "transparent" ? "fixed" : "sticky",
    isTransparentAndNotScrolled ? "bg-transparent" : "bg-white shadow-sm",
    className
  )

  const textVariant = isTransparentAndNotScrolled ? "transparent" : "solid"
  const buttonColor = isTransparentAndNotScrolled
    ? "text-white hover:text-white/70"
    : "text-[#1C1C1C] hover:text-gray-600"

  return (
    <header className={headerClasses}>
      <div className="flex items-center justify-between px-8 lg:px-16 mx-4 lg:mx-[100px]">
        {/* Logo */}
        {logo || <Logo variant={textVariant} />}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              variant={textVariant}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden transition-colors", buttonColor)}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-6 flex flex-col gap-4 pb-6 px-8 lg:px-16 mx-4 lg:mx-[100px]">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              variant={textVariant}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
