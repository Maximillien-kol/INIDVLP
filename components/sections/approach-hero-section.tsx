"use client"

import { CTAButton } from "@/components/ui/cta-button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function ApproachHeroSection() {
    const scrollToContent = () => {
        const section = document.querySelector('#approach-content')
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative  flex flex-col">
            {/* Top Content Section */}
            <div className="flex-1 flex items-center px-8 lg:px-16 py-15 bg-white mx-4 lg:mx-[100px]">
                <div className="w-full max-w-6xl">
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#1C1C1C] leading-tight mb-8">
                        How We Turn<br />
                        Ideas Into Impact
                    </h1>

                    {/* Description and CTA Row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-12">
                        <p className="text-lg md:text-xl text-gray-600 max-w-md">
                            Every project follows a clear, thoughtful process to ensure your vision becomes a functional, scalable, and engaging digital solution
                        </p>

                        <CTAButton
                            asButton
                            onClick={scrollToContent}
                            variant="ghost"
                            size="md"
                        >
                            LEARN MORE
                        </CTAButton>
                    </div>
                </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                <Image
                    src="/12.jpg"
                    alt="Our approach to digital development - strategic planning and innovation"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}
