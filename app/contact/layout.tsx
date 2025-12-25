import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Contact Us | Get In Touch",
    description: "Get in touch with INI Development for web development services, digital solutions, project inquiries, collaborations, or career opportunities. Contact us for general inquiries, partnerships, and consultations. We're here to help transform your digital vision into reality.",
    keywords: [
        "contact INI Development",
        "web development inquiry",
        "digital development contact",
        "get in touch",
        "project inquiry",
        "web development consultation",
        "digital solutions contact",
        "partnership inquiry",
        "collaborate with us",
        "career opportunities",
        "web development services inquiry",
        "digital transformation consultation",
        "business inquiry",
        "contact web developers",
    ],
    alternates: {
        canonical: `${siteConfig.url}/contact`,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: `${siteConfig.url}/contact`,
        title: "Contact Us | INI Development",
        description: "Get in touch with our team for web development services, project inquiries, or partnerships.",
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}/images/og-contact.jpg`,
                width: 1200,
                height: 630,
                alt: "Contact INI Development",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | INI Development",
        description: "Get in touch with our team for web development services and digital solutions.",
        images: [`${siteConfig.url}/images/og-contact.jpg`],
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
