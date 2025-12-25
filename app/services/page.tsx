import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HowProjectStartsSection } from "@/components/sections/how-project-starts-section"
import { ServicesHeroSection } from "@/components/sections/services-hero-section"
import { ServicesDetailSection } from "@/components/sections/services-detail-section"
import { CTASection } from "@/components/sections/cta-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateWebPageSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo-utils"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Our Services | Digital Development Solutions",
    description: "Comprehensive digital development services including institutional website development, custom web systems & platforms, digital strategy consulting, API integration, maintenance & support. Expert solutions for sustainable business growth and digital transformation.",
    keywords: [
        "web development services",
        "digital development services",
        "institutional website development",
        "custom web platforms",
        "web system development",
        "digital strategy consulting",
        "API integration services",
        "website maintenance",
        "web support services",
        "enterprise web development",
        "business website development",
        "digital transformation",
        "web application services",
        "custom integration solutions",
        "scalable web platforms",
        "professional web services",
    ],
    alternates: {
        canonical: `${siteConfig.url}/services`,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: `${siteConfig.url}/services`,
        title: "Our Services | INI Development - Digital Solutions & Development",
        description: "Expert digital development services: Institutional websites, custom web platforms, digital strategy, API integration, and comprehensive maintenance & support for businesses worldwide.",
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}/images/og-services.jpg`,
                width: 1200,
                height: 630,
                alt: "INI Development Services - Digital Development Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services | INI Development - Digital Solutions & Development",
        description: "Expert digital development services for sustainable business growth and digital transformation.",
        images: [`${siteConfig.url}/images/og-services.jpg`],
    },
}

export default function ServicesPage() {
    // Generate structured data for the page
    const webPageSchema = generateWebPageSchema({
        name: "Services - INI Development",
        description: "Comprehensive digital development services for businesses worldwide",
        url: `${siteConfig.url}/services`,
        dateModified: new Date().toISOString(),
    })

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
    ])

    // Service schemas for each service offering
    const servicesSchemas = [
        generateServiceSchema({
            name: "Institutional Website Development",
            description: "Professional institutional website development services with modern design and functionality",
            url: `${siteConfig.url}/services#institutional-websites`,
            serviceType: "Web Development",
            areaServed: "Worldwide",
        }),
        generateServiceSchema({
            name: "Web Systems & Platforms",
            description: "Custom web systems and platforms tailored to your business needs",
            url: `${siteConfig.url}/services#web-systems`,
            serviceType: "Platform Development",
            areaServed: "Worldwide",
        }),
        generateServiceSchema({
            name: "Digital Strategy",
            description: "Strategic digital consulting for business transformation and growth",
            url: `${siteConfig.url}/services#digital-strategy`,
            serviceType: "Consulting",
            areaServed: "Worldwide",
        }),
        generateServiceSchema({
            name: "Custom Integrations",
            description: "API integration and custom integration solutions for seamless workflows",
            url: `${siteConfig.url}/services#integrations`,
            serviceType: "Integration Services",
            areaServed: "Worldwide",
        }),
        generateServiceSchema({
            name: "Maintenance & Support",
            description: "Ongoing maintenance and technical support for your digital platforms",
            url: `${siteConfig.url}/services#maintenance`,
            serviceType: "Support Services",
            areaServed: "Worldwide",
        }),
    ]

    return (
        <main className="min-h-screen ">
            {/* Structured Data */}
            <StructuredData data={webPageSchema} />
            <StructuredData data={breadcrumbSchema} />
            {servicesSchemas.map((schema, index) => (
                <StructuredData key={index} data={schema} />
            ))}

            <Header variant="solid" />

            {/* Hero Section */}
            <ServicesHeroSection />

            {/* Services Detail Section */}
            <ServicesDetailSection />

            <HowProjectStartsSection />

            <CTASection />

            <Footer />
        </main>
    )
}
