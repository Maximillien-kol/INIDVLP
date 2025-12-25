import { AlertCircle, TrendingDown, Clock } from "lucide-react"

interface ProblemCardProps {
    icon: React.ReactNode
    title: string
    description: string
}

function ProblemCard({ icon, title, description }: ProblemCardProps) {
    return (
        <div className="space-y-4">
            <div className="text-primary">{icon}</div>
            <h3 className="text-xl font-semibold text-[#1C1C1C]">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}

export function RealProblemSection() {
    return (
        <section className="py-20 px-8 lg:px-16 bg-white">
            {/* Heading */}
            <div className="mb-16 max-w-3xl">

                <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
                    THE REAL PROBLEMS
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] leading-tight mb-6">
                    Most Digital Projects Fail Before They Even Start.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Businesses invest heavily in technology, yet struggle with systems that don't scale,
                    processes that don't align, and solutions that can't adapt to growth.
                </p>
            </div>

            {/* Three Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <ProblemCard
                    icon={<TrendingDown className="w-8 h-8" />}
                    title="Fragmented Systems"
                    description="Disconnected tools and platforms create data silos, inefficiencies, and frustration across your organization, making growth harder than it should be."
                />
                <ProblemCard
                    icon={<Clock className="w-8 h-8" />}
                    title="Short-Term Thinking"
                    description="Quick fixes and rushed implementations lead to technical debt that becomes costly to maintain and impossible to scale as your business evolves."
                />
                <ProblemCard
                    icon={<AlertCircle className="w-8 h-8" />}
                    title="Misaligned Solutions"
                    description="Generic platforms that don't fit your workflow force you to adapt your business to the software, not the other way around."
                />
            </div>
        </section>
    )
}
