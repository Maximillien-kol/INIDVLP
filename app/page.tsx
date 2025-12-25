import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutUsSection } from "@/components/sections/about-us-section"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { OurServicesSection } from "@/components/sections/our-services-section"
import { HowProjectStartsSection } from "@/components/sections/how-project-starts-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { CTASection } from "@/components/sections/cta-section"
import { StructuredData } from "@/components/seo/structured-data"
import { generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo-utils"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Home | INI Development - Sustainable Digital Development Partner",
  description: "INI Development: Your trusted partner for sustainable digital development. We build reliable, scalable web systems, digital platforms, and custom solutions for SMEs and large organizations worldwide. Expert web development services focused on long-term growth, performance optimization, and maintainability.",
  keywords: [
    "web development company",
    "digital development partner",
    "custom web development",
    "enterprise web solutions",
    "sustainable web development",
    "scalable web systems",
    "digital transformation services",
    "web application development",
    "business web solutions",
    "professional web development",
    "SME web development",
    "corporate web solutions",
    "web development agency",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Home | INI Development - Sustainable Digital Development Partner",
    description: "Leading digital development partner building reliable, scalable web systems for businesses worldwide. Expert web development, digital strategy, and custom solutions.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "INI Development - Sustainable Digital Development Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | INI Development - Sustainable Digital Development Partner",
    description: "Leading digital development partner building reliable, scalable web systems for businesses worldwide.",
    images: [`${siteConfig.url}/images/og-home.jpg`],
  },
}

export default function Home() {
  const webPageSchema = generateWebPageSchema({
    name: "Home - INI Development",
    description: "Leading digital development partner building reliable, scalable web systems for businesses worldwide.",
    url: siteConfig.url,
    datePublished: "2020-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ])

  return (
    <main className="relative">
      <StructuredData data={webPageSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Header />
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <OurServicesSection />
      <HowProjectStartsSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  )
}
