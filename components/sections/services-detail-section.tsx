"use client"

import { CTAButton } from "@/components/ui/cta-button"
import { ArrowUpRight, Cloud, Shield, Code, BarChart3, Laptop, Server } from "lucide-react"

interface ServiceDetailCardProps {
    icon: React.ReactNode
    title: string
    description: string
    href: string
}

function ServiceDetailCard({ icon, title, description, href }: ServiceDetailCardProps) {
    return (
        <div className="bg-white rounded-2xl p-8 transition-shadow">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-[#a8c9a8] flex items-center justify-center mb-6 text-white">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-normal text-[#1C1C1C] mb-4">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
                {description}
            </p>

            {/* Read More Button */}
            <CTAButton
                href={href}
                variant="secondary"
                size="sm"
                icon={ArrowUpRight}
            >
                Read More
            </CTAButton>
        </div>
    )
}

export function ServicesDetailSection() {
    const services = [
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Consulting & Strategy",
            description: "Strategic guidance to align your technology stack with long-term business objectives, ensuring agility and growth through expert consulting.",
            href: "/services/consulting"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Software Solutions",
            description: "Custom software development tailored to your business needs. We build scalable, efficient applications that drive innovation and productivity.",
            href: "/services/software-solutions"
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud Services",
            description: "Comprehensive cloud solutions including migration, deployment, and management. We help you leverage the power of cloud infrastructure.",
            href: "/services/cloud-services"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "IT Security",
            description: "Protect your digital assets with advanced cybersecurity solutions. We identify vulnerabilities and implement robust security measures.",
            href: "/services/it-security"
        },
        {
            icon: <Server className="w-8 h-8" />,
            title: "Data Centers",
            description: "Reliable data center solutions with high-performance infrastructure. We ensure your data is secure, accessible, and optimally managed.",
            href: "/services/data-centers"
        },
    ]

    return (
        <section className=" px-8 lg:px-16 py-20 mx-4 lg:mx-[100px]">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Left: Label and Heading */}
                <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                        Our Service
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1C1C] leading-tight">
                        Comprehensive Solutions, All in One Place
                    </h2>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Green Background Text Card */}
                <div className="bg-[#C4E9C5] rounded-2xl p-8 flex items-center justify-center">
                    <p className="text-xl md:text-2xl font-light text-[#1C1C1C] leading-relaxed text-center">
                        From cloud infrastructure and cybersecurity to custom software and IT consulting, we deliver end-to-end technology services tailored to your business needs.
                    </p>
                </div>

                {services.map((service, index) => (
                    <ServiceDetailCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        href={service.href}
                    />
                ))}
            </div>
        </section>
    )
}
