import Image from "next/image"
import { Code2, Database, Wrench } from "lucide-react"

interface SustainabilityItemProps {
    icon: React.ReactNode
    title: string
    description: string
}

function SustainabilityItem({ icon, title, description }: SustainabilityItemProps) {
    return (
        <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-[#E0E0E0]/50 flex items-center justify-center text-[#1F7A5A]">
                {icon}
            </div>
            <div>
                <h3 className="text-l font-semibold text-[#1C1C1C] mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export function WhatSustainableMeansSection() {
    return (
        <section className="relative py-20 px-8 lg:px-16 overflow-hidden">
            {/* Fixed Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url(/pic.jpg)' }}
            />
            {/* White Overlay */}
            <div className="absolute inset-0 bg-white/95" />

            {/* Content */}
            <div className="relative z-10">
                {/* Heading */}
                <div className="mb-16 max-w-3xl">
                    <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
                        WHAT SUSTAINABLE MEANS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] leading-tight mb-6">
                        What "Sustainable" Means in Our Work
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Sustainability is not a buzzword for us,
                        it's how we design, build, and maintain every digital system.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-12">
                        <SustainabilityItem
                            icon={<Code2 className="w-8 h-8" />}
                            title="IN CODE"
                            description="Every line we write is clean, organized, and maintainable, so updates and improvements are simple and safe."
                        />
                        <SustainabilityItem
                            icon={<Database className="w-8 h-8" />}
                            title="IN STRUCTURE"
                            description="Our websites and platforms are built to scale, allowing your business to grow without rebuilding from scratch."
                        />
                        <SustainabilityItem
                            icon={<Wrench className="w-8 h-8" />}
                            title="IN RESPONSIBILITY"
                            description="We take ownership of our work long after launch, ensuring your digital presence continues to perform reliably over time."
                        />
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative h-[500px] rounded-sm overflow-hidden">
                        <Image
                            src="/pic.jpg"
                            alt="Sustainable development"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
