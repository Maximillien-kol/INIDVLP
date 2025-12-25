import { Shield, Headphones, Trophy, Target } from "lucide-react"

interface ValueCardProps {
    icon: React.ReactNode
    title: string
    description: string
}

function ValueCard({ icon, title, description }: ValueCardProps) {
    return (
        <div className="bg-white p-8 min-h-[280px] flex flex-col">
            <div className="text-[#1F7A5A] mb-6">
                {icon}
            </div>
            <h3 className="text-sm font-semibold text-[#1C1C1C] uppercase tracking-wide mb-4">
                {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export function WhoThisIsForSection() {
    return (
        <section className="py-20 px-8 lg:px-16 bg-gray-50">
            {/* Heading */}
            <div className="mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="max-w-xl">
                    <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
                        WHO THIS IS FOR
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] leading-tight">
                        Built for Teams Who Need Reliability
                    </h2>
                </div>
                <div className="max-w-md">
                    <p className="text-gray-600 leading-relaxed">
                        We partner with SMEs and larger organizations that need digital systems to support
                        growth, for value stability, clarity, and scalability,
                    </p>
                </div>
            </div>

            {/* Four Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ValueCard
                    icon={<Shield className="w-10 h-10" />}
                    title="GROWING COMPANIES"
                    description="That are scaling and need systems that can handle increased demand without breaking or requiring constant workarounds."
                />
                <ValueCard
                    icon={<Headphones className="w-10 h-10" />}
                    title="TEAMS WITH TECHNICAL DEBT"
                    description="Leaders who want guidance, collaboration, and a web partner invested in their success not like a vendor."
                />
                <ValueCard
                    icon={<Trophy className="w-10 h-10" />}
                    title="NON-PROFITS & INSTITUTIONS"
                    description="Digital systems that support mission-driven organizations with stability and long-term usability."
                />
                <ValueCard
                    icon={<Target className="w-10 h-10" />}
                    title="LARGE ORGANIZATIONS"
                    description="Structured, maintainable platforms designed for complex operations and multiple teams."
                />
            </div>
        </section>
    )
}
