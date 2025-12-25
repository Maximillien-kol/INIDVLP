import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CTAButton } from "@/components/ui/cta-button"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/seo-config"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Explore our portfolio of web development projects. Discover how we've helped businesses in Rwanda and beyond build powerful digital solutions.",
    keywords: [
        "web development portfolio Rwanda",
        "Kigali web projects",
        "portfolio INI Development",
        "Rwanda web design examples",
        "case studies web development",
        "our projects",
    ],
    alternates: {
        canonical: `${siteConfig.url}/portfolio`,
    },
}

const projects = [
    {
        id: 1,
        title: "INI Opportunity Platform",
        category: "Web Platform",
        description: "A comprehensive job platform connecting talent with opportunities across Rwanda and beyond. Discover thousands of job openings and find your dream career with Rwanda's leading opportunity marketplace.",
        image: "/projects/INI%20Opportunity.png",
        tags: ["Go Lang", "Microservices", "Platform Development"],
        link: "https://opportunity.ini.rw/",
    },
    {
        id: 2,
        title: "Agriculture INI Solution",
        category: "Agriculture Platform",
        description: "Modernized agriculture for all. A comprehensive platform providing farmers with access to crop information, agricultural resources, and modern farming techniques to boost productivity across Rwanda.",
        image: "/projects/INI%20Agriculture.png",
        tags: ["Java", "Database", "Agriculture"],
        link: "https://agriculture.ini.rw/",
    },
]

export default function PortfolioPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header variant="solid" />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gray-50 px-8 lg:px-16 pt-32 pb-16 mx-4 lg:mx-[100px]">
                    <div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Heading */}
                            <div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1C1C1C] leading-tight mb-6">
                                    Explore Our Work and{" "}
                                    <span className="relative">
                                        Creative Projects
                                    </span>
                                </h1>
                            </div>

                            {/* Right: Description and CTA */}
                            <div className="space-y-6">
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Showcasing our visionary web development creations that inspire growth and digital transformation for businesses across Rwanda.
                                </p>
                                <CTAButton
                                    href="#projects"
                                    variant="ghost"
                                    size="md"
                                >
                                    EXPLORE NOW
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Project Image */}
                <section className="w-full">
                    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
                        <Image
                            src="/images/hero-bg.jpg"
                            alt="Featured project showcase"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="px-8 lg:px-16 py-24 mx-4 lg:mx-[100px]">
                    <div>
                        {/* Section Header */}
                        <div className="flex justify-between items-start mb-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-semibold text-[#1C1C1C] mb-2">
                                    All Project That
                                    <br />
                                    We've Done
                                </h2>
                            </div>
                            <Link href="/services" className="text-sm text-gray-600 hover:text-[#1C1C1C] transition-colors">
                                See all categories
                            </Link>
                        </div>

                        {/* Projects List - Alternating Layout */}
                        <div className="space-y-32">
                            {projects.map((project, index) => (
                                <ProjectRow key={project.id} project={project} reverse={index % 2 === 1} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

// Project Row Component - Alternating Layout
function ProjectRow({ project, reverse = false }: { project: typeof projects[0]; reverse?: boolean }) {
    return (
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
            {/* Text Content */}
            <div className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}>
                <div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#1C1C1C] mb-4">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {project.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <div>
                    <CTAButton
                        href={project.link}
                        variant="ghost"
                        size="md"
                        icon={ArrowUpRight}
                        external
                    >
                        Read More
                    </CTAButton>
                </div>
            </div>

            {/* Project Image */}
            <div className={`relative ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
