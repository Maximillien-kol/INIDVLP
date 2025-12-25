import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

interface FooterLinkProps {
    href: string
    children: React.ReactNode
    external?: boolean
}

function FooterLink({ href, children, external = false }: FooterLinkProps) {
    const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {}

    return (
        <Link
            href={href}
            className="text-gray-300 hover:text-gray-100 transition-colors text-sm"
            {...linkProps}
        >
            {children}
        </Link>
    )
}

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a]  text-white">
            {/* Main Footer Content */}
            <div className="px-8 lg:px-16 pt-16 pb-8 mx-4 lg:mx-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-1">
                    {/* Left: Company Address and Logo */}
                    <div className="space-y-8 pb-30">
                        <div className="text-gray-400 text-sm leading-relaxed space-y-1">
                            <p className="font-semibold text-white mb-2">INI Development</p>
                            <p>Kigali city, Rwanda</p>
                            <p>Kanyinya, Nyarugenge district</p>
                        </div>

                        {/* Logo */}
                        <div>
                            <Image
                                src="/images/logo.png"
                                alt="INI Development Logo"
                                width={400}
                                height={400}
                                className="h-auto w-auto opacity-90"
                            />
                        </div>
                    </div>

                    {/* Right: Three Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-2">
                        {/* Company Column */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Company
                            </h3>
                            <nav className="flex flex-col gap-3">
                                <FooterLink href="/about">About</FooterLink>
                                <FooterLink href="/aboutus">About Us</FooterLink>
                                <FooterLink href="/services">Services</FooterLink>
                                <FooterLink href="/approach">Approach</FooterLink>
                                <FooterLink href="/contact">Contact</FooterLink>
                            </nav>
                        </div>

                        {/* Social Column */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Social
                            </h3>
                            <nav className="flex flex-col gap-3">
                                <FooterLink href="https://linkedin.com" external>
                                    LinkedIn
                                </FooterLink>
                                <FooterLink href="https://x.com" external>
                                    Instagram
                                </FooterLink>
                            </nav>
                        </div>

                        {/* Help Column */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Help
                            </h3>
                            <nav className="flex flex-col gap-3">
                                <FooterLink href="/terms">Terms & Conditions</FooterLink>
                                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright and Legal */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} INI Development. All Right Reserved.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <FooterLink href="/">ini</FooterLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
