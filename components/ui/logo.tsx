import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  variant?: "transparent" | "solid"
}

export function Logo({ className = "", variant = "transparent" }: LogoProps) {
  const logoSrc = variant === "solid" ? "/images/logo-b.svg" : "/images/logo-d-green.svg"

  return (
    <Link href="/" className={`${className}`}>
      <Image
        src={logoSrc}
        alt="INI Development Logo"
        width={80}
        height={30}
        className="h-auto w-auto"
      />
    </Link>
  )
}
