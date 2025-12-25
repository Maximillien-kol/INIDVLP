import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhoWeAreSection } from "@/components/sections/aboutus/who-we-are-section"
import { AboutUsHeroSection } from "@/components/sections/aboutus/aboutus-hero-section"
import { VisionMissionSection } from "@/components/sections/aboutus/vision-mission-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { CTASection } from "@/components/sections/cta-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo-utils"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "About Us | Our Vision & Mission",
    description: "Learn about INI Development's vision, mission, and commitment to building sustainable digital solutions. We are a team of passionate developers dedicated to creating reliable, scalable web systems that drive long-term growth for SMEs and large organizations worldwide.",
    keywords: [
        "about INI Development",
        "web development company",
        "digital development team",
        "our mission",
        "our vision",
        "sustainable development",
        "reliable web solutions",
        "scalable web systems",
        "professional development team",
        "digital transformation experts",
        "web development expertise",
        "company values",
        "development philosophy",
    ],
    alternates: {
        canonical: `${siteConfig.url}/aboutus`,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: `${siteConfig.url}/aboutus`,
        title: "About Us | INI Development - Our Vision & Mission",
        description: "Discover INI Development's commitment to building sustainable, reliable digital solutions for businesses worldwide.",
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}/images/og-about.jpg`,
                width: 1200,
                height: 630,
                alt: "About INI Development - Our Vision & Mission",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | INI Development - Our Vision & Mission",
        description: "Discover INI Development's commitment to building sustainable, reliable digital solutions.",
        images: [`${siteConfig.url}/images/og-about.jpg`],
    },
}

export default function AboutUsPage() {
    const webPageSchema = generateWebPageSchema({
        name: "About Us - INI Development",
        description: "Learn about our vision, mission, and commitment to sustainable digital development",
        url: `${siteConfig.url}/aboutus`,
        dateModified: new Date().toISOString(),
    })

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "About Us", url: "/aboutus" },
    ])

    return (
        <main className="relative">
            <StructuredData data={webPageSchema} />
            <StructuredData data={breadcrumbSchema} />

            <Header variant="solid" />
            <WhoWeAreSection />
            <AboutUsHeroSection />
            <VisionMissionSection />
            <TestimonialSection />
            <CTASection />
            <Footer />
        </main>
    )
}
