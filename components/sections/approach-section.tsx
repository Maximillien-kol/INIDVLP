"use client"

import Image from "next/image"
import { CTAButton } from "@/components/ui/cta-button"

interface StatCardProps {
    number: string
    label: string
    prefix: string
}

function StatCard({ number, label, prefix }: StatCardProps) {
    return (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                #{prefix}
            </div>
            <div className="text-5xl md:text-6xl font-light text-[#1C1C1C] mb-2">
                {number}
            </div>
            <div className="text-sm uppercase tracking-wide text-gray-600">
                {label}
            </div>
        </div>
    )
}

export function ApproachSection() {
    return (
        <section className="bg-white px-8 lg:px-16 py-20 mx-4 lg:mx-[100px]">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                {/* Left Column: Illustration */}
                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-lg">
                        <Image
                            src="/pic.jpg"
                            alt="Architectural blueprint illustration"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="flex flex-col justify-center">
                    {/* Headline */}
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1C1C1C] leading-tight mb-6">
                        <span className="text-gray-300">We are digital</span>
                        <br />
                        <span className="text-gray-300">Development Partner</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-2 max-w-md">
                        With more than 19 Happy Clients, we are leading as trusted digital development partner.
                    </p>



                    {/* Contact Info */}
                    <div className="flex items-start gap-3">
                        <div>
                            <p className="text-sm text-gray-500">
                                "Every great project begins with a conversation.
                                <br />
                                Let&apos;s make it epic."
                            </p>
                        </div>
                    </div>
                    {/* CTA Button */}
                    <div className=" mt-8">
                        <CTAButton
                            href="/contact"
                            variant="ghost"
                            size="md"
                        >
                            START A PROJECT
                        </CTAButton>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard number="12+" label="PROJECTS COMPLETED" prefix="01" />
                <StatCard number="4.8/5" label="AVERAGE USER RATINGS" prefix="02" />
                <StatCard number="19" label="HAPPY CLIENTS" prefix="03" />
            </div>
        </section>

    )
}
