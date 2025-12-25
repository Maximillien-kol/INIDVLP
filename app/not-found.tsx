import type { Metadata } from 'next'
import Image from 'next/image'
import { CTAButton } from '@/components/ui/cta-button'
import { siteConfig } from '@/lib/seo-config'

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found. Return to INI Development homepage or explore our services.',
    robots: {
        index: false,
        follow: true,
    },
}

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Centered 404 Content */}
            <div className="flex-1 flex items-center justify-center">
                <div className="max-w-1xl w-full text-center px-4">
                    {/* 404 Text */}
                    <h1 className="text-9xl font-bold text-gray-900">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton
                            href="/"
                            variant="ghost"
                            size="md"
                        >
                            BACK TO HOME
                        </CTAButton>
                        <CTAButton
                            href="/services"
                            variant="ghost"
                            size="md"
                        >
                            VIEW SERVICES
                        </CTAButton>
                    </div>
                </div>
            </div>

            {/* SEO-friendly internal links - At Bottom */}
            <div className="py-8 px-4">
                <div className="border-t border-gray-200 pt-8 text-center">
                    <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <a href="/aboutus" className="text-gray-600 hover:text-gray-900">About Us</a>
                        <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
                        <a href="/approach" className="text-gray-600 hover:text-gray-900">Our Approach</a>
                        <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
