"use client"

import { CTAButton } from "@/components/ui/cta-button"
import Image from "next/image"

export function WhoWeAreSection() {
    return (
        <section className="px-8 lg:px-16 py-20 bg-gray-50 mx-4 lg:mx-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-6">
                    {/* Label */}
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                        but who we are
                    </p>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1C] leading-tight">
                        We are Digital Development Partner.
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We combine strategy, creativity,
                        and technology to deliver websites and systems designed for long-term success.
                        We focus on clarity, reliability, and growth, helping your organization thrive today and in the future.
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <CTAButton
                            href="/approach"
                            variant="secondary"
                            size="md"
                        >
                            LEARN MORE
                        </CTAButton>
                    </div>
                </div>

                {/* Right Column: Image with Floating Elements */}
                <div className="relative">
                    <div className="relative w-full aspect-[4/3] h-[700px] rounded-2xl overflow-hidden">
                        <Image
                            src="/who-we-are-hero.png"
                            alt="Professional team member showcasing our expertise in growth, cybersecurity, and infrastructure management"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
