import type React from "react"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
    /** URL to navigate to */
    href: string
    /** Button content */
    children: React.ReactNode
    /** Opens link in new tab if true */
    external?: boolean
    /** Additional className */
    className?: string
}

/**
 * ButtonLink - A unified component combining Button styling with Link navigation
 * 
 * Use this when you need a button that navigates to another page.
 * Automatically handles internal vs external links.
 * 
 * @example
 * ```tsx
 * <ButtonLink href="/about" variant="default" size="lg">
 *   Learn More
 * </ButtonLink>
 * 
 * <ButtonLink href="https://example.com" external variant="outline">
 *   Visit Site
 * </ButtonLink>
 * ```
 */
export function ButtonLink({
    href,
    children,
    external = false,
    variant = "default",
    size = "default",
    className,
}: ButtonLinkProps) {
    const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {}

    return (
        <Link
            href={href}
            className={buttonVariants({ variant, size, className })}
            {...linkProps}
        >
            {children}
        </Link>
    )
}
