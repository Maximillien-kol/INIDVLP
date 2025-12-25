/**
 * SEO Configuration - Centralized SEO settings for Wikipedia-level optimization
 * This configuration ensures maximum discoverability and ranking potential
 */

export const siteConfig = {
    name: "INI Development",
    title: "INI Development | Sustainable Digital Development Partner",
    description:
        "INI Development builds reliable, scalable web systems for SMEs and large organizations. Expert digital solutions focused on long-term growth, performance, and maintainability. Custom web development, digital strategy, and system integration services.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.inidevelopment.com",
    ogImage: "/images/og-image.jpg",
    keywords: [
        // Rwanda-specific high-priority keywords
        "web development Rwanda",
        "web design Rwanda",
        "website development Kigali",
        "web design Kigali",
        "software development Kigali",
        "IT solutions Rwanda",
        "digital marketing Rwanda",
        "mobile app development Rwanda",
        "e-commerce website Rwanda",
        "custom software development Kigali",
        "SEO Rwanda",
        "SEO Kigali",
        // Location-specific
        "Nyarugenge web development",
        "Kigali tech companies",
        "Rwanda web developers",
        "local business website Rwanda",
        "affordable website Kigali",
        "professional web design Rwanda",
        // Service-specific
        "WordPress development Rwanda",
        "responsive design Rwanda",
        "UI/UX design Kigali",
        "IT consulting Rwanda",
        "web hosting Rwanda",
        "digital solutions Rwanda",
        "cloud services Rwanda",
        // Business-focused
        "SME website Rwanda",
        "startup web development Kigali",
        "business website Rwanda",
        "corporate website Kigali",
        "enterprise software Rwanda",
        "online presence Rwanda",
        "digital transformation Rwanda",
        "custom web solutions Rwanda",
        "web application development Kigali",
    ],
    authors: [
        {
            name: "INI Development Team",
            url: "https://www.inidevelopment.com",
        },
    ],
    creator: "INI Development",
    publisher: "INI Development",
    company: {
        name: "INI Development",
        legalName: "INI Development Ltd",
        description:
            "Leading digital development partner specializing in sustainable, scalable web solutions for businesses worldwide.",
        foundingDate: "2025",
        email: "contact@ini.rw",
        phone: "+250 793 639 813 ",
        address: {
            streetAddress: "Kigali, Rwanda",
            addressLocality: "Kigali",
            addressRegion: "Nyarugenge district",
            addressCountry: "RW",
        },
        sameAs: [
            "https://www.linkedin.com/company/ini-development"
        ],
    },
    social: {
        linkedin: "https://www.linkedin.com/company/ini-development",
    },
}

export type SiteConfig = typeof siteConfig
