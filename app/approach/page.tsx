import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ApproachHeroSection } from "@/components/sections/approach-hero-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { HowProjectStartsSection } from "@/components/sections/how-project-starts-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { CTASection } from "@/components/sections/cta-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo-utils"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Our Approach | How We Work",
    description: "Discover INI Development's proven approach to building sustainable, scalable digital solutions. Our methodology combines strategic planning, agile development, expert implementation, and continuous support to deliver exceptional results. Learn how we transform your vision into reality through collaboration, innovation, and excellence.",
    keywords: [
        "development approach",
        "our methodology",
        "how we work",
        "web development process",
        "digital development methodology",
        "agile development",
        "project management",
        "strategic planning",
        "implementation process",
        "development workflow",
        "sustainable development approach",
        "collaborative development",
        "quality assurance process",
        "continuous support",
        "project delivery",
    ],
    alternates: {
        canonical: `${siteConfig.url}/approach`,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: `${siteConfig.url}/approach`,
        title: "Our Approach | INI Development - How We Work",
        description: "Explore our proven methodology for building sustainable digital solutions through strategic planning and expert implementation.",
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}/images/og-approach.jpg`,
                width: 1200,
                height: 630,
                alt: "INI Development Approach - How We Work",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Approach | INI Development - How We Work",
        description: "Explore our proven methodology for building sustainable digital solutions.",
        images: [`${siteConfig.url}/images/og-approach.jpg`],
    },
}

export default function ApproachPage() {
    const webPageSchema = generateWebPageSchema({
        name: "Our Approach - INI Development",
        description: "Our proven methodology for building sustainable, scalable digital solutions",
        url: `${siteConfig.url}/approach`,
        dateModified: new Date().toISOString(),
    })

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Approach", url: "/approach" },
    ])

    return (
        <main className="relative">
            <StructuredData data={webPageSchema} />
            <StructuredData data={breadcrumbSchema} />

            <Header variant="solid" />
            <ApproachHeroSection />
            <HowProjectStartsSection />
            <ApproachSection />
            <TestimonialSection />
            <CTASection />
            <Footer />
        </main>
    )
}
