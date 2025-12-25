"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { CTAButton } from "@/components/ui/cta-button"

interface FeatureItemProps {
    text: string
}

function FeatureItem({ text }: FeatureItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 bg-[#1F7A5A] rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-white" strokeWidth={4} />
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
                {text}
            </p>
        </div>
    )
}

export function WhyChooseUsSection() {
    return (
        <section className="bg-white py-20 px-8 lg:px-16 mx-4 lg:mx-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column - Heading and Features */}
                <div className="lg:col-span-4 space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1C] leading-tight">
                        Discover the Perfect Blend of Digital & Development
                    </h2>

                    <div className="space-y-5">
                        <FeatureItem text="Certified and experienced developers" />
                        <FeatureItem text="Solutions for all business sizes" />
                        <FeatureItem text="A variety of development approaches" />
                        <FeatureItem text="Personal and team collaboration options" />
                    </div>
                </div>

                {/* Center Column - Large Image */}
                <div className="lg:col-span-4">
                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/pic.jpg"
                            alt="Development team collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Column - Small Image, Description and CTA */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="relative w-full aspect-video h-80 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/pic.jpg"
                            alt="Digital solutions"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex-grow flex flex-col justify-center">
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                            Our unique approach combines the flexibility and innovation of digital solutions with the energy and reliability of professional development practices.
                        </p>

                        <div>
                            <CTAButton
                                href="/contact"
                                variant="ghost"
                                size="md"
                            >
                                LEARN MORE
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
