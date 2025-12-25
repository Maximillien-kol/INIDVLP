"use client"

import { useEffect, useRef, useState } from "react"
import { CTAButton } from "@/components/ui/cta-button"

export function HowProjectStartsSection() {
    const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
    const stepRefs = useRef<(HTMLDivElement | null)[]>([])

    const steps = [
        {
            number: "0 1",
            title: "Discovery & Planning",
            description: "We assess the client's goals, audience, and requirements to define the website structure and strategy."
        },
        {
            number: "02",
            title: "Design & Content",
            description: "We create visual designs and integrate content that aligns with the brand and user experience."
        },
        {
            number: "03",
            title: "Development & Testing",
            description: "Build the website, implement features, and test for functionality, responsiveness, and security."
        },
        {
            number: "04",
            title: "Launch & Support",
            description: "Deploy the website live, refine based on feedback, and provide ongoing maintenance."
        }
    ]

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        stepRefs.current.forEach((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setVisibleSteps((prev) => new Set(prev).add(index))
                            }
                        })
                    },
                    { threshold: 0.3 }
                )

                observer.observe(ref)
                observers.push(observer)
            }
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [])

    const blocks = ["01", "02", "03", "04"]

    return (
        <section id="approach-content" className="bg-gray-50 px-8 lg:px-16 py-20 mx-4 lg:mx-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
                {/* Left Column: Header and Illustration */}
                <div className="lg:col-span-2 lg:sticky lg:top-32">


                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1C1C1C] leading-tight mb-6">
                        Our Proven Process for Excellence
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
                        Our process is simple yet effective. Every project is different, but we've seen thousands of them since we first launched. Our experience is your asset.
                    </p>

                    {/* Illustration - Two circles with concentric rings */}
                    <div className="bg-white rounded-lg p-12 flex items-center justify-center">
                        <div className="flex gap-10">
                            {/* Left Circle with 3 concentric rings */}
                            <div className="relative w-40 h-40">
                                <div className="absolute inset-0 rounded-full border-2 border-gray-300 opacity-70"></div>
                                <div className="absolute inset-5 rounded-full border-2 border-gray-300 opacity-80"></div>
                                <div className="absolute inset-10 rounded-full border-2 border-[#1F7A5A]"></div>
                            </div>
                            {/* Right Circle with 3 concentric rings */}
                            <div className="relative w-40 h-40">
                                <div className="absolute inset-0 rounded-full border-2 border-gray-300 opacity-70"></div>
                                <div className="absolute inset-5 rounded-full border-2 border-gray-300 opacity-80"></div>
                                <div className="absolute inset-10 rounded-full border-2 border-[#1F7A5A]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Process Steps */}
                <div className="lg:col-span-3 space-y-16 md:space-y-20">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            ref={(el) => { stepRefs.current[index] = el }}
                            className={`flex gap-8 transition-all duration-700 ${visibleSteps.has(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                                }`}
                        >
                            {/* Step Number */}
                            <div className="flex-shrink-0">
                                <span className="text-9xl md:text-[10rem] font-light text-gray-200 leading-none">
                                    {step.number}
                                </span>
                            </div>

                            {/* Step Content */}
                            <div className="pt-3">
                                <h3 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-4 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-xl leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
