"use client"

import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"

export function ServicesHeroSection() {
    return (
        <section className=" px-8 lg:px-16 pt-32 pb-20 mx-4 lg:mx-[100px]">


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                {/* Left: Heading */}
                <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1C1C] leading-tight">
                        Powering Progress Through Technology
                    </h1>
                </div>

                {/* Right: Description and CTA */}
                <div className="flex flex-col justify-center space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We provide innovative, secure, and scalable IT services that solve real problems and drive measurable results.
                    </p>
                    <div>
                        <CTAButton
                            href="/contact"
                            variant="secondary"
                            size="md"
                            className=""
                        >
                            CONTACT US
                        </CTAButton>
                    </div>
                </div>
            </div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Image Card */}
                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                    <Image
                        src="/pic.jpg"
                        alt="Team collaboration"
                        fill

                        className="object-cover"
                    />
                </div>

                {/* Center Stats Card */}
                <div className="bg-[#C4E9C5] rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                        <p className="text-lg text-gray-700 mb-4">
                            Satisfied Customers
                        </p>
                        <p className="text-6xl font-light text-[#1C1C1C] mb-6">
                            200k+
                        </p>
                    </div>

                    {/* Avatar Group */}
                    <div className="flex items-center -space-x-3">
                        <div className="w-15 h-15 rounded-full border-2 border-white overflow-hidden relative">
                            <Image
                                src="/avatars/2.jpg"
                                alt="Customer"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-15 h-15 rounded-full border-2 border-white overflow-hidden relative">
                            <Image
                                src="/avatars/1.png"
                                alt="Customer"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-15 h-15 rounded-full border-2 border-white overflow-hidden relative">
                            <Image
                                src="/avatars/3.jpg"
                                alt="Customer"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-15 h-15 rounded-full border-2 border-white overflow-hidden relative">
                            <Image
                                src="/avatars/4.jpg"
                                alt="Customer"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Image Card */}
                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                    <Image
                        src="/pic.jpg"
                        alt="Business meeting"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
