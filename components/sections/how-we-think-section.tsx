import Image from "next/image"
import { Circle, Users, Leaf } from "lucide-react"

interface PrincipleCardProps {
    icon: React.ReactNode
    title: string
    description: string
    backgroundColor: string
    backgroundImage: string
}

function PrincipleCard({ icon, title, description, backgroundColor, backgroundImage }: PrincipleCardProps) {
    return (
        <div className="relative p-12 rounded-sm min-h-[700px] flex flex-col overflow-hidden">
            {/* Background Image */}
            <Image
                src={backgroundImage}
                alt={title}
                fill
                className="object-cover"
            />
            {/* Colored Overlay */}
            <div className="absolute inset-0" style={{ backgroundColor, opacity: 0.9 }} />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-white mb-12">{title}</h3>

                <div className="flex-1 flex items-center justify-center mb-12 text-white">
                    {icon}
                </div>

                <p className="text-white/80 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export function HowWeThinkSection() {
    return (
        <section className="py-20 px-8 lg:px-16 bg-gray-50">
            {/* Heading */}
            <div className="mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="max-w-xl">
                    <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
                        HOW WE THINK
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] leading-tight">
                        Our Principles in Action
                    </h2>
                </div>
                <div className="max-w-md">
                    <p className="text-gray-600 leading-relaxed">
                        We act on three principles to build enduring value, advancing sustainable industries,
                        empowering communities, and shaping a resilient future.
                    </p>
                </div>
            </div>

            {/* Three Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PrincipleCard
                    icon={
                        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="60" cy="60" r="40" />
                            <line x1="60" y1="20" x2="60" y2="100" />
                        </svg>
                    }
                    title="Plan Before Build"
                    description="We map out every requirement and decision before writing a single line of code, ensuring your system is structured for the long term."
                    backgroundColor="#1F7A5A"
                    backgroundImage="/1.jpg"
                />
                <PrincipleCard
                    icon={
                        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="50" cy="60" r="30" />
                            <circle cx="80" cy="60" r="30" strokeDasharray="4 4" />
                        </svg>
                    }
                    title="Design for Change"
                    description="Digital systems should evolve with your needs. Our approach anticipates updates, growth, and unexpected challenges."
                    backgroundColor="#1F7A5A"
                    backgroundImage="/2.jpg"
                />
                <PrincipleCard
                    icon={
                        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="60" cy="60" r="35" />
                            <path d="M 60 25 Q 75 35, 85 50" markerEnd="url(#arrowhead)" />
                            <path d="M 85 70 Q 75 85, 60 95" markerEnd="url(#arrowhead)" />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                                    <polygon points="0 0, 10 5, 0 10" fill="currentColor" />
                                </marker>
                            </defs>
                        </svg>
                    }
                    title="Maintain the Delivered"
                    description="We take responsibility for what we build, ensuring reliability, performance, and usability long after launch."
                    backgroundColor="#1F7A5A"
                    backgroundImage="/3.jpg"
                />
            </div>
        </section>
    )
}
