import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "INI Development Privacy Policy. Learn how we collect, use, and protect your information when you visit our website and use our services.",
    keywords: [
        "privacy policy",
        "data protection Rwanda",
        "privacy statement",
        "data security",
        "GDPR compliance",
        "personal information",
    ],
    alternates: {
        canonical: `${siteConfig.url}/privacy`,
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header variant="solid" />

            <main className="flex-1 bg-gray-50">
                <div className="max-w-4xl mx-auto px-8 lg:px-16 py-24 md:py-32">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-6">
                            Your Data Protection
                        </p>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#1C1C1C] mb-12">
                            Privacy
                            <br />
                            Policy
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            ini.rw ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16 bg-white p-8 md:p-12 rounded-sm">

                        {/* Information We Collect */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Information We Collect
                            </h2>

                            <h3 className="text-2xl font-light text-[#1C1C1C] mb-4 mt-8">
                                Personal Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Contact us through our contact form</li>
                                <li>Suggest new platforms through our suggestion form</li>
                                <li>Subscribe to our newsletters or updates</li>
                                <li>Use our various platform services</li>
                            </ul>

                            <h3 className="text-2xl font-light text-[#1C1C1C] mb-4 mt-8">
                                Automatically Collected Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                When you visit our website, we may automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, referring URLs, and pages viewed.
                            </p>
                        </section>

                        {/* How We Use Your Information */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                How We Use Your Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Provide, operate, and maintain our services</li>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Send you updates about our platforms and services</li>
                                <li>Improve our website and services</li>
                                <li>Analyze usage patterns and trends</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        {/* Cookies and Tracking */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Cookies and Tracking Technologies
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us remember your preferences, analyze site traffic, and provide personalized content. You can control cookie settings through your browser preferences.
                            </p>
                        </section>

                        {/* Third-Party Services */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Third-Party Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our website may integrate with third-party services, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Google Analytics for website analytics</li>
                                <li>Google AdSense for advertising</li>
                                <li>Email service providers for communications</li>
                                <li>Hosting and content delivery services</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                These third parties have their own privacy policies, and we encourage you to review them.
                            </p>
                        </section>

                        {/* Data Security */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Data Security
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Your Rights
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Access your personal information</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your information</li>
                                <li>Object to processing of your information</li>
                                <li>Withdraw consent where applicable</li>
                            </ul>
                        </section>

                        {/* Children's Privacy */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Children's Privacy
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                            </p>
                        </section>

                        {/* Changes to Policy */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Changes to This Policy
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="border-t border-gray-200 pt-8 mt-12">
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Contact Us
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Email:</strong> contact@ini.rw</p>
                                <p><strong>Address:</strong> Kigali, Rwanda, Nyarugenge district</p>
                            </div>
                        </section>

                        {/* Last Updated */}
                        <div className="text-center pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                Last Updated: December 25, 2025
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
