"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"

interface ServiceItemProps {
    title: string
    description: string
    isOpen: boolean
    onToggle: () => void
}

function ServiceItem({ title, description, isOpen, onToggle }: ServiceItemProps) {
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between text-left group"
            >
                <h3 className="text-2xl md:text-3xl font-light text-[#1C1C1C] group-hover:text-gray-600 transition-colors duration-300">
                    {title}
                </h3>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? (
                        <Minus className="w-6 h-6 text-[#1C1C1C]" />
                    ) : (
                        <Plus className="w-6 h-6 text-[#1C1C1C]" />
                    )}
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-gray-600 leading-relaxed max-w-md pr-8">
                    {description}
                </p>
            </div>
        </div>
    )
}

export function OurServicesSection() {
    const [openIndex, setOpenIndex] = useState<number>(0)

    const services = [
        {
            title: "Consulting & Strategy",
            description: "Expert technology consulting and digital transformation guidance. We help you make informed decisions about your tech stack, architecture, and development roadmap to align technology with your business goals."
        },
        {
            title: "Software Solutions",
            description: "Custom software development tailored to your unique business needs. From web applications to enterprise systems, we build scalable, secure, and performant solutions that drive efficiency and growth."
        },
        {
            title: "Cloud Services",
            description: "Cloud infrastructure setup, migration, and management. We leverage AWS, Azure, and Google Cloud to ensure your applications are reliable, scalable, and cost-effective while optimizing performance and reducing operational costs."
        },
        {
            title: "IT Security",
            description: "Comprehensive cybersecurity solutions to protect your digital assets. We implement robust security measures, conduct vulnerability assessments, and ensure compliance with industry standards to safeguard your business."
        },
        {
            title: "Data Centers",
            description: "Enterprise-grade data center solutions including infrastructure design, implementation, and ongoing management. We ensure high availability, disaster recovery, and optimal performance for your critical systems."
        }
    ]

    return (
        <section className="py-20 px-8 lg:px-16 bg-[#FAF9F6] mx-4 lg:mx-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column - Services List */}
                <div>
                    {/* Small Header */}
                    <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">
                        OUR DIGITAL EXPERTISE
                    </p>

                    {/* Services Accordion */}
                    <div>
                        {services.map((service, index) => (
                            <ServiceItem
                                key={index}
                                title={service.title}
                                description={service.description}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative h-[600px] rounded-lg overflow-hidden sticky top-24">
                    <Image
                        src="/pic.jpg"
                        alt="Our services"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
